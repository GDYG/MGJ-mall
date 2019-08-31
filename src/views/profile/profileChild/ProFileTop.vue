<template>
  <div class="pro-top-bar">
    <nav-bar><div slot="center">我的档案</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "ProFileTop",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .pro-top-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>