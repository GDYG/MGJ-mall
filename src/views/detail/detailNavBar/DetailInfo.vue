<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        countImg: 0,
        finImg: 0
      }
    },
    methods: {
      imageLoad() {
        this.$emit('finImage')

        //不用防抖函数时
        // if(++countImg === finImg) {
        //   this.$emit('finImage')
        //   console.log(this.finImg)
        // }
      }
    },
    watch: {
      getFinImg() {
        this.finImg = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .info-desc {
    margin-bottom: 15px;
    padding: 0px 10px;
  }
  .info-key {
    font-size: 13px;
    margin-left: 2px;
    margin-bottom: 5px;
  }
  .info-list {
    width: 100%;
    text-align: center;
  }
  .info-list img {
    width: 100%;
    padding: 0px 1px;
  }

</style>