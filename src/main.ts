import { createApp } from "vue";
import "./assets/css/tailwind.css";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "@/views/HomeView.vue"
import About from "@/views/AboutView.vue"
import Modal from "@/views/ModalsView.vue"
import Post from "@/views/PostView.vue"
import List from "@/views/ListView.vue"
import PostDetails from "@/views/PostDetailView.vue"
import AdvancedTailwind from "@/views/AdvancedTailwindView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/list",
      name: "list",
      component: List,
    },
    {
      path: "/advancedtailwind",
      name: "advancedTailwind",
      component: AdvancedTailwind,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/modals",
      name: "modals",
      component: Modal,
    },
    {
      path: "/posts",
      name: "posts",
      component: Post,
    },
    {
      path: "/postsDetails/:id",
      name: "postsDetails",
      component: PostDetails,
    },
  ],
});

createApp(App).use(router).mount("#app");
