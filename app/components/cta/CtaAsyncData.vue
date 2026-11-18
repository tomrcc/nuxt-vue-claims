<script setup lang="ts">
defineProps<{ heading: string; button_label: string; button_url: string }>();
const { data: other } = await useAsyncData("cta-asyncdata-other", () =>
  queryCollection("pages").path("/cta-plain").first(),
);
</script>

<template>
  <section class="border p-4">
    <h2><editable-text data-prop="heading">{{ heading }}</editable-text></h2>
    <a :href="button_url"><editable-text data-prop="button_label">{{ button_label }}</editable-text></a>
    <p>Loaded: {{ other?.title }}</p>
  </section>
</template>
