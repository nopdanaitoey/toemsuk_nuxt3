import { defineStore } from "pinia";

export default defineStore("modal", {
  state: () => ({
    action: ""
  }),
  actions: {
  async  changeStateAction(action: string) {
      console.log(action);
      this.action = await action;
    },
  },
});
