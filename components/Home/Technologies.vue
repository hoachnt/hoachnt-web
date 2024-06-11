<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">
      {{ $t("home.technologyStack") }}
    </h2>
    <div class="grid grid-cols-4 gap-3 sm:grid-cols-5 sm:gap-4">
      <UCard
        v-for="(technology, index) in technologies"
        :key="index"
        :ui="{
          background: 'bg-white dark:bg-gray-900',
          divide: 'divide-y divide-gray-200 dark:divide-gray-800',
          ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
          rounded: 'rounded-lg',
          shadow: 'shadow',
          body: {
            base: '',
            background: '',
            padding: 'p-2 sm:p-6',
          },
          header: {
            base: '',
            background: '',
            padding: 'px-4 py-5 sm:px-6',
          },
          footer: {
            base: '',
            background: '',
            padding: 'px-4 py-4 sm:px-6',
          },
        }"
        class="duration-150 ease-in-out transition-all md:hover:rounded-3xl md:hover:animate-none md:hover:scale-110"
      >
        <Icon :name="technology.icon" class="w-full h-full" />
      </UCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
const technologies = [
  { title: "Golang", icon: "logos:go" },
  { title: "JavaScript", icon: "logos:javascript" },
  { title: "TypeScript", icon: "logos:typescript-icon" },
  { title: "Vue.js", icon: "logos:vue" },
  { title: "React.js", icon: "logos:react" },
];
</script>

<style></style>
