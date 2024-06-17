import { ipadCursorPlugin } from "ipad-cursor/vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ipadCursorPlugin, {
    // global configurations
    blockStyle: {
      radius: "8px",
      border: "1px solid #fff",
    },
    enableAutoTextCursor: true,
    enableLighting: true,
    enableMouseDownEffect: true,
    enableAutoUpdateCursor: true,
  });
});
