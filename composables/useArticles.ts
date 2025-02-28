// composables/useArticles.ts
import type { ArticleCollectionItem } from "@nuxt/content";

export function useArticles() {
    const localePath = useLocalePath();
    const { getCollectionLanguage } = useCollectionLanguage<"article">();

    const articles = ref<ArticleCollectionItem[]>([]);

    const fetchArticles = async () => {
        const response = await useAsyncData(localePath("/articles"), () =>
            queryCollection(
                getCollectionLanguage("article", localePath("/articles"))
            ).all()
        );

        articles.value =
            response.data.value?.sort(
                (a, b) =>
                    new Date(b.published).getTime() -
                    new Date(a.published).getTime()
            ) || [];
    };

    watch(localePath, fetchArticles);

    return { articles, fetchArticles };
}
