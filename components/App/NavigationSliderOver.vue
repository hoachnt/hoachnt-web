<script setup lang="ts">
defineProps<{ close(): void }>();
const isOpen = defineModel<boolean>("isOpen");

const localePath = useLocalePath();
const { t } = useI18n();

const navlist = computed(() => [
    { path: localePath("/"), name: t("navbar.home") },
    {
        name: t("navbar.projects"),
        path: localePath("/projects"),
    },
    {
        name: t("navbar.articles"),
        path: localePath("/articles"),
    },
    {
        name: t("navbar.lab"),
        path: localePath("/lab"),
    },
]);

function scrollToTop() {
    if (window) {
        window.scrollTo(0, 0);
    }
}
</script>

<template>
    <div>
        <USlideover v-model="isOpen" side="right">
            <div
                class="p-4 flex justify-center items-center min-h-full flex-col"
            >
                <UButton
                    color="gray"
                    variant="ghost"
                    size="sm"
                    icon="i-heroicons-x-mark-20-solid"
                    class="flex lg:hidden absolute end-5 top-5 z-10"
                    square
                    padded
                    @click="close()"
                />
                <ULink
                    v-for="item in navlist"
                    :key="item.path"
                    :to="item.path"
                    active-class="text-primary-950 dark:text-primary-50"
                    class="text-4xl py-4 duration-200 transition ease-in-out w-full text-center"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    @click="
                        () => {
                            close();
                            scrollToTop();
                        }
                    "
                >
                    {{ item.name }}
                </ULink>
            </div>
        </USlideover>
    </div>
</template>
