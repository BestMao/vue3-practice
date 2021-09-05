import { Module } from 'vuex'
import { IRootState } from '../type'
import { ILoginState } from './type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '@/service/login/login'
import { mapMenusToPermissions } from '@/utils/map-menus'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, paload: IAccount) {
      //获取token
      const loginResult = await accountLoginRequest({ ...paload })
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCatche('token', token)
      dispatch('getInitialDataAction', null, { root: true })
      //获取用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCatche('userInfo', userInfo)
      //获取菜单目录
      const userMenusResult = await requestUserMenusById(id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCatche('userMenus', userMenus)
      //跳转
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
