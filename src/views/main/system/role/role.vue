<!--
 * @Author: your name
 * @Date: 2021-08-16 22:44:31
 * @LastEditTime: 2021-09-05 17:12:26
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
      @handlerAdd="handlerAdd"
      @handlerEdit="handlerEdit"
      pageName="role"
    ></page-table>
    <page-modal
      ref="modalRef"
      pageName="role"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :modalConfig="modalConfig"
    >
      <el-tree
        ref="treeRef"
        :data="menus"
        show-checkbox
        node-key="id"
        :props="{
          children: 'children',
          label: 'name'
        }"
        @check="handleCheckChange"
      >
      </el-tree>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { ElTree } from 'element-plus'
import { useStore } from '@/store'
import { menuMapLeafKeys } from '@/utils/map-menus'

import { searchFormConfig } from './config/searchConfig'
import { tableConfig } from './config/tableConfig'
import { modalConfig } from './config/modalConfig'

import pageSearch from '@/components/nav-search'
import pageTable from '@/components/nav-table'
import pageModal from '@/components/nav-modal'

import { usePageSearch } from '@/hook/use-page-search'
import { usePageModal } from '@/hook/use-page-modal'
export default defineComponent({
  name: 'role',
  components: { pageSearch, pageTable, pageModal },
  setup() {
    const store = useStore()

    const menus = computed(() => store.state.entireMenu)

    const [pageTableRef, queryBtnClick, resetBtnClick] = usePageSearch()

    const treeRef = ref<InstanceType<typeof ElTree>>()

    const editCallback = (row: any) => {
      const leafKeys = menuMapLeafKeys(row.menuList)
      nextTick(() => {
        console.log(treeRef.value)
        treeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    const [modalRef, defaultInfo, handlerEdit, handlerAdd] = usePageModal(undefined, editCallback)

    return {
      searchFormConfig,
      tableConfig,
      queryBtnClick,
      resetBtnClick,
      pageTableRef,
      modalRef,
      defaultInfo,
      handlerEdit,
      handlerAdd,
      modalConfig,
      menus,
      treeRef,
      handleCheckChange,
      otherInfo
    }
  }
})
</script>

<style scoped></style>
