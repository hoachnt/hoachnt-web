import type { ModuleOptions } from "@nuxt/icon";

export default <Partial<ModuleOptions>>{
    serverBundle: {
        collections: ["heroicons-solid", "heroicons", "mdi", "solar", "logos"], // <!--- this
        externalizeIconsJson: true,
    },
};
