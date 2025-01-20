declare module "three/examples/jsm/controls/OrbitControls" {
    import type { Camera, MOUSE, Vector3 } from "three";
    import { EventDispatcher } from "three";

    export class OrbitControls extends EventDispatcher {
        constructor(object: Camera, domElement: HTMLElement);
        object: Camera;
        domElement: HTMLElement;
        enabled: boolean;
        target: Vector3;
        minDistance: number;
        maxDistance: number;
        minZoom: number;
        maxZoom: number;
        minPolarAngle: number;
        maxPolarAngle: number;
        minAzimuthAngle: number;
        maxAzimuthAngle: number;
        enableDamping: boolean;
        dampingFactor: number;
        enableZoom: boolean;
        zoomSpeed: number;
        enableRotate: boolean;
        rotateSpeed: number;
        enablePan: boolean;
        panSpeed: number;
        screenSpacePanning: boolean;
        keyPanSpeed: number;
        autoRotate: boolean;
        autoRotateSpeed: number;
        reverseOrbit: boolean;
        keys: { LEFT: string; UP: string; RIGHT: string; BOTTOM: string };
        mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
        touches: { ONE: MOUSE; TWO: MOUSE };
        update(): boolean;
        saveState(): void;
        reset(): void;
        dispose(): void;
        getPolarAngle(): number;
        getAzimuthalAngle(): number;
        listenToKeyEvents(domElement: HTMLElement): void;
    }
}

declare module "three/examples/jsm/loaders/GLTFLoader" {
    import { Loader } from "three";

    export class GLTFLoader extends Loader {
        constructor(manager?: LoadingManager);
        load(
            url: string,
            onLoad: (gltf: GLTF) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void
        ): void;
        parse(
            data: ArrayBuffer | string,
            path: string,
            onLoad: (gltf: GLTF) => void
        ): void;
    }

    export interface GLTF {
        scene: Object3D;
        scenes: Object3D[];
        animations: AnimationClip[];
        cameras: Object3D[];
        asset: {
            version: string;
            generator: string;
            [key: string]: string | number | boolean | object;
        };
    }
}
