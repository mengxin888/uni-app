import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import uView from 'uview-ui'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView)
// 如此配置即可
const app = new Vue({
  ...App
})
app.$mount()
