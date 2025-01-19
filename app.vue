<script setup lang="ts">
import type { TransitionProps } from "vue";

const { t, finalizePendingLocaleChange } = useI18n();

const el = ref<HTMLElement | null>(null);
const y = ref(0);
const seoMeta = computed(() => ({
    title: t("title"),
    description: t("seo.home.description"),
}));
const isMounting = ref(false);
const isViewTransition = import.meta.server || document.startViewTransition;
const isPageTransition = computed(() =>
    isViewTransition
        ? false
        : ({
              name: "page",
              mode: "out-in",
              onBeforeEnter,
          } as TransitionProps)
);

useHead({
    link: [
        {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
        },
    ],
});

useSeoMeta({
    ...seoMeta.value,
    ogTitle: seoMeta.value.title,
    ogDescription: seoMeta.value.description,
    ogSiteName: seoMeta.value.title,
    ogImage: "https://hoachnt.com/social-card.png",
    twitterCard: "summary_large_image",
});

onMounted(() => {
    isMounting.value = true;

    el.value = document.body;
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Для инициализации значения сразу при монтировании
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
    y.value = window.scrollY || document.documentElement.scrollTop;
}

const onBeforeEnter = async () => {
    await finalizePendingLocaleChange();
};
</script>

<template>
    <NuxtLoadingIndicator class="z-[9999]" />
    <AppLoader :is-mounting="isMounting" critical />
    <AppNavbar critical />

    <AppThreeModel />

    <UContainer>
        <NuxtPage :transition="isPageTransition" />
    </UContainer>
    <div class="h-11" />
    <UContainer>
        <UDivider />
    </UContainer>
    <LazyAppFooter />
    <Transition>
        <AppScrollToTop v-if="y >= 84" />
    </Transition>
</template>

<style>
:root {
    --selection-bg: #000;
    --selection-color: #fff;
}

.dark {
    --selection-bg: #fff;
    --selection-color: #000;
}

html {
    scroll-behavior: smooth;
}
body {
    overflow-x: hidden;
}

.page-enter-active,
.page-leave-active {
    transition: all 0.3s;
}

.page-leave-to {
    transform: translateY(-5px);
    opacity: 0;
}

.page-enter-from {
    transform: translateY(5px);
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    scale: 0.5;
}
::selection {
    background-color: var(--selection-bg);
    color: var(--selection-color);
}
</style>
