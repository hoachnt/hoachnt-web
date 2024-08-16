<template>
    <main class="min-h-screen">
        <Transition name="fade">
            <LazyArticlesSidebar
                :sections="sections"
                v-if="showArticlesSidebar"
            />
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

<script setup>
const route = useRoute();
const sections = ref([]);
const showArticlesSidebar = ref(false);

useSeoMeta({
    ogSiteName: `Articles | Nguyen Tien Hoach`,
    ogImage: `https://hoachnt.com${route.path}.jpg`,
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.prose h2 a,
.prose h3 a {
    @apply no-underline;
}
h1 {
    view-transition-name: header;
}
</style>
