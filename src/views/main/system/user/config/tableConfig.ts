/*
 * @Author: your name
 * @Date: 2021-08-29 16:23:43
 * @LastEditTime: 2021-09-01 21:19:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/main/system/user/comfig/tableConfig.ts
 */

export const tableConfig = {
  propList: [
    {
      label: '姓名',
      prop: 'name',
      minwidth: '180'
    },
    {
      label: '手机',
      prop: 'cellphone',
      minwidth: '180'
    },
    {
      label: '状态',
      prop: 'enable',
      minwidth: '180',
      slotName: 'status'
    },

    {
      label: '创建时间',
      prop: 'createAt',
      minwidth: '250',
      slotName: 'creatTime'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      minwidth: '250',
      slotName: 'updateTime'
    },
    { label: '操作', minWidth: '50', slotName: 'handler' }
  ],
  showSelectColumn: true,
  showIndexColumn: true,
  title: '用户管理'
}
