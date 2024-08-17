import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
    async scrollBehavior(to, from, savedPosition) {
        const nuxtApp = useNuxtApp();

        // Убедитесь, что маршрут изменился.
        if (nuxtApp.$i18n && to.name !== from.name) {
            await nuxtApp.$i18n.waitForPendingLocaleChange();
        }

        // Если есть якорь (hash) в URL, прокручиваем к нему
        if (to.hash) {
            const element = document.querySelector(to.hash);
            if (element) {
                return {
                    el: to.hash,
                    behavior: "smooth", // или 'auto', если вам не нужна плавная прокрутка
                };
            }
        }

        // Если сохранена позиция, возвращаем её
        return savedPosition || { top: 0 };
    },
};
