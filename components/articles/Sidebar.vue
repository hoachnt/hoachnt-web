<template>
    <aside
        ref="headerRef"
        :style="styles"
        class="p-4 dark:bg-primary-900/50 bg-primary-100/50 backdrop-blur-3xl mb-11 sticky top-0 left-0 max-h-52"
    >
        <ul class="space-y-2">
            <li v-for="section in sections" :key="section.id">
                <ULink
                    :to="`#${section.id}`"
                    class="block !text-blue-500 dark:hover:!text-blue-200 hover:!text-blue-800 hover:underline duration-200"
                    >{{ section.title }}</ULink
                >
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { useFixedHeader } from "vue-use-fixed-header";

const props = defineProps(["sections"]);

const headerRef = ref(null);

const { styles } = useFixedHeader(headerRef);
</script>

<style scoped>
aside {
    overflow-y: auto;
}
</style>
