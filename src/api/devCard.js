import fetch from '@/utils/newFetch'

export function rectCard(params){
  return fetch({
    url: '/api/ext/devcard/rect',
    method: 'get'
    // data: params
  })
}
export function rectPostCard(params){
  return fetch({
    url: '/api/ext/devcard/rect',
    method: 'post',
    data: params
  })
}    