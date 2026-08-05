const CACHE_NAME = "interactive-novel-library-v8";
const ENABLED_STORIES = ["glass-season","lightless-photos","last-letters","glitch-academy"];
const COMMON_SHELL = [
  "./", "./index.html", "./library.css", "./design-system.css", "./catalog.js", "./library.js",
  "./reader-tools.css", "./reader-tools.js", "./manifest.webmanifest",
  "./icons/icon-180.png", "./icons/icon-192.png", "./icons/icon-512.png",
];
const STORY_SHELLS = {
  "glass-season": [
    "./covers/glass-season-cover.webp", "./art/glass-season-ending.webp",
    "./portraits/glass-season-dohyun.webp", "./portraits/glass-season-jian.webp",
    "./portraits/glass-season-yuri.webp", "./portraits/glass-season-taeo.webp",
    "./stories/glass-season/index.html", "./stories/glass-season/styles.css",
    "./stories/glass-season/story-data.js", "./stories/glass-season/novel.js",
    "./stories/glass-season/icons/icon-180.png", "./stories/glass-season/icons/icon-192.png", "./stories/glass-season/icons/icon-512.png",
  ],
  "lightless-photos": [
    "./covers/lightless-photos-cover.webp", "./art/lightless-photos-ending.webp",
    "./portraits/lightless-photos-jaeho.webp", "./portraits/lightless-photos-dojin.webp",
    "./portraits/lightless-photos-haeyun.webp", "./portraits/lightless-photos-yeojin.webp",
    "./stories/lightless-photos/index.html", "./stories/lightless-photos/styles.css",
    "./stories/lightless-photos/story-data.js", "./stories/lightless-photos/novel.js",
    "./stories/lightless-photos/icons/icon-180.png", "./stories/lightless-photos/icons/icon-192.png", "./stories/lightless-photos/icons/icon-512.png",
    ...Array.from({ length: 18 }, (_, index) => `./stories/lightless-photos/chapters/chapter-${String(index + 1).padStart(2, "0")}.md`),
  ],
  "last-letters": [
    "./covers/last-letters-cover.webp", "./art/last-letters-ending.webp",
    "./portraits/last-letters-harin.webp", "./portraits/last-letters-minjae.webp",
    "./portraits/last-letters-eunchai.webp", "./portraits/last-letters-sora.webp",
    "./stories/last-letters/index.html", "./stories/last-letters/styles.css",
    "./stories/last-letters/story-data.js", "./stories/last-letters/novel.js",
    "./stories/last-letters/icons/icon-180.png", "./stories/last-letters/icons/icon-192.png", "./stories/last-letters/icons/icon-512.png",
    ...Array.from({ length: 17 }, (_, index) => `./stories/last-letters/chapters/chapter-${String(index + 1).padStart(2, "0")}.md`),
  ],
  "glitch-academy": [
    "./covers/glitch-academy-cover.webp", "./art/glitch-academy-ending.webp",
    "./stories/glitch-academy/index.html", "./stories/glitch-academy/styles.css",
    "./stories/glitch-academy/story-data.js", "./stories/glitch-academy/novel.js",
    "./stories/glitch-academy/icons/icon-180.png", "./stories/glitch-academy/icons/icon-192.png", "./stories/glitch-academy/icons/icon-512.png",
  ],
};
const APP_SHELL = [...COMMON_SHELL, ...ENABLED_STORIES.flatMap((storyId) => STORY_SHELLS[storyId] ?? [])];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith((async () => {
    try {
      const response = await fetch(event.request);
      const url = new URL(event.request.url);
      if (response.ok && url.origin === self.location.origin) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(event.request, response.clone());
      }
      return response;
    } catch {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      if (event.request.mode === "navigate") return caches.match("./index.html");
      throw new Error("오프라인 캐시에 요청 파일이 없습니다.");
    }
  })());
});
