import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//让所有的vue实例都具有一个属性axios,给vue构造函数的原型增加成员
import axios from 'axios'

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
