/*
 * @Author: your name
 * @Date: 2021-08-15 16:14:30
 * @LastEditTime: 2021-08-15 16:20:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/service/login/type.ts
 */
export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}
