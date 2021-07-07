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
  { path: '/resetpsw', component: _import('login/resetpsw'), hidden: true },
  /* {
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
          /* {
                        path: '',
                        name: 'enterprisePending',//待审核企业
                        component: _import('auditManagement/enterprisePending')
                    },*/
          {
            path: 'enterprisePending',
            name: 'enterprisePending', // 待审核企业
            component: _import('auditManagement/enterprisePending')
          },
          {
            path: 'enterpriseAudited',
            name: 'enterpriseAudited', // 已审核企业
            component: _import('auditManagement/enterpriseAudited')
          },
          {
            path: 'productPending',
            name: 'productPending', // 待审核产品
            component: _import('auditManagement/productPending')
          },
          {
            path: 'productAudited',
            name: 'productAudited', // 已审核产品
            component: _import('auditManagement/productAudited')
          },
          {
            path: 'goLivePending',
            name: 'goLivePending', // 待审核H5控制页申请
            component: _import('auditManagement/goLivePending')
          },
          {
            path: 'goLiveAudited',
            name: 'goLiveAudited', // 已审核H5控制页申请
            component: _import('auditManagement/goLiveAudited')
          },
          {
            path: 'firmwarePending',
            name: 'firmwarePending', // 待审核固件申请
            component: _import('auditManagement/firmwarePending')
          },
          {
            path: 'firmwareAudited',
            name: 'firmwareAudited', // 已审核固件申请
            component: _import('auditManagement/firmwareAudited')
          },
          {
            path: 'firmwareToAudit',
            name: '固件上线申请页面',
            component: _import('auditManagement/firmwareToAudit'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'firmwarePending', isdetail: true }
          },
          {
            path: 'enterpriseToAudit',
            name: '企业审核页面',
            component: _import('auditManagement/enterpriseToAudit'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'enterprisePending', isdetail: true }
          },
          {
            path: 'productToAudit',
            name: '产品审核页面',
            component: _import('auditManagement/productToAudit'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'productPending', isdetail: true }
          },
          {
            path: 'goLiveToAudit',
            name: 'H5上线申请审核页面',
            component: _import('auditManagement/goLiveToAudit'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'goLivePending', isdetail: true }
          }
        ]
      },
      {
        path: 'productManagement',
        name: '产品管理',
        component: _import('productManagement/index'),
        redirect: '/productManagement/onlineProducts',
        children: [
          /* {
                        path: '',
                        name: 'onlineProducts',
                        component: _import('productManagement/onlineProducts'),
                    },*/
          {
            path: 'onlineProducts',
            name: 'onlineProducts',
            component: _import('productManagement/onlineProducts')
          },
          {
            path: 'offlineProducts',
            name: 'offlineProducts',
            component: _import('productManagement/offlineProducts')
          },
          {
            path: 'onlineProductDetail',
            name: 'onlineProductDetail',
            component: _import('productManagement/onlineProductDetail'),
            meta: { key: 'onlineProducts', isdetail: true }
          },
          {
            path: 'offlineProductDetail',
            name: 'offlineProductDetail',
            component: _import('productManagement/onlineProductDetail'),
            meta: { key: 'offlineProducts', isdetail: true }
          }
        ]
      },
      {
        path: 'typeManagement',
        name: '品类管理',
        component: _import('typeManagement/index'),
        redirect: '/typeManagement/existedCategory',
        children: [
          /* {
                        path: '',
                        name: 'existedCategory',
                        component: _import('typeManagement/existedCategory'),
                        meta: {breadNumber: 1, notKeepAlive: true}
                    },*/
          {
            path: 'existedCategory',
            name: 'existedCategory',
            component: _import('typeManagement/existedCategory'),
            meta: { breadNumber: 1, notKeepAlive: true }
          },
          {
            path: 'bigCategory',
            name: 'bigCategory',
            component: _import('typeManagement/bigCategory'),
            meta: { breadNumber: 1, notKeepAlive: true }
          },
          {
            path: 'appCategory',
            name: 'appCategory',
            component: _import('typeManagement/appCategory'),
            meta: { breadNumber: 1, notKeepAlive: true }
          },
          {
            path: 'deviceManager',
            name: 'deviceManager',
            component: _import('typeManagement/deviceManager'),
            meta: { breadNumber: 1, notKeepAlive: true }
          },
          {
            path: 'channelManager',
            name: 'channelManager',
            component: _import('typeManagement/channelManager')
          },
          {
            path: 'networkManager',
            name: 'networkManager',
            component: _import('typeManagement/networkManager')
          },
          {
            path: 'channelDetail',
            name: 'channelDetail',
            component: _import('typeManagement/channelDetail'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'channelManager', isdetail: true }
          },
          {
            path: 'voicePlatform',
            name: 'voicePlatform',
            component: _import('typeManagement/voicePlatform')
          },
          {
            path: 'technology',
            name: 'technology',
            component: _import('typeManagement/technology')
          },
          {
            path: 'addNetwork',
            name: 'addNetwork',
            component: _import('typeManagement/addNetwork'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'networkManager', isdetail: true }
          },
          {
            path: 'addVoicePlatform',
            name: 'addVoicePlatform',
            component: _import('typeManagement/addVoicePlatform'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'voicePlatform', isdetail: true }
          },
          {
            path: 'categoryDetail',
            name: 'categoryDetail',
            component: _import('typeManagement/categoryDetail'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'existedCategory', isdetail: true }
          },
          {
            path: 'addCategoryDetail',
            name: 'addCategoryDetail',
            component: _import('typeManagement/addCategoryDetail'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'existedCategory' }
          },
          {
            path: 'appCategoryDetail',
            name: 'appCategoryDetail',
            component: _import('typeManagement/appCategoryDetail'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'appCategory' }
          },
          {
            path: 'deviceDetail',
            name: 'deviceDetail',
            component: _import('typeManagement/deviceDetail'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'deviceManager', isdetail: true }
          },
          {
            path: 'addDevice',
            name: 'addDevice',
            component: _import('typeManagement/addDevice'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'deviceManager' }
          },
          {
            path: 'addBigCategory',
            name: 'addBigCategory',
            component: _import('typeManagement/addBigCategory'),
            meta: { breadNumber: 1, notKeepAlive: true, key: 'bigCategory', isdetail: true }
          },
          {
            path: 'manufacturer',
            name: 'manufacturer',
            component: _import('typeManagement/manufacturer')
          },
          {
            path: 'addTag',
            name: 'addTag',
            component: _import('typeManagement/addTag')
          },
          {
            path: 'cardManage',
            name: 'cardManage',
            component: _import('typeManagement/cardManage')
          },
          {
            path: 'addCard',
            name: 'addCard',
            component: _import('typeManagement/addCard')
          }, 
          {
            path: 'panelPage',
            name: 'panelPage',
            component: _import('typeManagement/panelPage')
          },
          {
            path: 'screen',
            name: 'screen',
            component: _import('ScreenManageMent/Index')
          },
          {
            path: 'screenEdite',
            name: 'screenEdite',
            component: _import('ScreenManageMent/ScreenEdite')
          }
        ]
      },
      {
        path: 'documentManagement',
        name: '资料管理',
        component: _import('documentManagement/index'),
        redirect: '/documentManagement/wifi',
        children: [
          /* {
                        path:'',
                        name:'wifi',
                        component:_import('documentManagement/wifi')
                    },*/
          {
            path: 'wifi',
            name: 'wifi',
            component: _import('documentManagement/wifi')
          },
          {
            path: 'zigbee',
            name: 'zigbee',
            component: _import('documentManagement/zigbeeAndBluetooth')
          },
          {
            path: 'bluetooth',
            name: 'bluetooth',
            component: _import('documentManagement/zigbeeAndBluetooth')
          },
          {
            path: 'development',
            name: 'development',
            component: _import('documentManagement/developmentAndUidesign')
          },
          {
            path: 'enterprise',
            name: 'enterprise',
            component: _import('documentManagement/enterpriseDoc')
          }
        ]
      },
      {
        path: 'enterpriseManagement',
        name: '企业管理',
        component: _import('enterpriseManagement/index'),
        redirect: '/enterpriseManagement/list',
        children: [
          {
            path: 'list',
            name: 'list',
            component: _import('enterpriseManagement/list')
          },
          { 
            path: 'enterpriseInfo',
            name: 'enterpriseInfo',
            component: _import('enterpriseManagement/enterpriseInfo')
          },
          {
            path: 'enterpriseProducts',
            name: 'enterpriseProducts',
            component: _import('enterpriseManagement/enterpriseProducts')
          }
        ]
      },
      {
        path: 'authorityManagement',
        name: '权限管理',
        component: _import('authorityManagement/index'),
        redirect: '/authorityManagement/authority/0',
        children: [
          {
            path: 'authority/:id',
            name: 'authority',
            component: _import('authorityManagement/authorityList')
          }
        ]
      },
      {
        path: 'configManagement',
        name: '配置管理',
        component: _import('configManagement/index'),
        redirect: '/configManagement/deviceFault',
        children: [
          {
            path: 'deviceFault',
            name: 'deviceFault',
            component: _import('configManagement/deviceFault')
          },
          {
            path: 'eventMsg',
            name: 'eventMsg',
            component: _import('configManagement/eventMsg')
          },
          {
            path: 'appConfig',
            name: 'appConfig',
            component: _import('configManagement/appConfig')
          },{
            path: 'h5Config',
            name: 'h5Config',
            component: _import('configManagement/h5Config')
          },{
            path: 'envParamsConfig',
            name: 'envParamsConfig',
            component: _import('configManagement/envParamsConfig')
          },{
            path: 'scoreConfig',
            name: 'scoreConfig',
            component: _import('configManagement/scoreConfig')
          },{
            path: 'colorPicConfig',
            name: 'colorPicConfig',
            component: _import('configManagement/colorPicConfig')
          }
        ]
      },
      {
        path: 'ruleEngine',
        name: '场景模板',
        component: _import('ruleEngine/index'),
        redirect: '/ruleEngine/template',
        children: [
          {
            path: 'template',
            name: 'template',
            component: _import('ruleEngine/template')
          },
          {
            path: 'scene',
            name: 'scene',
            component: _import('ruleEngine/scene')
          },
          {
            path: 'category',
            name: 'category',
            component: _import('ruleEngine/category'),
          },
          {
            path: 'categoryEditPage',
            name: 'categoryEditPage',
            component: _import('ruleEngine/categoryEditPage'),
            meta: {breadNumber: 1, notKeepAlive: true, key: 'category', isdetail: true}
          },
          {
            path: 'sonCategory',
            name: 'sonCategory',
            component: _import('ruleEngine/sonCategory'),
            meta: {breadNumber: 1, notKeepAlive: true, key: 'category', isdetail: true}
          },
          {
            path: 'sonCategoryEditPage',
            name: 'sonCategoryEditPage',
            component: _import('ruleEngine/sonCategoryEditPage'),
            meta: {breadNumber: 1, notKeepAlive: true, key: 'category', isdetail: true}
          },
        ]
      },
      {
        path: 'imageResource',
        name: '资源管理',
        component: _import('imageResource/index'),
        redirect: '/imageResource/parentTemplate',
        children: [
          {
            path: 'parentTemplate',
            name: 'parentTemplate',
            component: _import('imageResource/parentTemplate')
          },
          {
            path: 'template',
            name: 'template',
            component: _import('imageResource/template'),
            meta: {breadNumber: 1, notKeepAlive: true, key: 'parentTemplate', isdetail: true}
          },
          {
            path: 'imageType',
            name: 'imageType',
            component: _import('imageResource/imageType'),
            meta: {breadNumber: 1, notKeepAlive: true, key: 'parentTemplate', isdetail: true}
          },
        ]
      },
      {
        path: 'screenManagement',
        name: '屏幕配置管理',
        component: _import('ScreenManageMent/main'),
        redirect: '/screenManagement/screen',
        children: [
          {
            path: 'screen',
            name: 'screen',
            component: _import('ScreenManageMent/Index')
          },
          {
            path: 'screenEdite',
            name: 'screenEdite',
            component: _import('ScreenManageMent/ScreenEdite')
          }
        ]
      },
      {
        path: 'messageDistribution',
        name: '消息分发',
        component: _import('messageDistribution/index'),
        redirect: '/messageDistribution/list',
        children: [
          {
            path: 'list',
            name: 'list',
            component: _import('messageDistribution/list')
          }
        ]
      },
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

