/**
 * 帮助类方法
 * @author maobingbing@evergrande.cn
 * @date 2017/5/22.
 */
export default {
    hasClass: function (obj, cls) {
        return obj.className && obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    addClass: function(obj, cls) {
        if (!this.hasClass(obj, cls)) {
            obj.className = (obj.className + " " + cls).replace('  ', ' ').trim();
        }
    },
    removeClass: function(obj, cls) {
        if (this.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ').replace('  ', ' ').trim();
        }
    },
    toggleClass: function(obj,cls) {
        if (this.hasClass(obj, cls)) {
            this.removeClass(obj, cls);
        } else {
            this.addClass(obj, cls);
        }
    },

    /**
     * 解析search参数成obj
     */
    getSearches (){
        let result = {},
            params = location.search.replace(/^\?/, '').split('&');
        params.forEach(p=>{
            let kv = p.split('=');
            result[kv[0]] = decodeURIComponent(kv[1]);
        });
        return result;
    },

    /**
     * 拿到单项search参数
     */
    getSearch (key){
        return this.getSearches()[key];
    },

    /**
     * URL参数序列化
     */
    serialize (obj){
        var res = [];
        if(typeof obj !== "object"){
            return "";
        }
        for(var k in obj){
            res.push(k+"="+encodeURIComponent(obj[k]));
        }
        return res.join("&");
    },
    /**
     * 字符串反序列化
     */
    unserialize (str){
        var res = {};
        if(!str){
            return res;
        }
        var arr = str.split("&");
        for(var i=0,l=arr.length;i<l;i++){
            var item = arr[i];
            var o = item.split("=");
            res[o[0]] = (!isNaN(o[1])) ? o[1] : decodeURIComponent(o[1]);
        }
        return res;
    },
    getElementByClassName(classnames){
        var objArray= new Array();//定义返回对象数组
        var tags=document.getElementsByTagName("*");//获取页面所有元素
        var index = 0;
        for(var i in tags){
            if(tags[i].nodeType==1){
                if(tags[i].getAttribute("class") == classnames){ //如果某元素的class值为所需要
                    objArray[index]=tags[i];
                    index++;
                }
            }
        }
        return objArray;
    },

    validateString: function (name, value, required, pattern) {
        var validity = true;
        var msg = '';

        if (!value || value.trim().length == 0) {//值为空
            if (required) {//必填
                validity = false;
                msg = "请输入" + name;
            }
        }
        else {//值不为空
            //如果定义了正则表达式，则进行校验
            /*var p;
            if (pattern && (p = pattern.trim()).length > 0) {
                try {
                    var r = new RegExp(p);
                    if (!r.test(value)) {
                        validity = false;
                        msg = name + '格式错误';
                    }
                }
                catch (e) {
                    validity = false;
                    msg = '校验规则错误';
                }
            }*/
            if(pattern instanceof RegExp){
                if(!pattern.test(value)){
                    validity = false;
                    msg = name + '格式错误';
                }
            }
        }
        return {
            validity: validity,
            msg: msg
        }
    },

    /**
     * 合并行解析数据方法
     */
    spanAnalyseData(item,targetList,targetMap){
        let secCount=0;
        targetMap[item.nodeid]={
            index:targetList.length,
            children:{}
        }
        item.list.forEach(function (v) {
            let thirdCount=0;
            if(v.key_type!='3'){
                secCount++;
                targetList.push(Object.assign({
                    nodeid:item.nodeid,
                    attr_id:item.attr_id,
                    is_enable:v.value_list.length?true:false
                },v));
            }
            else{
                v.value_list.forEach(function (em,idx) {
                    secCount++;
                    thirdCount++;
                    targetList.push({
                        nodeid:item.nodeid,
                        attr_id:item.attr_id,
                        method_string:em.method_string,
                        key:em.key,
                        type:em.type,
                        key_type:em.key_type,
                        value_list:em.value_list,
                        remark:em.remark,
                        origin_value_list:em.origin_value_list||[],
                        origin_value_list_des:em.value_des||[],
                        value_string:em.value_string||'',
                        is_enable:em.value_list.length?true:false
                    });
                })
            }
        })
        targetMap[item.nodeid].len = secCount;
    },

    /**
     * 合并行方法
     */
    spanMethod(pt,columnIndex,rowIndex){
        if(columnIndex==0){
            if(pt){
                if(pt.index==rowIndex){
                    return [pt.len,1]
                }
                else{
                    return [0,0]
                }
            }else{
                return [1,1]
            }
        }
        else{
            return [1,1]
        }
    }
}
