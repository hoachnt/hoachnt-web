import type { ArticleCollectionItem } from "@nuxt/content";

// composables/useShortcuts.ts
export function useShortcuts(
    results: Ref<ArticleCollectionItem[]>,
    activeIndex: Ref<number>
) {
    const router = useRouter();
    const activeArticle = computed(
        () => results.value[activeIndex.value] || null
    );

    const handleArrowUp = () => {
        if (!results.value.length) return;
        activeIndex.value =
            activeIndex.value === 0
                ? results.value.length - 1
                : activeIndex.value - 1;
    };

    const handleArrowDown = () => {
        if (!results.value.length) return;
        activeIndex.value =
            activeIndex.value === results.value.length - 1
                ? 0
                : activeIndex.value + 1;
    };

    const handleEnter = () => {
        if (!activeArticle.value?.path) return;
        router.push(activeArticle.value.path);
    };

    defineShortcuts({
        arrowup: { usingInput: "search", handler: handleArrowUp },
        arrowdown: { usingInput: "search", handler: handleArrowDown },
        enter: { usingInput: "search", handler: handleEnter },
    });

    return { activeArticle, handleArrowUp, handleArrowDown, handleEnter };
}
