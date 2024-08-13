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
      variant="outline"
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
