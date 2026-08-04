const saveKeys = {
  "glass-season": "glass-season-save-v4",
  "lightless-photos": "lightless-photos-save-v1",
  "last-letters": "last-letters-save-v1",
};

const installButton = document.querySelector("#installButton");
const installDialog = document.querySelector("#installDialog");
const closeInstallDialog = document.querySelector("#closeInstallDialog");
let deferredInstallPrompt = null;

function hasReadingRecord(storyId) {
  try {
    return Boolean(JSON.parse(localStorage.getItem(saveKeys[storyId]))?.sceneId);
  } catch {
    return false;
  }
}

document.querySelectorAll("[data-story]").forEach((label) => {
  if (hasReadingRecord(label.dataset.story)) {
    label.textContent = "이어 읽기";
  }
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
