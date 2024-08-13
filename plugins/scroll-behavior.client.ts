export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$router.afterEach(() => {
        window.scrollTo(0, 0);
    });
});
