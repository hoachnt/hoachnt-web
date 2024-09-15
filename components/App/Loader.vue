<script lang="ts" setup>
defineProps<{
    isMounting: boolean;
}>();
</script>

<template>
    <Transition name="fade">
        <div
            v-if="!isMounting"
            class="bg-black z-[999999] min-w-full min-h-full fixed top-0 left-0 text-white flex justify-center items-center text-5xl"
        >
            <span class="wave">L</span>
            <span class="wave">o</span>
            <span class="wave">a</span>
            <span class="wave">d</span>
            <span class="wave">i</span>
            <span class="wave">n</span>
            <span class="wave">g</span>
            <span class="wave">.</span>
            <span class="wave">.</span>
            <span class="wave">.</span>
        </div>
    </Transition>
</template>

<style scoped>
@keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}

.wave {
    display: inline-block;
    animation: bounce 5s infinite;
}

.wave:nth-child(1) {
    animation-delay: 0s;
}
.wave:nth-child(2) {
    animation-delay: 0.1s;
}
.wave:nth-child(3) {
    animation-delay: 0.2s;
}
.wave:nth-child(4) {
    animation-delay: 0.3s;
}
.wave:nth-child(5) {
    animation-delay: 0.4s;
}
.wave:nth-child(6) {
    animation-delay: 0.5s;
}
.wave:nth-child(7) {
    animation-delay: 0.6s;
}
.wave:nth-child(8) {
    animation-delay: 0.7s;
}
.wave:nth-child(9) {
    animation-delay: 0.8s;
}
.wave:nth-child(10) {
    animation-delay: 0.9s;
}
.wave:nth-child(11) {
    animation-delay: 1s;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}

.fade-leave-to,
.fade-enter-from {
    opacity: 0;
    backdrop-filter: blur(0);
}
</style>
