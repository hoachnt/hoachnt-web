<template>
  <main>
    <h1
      class="main-text leading-none text-center font-extrabold text-white capitalize mb-14"
    >
      About me
    </h1>
    <div class="grid gap-4">
      <div class="grid gap-4 grid-cols-1 xl:grid-cols-3">
        <div
          v-motion-pop
          class="me p-ripple col-span-3 xl:col-span-2 cursor-pointer offer-block h-72 rounded-3xl p-8 flex items-center justify-center overflow-hidden"
        ></div>
        <div
          v-motion-pop
          class="p-ripple cursor-pointer col-span-3 xl:col-span-1 offer-block bg-black h-72 rounded-3xl p-8 flex items-center justify-center overflow-hidden"
        >
          <div class="min-w-full">
            <h2 class="text-4xl font-bold">Hey, I'm Hoach 👋</h2>
            <div class="main-offer flex items-center justify-between">
              <p class="text-2xl my-5">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid gap-4 grid-cols-1 xl:grid-cols-4">
        <div
          v-motion-pop
          class="p-ripple cursor-pointer col-span-2 offer-block bg-black rounded-3xl p-8"
        >
          <div class="min-w-full">
            <h2 class="text-3xl font-extrabold">About me</h2>
            <div class="main-offer flex items-center justify-between mt-5">
              <p class="text-2xl">
                I'm a <span class="text-blue-600">Front End Developer</span> and
                focus on what people see on the site. I like to create visual
                experiences that connect with people. I enjoy working with my
                <span class="text-blue-600 capitalize"
                  >clients as partners</span
                >
                when we solve a problem they have.
              </p>
            </div>
            <div class="main-offer flex items-center justify-between mt-5">
              <p class="text-2xl">
                I have <span class="text-blue-600">3 years experience</span> in
                front-end development.
              </p>
            </div>
          </div>
        </div>
        <div
          v-motion-pop
          class="col-span-2 offer-block bg-black rounded-3xl p-8"
        >
          <div class="min-w-full" id="skills">
            <h2 class="text-3xl font-extrabold">My skills</h2>
            <div class="main-offer mt-5">
              <button
                class="capitalize rounded-full tracking-widest bg-white py-1 text-black min-w-full text-2xl mb-2"
              >
                Programming Languages
              </button>
              <div class="flex items-center justify-between flex-wrap">
                <span class="text-orange-500 text-5xl"
                  ><font-awesome-icon icon="fa-brands fa-html5" />
                </span>
                <span class="text-5xl text-blue-500">
                  <font-awesome-icon icon="fa-brands fa-css3" />
                </span>
                <span class="text-5xl text-yellow-500">
                  <font-awesome-icon icon="fa-brands fa-js" />
                </span>
              </div>
            </div>
            <div class="main-offer mt-5">
              <button
                class="capitalize rounded-full tracking-widest bg-white py-1 text-black min-w-full text-2xl mb-2"
              >
                Frameworks
              </button>
              <div class="flex items-center justify-around flex-wrap">
                <span class="text-green-500 text-5xl">
                  <font-awesome-icon icon="fa-brands fa-vuejs" />
                </span>
                <span class="text-sky-300 text-5xl">
                  <font-awesome-icon icon="fa-brands fa-react" />
                </span>
              </div>
            </div>
            <div class="main-offer mt-5">
              <button
                class="capitalize rounded-full tracking-widest bg-white py-1 text-black min-w-full text-2xl mb-2"
              >
                Tools
              </button>
              <div class="flex items-center justify-between flex-wrap">
                <span class="text-5xl text-orange-600"
                  ><font-awesome-icon icon="fa-brands fa-git-alt" />
                </span>
                <span class="text-5xl"
                  ><font-awesome-icon icon="fa-brands fa-github" />
                </span>
                <span class="text-5xl text-pink-500">
                  <font-awesome-icon icon="fa-brands fa-sass" />
                </span>
              </div>
            </div>
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
.me {
  background: url(../assets/img/me.webp) no-repeat top/cover;
}
</style>
