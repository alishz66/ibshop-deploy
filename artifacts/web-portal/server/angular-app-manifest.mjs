
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
    'index.csr.html': {size: 21831, hash: '4b7e2334d83aab5808c09fbe7480dbe4b91dd050f0acfe9c289ef8b6f2338aa1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1495, hash: 'bfa56708458ff5ee03c72e1ee18c245e88618a917706b34a1488a044d5f5a546', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3CCPIKC3.css': {size: 254482, hash: 'feiY3IV4W60', text: () => import('./assets-chunks/styles-3CCPIKC3_css.mjs').then(m => m.default)}
  },
};
