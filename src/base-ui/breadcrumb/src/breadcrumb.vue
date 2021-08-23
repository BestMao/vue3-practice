<!--
 * @Author: your name
 * @Date: 2021-08-18 19:48:40
 * @LastEditTime: 2021-08-18 20:29:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/base-ui/breadcrumb/src/breadcrumb.vue
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumbItem" :key="item.name" :to="{ path: item.path }">{{
      item.name
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '../type'

export default defineComponent({
  props: {
    breadcrumbItem: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
