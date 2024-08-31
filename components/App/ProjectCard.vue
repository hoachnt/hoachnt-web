<script setup>
import { NuxtImg } from "#components";

defineProps({
    project: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <NuxtLink
        class="flex items-end gap-4 group p-2 -m-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-md duration-200"
        :to="project.url"
        target="_blank"
        external
    >
        <div class="max-w-sm">
            <h2 class="text-sm font-medium group-hover:text-primary-600">
                {{ project.name }}
            </h2>
            <p class="text-gray-400 text-sm">{{ project.description }}</p>
        </div>
        <div
            class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
        />
        <UAvatar
            :as="NuxtImg"
            :src="project.thumbnail"
            :ui="{ rounded: 'rounded z-10 relative' }"
            :alt="project.name"
            placeholder
            format="webp"
            size="md"
            width="40px"
            height="40px"
            loading="lazy"
        />
    </NuxtLink>
</template>
