export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'noseborg',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/all.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // google-fonts module configuration
googleFonts: {
  families: {
    'IBM Plex Sans': {
      wght: [400, 500, 600, 700],
    },
  },
  display: 'swap'
},

// Bootstrap-Vue module configuration
bootstrapVue: {
  bootstrapCSS: false,
  bootstrapVueCSS: false
},

sitemap: {
  hostname: 'https://www.amorphoushotel.com/',
  gzip: true,
  exclude: [
  ],
  routes: [
    {
      url: '/',  //  relative path to hostname
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
  ]
},

// Import custom variable file to override default bootstrap variable
styleResources: {
  scss: '@/assets/css/helpers/_variables.scss'
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
