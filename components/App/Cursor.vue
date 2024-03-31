<template>
    <div ref="cursor"
        :class="[isLeft || isMobile ? 'hidden' : 'show', !isDark ? 'light' : '', isActive ? 'active' : '']"
        class="cursor" :style="{ left: (cursorPosition.left - 4) + 'px', top: (cursorPosition.top - 4) + 'px' }" />
    <div ref="aura" :class="[isLeft || isMobile ? 'hidden' : 'show', !isDark ? 'light' : '', isActive ? 'active' : '']"
        class="aura" :style="{ left: (auraPosition.left - 23) + 'px', top: (auraPosition.top - 23) + 'px' }" />

</template>

<script setup lang="ts">
const cursorPosition = reactive({
    top: 23,
    left: 23
})
const auraPosition = reactive({
    top: 23,
    left: 23
})
const isActive = ref(false)

const colorMode = useColorMode();
const { x, y } = usePointer()
const isLeft = usePageLeave()

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});

const isMobile = computed(() => {
    return window.innerWidth <= 760;
});

watch(x, (newX) => {
    cursorPosition.left = newX
    setTimeout(() => auraPosition.left = newX, 80)
})
watch(y, (newY) => {
    cursorPosition.top = newY
    setTimeout(() => auraPosition.top = newY, 80)
})

onUpdated(() => {
    if (window.innerWidth > 760) {
        const links = document.getElementsByTagName('a')

        Array.from(links).forEach((link) => {
            link.addEventListener('mouseover', () => isActive.value = true)
            link.addEventListener('mouseout', () => isActive.value = false)
        });
    }

})

onMounted(() => {
    cursorPosition.left = window.innerWidth / 2
    cursorPosition.top = window.innerHeight / 2
    auraPosition.left = window.innerWidth / 2
    auraPosition.top = window.innerHeight / 2
})

</script>

<style scoped>
.cursor,
.aura {
    transform: scale(1);
    position: fixed;
    border-radius: 100%;
    transition: .5s cubic-bezier(.75, -1.27, .3, 2.33) transform, .2s cubic-bezier(.75, -1.27, .3, 2.33) opacity;
    user-select: none;
    pointer-events: none;
    z-index: 10000;
}

.cursor.hidden,
.aura.hidden {
    display: block !important;
    transform: scale(0);
    transition: .5s cubic-bezier(.75, -1.27, .3, 2.33) transform, .2s cubic-bezier(.75, -1.27, .3, 2.33) opacity;
}

.cursor.show,
.aura.show {
    transform: scale(1);
    transition: .5s cubic-bezier(.75, -1.27, .3, 2.33) transform, .2s cubic-bezier(.75, -1.27, .3, 2.33) opacity;
}

.cursor {
    width: 8px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.8);
}

.cursor.light {
    background-color: rgba(0, 0, 0, 0.5);
}

.cursor.active {
    opacity: 0;
    transform: scale(0);
}

.aura {
    width: 46px;
    height: 46px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.027);
}

.aura.light {
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.027);
}

.aura.light.active {
    border: 1px solid rgba(0, 0, 0, 0.33);
    transform: scale(1.3)
}

.aura.active {
    border: 1px solid rgba(255, 255, 255, 0.4);
    transform: scale(1.3)
}
</style>