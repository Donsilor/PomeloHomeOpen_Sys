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
export function getWifiModuleList (params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/wifimodule/lists',
    method: 'post',
    data: params
    
  })
}
