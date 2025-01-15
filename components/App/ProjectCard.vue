<script setup lang="ts">
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
        class="group duration-200"
        :to="project.url"
        target="_blank"
        external
    >
        <UCard class="group-hover:rounded-[30px] duration-150 ease-out">
            <div class="flex items-end gap-4">
                <div class="max-w-sm">
                    <h2
                        class="text-sm font-medium group-hover:text-primary-600 duration-150"
                    >
                        {{ project.name }}
                    </h2>
                    <p class="text-gray-400 text-sm">
                        {{ project.description }}
                    </p>
                    <div class="space-x-1 mt-2">
                        <UBadge
                            v-for="(tech, index) in project.techStack"
                            :key="index"
                            :ui="{ rounded: 'rounded-full' }"
                            color="black"
                            >{{ tech }}</UBadge
                        >
                    </div>
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
            </div>
        </UCard>
    </NuxtLink>
</template>
