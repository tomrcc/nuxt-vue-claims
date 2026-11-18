import type { Component } from "vue";
import CtaPlain from "../components/cta/CtaPlain.vue";
import CtaNuxtLink from "../components/cta/CtaNuxtLink.vue";
import CtaUseRoute from "../components/cta/CtaUseRoute.vue";
import CtaNuxtUi from "../components/cta/CtaNuxtUi.vue";
import TagsRaw from "../components/TagsRaw.vue";
import CtaAsyncData from "../components/cta/CtaAsyncData.vue";

export const componentMap: Record<string, Component> = {
  "cta-plain": CtaPlain,
  "cta-nuxtlink": CtaNuxtLink,
  "cta-useroute": CtaUseRoute,
  "cta-nuxtui": CtaNuxtUi,
  "tags-raw": TagsRaw,
  "cta-asyncdata": CtaAsyncData,
};
