import type { ModuleOptions } from "@nuxt/image";

export default <Partial<ModuleOptions>>{
    domains: ["www.hoachnt.com"],
    format: ["webp"],
    providers: {
        myProvider: {
            name: "myProvider", // optional value to overrider provider name
            provider: "~/providers/my-provider.ts", // Path to custom provider
            options: {
                // ... provider options
                baseURL: "https://hoachnt.on-fleek.app",
            },
        },
    },
};
