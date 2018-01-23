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
        redirect: '/auditManagement',
        children: [
            {
                path: 'auditManagement',
                name: '审核管理',
                component: _import('auditManagement/index'),
                children: [
                    {
                        path: '',
                        name: 'enterprisePending',//待审核企业
                        component: _import('auditManagement/enterprisePending')
                    },
                    {
                        path: 'enterprisePending',
                        name: 'enterprisePending',//待审核企业
                        component: _import('auditManagement/enterprisePending')
                    },
                    {
                        path: 'enterpriseAudited',
                        name: 'enterpriseAudited',//已审核企业
                        component: _import('auditManagement/enterpriseAudited')
                    },
                    {
                        path: 'productPending',
                        name: 'productPending',//待审核产品
                        component: _import('auditManagement/productPending')
                    },
                    {
                        path: 'productAudited',
                        name: 'productAudited',//已审核产品
                        component: _import('auditManagement/productAudited')
                    },
                    {
                        path: 'goLivePending',
                        name: 'goLivePending',//待审核上线申请
                        component: _import('auditManagement/goLivePending')
                    },
                    {
                        path: 'goLiveAudited',
                        name: 'goLiveAudited',//已审核上线申请
                        component: _import('auditManagement/goLiveAudited')
                    },
                    {
                        path: 'enterpriseToAudit',
                        name: '企业审核页面',
                        component: _import('auditManagement/enterpriseToAudit'),
                        meta: {breadNumber: 1, notKeepAlive: true}
                    },
                    {
                        path: 'productToAudit',
                        name: '产品审核页面',
                        component: _import('auditManagement/productToAudit'),
                        meta: {breadNumber: 1, notKeepAlive: true}
                    },
                    {
                        path: 'goLiveToAudit',
                        name: '上线申请审核页面',
                        component: _import('auditManagement/goLiveToAudit'),
                        meta: {breadNumber: 1, notKeepAlive: true}
                    }
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
                component: _import('typeManagement/index'),
                children: [
                    {
                        path: '',
                        name: 'existedCategory',
                        component: _import('typeManagement/existedCategory'),
                        meta: {breadNumber: 1, notKeepAlive: true}
                    },
                    {
                        path: 'existedCategory',
                        name: 'existedCategory',
                        component: _import('typeManagement/existedCategory'),
                        meta: {breadNumber: 1, notKeepAlive: true}
                    },
                    {
                        path: 'deviceManager',
                        name: 'deviceManager',
                        component: _import('typeManagement/deviceManager'),
                        meta: {breadNumber: 1, notKeepAlive: true}
                    },
                    {
                        path: 'categoryDetail',
                        name: 'categoryDetail',
                        component: _import('typeManagement/categoryDetail'),
                        meta: {breadNumber: 1, notKeepAlive: true}
                    }
                ]
            },
            {
                path: 'documentManagement',
                name: '资料管理',
                component: _import('documentManagement/index'),
                children: [
                    {
                        path:'',
                        name:'wifi',
                        component:_import('documentManagement/wifi')
                    },
                    {
                        path:'wifi',
                        name:'wifi',
                        component:_import('documentManagement/wifi')
                    }
                ]
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

