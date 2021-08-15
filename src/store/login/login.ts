import { Module } from 'vuex'
import { IRootState } from '../tyoe'
import { ILoginState } from './type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
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
      console.log(state)
    }
  },
  actions: {
    async accountLoginAction({ commit }, paload: IAccount) {
      //获取token
      const loginResult = await accountLoginRequest({ ...paload })
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCatche('token', token)
      //获取用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      //获取菜单目录
      const userMenusResult = await requestUserMenusById(id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
    }
  }
}

export default loginModule
