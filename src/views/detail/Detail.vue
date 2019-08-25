<template>
  <div id="detail">
    <detail-nav-bar class="detail-bar"></detail-nav-bar>
    <Scroll class="content" ref="scroll">
      <detail-slider :topImgs="topImgs"></detail-slider>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-info :detailInfo="detailInfo" @finImage="finImages"></detail-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <goods-list :goods="recommends"></goods-list>
    </Scroll>
  </div>
</template>

<script>
  import DetailNavBar from './detailNavBar/DetailNavBar'
  import {getDetail, Goods, Shop, ParamInfo, getReCommend} from "../../network/detail";
  import Scroll from 'components/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  import {itemMixin} from 'common/itemMixin'

  import DetailSlider from './detailNavBar/DetailSlider'
  import DetailBaseInfo from './detailNavBar/DetailBaseInfo'
  import DetailShopInfo from './detailNavBar/DetailShopInfo'
  import DetailInfo from './detailNavBar/DetailInfo'
  import DetailParamInfo from './detailNavBar/DetailParamInfo'
  import DetailCommentInfo from './detailNavBar/DetailCommentInfo'
  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSlider,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList
    },
    data() {
      return {
        iid: null,
        topImgs: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: []
      }
    },
    methods: {
        finImages() {
          this.$refs.scroll.scroll.refresh()
        },
    },
    mixins: [itemMixin],
    mounted() {
    },
    destroyed() {
      this.$bus.$off('itemImageLoad', this.homeImageLoad)
    },
    created() {
      this.iid = this.$route.params.iid

      getDetail(this.iid).then(res => {
        console.log(res.result)
        const data = res.result
        this.topImgs.push(...data.itemInfo.topImages)

        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        //获取店铺信息
        this.shop = new Shop(data.shopInfo)

        //保存商品详情数据
        this.detailInfo = data.detailInfo

        //保存商品的参数信息
        this.paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule)

        //保存用户评价信息
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })

      //请求推荐数据
      getReCommend().then(res => {
        this.recommends = res.data.list
      })
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px);
  }
  .detail-bar {
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
</style>