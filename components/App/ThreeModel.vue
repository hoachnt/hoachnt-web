<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const threeContainer = ref(null);
const loading = ref(true);
const urlDogGLB = "/dog-baked.glb";

// Функция плавного замедления (easeOutCirc)
function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}

onMounted(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const container = threeContainer.value;
    let frame = 0;
    let animationId;
    let model; // Хранение ссылки на загруженную модель

    // Настройка камеры
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 50000);
    const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
    );
    const target = new THREE.Vector3(-0.5, 1.2, 0);

    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    // Освещение
    const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI);
    scene.add(ambientLight);

    // Контроллеры
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.target = target;

    // Загрузка модели
    const loader = new GLTFLoader();
    loader.load(
        urlDogGLB,
        (gltf) => {
            model = gltf.scene;
            model.position.set(0, -1, 0);

            scene.add(model);
            updateModelScale(); // Подстройка размера модели при загрузке
            loading.value = false;
            animate(); // Начало анимации после загрузки модели
        },
        undefined,
        (error) => {
            console.error("Error loading model:", error);
        }
    );

    // Анимация
    const animate = () => {
        animationId = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
            const p = initialCameraPosition;
            const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

            camera.position.y = 10;
            camera.position.x =
                p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
            camera.position.z =
                p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
            camera.lookAt(target);
        } else {
            controls.update();
        }

        renderer.render(scene, camera);
    };

    // Обработка изменения размеров окна
    const handleResize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;

        renderer.setSize(width, height);

        const aspect = width / height;
        const scale = height * 0.005 + 4.8;

        camera.left = -scale * aspect;
        camera.right = scale * aspect;
        camera.top = scale;
        camera.bottom = -scale;
        camera.updateProjectionMatrix();

        updateModelScale(); // Обновление масштаба модели при изменении размеров
    };

    // Функция для обновления масштаба модели
    const updateModelScale = () => {
        if (!model) return;

        const containerHeight = container.clientHeight;
        const containerWidth = container.clientWidth;

        // Примерная настройка масштабирования
        const scaleFactor = Math.min(containerWidth, containerHeight) * 0.005;
        model.scale.set(scaleFactor, scaleFactor, scaleFactor);
    };

    handleResize(); // Обновление размеров при загрузке
    window.addEventListener("resize", handleResize);

    // Удаление сцены
    onBeforeUnmount(() => {
        cancelAnimationFrame(animationId);
        renderer.dispose();
        container.removeChild(renderer.domElement);
        window.removeEventListener("resize", handleResize);
    });
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
            <div v-if="loading" class="absolute">
                <UILoaderTerminalLoader />
            </div>
        </div>
    </section>
</template>
