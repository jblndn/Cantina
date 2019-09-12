<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>
  .wrapper{
    width: 800px;
    margin: 0 auto;
  }
  .centered{
    margin: 0 auto;
  }
  .font-menu{
    font-size: 22px;
    line-height: 25px;
  }
  .title-card{
    font-size: 18px;
    line-height: 22px;
  }
  .title-home{
    font-size: 50px;
    text-align: center;
    margin: 40px 0;
  }
</style>