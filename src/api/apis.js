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
const BASE_URL = API_PLATFORM + MODEL_SERVICE + API_VERSION
const AUTH_BASE_URL = API_PLATFORM + AUTH_SERVICE
const FILE_BASE_URL = API_PLATFORM + FILE_SERVICE + API_VERSION
// 代理标记肯定是要的，在本地开发才能识别不同服务跳转到不同的本地服务器
// 默认的代理标记都是空的
const PROXY_NAME = PROXY_FLAG.DEFAULT
if (process.env.NODE_ENV !== 'production' && location.port === '8080') {
  // 端口是8080的时候是本地开发转发到每个人的不同机器的，需要根据标记来转发
  Object.assign(PROXY_NAME, PROXY_FLAG.LOCAL)
}
// 规则引擎模块
export const RULE_ENGINE_API = {
  ADD: `${BASE_URL}${PROXY_NAME.RULES_SERVICE}/rules/scene/add`, // 添加
  SCENE_RULES: `${BASE_URL}${PROXY_NAME.RULES_SERVICE}/rules/scene/rules` // 规则列表
}
// 数据统计模块
export const DATA_SERVICE_API = {
  TASK_LIST: `${BASE_URL}${PROXY_NAME.DATA_ANALYSIS_SERVICE}/dataAnalysis/map/taskList`, // 获取产品对应的统计任务列表
  MAP: `${BASE_URL}${PROXY_NAME.DATA_ANALYSIS_SERVICE}/dataAnalysis/map/map`, // 获取对应统计任务数据
  DOWNLOAD_PATH: `${BASE_URL}${PROXY_NAME.DATA_ANALYSIS_SERVICE}/dataAnalysis/map/download`, // 文件下载地址
  TASK_TASKLIST: `${BASE_URL}/dataAnalysis/task/taskList`, // 任务管理任务列表
  EDIT_TASK: `${BASE_URL}/dataAnalysis/task/exitTask`, // 任务修改
  ADD_TASK: `${BASE_URL}/dataAnalysis/task/addTask`, // 添加任务
  DEL_TASK: `${BASE_URL}/dataAnalysis/task/delTask`, // 删除任务
  HOME_MAP: `${BASE_URL}/dataAnalysis/homePage/map`, // 获取首页各省所有/在线 设备数量
  TASK_STATUS: `${BASE_URL}/dataAnalysis/task/taskStatus`, // 任务得开启关闭
  TASK_DETAIL: `${BASE_URL}/dataAnalysis/task/taskDetail`, // 任务详情
  TASK_TIMER_MANUAL: `${BASE_URL}/dataAnalysis/timer/manual`, // 手动触发任务
  TIMER_CHECK: `${BASE_URL}/dataAnalysis/timer/check`, // 手动触发任务前进行检查
  TASK_PRODUCT_INFO: `${BASE_URL}/dataAnalysis/map/taskProductInfo`, // 存在统计任务的产品信息
  TASK_NAME: `${BASE_URL}/dataAnalysis/map/taskName` // 任务名称模糊查询

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
  UNITS: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/modelManage/units`, // 编辑页面
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

// 影子设备服务模块
export const DEVICE_SHADOW_SERVICE_API = {
  DEVICE_SHADOWN: `${BASE_URL}${PROXY_NAME.SHADOW_SERVICE}/getDeviceShadow`, // 获取物模型运行状态列表数据
  HISTORY_PROPERTIES: `${BASE_URL}${PROXY_NAME.SHADOW_SERVICE}/getHistoryProperties`, // 获取某个运行状态的历史数据
  DEVICE_SERVICE_LOG: `${BASE_URL}${PROXY_NAME.SHADOW_SERVICE}/getDeviceServiceLogList`, // 设备服务运行状态数据
  GET_DEVICE_EVENT_LOG_LIST: `${BASE_URL}${PROXY_NAME.SHADOW_SERVICE}/getDeviceEventLogList` // 获取事件调用列表
}

// 日志服务模块
export const LOG_SERVICE_API = {
  ONLINE_LOG: `${BASE_URL}${PROXY_NAME.LOG_SERVICE}/logDeviceStatusList`, // 获取产品/设备上下线日志
  PRODUCT_LOG: `${BASE_URL}${PROXY_NAME.LOG_SERVICE}/logDeviceList`, // 查询设备日志
  LOG_DEVICE: `${BASE_URL}${PROXY_NAME.LOG_SERVICE}/logDevice`, // 获取日志详情
  DEVICE_COUNT: `${BASE_URL}${PROXY_NAME.LOG_SERVICE}/home/device/count` // 首页获取设备数量，活跃设备数量
}

// 固件升级模块
export const OTA_SERVICE_API = {
  PRODUCT_LIST: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/productManage/product/listProduct`, // 获取产品列表
  FIRMWARE_LIST: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/firmware/getByPage`, // // 固件升级列表
  ADD_FIRMWARE: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/firmware/add`, // 新增固件
  DELETE_FIRMWARE: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/firmware/delete`, // 删除固件
  Add_STRATEGY: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/strategy/add`, // 验证固件/批量升级
  ISEXISTSTRATEGY: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/strategy/isExistStrategy`, // 升级策略验证
  GET_STRATEGY_BY_FIRMWAREID: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/strategy/getStrategyByFirmwareId`, // 获取批次管理列表
  PRODUCT_VERSION: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/product/version`, // 获取产品版本
  GET_DEVICE_BY_FIRMWAREID: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/device/getDeviceByFirmwareId`, // 通过固件ID获取设备管理列表
  GET_MODULES: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/product/getModules`, // 获取模块id根据productKey
  GET_VERSIONS_LIST: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/product/getVersions`, // 获取版本号列表
  GET_DEVICES: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/product/getDevices`, // 获取模块id根据productKey
  PROGRESS_STATUS: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/firmware/progressStatus`,
  STRATEGY_CANCLE_UPGRADE: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/strategy/cancelUpgrade`,
  FIRMWARE_DETAILS: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/firmware/details`,
  FIRMWARE_UPDATE: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/firmware/update`,
  GET_DEVICE_BY_STRATEGY_BY_ID: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/device/getDeviceByStrategyId`, // 通过批次ID获取设备管理列表
  DEVICE_CANCLE_UPGRADE: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/device/cancelUpgrade`, // 取消升级
  DEVICE_REUPGRADE: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/device/reUpgrade`, // 重升级
  STRATEGY_DETAILS: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/strategy/details`, // 获取批次信息
  STRATEGY_STATISTICS_DEVICE: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/strategy/statisticsDevice`,
  UPLOAD_PATH: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/file/upload`, //
  IMPORT: `${BASE_URL}${PROXY_NAME.OTA_SERVICE}/ota/upgrade/product/import`// 批量导入
}

//  CA证书模块
export const SAFETY_SERVICE_API = {
  CERT_QUERY_LIST: `${BASE_URL}${PROXY_NAME.SAFETY_SERVICE}/cert/query/list`, // 获取注册证书列表
  REGISCERT_INFO: `${BASE_URL}${PROXY_NAME.SAFETY_SERVICE}/cert/query/registerCertInfo`, // 获取证书详情
  BINDCERT_INFO: `${BASE_URL}${PROXY_NAME.SAFETY_SERVICE}/cert/query/bindCertInfo`, // 获取证书绑定列表详情
  CERT_INFO: `${BASE_URL}${PROXY_NAME.SAFETY_SERVICE}/cert/query/certInfo`, // 获取证书绑定列表项的详情数据
  DOWNLOAD_TEMPLATE: `${BASE_URL}${PROXY_NAME.SAFETY_SERVICE}/cert/download/template`, // csv模板
  CERT_DOWNLOAD: `${BASE_URL}${PROXY_NAME.SAFETY_SERVICE}/cert/download`, // 设备的csv模板
  CERT_REGIS: `${BASE_URL}${PROXY_NAME.SAFETY_SERVICE}/cert/register`, // 注册证书
  CERT_BIND: `${BASE_URL}${PROXY_NAME.SAFETY_SERVICE}/cert/bind`, // 绑定证书
  CERT_DELETE: `${BASE_URL}${PROXY_NAME.SAFETY_SERVICE}/cert/delete` // 删除证书
}

// 鉴权服务，角色管理
export const ROLE_SERVICE_API = {
  ROLE_LIST: `${AUTH_BASE_URL}/role/list`, // 角色列表
  ROLE: `${AUTH_BASE_URL}/role`, // 角色信息、添加、修改、删除
  BIND_MENU: `${AUTH_BASE_URL}/role/bindMenu`, // 角色绑定菜单(去掉了不用了)
  BIND_ACCESS: `${AUTH_BASE_URL}/role/bindAccess`// 为角色分配权限
}

// 鉴权服务，角色模板管理
export const ROLE_TEMPLATE_SERVICE_API = {
  ROLE_TEMPLATE: `${AUTH_BASE_URL}/rightTemplate`, // 角色模板修改、查看、删除（查看和删除路径后面直接带id）、新增
  TEMPLATE_LIST: `${AUTH_BASE_URL}/rightTemplate/list` // 角色模板列表
}

// 鉴权服务：菜单管理
export const MENU_SERVICE_API = {
  MENU_BIND_ACCESS: `${AUTH_BASE_URL}/rightMenu/bindAccess`, // 为菜单分配权限
  OWNER_MENU_LIST: `${AUTH_BASE_URL}/rightMenu/listOwnerMenu`, // 获取当前登录用户菜单列表
  RIGHT_MENU: `${AUTH_BASE_URL}/rightMenu`, // 获取指定菜单（路径上带id）、新增菜单（post带上params参数）
  MENU_LIST: `${AUTH_BASE_URL}/rightMenu/list`, // 菜单列表
  MENU_BY_ROLE_ID: `${AUTH_BASE_URL}/rightMenu/listMenuByRoleId` // 获取指定角色菜单+按钮
}

// 鉴权服务：授权管理
export const PERMISSION_SERVICE_API = {
  RIGHT_ACCESS_LIST: `${AUTH_BASE_URL}/rightAccess/list`, // 授权列表
  RIGHT_ACCESS: `${AUTH_BASE_URL}/rightAccess`, // get 根据id获取指定权限
  RIGHT_ACCESS_LIST_BY_BUTTON_ID: `${AUTH_BASE_URL}/rightAccess/listByButtonId`// get 根据btnid获取指定权限
}

// 用户管理
export const USER_SERVICE_API = {
  USER_LIST: `${AUTH_BASE_URL}/user/list`, // 用户列表
  USER: `${AUTH_BASE_URL}/user`, // POST添加用户 PUT修改用户信息 DELETE删除用户信息
  USER_BING_ROLE: `${AUTH_BASE_URL}/user/bindRole`, // 分配用户角色
  USER_INFO: `${AUTH_BASE_URL}/user/info`, // 获取用户信息
  USER_UPDATE_PASSWORD: `${AUTH_BASE_URL}/user/updatePassword`, // 修改用户密码
  USER_STATUS: `${AUTH_BASE_URL}/user/status/change`, // 启用/禁用用户
  USER_LIST_BY_USER_ID: `${AUTH_BASE_URL}/role/listByUserId`, // 根据用户来查回显角色
  USER_RESET: `${AUTH_BASE_URL}/user/resetPassword`
}

// 模块管理
export const MODEL_SERVICE_API = {
  MENU_LIST: `${AUTH_BASE_URL}/rightMenu/list`, // 菜单列表
  ADD_MENU: `${AUTH_BASE_URL}/rightMenu`, // POST 添加新增菜单 put 修改 DELETE删除
  MENU_FOR_ID: `${AUTH_BASE_URL}/rightMenu`, // get 根据id获取指定菜单
  OWNER_MENU_LIST: `${AUTH_BASE_URL}/rightMenu/listOwnerMenu`, // 获取当前登录用户菜单列表
  MENU_BIND_ACCESS: `${AUTH_BASE_URL}/rightMenu/bindButton` // 为菜单分配按钮
}

// 登录/登出
export const LOGIN_SERVICE_API = {
  LOGIN_KEY: `${AUTH_BASE_URL}/login`, // get 获取登录验证key
  LOGIN: `${AUTH_BASE_URL}/login`, // 登录
  LOGOUT: `${AUTH_BASE_URL}/logout` // get 登出
}

// 组织管理
export const ORGANIZATION_SERVICE_API = {
  LIST: `${AUTH_BASE_URL}/organization/list`, // 获取组织列表
  ORGANIZATION: `${AUTH_BASE_URL}/organization` // get -查看组织 post--新增组织 delete--删除组织 put--修改组织
}

// 按钮管理
export const BUTTONS_SERVICE_API = {
  LIST: `${AUTH_BASE_URL}/button/list`, // 获取按钮列表
  BUTTON_HANDLE: `${AUTH_BASE_URL}/button`, // post--新增按钮 delete--删除按钮 put--修改按钮 get--查看按钮
  BUTTON_BIND_ACCESS: `${AUTH_BASE_URL}/button/bindAccess`, // 按钮绑定权限
  BUTTON_LIST_BY_MENU_ID: `${AUTH_BASE_URL}/button/listByMenuId` // 根据菜单ID进行按钮回显
}
//  数据分析模块
export const DATA_ANALYST = {
  DATA_ANALYST_TASK_LOG_LIST: `${BASE_URL}/dataAnalysis/task/taskLogList`, // 任务操作日志列表
  DATA_ANALYST_TASK_LIST: `${BASE_URL}/dataAnalysis/task/taskList`, // 展示统计任务接口
  DATA_ANALYST_TIMER_LOG_LIST: `${BASE_URL}/dataAnalysis/timer/timerLogList`// 任务调度列表接口
}

// SN管理
export const SN_API = {
  SN_LIST: `${BASE_URL}/device/sn/list `, // 查询设备SN列表
  SN_DEL: `${BASE_URL}/device/sn/del`, // 删除SN
  SN_ADD: `${BASE_URL}/device/sn/add`, // 添加SN
  SN_FILE_LIST: `${BASE_URL}/device/sn/file/list`, // sn历史文件列表
  SN_FILE: `${BASE_URL}/device/sn/file`// 上传文件
}

// 品类管理
export const CATEGORY_MANAGE_SERVICE_API = {
  GET_PRIMARY_CATEGORY_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/primaryCategory`, // 获取一级品类列表 √
  ADD_PRIMARY_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/addPri`, // 添加一级品类列表 √
  EDIT_PRIMARY_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/editPri`, // 编辑一级品类列表 √
  DELETE_PRIMARY_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/deletePri`, // 删除一级品类列表 √
  GET_DETAIL_PRIMARY_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/detail`, // 获取一级品类详情
  GET_SELECT_PRIMARY_CATEGORY_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/priList`, // 获取一级品类下拉列表
  GET_SUB_CATEGORY_LIST: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/subCategory`, // 获取子品类列表
  DETAIL_SUB_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/detailSub`, // 获取子品类详情
  ADD_SUB_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/addSub`, // 添加子品类列表
  EDIT_SUB_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/editSub`, // 编辑子品类列表
  DELETE_SUB_CATEGORY: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/deleteSub`, // 删除子品类列表
  UPLOAD: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/upload`, // 上传物模型,
  GET_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/getModel`, // 获取物模型,
  ADD_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/addModel`, // 添加物模型,
  EDIT_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/editModel`, // 编辑物模型,
  DELETE_MODEL: `${BASE_URL}${PROXY_NAME.PRODUCT_SERVICE}/categoryManage/category/deleteModel` // 删除子品类模板
}

// 设备文件日志
export const FILE_SERVICE_API = {
  DEVICE_FILE_LIST: `${FILE_BASE_URL}/device/file/getDeviceFileList`, // 获取一级品类列表
  SYNC_FILE: `${FILE_BASE_URL}/device/file/syncFile`, // 同步文件
  QUERY_SYNC_INFO: `${FILE_BASE_URL}/device/file/querySyncInfo`, // 查询同步文件信息
  QUERT_UPLOAD_PROGRESS: `${FILE_BASE_URL}/device/file/queryUploadProgress`, // 查询文件上传进度查询
  SYNC_FILE_LIST: `${FILE_BASE_URL}/device/file/syncFileList`, // 同步文件列表
  QUERY_INCR_FILE_LIST: `${FILE_BASE_URL}/device/file/queryIncrFileList`, // 增量查询文件列表
  DEVICE_FILE_DOWNLOAD: `${FILE_BASE_URL}/device/file/deviceFileDownload`, // 下载文件
  DEVICE_FILE_DELETE: `${FILE_BASE_URL}/device/file/deviceFileDelete`, // 删除文件
  CHUNK_FILE_UPLOAD: `${FILE_BASE_URL}/file/upload/uploadChunk`, // OTA固件切片文件上传地址
  CHUNK_UPLOAD_CHECK: `${FILE_BASE_URL}/file/upload/checkFile`, // 检测文件是否上传
  MERGE_FILE_OTA: `${FILE_BASE_URL}/file/upload/mergeFile`, // 合并文件切片
  GET_SERVICE_ID: `${FILE_BASE_URL}/file/upload/getServiceId`, // 获取切片上传服务id
  PREVIEW_FILE_UPLOAD: `${FILE_BASE_URL}/file/upload/fileUpload`, // 普通文件上传
  DELETE_FILE: `${FILE_BASE_URL}/file/upload/deleteFile`, // 文件删除
  GET_UPLOAD_ID: `${FILE_BASE_URL}/file/upload/getUploadId`, // 获取分片上传文件夹id
  DELETE_IMG: `${FILE_BASE_URL}/file/upload/deleteFile`
}
// 引导页接口
export const APP_GUIDE_API = {
  QUERY: `${BASE_URL}/productManage/appGuide/query`, // 获取列表
  DELETE: `${BASE_URL}/productManage/appGuide/delete`, // 删除
  DETAIL: `${BASE_URL}/productManage/appGuide/detail`, // 详情
  BRANDLIST: `${BASE_URL}/productManage/brand/getAll`, // 获取品牌列表
  SUB_CATEGORY_LIST: `${BASE_URL}/productManage/appGuide/categoryName`, // 获取品类列表
  ALL_MODEL: `${BASE_URL}/productManage/appGuide/allModel`, // 根据品牌ID跟品类ID获取型号
  ADD: `${BASE_URL}/productManage/appGuide/add`, // 添加引导页
  UPDATE: `${BASE_URL}/productManage/appGuide/update`, // 更新
  DISABLE: `${BASE_URL}/productManage/appGuide/disable`// 启用 禁用
}
// 分组标签页管理接口
export const GROUP_LABEL_API = {
  QUERY: `${BASE_URL}/productManage/signGroup/query`, // 获取列表
  ADD: `${BASE_URL}/productManage/signGroup/add`, // 添加引导页
  DELETE: `${BASE_URL}/productManage/signGroup/delete`, // 删除
  DETAIL: `${BASE_URL}/productManage/signGroup/detail`, // 详情
  UPDATE: `${BASE_URL}/productManage/signGroup/update`, // 更新
  DISABLE: `${BASE_URL}/productManage/signGroup/disable`// 启用 禁用
}
// 品牌管理接口
export const BRAND_API = {
  QUERY: `${BASE_URL}/productManage/brand/query`, // 获取列表
  ADD: `${BASE_URL}/productManage/brand/add`, // 添加引导页
  DELETE: `${BASE_URL}/productManage/brand/delete`, // 删除
  DETAIL: `${BASE_URL}/productManage/brand/detail`, // 详情
  UPDATE: `${BASE_URL}/productManage/brand/update`, // 更新
  DISABLE: `${BASE_URL}/productManage/brand/disable`// 启用 禁用
}
