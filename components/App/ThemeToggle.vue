<script setup lang="ts">
import { useColorMode, useCycleList } from "@vueuse/core";
import { watchEffect } from "vue-demi";

const { t } = useI18n();
const colorMode = useColorMode({
  emitAuto: true,
});
const { state, next } = useCycleList(["dark", "light", "auto"] as const, {
  initialValue: colorMode,
});

const toggleTheme = computed(() => t("navbar.toggleTheme"));

watchEffect(() => (colorMode.value = state.value));
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

<template>
  <UTooltip :text="toggleTheme" :ui="{ popper: { strategy: 'absolute' } }">
    <button
      class="px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400 relative ml-3"
      @click="next()"
    >
      <Transition name="slide-up">
        <Icon
          v-if="state === 'auto'"
          aria-hidden="true"
          name="solar:moon-bold"
          class="w-5 h-5 absolute"
          :key="1"
        />
        <Icon
          v-else-if="state === 'dark'"
          aria-hidden="true"
          name="solar:sun-2-bold"
          class="w-5 h-5 absolute"
          :key="2"
        />
        <Icon
          v-else-if="state === 'light'"
          aria-hidden="true"
          name="solar:laptop-minimalistic-bold"
          class="w-5 h-5 absolute"
          :key="3"
        />
      </Transition>
      <span class="sr-only">Toggle theme</span>
    </button>
  </UTooltip>
</template>
