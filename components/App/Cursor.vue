<template>
    <div ref="cursor" :class="[isLeft || isMobile ? 'hidden' : 'show']" class="cursor"
        :style="{ left: (cursorPosition.left - 4) + 'px', top: (cursorPosition.top - 4) + 'px' }" />
    <div ref="aura" :class="[isLeft || isMobile ? 'hidden' : 'show']" class="aura"
        :style="{ left: (auraPosition.left - 23) + 'px', top: (auraPosition.top - 23) + 'px' }" />

</template>

<script setup lang="ts">

const cursorPosition = reactive({
    top: 0,
    left: 0
})
const auraPosition = reactive({
    top: 0,
    left: 0
})
const cursor = ref(null)
const aura = ref(null)
const { x, y } = usePointer()
const isLeft = usePageLeave()

const isMobile = computed(() => {
    return screen.width <= 760;
});

watch(x, (newX) => {
    cursorPosition.left = newX
    setTimeout(() => auraPosition.left = newX, 80)
})
watch(y, (newY) => {
    cursorPosition.top = newY
    setTimeout(() => auraPosition.top = newY, 80)
})

</script>

<style scoped>
.cursor,
.aura {
    scale: 0;
    opacity: 0;
    position: fixed;
    border-radius: 100%;
    transition: 5s cubic-bezier(.75, -1.27, .3, 2.33) scale, 2s cubic-bezier(.75, -1.27, .3, 2.33) opacity;
    user-select: none;
    pointer-events: none;
    z-index: 10000;
}

#cursorContainer {
    position: fixed;
    left: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -100;
}

.cursor.hidden,
.aura.hidden {
    scale: 0;
    opacity: 0;
    transition: 5s cubic-bezier(.75, -1.27, .3, 2.33) scale, 2s cubic-bezier(.75, -1.27, .3, 2.33) opacity;
}

.cursor.show,
.aura.show {
    scale: 1;
    opacity: 1;
    transition: 5s cubic-bezier(.75, -1.27, .3, 2.33) scale, 2s cubic-bezier(.75, -1.27, .3, 2.33) opacity;
}

.cursor {
    width: 8px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.5);
}

.aura {
    width: 46px;
    height: 46px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.027);
}
</style>