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
                redirect: '/auditManagement/enterprisePending',
                children: [
                    /*{
                        path: '',
                        name: 'enterprisePending',//待审核企业
                        component: _import('auditManagement/enterprisePending')
                    },*/
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
                        meta: {breadNumber: 1, notKeepAlive: true,key:'enterprisePending'}
                    },
                    {
                        path: 'productToAudit',
                        name: '产品审核页面',
                        component: _import('auditManagement/productToAudit'),
                        meta: {breadNumber: 1, notKeepAlive: true,key:'productPending'}
                    },
                    {
                        path: 'goLiveToAudit',
                        name: '上线申请审核页面',
                        component: _import('auditManagement/goLiveToAudit'),
                        meta: {breadNumber: 1, notKeepAlive: true,key:'goLivePending'}
                    }
                ]
            },
            {
                path: 'productManagement',
                name: '产品管理',
                component: _import('productManagement/index'),
                redirect: '/productManagement/onlineProducts',
                children: [
                    /*{
                        path: '',
                        name: 'onlineProducts',
                        component: _import('productManagement/onlineProducts'),
                    },*/
                    {
                        path: 'onlineProducts',
                        name: 'onlineProducts',
                        component: _import('productManagement/onlineProducts'),
                    },
                    {
                        path: 'onlineProductDetail',
                        name: 'onlineProductDetail',
                        component: _import('productManagement/onlineProductDetail'),
                        meta: {key:'onlineProducts'}
                    }
                ]
            },
            {
                path: 'typeManagement',
                name: '品类管理',
                component: _import('typeManagement/index'),
                redirect: '/typeManagement/existedCategory',
                children: [
                    /*{
                        path: '',
                        name: 'existedCategory',
                        component: _import('typeManagement/existedCategory'),
                        meta: {breadNumber: 1, notKeepAlive: true}
                    },*/
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
                        meta: {breadNumber: 1, notKeepAlive: true,key : 'existedCategory'}
                    },
                    {
                        path: 'addCategoryDetail',
                        name: 'addCategoryDetail',
                        component: _import('typeManagement/addCategoryDetail'),
                        meta: {breadNumber: 1, notKeepAlive: true,key : 'existedCategory'}
                    },
                    {
                        path: 'deviceDetail',
                        name: 'deviceDetail',
                        component: _import('typeManagement/deviceDetail'),
                        meta: {breadNumber: 1, notKeepAlive: true,key : 'deviceManager'}
                    },
                    {
                        path: 'addDevice',
                        name: 'addDevice',
                        component: _import('typeManagement/addDevice'),
                        meta: {breadNumber: 1, notKeepAlive: true,key : 'deviceManager'}
                    }
                ]
            },
            {
                path: 'documentManagement',
                name: '资料管理',
                component: _import('documentManagement/index'),
                redirect: '/documentManagement/wifi',
                children: [
                    /*{
                        path:'',
                        name:'wifi',
                        component:_import('documentManagement/wifi')
                    },*/
                    {
                        path:'wifi',
                        name:'wifi',
                        component:_import('documentManagement/wifi')
                    },
                    {
                        path:'zigbee',
                        name:'zigbee',
                        component:_import('documentManagement/zigbeeAndBluetooth'),
                    },
                    {
                        path:'bluetooth',
                        name:'bluetooth',
                        component:_import('documentManagement/zigbeeAndBluetooth'),
                    },
                    {
                        path:'development',
                        name:'development',
                        component:_import('documentManagement/developmentAndUidesign')
                    },
                    {
                        path:'uiDesign',
                        name:'uiDesign',
                        component:_import('documentManagement/developmentAndUidesign')
                    }
                ]
            },
            {
                path:'enterpriseManagement',
                name:'企业管理',
                component:_import('enterpriseManagement/index'),
                redirect: '/enterpriseManagement/list',
                children:[
                    {
                        path:'list',
                        name:'list',
                        component:_import('enterpriseManagement/list')
                    },
                    {
                        path:'enterpriseInfo',
                        name:'enterpriseInfo',
                        component:_import('enterpriseManagement/enterpriseInfo')
                    },
                    {
                        path:'enterpriseProducts',
                        name:'enterpriseProducts',
                        component:_import('enterpriseManagement/enterpriseProducts')
                    }
                ]
            }
        ]
    },

    {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})

