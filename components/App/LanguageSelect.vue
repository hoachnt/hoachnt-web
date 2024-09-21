<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n();

onMounted(() => {
    setLocale(locale.value);
});

watch(locale, (newLanguage) => {
    setLocale(newLanguage);
});
</script>

<template>
    <UTooltip
        :text="t('navbar.selectLanguage')"
        :ui="{ popper: { strategy: 'absolute' } }"
    >
        <USelect
            v-model="locale"
            :options="locales"
            option-attribute="name"
            aria-label="Language select"
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
