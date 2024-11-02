<script setup lang="ts">
import { useFixedHeader } from "vue-use-fixed-header";

const headerRef = ref(null);
const isOpen = ref(false);

const isArticlesPage = computed(
    () => typeof route?.name === "string" && route.name.includes("articles-")
);

const localePath = useLocalePath();
const route = useRoute();
const { t } = useI18n();
const { styles } = useFixedHeader(headerRef, {
    watch: isArticlesPage, // Will perform a check everytime the value changes
});

const items = computed(() => [
    {
        name: t("navbar.home"),
        path: localePath("/"),
        icon: "solar:home-smile-outline",
        iconActive: "solar:home-smile-bold",
    },
    {
        name: t("navbar.projects"),
        path: localePath("/projects"),
        icon: "solar:folder-outline",
        iconActive: "solar:folder-bold",
    },
    {
        name: t("navbar.articles"),
        path: localePath("/articles"),
        icon: "solar:document-outline",
        iconActive: "solar:document-bold",
    },
]);

function close() {
    isOpen.value = false;
}
</script>

<template>
    <div
        ref="headerRef"
        :style="{ ...styles, position: isArticlesPage ? 'relative' : 'sticky' }"
        class="nav-wrapper top-0 w-full py-4 z-50 bg-inherit"
    >
        <nav class="mx-auto px-3 max-w-2xl">
            <ul
                class="flex items-center p-2 max-h-[52px] text-sm font-medium rounded-full text-gray-800 dark:text-gray-200 border border-black/20 backdrop-blur-md dark:border-white/30"
            >
                <li
                    v-for="item in items"
                    :key="item.path"
                    class="hidden lg:block"
                >
                    <ULink
                        :to="item.path"
                        prefetch
                        class="relative px-3 py-2 rounded-full flex items-center justify-center"
                        active-class="text-white dark:text-black"
                        :active="$route.path === item.path"
                    >
                        <Transition>
                            <span
                                v-if="$route.path === item.path"
                                class="active-bg absolute h-full w-full -z-10 bg-black dark:bg-white rounded-full"
                            />
                        </Transition>
                        {{ item.name }}
                    </ULink>
                </li>

                <li>
                    <UButton
                        color="black"
                        variant="solid"
                        size="md"
                        class="lg:hidden z-10 block"
                        :ui="{
                            rounded: 'rounded-full',
                        }"
                        @click="isOpen = true"
                    >
                        {{ $t("navbar.menu") }}
                    </UButton>
                </li>

                <LazyAppNavigationSliderOver
                    v-if="isOpen"
                    v-model:is-open="isOpen"
                    :close="() => close()"
                />

                <li class="nav-item flex-1" />
                <li class="nav-item mx-1">
                    <AppLanguageSelect />
                </li>
                <UDivider orientation="vertical" class="h-5 mx-1" size="xs" />
                <li class="nav-item flex items-center justify-center mx-1">
                    <ClientOnly fallback-tag="i">
                        <LazyAppThemeToggle />
                        <template #fallback>
                            <Icon
                                aria-hidden="true"
                                name="solar:laptop-minimalistic-bold"
                                class="w-5 h-5"
                            />
                        </template>
                    </ClientOnly>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.nav-wrapper {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
}
.nav-wrapper::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
}

.nav-list,
.nav-item {
    transition: 0.2s ease-in-out;
}
.nav-list:has(.nav-item:hover) .nav-item:not(:hover) {
    filter: blur(4px);
}
@media only screen and (max-width: 768px) {
    .nav-list:has(.nav-item:hover) .nav-item:not(:hover) {
        filter: blur(0);
    }
}
</style>
