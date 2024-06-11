<template>
  <div
    ref="headerRef"
    :style="[styles]"
    class="nav-wrapper fixed top-0 w-full z-50 overflow-x-auto overflow-y-hidden bg-inherit backdrop-blur-md"
  >
    <nav class="mx-auto px-4 sm:px-6 lg:px-8 min-w-[397px] max-w-2xl">
      <ul
        class="nav-list flex items-center my-9 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5"
      >
        <li v-for="item in items" :key="item.path" class="nav-item">
          <UTooltip
            :text="item.name"
            :ui="{ popper: { strategy: 'absolute' } }"
          >
            <ULink
              :to="item.path"
              class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
              active-class="text-primary-600 dark:text-primary-400"
            >
              <Icon
                aria-hidden="true"
                :name="$route.path === item.path ? item.iconActive : item.icon"
                class="w-5 h-5 z-10"
              />
              <span
                v-if="$route.path === item.path"
                class="active-line absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
              ></span>
              <span
                v-if="$route.path === item.path"
                class="active-bg absolute h-8 w-8 z-0 rounded-full bg-gray-500/10 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></span>
              <span class="sr-only">{{ item.name }}</span>
            </ULink>
          </UTooltip>
        </li>
        <li class="nav-item flex-1"></li>
        <li class="nav-item ml-3">
          <AppLanguageSelect />
        </li>
        <li class="nav-item flex items-center justify-center ml-3">
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

<script setup>
import { useFixedHeader } from "vue-use-fixed-header";

const localePath = useLocalePath();
const { t } = useI18n();
const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);

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
      name: t("navbar.bookmarks"),
      path: localePath("/bookmarks"),
      icon: "solar:bookmark-outline",
      iconActive: "solar:bookmark-bold",
    },
    {
      name: t("navbar.lab"),
      path: localePath("/lab"),
      icon: "heroicons:beaker",
      iconActive: "heroicons:beaker-solid",
    },
  ];
});
</script>

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
  transition: 0.1s ease-in;
}
.nav-list:hover li {
  filter: blur(2px);
}
.nav-item:hover {
  filter: blur(0) !important;
}
@media only screen and (max-width: 768px) {
  .nav-list:hover li {
    filter: blur(0);
  }
}
</style>
