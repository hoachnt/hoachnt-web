// composables/useCursorManager.ts
import { useCursor } from "ipad-cursor/vue";
import { useColorMode } from "@vueuse/core";

const colorModes = {
    dark: "rgba(255, 255, 255, 0.8)",
    light: "rgba(0, 0, 0, 0.8)",
    auto: "rgba(150, 150, 150, 0.5)",
    cafe: "rgba(150, 150, 150, 0.5)",
} as const;

export type ColorMode = keyof typeof colorModes;

export function useCursorManager() {
    const colorMode = useColorMode({
        emitAuto: true,
        modes: {
            cafe: "cafe",
        },
    });

    const { isMobile } = useDevice();

    function updateCursor() {
        const currentMode = colorMode.value as ColorMode;

        useCursor().updateConfig({
            textStyle: {
                background:
                    colorModes[currentMode] || "rgba(150, 150, 150, 0.5)",
            },
            normalStyle: {
                background: ["auto", "cafe"].includes(colorMode.value)
                    ? "rgba(150, 150, 150, 0.5)"
                    : "rgba(150, 150, 150, 0.2)",
            },
            mouseDownStyle: {
                background: "rgba(150, 150, 150, 0.4)",
            },
        });
    }

    if (!isMobile()) {
        watch(colorMode, updateCursor);
        onMounted(updateCursor);
    }

    return { colorMode };
}
