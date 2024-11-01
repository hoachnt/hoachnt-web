<script lang="ts" setup>
function scrollToTop() {
    if (window) {
        window.scrollTo(0, 0);
    }
}
</script>

<template>
    <UButton
        icon="i-heroicons-chevron-up"
        variant="solid"
        size="xl"
        color="black"
        class="fixed z-50 bottom-5 right-5 backdrop-blur-md bg-gray-200/80 text-black hover:!bg-gray-300 dark:bg-gray-800/80 dark:text-white dark:hover:!bg-gray-900 transition duration-200"
        @click="scrollToTop()"
    />
</template>

<style></style>
