import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import WorkExpView from "@/views/WorkExpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/workexp",
      name: "workexp",
      component: WorkExpView,
    },
  ],
});

export default router;
