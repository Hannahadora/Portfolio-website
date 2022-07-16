import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: "Hannah Ejimofor",
        meta: [
            { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
        css: [
            '~/assets/css/style.css',
            '~/assets/css/main.css',
        ],
        link: [{ rel: "stylesheet", href: "https://use.typekit.net/qss3fau.css" }],
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
