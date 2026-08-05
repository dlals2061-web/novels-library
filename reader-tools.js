(() => {
  const PREFERENCES_KEY = "novels-reader-preferences-v1";
  const ENDING_HISTORY_KEY = "novels-ending-history-v1";
  const SAVE_KEYS = {
    "glass-season": "glass-season-save-v4",
    "lightless-photos": "lightless-photos-save-v1",
    "last-letters": "last-letters-save-v1",
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

  window.NovelsReader = { getEndingHistory, recordEnding };

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
      <p class="reader-settings-help">세 작품의 선택 기록과 읽기 설정을 JSON 파일로 보관할 수 있습니다.</p>
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
    const payload = { format: "novels-reading-data", version: 1, exportedAt: new Date().toISOString(), preferences, records, endingHistory: getEndingHistory() };
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
      status.textContent = "독서 기록을 가져왔습니다. 화면을 새로 불러옵니다.";
      window.setTimeout(() => window.location.reload(), 700);
    } catch (error) {
      status.textContent = error.message;
    } finally {
      fileInput.value = "";
    }
  });

  if (document.querySelector(".reader") && "serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("../../service-worker.js"));
  }
})();
