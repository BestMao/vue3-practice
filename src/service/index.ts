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
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseIntercetorCatch: (err) => {
      return err
    }
  }
})
export default maoRequest
