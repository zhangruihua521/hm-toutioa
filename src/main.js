import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
import axios from 'axios'
Vue.prototype.axios =axios

//导入router模块
import router from './router.js'


new Vue({
  render: h => h(App),
  //配置路由对象
  router  
}).$mount('#app')
