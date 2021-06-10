import fetch from '@/utils/fetch'
//图标分类添加
export function imageTypegoryAdd(params){
  return fetch({
    url: '/icon/class/add',
    method: 'post',
    data:params
  })
}
// 图标分类分页查询
export function imageTypegoryPage(params){
  return fetch({
    url: '/icon/class/page',
    method: 'post',
    data: params
  })
}
// 图标详情添加
export function imageDetailAdd(params){
  return fetch({
    url: '/icon/details/add',
    method: 'post',
    data: params
  })
}
// 图标详情分页查询
export function imageDetailPage(params){
  return fetch({
    url: '/icon/details/page',  
    method: 'post',
    data: params
  })
}
// 图标资源上传
export function imageUpload(params){
  return fetch({
    url: '/icon/details/upload',
    method: 'post',
    data: params
  })
}
// 更新图标详情
export function imageDetailUpdate(params){
  return fetch({
    url: '/icon/details/update',
    method: 'post',
    data: params
  })
}
// 批量导入图标资源
export function imagebatchImport(params){
  return fetch({
    url: '/icon/details/batchImport',
    method: 'post',
    data: params
  })
}
//根据id获取图标分类
export function imageGetByID(params){
  return fetch({
    url: '/icon/class/getById',
    method: 'get',
    data:params
  })
}
//分类删除
export function imageDelete(params){
  return fetch({
    url: '/icon/class/delete',
    method: 'get',
    data:params
  })
}
//图标详情启用状态更新
export function imageEnable(params){
  return fetch({
    url: '/icon/details/enable',
    method: 'post',
    data:params
  })
} 
//根据id获取图标详情
export function imageDetailsGetByID(params){
  return fetch({
    url: '/icon/details/getById',
    method: 'get',
    data:params
  })
}
//删除图标详情
export function imageDetailsDelete(params){
  return fetch({
    url: '/icon/details/delete',
    method: 'get',
    data:params
  })
}
//更新图标分类
export function imageUpdate(params){
  return fetch({
    url: '/icon/class/update',
    method: 'get',
    data:params
  })
}









  