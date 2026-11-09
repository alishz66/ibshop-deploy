
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/cart"
  },
  {
    "renderMode": 0,
    "route": "/plans"
  },
  {
    "renderMode": 0,
    "route": "/plans/compare"
  },
  {
    "renderMode": 0,
    "route": "/plans/*"
  },
  {
    "renderMode": 0,
    "route": "/funds"
  },
  {
    "renderMode": 0,
    "route": "/funds/compare"
  },
  {
    "renderMode": 0,
    "route": "/funds/*"
  },
  {
    "renderMode": 0,
    "route": "/branches"
  },
  {
    "renderMode": 0,
    "route": "/products"
  },
  {
    "renderMode": 0,
    "route": "/products/*"
  },
  {
    "renderMode": 0,
    "route": "/markets"
  },
  {
    "renderMode": 0,
    "route": "/markets/*"
  },
  {
    "renderMode": 0,
    "redirectTo": "/markets",
    "route": "/market-analysis"
  },
  {
    "renderMode": 0,
    "route": "/about"
  },
  {
    "renderMode": 0,
    "route": "/about/*"
  },
  {
    "renderMode": 0,
    "redirectTo": "/about",
    "route": "/about-us"
  },
  {
    "renderMode": 0,
    "route": "/contact-us"
  },
  {
    "renderMode": 0,
    "route": "/licenses"
  },
  {
    "renderMode": 0,
    "route": "/404"
  },
  {
    "renderMode": 0,
    "redirectTo": "/404",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 20555, hash: '3b2bac478f32050aa87f6bedfd2b622dc124ff99616872ecf32949c3854c24f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1503, hash: '7fde34e94ca7bc8cdf0d5f7ef08af1e59cf5d9d9cc3191d98fd1708855c198ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-NDCQO7PL.css': {size: 208347, hash: '1nwCZ42ZKaI', text: () => import('./assets-chunks/styles-NDCQO7PL_css.mjs').then(m => m.default)}
  },
};
