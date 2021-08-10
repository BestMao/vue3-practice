/*
 * @Author: your name
 * @Date: 2021-08-03 21:55:37
 * @LastEditTime: 2021-08-09 22:47:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/global/register-element.ts
 */
import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
