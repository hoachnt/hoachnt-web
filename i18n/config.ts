import en from "@/i18n/lang/en";
import ru from "@/i18n/lang/ru";
import vn from "@/i18n/lang/vn";

export default defineI18nConfig(() => ({
    legacy: true,
    locale: "en",
    messages: {
        en: en,
        ru: ru,
        vn: vn,
    },
}));
