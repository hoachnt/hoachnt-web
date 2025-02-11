import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        article: defineCollection({
            type: "data",
            source: "articles/*.md",
            schema: z.object({
                path: z.string(),
                title: z.string(),
                description: z.string(),
                slug: z.string(),
                published: z.date(),
            }),
        }),
        articlePage: defineCollection({
            type: "page",
            source: "articles/*.md",
            schema: z.object({
                path: z.string(),
                title: z.string(),
                description: z.string(),
                slug: z.string(),
                published: z.date(),
            }),
        }),
        project: defineCollection({
            type: "data",
            source: "projects/*.json",
            schema: z.object({
                name: z.string(),
                url: z.string(),
                description: z.string(),
                thumbnail: z.string(),
                status: z.string(),
                opensource: z.boolean(),
                techStack: z.array(z.string()),
            }),
        }),
    },
});
