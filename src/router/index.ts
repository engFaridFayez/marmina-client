import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePageView from '@/views/HomePageView.vue'
import AdminView from '@/views/adminstration/AdminView.vue'
import UserView from '@/views/adminstration/UserView.vue';
import { get as getFromStore } from '@/localStorage';
import AboutUsView from '@/views/stages/screens/AboutUsView.vue';
import ContactUsView from '@/views/stages/screens/ContactUsView.vue';
import ManahgView from '@/views/stages/screens/ManahgView.vue';
import NewsView from '@/views/stages/screens/NewsView.vue';
import AlhanTermsView from '@/views/stages/screens/AlhanTermsView.vue';
import AlhanListView from '@/views/stages/screens/AlhanListView.vue';

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
        next();
      } else {
        next({name:'home'})
      }
    },
  },
  {
    path: '/users',
    name: 'users',
    component: UserView,
    meta: { screen: 'users' },
  },
  {
    path:'/profile',
    name:'profile',
    component:UserView,
    meta:{ requiresAuth: true }
  },
  {
    path:'/about',
    name:'about',
    component:AboutUsView
  },
  {
    path:'/contact',
    name:'contact',
    component:ContactUsView,
  },
  {
    path:'/alhan',
    name:'alhan',
    component:ManahgView,
  },
  {
    path: '/alhan/:familyId',
    name: 'alhan-terms',
    component: AlhanTermsView,
    props: true
  },
  {
    path: '/alhan/:familyId/:term',
    name: 'alhan-list',
    component: AlhanListView,
    props: true
  },
  {
    path:'/news',
    name:'news',
    component:NewsView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
