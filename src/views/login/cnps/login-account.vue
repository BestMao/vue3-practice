<!--
 * @Author: your name
 * @Date: 2021-08-09 22:45:31
 * @LastEditTime: 2021-08-16 22:09:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-practice/src/views/login/cnps/login-account.vue
-->
<template>
  <div class="login-account">
    <el-form
      :model="account"
      :rules="rules"
      ref="ruleForm"
      label-width="60px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import LocalCache from '@/utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  props: {
    checked: Boolean
  },
  setup(props) {
    const store = useStore()

    let account = reactive({
      name: '',
      password: ''
    })
    if (props.checked) {
      account.name = LocalCache.getCache('name')
      account.password = LocalCache.getCache('password')
    }

    const ruleForm = ref<InstanceType<typeof ElForm>>()
    const accountLogin = (checked: boolean) => {
      ruleForm.value?.validate((valid: any) => {
        if (valid) {
          if (checked) {
            LocalCache.setCatche('name', account.name)
            LocalCache.setCatche('password', account.password)
          } else {
            LocalCache.deleteCatche('name')
            LocalCache.deleteCatche('password')
          }
          store.dispatch('login/accountLoginAction', account)
        }
      })
    }

    return {
      account,
      rules,
      ruleForm,
      accountLogin
    }
  }
})
</script>

<style scoped lang="less"></style>
