<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>
<script>
  import mainTabbar from './components/content/mainTabbar'
  export default {
    name: 'App',
    components: {
      mainTabbar
    }
  }
</script>
<style>
  @import "./assets/css/base.css";
  @import "./common/style.css";
</style>
