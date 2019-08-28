<template>
  <div class="goods">
    <GoodsListItem v-for="(item, index) in goods" :key="index" :goods-item="item"></GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.goods {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 3px;
}
</style>