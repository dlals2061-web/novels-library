const SAVE_KEY = "glass-season-save-v4";
const RELATIONSHIP_MIN = -5;
const RELATIONSHIP_MAX = 8;
const TRAIT_MIN = 0;
const TRAIT_MAX = 10;

const story = window.STORY;

const initialState = {
  saveVersion: 1,
  sceneId: story.initialSceneId,
  flags: [],
  introducedCharacters: clone(story.initialIntroducedCharacters ?? []),
  memory: [],
  traits: clone(story.initialTraits),
  relationships: clone(story.initialRelationships),
  narrative: {
    midResponsibilityFocus: null,
    yuriSignalReading: null,
    fourthReaderPrediction: null,
    storageApproach: null,
    finalManuscriptDecision: null,
    dohyunAftermath: null,
  },
};

let state = loadState();
let activeTab = "story";

const elements = {
  novelTitle: document.querySelector("#novelTitle"),
  chapter: document.querySelector("#chapterLabel"),
  thread: document.querySelector("#threadLabel"),
  title: document.querySelector("#sceneTitle"),
  story: document.querySelector("#storyText"),
  choices: document.querySelector("#choices"),
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

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function cloneInitialState() {
  return clone(initialState);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!saved?.sceneId || !story.scenes[saved.sceneId]) {
      return cloneInitialState();
    }

    return {
      ...cloneInitialState(),
      ...saved,
      flags: [...new Set(saved.flags ?? [])],
      memory: Array.isArray(saved.memory) ? saved.memory : [],
      introducedCharacters: [
        ...new Set([...(story.initialIntroducedCharacters ?? []), ...(saved.introducedCharacters ?? [])]),
      ],
      traits: {
        ...clone(story.initialTraits),
        ...saved.traits,
      },
      relationships: {
        ...clone(story.initialRelationships),
        ...saved.relationships,
      },
      narrative: {
        ...clone(initialState.narrative),
        ...saved.narrative,
      },
    };
  } catch {
    return cloneInitialState();
  }
}

function saveState() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({ ...state, saveVersion: 1 }));
  } catch {
    // 저장소를 사용할 수 없어도 독서는 계속 가능하다.
  }
}

function clamp(value, min = RELATIONSHIP_MIN, max = RELATIONSHIP_MAX) {
  return Math.max(min, Math.min(max, value));
}

function addFlag(flag) {
  if (flag && !state.flags.includes(flag)) {
    state.flags.push(flag);
  }
}

function addFlags(flags = []) {
  flags.forEach(addFlag);
}

function revealCharacters(characterIds = []) {
  characterIds.forEach((characterId) => {
    if (!state.introducedCharacters.includes(characterId)) {
      state.introducedCharacters.push(characterId);
    }
  });
}

function applyRelationshipEffects(effects = {}) {
  Object.entries(effects.relationships ?? {}).forEach(([characterId, changes]) => {
    const current = state.relationships[characterId] ?? { trust: 0, intimacy: 0, suspicion: 0 };
    state.relationships[characterId] = { ...current };

    Object.entries(changes).forEach(([metric, amount]) => {
      state.relationships[characterId][metric] = clamp((current[metric] ?? 0) + amount);
    });
  });
}

function applyTraitEffects(effects = {}) {
  Object.entries(effects.traits ?? {}).forEach(([traitId, amount]) => {
    state.traits[traitId] = clamp((state.traits[traitId] ?? 0) + amount, TRAIT_MIN, TRAIT_MAX);
  });
}

function applyNarrativeEffects(choice) {
  if (choice.narrative) {
    state.narrative = { ...state.narrative, ...choice.narrative };
  }
}

function choose(choice) {
  state.memory.push({
    chapter: elements.chapter.textContent,
    scene: elements.title.textContent,
    text: choice.text,
    detail: choice.memory?.text ?? choice.subtext,
    title: choice.memory?.title ?? choice.text,
    category: choice.memory?.category ?? inferMemoryCategory(choice),
    type: choice.type ?? "delayed",
  });
  addFlag(choice.flag);
  addFlags(choice.flags);
  revealCharacters(choice.reveals);
  applyTraitEffects(choice.effects);
  applyRelationshipEffects(choice.effects);
  applyNarrativeEffects(choice);
  state.sceneId = choice.next;
  saveState();
  showStoryFromTop();
}

function choiceRequirementsMet(choice) {
  if (choice.requirements && !choice.requirements.every((flag) => state.flags.includes(flag))) {
    return false;
  }

  if (choice.requirementsAny && !choice.requirementsAny.some((flag) => state.flags.includes(flag))) {
    return false;
  }

  if (choice.blockedBy && choice.blockedBy.some((flag) => state.flags.includes(flag))) {
    return false;
  }

  if (choice.requireFlags && !choice.requireFlags.every((flag) => state.flags.includes(flag))) {
    return false;
  }

  if (choice.requireAnyFlags && !choice.requireAnyFlags.some((flag) => state.flags.includes(flag))) {
    return false;
  }

  if (choice.requireTraits) {
    const ok = Object.entries(choice.requireTraits).every(
      ([traitId, minimum]) => (state.traits[traitId] ?? 0) >= minimum,
    );
    if (!ok) {
      return false;
    }
  }

  if (choice.requireAnyTraits) {
    const ok = Object.entries(choice.requireAnyTraits).some(
      ([traitId, minimum]) => (state.traits[traitId] ?? 0) >= minimum,
    );
    if (!ok) {
      return false;
    }
  }

  if (choice.requireRelationships) {
    const ok = Object.entries(choice.requireRelationships).every(([characterId, metrics]) => {
      const relationship = state.relationships[characterId] ?? {};
      return Object.entries(metrics).every(([metric, minimum]) => (relationship[metric] ?? 0) >= minimum);
    });
    if (!ok) {
      return false;
    }
  }

  return true;
}

function restart() {
  if (!window.confirm("현재 장면과 선택 기록을 지우고 첫 장으로 돌아갈까요? 이미 도달한 결말은 서가에 남습니다.")) {
    return;
  }

  state = cloneInitialState();
  localStorage.removeItem(SAVE_KEY);
  showStoryFromTop();
}

function showStoryFromTop() {
  activeTab = "story";
  render();
  elements.title.focus({ preventScroll: true });
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
}

function relationPercent(value) {
  const range = RELATIONSHIP_MAX - RELATIONSHIP_MIN;
  return Math.round(((value - RELATIONSHIP_MIN) / range) * 100);
}

function relationshipSummary(relationship) {
  const trust = relationship.trust ?? 0;
  const intimacy = relationship.intimacy ?? 0;
  const suspicion = relationship.suspicion ?? 0;

  if (suspicion >= 6) {
    return "말 한마디에도 숨은 의도를 찾게 되는 관계입니다.";
  }

  if (trust >= 5 && intimacy >= 4) {
    return "믿음과 끌림이 동시에 깊어지고 있습니다.";
  }

  if (trust >= 5) {
    return "아직 조심스럽지만, 이 인물의 말에 기대고 있습니다.";
  }

  if (intimacy >= 5) {
    return "판단보다 감정이 먼저 움직이는 순간이 늘고 있습니다.";
  }

  if (suspicion >= 4) {
    return "가까이 둘수록 확인해야 할 빈칸이 커집니다.";
  }

  return "아직 관계의 방향이 완전히 정해지지 않았습니다.";
}

const traitProfiles = {
  romance: {
    label: "미련",
    summary: "서아는 자신이 잃은 것이 사람이 아니라, 선택하지 못한 인생 전체였을지 모른다고 느낍니다.",
  },
  investigation: {
    label: "통제",
    summary: "서아는 감정에 휩쓸리지 않기 위해 문장보다 기록과 순서를 먼저 붙잡으려 합니다.",
  },
  trustJian: {
    label: "안전선",
    summary: "서아는 혼자 무너지지 않기 위해 누군가의 해석을 빌리는 쪽으로 기울고 있습니다.",
  },
  selfDoubt: {
    label: "자기검열",
    summary: "서아는 자기 기억에서 빠진 부분을 피하지 않고 살피려 합니다.",
  },
  risk: {
    label: "위험 감수",
    summary: "서아는 상처를 피하기보다, 대가를 알면서도 위험한 문 쪽으로 손을 뻗고 있습니다.",
  },
  yuriFocus: {
    label: "부채감",
    summary: "서아는 사라진 사람의 빈자리를 단서가 아니라 갚지 못한 빚처럼 읽기 시작합니다.",
  },
};

function getDominantTraits() {
  return Object.entries(state.traits)
    .sort(([, left], [, right]) => right - left)
    .filter(([traitId]) => {
      if (traitId !== "selfDoubt") {
        return true;
      }

      return ["readCounselingFirstPage", "searchedDeletedSentence", "recoveredDeletedSentence"].some((flag) =>
        state.flags.includes(flag),
      );
    })
    .filter(([, value]) => value > 0)
    .slice(0, 3);
}

function renderInterpretationPanel() {
  const scene = story.scenes[state.sceneId];
  if (scene?.chapter?.startsWith("1부")) {
    return "";
  }

  const dominantTraits = getDominantTraits();
  const summary =
    dominantTraits.length > 0
      ? dominantTraits
          .map(([traitId]) => traitProfiles[traitId]?.summary)
          .filter(Boolean)
          .join(" ")
      : "아직 서아의 해석 방향은 한쪽으로 기울지 않았습니다.";
  const keywords = dominantTraits
    .map(([traitId]) => traitProfiles[traitId]?.label)
    .filter(Boolean)
    .join(" · ");

  return `
    <section class="interpretation-panel">
      <h3>서아가 지금 읽는 방식</h3>
      ${keywords ? `<p class="interpretation-keywords">${keywords}</p>` : ""}
      <p>${summary}</p>
    </section>
  `;
}

function renderTabs() {
  elements.tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === activeTab;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  elements.storyPanel.hidden = activeTab !== "story";
  elements.relationshipsPanel.hidden = activeTab !== "relationships";
  elements.memoryPanel.hidden = activeTab !== "memory";
}

function activateTab(tabId) {
  activeTab = tabId;
  renderTabs();
}

function sceneConditionMatches(candidate) {
  if (!(candidate.requirements ?? []).every((flag) => state.flags.includes(flag))) {
    return false;
  }

  if (candidate.narrative) {
    const narrativeMatches = Object.entries(candidate.narrative).every(
      ([key, value]) => state.narrative?.[key] === value,
    );
    if (!narrativeMatches) {
      return false;
    }
  }

  if (candidate.narrativePresent) {
    const narrativePresent = candidate.narrativePresent.every((key) => state.narrative?.[key] != null);
    if (!narrativePresent) {
      return false;
    }
  }

  if (candidate.traits) {
    const traitMatches = Object.entries(candidate.traits).every(
      ([traitId, minimum]) => (state.traits[traitId] ?? 0) >= minimum,
    );
    if (!traitMatches) {
      return false;
    }
  }

  if (candidate.relationships) {
    const relationshipMatches = Object.entries(candidate.relationships).every(([characterId, metrics]) => {
      const relationship = state.relationships[characterId] ?? {};
      return Object.entries(metrics).every(([metric, minimum]) => (relationship[metric] ?? 0) >= minimum);
    });
    if (!relationshipMatches) {
      return false;
    }
  }

  return true;
}

function getSceneText(scene) {
  const variant = scene.textVariants?.find(sceneConditionMatches);
  const additions = [...(scene.contextAdditions ?? []), ...(scene.textAdditions ?? [])]
    ?.filter(sceneConditionMatches)
    .flatMap((candidate) => candidate.text ?? []) ?? [];
  return [...(variant?.text ?? scene.text), ...additions];
}

function renderStory() {
  const scene = story.scenes[state.sceneId] ?? story.scenes[story.initialSceneId];
  revealCharacters(scene.reveals);
  addFlags(scene.stateFlags);
  saveState();
  elements.chapter.textContent = scene.chapter;
  elements.thread.textContent = scene.thread;
  elements.title.textContent = scene.title;

  const ending = scene.ending
    ? `<img class="ending-art" src="../../art/glass-season-ending.webp" alt="" width="800" height="600" decoding="async" /><span class="ending-label">${scene.ending}</span>`
    : "";
  if (scene.ending?.startsWith("끝 - ")) window.NovelsReader?.recordEnding(story.id, scene.ending.replace("끝 - ", ""));
  elements.story.innerHTML = `${ending}${getSceneText(scene)
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("")}`;

  elements.choices.innerHTML = "";
  if (scene.choices) {
    getVisibleChoices(scene).forEach((choice) => {
      const button = document.createElement("button");
      button.className = "choice";
      button.type = "button";
      button.innerHTML = `${escapeHtml(choice.text)}<small>${escapeHtml(choice.subtext)}</small>`;
      button.addEventListener("click", () => choose(choice));
      elements.choices.append(button);
    });
  } else {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.innerHTML = "다른 선택으로 다시 읽기<small>저장된 남은 흔적을 지우고 첫 장으로 돌아갑니다.</small>";
    button.addEventListener("click", restart);
    elements.choices.append(button);
  }
}

function choicePriority(choice) {
  let score = 0;

  if (choice.priorityFlags?.some((flag) => state.flags.includes(flag))) {
    score += 100;
  }

  if (choice.priorityTrait) {
    score += state.traits[choice.priorityTrait] ?? 0;
  }

  Object.entries(choice.priorityRelationships ?? {}).forEach(([characterId, metrics]) => {
    const relationship = state.relationships[characterId] ?? {};
    metrics.forEach((metric) => {
      score += relationship[metric] ?? 0;
    });
  });

  Object.entries(choice.priorityRelationshipWeights ?? {}).forEach(([characterId, metrics]) => {
    const relationship = state.relationships[characterId] ?? {};
    Object.entries(metrics).forEach(([metric, weight]) => {
      score += (relationship[metric] ?? 0) * weight;
    });
  });

  return score;
}

function getVisibleChoices(scene) {
  const choices = scene.choices.filter(choiceRequirementsMet);

  if (!scene.maxVisibleChoices || choices.length <= scene.maxVisibleChoices) {
    return choices;
  }

  const rankedChoices = choices.map((choice, index) => ({ choice, index, score: choicePriority(choice) }));
  const focusedChoices = rankedChoices.filter(({ choice }) => !choice.fallbackVisible);
  const fallbackChoices = rankedChoices.filter(({ choice }) => choice.fallbackVisible);
  const candidates =
    focusedChoices.length >= scene.maxVisibleChoices
      ? focusedChoices
      : [
          ...focusedChoices,
          ...fallbackChoices.sort(
            (left, right) =>
              (right.choice.fallbackPriority ?? 0) - (left.choice.fallbackPriority ?? 0) ||
              right.score - left.score ||
              left.index - right.index,
          ),
        ];
  const pinnedChoices = rankedChoices.filter(({ choice }) => choice.pinnedVisible);
  const uniqueCandidates = [...new Map([...pinnedChoices, ...candidates].map((item) => [item.index, item])).values()];
  const availableSlots = Math.max(0, scene.maxVisibleChoices - pinnedChoices.length);
  const selectedChoices = [
    ...pinnedChoices,
    ...uniqueCandidates
      .filter(({ choice }) => !choice.pinnedVisible)
      .sort((left, right) => right.score - left.score || left.index - right.index)
      .slice(0, availableSlots),
  ];

  return selectedChoices
    .sort((left, right) => left.index - right.index)
    .map(({ choice }) => choice);
}

function renderRelationships() {
  const introducedCharacters = story.characters.filter((character) =>
    state.introducedCharacters.includes(character.id),
  );

  if (introducedCharacters.length === 0) {
    elements.relationshipList.innerHTML = `
      ${renderInterpretationPanel()}
      <p class="empty-state">아직 서아가 관계를 다시 읽기 시작한 인물은 없습니다.</p>
    `;
    return;
  }

  const relationships = introducedCharacters
    .map((character) => {
      const relationship = state.relationships[character.id] ?? {};
      const knownStage = getKnownStage(character);
      return `
        <article class="relationship-card">
          <div class="relationship-card-heading">
            <img class="relationship-portrait" src="../../portraits/${story.id}-${character.id}.webp" alt="${character.name} 인물화" width="96" height="96" loading="lazy" decoding="async" />
            <div>
              <h3>${character.name}</h3>
              <p>${knownStage.label}</p>
            </div>
          </div>
          <p class="relationship-note">${knownStage.summary}</p>
          <p class="relationship-summary">${relationshipSummary(relationship)}</p>
        </article>
      `;
    })
    .join("");

  elements.relationshipList.innerHTML = `${renderInterpretationPanel()}${relationships}`;
}

function getKnownStage(character) {
  const stages = character.knownStages ?? [{ label: character.role, summary: character.note }];
  return [...stages]
    .reverse()
    .find((stage) => !stage.flags || stage.flags.some((flag) => state.flags.includes(flag))) ?? stages[0];
}

function renderMemory() {
  if (state.memory.length === 0) {
    elements.memoryList.innerHTML = `<p class="empty-state">아직 서아에게 남은 문장이나 단서는 없습니다.</p>`;
    return;
  }

  elements.memoryList.innerHTML = memorySections
    .map((section) => renderMemorySection(section, state.memory.filter((item) => normalizeMemoryCategory(item) === section.id)))
    .join("");
}

const memorySections = [
  {
    id: "sentence",
    title: "남은 문장",
    description: "서아가 끝내 지우지 못한 마음과 반응입니다.",
    empty: "아직 마음에 남은 문장은 없습니다.",
  },
  {
    id: "clue",
    title: "확보한 단서",
    description: "원고, 사진, 녹음처럼 다시 읽어야 할 흔적입니다.",
    empty: "아직 손에 쥔 단서는 없습니다.",
  },
  {
    id: "question",
    title: "피한 질문",
    description: "대답하지 못했거나 뒤로 미룬 질문입니다.",
    empty: "아직 피한 질문은 없습니다.",
  },
];

function renderMemorySection(section, items) {
  const entries = items.length
    ? items
        .map(
          (item) => `
            <article class="memory-entry">
              <span>${item.chapter} · ${item.scene}</span>
              <h3>${item.title ?? item.text}</h3>
              <p>${item.detail ?? memoryFallbackDetail(item)}</p>
            </article>
          `,
        )
        .join("")
    : `<p class="memory-empty">${section.empty}</p>`;

  return `
    <section class="memory-section">
      <div>
        <h2>${section.title}</h2>
        <p>${section.description}</p>
      </div>
      ${entries}
    </section>
  `;
}

function normalizeMemoryCategory(item) {
  if (["sentence", "clue", "question"].includes(item.category)) {
    return item.category;
  }

  if (item.type === "illusion") {
    return "question";
  }

  return "sentence";
}

function inferMemoryCategory(choice) {
  const traits = choice.effects?.traits ?? {};
  const words = `${choice.text} ${choice.subtext ?? ""}`;

  if (
    traits.investigation ||
    traits.risk ||
    /사진|원고|파일|기록|녹음|서버|문서|단서|봉투|카메라|시간순|대조/.test(words)
  ) {
    return "clue";
  }

  if (choice.type === "illusion" || traits.selfDoubt || /묻|닫고|믿지|기다|침묵|피한|질문/.test(words)) {
    return "question";
  }

  return "sentence";
}

function memoryFallbackDetail(item) {
  if (item.type === "structural") {
    return "이 선택 이후 서아가 먼저 보게 되는 진실이 달라졌다.";
  }

  if (item.type === "illusion") {
    return "사건은 크게 움직이지 않았지만, 서아의 반응은 남았다.";
  }

  return "선택의 여운이 다음 장면에 남았다.";
}

function render() {
  elements.novelTitle.textContent = story.title;
  renderStory();
  renderRelationships();
  renderMemory();
  renderTabs();
}

let deferredInstallPrompt = null;

function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function isIos() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function updateInstallButton() {
  elements.install.hidden = isStandalone() || (!deferredInstallPrompt && !isIos());
}

async function installApp() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    updateInstallButton();
    return;
  }

  if (isIos()) {
    elements.installDialog.showModal();
  }
}

elements.restart.addEventListener("click", restart);
elements.install.addEventListener("click", installApp);
elements.closeInstallDialog.addEventListener("click", () => elements.installDialog.close());
elements.tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateTab(tab.dataset.tab);
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
    activateTab(target.dataset.tab);
    target.focus();
  });
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updateInstallButton();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  updateInstallButton();
});

render();
updateInstallButton();
