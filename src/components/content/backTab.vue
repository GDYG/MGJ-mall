<template>
  <div class="back-top">
    <span class="icon-shift"></span>
  </div>
</template>

<script>
  export default {
    name: "backTab",
    computed: {
      backTop() {
        return document.querySelector('.back-top')
       }
    },
    methods: {

    }
  }
</script>

<style scoped>
.icon-shift {
  font-size: 35px;
  color: var(--color-high-text);
}
  .back-top {
    width: 50px;
    height: 50px;
    background-color: #fff;
    padding-top: 7px;
    z-index: 1000;
    text-align: center;
    border-radius: 50%;
  }
</style>