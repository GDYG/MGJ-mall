<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">蘑菇街</div></NavBar>
    <backTab class="back-top" @click.native="backClick" v-if="isActive" ref="back-top"></backTab>
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="homeScroll" :pull-up-load="true" @pullingUp="pullingUp">
      <Sliders :banners="banners"></Sliders>
      <RecommendView :recommends="recommends"></RecommendView>
      <Feature></Feature>
      <TabControl class="tab-control" :title="['流行', '新款', '精选']" @tabClick="tabClicks"></TabControl>
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
        homeScrolls: document.querySelector('.back-top')
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

    methods: {
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

        this.$refs.scroll.scroll.refresh()
      },

      tabClicks(index) {
        console.log(index)
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
      }
    }
  }

</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
  }
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}
  .tab-control {
    position: sticky;
    top: 44px;
  }
  .content {
    height: calc(100% - 49px);
    overflow: hidden;
  }
  .back-top {
    position: fixed;
    bottom: 70px;
    right: 5px;
  }
</style>
