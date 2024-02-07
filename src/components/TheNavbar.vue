<template>
  <v-app-bar :elevation="0" class="border-b">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        class="md:hidden"
        @click.stop="visibleBottom = !visibleBottom"
        color="white"
      >
        <font-awesome-icon icon="fa-solid fa-bars" />
      </v-app-bar-nav-icon>
    </template>
    <v-app-bar-title @click="$router.push('/')"
      >Nguyen Tien Hoach</v-app-bar-title
    >

    <template v-slot:append>
      <div class="hidden md:block">
        <v-tabs color="blue" v-model="tab" fixed-tabs>
          <v-tab
            @click="$router.push(tabItem.value)"
            v-for="tabItem in tabs"
            :key="tabItem.value"
            :value="tabItem.value"
            >{{ tabItem.text }}</v-tab
          >
        </v-tabs>
      </div>
      <v-app-bar-nav-icon href="https://blog.hoachnt.com/">
        <v-icon>mdi-post</v-icon>
        <v-tooltip activator="parent" location="bottom">My Blog</v-tooltip>
      </v-app-bar-nav-icon>
    </template>
  </v-app-bar>
  <v-navigation-drawer v-model="visibleBottom" location="bottom" temporary>
    <v-list v-model="tab">
      <v-list-subheader class="uppercase">{{ drawerHeader }}</v-list-subheader>
      <v-divider></v-divider>
      <v-list-item
        @click="$router.push(tabItem.value)"
        v-for="tabItem in tabs"
        :key="tabItem.value"
        >{{ tabItem.text }}</v-list-item
      >
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const visibleBottom = ref(false);
const tab = ref(window.location.pathname);
const tabs = ref([
  { text: "Home", value: "/" },
  { text: "Works", value: "/works" },
  { text: "About", value: "/about" },
]);
const route = useRoute();
const drawerHeader: any = ref("Nguyen Tien Hoach");

watch(
  () => route.path,
  (currentTab: string) => {
    tab.value = currentTab;
    drawerHeader.value = route.name;
  }
);
</script>
<style>
.bottom-bar {
  min-height: 300px;
}
</style>
