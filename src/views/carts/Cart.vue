<template>
  <div class="cart">
    <NavBar class="cart-nav">
      <div class="title" slot="center">购物车({{carLength}})</div>
    </NavBar>
    <Scroll class="cart-scroll">
      <cart-list></cart-list>
    </Scroll>
    <cart-reduce></cart-reduce>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/scroll/Scroll'
  import CartReduce from './childCarts/CartReduce'

  import CartList from './childCarts/CartList'
  import {mapGetters} from 'vuex' //直接使用getter中的计算属性

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      Scroll,
      CartReduce
    },
    computed: {
      ...mapGetters(['carLength']) //使用getter中的计算属性
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .cart-scroll {
    height: calc(100% - 44px - 56px - 30px);
    overflow: hidden;
  }
  .cart-nav {
    background: var(--color-tint);
  }
  .title {
    color: #fff;
  }
</style>
