// types/boosterConfig.d.ts
import { NuxtConfig } from "@nuxt/schema";

export interface BoosterConfig {
    detection?: {
        performance: boolean;
        browserSupport: boolean;
        battery: boolean;
    };
    performanceMetrics?: {
        device?: {
            hardwareConcurrency?: { min: number; max: number };
            deviceMemory?: { min: number };
        };
        timing: {
            fcp: number;
            dcl: number;
        };
    };
    targetFormats?: never[] | undefined;
    optimizeSSR?: {
        cleanPreloads: boolean;
        cleanPrefetches: boolean;
        inlineStyles: boolean;
    };
    componentAutoImport?: boolean;
    componentPrefix?: string | undefined;
    lazyOffset?: {
        component?: string;
        asset?: string;
    };
}

declare module "@nuxt/schema" {
    interface NuxtConfig {
        booster?: BoosterConfig;
    }
}
