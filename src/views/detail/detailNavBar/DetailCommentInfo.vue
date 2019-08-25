<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/formatDate'
  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        const date = new Date(value * 1000)

        return formatDate(date, 'yy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    width: 100%;
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    margin-top: 10px;
    padding: 20px 10px;
  }
  .info-header {
    display: flex;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
  }
  .info-header .header-title {
    font-size: 14px;
    color: #333;
  }
  .info-header .header-more {
    font-size: 13px;
    color: #333;
  }
  .info-user {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  .info-user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .info-user span {
    font-size: 14px;
    color: #333;
    margin-left: 10px;
  }
  .info-detail {
    padding-top: 10px;
  }
  .info-detail p {
    font-size: 13px;
    padding-bottom: 8px;
  }
  .info-detail .info-other {
    font-size: 12px;
  }
  .info-detail .info-other .date{
    margin-right: 5px;
  }
  .info-detail .info-imgs {
    margin-top: 10px;
  }
  .info-detail .info-imgs img {
    width: 60px;
    height: 60px;
    padding: 2px 2px;
  }
</style>