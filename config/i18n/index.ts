import type { ModuleOptions } from "@nuxtjs/i18n";

export default <Partial<ModuleOptions>>{
    skipSettingLocaleOnNavigate: false,
    defaultLocale: "en",
    langDir: "lang",
    lazy: true,
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
};
