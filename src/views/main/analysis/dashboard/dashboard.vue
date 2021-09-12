<!--
 * @Author: your name
 * @Date: 2021-08-16 22:44:17
 * @LastEditTime: 2021-09-12 12:11:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/main/analysis/dashboard/dashboard.vue
-->
<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <mao-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </mao-card>
      </el-col>
      <el-col :span="10">
        <mao-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </mao-card>
      </el-col>
      <el-col :span="7">
        <mao-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </mao-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <mao-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </mao-card>
      </el-col>
      <el-col :span="12">
        <mao-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </mao-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import MaoCard from '@/components/nva-card'
import { PieEchart, RoseEchart, LineEchart, BarEchart, MapEchart } from '@/components/nav-echarts'
import { useStore } from '@/store'

export default defineComponent({
  name: 'dashboard',
  components: {
    MaoCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    // 获取数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
