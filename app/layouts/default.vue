<script setup lang="ts">
import { EditableRegions } from "@cloudcannon/editable-regions/vue";
</script>

<template>
  <EditableRegions tag="div" class="mx-auto max-w-2xl p-8">
    <nav class="mb-8"><a href="/">All checks</a></nav>
    <main>
      <slot />
    </main>
  </EditableRegions>
</template>
