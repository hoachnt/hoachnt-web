<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { onMounted, ref } from "vue";

const threeContainer = ref(null);

onMounted(() => {
    // Создаем сцену
    const scene = new THREE.Scene();

    // Настраиваем камеру
    const camera = new THREE.PerspectiveCamera(
        75,
        threeContainer.value.clientWidth / threeContainer.value.clientHeight,
        0.1,
        1000
    );
    camera.position.set(0, 2, 6); // Угол обзора камеры

    // Настраиваем рендерер
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true для прозрачного фона
    renderer.setSize(
        threeContainer.value.clientWidth,
        threeContainer.value.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio); // Учитываем разрешение экрана
    renderer.shadowMap.enabled = true; // Включаем тени
    threeContainer.value.appendChild(renderer.domElement);

    // Устанавливаем прозрачный фон
    scene.background = null; // Прозрачный фон

    // Добавляем освещение
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Мягкий общий свет
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 3, 5); // Позиция света перед и чуть выше собаки
    directionalLight.castShadow = true; // Тени от света
    directionalLight.lookAt(new THREE.Vector3(0, 0, 0)); // Направление на собаку
    scene.add(directionalLight);

    // Загрузка 3D-модели
    const loader = new GLTFLoader();
    loader.load("/dog-baked.glb", (gltf) => {
        const model = gltf.scene;
        model.position.set(0, -1, 0); // Центрируем модель
        model.scale.set(0.8, 0.8, 0.8); // Масштабируем модель

        // Применяем плоскую затененность (low-poly стиль)
        model.traverse((child) => {
            if (child.isMesh) {
                child.material.flatShading = true; // Упрощенное освещение
                child.castShadow = true; // Включаем тени
                child.receiveShadow = true; // Обработка теней
            }
        });

        scene.add(model);
    });

    // Элементы управления (OrbitControls)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1, 0);
    controls.enableDamping = true;
    controls.update();

    // Ограничиваем взаимодействие с моделью границами секции
    controls.domElement = threeContainer.value;

    // Анимация
    const animate = () => {
        requestAnimationFrame(animate);

        // Вращение сцены или модели
        scene.rotation.y += 0.005; // Плавное вращение вокруг оси Y

        // Обновляем элементы управления
        controls.update();

        // Рендер сцены
        renderer.render(scene, camera);
    };

    animate();

    // Обработка изменения размера окна
    window.addEventListener("resize", () => {
        camera.aspect =
            threeContainer.value.clientWidth /
            threeContainer.value.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
            threeContainer.value.clientWidth,
            threeContainer.value.clientHeight
        );
    });
});
</script>

<template>
    <section
        class="relative w-full h-[400px] flex justify-center items-center bg-transparent"
    >
        <div
            ref="threeContainer"
            class="w-full h-full overflow-hidden flex justify-center items-center"
        />
    </section>
</template>
