<template>
    <main class="min-h-screen">
        <AppHeader
            class="mb-16"
            :title="$t('articles.articles')"
            :description="$t('articles.description')"
        />

        <UInput
            v-model="search"
            name="search"
            placeholder="Search..."
            icon="i-heroicons-magnifying-glass-20-solid"
            autocomplete="off"
            class="mb-10"
            size="xl"
            :ui="{ icon: { trailing: { pointer: '' } } }"
        >
            <template #trailing>
                <UButton
                    v-show="search !== ''"
                    color="gray"
                    variant="link"
                    icon="i-heroicons-x-mark-20-solid"
                    :padded="false"
                    @click="search = ''"
                />
            </template>
        </UInput>
        <ul class="space-y-16">
            <li
                v-for="(article, id) in results"
                :key="id"
                class="hover:bg-gray-200 dark:hover:bg-white/10 rounded-md duration-200"
            >
                <AppArticleCard :article="article" />
            </li>
        </ul>
    </main>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";

const hydrate = useBoosterHydrate();
const AppHeader = hydrate(() => import("@/components/App/Header.vue"));
const AppArticleCard = hydrate(
    () => import("@/components/App/ArticleCard.vue")
);

useSeoMeta({
    title: "Articles | Nguyen Tien Hoach",
    description: "Interesting articles that I found interesting",
});

const localePath = useLocalePath();

const search = ref("");

const { data: articles } = await useAsyncData("all-articles", () =>
    queryContent(localePath("/articles")).sort({ published: -1 }).find()
);

const results = computed(() => filterArticles(articles));

function filterArticles(articles: globalThis.Ref<ParsedContent[] | null>) {
    const result = articles.value?.filter((article) =>
        article.title?.toLowerCase()?.includes(search.value.toLowerCase())
    );

    return result;
}
</script>
