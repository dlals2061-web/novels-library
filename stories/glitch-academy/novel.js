const story = window.STORY;
const SAVE_KEY = `${story.id}-save-v1`;
const initialState = () => ({ sceneId: story.initialSceneId, memory: [] });
let state;
try { state = { ...initialState(), ...JSON.parse(localStorage.getItem(SAVE_KEY)) }; } catch { state = initialState(); }

const escapeHtml = (value = "") => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const chapter = document.querySelector("#chapterLabel");
const title = document.querySelector("#sceneTitle");
const text = document.querySelector("#storyText");
const choices = document.querySelector("#choices");
const hologramStatus = document.querySelector("#hologramStatus");

function render() {
  const scene = story.scenes[state.sceneId] ?? story.scenes[story.initialSceneId];
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  chapter.textContent = scene.chapter;
  title.textContent = scene.title;
  text.innerHTML = `${scene.ending ? `<p class="ending-label">${escapeHtml(scene.ending)}</p>` : ""}${scene.text.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}`;
  if (scene.ending) window.NovelsReader?.recordEnding(story.id, scene.ending);
  
  if (scene.eunseolStatus) {
    const s = scene.eunseolStatus;
    hologramStatus.style.display = "block";
    hologramStatus.innerHTML = `
      <div class="hologram-header">
        <span class="hologram-title">NEURAL CONNECT: CHAE EUNSEOL</span>
        <span class="hologram-pulse">● SIGNAL STATUS</span>
      </div>
      <div class="hologram-grid">
        <div class="hologram-metric">
          <span class="metric-label">심박수 (Heart Rate)</span>
          <span class="metric-value heartbeat-value">${s.heartbeat} <small>bpm</small></span>
        </div>
        <div class="hologram-metric">
          <span class="metric-label">아드레날린 (Adrenaline)</span>
          <span class="metric-value">${s.adrenaline}%</span>
        </div>
        <div class="hologram-metric">
          <span class="metric-label">동기화율 (Sync Rate)</span>
          <span class="metric-value sync-value">${s.sync}%</span>
        </div>
        <div class="hologram-metric">
          <span class="metric-label">시스템 감도 (Alert Level)</span>
          <span class="metric-value alert-value">${escapeHtml(s.alert)}</span>
        </div>
      </div>
      <div class="hologram-subtext">
        <span class="subtext-label">신경망 오작동 로그 (Glitched Inner Voice):</span>
        <p class="subtext-content">"${escapeHtml(s.innerVoice)}"</p>
      </div>
    `;
  } else {
    hologramStatus.style.display = "none";
  }

  choices.innerHTML = "";
  for (const choice of scene.choices ?? []) {
    const button = document.createElement("button");
    button.className = "choice";
    button.innerHTML = `${escapeHtml(choice.text)}<small>${escapeHtml(choice.subtext)}</small>`;
    button.addEventListener("click", () => { state.memory.push(choice.text); state.sceneId = choice.next; render(); });
    choices.append(button);
  }
}

render();
