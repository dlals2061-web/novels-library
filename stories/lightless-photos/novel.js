const SAVE_KEY = "lightless-photos-save-v1";
const story = window.STORY;
const chapterCache = new Map();
const traitLimits = {
  jaehoTrust: [-3, 3],
  yeojinTrust: [0, 3],
  evidenceDiscipline: [0, 3],
  sharedDecision: [0, 3],
  dojinSuspicion: [0, 2],
};

const clone = (value) => JSON.parse(JSON.stringify(value));
const initialState = () => ({
  saveVersion: 1,
  sceneId: story.initialSceneId,
  flags: [],
  introducedCharacters: clone(story.initialIntroducedCharacters),
  traits: clone(story.initialTraits),
  memory: [],
  lastChoice: null,
});

let state = loadState();
let activeTab = "story";
let deferredInstallPrompt = null;

const elements = {
  chapter: document.querySelector("#chapterLabel"),
  thread: document.querySelector("#threadLabel"),
  title: document.querySelector("#sceneTitle"),
  story: document.querySelector("#storyText"),
  choices: document.querySelector("#choices"),
  echo: document.querySelector("#choiceEcho"),
  restart: document.querySelector("#restartButton"),
  install: document.querySelector("#installButton"),
  installDialog: document.querySelector("#installDialog"),
  closeInstallDialog: document.querySelector("#closeInstallDialog"),
  tabs: [...document.querySelectorAll(".tab")],
  storyPanel: document.querySelector("#storyPanel"),
  relationshipsPanel: document.querySelector("#relationshipsPanel"),
  relationshipList: document.querySelector("#relationshipList"),
  memoryPanel: document.querySelector("#memoryPanel"),
  memoryList: document.querySelector("#memoryList"),
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!saved || !story.scenes[saved.sceneId]) return initialState();
    return {
      ...initialState(),
      ...saved,
      flags: [...new Set(saved.flags ?? [])],
      introducedCharacters: [...new Set([...(story.initialIntroducedCharacters ?? []), ...(saved.introducedCharacters ?? [])])],
      traits: { ...story.initialTraits, ...(saved.traits ?? {}) },
      memory: Array.isArray(saved.memory) ? saved.memory : [],
    };
  } catch {
    return initialState();
  }
}

function saveState() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({ ...state, saveVersion: 1 }));
  } catch {
    // 저장이 막혀도 독서는 중단하지 않는다.
  }
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clampTrait(id, value) {
  const [min, max] = traitLimits[id] ?? [-10, 10];
  return Math.max(min, Math.min(max, value));
}

function addFlags(flags = []) {
  flags.forEach((flag) => {
    if (flag && !state.flags.includes(flag)) state.flags.push(flag);
  });
}

function revealCharacters(ids = []) {
  ids.forEach((id) => {
    if (!state.introducedCharacters.includes(id)) state.introducedCharacters.push(id);
  });
}

function hasFlags(flags = []) {
  return flags.every((flag) => state.flags.includes(flag));
}

function choiceIsVisible(choice) {
  if (choice.requireFlags && !hasFlags(choice.requireFlags)) return false;
  if (choice.blockedBy?.some((flag) => state.flags.includes(flag))) return false;
  return true;
}

function applyChoice(choice) {
  addFlags(choice.flags);
  Object.entries(choice.effects?.traits ?? {}).forEach(([id, amount]) => {
    state.traits[id] = clampTrait(id, (state.traits[id] ?? 0) + amount);
  });
  state.memory.push({
    chapter: story.scenes[state.sceneId].chapter,
    title: choice.text,
    detail: choice.subtext,
  });
  state.lastChoice = choice.text;
  state.sceneId = choice.next;
  saveState();
  activeTab = "story";
  render().then(scrollToTop);
}

function continueStory(scene) {
  applyChoice({
    text: "다음 장으로",
    subtext: "",
    next: scene.continue ?? nextSceneId(state.sceneId),
    flags: [],
    effects: { traits: {} },
  });
}

function nextSceneId(sceneId) {
  const ids = Object.keys(story.scenes);
  return ids[ids.indexOf(sceneId) + 1] ?? "ending";
}

async function getChapterText(file) {
  if (chapterCache.has(file)) return chapterCache.get(file);
  const response = await fetch(`./chapters/${file}`);
  if (!response.ok) throw new Error(`본문을 불러오지 못했습니다: ${file}`);
  const text = await response.text();
  chapterCache.set(file, text);
  return text;
}

function markdownToParagraphs(markdown) {
  const body = markdown
    .replace(/^# .+\n/m, "")
    .replace(/^## .+\n/m, "")
    .trim();
  return body
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph.replaceAll("\n", " "))}</p>`)
    .join("");
}

function renderIntro(scene) {
  const lines = (scene.intro ?? [])
    .filter((variant) => hasFlags(variant.flags))
    .map((variant) => variant.text);
  return lines.map((line) => `<p class="conditional-text">${escapeHtml(line)}</p>`).join("");
}

function endingScene() {
  const { jaehoTrust, evidenceDiscipline, sharedDecision } = state.traits;
  const recordAfterword = state.flags.includes("endingAlone")
    ? "서린은 원본 봉투를 현상소 금고 맨 아래 칸에 넣었다. 혼자 지키겠다는 뜻이 아니라, 아직 누구에게 어떤 방식으로 맡길지 결정하지 못했다는 표시였다. 봉투 바깥에는 확인된 날짜만 적혔다."
    : state.flags.includes("endingOfficial")
      ? "복원 전 기록은 수사관과 여진에게 같은 날 전달됐다. 서린은 보내기 전에 파일을 세 번 확인했지만, 그 안에 없는 답을 덧붙이지는 않았다. 기록이 여러 사람에게 간다고 해서 상실이 가벼워지는 것은 아니었다."
      : "서린은 파일의 첫 장에 확인된 사실과 기억을 나누어 적었다. 재호의 기억은 그의 이름으로, 여진의 관찰은 여진의 이름으로 남겼다. 누구의 문장도 다른 사람의 빈칸을 대신하지 않게 하기 위해서였다.";
  if (sharedDecision <= 1 && jaehoTrust <= -1) {
    return {
      title: "혼자 남긴 기록",
      label: "결말",
      text: [
        "서린은 해윤의 파일을 사실과 추정으로 나누어 보관했다. 재호의 진술은 별도의 기록으로 수사에 남았고, 두 사람은 서로에게 그 기록을 설명하지 않았다.",
        "현상소는 제한된 시간에만 문을 열었다. 서린은 손님에게 복원할 수 있는 부분과 없는 부분을 먼저 말했고, 그 원칙을 자기 삶에도 완전히 적용하지는 못한 채 배워 갔다.",
        "같은 사진을 다시 보는 일은 끝내 선택하지 않았다. 빈칸은 여전히 남았지만, 이번에는 누구의 말로도 그 빈칸을 대신 채우지 않았다.",
        recordAfterword,
      ],
    };
  }
  if (evidenceDiscipline <= 1 || !state.flags.includes("jaehoStatementFull")) {
    return {
      title: "미완의 복원",
      label: "결말",
      text: [
        "재수사는 계속됐지만, 어떤 기록은 끝내 완전해지지 않았다. 사진의 그림자는 확대할수록 선명해지는 대신, 더 많은 것을 만들어 낼 위험도 함께 커졌다.",
        "서린은 파일명 끝에 ‘확인할 수 없음’이라고 적었다. 재호는 그 문장을 지우지 않았고, 둘은 같은 침묵 속에서도 서로의 설명을 대신 쓰지 않으려 애썼다.",
        "완성되지 않은 기록은 실패가 아니라, 아직 모르는 것을 인정하는 방식으로 남았다.",
        recordAfterword,
      ],
    };
  }
  if (evidenceDiscipline >= 2 && jaehoTrust >= 1 && state.flags.includes("statedBoundary")) {
    return {
      title: "열린 대화",
      label: "결말",
      text: [
        "다음 검토의 날, 재호는 약속 시간보다 일찍 왔지만 맞은편에 머물렀다. 마음이 바뀌면 돌아가겠다는 말을, 이번에는 행동으로 먼저 지켰다.",
        "두 사람은 복원 전 기록의 수정 목록을 앞에 두고, 재호의 기억을 별도 항목으로 적었다. 둘 다 빈칸을 줄이고 싶었지만, 빈칸을 서로의 말로 메우지는 않았다.",
        "작업을 마친 뒤에도 서린은 함께 돌아가자는 말을 하지 않았다. 다만 다음 기록을 검토할 시간은 자신이 정해 다시 알려 주겠다고 말했다.",
        recordAfterword,
      ],
    };
  }
  return {
    title: "기록의 거리",
    label: "결말",
    text: [
      "서린은 현상소를 제한적으로 다시 열었다. 해윤의 필름은 여진과 수사관이 함께 확인하는 기록으로 남았고, 재호는 그 자리에 서린이 허락한 때에만 왔다.",
        "그들은 가까워지기보다 먼저, 서로의 거리를 잘못 읽지 않는 법을 배웠다. 그것이 관계를 되돌린다는 뜻은 아니었다.",
        "창문 틈의 바람이 바닥의 먼지를 움직였다. 서린은 이번에는 어느 쪽으로 날아가는지 바로 판단하지 않았다.",
        recordAfterword,
    ],
  };
}

function scrollToTop() {
  elements.title.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

async function renderStory() {
  const scene = story.scenes[state.sceneId] ?? story.scenes[story.initialSceneId];
  revealCharacters(scene.reveals);
  saveState();

  if (scene.ending) {
    const ending = endingScene();
    elements.chapter.textContent = ending.label;
    elements.thread.textContent = "남은 빛";
    elements.title.textContent = ending.title;
    elements.story.innerHTML = `<img class="ending-art" src="../../art/lightless-photos-ending.webp" alt="" width="800" height="600" decoding="async" /><p class="ending-label">${ending.label}</p><p class="ending-context">이 결말은 관계의 회복이나 재결합을 뜻하지 않습니다. 서린이 정한 경계와 기록 방식의 결과입니다.</p>${ending.text.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}`;
    elements.choices.innerHTML = "";
    return;
  }

  elements.chapter.textContent = scene.chapter;
  elements.thread.textContent = scene.thread;
  elements.title.textContent = scene.title;
  elements.story.innerHTML = "<p class=\"loading\">본문을 불러오는 중입니다.</p>";
  elements.choices.innerHTML = "";

  if (scene.text) {
    elements.story.innerHTML = `${renderIntro(scene)}${scene.text.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}`;
    renderChoices(scene);
    return;
  }

  try {
    const body = await getChapterText(scene.file);
    if (scene !== story.scenes[state.sceneId]) return;
    elements.story.innerHTML = `${renderIntro(scene)}${markdownToParagraphs(body)}`;
    renderChoices(scene);
  } catch (error) {
    elements.story.innerHTML = `<p>본문을 불러오지 못했습니다. 인터넷 연결을 확인한 뒤 다시 열어 주세요.</p><p class="error-detail">${escapeHtml(error.message)}</p>`;
  }
}

function renderChoices(scene) {
  const choices = (scene.choices ?? []).filter(choiceIsVisible);
  if (!choices.length) {
    if (scene.continue || nextSceneId(state.sceneId) !== "ending") {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice continue-choice";
      button.textContent = "다음 장으로";
      button.addEventListener("click", () => continueStory(scene));
      elements.choices.replaceChildren(button);
    }
    return;
  }

  elements.choices.innerHTML = "";
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.innerHTML = `${escapeHtml(choice.text)}<small>${escapeHtml(choice.subtext)}</small>`;
    button.addEventListener("click", () => applyChoice(choice));
    elements.choices.append(button);
  });
}

function stageSummary(character) {
  const matched = (character.stages ?? []).filter((stage) => hasFlags(stage.flags)).at(-1);
  return matched?.summary ?? character.note;
}

function relationshipTone(id) {
  if (id === "jaeho") {
    if ((state.traits.jaehoTrust ?? 0) <= -1) return "서린은 재호의 침묵을 다시 믿기 어렵다고 느낍니다.";
    if ((state.traits.jaehoTrust ?? 0) >= 1) return "대화의 가능성은 남아 있지만, 책임과 용서는 다른 일입니다.";
  }
  if (id === "yeojin") {
    return (state.traits.yeojinTrust ?? 0) >= 1
      ? "여진은 서린의 판단을 대신하지 않고, 확인할 자리에 함께 남아 있습니다."
      : "여진은 아직 모든 사정을 알지 못하지만, 서린의 부재를 혼자 감당하지 않습니다.";
  }
  if (id === "dojin") {
    return (state.traits.dojinSuspicion ?? 0) >= 1
      ? "도진의 말에는 사실보다 먼저, 책임을 흐리는 방식이 보입니다."
      : "도진은 아직 사실을 조금씩 꺼내는 의뢰인으로 보입니다.";
  }
  return "확인된 사실과 아직 알 수 없는 부분이 함께 남아 있습니다.";
}

function renderRelationships() {
  const visible = story.characters.filter((character) => state.introducedCharacters.includes(character.id));
  elements.relationshipList.innerHTML = visible
    .map(
      (character) => `
        <article class="relationship-card">
          <div class="relationship-card-heading"><h3>${escapeHtml(character.name)}</h3><p>${escapeHtml(character.role)}</p></div>
          <p class="relationship-note">${escapeHtml(stageSummary(character))}</p>
          <p class="relationship-summary">${escapeHtml(relationshipTone(character.id))}</p>
        </article>`,
    )
    .join("");
}

function renderMemory() {
  const labels = {
    evidenceDiscipline: "기록의 태도",
    sharedDecision: "함께 결정하기",
    jaehoTrust: "재호와의 거리",
    yeojinTrust: "여진에게 맡긴 사실",
    dojinSuspicion: "도진의 말에 대한 의심",
  };
  const tendencies = Object.entries(state.traits)
    .filter(([, value]) => value !== 0)
    .map(([id, value]) => `<li><strong>${escapeHtml(labels[id])}</strong><span>${value > 0 ? "남아 있음" : "흔들림"}</span></li>`)
    .join("");
  const entries = state.memory.length
    ? state.memory
        .map((entry) => `<article class="memory-entry"><span>${escapeHtml(entry.chapter)}</span><h3>${escapeHtml(entry.title)}</h3><p>${escapeHtml(entry.detail)}</p></article>`)
        .join("")
    : "<p class=\"empty-state\">아직 기록된 선택이 없습니다.</p>";
  elements.memoryList.innerHTML = `
    <section class="memory-section"><div><h2>지금 남은 경향</h2><p>수치는 숨기고, 선택이 남긴 방향만 표시합니다.</p></div><ul class="tendency-list">${tendencies || "<li>아직 한쪽으로 기울지 않았습니다.</li>"}</ul></section>
    <section class="memory-section"><div><h2>선택한 문장</h2><p>되돌릴 수 없는 결론이 아니라, 여기까지 읽어 온 흔적입니다.</p></div>${entries}</section>`;
}

function renderTabs() {
  elements.tabs.forEach((tab) => {
    const active = tab.dataset.tab === activeTab;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  elements.storyPanel.hidden = activeTab !== "story";
  elements.relationshipsPanel.hidden = activeTab !== "relationships";
  elements.memoryPanel.hidden = activeTab !== "memory";
}

async function render() {
  renderTabs();
  if (state.lastChoice && activeTab === "story") {
    elements.echo.hidden = false;
    elements.echo.textContent = `남긴 선택: ${state.lastChoice}`;
  } else {
    elements.echo.hidden = true;
  }
  renderRelationships();
  renderMemory();
  if (activeTab === "story") await renderStory();
}

elements.tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;
    render();
  });

  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const currentIndex = elements.tabs.indexOf(tab);
    const targetIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? elements.tabs.length - 1
        : (currentIndex + (event.key === "ArrowRight" ? 1 : -1) + elements.tabs.length) % elements.tabs.length;
    const target = elements.tabs[targetIndex];
    activeTab = target.dataset.tab;
    render();
    target.focus();
  });
});

elements.restart.addEventListener("click", () => {
  if (!window.confirm("현재 선택과 기록을 지우고 첫 장으로 돌아갈까요?")) return;
  state = initialState();
  localStorage.removeItem(SAVE_KEY);
  activeTab = "story";
  render().then(scrollToTop);
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  elements.install.hidden = false;
});

elements.install.addEventListener("click", async () => {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    elements.install.hidden = true;
    return;
  }
  elements.installDialog.showModal();
});

elements.closeInstallDialog.addEventListener("click", () => elements.installDialog.close());

render();
