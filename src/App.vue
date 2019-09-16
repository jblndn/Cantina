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

<style lang="scss">
  $red: #ec5b4a;
  .wrapper{
    width: 1024px;
    margin: 0 auto;
  }
  .centered{
    margin: 0 auto;
  }
  .font-menu{
    font-size: 22px;
    line-height: 25px;
    font-family: 'Nunito';
  }
  .title-card{
    font-size: 18px;
    line-height: 22px;
  }
  .title-home{
    font-size: 50px;
    text-align: center;
    margin: 40px 0;
    color: $red;
    font-family: 'Nunito';
    font-weight: bold;
  }
</style>