import fetch from '@/utils/fetch'

// 场景类型

// 获取场景类型列表
export function getSenceList(params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/scene_web_type_mgt/list',
    method: 'post',
    data: params
  })
}

// 新增场景类型
export function addSenceType(params) {
  return fetch({
    url: '/scene_web_type_mgt/add',
    method: 'post',
    data: params
  })
}

// 编辑场景类型
export function editSenceType(params) {
  return fetch({
    url: '/scene_web_type_mgt/edit',
    method: 'post',
    data: params
  })
}

// 场景类型启用禁用
export function enableSenceType(params) {
  return fetch({
    url: '/scene_web_type_mgt/enable',
    method: 'post',
    data: params
  })
}

// 删除场景类型
export function delSenceType(params) {
  return fetch({
    url: '/scene_web_type_mgt/delete',
    method: 'post',
    data: params
  })
}

//类型下拉框列表
export function getSenceSelectList(params) {
  return fetch({
    url: '/scene_web_type_mgt/comboBoxList',
    method: 'post',
    data: params
  })
}

// 场景模板

// 获取场景模板列表
export function getSenceTemplate(params) {
  return fetch({
    url: '/scene_web_template_mgt/list',
    method: 'post',
    data: params
  })
}

// 新增场景模板
export function addSenceTemplate(params) {
  return fetch({
    url: '/scene_web_template_mgt/add',
    method: 'post',
    data: params
  })
}

// 删除场景模板
export function delSenceTemplate(params) {
  return fetch({
    url: '/scene_web_template_mgt/delete',
    method: 'post',
    data: params
  })
}

// 禁用启用模板
export function enableSenceTemplate(params) {
  return fetch({
    url: '/scene_web_template_mgt/enable',
    method: 'post',
    data: params
  })
}

// 	模板详情
export function senceTemplateDetail(params) {
  return fetch({
    url: '/scene_web_template_mgt/detail',
    method: 'post',
    data: params
  })
}

// 编辑场景模板
export function editSenceTemplate(params) {
  return fetch({
    url: '/scene_web_template_mgt/edit',
    method: 'post',
    data: params
  })
}

