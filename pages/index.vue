<script setup lang="ts">
const hydrate = useBoosterHydrate();
const HomeIntro = hydrate(() => import("@/components/Home/Intro.vue"));
const HomeTechnologies = hydrate(
    () => import("@/components/Home/Technologies.vue")
);
const HomeSocialLinks = hydrate(
    () => import("@/components/Home/SocialLinks.vue")
);
const { t } = useI18n();
const carouselStore = useCarouselStore();

const seoMeta = ref({
    title: t("seo.home.title"),
    description: t("seo.home.description"),
});

useSeoMeta({ ...seoMeta.value });
</script>

<template>
    <main class="min-h-dvh">
        <UIEmblaCarousel>
            <template #default>
                <UIEmblaCarouselContent>
                    <UIEmblaCarouselItem class="space-y-24">
                        <HomeIntro />
                    </UIEmblaCarouselItem>
                    <UIEmblaCarouselItem class="space-y-24">
                        <div class="px-2">
                            <HomeTechnologies />
                        </div>
                    </UIEmblaCarouselItem>
                    <UIEmblaCarouselItem class="space-y-24">
                        <HomeSocialLinks />
                    </UIEmblaCarouselItem>
                </UIEmblaCarouselContent>
            </template>
            <template #emblaButtons>
                <UIEmblaCarouselPrevious @click="carouselStore.scrollPrev()" />
                <UIEmblaCarouselNext @click="carouselStore.scrollNext()" />
            </template>
        </UIEmblaCarousel>
    </main>
</template>
