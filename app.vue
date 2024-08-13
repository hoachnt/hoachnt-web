<script setup lang="ts">
import { useCursor } from "ipad-cursor/vue";
import { useColorMode } from "@vueuse/core";
import { LazyAppFooter } from "#components";

const title = "Nguyen Tien Hoach";
const description =
    "I'm a Fullstack independent software developer currently living in Vietnam.";

useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogSiteName: "Nguyen Tien Hoach portfolio",
    ogImage: "https://hoachnt.com/social-card.png",
    twitterCard: "summary_large_image",
});

const colorMode = useColorMode({
    emitAuto: true,
    modes: {
        cafe: "cafe",
    },
});
const { isMobile } = useDevice();
const showFooter = ref(false);

const cursorStyles = {
    dark: "rgba(255, 255, 255, 0.8)",
    light: "rgba(0, 0, 0, 0.8)",
    auto: "rgba(150, 150, 150, 0.5)",
    cafe: "rgba(150, 150, 150, 0.5)",
};

function updateCursor() {
    useCursor().updateConfig({
        textStyle: {
            background:
                cursorStyles[colorMode.value] || "rgba(150, 150, 150, 0.5)",
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

function loadMoreContent() {
    showFooter.value = true;
}
</script>

<template>
    <NuxtLoadingIndicator color="#6d6d6d" class="z-[9999]" />
    <AppNavbar />
    <div class="h-32"></div>
    <UContainer>
        <NuxtPage />
    </UContainer>
    <div class="h-4"></div>
    <ClientOnly fallback-tag="span" fallback="Footer">
        <div v-observe-bottom="loadMoreContent" class="h-1">
            <LazyAppFooter v-if="showFooter" />
        </div>
    </ClientOnly>
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

body {
    overflow-x: hidden;
}

.page-enter-active,
.page-leave-active {
    transition: all 0.2s;
}

.page-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}

.page-enter-from {
    opacity: 0;
    transform: translateY(5px);
}

::selection {
    background-color: var(--selection-bg);
    color: var(--selection-color);
}
</style>
