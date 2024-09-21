import type { NuxtI18nOptions } from "@nuxtjs/i18n";

export default <Partial<NuxtI18nOptions>>{
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
    lazy: true,
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: "i18n_redirected",
        redirectOn: "root", // recommended
        alwaysRedirect: true,
    },
};
