import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/index.vue";
import Work from "@/views/work.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/",
      name: "work",
      component: Work,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/about.vue"),
    },
  ],
});

export default router;
