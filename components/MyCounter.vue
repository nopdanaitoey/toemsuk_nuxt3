<template>
  <p class="text-3xl font-bold underline text-red-500">
    Counter: {{ store.count }}
  </p>
  <button class="btn btn-secondary">Secondary</button>
</template>
<script>
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  setup() {
    return {
      store: useCounterStore(),
    };
  },
});
</script>
