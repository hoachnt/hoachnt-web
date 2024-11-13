<script setup lang="ts">
defineProps<{
    sections: { id: string; title: string | null }[];
}>();

const route = useRoute();

const isHide = ref(true);
const visibleLinks = ref(new Set<string>());

const currentRoute = computed(() => `${window.location.origin}${route.path}`);

let observer: IntersectionObserver;

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
        const link = entry.target as HTMLAnchorElement;

        // Delete all search params
        const parsedUrl = new URL(link.href);
        parsedUrl.search = "";

        const href = decodeURIComponent(parsedUrl.toString());

        if (entry.isIntersecting) {
            visibleLinks.value.add(href);
        } else {
            visibleLinks.value.delete(href);
        }
    });
};

onMounted(async () => {
    await nextTick();

    observer = new IntersectionObserver(handleIntersection);
    document
        .querySelectorAll<HTMLAnchorElement>('a[href*="#"]:not(aside a)')
        .forEach((link) => observer?.observe(link));

    setTimeout(() => (isHide.value = false), 600);
});
</script>

<template>
    <aside
        :class="[
            'p-4 dark:bg-gray-800/80 bg-gray-200/80 backdrop-blur-3xl mb-11 sticky top-0 left-0 z-50 max-h-min mx-auto transition-all duration-200',
            isHide
                ? 'rounded-full top-1 delay-200 max-w-28'
                : 'rounded-sm max-w-full',
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
                    :id="`#${section.id}`"
                    :href="`#${section.id}`"
                    :class="[
                        'block hover:text-blue-500 hover:underline duration-200',
                        visibleLinks.has(`${currentRoute}#${section.id}`)
                            ? '!text-blue-500'
                            : '',
                    ]"
                    >{{ section.title }}</a
                >
            </li>
        </ul>
        <button
            :class="[
                'fixed bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center p-2 rounded-full transition-all duration-200',
                isHide
                    ? 'w-full delay-300'
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
