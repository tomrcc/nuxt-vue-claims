export default defineNuxtConfig({
  compatibilityDate: "2026-09-16",
  devtools: { enabled: false },
  modules: ["@nuxt/content", "@nuxt/ui"],
  css: ["~/assets/main.css"],
  content: { experimental: { sqliteConnector: "native" } },
  nitro: { prerender: { crawlLinks: true, routes: ["/"] } },
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag.startsWith("editable-"),
    },
  },
});
