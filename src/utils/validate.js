

export function isvalidUsername(str) {
    var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g; // 邮箱验证
    return reg.test(str);
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/*字母下划线*/
export function letterAndUnderscode(rule, value, callback) {
    let flag = true;
    if(!value){
        callback();
        return;
    }
    for(let i = 0;i<value.length;i++){
        let code = value.charCodeAt(i);
        //ASCII 65-90=>A-Z 97-122=>a-z  95=>_
        if((code>=65&&code<=90)||(code>=97&&code<=122)||code==95) {
        }
        else{
            flag = false;
            callback('只能是字母下划线');
            break;
        }
    }
    if(flag){
        callback();
    }
}

/*中文字母*/
export function letterAndCN(rule, value, callback){
    let flag = true;
    if(!value){
        callback();
        return;
    }
    for(let i = 0;i<value.length;i++){
        let pattern = /[\u4e00-\u9fa5a-zA-Z]+/g;
        let code = value.charAt(i);
        if(!pattern.test(code)){
            flag = false;
            callback('只能是中文字母');
            break;
        }
    }
    if(flag){
        callback();
    }
}

/*中文英文字母下划线，首位不为数字*/
export function validaTemplateName(str) {
    var reg = /^[a-zA-Z_\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5]*$/;
    return reg.test(str);
}

