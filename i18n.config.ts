import en from "./lang/en";
import ru from "./lang/ru";
import vn from "./lang/vn";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en: en,
        ru: ru,
        vn: vn,
    },
}));
