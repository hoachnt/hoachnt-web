<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
</script>

<template>
  <main class="max-w-screen-2xl m-auto px-24">
    <TheNavbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
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
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
