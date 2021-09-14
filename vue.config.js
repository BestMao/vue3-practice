/*
 * @Author: your name
 * @Date: 2021-08-02 07:09:00
 * @LastEditTime: 2021-09-14 12:37:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/vue.config.js
 */
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:4000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}
