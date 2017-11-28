import fetch from '@/utils/fetch';

// 获取审核申请列表
export function getSdkList (params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/admin/sdklists?page='+params.page,
    method: 'post',
    data: params
    
  })
}

// 获取WIFI模组/芯片列表
export function getWifiModuleList () {
  // console.log('查询入参', params);
  return fetch({
    url: '/wifimodule/lists',
    method: 'post',
    data: {}
    
  })
}

// 获取产品文档列表
export function getProductdoc (params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/admin/productdoc_lists?page='+params.page,
    method: 'post',
    data: params
    
  })
}
