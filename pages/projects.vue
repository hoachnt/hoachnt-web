<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";
const { t } = useI18n();

const localePath = useLocalePath();
const hydrate = useBoosterHydrate();

const AppProjectCard = hydrate(
    () => import("@/components/App/ProjectCard.vue")
);

const seoMeta = computed(() => ({
    title: `${t("seo.projects.title")} | ${t("title")}`,
    description: t("seo.projects.description"),
}));

useSeoMeta(seoMeta.value);

const projects = ref<ParsedContent[] | null>([]);

const fetchProjects = async () => {
    const data = await queryContent(localePath("/projects"))
        .find()
        .then((response) =>
            response.sort((a, b) => b._id.localeCompare(a._id))
        );

    projects.value = data;
};

await fetchProjects();

watch(localePath, async () => {
    await fetchProjects();
});
</script>

<template>
    <main>
        <AppHeader
            critical
            class="mb-12"
            :title="$t('projects.projects')"
            :description="$t('projects.description')"
        />
        <div class="grid gap-4">
            <AppProjectCard
                v-for="(project, index) in projects"
                :key="index"
                v-motion
                v-memo="[project]"
                :initial="{ opacity: 0, y: 10 }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        ease: 'backOut',
                    },
                }"
                :delay="200 * index"
                :duration="1000"
                :project="project"
            />
        </div>
    </main>
</template>
