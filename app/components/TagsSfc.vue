<script setup lang="ts">
defineProps<{ tags: string[] }>();
</script>

<template>
  <ul data-editable="array" data-prop="tags">
    <li v-for="tag in tags" :key="tag" data-editable="array-item">
      <editable-text data-prop="">{{ tag }}</editable-text>
    </li>
    <template>
      <li data-editable="array-item"><editable-text data-prop=""></editable-text></li>
    </template>
  </ul>
</template>
