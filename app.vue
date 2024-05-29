<script setup lang="ts">
const { finalizePendingLocaleChange } = useI18n();

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange();
};
</script>

<template>
  <NuxtLoadingIndicator color="#facc15" />
  <!-- <ClientOnly>
    <AppCursor />
  </ClientOnly> -->
  <AppNavbar />
  <div class="h-32"></div>
  <UContainer>
    <NuxtPage
      :transition="{
        name: 'page',
        mode: 'out-in',
        onBeforeEnter,
      }"
    />
  </UContainer>
  <div class="h-32"></div>
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
