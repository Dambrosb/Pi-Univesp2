import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'abc',
    template: '<h1>Teste</h1>',
  },
  {
    path: '/dash',
    name: 'dashboard',
    component: DashboardView
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router