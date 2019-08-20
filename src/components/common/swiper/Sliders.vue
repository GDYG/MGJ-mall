<template>
  <!-- 制作一个框架包裹slider -->
  <div class="sliders">
    <!-- 配置slider组件 -->
    <slider ref="slider" :options="options">
      <!-- 直接使用slideritem slot -->
      <slideritem v-for="(item,index) in someList" :key="index" >
       <div class="slider-item">
         <a :href="item.link" :title="item.title">
           <img :src="item.image" :alt="item.title">
         </a>
       </div>
      </slideritem>
      <!-- 设置loading,可自定义 -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
  import { slider, slideritem } from 'vue-concise-slider'// import slider components
  export default {
    name: "Sliders",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data () {
      return {
        //Image list
        someList:[],
        //Sliding configuration [obj]
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
    components: {
      slider,
      slideritem
    },
    mounted () {
      let that = this
      setTimeout(function () {
        that.someList = that.banners
      }, 2000)
    }
  }
</script>

<style scoped>
.sliders {
  width:100%;
  margin:0px 0px;
  height:170px;
}
  .sliders .slider-item img {

  }
  img {
    width: 100%;
    height: 170px;
  }
</style>