import axios from '@/utils/newFetch'
import { MODEL_MANAGE_SERVICE_API, PRODUCE_MANAGE_SERVICE_API, TOPIC_MANAGE_SERVICE_API, ANALYSIS_DATA_SERVICE_API } from './apis'
// 产品选择列表
export function productOptionsList(params) {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.LIST_PRODUCT,
    method: 'post',
    data: params
  })
}
// 产品列表
export function productList(params) {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.PRODUCT_LIST,
    method: 'post',
    data: params
  })
}
// 删除产品
export function deleteByProductId(params) {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.PRODUCT_DELETE,
    method: 'delete',
    data: params
  })
}
// 启用产品
export function startByProductId(params) {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.PRODUCT_START,
    method: 'put',
    data: params
  })
}
// 禁用产品
export function stopByProductId(params) {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.PRODUCT_STOP,
    method: 'put',
    data: params
  })
}
// 添加产品 TODO:
export function addProduct(params) {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.PRODUCT_ADD,
    method: 'post',
    data: params
  })
}
// 获取品类列表
export function getCategoryMange(params) {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.CATEGORY_LIST,
    method: 'post',
    data: params
  })
}
// 根据ID查询列表
export function getListById(params) {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.PRODUCT_DETAIL,
    method: 'post',
    data: params
  })
}
// 编辑接口
export function editProduct(params) {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.PRODUCT_EDIT,
    method: 'put',
    data: params
  })
}
// 发布产品
export function issueProduct(params) {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.PRODUCT_PUBLISH,
    method: 'put',
    data: params
  })
}
// 撤销产品
export function unIssueProduct(params) {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.PRODUCT_UNPUBLISH,
    method: 'put',
    data: params
  })
}

// ------------------------------添加产品扩展的新接口---------------------------------------

// 获取分组标签
export function getGroupCategory(params) {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.GET_GROUP_CATEGORY,
    method: 'post',
    data: {
      params: {
        categoryId: null
      }
    }
  })
}

// 获取品牌
export function getBrand() {
  return axios({
    url: PRODUCE_MANAGE_SERVICE_API.GET_BRAND,
    method: 'post',
    data: {
      params: '0'
    }
  })
}

// ------------------------------topic页---------------------------------------
// 获取topic列表
export function topicList(params) {
  return axios({
    url: TOPIC_MANAGE_SERVICE_API.TOPIC_LIST,
    method: 'post',
    data: params
  })
}
// 添加自定义topic
export function addTopic(params) {
  return axios({
    url: TOPIC_MANAGE_SERVICE_API.TOPIC,
    method: 'post',
    data: params
  })
}

// 删除topic
export function deleteTopic(params) {
  return axios({
    url: TOPIC_MANAGE_SERVICE_API.TOPIC,
    method: 'delete',
    data: params
  })
}
// ---------------------------功能定义页---------------------------------

export function getThingModel(params) {
  return axios({
    url: MODEL_MANAGE_SERVICE_API.THING_MODEL,
    method: 'post',
    data: params
  })
}

export function upLoadFile(params) {
  return axios({
    url: MODEL_MANAGE_SERVICE_API.UPLOAD_PATH,
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

// -----------------------编辑页面----------------------------------------------
export function unitsName(params) {
  return axios({
    url: MODEL_MANAGE_SERVICE_API.UNITS,
    method: 'post',
    data: params
  })
}

export function draftModel(params) {
  return axios({
    url: MODEL_MANAGE_SERVICE_API.DRAFT_MODEL,
    method: 'post',
    data: params
  })
}

export function modelVersions(params) {
  return axios({
    url: MODEL_MANAGE_SERVICE_API.MODEL_VERSIONS,
    method: 'post',
    data: params
  })
}

export function deleteModel(params) {
  return axios({
    url: MODEL_MANAGE_SERVICE_API.MODEL,
    method: 'delete',
    data: params
  })
}

export function publishModel(params) {
  return axios({
    url: MODEL_MANAGE_SERVICE_API.PUSLISH_MODEL,
    method: 'post',
    data: params
  })
}

export function addModel(params) {
  return axios({
    url: MODEL_MANAGE_SERVICE_API.MODEL,
    method: 'post',
    data: params
  })
}

export function editModel(params) {
  return axios({
    url: MODEL_MANAGE_SERVICE_API.MODEL,
    method: 'put',
    data: params
  })
}
// 获取topic类型
export function topicType(params) {
  return axios({
    url: ANALYSIS_DATA_SERVICE_API.TOPIC_TYPE,
    method: 'post',
    data: params
  })
}
// 获取deviceName
export function deviceName(params) {
  return axios({
    url: ANALYSIS_DATA_SERVICE_API.DEVICE_NAME,
    method: 'post',
    data: params
  })
}
// 获取topic
export function topicClass(params) {
  return axios({
    url: ANALYSIS_DATA_SERVICE_API.TOPIC_CLASS,
    method: 'post',
    data: params
  })
}
// 查询脚本
export function query(params) {
  return axios({
    url: ANALYSIS_DATA_SERVICE_API.QUERY,
    method: 'post',
    data: params
  })
}
// 保存脚本
export function add(params) {
  return axios({
    url: ANALYSIS_DATA_SERVICE_API.ADD,
    method: 'post',
    data: params
  })
}
// 执行脚本
export function handle(params) {
  return axios({
    url: ANALYSIS_DATA_SERVICE_API.HANDLE,
    method: 'post',
    data: params
  })
}
