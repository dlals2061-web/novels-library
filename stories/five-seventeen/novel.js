const story = window.STORY;
const SAVE_KEY = `${story.id}-save-v1`;
const clone = (value) => JSON.parse(JSON.stringify(value));
const initialState = () => ({ sceneId: story.initialSceneId, flags: [], traits: clone(story.initialTraits), memory: [] });

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!saved || !story.scenes[saved.sceneId]) return initialState();
    return {
      ...initialState(),
      ...saved,
      flags: [...new Set(saved.flags ?? [])],
      traits: { ...story.initialTraits, ...(saved.traits ?? {}) },
      memory: Array.isArray(saved.memory) ? saved.memory : [],
    };
  } catch {
    return initialState();
  }
}

let state = loadState();
let activeTab = "story";
const elements = {
  chapter: document.querySelector("#chapterLabel"),
  thread: document.querySelector("#threadLabel"),
  title: document.querySelector("#sceneTitle"),
  text: document.querySelector("#storyText"),
  choices: document.querySelector("#choices"),
  restart: document.querySelector("#restartButton"),
  tabs: [...document.querySelectorAll(".tab")],
  storyPanel: document.querySelector("#storyPanel"),
  relationshipsPanel: document.querySelector("#relationshipsPanel"),
  relationshipList: document.querySelector("#relationshipList"),
  memoryPanel: document.querySelector("#memoryPanel"),
  memoryList: document.querySelector("#memoryList"),
};

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function saveState() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch { /* 저장 실패로 독서를 막지 않는다. */ }
}

function hasFlags(requirements = []) {
  return requirements.every((flag) => state.flags.includes(flag));
}

function applyChoice(choice) {
  if (choice.flag && !state.flags.includes(choice.flag)) state.flags.push(choice.flag);
  for (const flag of choice.flags ?? []) if (!state.flags.includes(flag)) state.flags.push(flag);
  for (const [trait, amount] of Object.entries(choice.effects?.traits ?? {})) {
    state.traits[trait] = (state.traits[trait] ?? 0) + amount;
  }
  state.memory.push({ sceneId: state.sceneId, text: choice.text });
  state.sceneId = choice.next;
  saveState();
  activeTab = "story";
  switchTab("story");
  render();
  window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

function meetsTraits(minTraits = {}) {
  return Object.entries(minTraits).every(([trait, minimum]) => (state.traits[trait] ?? 0) >= minimum);
}

function renderEnding(scene) {
  const variant = (scene.endingVariants ?? []).find((item) => hasFlags(item.requirements));
  if (!variant) {
    elements.text.innerHTML = "<p>결말 선택을 확인하지 못했습니다. 처음부터 다시 읽어 주세요.</p>";
    elements.choices.replaceChildren();
    return;
  }
  const additions = (scene.endingTextAdditions ?? []).filter((item) => meetsTraits(item.minTraits));
  elements.chapter.textContent = scene.chapter;
  elements.thread.textContent = scene.thread;
  elements.title.textContent = variant.title;
  elements.text.innerHTML = [
    '<img class="ending-art" src="../../art/five-seventeen-ending.webp" alt="" width="800" height="600" decoding="async" />',
    `<p class="ending-label">${escapeHtml(variant.label)}</p>`,
    ...variant.text.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`),
    ...additions.map((item) => `<p class="conditional-text">${escapeHtml(item.text)}</p>`),
  ].join("");
  elements.choices.replaceChildren();
  window.NovelsReader?.recordEnding(story.id, variant.label);
}

function relationshipSummary(character) {
  if (character.id === "bom") return state.traits.honesty >= 8 ? "완성된 문장만 고르던 봄은 이제 서툰 현재형도 자기 목소리로 말한다." : "타인의 문장을 지키는 원칙과 자기 마음을 숨기는 습관을 구분해 가고 있다.";
  if (character.id === "sunwoo") return state.traits.trust >= 9 ? "익명과 침묵 뒤에 머물지 않고, 확인이 필요할 때 다시 묻는 관계를 봄과 만들었다." : "떠날 가능성과 현재의 마음을 같은 문장 안에서 말하는 법을 배우고 있다.";
  if (character.id === "haram") return state.traits.friendship >= 6 ? "설명 없이도 괜찮은 친구가 아니라, 자기 이름으로 다음 방송을 만드는 사람이 되었다." : "가까운 사이에도 설명과 질문이 필요하다는 것을 봄에게 직접 말했다.";
  return state.flags.includes("redesignedFestival") || state.flags.includes("renegotiatedReview") ? "성과보다 학생들의 공개 범위를 우선하는 편성에 책임을 보탰다." : "방송부를 남기려는 마음이 후배들의 선택을 대신하지 않도록 배워 간다.";
}

function renderRelationships() {
  elements.relationshipList.innerHTML = story.characters.map((character) => `<article class="relationship-card">
    <div class="relationship-card-heading">
      <img class="relationship-portrait" src="../../portraits/five-seventeen-${escapeHtml(character.id)}.webp" alt="${escapeHtml(character.name)} 초상" width="480" height="480" loading="lazy" decoding="async" />
      <div><h3>${escapeHtml(character.name)}</h3><p>${escapeHtml(character.role)}</p></div>
    </div>
    <p class="relationship-summary">${escapeHtml(relationshipSummary(character))}</p>
  </article>`).join("");
}

function renderMemory() {
  if (!state.memory.length) {
    elements.memoryList.innerHTML = '<p class="empty-state">아직 남겨 둔 선택이 없습니다.</p>';
    return;
  }
  elements.memoryList.innerHTML = state.memory.map((entry) => {
    const scene = story.scenes[entry.sceneId];
    return `<article class="memory-entry"><small>${escapeHtml(scene?.chapter ?? "이전 장면")} · ${escapeHtml(scene?.title ?? "")}</small><p>${escapeHtml(entry.text)}</p></article>`;
  }).join("");
}

function switchTab(tab) {
  activeTab = tab;
  elements.storyPanel.hidden = tab !== "story";
  elements.relationshipsPanel.hidden = tab !== "relationships";
  elements.memoryPanel.hidden = tab !== "memory";
  elements.tabs.forEach((button) => {
    const selected = button.dataset.tab === tab;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-selected", String(selected));
  });
  if (tab === "relationships") renderRelationships();
  if (tab === "memory") renderMemory();
}

function render() {
  const scene = story.scenes[state.sceneId] ?? story.scenes[story.initialSceneId];
  if (scene.ending) {
    renderEnding(scene);
    elements.title.focus({ preventScroll: true });
    return;
  }
  elements.chapter.textContent = scene.chapter;
  elements.thread.textContent = scene.thread;
  elements.title.textContent = scene.title;
  const additions = (scene.textAdditions ?? []).filter((item) => hasFlags(item.requirements));
  const additionParagraphs = additions.flatMap((item) => Array.isArray(item.text) ? item.text : [item.text]);
  elements.text.innerHTML = [
    ...scene.text.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`),
    ...additionParagraphs.map((paragraph) => `<p class="conditional-text">${escapeHtml(paragraph)}</p>`),
  ].join("");
  elements.choices.replaceChildren();
  for (const choice of scene.choices ?? []) {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = `${escapeHtml(choice.text)}<small>${escapeHtml(choice.subtext)}</small>`;
    button.addEventListener("click", () => applyChoice(choice));
    elements.choices.append(button);
  }
  elements.title.focus({ preventScroll: true });
}

elements.restart.addEventListener("click", () => {
  if (!window.confirm("현재 장면과 선택 기록을 지우고 첫 장으로 돌아갈까요? 이미 도달한 결말은 서가에 남습니다.")) return;
  state = initialState();
  saveState();
  render();
});

elements.tabs.forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.tab)));

render();
