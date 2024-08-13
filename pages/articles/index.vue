<template>
    <main class="min-h-screen">
        <AppHeader
            class="mb-16"
            :title="$t('articles.articles')"
            :description="$t('articles.description')"
        />
        <ul class="space-y-16">
            <li
                v-for="(article, id) in articles"
                :key="id"
                class="hover:bg-gray-200 dark:hover:bg-white/10 rounded-md duration-200"
            >
                <AppArticleCard :article="article" />
            </li>
        </ul>
    </main>
</template>

<script setup>
const hydrate = useBoosterHydrate();
const AppHeader = hydrate(() => import("@/components/App/Header.vue"));
const AppArticleCard = hydrate(
    () => import("@/components/App/ArticleCard.vue")
);

const description = "Interesting articles that I found interesting.";
useSeoMeta({
    title: "Articles | Nguyen Tien Hoach",
    description,
});
const localePath = useLocalePath();

const { data: articles } = await useAsyncData("all-articles", () =>
    queryContent(localePath("/articles")).sort({ published: -1 }).find()
);
</script>
