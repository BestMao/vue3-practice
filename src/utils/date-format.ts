/*
 * @Author: your name
 * @Date: 2021-08-29 15:26:50
 * @LastEditTime: 2021-08-29 15:30:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/utils/date-format.ts
 */
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD hh:mm:ss'

export function formatUtcString(utcString: string, format: string = DATE_TIME_FORMAT) {
  return dayjs.utc(utcString).format(format)
}
