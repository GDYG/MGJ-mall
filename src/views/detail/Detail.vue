<template>
  <div id="detail">
    <detail-nav-bar class="detail-bar" @detailTop="detailTopY" ref="navbarIndex"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="detailScroll">
      <detail-slider :topImgs="topImgs"></detail-slider>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-info :detailInfo="detailInfo" @finImage="finImages"></detail-info>
      <detail-param-info :paramInfo="paramInfo" ref="paramInfo"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="commentInfo"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommends"></goods-list>
    </scroll>
    <back-tabs class="back-top" @click.native="backClick" v-if="isActive" ref="back-top"></back-tabs>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from './detailNavBar/DetailNavBar'
  import {getDetail, Goods, Shop, ParamInfo, getReCommend} from "../../network/detail";
  import Scroll from 'components/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  import {itemMixin} from 'common/itemMixin'
  import {debounce} from 'common/debounce'
  import backTabs from 'components/content/backTab'
  // import Toast from 'components/common/toast/Toast'

  import DetailSlider from './detailNavBar/DetailSlider'
  import DetailBaseInfo from './detailNavBar/DetailBaseInfo'
  import DetailShopInfo from './detailNavBar/DetailShopInfo'
  import DetailInfo from './detailNavBar/DetailInfo'
  import DetailParamInfo from './detailNavBar/DetailParamInfo'
  import DetailCommentInfo from './detailNavBar/DetailCommentInfo'
  import DetailBottomBar from './detailNavBar/DetailBottomBar'
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
      GoodsList,
      DetailBottomBar,
      backTabs
      // Toast
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
        recommends: [],
        navbarTopY: [],
        getTop: null,
        isActive: false,

        // message: '',
        // isShow: false
      }
    },
    methods: {
        finImages() {
          // this.$refs.scroll.refresh()
          this.homeImageLoad()

          //图片加载完成层之后能正确获取$el
          this.getTop()
        },

        //导航联动效果
      detailTopY(index) {
        console.log(this.$refs.paramInfo.$el.offsetTop)
        this.$refs.scroll.scrollTo(0, -this.navbarTopY[index], 300)
        console.log(-this.navbarTopY[index])
      },
      detailScroll(position) {
          if(-position.y >= 0 && -position.y < this.navbarTopY[1]) {
            this.$refs.navbarIndex.countIndex = 0
          }else if(-position.y >= this.navbarTopY[1] && -position.y < this.navbarTopY[2]) {
            this.$refs.navbarIndex.countIndex = 1
          }else if(-position.y >= this.navbarTopY[2] && -position.y < this.navbarTopY[3]) {
            this.$refs.navbarIndex.countIndex = 2
          }else if(-position.y >= this.navbarTopY[3]) {
            this.$refs.navbarIndex.countIndex = 3
          }

          this.isActive = (-position.y) > 1000
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },

      //加入购物车
      addToCart() {
        const product = {}
        product.iid = this.iid
        product.image = this.topImgs[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice

        //添加商品
        this.$store.dispatch('cartAdd', product).then(res => {
          // this.message = res;
          // this.isShow = true;
          // setTimeout(() => {
          //   this.isShow = false
          //   this.message = ''
          // },1500)

          this.$toast.show(res, 1500)
        })
      }
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
        // console.log(res.result)
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

      //图片加载完成之后能正确获取$el
      this.getTop = debounce(() => {
        this.navbarTopY = []
        this.navbarTopY.push(0)
        this.navbarTopY.push(this.$refs.paramInfo.$el.offsetTop - 44)
        this.navbarTopY.push(this.$refs.commentInfo.$el.offsetTop - 44)
        this.navbarTopY.push(this.$refs.recommends.$el.offsetTop - 44)
      }, 300)
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
    height: calc(100% - 44px - 58px);
    overflow: hidden;
  }
  .detail-bar {
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  .back-top {
    position: fixed;
    bottom: 70px;
    right: 5px;
  }
</style>