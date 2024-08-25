<template>
    <UButton
        icon="i-heroicons-chevron-up"
        variant="soft"
        size="xl"
        class="fixed bottom-10 right-10"
        :ui="{ rounded: 'rounded-full' }"
        @click="scrollToTop()"
    />
</template>

<script lang="ts" setup>
function scrollToTop() {
    if (window) {
        window.scrollTo(0, 0);
    }
}
</script>

<style></style>
