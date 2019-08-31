<template>
  <div class="profile">
    <pro-file-top></pro-file-top>
    <login></login>
    <login-detail></login-detail>
    <login-center></login-center>
    <login-footer></login-footer>
  </div>
</template>

<script>
  import ProFileTop from './profileChild/ProFileTop'
  import Login from './profileChild/Login'
  import LoginDetail from './profileChild/LoginDetail'
  import LoginCenter from './profileChild/LoginCenter'
  import LoginFooter from './profileChild/LoginFooter'
  export default {
    name: "Profile",
    components: {
      ProFileTop,
      Login,
      LoginDetail,
      LoginCenter,
      LoginFooter
    }
  }
</script>

<style scoped>

</style>
