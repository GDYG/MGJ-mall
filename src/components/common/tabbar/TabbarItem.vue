<template>
  <div class="tab-bar-item ignore" @click="btnClick">
    <div :style="isActive"><slot name="item-icon"></slot></div>
    <div :style="isActive"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    computed: {
      imgColor() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      isActive() {
        return this.imgColor ? {color: this.itemColor} : {}
       }
    },
    props: {
      path: String,
      itemColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      btnClick() {
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;

    vertical-align: middle;
    margin-top: 7px;
  }
  .item-font{
    font-size: 14px;
  }
  span{
    font-size: 20px;
  }
</style>
