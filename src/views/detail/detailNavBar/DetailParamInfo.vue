<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes" :key="index" class="info-size">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      paramInfo: {
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .param-info {
    width: 100%;
    font-size: 14px;
    background-color: #fff;
  }
  .info-size {
    width: 100%;
    padding: 20px 10px 5px 10px;
    margin-top: 20px;
    border-top: 3px solid #eee;
  }
  .info-size tr {
  }
  .info-size tr td{
    border-bottom: 1px solid #eee;
    padding: 10px 0px;
  }

  .info-param {
    width: 100%;
    padding: 5px 10px;
  }
  .info-param td {
    border-bottom: 1px solid #eee;
    padding: 10px 0px;
  }
  .info-param-key {
    width: 30%;
  }
  .param-value {
    color: var(--color-high-text);
    font-size: 13px;
  }
</style>