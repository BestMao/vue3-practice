import { createApp } from 'vue'
import 'normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import globalRegister from './global'
import './assets/css/index.less'
import { setupStore } from './store'

const app = createApp(App)
app.use(globalRegister)
app.use(store)
app.use(router)
setupStore()
app.mount('#app')
