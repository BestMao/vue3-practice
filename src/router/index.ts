/*
 * @Author: your name
 * @Date: 2021-08-01 09:56:51
 * @LastEditTime: 2021-08-18 21:14:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '@/views/main/main.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  if (to.path === '/main') {
    return firstMenu.url
  }
})
export default router
