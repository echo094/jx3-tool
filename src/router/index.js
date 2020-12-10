import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page-cps',
    name: 'PageCPS',
    component: () => import('../views/PageCPS.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
