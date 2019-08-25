<template>
  <div class="sliders">
    <!-- 配置slider组件 -->
    <slider ref="slider" :options="options">
      <!-- 直接使用slideritem slot -->
      <slideritem v-for="(item,index) in topImgs" :key="index" >
        <div class="slider-item">
            <img :src="item">
        </div>
      </slideritem>
      <!-- 设置loading,可自定义 -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>

<script>
  import { slider, slideritem } from 'vue-concise-slider'
  export default {
    name: "DetailSlider",
    components: {
      slider,
      slideritem
    },
    data() {
     return {
       options: {
         currentPage: 0,
         thresholdDistance:500,
         thresholdTime:100,
         autoplay:3000,
         loop:true,
         direction:'level',
         loopedSlides:1,
         slidesToScroll:1,
         timingFunction: 'ease',
         speed: 300
       }
     }
    },
    mounted () {
      let that = this
      setTimeout(function () {
       that.topImgs
      }, 4000)
    },
    props: {
      topImgs: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .sliders {
    width:100%;
    margin:0px 0px;
    height: 300px;
  }
  img {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
</style>