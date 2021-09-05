<!--
 * @Author: your name
 * @Date: 2021-08-24 07:09:19
 * @LastEditTime: 2021-09-05 09:36:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/base-ui/form/src/maoForm.vue
-->
<template>
  <div class="maoForm">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :inline="true" :label-width="labelWidth">
      <el-row>
        <el-col v-bind="colLayout" v-for="item in formItems" :key="item.label">
          <el-form-item
            :label="item.label"
            :rules="item.rules"
            :style="itemStyle"
            v-if="!item.isHidden"
          >
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :model-value="modelValue[`${item.field}`]"
                :show-password="item.type === 'password'"
                :placeholder="item.placeholder"
                @update:modelValue="handleValueChange($event, item.field)"
              ></el-input>
            </template>
            <template v-if="item.type === 'select'">
              <el-select
                style="width: 100%"
                :placeholder="item.label"
                @update:modelValue="handleValueChange($event, item.field)"
                :model-value="modelValue[`${item.field}`]"
              >
                <el-option
                  v-for="selectItem in item.options"
                  :key="selectItem.value"
                  :label="selectItem.title"
                  :value="selectItem.value"
                ></el-option>
              </el-select>
            </template>
            <template v-if="item.type === 'datepicker'">
              <el-date-picker
                :model-value="modelValue[`${item.field}`]"
                @update:modelValue="handleValueChange($event, item.field)"
                style="width: 100%"
                :type="item.otherOptions.type"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../type'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: (): IFormItem[] => []
    },
    labelWidth: {
      type: String
    },
    itemStyle: {
      type: Object,
      default: (): any => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: (): any => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // const formData = ref({ ...props.modelValue })
    // watch(
    //   formData,
    //   (newValue) => {
    //     emit('update:modelValue', newValue)
    //   },
    //   {
    //     deep: true
    //   }
    // )
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return {
      handleValueChange
    }
  }
})
</script>

<style scoped lang="less">
.maoForm {
  padding-top: 22px;
}
</style>
