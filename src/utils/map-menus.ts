/*
 * @Author: your name
 * @Date: 2021-08-16 22:29:56
 * @LastEditTime: 2021-08-16 22:54:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/utils/map-menus.ts
 */
import { RouteRecordRaw } from 'vue-router'
import router from '@/router'

export const mapMenusToRoutes = function (userMenus: any[]): RouteRecordRaw[] {
  const routers: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  const routerFiles = require.context('../router/main', true, /\.ts/)
  routerFiles.keys().forEach((key) => {
    const router = require('../router/main' + key.split('.')[1])
    allRoutes.push(router.default)
  })
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type == 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routers.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routers
}
