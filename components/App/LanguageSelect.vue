<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n();

const selectLanguage = computed(() => t("navbar.selectLanguage"));

watch(locale, (newLanguage) => {
    setLocale(newLanguage);
});
</script>

<template>
    <UTooltip :text="selectLanguage" :ui="{ popper: { strategy: 'absolute' } }">
        <USelect
            v-model="locale"
            :options="locales"
            option-attribute="name"
            variant="none"
            :ui="{
                variant: {
                    none: 'bg-primary-100/50 dark:bg-primary-900/50',
                },
            }"
        >
            <template #leading>
                <Icon
                    aria-hidden="true"
                    name="heroicons-solid:language"
                    class="w-5 h-5"
                />
            </template>
        </USelect>
    </UTooltip>
</template>
