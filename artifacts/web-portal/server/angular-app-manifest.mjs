
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
    'index.csr.html': {size: 21182, hash: '91e6c52d8d461e3850cc5fd7ba5157d4b719974228d6da1c0b572808d134c5cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1495, hash: '316707d2e86e38afb587db2d0f85937c23fcef01319b971722c92f688a625d51', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-372ZNL47.css': {size: 242688, hash: 'hhJpfPhSOvg', text: () => import('./assets-chunks/styles-372ZNL47_css.mjs').then(m => m.default)}
  },
};
