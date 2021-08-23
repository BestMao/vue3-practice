<!--
 * @Author: your name
 * @Date: 2021-08-18 19:43:37
 * @LastEditTime: 2021-08-18 19:47:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/components/nav-header/src/nav-info.vue
-->
<template>
  <div class="nav-info">{{ userName }}</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const stroe = useStore()
    const userName = computed(() => stroe.state.login.userInfo.name)
    return {
      userName
    }
  }
})
</script>

<style scoped lang="less"></style>
