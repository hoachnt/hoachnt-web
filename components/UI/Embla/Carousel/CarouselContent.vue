<script lang="ts" setup></script>

<template>
    <div class="embla__container">
        <slot />
    </div>
</template>

<style scoped>
.embla__container {
    display: flex;
    align-items: flex-start;
    touch-action: pan-y pinch-zoom;
    margin-left: calc(var(--slide-spacing) * -1);
}
</style>
