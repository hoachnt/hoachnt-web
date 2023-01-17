<template>
  <div class="min-w-full bg-white py-8 sticky top-0">
    <div class="max-w-screen-2xl flex justify-between m-auto">
      <div class="cursor-pointer" @click="$router.push('/')">
        <h1 class="text-3xl font-bold text-blue-500">Nguyen Tien Hoach</h1>
      </div>
      <ul class="flex text-black">
        <li
          @click="$router.push('/works')"
          class="text-3xl mx-4 font-bold hover:text-blue-600 transition duration-300 cursor-pointer"
        >
          Works
        </li>
        <li
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
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="css"></style>
