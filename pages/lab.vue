<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      :title="$t('lab.lab')"
      :description="$t('lab.description')"
    />
    <div class="space-y-24">
      <ContentList :path="localePath('/lab')" v-slot="{ list }">
        <ContentQuery
          v-for="item in list"
          :key="item._path"
          :path="item._path"
          find="one"
          v-slot="{ data }"
        >
          <ContentRenderer>
            <ContentRendererMarkdown :value="data" />
          </ContentRenderer>
        </ContentQuery>
      </ContentList>
    </div>
  </main>
</template>

<script setup>
const localePath = useLocalePath();
const description = "Some random experiments with UI I find in my free time.";
useSeoMeta({
  title: "Lab | Nguyen Tien Hoach",
  description,
});
</script>