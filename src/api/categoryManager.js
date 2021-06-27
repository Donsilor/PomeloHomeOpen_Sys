// 品类管理
import axios from '@/utils/fetch'
import { CATEGORY_MANAGE_SERVICE_API, CATEGORY_MANAGE_SUB_API } from './apis'
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
/* --============================================================================== */
// 获取品类列表
export function subCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.GET_CATEGORY_LIST,
    method: 'post',
    data: params
  })
}
// 获取品类详情
export function detailSubCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.DETAIL_CATEGORY,
    method: 'post',
    data: params
  })
}
// 添加品类列表
export function addSubCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.ADD_CATEGORY,
    method: 'post',
    data: params
  })
}
// 编辑品类列表
export function editSubCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.EDIT_CATEGORY,
    method: 'post',
    data: params
  })
}
// 删除品类列表
export function delSubCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.DELETE_CATEGORY,
    method: 'post',
    data: params
  })
}
// =======================================子品类================================
// 获取子品类列表
export function sonCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.GET_SUB_CATEGORY_LIST,
    method: 'post',
    data: params
  })
}
// 新增子品类
export function addSonCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.ADD_SUB_CATEGORY,
    method: 'post',
    data: params
  })
}
// 编辑子品类
export function editSonCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.EDIT_SUB_CATEGORY,
    method: 'post',
    data: params
  })
}
// 删除子品类列表
export function delSonCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.DEL_SUB_CATEGORY,
    method: 'post',
    data: params
  })
}
// 获取子品类详情
export function sonCategoryDetail(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SUB_CATEGORY_DETAIL,
    method: 'post',
    data: params
  })
}
// 获取品牌列表
export function brandList(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.BRAND_LIST,
    method: 'post',
    data: params
  })
}
/* ==================================================大品类物模型============================================== */
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
// 批量获取大品类物模型（基本信息+图片）
export function getModels(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.GET_MODELS,
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

/* ==================================================子品类物模型============================================== */
// 上传子品类物模型模块接口
export function sonUpload(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SUB_UPLOAD,
    method: 'post',
    data: params
  })
}
// 获取子品类物模型模块接口
export function getSonModel(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SUB_GET_MODEL,
    method: 'post',
    data: params
  })
}
// 批量获取子品类物模型（基本信息+图片）
export function getSonModels(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SUB_GET_MODELS,
    method: 'post',
    data: params
  })
}
// 添加子品类物模型模块接口
export function addSonModel(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SUB_ADD_MODEL,
    method: 'post',
    data: params
  })
}
// 编辑子品类物模型模块接口
export function editSonModel(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SUB_EDIT_MODEL,
    method: 'post',
    data: params
  })
}
// 删除子品类物模型模块接口
export function delSonModel(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SUB_DELETE_MODEL,
    method: 'post',
    data: params
  })
}