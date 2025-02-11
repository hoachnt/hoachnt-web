import type { ModuleOptions } from "@nuxt/content";

export default <Partial<ModuleOptions>>{
    build: {
        markdown: {
            langs: ["nix"],

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
    },
};
