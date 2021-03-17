import fetch from '@/utils/fetch'
// import fetch from '@/utils/fetch'

//=============参数配置========================
//添加参数
export function addParams(params) {
  return fetch({
    url: '/java_api/api/ext/set_roomenv_param/add',
    method: 'post',
    data: params
  })
}

//修改参数
export function updateParams(params) {
  return fetch({
    url: '/java_api/api/ext/set_roomenv_param/update',
    method: 'post',
    data: params
  })
}

//查询参数
export function queryParams(params) {
  return fetch({
    url: '/java_api/api/ext/set_roomenv_param/query',
    method: 'get',
    params:params
  })
}

//=============分数配置========================

//分数配置列表
export function getScoreList(params) {
  return fetch({
    url: '/java_api/api/ext/roomEnvScore/list',
    method: 'post',
    data: params
  })
}

//添加分数配置
export function addScore(params) {
  return fetch({
    url: '/java_api/api/ext/roomEnvScore/add',
    method: 'post',
    data: params
  })
}

//更新分数配置
export function updateScore(params) {
  return fetch({
    url: '/java_api/api/ext/roomEnvScore/update',
    method: 'post',
    data: params
  })
}

//删除分数配置
export function deleteScore(params) {
  return fetch({
    url: '/java_api/api/ext/roomEnvScore/delete',
    method: 'post',
    data: params
  })
}

//=============默认房间配置========================
//获取房间配置列表
export function getRoomList() {
  return fetch({
    url: '/java_api/api/ext/sysDefaultRoom/list',
    method: 'post',
    data: {}
  })
}

//添加房间
export function addRoom(params) {
  return fetch({
    url: '/java_api/api/ext/sysDefaultRoom/add',
    method: 'post',
    data: params
  })
}

//添加房间
export function updateRoom(params) {
  return fetch({
    url: '/java_api/api/ext/sysDefaultRoom/update',
    method: 'post',
    data: params
  })
}
//===================文案配置=============================

//查询文案列表
export function queryCopyList(params) {
  return fetch({
    // url: '/test/api/copywritingManage/list',
    url: '/java_api/api/ext/copywritingManage/list',
    // url: '/api/ext/copywritingManage/list',
    method: 'post',
    data:params
  })
}

//查询文案详情
export function queryCopyDetail(params) {
  return fetch({
    // url: '/test/api/copywritingManage/detail',
    url: '/java_api/api/ext/copywritingManage/detail',
    method: 'post',
    data:params
  })
}

//更新文案
export function updateCopy(params) {
  return fetch({
    // url: '/test/api/copywritingManage/edit',
    url: '/java_api/api/ext/copywritingManage/edit',
    method: 'post',
    data:params
  })
}

//添加文案
export function addCopy(params) {
  return fetch({
    url: '/java_api/api/ext/copywritingManage/add',
    // url: '/test/api/copywritingManage/add',
    method: 'post',
    data:params
  })
}