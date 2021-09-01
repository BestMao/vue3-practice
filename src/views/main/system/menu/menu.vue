<!--
 * @Author: your name
 * @Date: 2021-08-16 22:44:31
 * @LastEditTime: 2021-08-31 20:23:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/main/system/menu/menu.vue
-->
<template>
  <div class="menu">
    <page-table pageName="menu" :tableConfig="tableConfig"></page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageTable from '@/components/nav-table'
import { tableConfig } from './config/tableConfig'

export default defineComponent({
  name: 'menu',
  components: { pageTable },
  setup() {
    return {
      tableConfig
    }
  }
})
</script>

<style scoped></style>
