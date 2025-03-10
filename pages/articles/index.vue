<script setup lang="ts">
const { articles, fetchArticles } = useArticles();
await fetchArticles();

const { searchQuery, debouncedSearchQuery, results, activeIndex } =
    useSearch(articles);
useShortcutsComposable(results, activeIndex);

const listRefs = ref<(HTMLElement | null)[]>([]);
const { t } = useI18n();

const seoMeta = computed(() => ({
    title: `${t("seo.articles.title")} | ${t("title")}`,
    description: t("seo.articles.description"),
}));

useSeoMeta(seoMeta.value);

watch(activeIndex, (newIndex) => {
    const element = listRefs.value[newIndex];
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
});
</script>

<template>
    <main>
        <AppHeader
            critical
            class="mb-16"
            :title="$t('articles.articles')"
            :description="$t('articles.description')"
        />

        <UInput
            v-model="debouncedSearchQuery"
            critical
            :placeholder="`${$t('articles.search')}...`"
            aria-label="{{ $t('articles.search') }}"
            name="search"
            autocomplete="off"
            icon="i-heroicons-magnifying-glass-20-solid"
            class="mb-10"
            size="xl"
            :ui="{ icon: { trailing: { pointer: '' } } }"
            @blur="activeIndex = -1"
        >
            <template #trailing>
                <UButton
                    v-show="searchQuery !== ''"
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
                v-for="(article, index) in results"
                :ref="(el) => (listRefs[index] = el as HTMLElement)"
                :key="article.title"
                v-memo="[article, activeIndex === index]"
                :class="[
                    'my-16 duration-150 hover:rounded-[30px] ease-out overflow-hidden',
                    index === activeIndex
                        ? 'outline outline-offset-2 outline-2'
                        : '',
                ]"
            >
                <AppArticleCard :article="article" />
            </li>
            <li v-if="results?.length === 0" key="not-found">
                {{ $t("articles.notFound") }}
            </li>
        </TransitionGroup>
    </main>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    scale: 0.8;
    filter: blur(10px);
    transform: translateY(30px);
}

.list-leave-active {
    position: absolute;
    min-width: 100%;
}
</style>
