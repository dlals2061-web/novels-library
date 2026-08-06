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
const storyDialogDuration = document.querySelector("#storyDialogDuration");
const storyDialogScenes = document.querySelector("#storyDialogScenes");
const storyDialogEndings = document.querySelector("#storyDialogEndings");
const storyDialogExcerpt = document.querySelector("#storyDialogExcerpt");
const storyDialogProgress = document.querySelector("#storyDialogProgress");
const storyDialogContinue = document.querySelector("#storyDialogContinue");
const storyDialogRestart = document.querySelector("#storyDialogRestart");
const restartDialog = document.querySelector("#restartDialog");
const continueReading = document.querySelector("#continueReading");
const continueReadingCard = document.querySelector("#continueReadingCard");
const continueReadingUpdated = document.querySelector("#continueReadingUpdated");
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
    const activity = window.NovelsReader?.getReadingActivity?.()[storyId];
    if (record.sceneId === "ending" || record.sceneId.startsWith("ending") || activity?.isEnding) {
      return { label: "결말 도달", percent: 100, activity };
    }
    const choiceCount = Array.isArray(record.memory) ? record.memory.length : 0;
    const exactActivity = activity?.sceneId === record.sceneId ? activity : null;
    const percent = exactActivity?.percent ?? Math.min(95, Math.max(3, Math.round((choiceCount / (metadata?.representativeChoices ?? 20)) * 100)));
    const location = [exactActivity?.chapter, exactActivity?.title].filter(Boolean).join(" · ");
    return { label: `${percent}% · 선택 ${choiceCount}개`, detail: location ? `${percent}% · ${location}` : "", percent, activity: exactActivity };
  } catch {
    return { label: "읽기 시작", percent: 0 };
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

function relativeTime(value) {
  const timestamp = Date.parse(value);
  if (!Number.isFinite(timestamp)) return "이전에 읽던 기록";
  const minutes = Math.max(0, Math.round((Date.now() - timestamp) / 60000));
  if (minutes < 1) return "방금 읽음";
  if (minutes < 60) return `${minutes}분 전 읽음`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}시간 전 읽음`;
  const days = Math.round(hours / 24);
  return days < 30 ? `${days}일 전 읽음` : new Intl.DateTimeFormat("ko", { month: "long", day: "numeric" }).format(timestamp);
}

function renderContinueReading() {
  const candidates = catalog.map((story, index) => {
    const progress = readingProgress(story.id);
    const book = document.querySelector(`[data-book="${story.id}"]`);
    return { story, index, progress, book };
  }).filter(({ progress }) => progress.percent > 0 && progress.percent < 100);
  candidates.sort((a, b) => {
    const aTime = Date.parse(a.progress.activity?.updatedAt ?? "") || 0;
    const bTime = Date.parse(b.progress.activity?.updatedAt ?? "") || 0;
    return bTime - aTime || a.index - b.index;
  });
  const current = candidates[0];
  continueReading.hidden = !current;
  if (!current) {
    continueReadingCard.replaceChildren();
    return;
  }
  const { story, progress, book } = current;
  const cover = book.querySelector(".book-cover");
  const lastChoice = progress.activity?.lastChoice ? `마지막 선택 · ${progress.activity.lastChoice}` : "선택 기록이 이 기기에 저장되어 있습니다.";
  continueReadingUpdated.textContent = relativeTime(progress.activity?.updatedAt);
  continueReadingCard.innerHTML = `<a class="continue-card" href="${escapeHtml(book.href)}">
    <img class="continue-card-cover" src="${escapeHtml(cover.src)}" alt="" width="400" height="600" />
    <div class="continue-card-copy">
      <p class="book-kicker">${escapeHtml(book.querySelector(".book-kicker").textContent)}</p>
      <h3>${escapeHtml(story.title)}</h3>
      <p class="continue-card-location">${escapeHtml(progress.detail || progress.label)}</p>
      <p class="continue-card-choice">${escapeHtml(lastChoice)}</p>
      <div class="continue-card-progress" role="progressbar" aria-label="독서 진행률" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress.percent}"><span style="width:${progress.percent}%"></span></div>
    </div>
    <span class="continue-card-action">이어 읽기</span>
  </a>`;
}

document.querySelectorAll("[data-story]").forEach((label) => {
  label.textContent = readingProgress(label.dataset.story).label;
});
renderContinueReading();
window.addEventListener("novels:activity-updated", renderContinueReading);

function updateHomeContinue() {
  const homeContinue = document.querySelector("#homeContinue");
  if (!homeContinue) return;
  const inProgress = catalog
    .map((story) => ({ story, progress: readingProgress(story.id) }))
    .find(({ progress }) => progress.percent > 0 && progress.percent < 100);
  if (!inProgress) return;
  homeContinue.href = `./stories/${inProgress.story.id}/index.html`;
  homeContinue.textContent = `${inProgress.story.title} 이어 읽기`;
}

updateHomeContinue();

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
    storyDialogDuration.textContent = `약 ${catalogById[storyId]?.estimatedMinutes ?? "?"}분`;
    storyDialogScenes.textContent = `${catalogById[storyId]?.sceneCount ?? "?"}개`;
    storyDialogEndings.textContent = `${catalogById[storyId]?.endings?.length ?? "?"}개`;
    storyDialogExcerpt.textContent = catalogById[storyId]?.excerpt ?? "";
    storyDialogProgress.textContent = progress.detail || progress.label;
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
  restartDialog.dataset.story = storyId;
  restartDialog.dataset.href = href;
  restartDialog.showModal();
});

restartDialog.addEventListener("close", () => {
  if (restartDialog.returnValue !== "confirm") return;
  const storyId = restartDialog.dataset.story;
  const href = restartDialog.dataset.href;
  if (!storyId || !href) return;
  localStorage.removeItem(saveKeys[storyId]);
  window.NovelsReader?.removeReadingActivity?.(storyId);
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
