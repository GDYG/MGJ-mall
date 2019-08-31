<template>
  <div class="category-context">
    <div v-for="(item, index) in categoryList" class="category-item" :class="{isActive: countIndex === index}" @click="btnClick(index)">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryContext",
    props: {
      categoryList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isActive: false,
        countIndex: 0
      }
    },
    methods: {
      btnClick(index) {
        this.countIndex = index
        this.$emit('clickItem', index)
      }
    }
  }
</script>

<style scoped>
  .category-context {
    width: 100%;
    background-color: #eee;
    color: #333;
    font-size: 13px;
    text-align: center;
  }
  .category-item {
    width: 100%;
    height: 40px;
    padding-top: 15px;
  }
  .isActive {
    color: var(--color-high-text);
    border-left: 2px solid var(--color-high-text);
    background-color: #fff;
  }
</style>