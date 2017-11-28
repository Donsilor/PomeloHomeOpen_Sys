import fetch from '@/utils/fetch';

// 获取审核申请列表
export function getReviewList (params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/admin/review_lists?page='+params.page,
    method: 'post',
    data: params
    
  })
}

// 获取产品品类
export function getProductType () {
  return fetch({
    url: '/product/type_lists',
    method: 'post',
    data: {}
    
  })
}

// 获取审核详情
export function getReviewInfo (params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/admin/review_info',
    method: 'post',
    data: params
    
  })
}

// 提交审核
export function commitCheck (params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/admin/review_approve',
    method: 'post',
    data: params
    
  })
}