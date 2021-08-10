/*
 * @Author: your name
 * @Date: 2021-08-09 23:03:57
 * @LastEditTime: 2021-08-09 23:21:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/login/config/account-config.ts
 */
export const rules = {
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { pattern: /^[a-z0-9]{5,10}$/, message: '账号必须是5～10字母或者数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '密码必须是3位数以上的数组或字母', trigger: 'blur' }
  ],
  verify: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^[a-z0-9]{4,4}$/, message: '验证码必须是4位数的数组或字母', trigger: 'blur' }
  ]
}
