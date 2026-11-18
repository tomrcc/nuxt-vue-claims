<script setup lang="ts">
import { componentMap } from "~/cloudcannon/componentMap";
import TagsRaw from "~/components/TagsRaw.vue";
import TagsSfc from "~/components/TagsSfc.vue";

const route = useRoute();
const path = route.path.replace(/\/$/, "") || "/";
const { data: page } = await useAsyncData(path, () => queryCollection("pages").path(path).first());
if (!page.value) throw createError({ statusCode: 404, fatal: true });
</script>

<template>
  <h1 class="mb-4 text-2xl" data-editable="text" data-type="span" data-prop="title">{{ page.title }}</h1>
  <editable-component v-if="page.cta" :data-component="page.check" data-prop="cta">
    <component :is="componentMap[page.check]" v-bind="page.cta" />
  </editable-component>
  <TagsRaw v-if="page.check === 'blueprint-raw'" :tags="page.tags ?? []" />
  <TagsSfc v-if="page.check === 'blueprint-sfc'" :tags="page.tags ?? []" />
  <editable-component v-if="page.check === 'blueprint-registered-raw'" data-component="tags-raw" data-prop-tags="tags">
    <TagsRaw :tags="page.tags ?? []" />
  </editable-component>
</template>
