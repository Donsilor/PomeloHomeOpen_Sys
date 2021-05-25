import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
import router from './router'
import store from './store'
import { getToken } from './utils/auth'
import '@/icons' // icon
import '@/permission' // 权限
import VueImg from 'v-img'
import moment from 'vue-moment'
import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker)
Vue.use(ElementUI, {})
Vue.use(moment)
Vue.use(VueImg)
import * as filters from '@/utils/filter' // 过滤工具

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) // 注册过滤器

// 创建构建
/* Vue.mixin({
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const enter_path = sessionStorage.getItem('enter_path', from.path)
      if (from.meta.isdetail && to.path === enter_path) {
        try {
          vm.queryCondition = JSON.parse(sessionStorage.getItem('query_params') || '')
          vm.listQuery = JSON.parse(sessionStorage.getItem('page_params'))
        } catch (e) {
          console.log(e)
        }
      }
    })
  },
  beforeRouteLeave(to, from, next) {
    if (to.meta.isdetail) {
      sessionStorage.setItem('query_params', JSON.stringify(this.queryCondition || ''))
      sessionStorage.setItem('page_params', JSON.stringify(this.listQuery))
      sessionStorage.setItem('enter_path', from.path)
    }
    next()
  }
}) */

// 登录拦截
router.beforeEach((to, from, next) => {

  if (to.path === '/resetpsw') return next()
  if (to.path !== '/login' && !getToken()) return next('/login')
  next()

  // if (to.path !== '/login' && !getToken()) {
  //   next('/login')
  // } else {
  //   next()
  // }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
