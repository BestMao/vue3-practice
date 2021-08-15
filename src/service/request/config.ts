/*
 * @Author: your name
 * @Date: 2021-08-04 21:30:23
 * @LastEditTime: 2021-08-15 16:25:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/service/request/config.ts
 */
let BASE_URL = ''
const TIME_OUT = 1000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://maoPro'
} else {
  BASE_URL = 'http://maoTest'
}

export { BASE_URL, TIME_OUT }
