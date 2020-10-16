import fetch from '@/utils/fetch'

// 获取模版列表
export function getScreenList(params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/api/ext/devcard/template',
    method: 'get',
    data: params
  })
}

// 模版增删改
export function screenEdite(params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/api/ext/devcard/template',
    method: 'post',
    data: params
  })
}


// 获取卡片大小列表
export function cardSizeList() {
  // console.log('查询入参', params);
  return fetch({
    url: '/api/ext/devcard/size',
    method: 'get'
  })
}

// 对卡片进行增删改
export function cardOperation(params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/api/ext/devcard/size',
    method: 'post',
    data:params
  })
}

