const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "VinaDoctor | Dịch vụ chăm sóc sức khỏe tại nhà",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dễ dàng khám bệnh tại nhà. Dù bạn ở nhà hay bất kỳ đâu, chỉ cần bạn đặt lịch thông qua ứng dụng, nhân viên y tế sẽ đến tại nhà phục vụ bạn tận tâm, đúng lịch hẹn' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/hodoc-logo-inverse.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['js-cookie'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
