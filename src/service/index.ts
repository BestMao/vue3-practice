/*
 * @Author: your name
 * @Date: 2021-08-04 21:28:39
 * @LastEditTime: 2021-09-14 12:33:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/service/index.ts
 */
import { API_BASE_URL, TIME_OUT } from './request/config'
import MaoRequest from './request/index'
import localCache from '@/utils/cache'

const maoRequest = new MaoRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
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
