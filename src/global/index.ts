/*
 * @Author: your name
 * @Date: 2021-08-03 21:53:08
 * @LastEditTime: 2021-08-29 15:36:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/global/index.ts
 */
import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'

export default function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(registerProperties)
}
