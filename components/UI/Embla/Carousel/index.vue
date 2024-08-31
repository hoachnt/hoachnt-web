<script lang="ts" setup>
import AutoHeight from "embla-carousel-auto-height";
import emblaCarouselVue from "embla-carousel-vue";

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: false }, [AutoHeight()]);
const carouselStore = useCarouselStore();

onMounted(() => {
    if (emblaRef.value) {
        carouselStore.emblaRef = emblaRef.value;
        carouselStore.emblaApi = emblaApi.value;
    }

    if (carouselStore.emblaApi) {
        carouselStore.updateHeight(); // Initial height update
        carouselStore.emblaApi.on("select", carouselStore.updateHeight); // Update height on slide change
    }
});
</script>

<template>
    <div class="embla">
        <div ref="emblaRef" class="embla__viewport">
            <slot />
        </div>
        <div
            class="embla__controls grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]"
        >
            <div class="embla__buttons space-x-1">
                <slot name="emblaButtons" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.embla {
    --slide-spacing: 1rem;
}
.embla__viewport {
    overflow: hidden;
    transition: height 0.5s ease; /* Transition for height */
}
</style>
