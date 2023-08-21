import { createI18n } from "vue-i18n";
import en from "~/locales/en.json";
import th from "~/locales/th.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    messages: {
      en,
      th,
    },
  });
  const availableLocales = ["en", "th"];
  vueApp.use(i18n);
});
