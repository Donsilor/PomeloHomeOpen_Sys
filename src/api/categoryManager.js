// 品类管理
import axios from '@/utils/fetch'
import { CATEGORY_MANAGE_SERVICE_API } from './apis'
// 获取一级品类列表
export function primaryCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.GET_PRIMARY_CATEGORY_LIST,
    method: 'post',
    data: params
  })
}
// 添加一级品类列表
export function addPrimaryCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.ADD_PRIMARY_CATEGORY,
    method: 'post',
    data: params
  })
}
// 编辑品类列表
export function editPrimaryCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.EDIT_PRIMARY_CATEGORY,
    method: 'post',
    data: params
  })
}
// 删除品类列表
export function deletePrimaryCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.DELETE_PRIMARY_CATEGORY,
    method: 'post',
    data: params
  })
}
// 获取一级品类详情
export function subCategoryDetail(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.GET_DETAIL_PRIMARY_CATEGORY,
    method: 'post',
    data: params
  })
}
// 获取一级品类下拉列表
export function selectSubCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.GET_SELECT_PRIMARY_CATEGORY_LIST,
    method: 'post',
    data: params
  })
}
// 获取子品类列表
export function subCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.GET_SUB_CATEGORY_LIST,
    method: 'post',
    data: params
  })
}
// 获取子品类详情
export function detailSubCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.DETAIL_SUB_CATEGORY,
    method: 'post',
    data: params
  })
}
// 添加子品类列表
export function addSubCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.ADD_SUB_CATEGORY,
    method: 'post',
    data: params
  })
}
// 编辑子品类列表
export function editSubCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.EDIT_SUB_CATEGORY,
    method: 'post',
    data: params
  })
}
// 删除子品类列表
export function delSubCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.DELETE_SUB_CATEGORY,
    method: 'post',
    data: params
  })
}

// 上传物模型模块接口
export function upload(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.UPLOAD,
    method: 'post',
    data: params
  })
}
// 获取物模型模块接口
export function getModel(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.GET_MODEL,
    method: 'post',
    data: params
  })
}
// 添加物模型模块接口
export function addSubModel(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.ADD_MODEL,
    method: 'post',
    data: params
  })
}
// 编辑物模型模块接口
export function editSubModel(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.EDIT_MODEL,
    method: 'post',
    data: params
  })
}
// 删除物模型模块接口
export function delModel(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.DELETE_MODEL,
    method: 'post',
    data: params
  })
}
