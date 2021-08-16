<!--
 * @Author: your name
 * @Date: 2021-08-15 20:51:56
 * @LastEditTime: 2021-08-15 20:52:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/components/nav-header/src/nav-header.vue
-->
<template>
  <div class="nav-header">
    <em
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></em>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
