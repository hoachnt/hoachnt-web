<template>
  <div class="space-y-6">
    <NuxtImg
      src="/avatar.png"
      alt="Hoachnt"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px"
      placeholder
      format="webp"
      v-cursor-block="{radius: '50%'}"
    />
    <h1
      v-cursor-text
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 capitalize"
    >
      {{ $t("home.hello") }}.
    </h1>
    <p class="text-gray-900 dark:text-gray-400" v-cursor-text>
      {{ $t("home.aboutMeText1") }}
    </p>
    <p class="text-gray-900 dark:text-gray-400" v-cursor-text>
      {{ $t("home.aboutMeText2") }}
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Nguyen Tien Hoach",
  description:
    "I'm an independent software developer currently living in Vietnam. I'm a Fullstack developer.",
});
</script>
<style scoped>
h1 {
  view-transition-name: header;
}
</style>
