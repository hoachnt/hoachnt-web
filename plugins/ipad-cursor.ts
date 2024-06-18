import { ipadCursorPlugin } from "ipad-cursor/vue";

export default defineNuxtPlugin((nuxtApp) => {
  const { isMobile } = useDevice();

  if (!isMobile()) {
    nuxtApp.vueApp.use(ipadCursorPlugin, {
      // global configurations
      blockStyle: {
        radius: "8px",
      },
      enableAutoTextCursor: true,
      enableMouseDownEffect: true,
      enableAutoUpdateCursor: true,
    });
  }
});
