/*
 * @Author: your name
 * @Date: 2021-08-15 15:54:12
 * @LastEditTime: 2021-08-15 21:07:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/store/tyoe.ts
 */
import { ILoginState } from './login/type'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
