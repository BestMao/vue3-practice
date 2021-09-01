/*
 * @Author: your name
 * @Date: 2021-09-01 21:03:44
 * @LastEditTime: 2021-09-01 21:13:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/hook/use-permission.ts
 */
import { useStore } from '@/store'
export const usePermission = function (pageName: string, option: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  return !!permissions.find((i) => i === `system:${pageName}:${option}`)
}
