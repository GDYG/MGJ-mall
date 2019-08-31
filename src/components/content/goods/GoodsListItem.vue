<template>
  <div class="goods-item" @click="itemClick">
      <img v-lazy="showImage" alt="" :key="showImage" @load="itemImgLoad">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="icon-coin-yen"></span>
        <span class="price">{{goodsItem.price}}</span>
        <span class="icon-star-empty"></span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    computed: {
      showImage() {
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
    },
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      itemImgLoad() {
        this.$bus.$emit('itemImageLoad')
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 49%;
    padding-bottom: 5px;
}
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    text-align: center;
    font-size: 12px;
  }
  .goods-item p {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .price {
    color: var(--color-high-text);
    margin-right: 10px;
  }
  .icon-coin-yen {
    color: var(--color-high-text);
  }

 </style>