import fetch from '@/utils/fetch'

// 获取模版列表
export function getScreenList(params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/sence_web_template_mgt/type_add_or_update',
    method: 'post',
    data: params
  })
}


