<template>
  <main>
    <h1
      class="main-text leading-none text-center font-extrabold text-black capitalize mb-14"
    >
      About me
    </h1>
    <div class="grid gap-4 grid-cols-1 xl:grid-cols-3">
      <div
        v-ripple
        v-motion-pop
        class="p-ripple col-span-2 cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 flex items-center justify-center overflow-hidden"
      >
        <h2 class="hover-offer capitalize text-5xl extrabold">View the case</h2>
        <div class="offer min-w-full">
          <div class="main-offer flex items-center justify-between">
            <h2 class="text-4xl font-bold capitalize">H-Institution</h2>
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="text-2xl"
            />
          </div>
          <Tag-Prime class="text-sm font-semibold my-5 uppercase">
            Web app / Vuejs / Nuxt / Tailwind Css / Vuetify
          </Tag-Prime>
        </div>
      </div>
      <div
        v-ripple
        v-motion-pop
        @click="$router.push('/about')"
        class="p-ripple cursor-pointer offer-block bg-black h-72 rounded-3xl p-8 flex items-center justify-center overflow-hidden"
      >
        <div class="min-w-full">
          <h2 class="text-4xl font-bold">Hey, I'm Hoach 👋</h2>
          <div class="main-offer flex items-center justify-between">
            <p class="text-2xl my-5">Frontend Developer</p>
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="text-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts"></script>
<style scoped>
.main-text {
  font-size: 17vw;
}
</style>
