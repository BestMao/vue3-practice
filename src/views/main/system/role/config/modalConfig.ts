/*
 * @Author: your name
 * @Date: 2021-09-05 09:06:13
 * @LastEditTime: 2021-09-05 16:49:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/main/system/user/config/modalConfig.ts
 */
import { IForm } from '@/base-ui/form/type'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: { width: '100%' }
}
