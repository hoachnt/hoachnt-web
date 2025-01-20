<script lang="ts" setup>
defineProps<{
    isMounting: boolean;
}>();
</script>

<template>
    <Transition name="fade">
        <div
            v-if="!isMounting"
            class="bg-black z-[999999] min-w-full min-h-dvh fixed top-0 left-0 text-white flex justify-center items-center"
        >
            <UILoaderTerminalLoader />
        </div>
    </Transition>
</template>
