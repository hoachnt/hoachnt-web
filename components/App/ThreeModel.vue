<script setup lang="ts">
import * as THREE from "three";

const props = defineProps<{ urlModelGlb: string }>();
const {
    loadModel,
    handleResize,
    initCamera,
    initControls,
    updateModelScale,
    animationId,
    model,
} = useThreeModel();
const store = useThreeModelStore();

const threeContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    const container = threeContainer.value as HTMLDivElement;

    const { camera, initialCameraPosition, target } = initCamera(
        renderer,
        container,
        scene
    );
    const controls = initControls(camera, target, renderer);

    loadModel(
        props.urlModelGlb,
        scene,
        container,
        camera,
        initialCameraPosition,
        target,
        controls,
        renderer
    );

    const resizeHandler = () => handleResize(camera, container, renderer);
    window.addEventListener("resize", resizeHandler);

    resizeHandler();
});

watch(
    () => [
        threeContainer.value?.clientWidth,
        threeContainer.value?.clientHeight,
    ],
    () => {
        if (model && threeContainer.value)
            updateModelScale(model, threeContainer.value);
    }
);

onBeforeUnmount(() => {
    cancelAnimationFrame(animationId);
    if (threeContainer.value) {
        const container = threeContainer.value;
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.dispose();
        container.removeChild(renderer.domElement);
    }
    window.removeEventListener("resize", () => handleResize);
});
</script>

<template>
    <section
        class="relative max-w-2xl h-[300px] flex justify-center items-center bg-transparent m-auto cursor-move"
    >
        <div
            ref="threeContainer"
            class="w-full h-full overflow-hidden flex justify-center items-center"
        >
            <div v-if="store.loading && !store.error" class="absolute">
                <UILoaderTerminalLoader />
            </div>
            <div v-if="store.error" class="absolute text-red-600">
                <p>{{ store.error }}</p>
            </div>
        </div>
    </section>
</template>