import { createRouter, createWebHistory } from 'vue-router';
import about from './components/about.vue'; // Updated path

const routes = [
 
  {
    path: '/about',
    name: 'About',
    component: about,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;