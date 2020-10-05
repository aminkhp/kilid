import { version } from "../package.json";
const filesToCache = ["/", "src.77de5100.js", "src.77de5100.css"];

const cacheName = `cache-${version}`;

self.addEventListener("install", (e: any) => {
  const event = e as ExtendableEvent;
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (e: any) => {
  const event = e as FetchEvent;
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", (e: any) => {
  const event = e as ExtendableEvent;
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((n) => n !== cacheName)
          .map((name) => caches.delete(name))
      );
    })
  );
});
