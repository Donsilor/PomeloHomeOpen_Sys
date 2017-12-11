import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
import router from './router'
import store from './store'
import '@/icons' // icon
import '@/permission' // 权限
import VueImg from 'v-img'

Vue.use(ElementUI, {})

Vue.use(VueImg)
import * as filters from '@/utils/filter'; // 过滤工具

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])); // 注册过滤器
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
