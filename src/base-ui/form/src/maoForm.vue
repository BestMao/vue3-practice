<!--
 * @Author: your name
 * @Date: 2021-08-24 07:09:19
 * @LastEditTime: 2021-08-25 07:07:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/base-ui/form/src/maoForm.vue
-->
<template>
  <div class="maoForm">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :inline="true" class="demo-form-inline" :label-width="labelWidth">
      <el-row>
        <el-col v-bind="colLayout" v-for="item in formItems" :key="item.label">
          <el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                v-model="formData[`${item.field}`]"
                :show-password="item.type === 'password'"
                :placeholder="item.placeholder"
              ></el-input>
            </template>
            <template v-if="item.type === 'select'">
              <el-select :placeholder="item.label" v-model="formData[`${item.field}`]">
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
                v-model="formData[`${item.field}`]"
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
import { defineComponent, ref, watch, PropType } from 'vue'
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
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )

    return {
      formData
    }
  }
})
</script>

<style scoped lang="less"></style>
