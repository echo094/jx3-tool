import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page-skill',
    name: 'PageSkill',
    component: () => import('../views/PageSkill.vue')
  },
  {
    path: '/page-cps',
    name: 'PageCPS',
    component: () => import('../views/PageCPS.vue')
  },
  {
    path: '/page-teamlist',
    name: 'PageTeamlist',
    component: () => import('../views/PageTeamlist.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
