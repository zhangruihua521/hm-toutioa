import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//让所有的vue实例都具有一个属性axios,给vue构造函数的原型增加成员
import axios from 'axios'
//配置axios的基地址,调用请求方法的时候get(url),会自动 把请求方式的路径拼接到基地址的后面
axios.defaults.baseURL='http://localhost:3000/'
Vue.prototype.axios=axios
//导入样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'


//导入router模块
import router from './router.js'


new Vue({
  render: h => h(App),
  //配置路由对象
  router  
}).$mount('#app')
