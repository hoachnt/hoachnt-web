<script setup lang="ts">
const hydrate = useBoosterHydrate();
const ArticlesSideBar = hydrate(
    () => import("@/components/Articles/Sidebar.client.vue")
);

interface ISection {
    id: string;
    title: string | null;
}

const route = useRoute();

const sections = ref<ISection[]>([]);
const showArticlesSidebar = ref(false);

useSeoMeta({
    ogImage: `https://hoachnt.com/social-cards${route.path}.jpg`,
    twitterCard: "summary_large_image",
});

onMounted(() => {
    const headings = document.querySelectorAll("article h2, article h3");
    sections.value = Array.from(headings).map((heading) => ({
        id: heading.id,
        title: heading.textContent,
    }));

    if (sections.value.length > 0) {
        showArticlesSidebar.value = true;
    } else {
        showArticlesSidebar.value = false;
    }
});
</script>

<template>
    <main class="min-h-screen">
        <UButton
            v-cursor-block
            class="mb-11 lg:hover:!bg-transparent lg:hover:!text-primary lg:cursor-none lg:duration-200 lg:transition-all"
            size="lg"
            icon="i-heroicons-chevron-left"
            @click="$router.push('/articles')"
            >{{ $t("articles.slug.back") }}</UButton
        >
        <Transition name="fade">
            <ArticlesSideBar v-if="showArticlesSidebar" :sections="sections" />
        </Transition>
        <div
            class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
        >
            <ContentDoc v-slot="{ doc }" tag="article">
                <article>
                    <h1>{{ doc.title }}</h1>
                    <ContentRenderer :value="doc" />
                </article>
            </ContentDoc>
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
