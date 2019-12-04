module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  router: {
    extendRoutes(routes, resolve) {
      const index = routes.findIndex(route => route.name === 'index')
      routes[index] = {
        ...routes[index],
        components: {
          default: routes[index].component,
          header: resolve(__dirname, 'layout/AppHeader.vue')
        },
        chunkNames: {
          header: 'layout/AppHeader'
        }
      }
    }
  },
  head: {
    title: process.env.npm_package_name || "",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no"
      },
      {
        hid: "description",
        name: "description",
        content: "pagina hecha con nuxt!"
      },
      {
        name: "author",
        content: "ViktorJJF"
      }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }, {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/argon.scss", "@/assets/vendor/nucleo/css/nucleo.css", "@/assets/vendor/font-awesome/css/font-awesome.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/argon-kit.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
