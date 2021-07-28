// 品类管理
import axios from '@/utils/fetch'
import { CATEGORY_MANAGE_SERVICE_API } from './apis'
/* --============================================================================== */
// 获取品类列表(新)
export function subAllCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.GET_ALL_CATEGORY,
    method: 'post',
    data: params
  })
}
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
// =======================================二级品类================================
// 获取二级品类列表
export function secCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.GET_SEC_CATEGORY_LIST,
    method: 'post',
    data: params
  })
}
// 新增二级品类
export function addSecCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.ADD_SEC_CATEGORY,
    method: 'post',
    data: params
  })
}
// 编辑二级品类
export function editSecCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.EDIT_SEC_CATEGORY,
    method: 'post',
    data: params
  })
}
// 删除二级品类列表
export function delSecCategory(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.DEL_SEC_CATEGORY,
    method: 'post',
    data: params
  })
}
// 获取二级品类详情
export function secCategoryDetail(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SEC_CATEGORY_DETAIL,
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

/* ==================================================二级品类物模型============================================== */
// 上传二级品类物模型模块接口
export function secUpload(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SEC_UPLOAD,
    method: 'post',
    data: params
  })
}
// 获取二级品类物模型模块接口
export function getSecModel(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SEC_GET_MODEL,
    method: 'post',
    data: params
  })
}
// 批量获取二级品类物模型（基本信息+图片）
export function getSecModels(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SEC_GET_MODELS,
    method: 'post',
    data: params
  })
}
// 添加二级品类物模型模块接口
export function addSecModel(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SEC_ADD_MODEL,
    method: 'post',
    data: params
  })
}
// 编辑二级品类物模型模块接口
export function editSecModel(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SEC_EDIT_MODEL,
    method: 'post',
    data: params
  })
}
// 删除子品类物模型模块接口
export function delSecModel(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.SEC_DELETE_MODEL,
    method: 'post',
    data: params
  })
}


// 获取指令接口
export function queryCommands(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.queryCommands,
    method: 'post',
    data: params
  })
}

// 新增指令接口
export function insertCommands(params) {
  return axios({
    url: CATEGORY_MANAGE_SERVICE_API.insertCommands,
    method: 'post',
    data: params
  })
}