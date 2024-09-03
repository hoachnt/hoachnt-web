<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div>
        <h1
            class="text-2xl font-bold text-zinc-800 dark:text-zinc-100 tracking-[.007em]"
        >
            {{ title }}. <span class="text-zinc-400">{{ description }}.</span>
        </h1>
    </div>
</template>

<style scoped>
h1 {
    view-transition-name: header;
}
</style>
