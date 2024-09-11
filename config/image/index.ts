import type { ModuleOptions } from "@nuxt/image";

export default <Partial<ModuleOptions>>{
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
};
