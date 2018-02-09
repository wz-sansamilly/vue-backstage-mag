<template>
  <div id="app">
    <Header></Header>
    <Sidebar></Sidebar>
    
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Profile from './components/Profile.vue';
import Canvas from './components/Canvas.vue';
import Chart from './components/Chart.vue';
import Tables from './components/Tables.vue';
import Translate from './components/Translate.vue';
export default {
  name: 'App',
  components:{
    Header,
    Sidebar,
    Profile,
    Canvas,
    Chart,
    Tables, 
    Translate
  }
}
</script>

<style lang="scss">
  @import './assets/css/reset.scss';
  @import './assets/css/main.scss';

  #app {
    font-family: Arial, 'SimHei', 'HYLeMiaoTi', 'Microsoft JhengHei';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 15px;
    clear: both;
    .main{
      position: absolute;
      top: 60px;
      left: 220px;
      right: 0;
      padding: 20px 20px 0 20px;
      
      
    }
  }
</style>
