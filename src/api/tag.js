import fetch from '@/utils/fetch'

export function getTagList(params,method){
  return fetch({
    url: 'api/ext/gtags/global',
    method: method,
    data: params
  })
}