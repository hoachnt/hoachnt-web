<script setup lang="ts">
const { t } = useI18n();

const localePath = useLocalePath();
const route = useRoute();

const seoMeta = ref({
    title: `${t("seo.projects.title")} | ${t("title")}`,
    description: t("seo.projects.description"),
});

useSeoMeta(seoMeta.value);

const { data: projects } = await useAsyncData(
    `projects-all-${route.path}`,
    () =>
        queryContent(localePath("/projects"))
            .find()
            .then((response) =>
                response.sort((a, b) => {
                    const nameA = a._id.toUpperCase();
                    const nameB = b._id.toUpperCase();

                    if (nameA < nameB) {
                        return 1;
                    }

                    if (nameA > nameB) {
                        return -1;
                    }

                    return 0;
                })
            )
);
</script>

<template>
    <main>
        <LazyAppHeader
            class="mb-12"
            :title="$t('projects.projects')"
            :description="$t('projects.description')"
        />
        <div class="space-y-4">
            <LazyAppProjectCard
                v-for="(project, index) in projects"
                :key="index"
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        ease: 'easeInOut',
                    },
                }"
                :delay="100 * index"
                :duration="500"
                :project="project"
            />
        </div>
    </main>
</template>
