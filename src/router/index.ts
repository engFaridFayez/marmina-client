import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePageView from '@/views/HomePageView.vue'
import AdminView from '@/views/adminstration/AdminView.vue'
import UserView from '@/views/adminstration/UserView.vue';

import { get as getFromStore } from '@/localStorage';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePageView,
  },
  {
    path: '/administration',
    name: 'administration',
    component: AdminView,
    meta: { screen: 'administration' },
    beforeEnter:(to:any,from:any,next:any) =>{
      const isAdmin = getFromStore('logged.isAdmin');
      if (isAdmin){
        next()
      }
    },
  },
  {
    path: '/users',
    name: 'users',
    component: UserView,
    meta: { screen: 'users' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
