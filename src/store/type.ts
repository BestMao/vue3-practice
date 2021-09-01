/*
 * @Author: your name
 * @Date: 2021-08-15 15:54:12
 * @LastEditTime: 2021-08-25 21:28:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/store/tyoe.ts
 */
import { ILoginState } from './login/type'
import { ISystemState } from './main/system/type'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
