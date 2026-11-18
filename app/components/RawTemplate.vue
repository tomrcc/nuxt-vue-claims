<script lang="ts">
import { createStaticVNode, defineComponent } from "vue";

export default defineComponent({
  props: { html: { type: String, required: true } },
  setup(props) {
    return () => createStaticVNode(`<template>${props.html}</template>`, 1);
  },
});
</script>
