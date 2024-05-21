// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    googleFonts: {families: {Inter: '200..700'}},
    modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon-tw', '@nuxtjs/google-fonts', '@nuxt/eslint'],
    app: {
        head: {
            title: "Skwal's site",
            meta: [
                {
                    name: 'description',
                    content:
                        'Skwal.net is my personal website, where I share my projects, my thoughts, and my knowledge.'
                }
            ]
        }
    }
})
