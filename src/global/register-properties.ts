/*
 * @Author: your name
 * @Date: 2021-08-29 15:30:29
 * @LastEditTime: 2021-08-29 15:34:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/global/register-properties.ts
 */
import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filter = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
