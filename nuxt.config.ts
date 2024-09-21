import content from "./config/content";
import htmlValidator from "./config/html-validator";
import i18nConfig from "./config/i18n";
import icon from "./config/icon";
import image from "./config/image";

export default defineNuxtConfig({
    experimental: {
        componentIslands: true,
    },
    runtimeConfig: {
        public: {
            enableIpadCursor: false,
        },
    },

    build: {},

    devtools: { enabled: true },

    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ["/sitemap.xml", "/articles", "/projects"],
        },
    },
    routeRules: {
        "/": { isr: true, prerender: true },
        "/projects/**": { isr: true, prerender: true },
    },

    plugins: ["~/plugins/ipad-cursor"],

    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxt/content",
        "@nuxt/eslint",
        "@nuxtjs/google-fonts",
        "@nuxtjs/fontaine",
        "@nuxtjs/i18n",
        "@nuxtjs/mdc",
        "@nuxtjs/sitemap",
        "@nuxtjs/html-validator",
        "nuxt-delay-hydration",
        "nuxt-svgo",
        "@vueuse/nuxt",
        "@vueuse/motion/nuxt",
        "@pinia/nuxt",
        "@nuxthq/studio",
        "@nuxt/icon",
        "@formkit/auto-animate/nuxt",
    ],

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
                class: "h-full",
            },
            bodyAttrs: {
                class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
            },
        },
    },

    content: content,

    svgo: {
        autoImportPath: "./assets/logo/",
    },

    sitemap: {
        strictNuxtContentPaths: true,
    },

    googleFonts: {
        display: "swap",
        families: {
            Inter: [400, 500, 600, 700, 800, 900],
            Raleway: [400, 500, 600, 700, 800, 900],
        },
    },

    image: image,

    mdc: {
        highlight: {
            langs: ["bash", "javascript", "html", "vue"],
        },
    },

    htmlValidator: htmlValidator,

    compatibilityDate: "2024-08-14",
});
