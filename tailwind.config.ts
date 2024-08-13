import type { Config } from "tailwindcss";

export default <Partial<Config>>{
    jit: true,
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            highlight: "#6d6d6d",
            boxShadow: {
                zoop: "rgba(102, 109, 128, 0.08) 0px 1.2672px 1.2672px 0px, rgba(102, 109, 128, 0.08) 0px 5.06879px 10.1376px 0px",
                zoopdark:
                    "rgba(10, 10, 10, 0.2) 0px 1.2672px 1.2672px 0px, rgba(10, 10, 10, 0.2) 0px 5.06879px 10.1376px 0px",
            },
            colors: {
                primary: {
                    50: "#f6f6f6",
                    100: "#e7e7e7",
                    200: "#d1d1d1",
                    300: "#b0b0b0",
                    400: "#7c7c7c",
                    500: "#6d6d6d",
                    600: "#5d5d5d",
                    700: "#4f4f4f",
                    800: "#454545",
                    900: "#3d3d3d",
                    950: "#262626",
                },
            },
        },
        fontFamily: {
            sans: [
                "Raleway",
                "Inter",
                "Avenir Next",
                "Roboto",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Ubuntu",
                '"Helvetica Neue"',
                "Arial",
                '"Noto Sans"',
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            mono: [
                "Cascadia Code",
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                "Liberation Mono",
                "Courier New",
                "monospace",
            ],
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
