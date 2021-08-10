/*
 * @Author: your name
 * @Date: 2021-08-01 09:56:51
 * @LastEditTime: 2021-08-09 22:16:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
