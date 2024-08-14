<template>
  <div
    ref="headerRef"
    :style="styles"
    class="nav-wrapper fixed top-0 w-full z-50 bg-inherit backdrop-blur-md"
  >
    <nav class="mx-auto px-3 max-w-2xl">
      <ul
        class="flex items-center h-[52px] my-4 px-3 text-sm font-medium text-gray-800 dark:text-gray-200"
      >
        <li
          v-for="item in items"
          :key="item.path"
          class="hidden lg:block"
          v-cursor-block
        >
          <ULink
            :to="item.path"
            prefetch
            class="relative h-10 px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
            active-class="text-primary-600 dark:text-primary-400"
          >
            <span
              v-if="$route.path === item.path"
              class="active-bg absolute h-full w-full z-0 rounded-md bg-gray-500/10 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ></span>
            {{ item.name }}
          </ULink>
        </li>

        <li>
          <UButton
            color="primary"
            variant="outline"
            size="sm"
            class="lg:hidden z-10 block"
            v-cursor-block
            @click="isOpen = true"
          >
            Menu
          </UButton>
        </li>

        <LazyAppNavigationSliderOver
          v-if="isOpen"
          :close="() => close()"
          v-model:is-open="isOpen"
        />

        <li class="nav-item flex-1"></li>
        <li class="nav-item ml-3" v-cursor-block>
          <AppLanguageSelect />
        </li>
        <li
          class="nav-item flex items-center justify-center ml-3"
          v-cursor-block
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

<script setup>
import { useFixedHeader } from "vue-use-fixed-header";

const localePath = useLocalePath();
const { t } = useI18n();
const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);
const isOpen = ref(false);

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

function close() {
  isOpen.value = false;
}
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
