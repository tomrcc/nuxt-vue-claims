<script setup lang="ts">
defineProps<{ type?: string }>();
</script>

<template>
  <div class="my-4 rounded border p-4" :data-type="type">
    <slot />
  </div>
</template>
