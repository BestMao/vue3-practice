<!--
 * @Author: your name
 * @Date: 2021-08-15 20:58:29
 * @LastEditTime: 2021-08-18 20:59:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/components/nav-menu/src/nav-menu.vue
-->
<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      :default-active="defaultMeun"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <el-submenu :index="submenu.id + ''" v-for="submenu in userMenus" :key="submenu.id">
        <template #title>
          <em class="el-icon-location"></em>
          <span>{{ submenu.name }}</span>
        </template>
        <el-menu-item-group v-if="submenu.type == 1">
          <el-menu-item
            @click="changUrl(menuItem.url)"
            v-for="menuItem in submenu.children"
            :key="menuItem.id"
            :index="menuItem.id + ''"
            >{{ menuItem.name }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
// import store from '@/store/index'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'
// import defaultMenus from '@/utils/map-menus'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const stroe = useStore()
    const router = useRouter()
    const route = useRoute()
    const userMenus = computed(() => stroe.state.login.userMenus)
    const changUrl = (url: string) => {
      router.push(url)
    }
    const currentPath = route.path
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultMeun = ref(menu.id)

    return {
      userMenus,
      changUrl,
      defaultMeun
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
