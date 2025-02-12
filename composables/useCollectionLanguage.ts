import type { Collections } from "@nuxt/content";

export function useCollectionLanguage<
    T extends keyof Pick<Collections, "article" | "project" | "articlePage">,
>() {
    enum CollectionLanguages {
        VN = "vn",
        RU = "ru",
    }

    function getCollectionLanguage(
        defaultCollection: T,
        localePath: string
    ): Extract<keyof Collections, `${T}${"" | "_ru" | "_vn"}`> {
        const suffix = localePath.split("/")[1].includes(CollectionLanguages.RU)
            ? "_ru"
            : localePath.split("/")[1].includes(CollectionLanguages.VN)
              ? "_vn"
              : "";

        const collectionKey =
            `${defaultCollection}${suffix}` as keyof Collections;

        return collectionKey as Extract<
            keyof Collections,
            `${T}${"" | "_ru" | "_vn"}`
        >;
    }

    return { getCollectionLanguage };
}
