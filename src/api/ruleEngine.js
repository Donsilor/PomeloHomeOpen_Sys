import fetch from '@/utils/fetch'

// 获取模版列表
export function addSence(params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/sence_web_template_mgt/add',
    method: 'post',
    data: params
  })
}


