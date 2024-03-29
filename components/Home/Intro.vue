<template>
  <div class="space-y-6">
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 capitalize">
      {{ $t('hello') }}.
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      {{ $t('aboutMeText1') }}
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      {{ $t('aboutMeText2') }}
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Nguyen Tien Hoach",
  description:
    "I'm an independent software developer currently living in Vietnam. I'm a Fullstack developer. My main tools are golang, vue and react.",
});
</script>
