<template>
  <div class="login-detail">
      <div class="login-detail-item login-detail-left">
        <div class="left-header">
          <div class="balance">{{getBalance}}</div>
          <div class="text">元</div>
        </div>
        <div class="left-footer">
          我的余额
        </div>
      </div>
      <div class="login-detail-item login-detail-center">
        <div class="center-header">
          <div class="preferential">{{Preferential}}</div>
          <div class="text">个</div>
        </div>
        <div class="center-footer">
          我的优惠
        </div>
      </div>
      <div class="login-detail-item login-detail-right">
        <div class="right-header">
          <div class="integral">{{Integral}}</div>
          <div class="text">分</div>
        </div>
        <div class="right-footer">
          我的积分
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "LoginDetail",
    data() {
      return {
        Balance: 0.0,
        Preferential: 0,
        Integral: 0
      }
    },
    computed: {
      getBalance() {
        return this.Balance.toFixed(1)
      }
    }
  }
</script>

<style scoped>
  .login-detail {
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-size: 13px;
    border-bottom: 10px solid #eee;
  }
  .login-detail-item {
    padding: 0px 20px;
  }
  .login-detail-left, .login-detail-center {
    border-right: 2px solid #eee;
  }
  .balance, .preferential, .integral {
    font-size: 20px;
    color: #f13e3a;
  }
  .left-header, .center-header, .right-header {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .left-header, .center-header, .right-header {
    margin-bottom: 5px;
  }
</style>