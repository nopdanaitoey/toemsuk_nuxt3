<template>
  <dialog id="my_modal_1" class="modal">
    <form method="dialog" class="modal-box">
      <h3 class="font-bold text-lg mb-2">{{ action.toUpperCase() }}</h3>
      <login v-show="action === 'login'" />
      <register v-show="action === 'register'" />
      <div class="modal-action">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn w-full hover:bg-yellow-500 hover:text-white">
          ปิด
        </button>
      </div>
    </form>
  </dialog>
</template>

<script>
import { mapState } from "pinia";
import useModalStore from "@/stores/modal";
import login from "@/components/login.vue";
import register from "@/components/register.vue";
export default {
  name: "AuthModal",
  components: {
    login,
    register,
  },
  computed: {
    ...mapState(useModalStore, ["action"]),
  },
};
</script>

<style></style>
