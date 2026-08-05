const CACHE_NAME = "interactive-novel-library-v6";
const APP_SHELL = [
  "./",
  "./index.html",
  "./library.css",
  "./design-system.css",
  "./library.js",
  "./reader-tools.css",
  "./reader-tools.js",
  "./covers/glass-season-cover.webp",
  "./covers/lightless-photos-cover.webp",
  "./covers/last-letters-cover.webp",
  "./art/glass-season-ending.webp",
  "./art/lightless-photos-ending.webp",
  "./art/last-letters-ending.webp",
  "./manifest.webmanifest",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./stories/glass-season/index.html",
  "./stories/glass-season/styles.css",
  "./stories/glass-season/story-data.js",
  "./stories/glass-season/novel.js",
  "./stories/glass-season/icons/icon-180.png",
  "./stories/glass-season/icons/icon-192.png",
  "./stories/glass-season/icons/icon-512.png",
  "./stories/lightless-photos/index.html",
  "./stories/lightless-photos/styles.css",
  "./stories/lightless-photos/story-data.js",
  "./stories/lightless-photos/novel.js",
  "./stories/lightless-photos/icons/icon-180.png",
  "./stories/lightless-photos/icons/icon-192.png",
  "./stories/lightless-photos/icons/icon-512.png",
  ...Array.from({ length: 18 }, (_, index) => `./stories/lightless-photos/chapters/chapter-${String(index + 1).padStart(2, "0")}.md`),
  "./stories/last-letters/index.html",
  "./stories/last-letters/styles.css",
  "./stories/last-letters/story-data.js",
  "./stories/last-letters/novel.js",
  "./stories/last-letters/icons/icon-180.png",
  "./stories/last-letters/icons/icon-192.png",
  "./stories/last-letters/icons/icon-512.png",
  ...Array.from({ length: 17 }, (_, index) => `./stories/last-letters/chapters/chapter-${String(index + 1).padStart(2, "0")}.md`),
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    (async () => {
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
    })(),
  );
});
