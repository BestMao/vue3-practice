import { createStore } from 'vuex'
import { IRootState } from './tyoe'
import login from './login/login'

export default createStore<IRootState>({
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
