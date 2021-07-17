// console.log(window.location.port)
// 接口名再不同环境下对应得规则
// 本地：服务名+版本+模块（有些可能没有）+方法名
// 开发环境：api+平台服务层+服务名+版本+模块（有些可能没有）+方法名
import { PROXY_FLAG } from '@/assets/js/const'
// 所有api接口统一再这里配置
export const API_VERSION = '/v1' // api接口版本
const MODEL_SERVICE = '/paas-business' // 其他模块名称统一
const AUTH_SERVICE = '/pass-central-authentication' // 鉴权
const FILE_SERVICE = '/file-service'
const API_PLATFORM = '/api/paas-platform'// 平台服务层（接口的前缀）
const WEB_SERVER = '/api2/category-model-service'
const BASE_URL =  WEB_SERVER + API_VERSION
const AUTH_BASE_URL = API_PLATFORM + AUTH_SERVICE
const FILE_BASE_URL = API_PLATFORM + FILE_SERVICE + API_VERSION
// 代理标记肯定是要的，在本地开发才能识别不同服务跳转到不同的本地服务器
// 默认的代理标记都是空的
const PROXY_NAME = PROXY_FLAG.DEFAULT
if (process.env.NODE_ENV !== 'production' && location.port === '8080') {
  // 端口是8080的时候是本地开发转发到每个人的不同机器的，需要根据标记来转发
  Object.assign(PROXY_NAME, PROXY_FLAG.LOCAL)
}
// 产品服务设备模块
export const DEVICE_MANAGE_SERVICE_API = {
  DEVICE_BATCH_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/deviceManage/device/batchList`, // 查询批次设备列表
  DEVICE_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/deviceManage/device/list`, // 查询设备列表
  DEVICE_ENABLE: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/deviceManage/device/enable`, // 启用设备
  DEVICE_DISABLE: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/deviceManage/device/disable`, // 禁用设备
  DEVICE_DELETE: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/deviceManage/device/delete`, // 删除设备
  DEVICE_ADD: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/deviceManage/device/add`, // 添加设备
  DEVICE_DETAIL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/deviceManage/device/detail`, // 设备详情
  ERROR_DEVICE_BATCH_DETAIL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/deviceManage/device/batch/errorDetail`, // 批次设备非法数据详情
  DEVICE_BATCH_DETAIL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/deviceManage/device/batch/detail`, // 批次设备详情
  DEVICE_UPDATE: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/deviceManage/device/update`, // 修改设备
  DEVICE_STATUS: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/deviceManage/device/getStatus`, // 添加批次设备时候查询添加状态
  DEVICE_TOPIC: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/deviceManage/device/getTopic`, // 获取topic列表,
  DEVICE_IMPORT_FILE: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/device/import  `, // 导入文件
  MESSAGE_ISSUED: `${BASE_URL}/instruct/messageIssued`, // 下发指令,
  SUB_DEVICE_PAGE: `${BASE_URL}/deviceManage/device/getSubDeviceIdListPage`, // 获取子设备列表
  ADD_SUB_DEVICE: `${BASE_URL}/deviceManage/device/topo/add`, // 添加子设备
  SUB_DEVICE_PRODUCT_LIST: `${BASE_URL}/productManage/product/getGatewayProductList`, // 获取产品列表（网关设备）
  SUB_DEVICE_DETAIT: `${BASE_URL}/deviceManage/device/detail`, // 子设备详情
  SUB_DEVICE_UNBIND: `${BASE_URL}/deviceManage/device/unbind` // 子设备解绑
}
// 产品服务物模型模块
export const MODEL_MANAGE_SERVICE_API = {
  THING_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/modelManage/getThingModel`, // 产品物模型
  UNITS: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/units`, // 编辑页面 fixed
  DRAFT_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/modelManage/getDraftModel`, //
  MODEL_VERSIONS: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/modelManage/getModelVersions`, //
  MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/modelManage/model`, // 对模型的添加删除等操作
  PUSLISH_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/modelManage/publishModel`, //
  UPLOAD_PATH: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/modelManage/upload`// 文件的上传路径
}
// 产品服务产品模块
export const PRODUCE_MANAGE_SERVICE_API = {
  LIST_PRODUCT: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/productManage/product/listProduct`, // 产品选择列表
  PRODUCT_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/productManage/product/list`, // 产品列表
  PRODUCT_STOP: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/productManage/product/disable`, // 禁用产品
  PRODUCT_START: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/productManage/product/enable`, // 启用产品
  PRODUCT_DELETE: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/productManage/product/delete`, // 删除产品
  PRODUCT_ADD: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/productManage/product/add`, // 添加产品
  CATEGORY_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/list`, // 获取品类列表
  PRODUCT_DETAIL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/productManage/product/details`, // 根据ID查询列表
  PRODUCT_EDIT: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/productManage/product/edit`, // 根据ID查询列表
  PRODUCT_PUBLISH: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/productManage/product/publish`, // 发布产品
  PRODUCT_UNPUBLISH: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/productManage/product/unPublish`, // 撤销产品
  GET_GROUP_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/productManage/signGroup/category`, // 获取分组标签
  GET_BRAND: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/productManage/brand/getAll` // 获取品牌列表
}
// 产品服务topic模块
export const TOPIC_MANAGE_SERVICE_API = {
  TOPIC_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/topicManage/topicList`, // 获取topic列表
  TOPIC: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/topicManage/topic` // topic操作（添加、删除）
}
// 产品数据解析模块
export const ANALYSIS_DATA_SERVICE_API = {
  TOPIC_TYPE: `${BASE_URL}/productManage/script/topicType`, // 获取topic类型
  DEVICE_NAME: `${BASE_URL}/productManage/script/deviceName`, // 获取deviceName
  TOPIC_CLASS: `${BASE_URL}/productManage/script/topicClass`, // 获取topic
  QUERY: `${BASE_URL}/scriptManage/script/query`, // 查询脚本
  ADD: `${BASE_URL}/scriptManage/script/add`, // 保存脚本
  HANDLE: `${BASE_URL}/scriptManage/script/handle` // 执行脚本
}
// 品类管理
export const CATEGORY_MANAGE_SERVICE_API = {
  GET_CATEGORY_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/list`, // 获取大品类列表   fixed 
  GET_ALL_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/getAllCategoryDetails`, // 获取大品类列表(新)
  DETAIL_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/detail`, // 获取大品类详情  fixed
  ADD_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/add`, // 添加大品类列表   fixed
  EDIT_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/edit`, // 编辑大品类列表 fixed
  DELETE_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/delete`, // 删除大品类列表 fixed

  // 子品类
  GET_SUB_CATEGORY_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/subCategory/list`,
  ADD_SUB_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/subCategory/add`,
  EDIT_SUB_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/subCategory/edit`,
  DEL_SUB_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/subCategory/delete`,
  SUB_CATEGORY_DETAIL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/subCategory/detail`,
  BRAND_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/subCategory/getAllBrand`,

  GET_PRIMARY_CATEGORY_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/primaryCategory`, // 获取一级品类列表 √
  ADD_PRIMARY_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/addPri`, // 添加一级品类列表 √
  EDIT_PRIMARY_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/editPri`, // 编辑一级品类列表 √
  DELETE_PRIMARY_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/deletePri`, // 删除一级品类列表 √
  // GET_DETAIL_PRIMARY_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/detail`, // 获取一级品类详情
  GET_SELECT_PRIMARY_CATEGORY_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/priList`, // 获取一级品类下拉列表

  //  大品类模板
  UPLOAD: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/upload`, // 上传物模型,
  GET_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/getModel`, // 获取物模型,
  ADD_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/addModel`, // 添加物模型,
  EDIT_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/editModel`, // 编辑物模型,
  DELETE_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/deleteModel`, // 删除子品类模板
  GET_MODELS: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/lists`, // 批量获取大品类物模型（基本信息+图片）

  // 子品类模板
  SUB_UPLOAD: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/subCategory/upload`, // 上传物模型,
  SUB_GET_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/subCategory/getModel`, // 获取物模型,
  SUB_ADD_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/subCategory/addModel`, // 添加物模型,
  SUB_EDIT_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/subCategory/editModel`, // 编辑物模型,
  SUB_DELETE_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/subCategory/deleteModel`, // 删除子品类模板
  SUB_GET_MODELS: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/subCategory/lists`, // 批量获取子品类（基本信息+图片）

  // 二级子品类
  GET_SECOND_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryParent/subCategory/getModel` // 获取二级子品类物模型
}