/*
 * @Author: your name
 * @Date: 2021-08-01 09:56:51
 * @LastEditTime: 2021-08-18 21:10:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/main.ts
 */
import { createApp } from 'vue'
import 'normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import globalRegister from './global'
import './assets/css/index.less'
import { setupStore } from './store'

const app = createApp(App)
setupStore()
app.use(globalRegister)
app.use(store)
app.use(router)
app.mount('#app')
