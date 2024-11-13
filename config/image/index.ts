import type { ModuleOptions } from "@nuxt/image";

export default <Partial<ModuleOptions>>{
    domains: ["www.hoachnt.com"],
    format: ["webp"],
    providers: {
        myProvider: {
            name: "hoachnt", // optional value to overrider provider name
            provider: "~/providers/image.ts", // Path to custom provider
            options: {
                // ... provider options
                baseURL: "https://www.hoachnt.com",
            },
        },
    },
};
