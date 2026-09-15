const CACHE = 'roteiro-torax-v1.3.0';
const SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/references/ref_arco_aorta_braquiocefalico.png',
  './images/references/ref_arco_aorta_vago.jpg',
  './images/references/ref_arco_azigo_vcs.jpg',
  './images/references/ref_azigo_hemi_ducto.jpg',
  './images/references/ref_azigo_intercostais_superiores.png',
  './images/references/ref_circuito_sistemico.jpg',
  './images/references/ref_extra_01_mediastino_aorta_lateral.jpg',
  './images/references/ref_extra_02_aorta_posterior.jpg',
  './images/references/ref_extra_03_veia_intercostal_posterior.jpg',
  './images/references/ref_extra_04_art_intercostal_ramos.jpg',
  './images/references/ref_extra_05_mama_vascularizacao.jpg',
  './images/references/ref_extra_06_arterias_torax_completo.jpg',
  './images/references/ref_extra_07_axila_arterias.jpg',
  './images/references/ref_extra_08_nervo_toracico_longo.jpg',
  './images/references/ref_extra_09_nervos_peitorais.jpg',
  './images/references/ref_extra_10_nervos_intercostais_subcostal.jpg',
  './images/references/ref_extra_11_ramos_comunicantes_azigo.jpg',
  './images/references/ref_extra_12_parede_posterior_feixe_intercostal.jpg',
  './images/references/ref_extra_13_sistema_azigo_posterior.jpg',
  './images/references/ref_extra_14_sistema_azigo_injetado.jpg',
  './images/references/ref_extra_15_sistema_azigo_esquema.jpg',
  './images/references/ref_extra_16_mediastino_posterior_direito.jpg',
  './images/references/ref_extra_17_intercostais_bronquiais_veias.jpg',
  './images/references/ref_extra_18_aorta_intercostais_costocervical.jpg',
  './images/references/ref_mama_vascularizacao_1.png',
  './images/references/ref_mama_vascularizacao_2.png',
  './images/references/ref_mediastino_aorta_intercostais.jpg',
  './images/references/ref_nervo_toracico_longo.jpg',
  './images/references/ref_nervos_intercostais.jpg',
  './images/references/ref_nervos_peitorais.jpg',
  './images/references/ref_regiao_deltopeitoral.png',
  './images/references/ref_subclavia.png',
  './images/references/ref_toracicas_superior_lateral.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(req, copy));
        }
        return res;
      }).catch(() => caches.match('./index.html')))
    );
  }
});
