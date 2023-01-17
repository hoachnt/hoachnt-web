<template>
  <div class="min-w-full bg-white py-5 lg:py-8 sticky top-0">
    <div class="max-w-screen-2xl flex lg:justify-between m-auto justify-end">
      <div class="cursor-pointer hidden lg:block" @click="$router.push('/')">
        <h1 class="text-3xl font-bold text-blue-500">Nguyen Tien Hoach</h1>
      </div>
      <Sidebar-Prime
        v-model:visible="visibleBottom"
        :baseZIndex="10000"
        class="bottom-bar rounded-t-3xl"
        position="bottom"
      >
        <ul class="text-black grid grid-cols-1 content-around min-h-full">
          <li
            @click="$router.push('/')"
            class="text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            Nguyen Tien Hoach
          </li>
          <li
            @click="$router.push('/work')"
            class="text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            Works
          </li>
          <li
            @click="$router.push('/about')"
            class="text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            About
          </li>
          <li
            class="text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            Resume
          </li>
        </ul>
      </Sidebar-Prime>
      <ul class="text-black hidden lg:flex">
        <li
          @click="$router.push('/work')"
          class="text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
        >
          Works
        </li>
        <li
          @click="$router.push('/about')"
          class="text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
        >
          About
        </li>
        <li
          class="text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
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
