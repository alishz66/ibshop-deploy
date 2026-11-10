
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
    'index.csr.html': {size: 21165, hash: '39fb9b797c207b9bd41cdb7a80cec37236935f1caaa4dce39ce050f5a2e6e48b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1503, hash: '3f31315f33f1ff16e0d73946f6179e41cfc490ba89f3d74e75643185086d7222', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-J7RM7TU7.css': {size: 238424, hash: '6t+5fOCNmpY', text: () => import('./assets-chunks/styles-J7RM7TU7_css.mjs').then(m => m.default)}
  },
};
