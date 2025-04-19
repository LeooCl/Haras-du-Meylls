// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&family=Delius+Swash+Caps&family=Julius+Sans+One&family=Mea+Culpa&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap'
        }
      ]
    }
  }
})