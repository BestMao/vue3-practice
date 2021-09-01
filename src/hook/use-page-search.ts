/*
 * @Author: your name
 * @Date: 2021-08-31 20:03:43
 * @LastEditTime: 2021-08-31 20:05:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/hook/use-page-search.ts
 */
import { ref } from 'vue'
import pageTable from '@/components/nav-table'

export function usePageSearch() {
  const pageTableRef = ref<InstanceType<typeof pageTable>>()

  const queryBtnClick = (formData: any) => {
    pageTableRef.value?.getPageTable(formData)
  }

  const resetBtnClick = () => {
    pageTableRef.value?.getPageTable()
  }
  return [pageTableRef, queryBtnClick, resetBtnClick]
}
