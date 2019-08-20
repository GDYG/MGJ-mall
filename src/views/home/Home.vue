<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">蘑菇街</div></NavBar>
    <Sliders :banners="banners"></Sliders>
    <RecommendView :recommends="recommends"></RecommendView>
    <Feature></Feature>
    <TabControl class="tab-control" :title="['流行', '新款', '精选']" @tabClick="tabClicks"></TabControl>
    <GoodsList :goods="goods[countType].list"></GoodsList>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  import Sliders from 'components/common/swiper/Sliders'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

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
        countType: 'pop'
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
          console.log(this.recommends)
        })
      },

      //请求商品数据
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1
        })
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
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
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
</style>
