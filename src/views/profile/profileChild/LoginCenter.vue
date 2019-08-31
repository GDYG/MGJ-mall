<template>
  <div class="login-message">
    <div class="message-item message-header">
      <span class="icon-envelop"></span>
      <div class="message-right">我的消息</div>
    </div>
    <div class="message-item message-center">
      <span class="icon-database"></span>
      <div class="message-right">积分商城</div>
    </div>
    <div class="message-item message-footer">
      <span class="icon-user"></span>
      <div class="message-right">会员卡</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginCenter"
  }
</script>

<style scoped>
  .login-message {
    border-bottom: 10px solid #eee;
  }
  .message-item {
    display: flex;
    padding: 10px 15px;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .message-item span {
    color: var(--color-high-text);
    opacity: 0.4;
    font-size: 14px;
    margin-right: 10px;
  }
  .message-right {
    font-size: 14px;
    color: #333;
  }

</style>