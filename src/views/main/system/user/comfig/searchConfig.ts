/*
 * @Author: your name
 * @Date: 2021-08-25 07:16:23
 * @LastEditTime: 2021-08-25 07:16:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/main/system/user/comfig/searchComfig.ts
 */
import { IForm } from '@/base-ui/form/type'
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'account',
      label: '账号',
      type: 'input',
      placeholder: '请输入',
      rules: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
    },
    {
      field: 'password',
      label: '密码',
      type: 'password',
      placeholder: '请输入'
    },
    {
      field: 'department',
      label: '部门',
      type: 'select',
      placeholder: '请选择',
      options: [
        { title: '研发部门', value: '研发部门' },
        { title: '财务部门', value: '财务部门' },
        { title: '人力部门', value: '人力部门' }
      ]
    },
    {
      field: 'time',
      label: '入职时间',
      type: 'datepicker',
      placeholder: '请选择',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  labelWidth: '100px'
}
