// import { defineNuxtConfig } from 'nuxt'
import MyModule from '..'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        MyModule,
        "@nuxtjs/color-mode",
        '@vueuse/nuxt',
        '@unocss/nuxt',
    ],
})
