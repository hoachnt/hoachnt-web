import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Ease-out function
function easeOutCirc(x: number): number {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}

export function useThreeModel() {
    const store = useThreeModelStore();
    let animationId: number = 0;
    let model: THREE.Object3D | null = null;

    const updateModelScale = (
        model: THREE.Object3D,
        container: HTMLDivElement
    ) => {
        const scaleFactor =
            Math.min(container.clientWidth, container.clientHeight) * 0.005;
        model.scale.set(scaleFactor, scaleFactor, scaleFactor);
    };

    const handleModelError = (error: ErrorEvent) => {
        console.error("Error loading model:", error);
        store.setError(
            "There was an error loading the 3D model. Please try again."
        );
        store.setLoading(false);
    };

    const initCamera = (
        renderer: THREE.WebGLRenderer,
        container: HTMLDivElement,
        scene: THREE.Scene
    ) => {
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
        container.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI);
        scene.add(ambientLight);

        return { camera, initialCameraPosition, target };
    };

    const initControls = (
        camera: THREE.OrthographicCamera,
        target: THREE.Vector3,
        renderer: THREE.WebGLRenderer
    ) => {
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true;
        controls.target = target;
        return controls;
    };

    const animate = (
        camera: THREE.OrthographicCamera,
        initialCameraPosition: THREE.Vector3,
        target: THREE.Vector3,
        controls: OrbitControls,
        renderer: THREE.WebGLRenderer,
        scene: THREE.Scene
    ) => {
        let frame = 0;

        const render = () => {
            animationId = requestAnimationFrame(render);
            frame = frame <= 100 ? frame + 1 : frame;

            if (frame <= 100) {
                const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
                camera.position.set(
                    initialCameraPosition.x * Math.cos(rotSpeed) +
                        initialCameraPosition.z * Math.sin(rotSpeed),
                    10,
                    initialCameraPosition.z * Math.cos(rotSpeed) -
                        initialCameraPosition.x * Math.sin(rotSpeed)
                );
                camera.lookAt(target);
            } else {
                controls.update();
            }

            renderer.render(scene, camera);
        };

        render();
    };

    const handleResize = (
        camera: THREE.OrthographicCamera,
        container: HTMLDivElement,
        renderer: THREE.WebGLRenderer
    ) => {
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

        if (model) updateModelScale(model, container);
    };

    const loadModel = (
        url: string,
        scene: THREE.Scene,
        container: HTMLDivElement,
        camera: THREE.OrthographicCamera,
        initialCameraPosition: THREE.Vector3,
        target: THREE.Vector3,
        controls: OrbitControls,
        renderer: THREE.WebGLRenderer
    ) => {
        const loader = new GLTFLoader();
        loader.load(
            url,
            (gltf) => {
                try {
                    model = gltf.scene;
                    if (model) {
                        model.position.set(0, -1, 0);
                        scene.add(model);
                        updateModelScale(model, container);
                        store.setLoading(false);
                        animate(
                            camera,
                            initialCameraPosition,
                            target,
                            controls,
                            renderer,
                            scene
                        );
                    }
                } catch (error) {
                    handleModelError(error as ErrorEvent);
                }
            },
            undefined,
            (error) => handleModelError(error)
        );
    };

    return {
        initCamera,
        initControls,
        animate,
        handleResize,
        loadModel,
        updateModelScale,
        
        animationId,
        model,
    };
}
