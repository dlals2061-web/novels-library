const saveKeys = {
  "glass-season": "glass-season-save-v4",
  "lightless-photos": "lightless-photos-save-v1",
  "last-letters": "last-letters-save-v1",
  "glitch-academy": "glitch-academy-save-v1",
  "five-seventeen": "five-seventeen-save-v1",
};

const installButton = document.querySelector("#installButton");
const installDialog = document.querySelector("#installDialog");
const closeInstallDialog = document.querySelector("#closeInstallDialog");
const storyDialog = document.querySelector("#storyDialog");
const storyDialogCover = document.querySelector("#storyDialogCover");
const storyDialogGenre = document.querySelector("#storyDialogGenre");
const storyDialogTitle = document.querySelector("#storyDialogTitle");
const storyDialogSummary = document.querySelector("#storyDialogSummary");
const storyDialogProgress = document.querySelector("#storyDialogProgress");
const storyDialogContinue = document.querySelector("#storyDialogContinue");
const storyDialogRestart = document.querySelector("#storyDialogRestart");
const appSplash = document.querySelector("#appSplash");
let deferredInstallPrompt = null;
const catalog = window.NOVELS_CATALOG ?? [];
const catalogById = Object.fromEntries(catalog.map((story) => [story.id, story]));

if (appSplash) {
  if (document.documentElement.classList.contains("splash-seen")) {
    appSplash.remove();
  } else {
    const removeSplash = () => appSplash.remove();
    const handleSplashEnd = (event) => {
      if (event.target !== appSplash) return;
      appSplash.removeEventListener("animationend", handleSplashEnd);
      removeSplash();
    };
    appSplash.addEventListener("animationend", handleSplashEnd);
    window.setTimeout(removeSplash, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 500 : 1800);
  }
}

function readingProgress(storyId) {
  try {
    const record = JSON.parse(localStorage.getItem(saveKeys[storyId]));
    const metadata = catalogById[storyId];
    if (!record?.sceneId) return { label: `약 ${metadata?.estimatedMinutes ?? "?"}분 · 읽기 시작`, percent: 0 };
    if (record.sceneId === "ending" || record.sceneId.startsWith("ending")) return { label: "결말 도달", percent: 100 };
    const choiceCount = Array.isArray(record.memory) ? record.memory.length : 0;
    const percent = Math.min(95, Math.max(3, Math.round((choiceCount / (metadata?.representativeChoices ?? 20)) * 100)));
    return { label: `${percent}% · 선택 ${choiceCount}개`, percent };
  } catch {
    return { label: "읽기 시작", percent: 0 };
  }
}

document.querySelectorAll("[data-story]").forEach((label) => {
  label.textContent = readingProgress(label.dataset.story).label;
});

function renderEndingArchive() {
  const history = window.NovelsReader?.getEndingHistory?.() ?? {};
  const archive = document.querySelector("#endingArchive");
  const host = document.querySelector("#endingArchiveList");
  const reachedCount = catalog.reduce((total, story) => total + (history[story.id]?.length ?? 0), 0);
  archive.hidden = reachedCount === 0;
  if (archive.hidden) {
    host.replaceChildren();
    return;
  }
  host.innerHTML = catalog.map((story) => {
    const reached = new Set((history[story.id] ?? []).map((record) => record.label));
    return `<article class="ending-record">
      <div><h3>${story.title}</h3><p>${reached.size} / ${story.endings.length} 결말</p></div>
      <ul>${story.endings.map((ending) => `<li class="${reached.has(ending) ? "is-reached" : ""}">${reached.has(ending) ? ending : "아직 닿지 않은 결말"}</li>`).join("")}</ul>
    </article>`;
  }).join("");
}

renderEndingArchive();
window.addEventListener("novels:ending-recorded", renderEndingArchive);

document.querySelectorAll("[data-book]").forEach((book) => {
  book.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const storyId = book.dataset.book;
    const cover = book.querySelector(".book-cover");
    const progress = readingProgress(storyId);
    storyDialogCover.src = cover.src;
    storyDialogCover.alt = `${book.querySelector("h2").textContent} 표지`;
    storyDialogGenre.textContent = book.querySelector(".book-kicker").textContent;
    storyDialogTitle.textContent = book.querySelector("h2").textContent;
    storyDialogSummary.textContent = book.querySelector(".book-summary").textContent;
    storyDialogProgress.textContent = progress.label;
    storyDialogContinue.href = book.href;
    storyDialogContinue.textContent = progress.percent === 0 ? "읽기 시작" : "이어 읽기";
    storyDialogRestart.dataset.story = storyId;
    storyDialogRestart.dataset.href = book.href;
    storyDialogRestart.hidden = progress.percent === 0;
    storyDialog.showModal();
  });
});

storyDialogRestart.addEventListener("click", () => {
  const storyId = storyDialogRestart.dataset.story;
  const href = storyDialogRestart.dataset.href;
  if (!storyId || !href) return;
  localStorage.removeItem(saveKeys[storyId]);
  window.location.href = href;
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installButton.hidden = true;
    return;
  }
  installDialog.showModal();
});

closeInstallDialog.addEventListener("click", () => installDialog.close());

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
}
