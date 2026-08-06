(() => {
  const PREFERENCES_KEY = "novels-reader-preferences-v1";
  const ENDING_HISTORY_KEY = "novels-ending-history-v1";
  const ACTIVITY_KEY = "novels-reading-activity-v1";
  const INTRO_SEEN_KEY = "novels-reader-intro-seen-v1";
  const SAVE_KEYS = {
    "glass-season": "glass-season-save-v4",
    "lightless-photos": "lightless-photos-save-v1",
    "last-letters": "last-letters-save-v1",
    "glitch-academy": "glitch-academy-save-v1",
    "five-seventeen": "five-seventeen-save-v1",
  };
  const defaults = { fontSize: "normal", lineHeight: "normal", theme: "light" };

  function safeParse(value, fallback = null) {
    try {
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  }

  function readStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }

  function getEndingHistory() {
    const saved = safeParse(readStorage(ENDING_HISTORY_KEY), {});
    return saved && typeof saved === "object" ? saved : {};
  }

  function recordEnding(storyId, label) {
    if (!storyId || !label) return false;
    const history = getEndingHistory();
    const records = Array.isArray(history[storyId]) ? history[storyId] : [];
    if (records.some((record) => record.label === label)) return false;
    history[storyId] = [...records, { label, reachedAt: new Date().toISOString() }];
    const written = writeStorage(ENDING_HISTORY_KEY, JSON.stringify(history));
    if (written) window.dispatchEvent(new CustomEvent("novels:ending-recorded", { detail: { storyId, label } }));
    return written;
  }

  function getReadingActivity() {
    const saved = safeParse(readStorage(ACTIVITY_KEY), {});
    return saved && typeof saved === "object" ? saved : {};
  }

  function setReadingActivity(storyId, record) {
    if (!storyId || !record) return false;
    const activity = getReadingActivity();
    const written = writeStorage(ACTIVITY_KEY, JSON.stringify({ ...activity, [storyId]: record }));
    if (written) window.dispatchEvent(new CustomEvent("novels:activity-updated", { detail: { storyId, record } }));
    return written;
  }

  function removeReadingActivity(storyId) {
    const activity = getReadingActivity();
    if (!(storyId in activity)) return true;
    delete activity[storyId];
    const written = writeStorage(ACTIVITY_KEY, JSON.stringify(activity));
    if (written) window.dispatchEvent(new CustomEvent("novels:activity-updated", { detail: { storyId, record: null } }));
    return written;
  }

  window.NovelsReader = { getEndingHistory, recordEnding, getReadingActivity, setReadingActivity, removeReadingActivity };

  function loadPreferences() {
    const saved = safeParse(readStorage(PREFERENCES_KEY), {});
    return {
      fontSize: ["small", "normal", "large"].includes(saved?.fontSize) ? saved.fontSize : defaults.fontSize,
      lineHeight: ["compact", "normal", "roomy"].includes(saved?.lineHeight) ? saved.lineHeight : defaults.lineHeight,
      theme: ["light", "dark", "system"].includes(saved?.theme) ? saved.theme : defaults.theme,
    };
  }

  function applyPreferences(preferences) {
    const root = document.documentElement;
    root.dataset.readerFont = preferences.fontSize;
    root.dataset.readerLeading = preferences.lineHeight;
    root.dataset.readerTheme = preferences.theme;
  }

  let preferences = loadPreferences();
  applyPreferences(preferences);

  const host = document.querySelector(".header-actions") ?? document.querySelector(".library-header");
  if (!host) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "reader-settings-button";
  button.textContent = "읽기 설정";
  button.setAttribute("aria-haspopup", "dialog");

  const dialog = document.createElement("dialog");
  dialog.className = "reader-settings-dialog";
  dialog.setAttribute("aria-labelledby", "readerSettingsTitle");
  dialog.innerHTML = `
    <form method="dialog">
      <div class="reader-settings-heading">
        <div><p class="reader-settings-kicker">READING</p><h2 id="readerSettingsTitle">읽기 설정</h2></div>
        <button class="reader-settings-close" value="close" aria-label="읽기 설정 닫기">닫기</button>
      </div>
      <label>글자 크기
        <select id="readerFontSize">
          <option value="small">작게</option><option value="normal">기본</option><option value="large">크게</option>
        </select>
      </label>
      <label>줄 간격
        <select id="readerLineHeight">
          <option value="compact">좁게</option><option value="normal">기본</option><option value="roomy">넓게</option>
        </select>
      </label>
      <label>화면 색상
        <select id="readerTheme">
          <option value="light">밝게</option><option value="dark">어둡게</option><option value="system">기기 설정</option>
        </select>
      </label>
      <div class="reader-data-actions">
        <button id="exportReadingData" type="button">독서 기록 내보내기</button>
        <button id="importReadingData" type="button">독서 기록 가져오기</button>
        <input id="readingDataFile" type="file" accept="application/json,.json" hidden />
      </div>
      <p class="reader-settings-help">다섯 작품의 선택 기록과 읽기 설정을 JSON 파일로 보관할 수 있습니다.</p>
      <p id="readerSettingsStatus" class="reader-settings-status" role="status" aria-live="polite"></p>
    </form>`;

  host.append(button);
  document.body.append(dialog);

  const fontSize = dialog.querySelector("#readerFontSize");
  const lineHeight = dialog.querySelector("#readerLineHeight");
  const theme = dialog.querySelector("#readerTheme");
  const status = dialog.querySelector("#readerSettingsStatus");
  const fileInput = dialog.querySelector("#readingDataFile");

  function syncControls() {
    fontSize.value = preferences.fontSize;
    lineHeight.value = preferences.lineHeight;
    theme.value = preferences.theme;
  }

  function updatePreference(name, value) {
    preferences = { ...preferences, [name]: value };
    writeStorage(PREFERENCES_KEY, JSON.stringify(preferences));
    applyPreferences(preferences);
  }

  button.addEventListener("click", () => {
    syncControls();
    status.textContent = "";
    dialog.showModal();
  });
  fontSize.addEventListener("change", () => updatePreference("fontSize", fontSize.value));
  lineHeight.addEventListener("change", () => updatePreference("lineHeight", lineHeight.value));
  theme.addEventListener("change", () => updatePreference("theme", theme.value));

  dialog.querySelector("#exportReadingData").addEventListener("click", () => {
    const records = Object.fromEntries(Object.entries(SAVE_KEYS).map(([storyId, key]) => [storyId, safeParse(readStorage(key))]));
    const payload = { format: "novels-reading-data", version: 1, exportedAt: new Date().toISOString(), preferences, records, endingHistory: getEndingHistory(), activity: getReadingActivity() };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `novels-reading-data-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
    status.textContent = "독서 기록 파일을 만들었습니다.";
  });

  dialog.querySelector("#importReadingData").addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", async () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    try {
      const payload = JSON.parse(await file.text());
      if (payload?.format !== "novels-reading-data" || payload.version !== 1 || typeof payload.records !== "object") {
        throw new Error("지원하지 않는 독서 기록 파일입니다.");
      }
      for (const [storyId, key] of Object.entries(SAVE_KEYS)) {
        const record = payload.records[storyId];
        if (record == null) continue;
        if (typeof record !== "object" || typeof record.sceneId !== "string") throw new Error(`${storyId} 기록 형식이 올바르지 않습니다.`);
        if (!writeStorage(key, JSON.stringify(record))) throw new Error("브라우저 저장소에 기록을 쓸 수 없습니다.");
      }
      if (payload.preferences && typeof payload.preferences === "object") {
        if (!writeStorage(PREFERENCES_KEY, JSON.stringify(payload.preferences))) throw new Error("브라우저 저장소에 설정을 쓸 수 없습니다.");
      }
      if (payload.endingHistory && typeof payload.endingHistory === "object") {
        if (!writeStorage(ENDING_HISTORY_KEY, JSON.stringify(payload.endingHistory))) throw new Error("브라우저 저장소에 결말 기록을 쓸 수 없습니다.");
      }
      if (payload.activity && typeof payload.activity === "object") {
        if (!writeStorage(ACTIVITY_KEY, JSON.stringify(payload.activity))) throw new Error("브라우저 저장소에 최근 독서 기록을 쓸 수 없습니다.");
      }
      status.textContent = "독서 기록을 가져왔습니다. 화면을 새로 불러옵니다.";
      window.setTimeout(() => window.location.reload(), 700);
    } catch (error) {
      status.textContent = error.message;
    } finally {
      fileInput.value = "";
    }
  });

  function sceneEdges(story, scene) {
    if (!scene || scene.ending) return [];
    const candidates = [
      ...(scene.choices ?? []).map((choice) => choice.next),
      scene.continue,
      scene.next,
    ];
    return [...new Set(candidates.filter((id) => typeof id === "string" && story.scenes[id]))];
  }

  function shortestDistance(story, startId, isTarget) {
    if (!story?.scenes?.[startId]) return Infinity;
    const queue = [[startId, 0]];
    const visited = new Set([startId]);
    while (queue.length) {
      const [sceneId, distance] = queue.shift();
      if (isTarget(sceneId, story.scenes[sceneId])) return distance;
      for (const nextId of sceneEdges(story, story.scenes[sceneId])) {
        if (visited.has(nextId)) continue;
        visited.add(nextId);
        queue.push([nextId, distance + 1]);
      }
    }
    return Infinity;
  }

  function calculateSceneProgress(story, sceneId, choiceCount) {
    const scene = story?.scenes?.[sceneId];
    if (!scene) return 0;
    if (scene.ending || sceneId === "ending" || sceneId.startsWith("ending")) return 100;
    const depth = shortestDistance(story, story.initialSceneId, (id) => id === sceneId);
    const remaining = shortestDistance(story, sceneId, (id, candidate) => candidate.ending || id === "ending" || id.startsWith("ending"));
    if (Number.isFinite(depth) && Number.isFinite(remaining) && depth + remaining > 0) {
      return Math.min(95, Math.max(depth ? 3 : 0, Math.round((depth / (depth + remaining)) * 100)));
    }
    return Math.min(95, Math.max(choiceCount ? 3 : 0, choiceCount * 5));
  }

  let activityStatusTimer = null;

  function ensureActivityStatus() {
    let notice = document.querySelector("#readerActivityStatus");
    if (notice) return notice;
    notice = document.createElement("div");
    notice.id = "readerActivityStatus";
    notice.className = "reader-activity-status";
    notice.setAttribute("role", "status");
    notice.setAttribute("aria-live", "polite");
    notice.hidden = true;
    document.body.append(notice);
    return notice;
  }

  function announceActivity(message, isError = false) {
    const notice = ensureActivityStatus();
    window.clearTimeout(activityStatusTimer);
    notice.textContent = message;
    notice.classList.toggle("is-error", isError);
    notice.hidden = false;
    activityStatusTimer = window.setTimeout(() => { notice.hidden = true; }, isError ? 5000 : 2400);
  }

  function refreshCurrentActivity(lastChoice) {
    const story = window.STORY;
    const saveKey = SAVE_KEYS[story?.id];
    if (!story || !saveKey) return false;
    const saved = safeParse(readStorage(saveKey), {});
    const sceneId = saved?.sceneId && story.scenes[saved.sceneId] ? saved.sceneId : story.initialSceneId;
    const scene = story.scenes[sceneId];
    const choiceCount = Array.isArray(saved?.memory) ? saved.memory.length : 0;
    const previous = getReadingActivity()[story.id] ?? {};
    const record = {
      sceneId,
      chapter: scene?.chapter ?? "",
      title: scene?.title ?? scene?.thread ?? "",
      choiceCount,
      percent: calculateSceneProgress(story, sceneId, choiceCount),
      isEnding: Boolean(scene?.ending || sceneId === "ending" || sceneId.startsWith("ending")),
      lastChoice: lastChoice === undefined ? previous.lastChoice || "" : lastChoice,
      updatedAt: new Date().toISOString(),
    };
    return setReadingActivity(story.id, record);
  }

  function showFirstReaderGuide() {
    if (!window.STORY || readStorage(INTRO_SEEN_KEY)) return;
    const guide = document.createElement("dialog");
    guide.className = "reader-intro-dialog";
    guide.setAttribute("aria-labelledby", "readerIntroTitle");
    guide.innerHTML = `<form method="dialog">
      <p class="reader-settings-kicker">BEFORE READING</p>
      <h2 id="readerIntroTitle">선택은 조용히 기록됩니다</h2>
      <p>마음이 가는 문장을 고르면 다음 장면으로 이어집니다. 현재 장면과 선택은 이 기기에 자동 저장되며, 언제든 서가로 돌아와 이어 읽을 수 있습니다.</p>
      <ul><li>선택한 문장은 독서 기록으로 남아 이야기의 다음 장면에 반영됩니다.</li><li>처음부터 다시 읽어도 이미 도달한 결말은 서가에 남습니다.</li></ul>
      <button value="start">이야기 시작하기</button>
    </form>`;
    guide.addEventListener("close", () => {
      writeStorage(INTRO_SEEN_KEY, "true");
      guide.remove();
    }, { once: true });
    document.body.append(guide);
    guide.showModal();
  }

  document.addEventListener("click", (event) => {
    const choice = event.target.closest?.(".choice");
    if (choice) {
      const firstLine = choice.childNodes[0]?.textContent?.trim() || choice.textContent.trim();
      const isContinue = choice.classList.contains("continue-choice");
      announceActivity(isContinue ? "다음 장면으로 이동했습니다." : `“${firstLine}” 선택을 기록했습니다.`);
      queueMicrotask(() => {
        if (!refreshCurrentActivity(isContinue ? "" : firstLine)) announceActivity("이 브라우저에 독서 기록을 저장할 수 없습니다.", true);
      });
    }
    if (event.target.closest?.("#restartButton")) queueMicrotask(() => refreshCurrentActivity(""));
  }, true);

  document.addEventListener("keydown", (event) => {
    const tab = event.target.closest?.('[role="tab"]');
    if (!tab || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    const tabs = [...tab.closest('[role="tablist"]')?.querySelectorAll('[role="tab"]') ?? []];
    if (!tabs.length) return;
    event.preventDefault();
    const index = tabs.indexOf(tab);
    const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    tabs[nextIndex].click();
  });

  document.addEventListener("click", (event) => {
    const tab = event.target.closest?.('[role="tab"]');
    if (!tab) return;
    const tabs = [...tab.closest('[role="tablist"]')?.querySelectorAll('[role="tab"]') ?? []];
    tabs.forEach((item) => { item.tabIndex = item === tab ? 0 : -1; });
  });

  function ensureAppNotice() {
    let notice = document.querySelector("#appStatusNotice");
    if (notice) return notice;
    notice = document.createElement("div");
    notice.id = "appStatusNotice";
    notice.className = "app-status-notice";
    notice.setAttribute("role", "status");
    notice.setAttribute("aria-live", "polite");
    notice.hidden = true;
    document.body.append(notice);
    return notice;
  }

  function showAppNotice(message, actionLabel = "", action = null) {
    const notice = ensureAppNotice();
    notice.replaceChildren();
    const copy = document.createElement("span");
    copy.textContent = message;
    notice.append(copy);
    if (actionLabel && action) {
      const actionButton = document.createElement("button");
      actionButton.type = "button";
      actionButton.textContent = actionLabel;
      actionButton.addEventListener("click", action, { once: true });
      notice.append(actionButton);
    }
    notice.hidden = false;
  }

  function hideAppNotice() {
    const notice = document.querySelector("#appStatusNotice");
    if (notice) notice.hidden = true;
  }

  window.addEventListener("offline", () => showAppNotice("오프라인입니다. 저장된 이야기와 선택 기록은 계속 읽을 수 있습니다."));
  window.addEventListener("online", () => {
    showAppNotice("다시 온라인에 연결되었습니다.");
    window.setTimeout(hideAppNotice, 2400);
  });

  if (!navigator.onLine) showAppNotice("오프라인입니다. 저장된 이야기와 선택 기록은 계속 읽을 수 있습니다.");

  if ("serviceWorker" in navigator) {
    let reloadingForUpdate = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (reloadingForUpdate) return;
      reloadingForUpdate = true;
      window.location.reload();
    });
    window.addEventListener("load", async () => {
      const workerUrl = document.querySelector(".reader") ? "../../service-worker.js" : "./service-worker.js";
      try {
        const registration = await navigator.serviceWorker.register(workerUrl);
        const offerUpdate = (worker) => showAppNotice("새 버전이 준비되었습니다.", "업데이트", () => worker.postMessage({ type: "SKIP_WAITING" }));
        if (registration.waiting && navigator.serviceWorker.controller) offerUpdate(registration.waiting);
        registration.addEventListener("updatefound", () => {
          const worker = registration.installing;
          worker?.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) offerUpdate(worker);
          });
        });
      } catch {
        showAppNotice("오프라인 준비를 완료하지 못했습니다. 온라인 상태에서 다시 열어 주세요.");
      }
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[role="tablist"]').forEach((tablist) => {
      tablist.querySelectorAll('[role="tab"]').forEach((tab) => { tab.tabIndex = tab.getAttribute("aria-selected") === "true" ? 0 : -1; });
    });
    if (window.STORY) {
      refreshCurrentActivity();
      showFirstReaderGuide();
    }
  });
})();
