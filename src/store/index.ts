/*
 * @Author: your name
 * @Date: 2021-08-01 09:56:51
 * @LastEditTime: 2021-08-18 21:14:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/store/index.ts
 */
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './type'
import login from './login/login'
import { mapMenusToRoutes } from '@/utils/map-menus'
import { firstMenu } from '@/utils/map-menus'
import router from '@/router'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'mao',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  const userMenus = (store.state as any).login.userMenus
  const routes = mapMenusToRoutes(userMenus)
  routes.forEach((route) => {
    router.addRoute('main', route)
  })
}

export default store
