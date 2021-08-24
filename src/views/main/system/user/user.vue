<!--
 * @Author: your name
 * @Date: 2021-08-16 22:44:31
 * @LastEditTime: 2021-08-25 07:20:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/main/system/user/user.vue
-->
<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './comfig/searchConfig'
import pageSearch from '@/components/nav-search'
export default defineComponent({
  name: 'user',
  components: { pageSearch },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
