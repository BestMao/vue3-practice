<!--
 * @Author: your name
 * @Date: 2021-08-25 07:09:50
 * @LastEditTime: 2021-08-25 07:23:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/components/nav-search/src/search.vue
-->
<template>
  <div class="page-search">
    <mao-form v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </mao-form>
  </div>
</template>

<script lang="ts">
import maoForm from '@/base-ui/form'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      require: true
    }
  },
  components: { maoForm },
  setup() {
    const formData = ref({
      account: null,
      password: '',
      department: '',
      time: [null, null]
    })
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
