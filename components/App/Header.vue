<template>
  <div>
    <h1
      class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 capitalize"
      v-cursor-text
    >
      {{ title }}
    </h1>
    <p class="mt-6 text-base text-gray-600 dark:text-gray-400" v-cursor-text>
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
h1 {
  view-transition-name: header;
}
</style>
