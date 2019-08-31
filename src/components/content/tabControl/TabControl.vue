<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" class="tab-control-item"
         :class="{active: index === countIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabContral",
    data() {
      return {
        countIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.countIndex = index;
        this.$emit('tabClick', index);
        this.$bus.$emit('tabClick1', index)
      }
    },
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
}
  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid #FF5777;
    padding-bottom: 3px;
  }
</style>