<script setup lang="ts">
const languages = [{
    name: 'English',
    value: 'en'
}, {
    name: 'Русский',
    value: 'ru',
}, {
    name: 'Vietnamese',
    value: 'vn',
    disabled: true
}]

const language = ref('en')
const { setLocale } = useI18n()

watch(language, (newLanguage) => {
    setLocale(newLanguage)
})
</script>

<template>
    <UTooltip text="Select language" :ui="{ popper: { strategy: 'absolute' } }">
        <USelect v-model="language" :options="languages" option-attribute="name">
            <template #leading>
                <Icon aria-hidden="true" name="heroicons-solid:language" class="w-5 h-5" />
            </template>
        </USelect>
    </UTooltip>
</template>
