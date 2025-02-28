import type { ArticleCollectionItem } from "@nuxt/content";

// composables/useSearch.ts
export function useSearch(articles: Ref<ArticleCollectionItem[]>) {
    const searchQuery = ref("");
    const debouncedSearchQuery = ref("");
    const activeIndex = ref(-1);

    const updateSearchQuery = useDebounceFn((value: string) => {
        activeIndex.value = -1;
        searchQuery.value = value;
    }, 500);

    const results = computed(() => {
        if (!articles.value.length || !searchQuery.value) return articles.value;
        return articles.value.filter((article) =>
            article.title
                ?.toLowerCase()
                .includes(searchQuery.value.toLowerCase())
        );
    });

    watchEffect(() => {
        updateSearchQuery(debouncedSearchQuery.value);
    });

    return { searchQuery, debouncedSearchQuery, results, activeIndex };
}
