<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";

const hydrate = useBoosterHydrate();
const AppHeader = hydrate(() => import("@/components/App/Header.vue"));
const AppArticleCard = hydrate(
    () => import("@/components/App/ArticleCard.vue")
);

const localePath = useLocalePath();
const route = useRoute();
const { t } = useI18n();

const seoMeta = ref({
    title: `${t("seo.articles.title")} | ${t("title")}`,
    description: t("seo.articles.description"),
});

useSeoMeta(seoMeta.value);

const search = ref("");

const { data: articles } = await useAsyncData(
    `all-articles-${route.path}`,
    () => queryContent(localePath("/articles")).sort({ published: -1 }).find()
);

const results = computed(() => filterArticles(articles));

function filterArticles(articles: globalThis.Ref<ParsedContent[] | null>) {
    const result = articles.value?.filter((article: { title: string }) =>
        article.title?.toLowerCase()?.includes(search.value.toLowerCase())
    );

    return result;
}
</script>

<template>
    <main>
        <AppHeader
            class="mb-16"
            :title="$t('articles.articles')"
            :description="$t('articles.description')"
        />

        <UInput
            v-model="search"
            aria-label="{{ $t('articles.search') }}"
            name="search"
            icon="i-heroicons-magnifying-glass-20-solid"
            autocomplete="off"
            class="mb-10"
            size="xl"
            :placeholder="`${$t('articles.search')}...`"
            :ui="{ icon: { trailing: { pointer: '' } } }"
        >
            <template #trailing>
                <UButton
                    v-show="search !== ''"
                    v-cursor-block
                    color="gray"
                    variant="link"
                    icon="i-heroicons-x-mark-20-solid"
                    :padded="false"
                    @click="search = ''"
                />
            </template>
        </UInput>
        <TransitionGroup name="list" tag="ul" class="space-y-16">
            <li
                v-for="(article, index) in results"
                :key="index"
                class="hover:bg-gray-200 dark:hover:bg-white/10 rounded-md duration-200 max-w-2xl"
            >
                <AppArticleCard :article="article" />
            </li>
            <li v-if="results?.length === 0" key="not-found">
                {{ $t("articles.notFound") }}
            </li>
        </TransitionGroup>
    </main>
</template>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>
