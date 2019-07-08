<template>
  <div id="app">
  <!-- 头部留位 -->
  <app-header></app-header>
  <div class="container-fluid">
    <div class="row">
     <!-- //侧边导航留位 -->
     <app-side></app-side>
     
     <!-- //中间的内容留位 -->
     <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue' 
import AppSide from './components/AppSide.vue'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppSide
  }
}
</script>

<style>

</style>
