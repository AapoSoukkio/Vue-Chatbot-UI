import { createRouter, createWebHistory } from 'vue-router';
import ChatView from '../views/ChatView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ChatView,
  },
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;