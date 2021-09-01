/*
 * @Author: your name
 * @Date: 2021-08-25 21:13:30
 * @LastEditTime: 2021-08-25 21:22:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/service/main/system/system.ts
 */
import maoRequest from '../../index'
import { IDataType } from '@/service/type'

export const getPageListData = (url: string, queryInfo: any) => {
  return maoRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
