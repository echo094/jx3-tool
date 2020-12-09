<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    router>
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span>首页</span>
    </el-menu-item>
  </el-menu>
  <router-view/>
  <el-dialog
    title="提示"
    v-model="isInvalidBrowser"
    fullscreen
    :show-close="false">
    <p>请使用其它浏览器打开</p>
    <p>当前浏览器 {{ currentBrowser }}</p>
  </el-dialog>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    if (!this.checkBrowser()) {
      this.isInvalidBrowser = true
    }
  },
  data () {
    return {
      isInvalidBrowser: false,
      currentBrowser: ''
    }
  },
  methods: {
    checkBrowser () {
      const str = navigator.userAgent
      if (~str.indexOf('MicroMessenger')) {
        this.currentBrowser = 'Weixin'
        return false
      }
      return true
    }
  }
}
</script>

<style>
body {
  background: #F8F8F8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
