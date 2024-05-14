// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
  },
  // ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;'
        }
      }
    }
  },
  devtools: { enabled: true },
  modules: [// ...
    // ...
    '@nuxt/eslint', "@pinia/nuxt"],
  css: ['~/assets/css/main.css', 'animate.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt Dustin',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.FIREBASE_API_KEY,
    },
    currencyKey: process.env.CURRENCY_API_KEY,
    dustinKey: "DUSTIN_KEY",
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  },
  // css: ['@mdi/font/css/materialdesignicons.min.css'],
  // build: {
  //   transpile: ['vuetify'],
  // },
  // modules: [
  //   (_options, nuxt) => {
  //     nuxt.hooks.hook('vite:extendConfig', (config) => {
  //       // @ts-expect-error
  //       config.plugins.push(vuetify({ autoImport: true }))
  //     })
  //   },
  //   //...
  // ],
  // vite: {
  //   vue: {
  //     template: {
  //       transformAssetUrls,
  //     },
  //   },
  // },
})