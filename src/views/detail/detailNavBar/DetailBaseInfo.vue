<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="now-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="info-discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-columns">
      <span class="bottom-info1">{{goods.columns[0]}}</span>
      <span class="bottom-info2">{{goods.columns[1]}}</span>
      <span class="bottom-info3">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.base-info {
  margin: 10px 5px 0px 5px;
  border-bottom: 2px solid #eee;
}
  .info-title {
    font-size: 14px;
    font-weight: bold;
    color: #222;
  }
  .info-price {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .info-columns {
    text-align: center;
    font-size: 13px;
    line-height: 30px;
    color: rgba(100,100,100,.7);
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .now-price {
    font-size: 24px;
    color: var(--color-high-text);
  }
  .old-price {
    margin-left: 5px;
    font-size: 13px;
    text-decoration: line-through;
    color: var(--color-text);
  }
  .info-discount {
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    position: relative;
    top: -8px;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .info-service-item img {
    width: 13px;
    height: 13px;
    position: relative;
    top: 2px;
  }
  .info-service-item span {
    font-size: 11px;
    color: #333;
  }
</style>