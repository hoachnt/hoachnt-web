<script lang="ts" setup>
const headingStyle = "uppercase text-xs font-semibold  mb-4";

const linksForWork = [
    {
        name: "Mail",
        url: "mailto:hoachprogrammer@gmail.com",
        icon: "mdi:mail-ru",
    },
    { name: "Phone", url: "tel:+84934442006", icon: "mdi:phone" },
];
</script>

<template>
    <div>
        <h2 :class="headingStyle">
            {{ $t("home.contactsForWork") }}
        </h2>
        <div class="space-y-5">
            <NuxtLink
                v-for="link in linksForWork"
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
