<!--
 * @Author: your name
 * @Date: 2021-08-16 22:44:31
 * @LastEditTime: 2021-08-16 22:45:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/main/system/user/user.vue
-->
<template>
  <div class="user">
    <hy-form v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {},
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
