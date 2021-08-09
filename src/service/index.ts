import { BASE_URL, TIME_OUT } from './request/config'
import MaoRequest from './request/index'

const maoRequest = new MaoRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = 'token'
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功拦截')
      return res
    },
    responseIntercetorCatch: (err) => {
      console.log('响应失败拦截')
      return err
    }
  }
})
export default maoRequest
