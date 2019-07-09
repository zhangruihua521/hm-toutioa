//导入路由模块不需要写路径
import  VueRouter from 'vue-router'
import Vue from 'vue'
//需要用use配置一下
Vue.use(VueRouter)
//导入herolist组件
import HeroList from './views/hero/HeroList.vue'
import WeaponList from './views/weapon/WeaponList.vue'
import EquipList from './views/equip/EquipList.vue'
import HeroAdd from  './views/hero/HeroAdd.vue'
//创建路由对象
const router = new VueRouter({
  //当浏览器地址栏中的路由地址,#hero和router-link生成的a标签的herf精确区配的时候,添加类样式
  linkExactActiveClass:"active",
  //配置路由规则
  routes:[
    {path:'/',redirect:{name:'hero'}},
    {name:'hero',path:'/hero',component:HeroList},
    {name:'weapon',path:'/weapon',component:WeaponList},
    {name:'equip',path:'/equip',component:EquipList},
    //添加路由模块
    {name:'heroadd',path:'/hero/add',component:HeroAdd}
  ]
})
//导出router对象
export default router