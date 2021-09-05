<!--
 * @Author: your name
 * @Date: 2021-08-16 22:44:31
 * @LastEditTime: 2021-09-05 10:30:50
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
      pageName="users"
    ></page-table>
    <page-modal
      ref="modalRef"
      pageName="users"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store/index'

import { searchFormConfig } from './config/searchConfig'
import { tableConfig } from './config/tableConfig'
import { modalConfig } from './config/modalConfig'

import pageSearch from '@/components/nav-search'
import pageTable from '@/components/nav-table'
import pageModal from '@/components/nav-modal'

import { usePageSearch } from '@/hook/use-page-search'
import { usePageModal } from '@/hook/use-page-modal'
export default defineComponent({
  name: 'user',
  components: { pageSearch, pageTable, pageModal },
  setup() {
    const [pageTableRef, queryBtnClick, resetBtnClick] = usePageSearch()

    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      if (passwordItem) {
        passwordItem.isHidden = false
      }
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      if (passwordItem) {
        passwordItem.isHidden = true
      }
    }
    const [modalRef, defaultInfo, handlerEdit, handlerAdd] = usePageModal(newCallback, editCallback)

    // 2.动态添加部门和角色列表
    const store = useStore()
    const modalConfigRef: any = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })
      const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })
      return modalConfig
    })

    return {
      searchFormConfig,
      tableConfig,
      modalConfigRef,
      queryBtnClick,
      resetBtnClick,
      pageTableRef,
      modalRef,
      defaultInfo,
      handlerEdit,
      handlerAdd
    }
  }
})
</script>

<style scoped></style>
