// plugins/intersectionObserver.client.ts

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("observe-bottom", {
        mounted(el, binding) {
            const callback = binding.value;
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        callback(); // Trigger the provided callback
                    }
                },
                {
                    root: null, // Observe the element in the viewport
                    threshold: 0.1, // Trigger when 10% of the element is visible
                }
            );

            observer.observe(el);

            el._observer = observer; // Store the observer instance for cleanup
        },
        unmounted(el) {
            if (el._observer) {
                el._observer.disconnect(); // Clean up observer when element is removed
            }
        },
    });
});
