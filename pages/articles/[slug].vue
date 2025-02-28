<script setup lang="ts">
import { LazyArticlesSidebar } from "#components";

interface ISection {
    id: string;
    title: string | null;
}

// === Dependencies ===
const route = useRoute();
const router = useRouter();
const { t } = useI18n();
const localePath = useLocalePath();
const { getCollectionLanguage } = useCollectionLanguage<"articlePage">();

// === Reactive State ===
const sections = ref<ISection[]>([]);
const showArticlesSidebar = computed(() => sections.value.length > 0);

// === Computed Values ===
const socialCardsPath = computed(() => route.path.split("/").pop() || "");

const seoMeta = computed(() => ({
    title: `${doc.value?.title} | ${t("title")}`,
    description: doc.value?.description,
    ogImage: `https://hoachnt.com/social-cards/articles/${socialCardsPath.value}.jpg`,
}));

// === Functions ===
const extractSections = (): ISection[] =>
    Array.from(document.querySelectorAll("article h2, article h3")).map(
        (heading) => ({
            id: heading.id,
            title: heading.textContent,
        })
    );

const returnBack = () => router.push(localePath("/articles"));

// === Lifecycle Hooks ===
onMounted(() => {
    sections.value = extractSections();
});

// === Async Data Fetching ===
const { data: doc } = await useAsyncData(route.path, () =>
    queryCollection(getCollectionLanguage("articlePage", route.path))
        .path(route.path)
        .first()
);

// === SEO ===
useSeoMeta(seoMeta.value);
</script>

<template>
    <main class="min-h-screen">
        <UButton
            class="mb-11"
            color="black"
            size="lg"
            icon="i-heroicons-chevron-left"
            @click="returnBack"
        >
            {{ $t("articles.slug.back") }}
        </UButton>

        <Transition name="fade">
            <LazyArticlesSidebar
                v-if="showArticlesSidebar"
                :sections="sections"
            />
        </Transition>

        <div
            class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
        >
            <section>
                <div v-if="doc">
                    <article>
                        <h1>{{ doc.title }}</h1>
                        <ContentRenderer :value="doc" />
                    </article>
                </div>
                <div v-else>
                    <UAlert
                        :ui="{ title: 'm-0 text-2xl text-center font-bold' }"
                        title="404 Not Found"
                    />
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped>
.prose h2 a,
.prose h3 a {
    @apply no-underline;
}

h1 {
    view-transition-name: header;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
