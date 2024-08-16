<template>
    <main class="min-h-screen">
        <AppHeader
            class="mb-12"
            :title="$t('projects.projects')"
            :description="$t('projects.description')"
        />
        <div class="space-y-4">
            <AppProjectCard
                v-for="(project, id) in projects"
                :key="id"
                :project="project"
            />
        </div>
    </main>
</template>

<script setup lang="ts">
const hydrate = useBoosterHydrate();
const AppHeader = hydrate(() => import("@/components/App/Header.vue"));
const AppProjectCard = hydrate(
    () => import("@/components/App/ProjectCard.vue")
);

const description =
    "I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of.";
useSeoMeta({
    title: "Projects | Nguyen Tien Hoach",
    description,
});

const localePath = useLocalePath();
const route = useRoute();

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
