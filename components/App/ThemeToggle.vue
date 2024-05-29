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

<template>
  <UTooltip :text="toggleTheme" :ui="{ popper: { strategy: 'absolute' } }">
    <button
      class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
      @click="next()"
    >
      <Icon
        v-if="state === 'auto'"
        aria-hidden="true"
        name="solar:moon-bold"
        class="w-5 h-5"
        :key="1"
      />
      <Icon
        v-if="state === 'dark'"
        aria-hidden="true"
        name="solar:sun-2-bold"
        class="w-5 h-5"
        :key="2"
      />
      <Icon
        v-if="state === 'light'"
        aria-hidden="true"
        name="solar:laptop-minimalistic-bold"
        class="w-5 h-5"
        :key="3"
      />
      <span class="sr-only">Toggle theme</span>
    </button>
  </UTooltip>
</template>
