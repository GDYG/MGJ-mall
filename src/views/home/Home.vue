<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">蘑菇街</div></NavBar>
    <TabControl class="tab-controls"
                :title="['流行', '新款', '精选']"
                @tabClick="tabClicks" ref="tabControl1" v-show="isShow"></TabControl>
    <backTab class="back-top" @click.native="backClick" v-if="isActive" ref="back-top"></backTab>
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="homeScroll" :pull-up-load="true" @pullingUp="pullingUp">
      <Sliders :banners="banners" @sliderImageLoad="sliderImageLoad"></Sliders>
      <RecommendView :recommends="recommends"></RecommendView>
      <Feature></Feature>
      <TabControl class="tab-control"
                  :title="['流行', '新款', '精选']"
                  @tabClick="tabClicks" ref="tabControl" v-show="!isShow"></TabControl>
      <GoodsList :goods="goods[countType].list"></GoodsList>
    </Scroll>

  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  import Sliders from 'components/common/swiper/Sliders'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/scroll/Scroll'
  import backTab from 'components/content/backTab'

  import RecommendView from './childrenhome/RecomendView'
  import Feature from './childrenhome/Feature'
  import {itemMixin} from 'common/itemMixin'

  import {getHomeMultidata, getHomeGoods} from 'network/home'
  export default {
    name: "Home",
    components: {
      NavBar,
      Sliders,
      TabControl,
      GoodsList,
      Scroll,
      backTab,

      RecommendView,
      Feature
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
              'pop': {page: 0, list: []},
              'new': {page: 0, list: []},
              'sell': {page: 0, list: []}
            },
        countType: 'pop',
        isActive: false,
        isShow: false,
        homeScrolls: document.querySelector('.back-top'),
        tabOffsetTop: 0,
        saveY: 0, //保存首页离开时的位置
      }
    },
    created() {
      //请求多个数据
      this.getHomeMultidata();

      //请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mixins: [itemMixin], //将里面的东西和mounted里面的混合
    mounted() {
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0) //回到首页时将位置保留在位置Y
      this.$refs.scroll.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getSaveY() //记住首页离开时的位置Y
      console.log(this.saveY)

      //取消全局事件的监听
      this.$bus.$off('itemImageLoad', this.homeImageLoad)
    },
    methods: {
      //监听轮播图加载完成
      sliderImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },

      //请求多个数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },

      //请求商品数据
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);

          this.goods[type].page += 1;

          this.$refs.scroll.finishPullUp();
        })
      },
      pullingUp() {
        this.getHomeGoods(this.countType)

      },

      tabClicks(index) {
        switch (index) {
          case 0:
            this.countType = 'pop';
            break;
          case 1:
            this.countType = 'new';
            break;
          case 2:
            this.countType = 'sell';
            break;
        }

        this.$refs.tabControl1.countIndex = index
        this.$refs.tabControl.countIndex = index
      },

      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },

      homeScroll(position) {
        if(position.y <= -1000) {
          this.isActive = true
        }else {
          this.isActive = false
        }

          this.isShow = (-position.y) > (this.tabOffsetTop - 44)
      }
    }
  }

</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;

  }
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 100;*/
}
  /*.tab-control {*/
  /*  position: sticky; //停留效果 */
  /*  top: 44px;*/
  /*}*/
  .content {
    height: calc(100% - 93px);
    overflow: hidden;
  }
  .back-top {
    position: fixed;
    bottom: 70px;
    right: 5px;
  }
.tab-controls {

}
</style>
