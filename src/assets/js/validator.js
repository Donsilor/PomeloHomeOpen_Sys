/*
  dialog自定义验证规则
*/
// add2.vue
export const funcName = (rule, value, callback) => {
  const reg = /^[\u4e00-\u9fa5a-zA-Z0-9].*/
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error('请以字母、数字、汉字开头'))
  }
}
export const bool0 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('布尔值不能为空'))
  } else {
    callback()
  }
}
export const bool1 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('布尔值不能为空'))
  } else {
    callback()
  }
}
export const paramsNum = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('参数值不能为空'))
  } else if (value < -2147483648 || value > 2147483647) {
    callback(new Error('取值范围：-2147483648 ~ 2147483647'))
  } else {
    callback()
  }
}
export const desc = (rule, value, callback) => {
  const reg = /^[\u4e00-\u9fa5a-zA-Z0-9].*/
  if (value === '') {
    callback(new Error('描述值不能为空'))
  } else if (!reg.test(value)) {
    callback(new Error('请以字母、数字、汉字开头'))
  } else {
    callback()
  }
}
// add1 array-struct
export const arrStructVf = (rule, value, callback) => {
  if (value.length === 0) {
    callback(new Error('struct不能为空'))
  } else {
    callback()
  }
}

// 邮箱验证
export const emailVf = (rule, value, callback) => {
  const reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g // 邮箱验证
  if (value === '') {
    callback(new Error('邮箱不能为空'))
  } else if (!reg.test(value)) {
    callback(new Error('邮箱格式错误，请重试'))
  } else {
    callback()
  }
}

// 手机号码验证
export const phoneVf = (rule, value, callback) => {
  const reg = /^1[3456789]\d{9}$/
  if (value === '') {
    callback(new Error('手机号码不能为空'))
  } else if (!reg.test(value)) {
    callback(new Error('手机号码格式错误，请重试'))
  } else {
    callback()
  }
}
// 手机号码验证
export const identifierReg = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('标识符不能为空'))
  } else if (value === 'set' || value === 'get' || value === 'post' || value === 'property' || value === 'event' || value === 'time' || value === 'value' || value === '_reply') {
    callback(new Error('set,get,post,property,event,time,value,_reply是系统保留字段，不能用于标识符定义'))
  } else {
    callback()
  }
}

export const regx = (rule, value, callback) => {
  const reg = /^\w+$/
  if (value === '') {
    callback(new Error('设备sn不能为空'))
  } else if (value.length < 2) {
    callback(new Error('设备sn字符不得小于2个'))
  } else if (!reg.test(value)) {
    callback(new Error('设备sn只能由下划线，大小写字母，数字组成'))
  } else {
    callback()
  }
}
// 只能字母，数字
export const regLn = (rule, value, callback) => {
  const reg = /^[A-Za-z0-9]+$/
  if (value === '') {
    callback(new Error('组织编码不能为空'))
  } else if (value.length < 2) {
    callback(new Error('组织编码字符不得小于2'))
  } else if (value.length > 10) {
    callback(new Error('组织编码字符不得超过10个'))
  } else if (!reg.test(value)) {
    callback(new Error('组织编码只能由大小写字母，数字组成'))
  } else {
    callback()
  }
}

// 正则表达式

export const REGEXP = {
  // TELEPHONE_NUMBER: /^(0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$/
  TELEPHONE_NUMBER: /^([0-9]{3,5}-){1}([0-9]{3,8})+(-[0-9]{1,5})?$/
}
