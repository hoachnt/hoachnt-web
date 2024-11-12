<script setup lang="ts">
const { t } = useI18n();
const carouselStore = useCarouselStore();

const seoMeta = ref({
    title: t("seo.home.title"),
    description: t("seo.home.description"),
});

useSeoMeta({ ...seoMeta.value });
</script>

<template>
    <main>
        <div class="space-y-24">
            <!-- Анимация для HomeIntro -->
            <div>
                <HomeIntro />
            </div>

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
                :delay="1000"
                :duration="1000"
            >
                <template #default>
                    <UIEmblaCarouselContent>
                        <UIEmblaCarouselItem class="space-y-24 select-none">
                            <HomeTechnologies />
                        </UIEmblaCarouselItem>
                        <UIEmblaCarouselItem class="space-y-24 select-none">
                            <LazyHomeSocialLinks />
                        </UIEmblaCarouselItem>
                        <UIEmblaCarouselItem class="space-y-24 select-none">
                            <LazyHomeWorkLinks />
                        </UIEmblaCarouselItem>
                    </UIEmblaCarouselContent>
                </template>

                <!-- Анимация для UIEmblaCarouselPrevious -->
                <template #emblaButtons>
                    <UIEmblaCarouselPrevious
                        @click="carouselStore.scrollPrev()"
                    />

                    <!-- Анимация для UIEmblaCarouselNext -->
                    <UIEmblaCarouselNext @click="carouselStore.scrollNext()" />
                </template>
            </UIEmblaCarousel>
        </div>
    </main>
</template>
