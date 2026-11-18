<script setup lang="ts">
const route = useRoute();
const path = route.path.replace(/\/$/, "");
const { data: page } = await useAsyncData(path, () => queryCollection("mdc").path(path).first());
if (!page.value) throw createError({ statusCode: 404, fatal: true });
</script>

<template>
  <h1 class="mb-4 text-2xl">{{ page.title }}</h1>
  <div data-editable="text" data-type="block" data-prop="@content">
    <ContentRenderer :value="page" />
  </div>
</template>
