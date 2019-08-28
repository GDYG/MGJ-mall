<template>
  <div class="cart-list">
      <cart-list-item v-for="(item, index) in getList" :key="index" :product="item"></cart-list-item>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex' //直接使用getter中的计算属性
  import CartListItem from './CartListItem'

  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed: {
        ...mapGetters(['getList'])
    }
  }
</script>

<style scoped>
  .cart-list {
    height: 100%;
  }
</style>