/*
 * @Author: your name
 * @Date: 2021-08-25 21:13:30
 * @LastEditTime: 2021-09-12 11:18:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/service/main/system/system.ts
 */
import maoRequest from '../../index'
import type { IDataType } from '@/service/type'

export const getPageListData = (url: string, queryInfo: any) => {
  return maoRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return maoRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return maoRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return maoRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
