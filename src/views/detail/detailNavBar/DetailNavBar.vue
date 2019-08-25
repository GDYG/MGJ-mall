<template>
  <div>
    <nav-bar>
      <div slot="left" @click="leftClick">
        <span class="icon-undo2"></span>
      </div>
        <div slot="center" class="titles">
          <div v-for="(item, index) in titles" class="titleItem"
               :class="{active: countIndex === index}"
          @click="titlesIndex(index)">{{item}}</div>
        </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        countIndex: 0
      }
    },
    methods: {
      titlesIndex(index) {
        this.countIndex = index
      },
      leftClick() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .titles {
    display: flex;
  }
  .titleItem {
    flex: 1;
    font-size: 13px;
  }
  .icon-undo2 {
    font-size: 15px;
  }
  .active {
    color: var(--color-high-text);
  }
</style>