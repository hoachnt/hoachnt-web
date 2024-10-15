import type { ModuleOptions } from "@nuxt/icon";

export default <Partial<ModuleOptions>>{
    serverBundle: "local",
    clientBundle: {
        scan: true,

        sizeLimitKb: 256,
    },
};
