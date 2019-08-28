<template>
  <div class="cart-reduce">
    <div class="reduce-left" @click="allClick">
      <span class="icon-checkmark" :class="{isActive2: isActive2}"></span>
      全选
    </div>
    <div class="reduce-center">
      合计：￥{{totlePrice}}
    </div>
    <div class="reduce-right">
      去结算({{checkLenght}})
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartReduce",
    computed: {
      totlePrice() {
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((prep, next) => {
          return prep + (next.price * next.count)
        }, 0).toFixed(2)
      },
      checkLenght() {// 过滤只有被选中的列表项
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).length
      },
      isActive2() { //确定全选按钮的状态
        if (this.$store.state.cartList.length === 0) return false //如果购物车列表项里面没有数据，全选按钮状态为 false
        return !this.$store.state.cartList.find(item => { //如果列表项里面有没有选中的列表项，全选按钮状态就为 false， 否则就为 true
          return !item.checked
        })
      }
    },
    methods: {
      allClick() { //当点击全选的时候操作
        if(this.isActive2) { //如果全选按钮是选中状态，点击时把所有项都变为未选中
          for (let item of this.$store.state.cartList) {
              item.checked = false
          }
        }else { //如果全选按钮是未选中状态，点击时把所有项都变为选中
          for (let item of this.$store.state.cartList) {
              item.checked = true
          }
        }
        // console.log(this.isActive2);
      }
    }
  }
</script>

<style scoped>
  .cart-reduce {
    height: 30px;
    width: 100%;
    display: flex;
    font-size: 14px;
    background-color: #eee;
    align-items: center;
    justify-content: space-between;
  }
  .isActive2 {
    color: #fff;
    background-color: var(--color-tint);
  }
  .reduce-left {
    margin-left: 8px;
    font-size: 13px;
  }
  .reduce-left span {
    width: 20px;
    height: 20px;
    color: #fff;
    font-size: 12px;
    text-shadow: 0 0 1px black;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
  .reduce-center {
    position: relative;
    right: 30px;
  }
  .reduce-right {
    background-color: #f13e3a;
    height: 30px;
    width: 80px;
    text-align: center;
    padding-top: 8px;
    color: #fff;
  }
</style>