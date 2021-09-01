<!--
 * @Author: your name
 * @Date: 2021-08-16 22:44:21
 * @LastEditTime: 2021-09-01 21:07:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/main/product/goods/goods.vue
-->
<template>
  <div class="goods">
    <page-table :tableConfig="tableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #oldPrice="scope">{{ '¥' + scope.row.oldPrice }}</template>
    </page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageTable from '@/components/nav-table'
import { tableConfig } from './config/tableConfig'

export default defineComponent({
  name: 'goods',
  components: { pageTable },
  setup() {
    return {
      tableConfig
    }
  }
})
</script>

<style scoped></style>
