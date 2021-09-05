<!--
 * @Author: your name
 * @Date: 2021-09-05 09:38:23
 * @LastEditTime: 2021-09-05 17:13:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/components/nav-modal/scr/page-modal.vue
-->
<template>
  <div class="page-modal">
    <el-dialog title="提示" v-model="dialogVisible" width="30%" destroy-on-close center>
      <mao-Form v-bind="modalConfig" v-model="formData"></mao-Form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from '@/store'
import maoForm from '@/base-ui/form'

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object
    }
  },
  components: { maoForm },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newVal: any) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newVal[`${item.field}`]
        }
      }
    )

    // 点击确定按钮的逻辑
    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        console.log('编辑用户')
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo?.id
        })
      } else {
        // 新建
        console.log('新建用户')
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }
    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped lang="less"></style>
