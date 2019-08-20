<template>
  <div id="app">
    <router-view/>
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
