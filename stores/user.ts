import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    locale: "en",
  }),
  actions: {
    changeLocale(locale: string) {
      this.locale = locale;
    },
  },
});
