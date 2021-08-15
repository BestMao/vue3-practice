/*
 * @Author: your name
 * @Date: 2021-08-15 16:16:26
 * @LastEditTime: 2021-08-15 16:19:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/service/type.ts
 */
export interface IDataType<T = any> {
  code: number
  data: T
}
