<script setup>
import { useFixedHeader } from "vue-use-fixed-header";

const headerRef = ref(null);
const isOpen = ref(false);

const isArticlesPage = computed(() => route.name.includes("articles-"));
const items = computed(() => {
    return [
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
        {
            name: t("navbar.lab"),
            path: localePath("/lab"),
            icon: "heroicons:beaker",
            iconActive: "heroicons:beaker-solid",
        },
    ];
});

const localePath = useLocalePath();
const route = useRoute();
const { t } = useI18n();
const { styles } = useFixedHeader(headerRef, {
    watch: isArticlesPage, // Will perform a check everytime the value changes
});

function close() {
    isOpen.value = false;
}
</script>

<template>
    <div
        ref="headerRef"
        :style="{ ...styles, position: isArticlesPage ? 'relative' : 'sticky' }"
        class="nav-wrapper top-0 w-full py-4 z-50 bg-inherit backdrop-blur-3xl"
    >
        <nav class="mx-auto px-3 max-w-2xl">
            <ul
                class="flex items-center h-[52px] px-3 text-sm font-medium text-gray-800 dark:text-gray-200"
            >
                <li
                    v-for="item in items"
                    :key="item.path"
                    
                    class="hidden lg:block"
                >
                    <ULink
                        :to="item.path"
                        prefetch
                        class="relative h-10 px-3 py-4 flex items-center justify-center transition"
                        active-class="dark:text-white text-black"
                    >
                        <span
                            v-if="$route.path === item.path"
                            class="active-bg absolute h-full w-full z-0 rounded-md bg-gray-500/10 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                        {{ item.name }}
                    </ULink>
                </li>

                <li>
                    <UButton
                        
                        color="black"
                        variant="outline"
                        size="sm"
                        class="lg:hidden z-10 block"
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
                <li  class="nav-item ml-3">
                    <AppLanguageSelect />
                </li>
                <li
                    
                    class="nav-item flex items-center justify-center ml-3"
                >
                    <ClientOnly fallback-tag="i">
                        <AppThemeToggle />
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
.active-bg {
    view-transition-name: active-item;
}
.active-line {
    view-transition-name: active-line;
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
