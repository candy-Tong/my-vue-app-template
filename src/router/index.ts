import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [{ path: '/', component: () => import('../pages/HelloWorld.vue') }];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
