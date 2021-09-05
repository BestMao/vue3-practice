/*
 * @Author: your name
 * @Date: 2021-08-29 16:23:43
 * @LastEditTime: 2021-09-05 16:47:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/main/system/user/comfig/tableConfig.ts
 */

export const tableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
