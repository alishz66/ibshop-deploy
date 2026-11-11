
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
    "route": "/personality-test"
  },
  {
    "renderMode": 0,
    "redirectTo": "/plans/compare",
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
    "route": "/services"
  },
  {
    "renderMode": 0,
    "route": "/services/credit"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/credit",
    "route": "/services/credit-card"
  },
  {
    "renderMode": 0,
    "route": "/services/brokerage"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/brokerage",
    "route": "/services/ibtrader"
  },
  {
    "renderMode": 0,
    "route": "/services/sejam"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/sejam",
    "route": "/services/sejam-auth"
  },
  {
    "renderMode": 0,
    "route": "/services/otp"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/otp",
    "route": "/services/ibshop-otp"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/otp",
    "route": "/services/otp-activation"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/credit",
    "route": "/credit"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/credit",
    "route": "/credit-card"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/brokerage",
    "route": "/brokerage"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/brokerage",
    "route": "/ibtrader"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/sejam",
    "route": "/sejam"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/sejam",
    "route": "/sejam-auth/landing"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/sejam",
    "route": "/authentication"
  },
  {
    "renderMode": 0,
    "redirectTo": "/services/otp",
    "route": "/otp"
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
    'index.csr.html': {size: 21108, hash: 'd715e6b092198ba5945a5bd53b246624dd1d661d6a4d7c3832c87432999ca1fe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1503, hash: 'dbb72195c99608f80b88026eac85837825a511c38a23db602b06ceca078c00b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-Y5ILGL2N.css': {size: 242898, hash: 'eKZc0/Z+7SQ', text: () => import('./assets-chunks/styles-Y5ILGL2N_css.mjs').then(m => m.default)}
  },
};
