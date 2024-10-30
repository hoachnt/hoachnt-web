<script setup lang="ts">
defineProps<{
    sections: { id: string; title: string | null }[];
}>();

const isHide = ref(false);
</script>

<template>
    <aside
        :class="[
            'p-4 dark:bg-gray-800/50 bg-gray-200/50 backdrop-blur-3xl mb-11 sticky top-0 left-0 z-50 transition-all duration-200 max-h-min',
            isHide ? 'max-h-0' : '',
        ]"
    >
        <ul
            :class="[
                'space-y-2 max-h-52 transition-all duration-200',
                isHide ? 'max-h-0' : '',
            ]"
        >
            <li v-for="section in sections" :key="section.id">
                <a
                    :href="`#${section.id}`"
                    class="block !text-blue-500 dark:hover:!text-blue-200 hover:!text-blue-800 hover:underline duration-200"
                    >{{ section.title }}</a
                >
            </li>
        </ul>
        <UButton
            class="fixed bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2"
            :icon="
                !isHide ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'
            "
            :ui="{
                rounded: 'rounded-full',
            }"
            @click="isHide = !isHide"
        />
    </aside>
</template>

<style scoped>
ul {
    overflow-y: auto;
}
</style>
