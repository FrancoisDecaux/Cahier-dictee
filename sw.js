// Mode hors ligne : on essaie toujours internet d'abord (pour avoir la dernière liste),
// et si le réseau ne répond pas, on utilise la dernière copie gardée sur l'iPad.
const CACHE = "cahier-dictee-v2";
const FICHIERS = ["./", "index.html", "mots.js", "icone.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(cles => Promise.all(cles.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // mots.js?v=123 et mots.js : même copie
  const cle = url.origin === location.origin ? url.origin + url.pathname : req.url;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      // no-store : on ne se contente pas de la copie de Safari, on va vraiment sur internet
      const frais = url.origin === location.origin ? fetch(url.href, { cache: "no-store" }) : fetch(req);
      const rep = await Promise.race([
        frais,
        new Promise((_, rejet) => setTimeout(() => rejet(new Error("réseau trop lent")), 5000))
      ]);
      if (rep && (rep.ok || rep.type === "opaque")) cache.put(cle, rep.clone());
      return rep;
    } catch (err) {
      const copie = await cache.match(cle)
        || (req.mode === "navigate" ? (await cache.match(self.registration.scope)) || (await cache.match(new URL("index.html", self.registration.scope).href)) : null);
      if (copie) return copie;
      throw err;
    }
  })());
});
