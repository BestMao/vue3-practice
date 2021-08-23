<!--
 * @Author: your name
 * @Date: 2021-08-15 20:51:56
 * @LastEditTime: 2021-08-18 20:30:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/components/nav-header/src/nav-header.vue
-->
<template>
  <div class="nav-header">
    <a class="fold-menu" @click="handleFoldClick"> {{ isFold ? '展开' : '收起' }}</a>
    <mao-breadcrumb :breadcrumbItem="breadcrumbItem" class="breadcrumb"></mao-breadcrumb>
    <nav-info></nav-info>
  </div>
</template>

<script lang="ts">
import navInfo from './nav-info.vue'
import MaoBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'

export default defineComponent({
  emits: ['foldChange'],
  components: { navInfo, MaoBreadcrumb },
  setup(props, { emit }) {
    const store = useStore()
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    const breadcrumbItem = computed(() => {
      const userMenus = store.state.login.userMenus
      const router = useRoute()
      return pathMapBreadcrumbs(userMenus, router.path)
    })
    return {
      isFold,
      handleFoldClick,
      breadcrumbItem
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  align-items: center;
  .breadcrumb {
    flex: 1;
    margin-left: 10px;
  }
  .fold-menu {
    font-size: 16px;
    color: skyblue;
    cursor: pointer;
  }
}
</style>
