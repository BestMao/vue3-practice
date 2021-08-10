<!--
 * @Author: your name
 * @Date: 2021-08-09 22:21:38
 * @LastEditTime: 2021-08-10 22:44:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/login/config/login-panel.vue
-->
<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch="true">
      <el-tab-pane>
        <template #label> 账号登录 </template>
        <login-account :checked="checked" ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label> 手机登录 </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="remember">
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <el-link type="primary">注册账号</el-link>
    </div>
    <el-button class="login" type="primary" @click="login">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'

export default defineComponent({
  components: { loginAccount, loginPhone },
  setup() {
    const checked = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    console.log(accountRef)

    const login = () => {
      accountRef.value?.accountLogin(checked.value)
    }
    return {
      checked,
      accountRef,
      login
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  transform: translate(0px, -20%);
  .title {
    text-align: center;
  }
  .el-tabs {
    width: 320px;
  }
  .remember {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .login {
    width: 100%;
  }
}
</style>
