import fetch from '@/utils/fetch'

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