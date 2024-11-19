import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
    async scrollBehavior(to, from, savedPosition) {
        const nuxtApp = useNuxtApp();

        // Verify that the route has changed.
        if (nuxtApp.$i18n && to.name !== from.name) {
            await nuxtApp.$i18n.waitForPendingLocaleChange();
        }

        // If there is an anchor (hash) in the URL, scroll to it
        if (to.hash) {
            const element = document.querySelector(to.hash);
            if (element) {
                return {
                    el: to.hash,
                    behavior: "smooth", // Or 'auto', if u don't need smooth scroll
                };
            }
        }

        // If the position is saved, we return it
        return savedPosition || { top: 0 };
    },
};
