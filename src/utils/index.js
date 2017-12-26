import { dict, originalCheckType } from '@/utils/config'

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
   if (!str) return '';
   let DICT_NAME = ''; // 初始化翻译后参数
   // 翻译字典
   for (let i = 0; i < dict[dictName].length; i++) {
     if (dict[dictName][i].DICT_VALUE === str) {
       DICT_NAME = dict[dictName][i].DICT_DESC;
     }
   }
   // console.log('翻译出来的数据字典', DICT_NAME);
   return DICT_NAME;
 }

  export function transDictValue(str, dictName) {
    console.log('翻译入参', str, dictName, dict, dict[dictName]);
    if (!str) return '';
    let DICT_VALUE; // 初始化翻译后参数
    // 翻译字典
    for (let i = 0; i < dict[dictName].length; i++) {
      if (dict[dictName][i].DICT_DESC === str) {
        DICT_VALUE = dict[dictName][i].DICT_VALUE;
      }
    }
    // console.log('翻译出来的数据字典DICT_VALUE', DICT_VALUE);
    return DICT_VALUE;
  }


  // 翻译公司资质名
  export const licenseTranslate = function (type) {
    for (let i =0; i < originalCheckType.length; i++) {
      if (originalCheckType[i].type == type) {
        return originalCheckType[i].description;
      }
    }
  };
  