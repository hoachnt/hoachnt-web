<script setup lang="ts">
const { t } = useI18n();
const carouselStore = useCarouselStore();
const hydrate = useBoosterHydrate();

const HomeWorkLinks = hydrate(() => import("@/components/Home/WorkLinks.vue"));
const UIEmblaCarouselPrevious = hydrate(
    () => import("@/components/UI/Embla/Carousel/Previous.vue")
);
const UIEmblaCarouselNext = hydrate(
    () => import("@/components/UI/Embla/Carousel/Next.vue")
);

const seoMeta = computed(() => ({
    title: t("seo.home.title"),
    description: t("seo.home.description"),
}));

useSeoMeta(seoMeta.value);
</script>

<template>
    <main>
        <div class="space-y-24">
            <!-- Анимация для HomeIntro -->
            <HomeIntro />

            <HomeTechnologies
                v-motion
                critical
                :initial="{ opacity: 0, y: 10 }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        ease: 'backOut',
                    },
                }"
                :delay="1000"
                :duration="1000"
            />

            <!-- Анимация для UIEmblaCarousel -->
            <UIEmblaCarousel
                v-motion
                :initial="{ opacity: 0, y: 10 }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        ease: 'backOut',
                    },
                }"
                :delay="1200"
                :duration="1000"
            >
                <template #default>
                    <UIEmblaCarouselContent>
                        <UIEmblaCarouselItem class="space-y-24 select-none">
                            <HomeSocialLinks />
                        </UIEmblaCarouselItem>

                        <UIEmblaCarouselItem class="space-y-24 select-none">
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
