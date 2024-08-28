<script setup lang="ts">
const hydrate = useBoosterHydrate();
const HomeIntro = hydrate(() => import("@/components/Home/Intro.vue"));
const HomeTechnologies = hydrate(
    () => import("@/components/Home/Technologies.vue")
);
const HomeSocialLinks = hydrate(
    () => import("@/components/Home/SocialLinks.vue")
);

const HomeWorkLinks = hydrate(() => import("@/components/Home/WorkLinks.vue"));

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
        <div class="space-y-24">
            <HomeIntro />
            <UIEmblaCarousel>
                <template #default>
                    <UIEmblaCarouselContent>
                        <UIEmblaCarouselItem class="space-y-24">
                            <HomeTechnologies
                                class="border border-gray-200 dark:border-gray-800 p-4 rounded-xl"
                            />
                        </UIEmblaCarouselItem>
                        <UIEmblaCarouselItem class="space-y-24">
                            <HomeSocialLinks />
                        </UIEmblaCarouselItem>
                        <UIEmblaCarouselItem class="space-y-24">
                            <HomeWorkLinks />
                        </UIEmblaCarouselItem>
                    </UIEmblaCarouselContent>
                </template>
                <template #emblaButtons>
                    <UIEmblaCarouselPrevious
                        @click="carouselStore.scrollPrev()"
                    />
                    <UIEmblaCarouselNext @click="carouselStore.scrollNext()" />
                </template>
            </UIEmblaCarousel>
        </div>
    </main>
</template>
