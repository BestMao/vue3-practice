/*
 * @Author: your name
 * @Date: 2021-08-04 21:30:30
 * @LastEditTime: 2021-08-04 22:39:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/service/request/type.ts
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MaoRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseIntercetorCatch?: (err: any) => any
}

export interface MaoRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MaoRequestInterceptor<T>
  showLoading?: boolean
}
