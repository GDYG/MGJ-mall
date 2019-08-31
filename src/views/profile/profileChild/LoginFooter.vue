<template>
  <div class="login-bottom">
    <div class="login-bottom-cart">
      <span class="icon-cart"></span>
      <div class="login-bottom-item">我的购物车</div>
    </div>
    <div class="login-bottom-app">
      <span class="icon-android"></span>
      <div class="login-bottom-item">下载购物APP</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginFooter"
  }
</script>

<style scoped>
  .login-bottom {

  }
  .login-bottom-app, .login-bottom-cart {
    display: flex;
    padding: 10px 15px;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .login-bottom-item {
    font-size: 14px;
    color: #333;
  }
  .icon-cart, .icon-android {
    color: var(--color-high-text);
    opacity: 0.4;
    font-size: 14px;
    margin-right: 10px;
  }
</style>