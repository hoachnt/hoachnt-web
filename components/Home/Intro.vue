<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
    <div class="space-y-6">
        <NuxtImg
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :enter="{
                opacity: 1,
                y: 0,
                transition: {
                    ease: 'backOut',
                },
            }"
            :delay="200"
            :duration="1000"
            provider="hoachnt"
            src="/avatar.jpg"
            alt="Hoachnt"
            class="cursor-pointer ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
            sizes="48px sm:64px"
            placeholder
            preload
            format="webp"
            @click="isOpen = true"
        />
        <h1
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :enter="{
                opacity: 1,
                y: 0,
                transition: {
                    ease: 'backOut',
                },
            }"
            :delay="400"
            :duration="1000"
            class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 capitalize"
        >
            {{ $t("home.hello") }}.
        </h1>
        <p
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :enter="{
                opacity: 1,
                y: 0,
                transition: {
                    ease: 'backOut',
                },
            }"
            :delay="600"
            :duration="1000"
            class="text-gray-900 dark:text-gray-400"
        >
            {{ $t("home.aboutMeText1") }}
        </p>
        <p
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :enter="{
                opacity: 1,
                y: 0,
                transition: {
                    ease: 'backOut',
                },
            }"
            :delay="800"
            :duration="1000"
            class="text-gray-900 dark:text-gray-400"
        >
            {{ $t("home.aboutMeText2") }}
        </p>
    </div>
    <LazyUModal
        v-if="isOpen"
        v-model="isOpen"
        :ui="{
            container: 'items-center',
        }"
    >
        <LazyNuxtImg
            provider="hoachnt"
            src="/avatar.jpg"
            alt="Hoachnt"
            class="border border-gray-300 dark:border-gray-800 transition-all duration-300 bg-gray-200 dark:bg-gray-900 h-full w-full"
            placeholder
            preload
            format="webp"
        />
    </LazyUModal>
</template>

<style scoped>
/* Transition api */
/* h1 {
    view-transition-name: header;
} */
</style>
