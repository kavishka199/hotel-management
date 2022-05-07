<template>
  <div id="app">
    <router-view />
    <footercomp />
  </div>
</template>

<script>
import Footercomp from './components/footercomp/Footercomp.vue';

export default {
  components: {
    Footercomp
  }
}
</script>

<style>
#app{
  min-height: 100vh;
  background: #eeeeee;
}
</style>
