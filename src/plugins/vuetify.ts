import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const myCustomDarkTheme = {
    dark: true,
    colors: {
        primary: "#ffffff",
        background: "#000",
        surface: "#000",
    },
};

export const vuetify = createVuetify({
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: "myCustomDarkTheme",
        themes: {
            myCustomDarkTheme,
        },
    },
});
