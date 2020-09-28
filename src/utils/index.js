import { dict, originalCheckType } from '@/utils/config'

/**
 * @desc 格式化日期
 *        date为日期格式: Date 或date字符串
 *        fmt为要转化的格式,如:'yyyy-MM-dd HH:mm:ss'
 */
export const dateFormat = (date, fmt = 'yyyy-MM-dd HH:mm:ss') => {
  if (!date) return ''
  if (typeof date === 'string') {
    date = date.replace(/-/g, '/')
  }
  date = new Date(date)
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  var week = {
    0: '/u65e5',
    1: '/u4e00',
    2: '/u4e8c',
    3: '/u4e09',
    4: '/u56db',
    5: '/u4e94',
    6: '/u516d'
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[date.getDay() + ''])
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

export function transDict(str, dictName) {
  if (!str) return ''
  let DICT_NAME = '' // 初始化翻译后参数
  // 翻译字典
  for (let i = 0; i < dict[dictName].length; i++) {
    if (dict[dictName][i].DICT_VALUE === str) {
      DICT_NAME = dict[dictName][i].DICT_DESC
    }
  }
  // console.log('翻译出来的数据字典', DICT_NAME);
  return DICT_NAME
}

export function transDictValue(str, dictName) {
  console.log('翻译入参', str, dictName, dict, dict[dictName])
  if (!str) return ''
  let DICT_VALUE // 初始化翻译后参数
  // 翻译字典
  for (let i = 0; i < dict[dictName].length; i++) {
    if (dict[dictName][i].DICT_DESC === str) {
      DICT_VALUE = dict[dictName][i].DICT_VALUE
    }
  }
  // console.log('翻译出来的数据字典DICT_VALUE', DICT_VALUE);
  return DICT_VALUE
}


// 翻译公司资质名
export const licenseTranslate = function(type) {
  for (let i =0; i < originalCheckType.length; i++) {
    if (originalCheckType[i].type == type) {
      return originalCheckType[i].description
    }
  }
}
