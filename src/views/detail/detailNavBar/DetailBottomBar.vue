<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <div class="icon service"><span class="icon-user-tie"></span></div>
        <div class="text">客服</div>
      </div>
      <div>
        <div class="icon shop"><span class="icon-home"></span></div>
        <div class="text">店铺</div>
      </div>
      <div>
        <div class="icon select"><span class="icon-star-empty"></span></div>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailBottomBar",
    methods: {
      addToCart() {
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 58px;
    background-color: #fff;

    display: flex;
    text-align: center;
  }
  .bar-item {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .bar-item .icon {
    margin-bottom: 4px;
  }
  .bar-item .icon span {
    font-size: 22px;
  }
  .bar-item .service span {
    color: #f69;
  }
  .bar-item>div {
    flex: 1;
  }
  .bar-left .text {
    font-size: 13px;
    color: #333;
  }
  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }
  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy {
    background-color: #f69;
  }

</style>