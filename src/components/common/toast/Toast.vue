<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    //不同封装toast的原始做法，麻烦，在每一个使用它的组件中都会要做很多东西
    // props: {
    //   message: {
    //     type: String,
    //     default: ''
    //   },
    //   isShow: {
    //     type: Boolean,
    //     default: false
    //   }
    // }

    //封装toast的方式
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message='信息展示', duration=1500) {
        this.message = message
        this.isShow = true

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    background-color: rgba(0,0,0,.7);
    border-radius: 1px;
    padding: 8px 10px;
    color: #fff;
    z-index: 99;
  }
</style>