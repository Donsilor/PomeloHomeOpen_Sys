import fetch from '@/utils/fetch';

// 获取SDK列表
export function getSdkList (params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/admin/sdklists?page='+params.page,
    method: 'post',
    data: params
    
  })
}

// 上传SDK
export function uploadSDK (params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/admin/sdk_upload',
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

// 获取协议列表
export function getAgreementList (params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/agreement/lists',
    method: 'post',
    data: params
    
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

// 上传产品文档
export function uploadProductdoc (params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/admin/productdoc_upload',
    method: 'post',
    data: params
    
  })
}
