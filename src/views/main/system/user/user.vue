<!--
 * @Author: your name
 * @Date: 2021-08-16 22:44:31
 * @LastEditTime: 2021-08-31 20:09:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/main/system/user/user.vue
-->
<template>
  <div class="user">
    <page-search
      @queryBtnClick="queryBtnClick"
      @resetBtnClick="resetBtnClick"
      :searchFormConfig="searchFormConfig"
    ></page-search>
    <page-table
      ref="pageTableRef"
      :userList="userList"
      :tableConfig="tableConfig"
      pageName="users"
    ></page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/searchConfig'
import { tableConfig } from './config/tableConfig'
import pageSearch from '@/components/nav-search'
import pageTable from '@/components/nav-table'
import { usePageSearch } from '@/hook/use-page-search'
export default defineComponent({
  name: 'user',
  components: { pageSearch, pageTable },
  setup() {
    const [pageTableRef, queryBtnClick, resetBtnClick] = usePageSearch()
    return {
      searchFormConfig,
      tableConfig,
      queryBtnClick,
      resetBtnClick,
      pageTableRef
    }
  }
})
</script>

<style scoped></style>
