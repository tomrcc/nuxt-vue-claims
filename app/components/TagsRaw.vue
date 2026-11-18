<script setup lang="ts">
import RawTemplate from "./RawTemplate.vue";

defineProps<{ tags: string[] }>();
const TAG_BLUEPRINT = `<li data-editable="array-item"><editable-text data-prop=""></editable-text></li>`;
</script>

<template>
  <ul data-editable="array" data-prop="tags">
    <li v-for="tag in tags" :key="tag" data-editable="array-item">
      <editable-text data-prop="">{{ tag }}</editable-text>
    </li>
    <RawTemplate :html="TAG_BLUEPRINT" />
  </ul>
</template>
