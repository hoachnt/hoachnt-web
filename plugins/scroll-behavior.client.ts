import type { RouteLocationNormalized } from "vue-router";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$router.afterEach(
        async (to: RouteLocationNormalized) => {
            console.log(to.hash);
            if (to.hash) return to.hash;

            return window.scrollTo(0, 0);
        }
    );
});
