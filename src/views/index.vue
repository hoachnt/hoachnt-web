<template>
  <main>
    <h1 class="main-text text-center font-extrabold text-black">
      Frontend Developer
    </h1>
    <div class="grid gap-4 grid-cols-1 xl:grid-cols-2 grid-rows-2">
      <div
        v-ripple
        v-motion-pop
        @click="$router.push('/about')"
        class="p-ripple cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 flex items-center justify-center overflow-hidden"
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
        v-ripple
        v-motion-pop
        class="p-ripple cursor-pointer offer-block hidden md:block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out py-14 px-8 overflow-hidden"
      >
        <span class="uppercase font-semibold text-sm">What i do</span>
        <div class="flex justify-between mt-6">
          <div class="text-center">
            <h2 class="text-2xl font-bold">Analytics</h2>
            <font-awesome-icon
              icon="fa-solid fa-database"
              class="text-6xl mt-6"
            />
          </div>
          <div class="text-center">
            <h2 class="text-2xl font-bold">Web Development</h2>
            <font-awesome-icon icon="fa-solid fa-code" class="text-6xl mt-6" />
          </div>
          <div class="text-center">
            <h2 class="text-2xl font-bold">Automation</h2>
            <font-awesome-icon icon="fa-solid fa-play" class="text-6xl mt-6" />
          </div>
        </div>
      </div>
      <div
        class="h-72 rounded-3xl grid gap-4 grid-cols-1 md:grid-cols-2 grid-row-2"
      >
        <div
          v-ripple
          v-motion-pop
          @click="$router.push('/work')"
          class="p-ripple cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 overflow-hidden flex items-center"
        >
          <h2 class="hover-offer text-4xl font-bold capitalize">
            View all My Works
          </h2>
          <div class="offer min-w-full">
            <font-awesome-icon
              icon="fa-solid fa-layer-group"
              class="text-6xl mb-8"
            />
            <div class="flex items-center justify-between min-w-full">
              <h2 class="capitalize text-3xl font-bold">See my work</h2>
              <font-awesome-icon
                icon="fa-solid fa-arrow-right"
                class="text-2xl"
              />
            </div>
          </div>
        </div>
        <a
          v-ripple
          v-motion-pop
          href="https://github.com/hoach-linux"
          class="p-ripple cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 overflow-hidden flex items-center justify-center flex-col"
        >
          <font-awesome-icon
            icon="fa-brands fa-github"
            class="github-icon text-6xl"
          />
          <div
            class="hover-offer h-0 flex items-center justify-between min-w-full text-center"
          >
            <h2 class="capitalize text-3xl font-bold">Let's connect</h2>
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="text-2xl"
            />
          </div>
        </a>
      </div>
      <a
        v-ripple
        v-motion-pop
        href="https://github.com/hoach-linux"
        class="p-ripple cursor-pointer offer-block md:hidden bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 overflow-hidden flex items-center justify-center flex-col"
      >
        <font-awesome-icon
          icon="fa-brands fa-github"
          class="github-icon text-6xl"
        />
        <div
          class="hover-offer h-0 flex items-center justify-between min-w-full text-center"
        >
          <h2 class="capitalize text-3xl font-bold">Let's connect</h2>
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-2xl" />
        </div>
      </a>
      <div
        v-ripple
        v-motion-pop
        class="p-ripple cursor-pointer offer-block bg-black h-72 rounded-3xl hover:bg-blue-600 transition duration-700 ease-in-out p-8 overflow-hidden"
      >
        <h2 class="text-3xl font-bold capitalize mb-16">My skills</h2>
        <ul class="flex justify-between">
          <li class="hover:scale-125 transition duration-300 ease">
            <font-awesome-icon icon="fa-brands fa-js" class="text-6xl" />
          </li>
          <li class="hover:scale-125 transition duration-300 ease">
            <font-awesome-icon icon="fa-brands fa-vuejs" class="text-6xl" />
          </li>
          <li class="hover:scale-125 transition duration-300 ease">
            <font-awesome-icon icon="fa-brands fa-css3" class="text-6xl" />
          </li>
          <li class="hover:scale-125 transition duration-300 ease">
            <font-awesome-icon icon="fa-brands fa-html5" class="text-6xl" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts"></script>
<style>
.main-text {
  font-size: 8.45vw;
}
.offer-block {
  transition: 0.7s cubic-bezier(0.3, -0.01, 0, 0.98);
}
.github-icon {
  transition: 0.7s cubic-bezier(0.3, -0.01, 0, 0.98);
}
.hover-offer {
  opacity: 0;
  max-width: 0;
  transform: translateY(50%);
  transition: 0.5s cubic-bezier(0.3, -0.01, 0, 0.98);
}
.offer-block:hover > .hover-offer {
  opacity: 1;
  max-width: auto;
  transform: translateY(0);
  transition: 0.7s cubic-bezier(0.3, -0.01, 0, 0.98);
}
.offer-block:hover > .github-icon {
  margin-bottom: 30px;
  transition: 0.7s cubic-bezier(0.3, -0.01, 0, 0.98);
}
.offer {
  transition: 0.5s cubic-bezier(0.3, -0.01, 0, 0.98);
}
.offer-block:hover > .offer {
  opacity: 0;
  transform: translateY(-50%);
  transition: 0.5s cubic-bezier(0.3, -0.01, 0, 0.98);
}
@media screen and (max-width: 560px) {
  .main-text {
    font-size: 40px;
    margin-bottom: 20px;
  }
}
</style>
