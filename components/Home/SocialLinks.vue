<script lang="ts" setup>
const headingStyle = "uppercase text-xs font-semibold text-gray-400 mb-4";

const linksToFollow = [
    {
        name: "GitHub",
        url: "https://github.com/hoachnt",
        icon: "mdi:github",
    },
    {
        name: "Telegram",
        url: "https://t.me/hoachnt",
        icon: "mdi:telegram",
    },
];
</script>

<template>
    <div>
        <h2 :class="headingStyle">
            {{ $t("home.followMeOn") }}
        </h2>
        <div class="space-y-5">
            <NuxtLink
                v-for="link in linksToFollow"
                :key="link.icon"
                :to="link.url"
                class="flex items-end gap-4 dark:hover:text-gray-300 group"
                target="_blank"
                external
            >
                <span class="text-sm">
                    {{ link.name }}
                </span>
                <div
                    class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
                />
                <Icon :name="link.icon" class="w-6 h-6" :alt="link.name" />
            </NuxtLink>
        </div>
    </div>
</template>
