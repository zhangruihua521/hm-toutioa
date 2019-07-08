import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
//导入路由模块不需要写路径
import  VueRouter from 'vue-router'
//需要用use配置一下
Vue.use(VueRouter)
//导入herolist组件
import HeroList from './views/hero/HeroList.vue'
import WeaponList from './views/weapon/WeaponList.vue'
import EquipList from './views/equip/EquipList.vue'
//创建路由对象
const router = new VueRouter({
  //配置路由规则
  routes:[
    {name:'hero',path:'/hero',component:HeroList},
    {name:'weapon',path:'/weapon',component:WeaponList},
    {name:'equip',path:'/equip',component:EquipList}
  ]
})
new Vue({
  render: h => h(App),
  //配置路由对象
  router  
}).$mount('#app')
