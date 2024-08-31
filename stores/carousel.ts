export const useCarouselStore = defineStore("carousel", () => {
    const emblaRef = ref<HTMLElement>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const emblaApi = ref<any>();

    const viewportHeight = ref(0);

    watch(viewportHeight, (newHeight: number) => {
        if (emblaRef.value) {
            emblaRef.value.style.height = `${newHeight}px`;
        }
    });

    const updateHeight = () => {
        if (emblaApi.value) {
            const currentSlide = emblaApi.value.selectedScrollSnap();
            const slides = emblaApi.value.slideNodes();
            if (slides[currentSlide]) {
                viewportHeight.value = slides[currentSlide].offsetHeight; // Set the height to the current slide's height
            }
        }
    };

    const scrollPrev = () => {
        if (emblaApi.value) emblaApi.value.scrollPrev();
    };

    const scrollNext = () => {
        if (emblaApi.value) emblaApi.value.scrollNext();
    };

    return {
        scrollPrev,
        scrollNext,
        emblaRef,
        updateHeight,
        emblaApi,
    };
});
