// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  googleFonts: { families: { Inter: '200..700' } },
  modules: [
    '@pinia/nuxt', 
    '@nuxtjs/tailwindcss', 
    'nuxt-icon-tw', 
    '@nuxtjs/google-fonts'
  ],
})