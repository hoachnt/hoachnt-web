import content from "./config/content";
import htmlValidator from "./config/html-validator";
import i18nConfig from "./config/i18n";
import icon from "./config/icon";
import image from "./config/image";

export default defineNuxtConfig({
    experimental: {
        componentIslands: true,
        viewTransition: true,
    },
    runtimeConfig: {
        public: {},
    },

    build: {
        transpile: ["three"],
    },

    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },

    nitro: {
        prerender: {
            routes: ["/", "/sitemap.xml", "/articles", "/projects"],
        },
    },

    routeRules: {
        "/articles/**": { isr: true },
    },

    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxtjs/sitemap",
        "@nuxt/content",
        "@nuxt/eslint",
        "@nuxtjs/fontaine",
        "@nuxtjs/i18n",
        "@nuxtjs/mdc",
        "@nuxtjs/html-validator",
        "nuxt-delay-hydration",
        "nuxt-svgo",
        "@vueuse/nuxt",
        "@vueuse/motion/nuxt",
        "@pinia/nuxt",
        "@nuxthq/studio",
        "@nuxt/icon",
        "@formkit/auto-animate/nuxt",
        "@nuxt/fonts",

        "nuxt-booster",
    ],

    booster: {
        detection: {
            performance: true,
            browserSupport: true,
            battery: true,
        },

        performanceMetrics: {
            timing: {
                fcp: 800,
                dcl: 1200,
            },
        },

        optimizeSSR: {
            cleanPreloads: true,
            cleanPrefetches: true,
            inlineStyles: true,
        },

        /**
         * IntersectionObserver rootMargin for Compoennts and Assets
         */
        lazyOffset: {
            component: "0%",
            asset: "0%",
        },
    },

    eslint: {
        config: {},
    },

    pinia: {
        storesDirs: ["./stores/**"],
    },

    site: {
        url: "https://www.hoachnt.com",
        name: "Nguyen Tien Hoach",
    },

    delayHydration: {
        mode: "mount",
        replayClick: true,
    },

    i18n: i18nConfig,

    icon: icon,

    app: {
        head: {
            htmlAttrs: {
                lang: "en",
                class: "h-dvh",
            },
            bodyAttrs: {
                class: "antialiased bg-gray-50 dark:bg-black min-h-dvh",
            },
        },
    },

    content: content,

    svgo: {
        autoImportPath: "./assets/logo/",
    },

    image: image,

    mdc: {
        highlight: {
            langs: ["bash", "javascript", "html", "vue", "nix"],
        },
    },

    htmlValidator: htmlValidator,

    compatibilityDate: "2024-08-14",
});
