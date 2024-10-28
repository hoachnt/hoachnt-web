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
            <div
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{
                    opacity: 1,
                    y: 0,
                }"
                :delay="200"
                :duration="600"
            >
                <LazyHomeIntro />
            </div>

            <!-- Анимация для UIEmblaCarousel -->
            <UIEmblaCarousel
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{
                    opacity: 1,
                    y: 0,
                }"
                :delay="600"
                :duration="600"
            >
                <template #default>
                    <UIEmblaCarouselContent>
                        <UIEmblaCarouselItem class="space-y-24 select-none">
                            <LazyHomeTechnologies />
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
                        v-motion
                        :initial="{ opacity: 0, scale: 0.5 }"
                        :enter="{
                            opacity: 1,
                            scale: 1,
                        }"
                        :delay="800"
                        :duration="400"
                        @click="carouselStore.scrollPrev()"
                    />

                    <!-- Анимация для UIEmblaCarouselNext -->
                    <UIEmblaCarouselNext
                        v-motion
                        :initial="{ opacity: 0, scale: 0.5 }"
                        :enter="{
                            opacity: 1,
                            scale: 1,
                        }"
                        :delay="1000"
                        :duration="400"
                        @click="carouselStore.scrollNext()"
                    />
                </template>
            </UIEmblaCarousel>
        </div>
    </main>
</template>
