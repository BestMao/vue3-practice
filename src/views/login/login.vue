<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginPanel from './cnps/login-panel.vue'
export default defineComponent({
  components: {
    loginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
