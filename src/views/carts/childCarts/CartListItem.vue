<template>
  <div class="list-item">
    <div class="item-select" @click="selectClick">
      <span class="icon-checkmark" :class="{isActive1: product.checked}"></span>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <div class="item-price right">×{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      selectClick() {
        this.product.checked = !this.product.checked
      }
    }
  }
</script>

<style scoped>
  .list-item {
    display: flex;
    width: 100%;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  .item-select {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-select span {
    width: 20px;
    height: 20px;
    text-align: center;
    color: #fff;
    text-shadow: 0 0 1px black;
    font-size: 14px;
    padding-top: 3px;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
  .isActive1 {
    color: #fff;
    background-color: var(--color-tint);
  }
  .item-img {
    padding: 5px;
  }
  .list-item .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .item-bottom .item-price {
    color: orangered;
  }
</style>