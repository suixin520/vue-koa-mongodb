<template>
  <div class="login-container">
    <el-form :model="userInfo" status-icon ref="userInfo" label-width="100px" class="login-form">
      <el-form-item class="title-container">
        <h1 class="title">系统登录</h1>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入用户名" clearable prefix-icon="el-icon-user" v-model="userInfo.userName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" show-password clearable prefix-icon="el-icon-location-outline" v-model="userInfo.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%;margin-bottom:30px;" type="primary" @click="onLogin(userInfo)">登录</el-button>
        <el-button style="width:100%;margin-bottom:30px;margin-left:0px;" @click="onRegister()">注册</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      userInfo: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    onLogin(userInfo) {
      const _this = this
      _this.login(userInfo).then(function (response) {
        console.log(response)
        _this.$router.push({ path: '/dashboard' })
      }).catch(function (error) {
        console.log(error)
      })
      console.log(userInfo)
    },
    onRegister() {
      console.log('注册')
    },
    ...mapActions([
      'login'
    ])
  }
}
</script>
<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

// @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
//   .login-container .el-input input {
//     color: $cursor;
//   }
// }

</style>
<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .el-form-item {
    .el-form-item__label {
      color: $light_gray;
    }
  }

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
