<script lang="ts" setup>
const headingStyle = "uppercase text-xs font-semibold text-gray-400 mb-4";

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
                :aria-label="technology.title"
                target="_blank"
                external
                prefetch
                class="item duration-200 ease-in-out transition-all"
            >
                <UCard class="duration-200 ease-in-out transition-all h-full">
                    <Icon
                        v-if="technology.icon"
                        :name="technology.icon"
                        :alt="technology.title"
                        class="w-full h-full"
                    />
                    <NuxtImg
                        v-else
                        :src="technology.iconUrl"
                        :alt="technology.title"
                        class="w-full h-full object-contain"
                        width="66px"
                        height="66px"
                        format="webp"
                        placeholder
                        loading="lazy"
                    />
                </UCard>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
.list:has(.item:hover) .item:not(:hover) {
    filter: blur(4px);
}
</style>
