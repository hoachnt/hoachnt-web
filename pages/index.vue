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
            <!-- Анимация для HomeIntro -->
            <HomeIntro
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.6 },
                }"
            />

            <!-- Анимация для UIEmblaCarousel -->
            <UIEmblaCarousel
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6, duration: 0.6 },
                }"
            >
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

                <!-- Анимация для UIEmblaCarouselPrevious -->
                <template #emblaButtons>
                    <UIEmblaCarouselPrevious
                        v-motion
                        :initial="{ opacity: 0, scale: 0.8 }"
                        :enter="{
                            opacity: 1,
                            scale: 1,
                            transition: { delay: 0.8, duration: 0.4 },
                        }"
                        @click="carouselStore.scrollPrev()"
                    />

                    <!-- Анимация для UIEmblaCarouselNext -->
                    <UIEmblaCarouselNext
                        v-motion
                        :initial="{ opacity: 0, scale: 0.8 }"
                        :enter="{
                            opacity: 1,
                            scale: 1,
                            transition: { delay: 1.0, duration: 0.4 },
                        }"
                        @click="carouselStore.scrollNext()"
                    />
                </template>
            </UIEmblaCarousel>
        </div>
    </main>
</template>
