<!--
 * @Author: your name
 * @Date: 2021-08-29 16:30:29
 * @LastEditTime: 2021-09-01 21:19:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/components/nav-table/src/table.vue
-->
<template>
  <div class="page-table">
    <mao-table :listData="dataList" v-bind="tableConfig" v-model:page="pageInfo">
      <template #header> </template>
      <template #headerHandler v-if="isCreate">
        <el-button type="primary">添加用户</el-button>
      </template>
      <template #status="scope">
        <el-button plain size="mini" :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #creatTime="scope">
        {{ $filter.formatTime(scope.row.createAt) }}
      </template>
      <template #updateTime="scope">
        {{ $filter.formatTime(scope.row.updateAt) }}
      </template>
      <template #handler>
        <div class="optionsBox">
          <el-button type="text" v-if="isUpdate">编辑</el-button>
          <el-button type="text" v-if="isDelete">删除</el-button>
        </div>
      </template>

      <template v-for="item in otherPropSlots" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </mao-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import maoTable from '@/base-ui/table'
import { usePermission } from '@/hook/use-permission'
export default defineComponent({
  components: { maoTable },
  props: {
    tableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()

    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    const getPageTable = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => getPageTable())

    getPageTable()

    const dataList = computed(() => store.getters[`system/pageListData`](props.pageName))

    const otherPropSlots = props.tableConfig?.propList.filter((item: any) => {
      if (item.slotName === 'status') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      return true
    })

    return {
      dataList,
      getPageTable,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      isQuery
    }
  }
})
</script>

<style scoped lang="less">
.page-table {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
