<template>
  <div>
    <h2 :class="headingStyle">
      {{ $t("home.technologyStack") }}
    </h2>
    <div
      class="list border-animation grid grid-cols-4 gap-3 sm:grid-cols-5 sm:gap-4"
    >
      <NuxtLink
        v-for="(technology, index) in technologies"
        :key="index"
        :to="technology.url"
        target="_blank"
        external
        prefetch
        class="item duration-200 ease-in-out transition-all"
        v-cursor-block="{ radius: '24px' }"
      >
        <UCard
          :ui="{
            background: 'bg-white dark:bg-gray-900',
            divide: 'divide-y divide-gray-200 dark:divide-gray-800',
            ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
            rounded: 'rounded-lg',
            shadow: 'shadow',
            body: {
              base: 'h-full',
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
          class="duration-200 ease-in-out transition-all md:hover:rounded-3xl md:hover:scale-110 h-full"
        >
          <Icon
            :name="technology.icon"
            class="w-full h-full"
            v-if="technology.icon"
          />
          <NuxtImg
            v-else
            :src="technology.iconUrl"
            :alt="technology.title"
            class="w-full h-full object-contain"
            sizes="66px"
            format="webp"
            placeholder
          />
        </UCard>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const headingStyle =
  "uppercase text-xs font-semibold text-white p-1 mb-4 bg-black dark:bg-white dark:text-black w-fit";

const technologies = [
  { id: 0, title: "Golang", icon: "logos:go", url: "https://go.dev/" },
  {
    id: 1,
    title: "JavaScript",
    icon: "logos:javascript",
    url: "https://www.javascript.com/",
  },
  {
    id: 2,
    title: "TypeScript",
    icon: "logos:typescript-icon",
    url: "https://www.typescriptlang.org/",
  },
  {
    id: 3,
    title: "Nuxt.js",
    icon: "logos:nuxt-icon",
    url: "https://nuxt.com/",
  },
  {
    id: 4,
    title: "Next.js",
    icon: "logos:nextjs-icon",
    url: "https://nextjs.org/",
  },
  {
    id: 5,
    title: "Linux",
    icon: "logos:linux-tux",
    url: "https://www.linux.org/",
  },
  {
    id: 6,
    title: "Docker",
    icon: "logos:docker-icon",
    url: "https://www.docker.com/",
  },
  {
    id: 7,
    title: "PostgreSQL",
    icon: "logos:postgresql",
    url: "https://www.postgresql.org/",
  },
  {
    id: 8,
    title: "SQLite",
    icon: "logos:sqlite",
    url: "https://sqlite.org/",
  },
  {
    id: 9,
    title: "Caddy",
    icon: "",
    iconUrl: "/icons/caddy.svg",
    url: "https://caddyserver.com/",
  },
  {
    id: 10,
    title: "Directus",
    icon: "",
    iconUrl: "/icons/directus.png",
    url: "https://directus.io/",
  },
];
</script>

<style scoped lang="scss">
.list:has(.item:hover) .item:not(:hover) {
  filter: blur(4px);
}
</style>
