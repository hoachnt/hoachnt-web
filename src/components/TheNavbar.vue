<template>
  <div class="min-w-full bg-white py-5 lg:py-8 sticky top-0 z-50">
    <div
      class="max-w-screen-2xl flex lg:justify-between m-auto justify-end px-4 xl:px-24"
    >
      <div
        class="p-ripple cursor-pointer hidden lg:block"
        @click="$router.push('/')"
        v-ripple
      >
        <h1 class="text-3xl font-bold text-blue-600">Nguyen Tien Hoach</h1>
      </div>
      <Sidebar-Prime
        v-model:visible="visibleBottom"
        :baseZIndex="10000"
        class="bottom-bar rounded-t-3xl"
        position="bottom"
      >
        <ul class="text-black grid grid-cols-1 content-around min-h-full">
          <li
            v-ripple
            @click="$router.push('/')"
            class="p-ripple text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            Nguyen Tien Hoach
          </li>
          <li
            v-ripple
            @click="$router.push('/work')"
            class="p-ripple text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            Works
          </li>
          <li
            v-ripple
            @click="$router.push('/about')"
            class="p-ripple text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            About
          </li>
          <li
            v-ripple
            class="p-ripple text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            Resume
          </li>
        </ul>
      </Sidebar-Prime>
      <ul class="text-black hidden lg:flex">
        <li
          v-ripple
          @click="$router.push('/work')"
          class="p-ripple text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
        >
          Works
        </li>
        <li
          v-ripple
          @click="$router.push('/about')"
          class="p-ripple text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
        >
          About
        </li>
        <li
          v-ripple
          class="p-ripple text-3xl ml-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
        >
          Resume
        </li>
      </ul>
      <font-awesome-icon
        @click="visibleBottom = true"
        icon="fa-solid fa-bars"
        class="text-black text-3xl lg:hidden cursor-pointer"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const visibleBottom = ref(false);
</script>
<style>
.bottom-bar {
  min-height: 300px;
}
</style>
