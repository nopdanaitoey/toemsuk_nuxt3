// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/assets/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  modules: [
    // ...
    "@pinia/nuxt",
    "@emanuele-em/nuxt-swipe",
    "@nuxtjs/tailwindcss",
  ],
});
