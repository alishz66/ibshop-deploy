
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "libs/cms/feature-shell/src/index.ts": [
    "chunk-ERQ4OJN2.js",
    "chunk-KVQVYCUN.js",
    "chunk-IZNLB3FL.js"
  ],
  "libs/cms/feature-home/src/index.ts": [
    "chunk-U7C7JG7I.js",
    "chunk-KVQVYCUN.js",
    "chunk-IZNLB3FL.js"
  ],
  "libs/cart/feature-cart/src/index.ts": [
    "chunk-5LN47VWD.js",
    "chunk-IZNLB3FL.js"
  ],
  "libs/cms/feature-catalog/src/index.ts": [
    "chunk-R4MHKOL7.js",
    "chunk-KVQVYCUN.js",
    "chunk-IZNLB3FL.js"
  ]
},
  assets: {
    'index.csr.html': {size: 20490, hash: '5c3a5bb17a167f3fe82024c70db4806ff94ca8f280eb8f869cceaa6242ad2735', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1503, hash: 'c4cefb7c3fe472152f4df20d6b2e6591dfdedee9580c791eb067bb90cbe147ff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YNQ7MHD2.css': {size: 201194, hash: 'hBgUF6lvPl4', text: () => import('./assets-chunks/styles-YNQ7MHD2_css.mjs').then(m => m.default)}
  },
};
