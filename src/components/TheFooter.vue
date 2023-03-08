<template>
  <div class="min-w-screen flex justify-center items-center py-24">
    <v-lazy :options="{ 'threshold': 0.5 }" transition="fade-transition">
      <a href="https://www.facebook.com/hoachprogrammer" aria-label="facebook" v-ripple class="p-ripple">
        <font-awesome-icon icon="fa-brands fa-facebook"
          class="text-3xl text-white mx-4 hover:text-blue-600 transition duration-300" />
      </a>
    </v-lazy>
    <v-lazy :options="{ 'threshold': 0.5 }" transition="fade-transition">
      <a href="https://github.com/hoach-linux" aria-label="github" v-ripple class="p-ripple">
        <font-awesome-icon class="text-3xl text-white mx-4 hover:text-blue-600 transition duration-300"
          icon="fa-brands fa-github" />
      </a>
    </v-lazy>
  </div>
</template>
<script setup lang="ts"></script>
<style></style>
