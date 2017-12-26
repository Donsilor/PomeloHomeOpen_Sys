import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 **/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/enterpriseCheck',
    name: 'Dashboard',
    hidden: true,
    children: [
      { path: 'dashboard', component: _import('dashboard/index') },
    ]
  },
  
  // 企业审核
  {
    path: '/',
    component: Layout,
    // name: '企业审核',
    // redirect: '/enterpriseCheck',
    noDropdown: true,
    // icon: 'enterprise',
    children: [
      { path: 'enterpriseCheck', name: '企业审核', component: _import('enterpriseCheck/index') },
      {
        path: 'enterpriseCheck/enterpriseCheckedDetail',
        name: '已审核详情',
        component: _import('enterpriseCheck/enterpriseCheckedDetail') ,
        meta: { breadNumber:1, notKeepAlive: true }
      },
      {
        path: 'enterpriseCheck/enterpriseCheckDetail',
        name: '待审核详情',
        component: _import('enterpriseCheck/enterpriseCheckDetail') ,
        meta: { breadNumber:1, notKeepAlive: true }
      }
    ]
  },
  
  // 产品审核
  {
    path: '/',
    component: Layout,
    // redirect: '/productCheck/index',
    // name: '企业审核',
    noDropdown: true,
    // icon: 'product',
    children: [
      // { path: 'enterprise_check_pending', name: '待审核列表', component: _import('enterpriseCheck/enterprise_check_pending') }
      { path: 'productCheck', name: '产品审核', component: _import('productCheck/index')},
      {
        path: 'productCheck/productCheckDetail',
        name: '待审产品详情',
        component: _import('productCheck/productCheckDetail'),
        meta: { breadNumber:1, notKeepAlive: true }
      },
      { path: 'productCheck/productCheckedDetail',
        name: '已审核产品详情',
        component: _import('productCheck/productCheckedDetail'),
        meta: { breadNumber:1, notKeepAlive: true }
      }
    
    ]
  },
  
  // 上线审核
  {
    path: '/',
    component: Layout,
    // redirect: '/goLiveCheck/index',
    // name: '企业审核',
    noDropdown: true,
    // icon: 'goLive',
    children: [
      // { path: 'enterprise_check_pending', name: '待审核列表', component: _import('enterpriseCheck/enterprise_check_pending') }
      { path: 'goLiveCheck', name: '上线审核', component: _import('goLiveCheck/index') },
      {
        path: 'goLiveCheck/goLiveCheckDetail',
        name: '上线待审详情',
        component: _import('goLiveCheck/goLiveCheckDetail'),
        meta: { breadNumber:1, notKeepAlive: true }
      },
      {
        path: 'goLiveCheck/goLiveCheckedDetail',
        name: '上线已审核详情',
        component: _import('goLiveCheck/goLiveCheckedDetail'),
        meta: { breadNumber:1, notKeepAlive: true }
      }
    
    ]
  },
  
  // 资料上传
  {
    path: '/',
    component: Layout,
    redirect: 'noredirect',
    name: '资料上传',
    // icon: 'upload',
    children: [
      // { path: 'enterprise_check_pending', name: '待审核列表', component: _import('enterpriseCheck/enterprise_check_pending') }
      { path: 'sdkUpload', name: 'SDK上传', component: _import('infoUpload/sdkUpload/index') },
      { path: 'developDoc', name: '产品开发文档', component: _import('infoUpload/developDoc') },
      { path: 'designSpecification', name: 'UI设计规则', component: _import('infoUpload/designSpecification') }
    
    ]
  },
  
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'Example',
  //   icon: 'zujian',
  //   children: [
  //     { path: 'index', name: 'Form', icon: 'zonghe', component: _import('page/form') }
  //   ]
  // },
  //
  // {
  //   path: '/table',
  //   component: Layout,
  //   redirect: '/table/index',
  //   icon: 'tubiao',
  //   noDropdown: true,
  //   children: [{ path: 'index', name: 'Table', component: _import('table/index'), meta: { role: ['admin'] }}]
  // },
  
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

