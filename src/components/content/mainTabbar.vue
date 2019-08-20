<template>
  <Tabbar>
    <TabbarItem path="/home" itemColor="#ff8198">
      <span class="icon-home" slot="item-icon"></span>
      <div slot="item-text" class="item-font">
        首页
      </div>
    </TabbarItem>
    <TabbarItem path="/category" itemColor="#ff8198">
      <span class="icon-price-tags" slot="item-icon"></span>
      <div slot="item-text" class="item-font">
        分类
      </div>
    </TabbarItem>
    <TabbarItem path="/cart" itemColor="#ff8198">
      <span class="icon-cart" slot="item-icon"></span>
      <div slot="item-text" class="item-font">
        购物车
      </div>
    </TabbarItem>
    <TabbarItem path="/profile" itemColor="#ff8198">
      <span class="icon-users" slot="item-icon"></span>
      <div slot="item-text" class="item-font">
        我的
      </div>
    </TabbarItem>
  </Tabbar>
</template>

<script>
  import Tabbar from "../common/tabbar/Tabbar"
  import TabbarItem from "../common/tabbar/TabbarItem"
  export default {
    name: "mainTabbar",
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>

</style>