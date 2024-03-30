export default defineNuxtConfig({
  devtools: { enabled: true },
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
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
    skipSettingLocaleOnNavigate: true,
    defaultLocale: "en",
    lazy: true,
    langDir: 'lang',
    strategy: "prefix_except_default",
    locales: [
      {
        name: "English",
        value: "en",
        code: "en",
        file: "en.ts"
      },
      {
        name: "Русский",
        value: "ru",
        code: "ru",
        file: "ru.ts"
      },
      {
        name: "Tiếng việt",
        value: "vn",
        code: "vn",
        file: "vn.ts"
      },
    ],
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
      Rubik: [400, 500, 600, 700, 800, 900],
    },
  },
});
