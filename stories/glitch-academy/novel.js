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
    button.addEventListener("click", () => {
      state.memory.push(choice.text);
      let nextSceneId = choice.next;
      
      if (nextSceneId === "eval_portal_endings") {
        const syncChoices = [
          "\"저, 그냥 스마트폰을 루팅하려던 학생인데요...\"",
          "\"혹시... 배고프지 않으세요? 이거 드실래요?\"",
          "(그녀의 손을 맞잡으며) \"은설 씨야말로 손이 엄청 차가운데요.\"",
          "떠오른 그녀의 허리를 감싸 안아 고정한다.",
          "은설의 총구를 내리고, 그녀를 밀쳐내며 보안 공격을 대신 맞는다.",
          "\"은설 씨가 다치는 것보단 나으니까요.\""
        ];
        const syncScore = state.memory.filter(c => syncChoices.includes(c)).length;
        if (syncScore >= 4) {
          nextSceneId = "ending_happy_reality";
        } else if (syncScore >= 2) {
          nextSceneId = "ending_normal_email";
        } else {
          nextSceneId = "ending_sad_reset";
        }
      } else if (nextSceneId === "eval_shield_endings") {
        const syncChoices = [
          "\"저, 그냥 스마트폰을 루팅하려던 학생인데요...\"",
          "\"혹시... 배고프지 않으세요? 이거 드실래요?\"",
          "(그녀의 손을 맞잡으며) \"은설 씨야말로 손이 엄청 차가운데요.\"",
          "떠오른 그녀의 허리를 감싸 안아 고정한다.",
          "은설의 총구를 내리고, 그녀를 밀쳐내며 보안 공격을 대신 맞는다.",
          "\"은설 씨가 다치는 것보단 나으니까요.\""
        ];
        const syncScore = state.memory.filter(c => syncChoices.includes(c)).length;
        if (syncScore >= 3) {
          nextSceneId = "ending_happy_future";
        } else {
          nextSceneId = "ending_normal_hologram";
        }
      }
      
      state.sceneId = nextSceneId;
      render();
    });
    choices.append(button);
  }
}

render();
