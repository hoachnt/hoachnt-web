<template>
  <main>
    <h1
      class="main-text leading-none text-center font-extrabold text-black capitalize mb-14"
    >
      All work
    </h1>
    <div class="grid gap-4 grid-cols-1 xl:grid-cols-2 grid-rows-1">
      <a
        href="https://h-institution.netlify.app"
        v-ripple
        v-motion-pop
        class="p-ripple cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 flex items-center justify-center overflow-hidden"
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
      </a>
      <a
        href="https://www.vuagac.com/"
        v-ripple
        v-motion-pop
        class="p-ripple cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 flex items-center justify-center overflow-hidden"
      >
        <h2 class="hover-offer capitalize text-5xl extrabold">View the case</h2>
        <div class="offer min-w-full">
          <div class="main-offer flex items-center justify-between">
            <h2 class="text-4xl font-bold capitalize">Vuagac.com</h2>
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="text-2xl"
            />
          </div>
          <Tag-Prime class="text-sm font-semibold my-5 uppercase">
            Web app / Vuejs / Nuxt / Tailwind Css / Daisy Ui
          </Tag-Prime>
        </div>
      </a>
      <a
        href="https://dinoland-hoach.surge.sh/"
        v-ripple
        v-motion-pop
        class="p-ripple cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 flex items-center justify-center overflow-hidden"
      >
        <h2 class="hover-offer capitalize text-5xl extrabold">View the case</h2>
        <div class="offer min-w-full">
          <div class="main-offer flex items-center justify-between">
            <h2 class="text-4xl font-bold capitalize">DinoLand</h2>
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="text-2xl"
            />
          </div>
          <Tag-Prime class="text-sm font-semibold my-5 uppercase">
            Web app / Html / Scss / Js
          </Tag-Prime>
        </div>
      </a>
      <a
        href="https://podcast-app-93c2f.web.app/"
        v-ripple
        v-motion-pop
        class="p-ripple cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 flex items-center justify-center overflow-hidden"
      >
        <h2 class="hover-offer capitalize text-5xl extrabold">View the case</h2>
        <div class="offer min-w-full">
          <div class="main-offer flex items-center justify-between">
            <h2 class="text-4xl font-bold capitalize">Poadcast app</h2>
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="text-2xl"
            />
          </div>
          <Tag-Prime class="text-sm font-semibold my-5 uppercase">
            Web app / Html / Scss / Material Css / Js / Firebase
          </Tag-Prime>
        </div>
      </a>
    </div>
  </main>
</template>
<script setup lang="ts"></script>
<style scoped>
.main-text {
  font-size: 17vw;
}
</style>
