import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { v4 as uuidv4 } from 'uuid'
import { getToken } from '@/utils/auth'
import helper from '@/utils/helper'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  //baseURL: '/api/index.php/', // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    const defaultParams = {
      id: uuidv4(),
      timestamp: Date.parse(new Date()),
      version: '1.0'
    }
    /* if(config['url'].indexOf('/java_api/') !== 1){
      config['url'] = config['url'].replace(/\/java_api/g,'')
    }else if (config['url'].indexOf('/v1') !== -1) {
      console.log(11)
    }else{
      //老接口，需要添加前缀
      config['url'] = '/api/index.php'+config['url']
    } */
    if(config['url'].indexOf('/v1') !== -1){ 
      if(!(config.data instanceof FormData)){
        config.data = Object.assign(defaultParams, config.data)
      }
    }else{
      if(config['url'].indexOf('/java_api/') === -1){
        //老接口，需要添加前缀
        config['url'] = '/api/index.php'+config['url']
      }else{
        config['url'] = config['url'].replace(/\/java_api/g,'')
      }
    }
    if (!config.data) {
      config.data = {}
    }
    if (store.getters.token) {
      config.data['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (config['method'] == 'get') {
      config['url'] = config['url'] + '?' + helper.serialize(config.data)
    }
    if (config.url.indexOf('/api/ext') > -1){
      config.url = config.url.replace(/\/api\/index.php/,'')
    } 
    console.log('ajax请求数据：',JSON.stringify(config.data))
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错
     */
    // console.log(response.config.url)
    const res = response.data
    console.log(res)
    /*  console.log('response:',response)
    console.log('res:',res) */
    if (res.code !== 200) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 2 * 1000
      })

      // 401:未授权
      if (res.code === 401) {
        // MessageBox.confirm('未授权，', '确定登出', {
        //   confirmButtonText: '重新登录',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   store.dispatch('FedLogOut').then(() => {
        //     // location.reload()// 为了重新实例化vue-router对象 避免bug
        //     window.location.assign(window.location.origin + window.location.pathname + '#/login');
        //   })
        // })
        store.dispatch('FedLogOut').then(() => {
          // location.reload()// 为了重新实例化vue-router对象 避免bug
          window.location.assign(
            window.location.origin + window.location.pathname + '#/login'
          )
        })
        return Promise.reject(res)
      }else if(response.config.url.indexOf('/v1') !== -1 && res.code === 102990){
        Message({
          message: res.msg || res.message,
          type: 'error',
          duration: 5 * 1000
        })
        // return Promise.reject(res)
      }else{
        return Promise.reject(res)
      }
    }else if(response.config.url.indexOf('/v1') !== -1){
      return Promise.resolve(response)
    }else if( !response.data.result) {//新接口直接把后台回传的的数据直接返回回去
      return Promise.resolve(response.data)
    } else{
      return Promise.resolve(response.data.result)
    }
  },
  error => {
    const res = error.response.data
    console.log('err' + error) // for debug

    Message({
      message: res.msg || res.message,
      type: 'error',
      duration: 5 * 1000
    })
    // 401:未授权
    if (res.code === 401) {
      store.dispatch('FedLogOut').then(() => {
        // location.reload()// 为了重新实例化vue-router对象 避免bug
        window.location.assign(
          window.location.origin + window.location.pathname + '#/login'
        )
      })
    }
    return Promise.reject(res)
  }
)

export default service
