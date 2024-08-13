export default defineNuxtConfig({
    experimental: {
        // viewTransition: true,
    },
    devtools: { enabled: true },
    routeRules: {
        "/bookmarks": { prerender: true },
        "/projects": { prerender: true },
        "/lab": { prerender: true },
        "/projects/**": { prerender: true },
        "/sitemap.xml": { prerender: true },
    },
    plugins: [
        "~/plugins/ipad-cursor",
        "~/plugins/intersection-observer.client",
        "~/plugins/scroll-behavior.client",
    ],

    modules: [
        "@nuxt/ui",
        "nuxt-icon",
        "@nuxtjs/google-fonts",
        "@nuxtjs/fontaine",
        "@nuxt/image",
        "@nuxt/content",
        "@nuxthq/studio",
        "@vueuse/nuxt",
        "@nuxtjs/i18n",
        "@vueuse/nuxt",
        "nuxt-delay-hydration",
        "@nuxtjs/sitemap",
    ],
    site: {
        url: "https://www.hoachnt.com",
        name: "Nguyen Tien Hoach",
    },
    delayHydration: {
        mode: "mount",
        replayClick: true,
        // enables nuxt-delay-hydration in dev mode for testing
        // NOTE: you should disable this once you've finished testing, it will break HMR
        debug: process.env.NODE_ENV === "development",
    },
    i18n: {
        vueI18n: "./i18n.config.ts",
        skipSettingLocaleOnNavigate: true,
        defaultLocale: "en",
        langDir: "lang",
        strategy: "prefix_except_default",
        locales: [
            {
                name: "English",
                value: "en",
                code: "en",
                file: "en.ts",
            },
            {
                name: "Русский",
                value: "ru",
                code: "ru",
                file: "ru.ts",
            },
            {
                name: "Tiếng việt",
                value: "vn",
                code: "vn",
                file: "vn.ts",
            },
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root", // recommended
            alwaysRedirect: true,
        },
    },
    ui: {
        icons: ["heroicons", "lucide"],
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
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
    content: {
        highlight: {
            theme: "github-dark",
        },
    },
    googleFonts: {
        display: "swap",
        families: {
            Inter: [400, 500, 600, 700, 800, 900],
            Raleway: [400, 500, 600, 700, 800, 900],
        },
    },
    image: {
        domains: ["www.hoachnt.com"],
        format: ["webp"],
        provider: "vercel",
        vercel: {
            baseURL: "https://www.hoachnt.com/_vercel/image",
        },
        screens: {
            xs: 10,
            sm: 40,
            md: 48,
            lg: 50,
            xl: 60,
            xxl: 64,
            "2xl": 66,
            "3xl": 96,
            "4xl": 128,
            "5xl": 132,
            "80": 80,
        },
    },
});
