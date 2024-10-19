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
                class="item duration-200 ease-in-out transition-all h-full w-full cursor-pointer"
                @mouseenter="technologyStore.stopShuffle"
                @mouseleave="technologyStore.startShuffle"
                @click="technologyStore.openModal(technology)"
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
                    provider="myProvider"
                    class="w-full h-full object-contain min-h-[40px]"
                    width="66px"
                    height="66px"
                    format="webp"
                    placeholder
                    loading="lazy"
                />
            </UCard>
            <LazyUModal
                v-if="technologyStore.modalData.isOpen"
                v-model="technologyStore.modalData.isOpen"
            >
                <UCard
                    :ui="{
                        ring: '',
                        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                    }"
                >
                    <template #header>
                        <h1 class="text-2xl">
                            {{ technologyStore.modalData.technology.title }}
                        </h1>
                    </template>
                    <UProgress
                        :value="technologyStore.modalData.technology.temp"
                        :max="100"
                        size="2xl"
                        :ui="{
                            progress: {
                                color: 'bg-black',
                            },
                        }"
                    >
                        <template #indicator="{ percent }">
                            <div
                                class="text-right"
                                :style="{ width: `${percent}%` }"
                            >
                                <span
                                    v-if="
                                        technologyStore.modalData.technology
                                            .temp < 33
                                    "
                                    class="text-blue-500"
                                    >Junior</span
                                >
                                <span
                                    v-else-if="
                                        technologyStore.modalData.technology
                                            .temp < 66
                                    "
                                    class="text-orange-500"
                                    >Middle</span
                                >
                                <span v-else class="text-red-500"
                                    >🔥 Senior</span
                                >
                            </div>
                        </template>
                    </UProgress>
                    <template #footer>
                        <section class="flex justify-end">
                            <UButton
                                color="black"
                                @click="
                                    technologyStore.modalData.isOpen = false
                                "
                                >{{ $t("app.close") }}</UButton
                            >
                        </section>
                    </template>
                </UCard>
            </LazyUModal>
        </div>
    </div>
</template>

<style scoped>
.list:has(.item:hover) .item:not(:hover) {
    filter: blur(4px);
}
</style>
