<script lang="ts" setup>
import { useTechnologyStore } from "@/stores/technology";

const headingStyle = "uppercase text-xs font-semibold text-gray-400 mb-4";

const technologyStore = useTechnologyStore();

// Инициализация таймера при монтировании и удаление перед размонтированием
onMounted(() => {
    technologyStore.startShuffle();
});

onBeforeUnmount(() => {
    technologyStore.stopShuffle();
});
</script>

<template>
    <div>
        <h2 :class="headingStyle">
            {{ $t("home.technologyStack") }}
        </h2>
        <div
            v-auto-animate="{ duration: 500 }"
            class="list border-animation grid grid-cols-4 gap-3 sm:grid-cols-5 sm:gap-4"
        >
            <UCard
                v-for="technology in technologyStore.technologies"
                :key="technology.id"
                class="item duration-200 ease-in-out transition-all h-full w-full"
                @mouseenter="technologyStore.stopShuffle"
                @mouseleave="technologyStore.startShuffle"
            >
                <Icon
                    v-if="technology.icon"
                    :name="technology.icon"
                    :alt="technology.title"
                    class="w-full h-10"
                />
                <NuxtImg
                    v-else
                    :src="technology.iconUrl"
                    :alt="technology.title"
                    class="w-full h-full object-contain min-h-[40px]"
                    width="66px"
                    height="66px"
                    format="webp"
                    placeholder
                    loading="lazy"
                />
            </UCard>
        </div>
    </div>
</template>

<style scoped lang="scss">
.list:has(.item:hover) .item:not(:hover) {
    filter: blur(4px);
}
</style>
