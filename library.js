const saveKeys = {
  "glass-season": "glass-season-save-v4",
  "lightless-photos": "lightless-photos-save-v1",
  "last-letters": "last-letters-save-v1",
};

const installButton = document.querySelector("#installButton");
const installDialog = document.querySelector("#installDialog");
const closeInstallDialog = document.querySelector("#closeInstallDialog");
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
