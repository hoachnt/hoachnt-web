<script setup lang="ts">
const hydrate = useBoosterHydrate();
const HomeIntro = hydrate(() => import("~/components/Home/Intro.vue"));
const HomeTechnologies = hydrate(
    () => import("~/components/Home/Technologies.vue")
);
const HomeSocialLinks = hydrate(
    () => import("~/components/Home/SocialLinks.vue")
);
</script>

<template>
    <main class="min-h-screen">
        <div class="space-y-24">
            <HomeIntro />
            <HomeTechnologies />
            <HomeSocialLinks />
        </div>
    </main>
</template>
