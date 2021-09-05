/*
 * @Author: your name
 * @Date: 2021-08-15 15:54:12
 * @LastEditTime: 2021-09-05 16:54:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/store/tyoe.ts
 */
import { ILoginState } from './login/type'
import { ISystemState } from './main/system/type'
export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
