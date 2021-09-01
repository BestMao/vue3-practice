<!--
 * @Author: your name
 * @Date: 2021-08-25 07:09:50
 * @LastEditTime: 2021-08-31 12:39:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/components/nav-search/src/search.vue
-->
<template>
  <div class="page-search">
    <mao-form v-model="formData" v-bind="searchFormConfig">
      <template #header>
        <div class="header">高级检索</div>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button type="primary" @click="handleQueryClick">搜索</el-button>
        </div>
      </template>
    </mao-form>
  </div>
</template>

<script lang="ts">
import maoForm from '@/base-ui/form'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['queryBtnClick', 'resetBtnClick'],
  props: {
    searchFormConfig: {
      type: Object,
      require: true
    }
  },
  components: { maoForm },
  setup(props, { emit }) {
    let formDataOrigin: any = {}
    props.searchFormConfig?.formItems.forEach((i: any) => {
      formDataOrigin[i.field] = ''
    })

    const formData = ref(formDataOrigin)
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    const handleResetClick = () => {
      formData.value = formDataOrigin
      emit('resetBtnClick')
    }

    return {
      formData,
      handleQueryClick,
      handleResetClick
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
