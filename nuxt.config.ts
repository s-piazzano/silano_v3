// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "@nuxt/image",
    "nuxt-icon",
    "@hypernym/nuxt-anime",
  ],
  anime: { composables: true },
});
