/*
 * @Author: your name
 * @Date: 2021-08-25 06:36:09
 * @LastEditTime: 2021-08-25 07:04:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/base-ui/form/type/index.ts
 */
type IFormType = 'input' | 'password' | 'select' | 'datepicker'
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemLayout: any
}

export interface IFormItem {
  field: string
  label: string
  type: IFormType
  rules?: any[]
  placeholder?: string
  options?: any[]
  otherOptions?: any
}
