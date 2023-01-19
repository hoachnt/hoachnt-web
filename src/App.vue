<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
import ReloadPWA from "./components/ReloadPWA.vue";
</script>

<template>
  <ReloadPWA />
  <TheNavbar />
  <main class="max-w-screen-2xl m-auto p-4 container xl:px-24">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <TheFooter />
</template>

<style>
@font-face {
  font-family: sfPro;
  src: url(./assets/fonts/sf-pro-display-cufonfonts/SFPRODISPLAYREGULAR.OTF);
}
body {
  font-family: sfPro;
  color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s cubic-bezier(0.3, -0.01, 0, 0.98);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
