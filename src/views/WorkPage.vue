<template>
  <main>
    <h1 class="main-text leading-none text-center font-extrabold text-white capitalize mb-14">
      All works
    </h1>
    <div class="grid gap-4 grid-cols-1 xl:grid-cols-2 grid-rows-1">
      <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
        <a href="https://simdep10so.vn/" v-motion-pop
          class="cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 flex items-center justify-center overflow-hidden">
          <h2 class="hover-offer capitalize text-5xl extrabold">
            View the case
          </h2>
          <div class="offer min-w-full">
            <div class="main-offer flex items-center justify-between">
              <h2 class="text-4xl font-bold capitalize">sim10so</h2>
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-2xl" />
            </div>
            <v-chip-group>
              <v-chip v-for="chipItem in sim10so" :key="chipItem">
                {{ chipItem }}
              </v-chip>
            </v-chip-group>
          </div>
        </a>
      </v-lazy>
      <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
        <a href="https://h-institution.netlify.app" v-motion-pop
          class="cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 flex items-center justify-center overflow-hidden">
          <h2 class="hover-offer capitalize text-5xl extrabold">
            View the case
          </h2>
          <div class="offer min-w-full">
            <div class="main-offer flex items-center justify-between">
              <h2 class="text-4xl font-bold capitalize">H-Institution</h2>
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-2xl" />
            </div>
            <v-chip-group>
              <v-chip v-for="chipItem in hInstitution" :key="chipItem">
                {{ chipItem }}
              </v-chip>
            </v-chip-group>
          </div>
        </a>
      </v-lazy>
      <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
        <a href="https://www.vuagac.com/" v-motion-pop
          class="cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 flex items-center justify-center overflow-hidden">
          <h2 class="hover-offer capitalize text-5xl extrabold">
            View the case
          </h2>
          <div class="offer min-w-full">
            <div class="main-offer flex items-center justify-between">
              <h2 class="text-4xl font-bold capitalize">Vuagac.com</h2>
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-2xl" />
            </div>
            <v-chip-group>
              <v-chip v-for="chipItem in vuagac" :key="chipItem">
                {{ chipItem }}
              </v-chip>
            </v-chip-group>
          </div>
        </a>
      </v-lazy>
      <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
        <a href="https://dinoland-hoach.surge.sh/" v-motion-pop
          class="cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 flex items-center justify-center overflow-hidden">
          <h2 class="hover-offer capitalize text-5xl extrabold">
            View the case
          </h2>
          <div class="offer min-w-full">
            <div class="main-offer flex items-center justify-between">
              <h2 class="text-4xl font-bold capitalize">DinoLand</h2>
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-2xl" />
            </div>
            <v-chip-group>
              <v-chip v-for="chipItem in dinoland" :key="chipItem">
                {{ chipItem }}
              </v-chip>
            </v-chip-group>
          </div>
        </a>
      </v-lazy>
      <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
        <a href="https://podcast-app-93c2f.web.app/" v-motion-pop
          class="cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 flex items-center justify-center overflow-hidden">
          <h2 class="hover-offer capitalize text-5xl extrabold">
            View the case
          </h2>
          <div class="offer min-w-full">
            <div class="main-offer flex items-center justify-between">
              <h2 class="text-4xl font-bold capitalize">Poadcast app</h2>
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-2xl" />
            </div>
            <v-chip-group>
              <v-chip v-for="chipItem in podcastApp" :key="chipItem">
                {{ chipItem }}
              </v-chip>
            </v-chip-group>
          </div>
        </a>
      </v-lazy>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";

let sim10so = ref(["Web app", "Reactjs", "Nextui", "MUI"]);
let hInstitution = ref(["Web app", "Vuejs", "Nuxt", "Tailwind Css", "Vuetify"]);
let vuagac = ref(["Web app", "Vuejs", "Nuxt", "Tailwind Css", "Daisy Ui"]);
let dinoland = ref(["Web app", "Html", "Scss", "Js"]);
let podcastApp = ref([
  "Web app",
  "Html",
  "Material css",
  "Js",
  "Scss",
  "Firebase",
]);
</script>
<style scoped>
.main-text {
  font-size: 17vw;
}
</style>
