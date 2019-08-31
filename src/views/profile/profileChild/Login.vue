<template>
  <div class="login">
    <div class="login-left">
      <img src="~assets/img/login.png" alt="">
    </div>
    <div class="login-center">
      <div class="login-header">
        <a href="">登录</a>
        /
        <a href="">注册</a>
      </div>
      <div class="login-foot">
        <span class="icon-mobile"></span>
        暂无绑定手机号
      </div>
    </div>
    <div class="login-right">
      <a href=""><span class="icon-arrow-right2"></span></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped>
  .login {
    width: 100%;
    height: 70px;
    background-color: var(--color-tint);
    display: flex;
    align-items: center;
    color: #fff;
  }
  .login-left {
    margin: 0px 15px;
  }
  .login-center .login-header a {
    color: #fff;
  }
  .login-foot {
    font-size: 13px;
    margin-top: 5px;
  }
  .login-foot span {
    opacity: 0.5;
  }
  .login-right {
    position: relative;
    left: 110px;
  }
  .login-right a {
    color: #fff;
  }
</style>