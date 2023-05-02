<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <v-app>
    <TheNavbar />
    <main class="max-w-screen-2xl m-auto p-4 container xl:px-24 mt-20">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </v-app>
</template>

<style>
@font-face {
  font-family: sfPro;
  src: url(./assets/fonts/sf-pro-display-cufonfonts/SFPRODISPLAYREGULAR.OTF);
  font-display: swap;
}

body {
  font-family: sfPro;
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s cubic-bezier(.1, .2, .3, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
