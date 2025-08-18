import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePageView from '@/views/HomePageView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePageView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
