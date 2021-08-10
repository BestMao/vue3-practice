/*
 * @Author: your name
 * @Date: 2021-08-10 22:32:31
 * @LastEditTime: 2021-08-10 22:39:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/utils/cache.ts
 */
class LocalCache {
  setCatche(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCatche(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCatche(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCatche() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
