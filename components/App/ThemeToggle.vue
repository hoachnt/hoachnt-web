<script setup lang="ts">
import { useColorMode, useCycleList } from "@vueuse/core";
import { watchEffect } from "vue-demi";

const { t } = useI18n();
const colorMode = useColorMode({
    emitAuto: true,
    modes: {
        cafe: "cafe",
    },
});
const { state, next } = useCycleList(
    ["dark", "light", "auto", "cafe"] as const,
    {
        initialValue: colorMode,
    }
);

const toggleTheme = computed(() => t("navbar.toggleTheme"));

watchEffect(() => (colorMode.value = state.value));
</script>

<template>
    <UTooltip :text="toggleTheme" :ui="{ popper: { strategy: 'absolute' } }">
        <button
            class="flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400 relative w-5 h-5"
            @click="next()"
        >
            <Transition name="slide-up">
                <Icon
                    v-if="state === 'cafe'"
                    :key="1"
                    aria-hidden="true"
                    name="solar:moon-bold"
                    class="w-full h-full absolute"
                />
                <Icon
                    v-else-if="state === 'dark'"
                    :key="2"
                    aria-hidden="true"
                    name="solar:sun-2-bold"
                    class="w-full h-full absolute"
                />
                <Icon
                    v-else-if="state === 'light'"
                    :key="3"
                    aria-hidden="true"
                    name="solar:laptop-minimalistic-bold"
                    class="w-full h-full absolute"
                />
                <Icon
                    v-else-if="state === 'auto'"
                    :key="4"
                    aria-hidden="true"
                    name="solar:tea-cup-bold"
                    class="w-full h-full absolute"
                />
            </Transition>
            <span class="sr-only">Toggle theme</span>
        </button>
    </UTooltip>
</template>

<style>
html.cafe {
    filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}

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
