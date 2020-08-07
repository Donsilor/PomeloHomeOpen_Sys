import fetch from '@/utils/fetch'

// 获取审核申请列表
export function getReviewList(params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/admin/review_lists?page=' + params.page,
    method: 'post',
    data: params
  })
}

// 获取产品品类
export function getProductType() {
  return fetch({
    url: '/admin/product/type_lists',
    method: 'post',
    data: {}
  })
}

// 获取审核详情
export function getReviewInfo(params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/admin/review_info',
    method: 'post',
    data: params
  })
}

// 提交审核
export function commitCheck(params) {
  // console.log('查询入参', params);
  return fetch({
    url: '/admin/review_approve',
    method: 'post',
    data: params
  })
}

// 获取产品列表
export function getProductList(params) {
  return fetch({
    url: '/admin/product_lists',
    method: 'post',
    data: params
  })
}

// 获取已上线产品详情
export function getProductInfo(params) {
  return fetch({
    url: '/admin/product_info',
    method: 'post',
    data: params
  })
}

// 设置已上线产品下架
export function productUnshelve(params) {
  return fetch({
    url: '/admin/product_unshelve',
    method: 'post',
    data: params
  })
}


// 获取某一个产品的分组标签
export function getProductTags(params) {
  return fetch({
    url: '/api/ext/gtags/product',
    method: 'get',
    data: params
  })
}

// 修改某一个产品的分组标签
export function changeProductTags(params) {
  return fetch({
    url: '/api/ext/gtags/product',
    method: 'post',
    data: params
  })
}

// 获取全局分组标签列表
export function getGlobalTags() {
  return fetch({
    url: '/api/ext/gtags/global',
    method: 'get'
  })
}


// 添加全局分组标签
export function addGlobalTags(params) {
  return fetch({
    url: '/api/ext/gtags/global',
    method: 'post',
    data: params
  })
}