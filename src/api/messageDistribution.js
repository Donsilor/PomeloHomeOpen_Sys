import fetch from '@/utils/fetch'

export function getTopicList(params){
  return fetch({
    url: '/java_api/api/topic/getAll',
    method: 'get',
    params
  })
}
export function updateTopic(params){
  return fetch({
    url: '/java_api/api/topic/update',
    method: 'post',
    data: params
  })
}