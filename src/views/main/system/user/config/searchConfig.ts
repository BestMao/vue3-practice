/*
 * @Author: your name
 * @Date: 2021-08-25 07:16:23
 * @LastEditTime: 2021-08-31 19:49:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/main/system/user/comfig/searchComfig.ts
 */
import { IForm } from '@/base-ui/form/type'
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入',
      rules: [{ required: true, message: '请输入', trigger: 'blur' }]
    },
    {
      field: 'cellphone',
      label: '手机号',
      type: 'input',
      placeholder: '请输入'
    },
    {
      field: 'enable',
      label: '状态',
      type: 'select',
      placeholder: '请选择',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    }
  ],
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  labelWidth: '80px'
}
