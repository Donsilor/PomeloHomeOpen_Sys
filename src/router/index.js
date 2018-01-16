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
    {path: '/login', component: _import('login/index'), hidden: true},
    {path: '/404', component: _import('404'), hidden: true},
    /*{
     path: '/',
     component: Layout,
     redirect: '/auditManagement',
     name: 'Dashboard',
     hidden: true,
     children: [
     {path: 'dashboard', component: _import('dashboard/index')},
     ]
     },*/

    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'auditManagement',
                name: '审核管理',
                component: _import('auditManagement/index'),
                children: [
                    {
                        path: 'enterpriseCheckPending',
                        name: 'checkPending',
                        component: _import('auditManagement/enterpriseCheckPending')
                    },
                    {
                        path: 'enterpriseChecked',
                        name: 'checked',
                        component: _import('auditManagement/enterpriseChecked')
                    },
                    {
                        path: 'auditManagement/enterpriseCheckedDetail',
                        name: '已审核详情',
                        component: _import('auditManagement/enterpriseCheckedDetail'),
                        meta: {breadNumber: 1, notKeepAlive: true}
                    },
                    {
                        path: 'auditManagement/enterpriseCheckDetail',
                        name: '待审核详情',
                        component: _import('auditManagement/enterpriseCheckDetail'),
                        meta: {breadNumber: 1, notKeepAlive: true}
                    },
                    {}
                ]
            },
            {
                path: 'productManagement',
                name: '产品管理',
                //component: _import(''),
                children: []
            },
            {
                path: 'typeManagement',
                name: '品类管理',
                //component: _import(''),
                children: []
            },
            {
                path: 'profileManagement',
                name: '资料管理',
                //component: _import(''),
                children: []
            }
        ]
    },

    // 产品审核
    /*{
     path: '/',
     component: Layout,
     // redirect: '/productCheck/index',
     // name: '企业审核',
     noDropdown: true,
     // icon: 'product',
     children: [
     // { path: 'enterprise_check_pending', name: '待审核列表', component: _import('auditManagement/enterprise_check_pending') }
     {path: 'productCheck', name: '产品审核', component: _import('productCheck/index')},
     {
     path: 'productCheck/productCheckDetail',
     name: '待审产品详情',
     component: _import('productCheck/productCheckDetail'),
     meta: {breadNumber: 1, notKeepAlive: true}
     },
     {
     path: 'productCheck/productCheckedDetail',
     name: '已审核产品详情',
     component: _import('productCheck/productCheckedDetail'),
     meta: {breadNumber: 1, notKeepAlive: true}
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
     // { path: 'enterprise_check_pending', name: '待审核列表', component: _import('auditManagement/enterprise_check_pending') }
     {path: 'goLiveCheck', name: '上线审核', component: _import('goLiveCheck/index')},
     {
     path: 'goLiveCheck/goLiveCheckDetail',
     name: '上线待审详情',
     component: _import('goLiveCheck/goLiveCheckDetail'),
     meta: {breadNumber: 1, notKeepAlive: true}
     },
     {
     path: 'goLiveCheck/goLiveCheckedDetail',
     name: '上线已审核详情',
     component: _import('goLiveCheck/goLiveCheckedDetail'),
     meta: {breadNumber: 1, notKeepAlive: true}
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
     // { path: 'enterprise_check_pending', name: '待审核列表', component: _import('auditManagement/enterprise_check_pending') }
     {path: 'sdkUpload', name: 'SDK上传', component: _import('infoUpload/sdkUpload/index')},
     {path: 'developDoc', name: '产品开发文档', component: _import('infoUpload/developDoc')},
     {path: 'designSpecification', name: 'UI设计规则', component: _import('infoUpload/designSpecification')}

     ]
     },*/

    {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})

