import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/IndexPage.vue";
import Work from "@/views/WorkPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Nguyen Tien Hoach",
      },
    },
    {
      path: "/work",
      name: "work",
      component: Work,
      meta: {
        title: "Work | Nguyen Tien Hoach",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutPage.vue"),
      meta: {
        title: "About | Nguyen Tien Hoach",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
