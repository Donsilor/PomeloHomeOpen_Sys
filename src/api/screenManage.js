import fetch from '@/utils/fetch'

// 获取审核申请列表
export function getScreenList(params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/api/ext/devcard/template',
    method: 'get',
    data: params
  })
}
