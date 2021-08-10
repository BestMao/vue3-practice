<!--
 * @Author: your name
 * @Date: 2021-08-09 22:45:31
 * @LastEditTime: 2021-08-09 23:20:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/login/cnps/login-account.vue
-->
<template>
  <div class="login-phone">
    <el-form
      :model="account"
      :rules="rules"
      ref="ruleForm"
      label-width="70px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verify">
        <div class="verify">
          <el-input v-model="account.verify"></el-input>
          <el-button type="primary"> 获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      verify: ''
    })

    return {
      account,
      rules
    }
  }
})
</script>

<style scoped lang="less">
.login-phone {
  .verify {
    display: flex;
    .el-input {
      margin-right: 20px;
    }
  }
}
</style>
