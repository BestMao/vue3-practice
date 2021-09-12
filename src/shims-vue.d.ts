/*
 * @Author: your name
 * @Date: 2021-08-01 09:56:51
 * @LastEditTime: 2021-09-12 11:59:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/shims-vue.d.ts
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare let $store: any
declare module '*.json'
