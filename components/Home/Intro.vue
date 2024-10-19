<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
    <div class="space-y-6">
        <NuxtImg
            provider="myProvider"
            src="/avatar.jpg"
            alt="Hoachnt"
            class="cursor-pointer ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
            sizes="48px sm:64px"
            placeholder
            preload
            format="webp"
            @click="isOpen = true"
        />
        <h1
            class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 capitalize"
        >
            {{ $t("home.hello") }}.
        </h1>
        <p class="text-gray-900 dark:text-gray-400">
            {{ $t("home.aboutMeText1") }}
        </p>
        <p class="text-gray-900 dark:text-gray-400">
            {{ $t("home.aboutMeText2") }}
        </p>
    </div>
    <UModal
        v-model="isOpen"
        :ui="{
            container: 'items-center',
        }"
    >
        <NuxtImg
            provider="myProvider"
            src="/avatar.jpg"
            alt="Hoachnt"
            class="border border-gray-300 dark:border-gray-800 transition-all duration-300 bg-gray-200 dark:bg-gray-900 h-full w-full"
            placeholder
            preload
            format="webp"
        />
    </UModal>
</template>

<style scoped>
h1 {
    view-transition-name: header;
}
</style>
