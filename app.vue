<script setup lang="ts">
const route = useRoute();
const { finalizePendingLocaleChange } = useI18n();

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange();
};
const onAfterEnter = () => {
  window.scrollTo(0, 0);
};

watch(
  () => route.path,
  () => onAfterEnter()
);
</script>

<template>
  <NuxtLoadingIndicator color="#facc15" />
  <!-- <ClientOnly>
    <AppCursor />
  </ClientOnly> -->
  <AppNavbar />
  <div class="h-32"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-4"></div>
  <AppFooter />
</template>

<style>
body {
  overflow-x: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
