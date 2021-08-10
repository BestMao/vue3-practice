<!--
 * @Author: your name
 * @Date: 2021-08-01 09:56:51
 * @LastEditTime: 2021-08-09 22:14:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/App.vue
-->
<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app',
  props: {
    name: {
      type: String
    }
  }
})
</script>

<style scoped lang="less">
.app {
  height: 100%;
}
</style>
