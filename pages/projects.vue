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

<script setup>
const description =
  "I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of.";
useSeoMeta({
  title: "Projects | Nguyen Tien Hoach",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>