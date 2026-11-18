<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
  <div class="rounded border p-4">
    <strong>{{ title }}</strong>
    <slot />
  </div>
</template>
