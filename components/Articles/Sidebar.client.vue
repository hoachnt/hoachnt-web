<script setup lang="ts">
import { useFixedHeader } from "vue-use-fixed-header";

defineProps<{
    sections: { id: string; title: string | null }[];
}>();

const headerRef = ref(null);

const { styles } = useFixedHeader(headerRef);
</script>

<template>
    <aside
        ref="headerRef"
        :style="styles"
        class="p-4 dark:bg-gray-800/50 bg-gray-200/50 backdrop-blur-3xl mb-11 sticky top-0 left-0 max-h-52 z-50"
    >
        <ul class="space-y-2">
            <li v-for="section in sections" :key="section.id">
                <a
                    :href="`#${section.id}`"
                    class="block !text-blue-500 dark:hover:!text-blue-200 hover:!text-blue-800 hover:underline duration-200"
                    >{{ section.title }}</a
                >
            </li>
        </ul>
    </aside>
</template>

<style scoped>
aside {
    overflow-y: auto;
}
</style>
