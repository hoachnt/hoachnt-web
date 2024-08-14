import type { RouteLocationNormalized } from "vue-router";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$router.afterEach(
        (to: RouteLocationNormalized) => {
            if (to.hash) {
                setTimeout(() => {
                    const element = document.querySelector(to.hash);

                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 0);
            } else {
                window.scrollTo(0, 0);
            }
        }
    );
});
