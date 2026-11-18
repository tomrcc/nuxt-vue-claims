export default defineNuxtPlugin(() => {
  if (!(window as { inEditorMode?: boolean }).inEditorMode) return;
  import("../cloudcannon/registerComponents").catch((error) => {
    console.warn("Failed to load CloudCannon component registration:", error);
  });
});
