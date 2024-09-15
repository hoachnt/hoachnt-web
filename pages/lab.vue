<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

const seoMeta = ref({
    title: `${t("seo.lab.title")} | ${t("title")}`,
    description: t("seo.lab.description"),
});

useSeoMeta(seoMeta.value);
</script>

<template>
    <main class="min-h-screen">
        <LazyAppHeader
            class="mb-12"
            :title="$t('lab.lab')"
            :description="$t('lab.description')"
        />
        <div class="space-y-24">
            <ContentList v-slot="{ list }" :path="localePath('/lab')">
                <ContentQuery
                    v-for="item in list"
                    :key="item._path"
                    v-slot="{ data }"
                    :path="item._path"
                    find="one"
                >
                    <ContentRenderer>
                        <ContentRendererMarkdown :value="data" />
                    </ContentRenderer>
                </ContentQuery>
            </ContentList>
        </div>
    </main>
</template>

<style scoped></style>
