<script setup lang="ts">
import type {
    ProjectCollectionItem,
    ProjectRuCollectionItem,
    ProjectVnCollectionItem,
} from "@nuxt/content";

const { t } = useI18n();
const localePath = useLocalePath();
const hydrate = useBoosterHydrate();
const { getCollectionLanguage } = useCollectionLanguage<"project">();

const AppProjectCard = hydrate(
    () => import("@/components/App/ProjectCard.vue")
);

const seoMeta = computed(() => ({
    title: `${t("seo.projects.title")} | ${t("title")}`,
    description: t("seo.projects.description"),
    ogTitle: `${t("seo.projects.title")} | ${t("title")}`,
    ogDescription: t("seo.projects.description"),
}));

useSeoMeta(seoMeta.value);

const projects = ref<
    | ProjectCollectionItem[]
    | ProjectRuCollectionItem[]
    | ProjectVnCollectionItem[]
    | null
>([]);

await fetchProjects();

watch(localePath, async () => {
    await fetchProjects();
});

async function fetchProjects() {
    const response = await useAsyncData(localePath("/projects"), () => {
        return queryCollection(
            getCollectionLanguage("project", localePath("/projects"))
        ).all();
    });

    projects.value = response.data.value;
}
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
                :enter="{ opacity: 1, y: 0, transition: { ease: 'backOut' } }"
                :delay="200 * index"
                :duration="1000"
                :project="project"
            />
        </div>
    </main>
</template>
