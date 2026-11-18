<script setup lang="ts">
const { data: pages } = await useAsyncData("checks", () => queryCollection("pages").all());
const { data: mdc } = await useAsyncData("mdc", () => queryCollection("mdc").all());
</script>

<template>
  <h1 class="mb-4 text-2xl">Nuxt + Vue claim checks</h1>
  <ul>
    <li v-for="page in pages" :key="page.path"><a :href="page.path">{{ page.title }}</a></li>
    <li v-for="page in mdc" :key="page.path"><a :href="page.path">{{ page.title }}</a></li>
  </ul>
</template>
