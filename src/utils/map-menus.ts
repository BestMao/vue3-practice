/*
 * @Author: your name
 * @Date: 2021-08-16 22:29:56
 * @LastEditTime: 2021-09-05 17:04:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/utils/map-menus.ts
 */
import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb/type'

let firstMenu: any = null

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
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routers
}

export const pathMapBreadcrumbs = function (userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapBreadcrumbs(menu.children, currentPath)
      if (findMenu) {
        breadcrumbs.push({ name: menu.name })
        breadcrumbs.push({ name: findMenu.name })
        return breadcrumbs
      }
    } else {
      if (menu.type === 2 && menu.url === currentPath) {
        return menu
      }
    }
  }
}

export const pathMapToMenu = function (userMenus: any[], currentPath: string): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else {
      if (menu.type === 2 && menu.url === currentPath) {
        return menu
      }
    }
  }
}

export const mapMenusToPermissions = function (userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}

export function menuMapLeafKeys(menuList: any[]) {
  const leftKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)

  return leftKeys
}

export { firstMenu }
