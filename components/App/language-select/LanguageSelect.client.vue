<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

interface ILanguage {
    value: "en" | "ru" | "vn";
    code: string;
    icon: string;
    id: string;
}

const languages = computed<ILanguage[]>(() =>
    locales.value.map((locale) => ({
        ...locale,
        value: locale.value,
        icon:
            locale.value === "en"
                ? "circle-flags:en"
                : locale.value === "ru"
                  ? "circle-flags:ru"
                  : "circle-flags:vn",
        id: locale.code,
    }))
);

const selected = shallowRef<ILanguage>(
    languages.value.find((language) => language.value === locale.value) ||
        languages.value[0]
);

onMounted(() => {
    setLocale(selected.value.value);
});

watchEffect(() => {
    setLocale(selected.value.value);
});
</script>

<template>
    <USelectMenu
        v-model="selected"
        :options="languages"
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
    </USelectMenu>
</template>
