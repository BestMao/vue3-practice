<!--
 * @Author: your name
 * @Date: 2021-09-12 11:49:14
 * @LastEditTime: 2021-09-12 12:03:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/base-ui/echart/src/base-echart.vue
-->
<template>
  <div class="base-echart">
    <div ref="echartRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults, defineProps, onMounted, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '../hook/useEchat'

const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartRef = ref<HTMLElement>()

onMounted(() => {
  const { setOptions } = useEchart(echartRef.value!)

  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped lang="less"></style>
