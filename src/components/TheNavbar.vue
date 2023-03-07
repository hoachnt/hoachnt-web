<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="md:hidden" @click.stop="visibleBottom = !visibleBottom">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </v-app-bar-nav-icon>
    </template>
    <v-app-bar-title @click="$router.push('/')">Nguyen Tien Hoach</v-app-bar-title>
    <template v-slot:append>
      <div class="hidden md:block">
        <v-btn @click="$router.push('/')">Home</v-btn>
        <v-btn @click="$router.push('/work')">Works</v-btn>
        <v-btn @click="$router.push('/about')">About</v-btn>
        <v-btn @click="download">Resume</v-btn>
      </div>
    </template>
  </v-app-bar>
  <v-navigation-drawer v-model="visibleBottom" location="bottom" temporary>
    <v-list>
      <v-list-item @click="$router.push('/')">Home</v-list-item>
      <v-list-item @click="$router.push('/work')">Works</v-list-item>
      <v-list-item @click="$router.push('/about')">About</v-list-item>
      <v-list-item @click="download">Resume</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

const visibleBottom = ref(false);

const download = async () => {
  let response = await axios({
    url: "https://directus.hoach.skryonline.com/assets/8eab6914-528f-4384-95ae-370561da3158",
    method: "GET",
    responseType: "blob",
  });
  let fileURL = window.URL.createObjectURL(new Blob([response.data]));
  let fileLink = document.createElement("a");

  fileLink.href = fileURL;
  fileLink.setAttribute("download", "Nguyen-Tien-Hoach_Resume.pdf");
  document.body.appendChild(fileLink);

  fileLink.click();
};
</script>
<style>
.bottom-bar {
  min-height: 300px;
}
</style>
