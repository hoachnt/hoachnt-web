<script lang="ts" setup></script>

<template>
    <div class="embla__slide"><slot /></div>
</template>

<style scoped>
.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    padding: 10px 0;
    padding-left: var(--slide-spacing);
}
</style>
