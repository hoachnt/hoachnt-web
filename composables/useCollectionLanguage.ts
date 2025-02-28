import type { Collections } from "@nuxt/content";

type AvailableLanguages = "vn" | "ru";
type CollectionKey<T extends keyof Collections> = Extract<
    keyof Collections,
    `${T}${"" | "_ru" | "_vn"}`
>;

export function useCollectionLanguage<
    T extends keyof Pick<Collections, "article" | "project" | "articlePage">,
>() {
    const LANGUAGE_SUFFIXES: Record<AvailableLanguages, string> = {
        vn: "_vn",
        ru: "_ru",
    };

    const getLocaleFromPath = (path: string): AvailableLanguages | null => {
        const locale = path.split("/")[1] as AvailableLanguages;
        return locale in LANGUAGE_SUFFIXES ? locale : null;
    };

    const getCollectionLanguage = (
        defaultCollection: T,
        localePath: string
    ): CollectionKey<T> => {
        const locale = getLocaleFromPath(localePath);
        const suffix = locale ? LANGUAGE_SUFFIXES[locale] : "";
        return `${defaultCollection}${suffix}` as CollectionKey<T>;
    };

    return { getCollectionLanguage };
}
