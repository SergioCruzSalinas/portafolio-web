import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/modules/layouts/Layout.vue";
import Home from "@/modules/views/Home.vue";
import About from "@/modules/views/About.vue";
import Projects from "@/modules/views/Projects.vue";

const routes = [
  {
    path: '/',
    component: Layout,
    redirect:{name: 'home'},
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home, 
      },
      {
        path: 'about',
        name: 'about',
        component: About,
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
