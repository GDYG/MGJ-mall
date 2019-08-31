<template>
  <div class="category">
    <nav-bar class="category-top"><div slot="center">商品分类</div></nav-bar>
    <div class="content1">
      <Scroll class="context">
        <category-context :categoryList="categoryList" @clickItem="clickItem"></category-context>
      </Scroll>
      <Scroll class="context1" :probe-type="3" @scroll="categoryScroll" ref="scroll">
        <category-context-right :subcategory="subcategory" :goods="goods"></category-context-right>
      </Scroll>
    </div>
  </div>
</template>

<script>
  import {getCategory, getSubcategory, getSubcategoryDetail} from "../../network/category";
  import Scroll from 'components/scroll/Scroll'

  import NavBar from 'components/common/navbar/NavBar'
  import CategoryContext from './categoryChild/CategoryContext'
  import CategoryContextRight from './categoryChild/CategoryContextRight'
  export default {
    name: "Category",
    components: {
      NavBar,
      CategoryContext,
      Scroll,
      CategoryContextRight
    },
    data() {
      return {
        categoryList: [],
        subcategory: [],
        cateKey: 3627,
        goods: [],
        miniWallKey: 10062603,
        keyType: 'pop'
      }
    },
    created() {
      //请求分类数据
      this.getCategory()

      //请求分类的详情数据
      this.getSubcategory(this.cateKey)

      //请求分类的综合、新品、销量数据
      this.getSubcategoryDetail(this.miniWallKey, this.keyType)


    },
    mounted() {
      this.$bus.$on('tabClick1', (index) => {
        switch (index) {
          case 0:
            this.keyType = 'pop';
            this.getSubcategoryDetail(this.miniWallKey, this.keyType)
            break;
          case 1:
            this.keyType = 'new';
            this.getSubcategoryDetail(this.miniWallKey, this.keyType)
            break;
          case 2:
            this.keyType = 'sell';
            this.getSubcategoryDetail(this.miniWallKey, this.keyType)
            break;
        }
        console.log(index)
      })
    },
    methods: {
      getCategory() {
        getCategory().then(res => {
          this.categoryList = res.data.category.list
        })
      },
      getSubcategory(value) {
        getSubcategory(value).then(res => {
          this.subcategory = res.data.list
        })
      },
      getSubcategoryDetail(value, type) {
        getSubcategoryDetail(value, type).then(res => {
          this.goods = res
        })
      },
      clickItem(index) {
        this.cateKey =  this.categoryList[index].maitKey
        this.getSubcategory(this.cateKey)
        console.log(this.cateKey)

        this.miniWallKey = this.categoryList[index].miniWallkey
        this.getSubcategoryDetail(this.miniWallKey, this.keyType)
      },
      categoryScroll() {

      }
    }
  }
</script>

<style scoped>
  .category {
    height: 100vh;
  }
  .content1 {
    display: flex;
    height: calc(100% - 44px - 56px);
  }
  .category-top {
    background-color: var(--color-tint);
    color: #fff;
  }
  .context {
    /*height: calc(100% - 44px - 56px);*/
    overflow: hidden;
    height: 100%;
    width: 25%;
  }
  .context1 {
    /*height: calc(100% - 44px - 56px);*/
    overflow: hidden;
    width: 75%;
    height: 100%;
  }
</style>
