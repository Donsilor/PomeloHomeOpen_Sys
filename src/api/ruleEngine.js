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


// 场景模板

// 新增场景模板
export function AddSenceTemplate(params) {
  return fetch({
    url: '/sence_web_template_mgt/add',
    method: 'post',
    data: params
  })
}

