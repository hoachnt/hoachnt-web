export default defineAppConfig({
    appName: "Nguyen Tien Hoach",
    footerName: "Hoachnt",
    ui: {
        primary: "blue",
        gray: "neutral",
        formGroup: {
            help: "text-xs mt-1 text-gray-500 dark:text-gray-400",
            error: "text-xs mt-1 text-red-500 dark:text-red-400",
            label: {
                base: "text-sm block font-medium text-gray-500 dark:text-gray-200",
            },
        },
        button: {
            rounded:
                "rounded-sm transition-transform active:scale-x-[0.98] active:scale-y-[0.99]",
        },
        modal: {
            padding: "p-0",
            overlay: {
                background: "backdrop-blur-md",
            },
        },
        container: {
            constrained: "max-w-2xl",
        },
        card: {
            rounded: "rounded-sm",
            shadow: "shadow-none",
            ring: "ring-0",
        },
        input: {
            rounded: "rounded-sm",
        },
        select: {
            rounded: "rounded-sm",
        },
        skeleton: {
            rounded: "rounded-sm",
        },
        alert: {
            rounded: "rounded-sm",
        },
    },
});
