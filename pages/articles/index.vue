<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";

const localePath = useLocalePath();
const route = useRoute();
const { t } = useI18n();

const seoMeta = ref({
    title: `${t("seo.articles.title")} | ${t("title")}`,
    description: t("seo.articles.description"),
});

useSeoMeta(seoMeta.value);

const debouncedSearchQuery = ref("");
const search = ref("");

let debounceTimer: ReturnType<typeof setTimeout> | null = null;

const { data: articles } = await useAsyncData(
    `all-articles-${route.path}`,
    () => queryContent(localePath("/articles")).sort({ published: -1 }).find()
);

const results = computed(() => filterArticles(articles));

function filterArticles(articles: globalThis.Ref<ParsedContent[] | null>) {
    const result = articles.value?.filter((article: ParsedContent) =>
        article.title?.toLowerCase().includes(search.value.toLowerCase())
    );

    return result;
}

watch(debouncedSearchQuery, (newQuery) => {
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
        // После задержки выполняется поиск
        search.value = newQuery;
    }, 200); // 200ms time out
});
</script>

<template>
    <main>
        <AppHeader
            class="mb-16"
            :title="$t('articles.articles')"
            :description="$t('articles.description')"
        />

        <UInput
            v-model="debouncedSearchQuery"
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
                    color="gray"
                    variant="link"
                    icon="i-heroicons-x-mark-20-solid"
                    :padded="false"
                    @click="debouncedSearchQuery = ''"
                />
            </template>
        </UInput>
        <TransitionGroup name="list" tag="ul" class="relative">
            <li
                v-for="article in results"
                :key="article.title"
                class="hover:bg-gray-200 dark:hover:bg-white/10 max-w-2xl my-16"
            >
                <LazyAppArticleCard :article="article" />
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
    transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    scale: 0.8;
    filter: blur(10px);
    transform: translateY(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
    min-width: 100%;
}
</style>
