<!--
 * @Author: your name
 * @Date: 2021-08-25 21:44:54
 * @LastEditTime: 2021-09-05 10:09:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/base-ui/tabble/src/table.vue
-->
<template>
  <div class="maoTable">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column v-if="showSelectColumn" type="selection" width="55" align="center">
      </el-table-column>
      <el-table-column v-if="showIndexColumn" label="序号" type="index" width="60" align="center">
      </el-table-column>
      <el-table-column
        v-for="propItem in propList"
        show-overflow-tooltip
        :key="propItem.prop"
        v-bind="propItem"
        align="center"
      >
        <template #default="scope">
          <slot :name="propItem.slotName" :row="scope.row">
            {{ scope.row[propItem.prop] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    childrenProps: {
      type: Object,
      default: (): any => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    page: {
      type: Object,
      default: (): any => ({ currentPage: 0, pageSize: 10 })
    }
  },
  emits: ['selectionChange', 'handleSizeChange', 'handleCurrentChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any[]) => {
      emit('selectionChange', value)
    }

    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage: currentPage - 1 })
    }

    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }

    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
