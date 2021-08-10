import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MaoRequestConfig, MaoRequestInterceptor } from './type'

import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const SHOW_LOADING = true
class MaoRequest {
  intance: AxiosInstance
  interceptor?: MaoRequestInterceptor
  showLoading: boolean
  loading?: ILoadingInstance

  constructor(config: MaoRequestConfig) {
    this.intance = axios.create(config)
    this.interceptor = config.interceptors
    this.showLoading = config.showLoading ?? SHOW_LOADING

    //实例化拦截器
    this.intance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorCatch
    )

    this.intance.interceptors.response.use(
      this.interceptor?.responseInterceptor,
      this.interceptor?.responseIntercetorCatch
    )

    //所有拦截器
    this.intance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有请求拦截失败')
        return err
      }
    )

    this.intance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  request<T>(config: MaoRequestConfig<T>): Promise<T> {
    return new Promise((reslove, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = false
      }

      this.intance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          this.showLoading = SHOW_LOADING
          reslove(res)
        })
        .catch((err) => {
          this.showLoading = SHOW_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: MaoRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: MaoRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: MaoRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: MaoRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default MaoRequest
