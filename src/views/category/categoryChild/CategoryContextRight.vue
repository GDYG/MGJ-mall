<template>
  <div class="category-context-right">
    <div class="category-header" v-for="item in subcategory">
      <a :href="item.link"><img :src="item.image" alt=""></a>
      <div>{{item.title}}</div>
    </div>
    <div class="category-footer">
      <TabControl class="tab-controls"
                  :title="['综合', '新品', '销量']"
                  ></TabControl>
      <GoodsList :goods="goods"></GoodsList>
    </div>
  </div>
</template>

<script>
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  export default {
    name: "CategoryContextRight",
    components: {
      TabControl,
      GoodsList
    },
    props: {
      subcategory: {
        type: Array,
        default() {
          return []
        }
      },
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .category-context-right {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
  }
  .category-header {
    width: 50%;
    text-align: center;
    font-size: 13px;
    margin-bottom: 20px;

  }
  .category-header a img {
    width: 100%;
    padding: 10px 10px;
  }
  .category-footer {
    width: 100%;
  }
</style>