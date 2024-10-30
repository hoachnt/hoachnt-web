<script setup lang="ts">
defineProps<{
    sections: { id: string; title: string | null }[];
}>();

const isHide = ref(true);

onMounted(() => setTimeout(() => (isHide.value = false), 600));
</script>

<template>
    <aside
        :class="[
            'p-4 dark:bg-gray-800/80 bg-gray-200/80 backdrop-blur-3xl mb-11 sticky top-0 left-0 z-50 max-h-min mx-auto transition-all duration-200',
            isHide
                ? 'rounded-full top-1 delay-200 max-w-28'
                : 'rounded-none max-w-full',
        ]"
    >
        <ul
            :class="[
                'space-y-2 transition-all duration-200',
                isHide ? '!max-h-0 px-10' : 'max-h-52 delay-200',
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
        <button
            :class="[
                'fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center p-2 rounded-full transition-all duration-200 delay-300',
                isHide
                    ? 'w-full'
                    : 'translate-y-1/2 w-8 text-white dark:text-black bg-primary delay-0',
            ]"
            @click="isHide = !isHide"
        >
            <Icon
                :name="
                    !isHide
                        ? 'i-heroicons-chevron-up'
                        : 'i-heroicons-chevron-down'
                "
            />
        </button>
    </aside>
</template>

<style scoped>
ul {
    overflow-y: auto;
}
</style>
