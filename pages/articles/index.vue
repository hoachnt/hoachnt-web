<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";
const localePath = useLocalePath();
const route = useRoute();
const { t } = useI18n();
const router = useRouter();

const activeIndex = ref<number>(999999);
const activeArticle = ref<ParsedContent | null>(null);
const seoMeta = computed(() => ({
    title: `${t("seo.articles.title")} | ${t("title")}`,
    description: t("seo.articles.description"),
}));

// SEO Metadata
useSeoMeta(seoMeta.value);

// Fetching articles
const { data: articles } = await useAsyncData(
    `all-articles-${route.path}`,
    () => queryContent(localePath("/articles")).sort({ published: -1 }).find()
);

// Search-related state
const searchQuery = ref("");
const debouncedSearchQuery = ref("");

// Filtered results computed property
const results = computed(() => {
    if (!articles.value || !searchQuery.value) return articles.value;
    return articles.value.filter((article) =>
        article.title?.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

// Debounced search handler
const updateSearchQuery = useDebounceFn((value: string) => {
    activeIndex.value = 0;
    searchQuery.value = value;
}, 500);

watchEffect(() => {
    updateSearchQuery(debouncedSearchQuery.value);
});

// Shortcut handlers
function handleArrowUp() {
    if (!results.value) return;
    activeIndex.value =
        activeIndex.value === 0
            ? results.value.length - 1
            : activeIndex.value - 1;
}

function handleArrowDown() {
    if (!results.value) return;
    activeIndex.value =
        activeIndex.value === results.value.length - 1
            ? 0
            : activeIndex.value + 1;
}

function handleEnter() {
    if (!results.value || activeIndex.value === 999999) return;
    activeArticle.value = results.value[activeIndex.value];
    if (activeArticle.value?._path) router.push(activeArticle.value._path);
}

// Define shortcuts
defineShortcuts({
    arrowup: { usingInput: "search", handler: handleArrowUp },
    arrowdown: { usingInput: "search", handler: handleArrowDown },
    enter: { usingInput: "search", handler: handleEnter },
});
</script>

<template>
    <main>
        <AppHeader
            class="mb-16"
            :title="$t('articles.articles')"
            :description="$t('articles.description')"
        />

        <!-- Search Input -->
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
            @focus="activeIndex = 0"
            @blur="activeIndex = 999999"
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

        <!-- Articles List with Transition -->
        <TransitionGroup name="list" tag="ul" class="relative">
            <li
                v-for="(article, index) in results"
                :key="article.title"
                :class="[
                    'my-16 duration-100',
                    index === activeIndex
                        ? 'outline outline-offset-2 outline-2'
                        : '',
                ]"
            >
                <LazyAppArticleCard :article="article" />
            </li>
            <li v-if="results?.length === 0" key="not-found">
                {{ $t("articles.notFound") }}
            </li>
        </TransitionGroup>
    </main>
</template>

<style scoped>
.list-move, /* apply transition to moving elements */
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

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
    min-width: 100%;
}
</style>
