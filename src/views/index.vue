<template>
  <main>
    <h1 class="main-text text-center font-extrabold text-black">
      Frontend Developer
    </h1>
    <div class="grid gap-4 grid-cols-2 grid-rows-3">
      <div
        class="offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-1000 ease-in-out p-8 flex items-center justify-center overflow-hidden"
      >
        <h2 class="hover-offer uppercase text-5xl extrabold">
          Learn more about me
        </h2>
        <div class="offer min-w-full">
          <h2 class="text-4xl font-bold">Hey, I'm Hoach 👋</h2>
          <div class="main-offer flex items-center justify-between">
            <p class="text-2xl my-5">"Frontend isn't just about coding"</p>
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="text-2xl"
            />
          </div>
        </div>
      </div>
      <div
        class="bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-1000 ease-in-out"
      ></div>
      <div class="h-72 rounded-3xl grid gap-4 grid-cols-2 grid-row-1">
        <div
          class="bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-300 ease"
        ></div>
        <div
          class="bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-300 ease"
        ></div>
      </div>
      <div
        class="bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-300 ease"
      ></div>
    </div>
  </main>
</template>
<script setup lang="ts"></script>
<style>
.main-text {
  font-size: 162px;
}
.offer-block {
  transition: 1s ease-in-out;
}
.hover-offer {
  opacity: 0;
  max-width: 0;
  transform: translateY(50%);
}
.offer-block:hover > .hover-offer {
  opacity: 1;
  max-width: auto;
  transform: translateY(0);
  transition: 0.7s ease-in-out;
}
.offer-block:hover > .offer {
  opacity: 0;
  transform: translateY(50%);
  transition: 0.5s ease-in-out;
}
</style>
