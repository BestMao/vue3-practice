<!--
 * @Author: your name
 * @Date: 2021-08-01 09:56:51
 * @LastEditTime: 2021-08-29 16:16:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/App.vue
-->
<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  components: { ElConfigProvider },
  name: 'app',
  props: {
    name: {
      type: String
    }
  },
  setup() {
    return {
      zhCn
    }
  }
})
</script>

<style scoped lang="less">
.app {
  height: 100%;
}
</style>
