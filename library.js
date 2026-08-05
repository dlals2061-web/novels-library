const saveKeys = {
  "glass-season": "glass-season-save-v4",
  "lightless-photos": "lightless-photos-save-v1",
  "last-letters": "last-letters-save-v1",
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
let deferredInstallPrompt = null;

function readingProgress(storyId) {
  try {
    const record = JSON.parse(localStorage.getItem(saveKeys[storyId]));
    if (!record?.sceneId) return "읽기 시작";
    if (record.sceneId === "ending" || record.sceneId.startsWith("ending")) return "결말 도달";
    const choiceCount = Array.isArray(record.memory) ? record.memory.length : 0;
    return choiceCount ? `선택 ${choiceCount}개 · 이어 읽기` : "이어 읽기";
  } catch {
    return "읽기 시작";
  }
}

document.querySelectorAll("[data-story]").forEach((label) => {
  label.textContent = readingProgress(label.dataset.story);
});

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
    storyDialogProgress.textContent = progress;
    storyDialogContinue.href = book.href;
    storyDialogContinue.textContent = progress === "읽기 시작" ? "읽기 시작" : "이어 읽기";
    storyDialogRestart.dataset.story = storyId;
    storyDialogRestart.dataset.href = book.href;
    storyDialogRestart.hidden = progress === "읽기 시작";
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
