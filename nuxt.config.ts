export default defineNuxtConfig({
    experimental: {
        // viewTransition: true,
    },
    runtimeConfig: {
        public: {
            enableIpadCursor: false,
        },
    },

    devtools: { enabled: true },

    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ["/sitemap.xml", "/lab", "/articles", "/projects"],
        },
    },
    routeRules: {
        "/": { isr: true, prerender: true },
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
    ],

    eslint: {
        config: {
            stylistic: true, // <---
        },
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

    icon: {
        serverBundle: {
            collections: [
                "heroicons-solid",
                "heroicons",
                "mdi",
                "solar",
                "logos",
            ], // <!--- this
        },
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
            theme: {
                // Default theme (same as single string)
                default: "monokai",
                // Theme used if `html.dark`
                dark: "github-dark",
                // Theme used if `html.sepia`
                cafe: "monokai",
            },
        },
    },

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
            "6xl": 80,
            "7xl": 600,
            "8xl": 1200,
        },
    },

    mdc: {
        highlight: {
            langs: ["bash", "javascript", "html", "vue"],
        },
    },

    htmlValidator: {
        usePrettier: false,
        logLevel: "verbose",
        failOnError: false,
        /** A list of routes to ignore (that is, not check validity for). */
        ignore: [/\.(xml|rss|json)$/],
        options: {
            extends: [
                "html-validate:document",
                "html-validate:recommended",
                "html-validate:standard",
            ],
            rules: {
                "svg-focusable": "off",
                "no-unknown-elements": "error",
                // Conflicts or not needed as we use prettier formatting
                "void-style": "off",
                "no-trailing-whitespace": "off",
                // Conflict with Nuxt defaults
                "require-sri": "off",
                "attribute-boolean-style": "off",
                "doctype-style": "off",
                // Unreasonable rule
                "no-inline-style": "off",
            },
        },
    },

    compatibilityDate: "2024-08-14",
});
