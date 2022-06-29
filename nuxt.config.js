export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt',
    htmlAttrs: {
      lang: 'tw'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css' },
    ],
    script: [
      { src: 'https://apis.google.com/js/platform.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/all.scss', lang: 'sass' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/fb-sdk.js', ssr: false },
    { src: '~/plugins/vee-validate.js', ssr: false },
    { src: '~plugins/mock.js', ssr: false },
    { src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', ssr: false },
    "@/plugins/element-ui",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  dev: process.env.NODE_ENV !== 'production',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/composition-api/module',
    'nuxt-vite',
    // '@nuxtjs/ngrok',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  ngrok: {
    // module options
    authtoken: '1b2T4fffVFLNhLqdIBk6BWyNTzY_7s69KaeUQBegWhp2n6tts',
    region: 'tw',
    addr: 8080,
    proto: 'http',
  },

  axios: {
    // proxyHeaders: false
    // baseURL: 'http://localhost:3000/'
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://api.nuxtjs.dev'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // vite: { ssr: true },
  server: {
    // port: 5567, // default: 3000
  },
  target: 'static',
  router: {
    mode: 'hash',
    base: process.env.NODE_ENV === 'production' ? '/allwellDebit/dist/' : '/',
  },
  // generate: {
  //   minify: {
  //     collapseWhitespace: true
  //   }
  // }
}
