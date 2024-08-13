<template>
    <main class="min-h-screen">
        <AppHeader
            class="mb-12"
            :title="$t('lab.lab')"
            :description="$t('lab.description')"
        />
        <div class="space-y-24">
            <ContentList :path="localePath('/lab')" v-slot="{ list }">
                <ContentQuery
                    v-for="item in list.slice(0, 3)"
                    :key="item._path"
                    :path="item._path"
                    find="one"
                    v-slot="{ data }"
                >
                    <ContentRenderer>
                        <ContentRendererMarkdown :value="data" />
                    </ContentRenderer>
                </ContentQuery>

                <div v-for="item in list.slice(3)" class="min-h-5 h-fit">
                    <ContentQuery
                        :key="item._path"
                        :path="item._path"
                        find="one"
                        v-slot="{ data }"
                    >
                        <ClientOnly>
                            <LazyContentRenderer
                                v-if="pathIsVisible(item._path)"
                            >
                                <ContentRendererMarkdown :value="data" />
                            </LazyContentRenderer>
                            <div
                                v-else
                                v-observe-bottom="
                                    () => handleIntersection(item._path)
                                "
                            >
                                Loading...
                            </div>
                        </ClientOnly>
                    </ContentQuery>
                </div>
            </ContentList>
        </div>
    </main>
</template>

<script setup lang="ts">
const hydrate = useBoosterHydrate();
const AppHeader = hydrate(() => import("~/components/App/Header.vue"));

import { LazyContentRenderer } from "#components";

const description = "Some random experiments with UI I find in my free time.";
useSeoMeta({
    title: "Lab | Nguyen Tien Hoach",
    description,
});

const localePath = useLocalePath();
const visibleItems = ref<Set<string>>(new Set());

function handleIntersection(path: string | undefined) {
    if (path) {
        if (!visibleItems.value.has(path)) {
            visibleItems.value.add(path);
        }
    }
}

function pathIsVisible(path: string | undefined): boolean {
    if (path) {
        return visibleItems.value.has(path);
    }
    return false;
}
</script>
