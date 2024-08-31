<script setup lang="ts">
import { useCursor } from "ipad-cursor/vue";
import { useColorMode } from "@vueuse/core";

const { t } = useI18n();

const el = ref<HTMLElement | null>(null);
const y = ref(0);
const seoMeta = ref({
    title: t("title"),
    description: t("seo.home.description"),
});

useSeoMeta({
    ...seoMeta.value,
    ogTitle: seoMeta.value.title,
    ogDescription: seoMeta.value.description,
    ogSiteName: seoMeta.value.title,
    ogImage: "https://hoachnt.com/social-card.png",
    twitterCard: "summary_large_image",
});

function handleScroll() {
    y.value = window.scrollY || document.documentElement.scrollTop;
}

onMounted(() => {
    el.value = document.body;
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Для инициализации значения сразу при монтировании
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

const colorModes = {
    dark: "rgba(255, 255, 255, 0.8)",
    light: "rgba(0, 0, 0, 0.8)",
    auto: "rgba(150, 150, 150, 0.5)",
    cafe: "rgba(150, 150, 150, 0.5)",
} as const;

const colorMode = useColorMode({
    emitAuto: true,
    modes: {
        cafe: "cafe",
    },
});

type ColorMode = keyof typeof colorModes;

const { isMobile } = useDevice();

function updateCursor() {
    const currentMode = colorMode.value as ColorMode;

    useCursor().updateConfig({
        textStyle: {
            background: colorModes[currentMode] || "rgba(150, 150, 150, 0.5)",
        },
        normalStyle: {
            background: ["auto", "cafe"].includes(colorMode.value)
                ? "rgba(150, 150, 150, 0.5)"
                : "rgba(150, 150, 150, 0.2)",
        },
        mouseDownStyle: {
            background: "rgba(150, 150, 150, 0.4)",
        },
    });
}

if (!isMobile()) {
    watch(colorMode, updateCursor);
    onMounted(updateCursor);
}
</script>

<template>
    <NuxtLoadingIndicator color="#3b82f6" class="z-[9999]" />
    <AppNavbar />
    <div class="h-11" />
    <UContainer>
        <NuxtPage />
    </UContainer>
    <div class="h-11" />
    <UContainer>
        <UDivider />
    </UContainer>
    <AppFooter />
    <Transition>
        <AppScrollToTop v-show="y >= 84" />
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
