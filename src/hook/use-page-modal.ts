/*
 * @Author: your name
 * @Date: 2021-09-05 09:50:24
 * @LastEditTime: 2021-09-05 17:01:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/hook/use-page-modal.ts
 */

import { ref } from 'vue'
import pageModal from '@/components/nav-modal'
type CallbackFn = (item?: any) => void

export const usePageModal = function (newCb?: CallbackFn, editCb?: CallbackFn) {
  const modalRef = ref<InstanceType<typeof pageModal>>()
  const defaultInfo = ref({})
  const handlerEdit = (row: any) => {
    defaultInfo.value = { ...row }
    editCb && editCb(row)
    modalRef.value.dialogVisible = true
  }
  const handlerAdd = () => {
    defaultInfo.value = {}
    newCb && newCb()
    modalRef.value.dialogVisible = true
  }

  return [modalRef, defaultInfo, handlerEdit, handlerAdd]
}
