import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/teste',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
