<script setup lang="ts">
import { useCursor } from "ipad-cursor/vue";
import { useColorMode } from "@vueuse/core";

const title = "Nguyen Tien Hoach";
const description =
    "I'm a Fullstack independent software developer currently living in Vietnam.";

const route = useRoute();
const colorMode = useColorMode({
    emitAuto: true,
    modes: {
        cafe: "cafe",
    },
});
const { isMobile } = useDevice();
const cursor = () =>
    useCursor().updateConfig({
        textStyle: {
            background:
                colorMode.value === "dark"
                    ? "rgba(255, 255, 255, 0.8)"
                    : colorMode.value === "light"
                      ? "rgba(0, 0, 0, 0.8)"
                      : "rgba(150, 150, 150, 0.5)",
        },
        normalStyle: {
            background:
                colorMode.value === "auto" || colorMode.value === "cafe"
                    ? "rgba(150, 150, 150, 0.5)"
                    : "rgba(150, 150, 150, 0.2)",
        },
        mouseDownStyle: {
            background: "rgba(150, 150, 150, 0.4)",
        },
    });

watch(colorMode, () => {
    if (isMobile()) return;

    cursor();
});

onMounted(() => {
    if (isMobile()) return;

    cursor();
}),
    useSeoMeta({
        title,
        ogTitle: title,
        description,
        ogDescription: description,
        ogSiteName: "Nguyen Tien Hoach portfolio",
        ogImage: "https://hoachnt.com/social-card.png",
        twitterCard: "summary_large_image",
    });
</script>

<template>
    <NuxtLoadingIndicator color="#6d6d6d" class="z-[9999]" />
    <AppNavbar />
    <div class="h-32"></div>
    <UContainer>
        <NuxtPage />
    </UContainer>
    <div class="h-4"></div>
    <AppFooter />
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
