import fetch from '@/utils/fetch'
import fetch2 from '@/utils/fetch2'

//=============参数配置========================
//添加参数
export function addParams(params) {
  return fetch({
    url: '/api/ext/set_roomenv_param/add',
    method: 'post',
    data: params
  })
}

//修改参数
export function updateParams(params) {
  return fetch({
    url: '/api/ext/set_roomenv_param/update',
    method: 'post',
    data: params
  })
}

//查询参数
export function queryParams(params) {
  return fetch({
    url: '/api/ext/set_roomenv_param/query',
    method: 'get',
    params:params
  })
}

//===================文案配置=============================

//查询文案列表
export function queryCopyList(params) {
  return fetch2({
    url: '/test/api/copywritingManage/list',
    method: 'post',
    data:params
  })
}

//更新文案
export function updateCopy(params) {
  return fetch2({
    url: '/test/api/copywritingManage/edit',
    method: 'post',
    data:params
  })
}

//添加文案
export function addCopy(params) {
  return fetch2({
    url: '/test/api/copywritingManage/add',
    method: 'post',
    data:params
  })
}