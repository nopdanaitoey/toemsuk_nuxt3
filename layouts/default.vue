<template>
  <div>
    <template v-if="$route.name !== 'index'">
      <GlobalAppHeader></GlobalAppHeader>
    </template>
    <loginModalVue />
    <slot />
  </div>
</template>
<script>
import loginModalVue from "@/components/Modal/authModal.vue";
export default {
  components: { loginModalVue },
};
</script>
