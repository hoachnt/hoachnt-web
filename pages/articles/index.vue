<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-16"
      :title="$t('articles.articles')"
      :description="$t('articles.description')"
    />
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

<script setup>
const description = "Interesting articles that I found interesting.";
useSeoMeta({
  title: "Articles | Nguyen Tien Hoach",
  description,
});
const localePath = useLocalePath();
const route = useRoute();

const { data: articles } = await useAsyncData(
  "all-articles",
  () => queryContent(localePath("/articles")).sort({ published: -1 }).find(),
  {
    watch: [route.path],
  }
);
</script>
