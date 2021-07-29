import fetch from '@/utils/newFetch'
// 获取列表
export function panelList(params){
  return fetch({
    url: '/api/ext/panelPage/config',
    method: 'GET'
  })
}
// 增改
export function panelHandler(params){
  return fetch({
    url: '/api/ext/panelPage/config',
    method: 'post',
    data: params
  })
}