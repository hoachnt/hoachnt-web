import type { ModuleOptions } from "@nuxtjs/html-validator";

export default <Partial<ModuleOptions>>{
    usePrettier: true,
    logLevel: "verbose",
    failOnError: false,
    /** A list of routes to ignore (that is, not check validity for). */
    ignore: [
        /\.xml$/,
        /\.rss$/,
        /\.json$/,
        /^\/articles/, // Например, если `.md` файлы рендерятся на этом маршруте
    ],
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
};
