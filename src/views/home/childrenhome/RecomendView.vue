<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <div class="recommend-name">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecomendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    border-bottom: 8px solid #eee;
    padding-top: 10px;
  }
  .recommend-item {
    flex: 1;
    text-align: center;
    float: left;
  }
  img {
    width: 69px;
    height: 69px;
  }
  .recommend .recommend-item a {
    text-decoration: none;
    margin: 0px;
    padding: 0px;
  }
  .recommend-name {
    font-size: 12px;
    color: #333;
    height: 26px;
    line-height: 26px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>