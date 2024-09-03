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
        variant="soft"
        size="xl"
        color="black"
        class="fixed bottom-10 right-10 backdrop-blur-md bg-gray-200/50 text-black hover:!bg-gray-300 dark:bg-gray-800/50 dark:text-white dark:hover:!bg-gray-900 transition duration-200"
        @click="scrollToTop()"
    />
</template>

<style></style>
