webpackJsonp([76],{"4BEV":function(e,t,l){var a=l("QJwN");(a="string"==typeof a?[[e.i,a,""]]:a).locals&&(e.exports=a.locals);l("8bSs")("786f91e6",a,!0)},QJwN:function(e,t,l){(e.exports=l("BkJT")(!0)).push([e.i,".addParams[data-v-15d1ac78]{margin-top:15px}.addAttr[data-v-15d1ac78]{margin-left:140px;color:#409eff}.w100p[data-v-15d1ac78]{width:100%}.w50p[data-v-15d1ac78]{width:50%}.input-width[data-v-15d1ac78]{width:285px}.addbtn[data-v-15d1ac78]{font-size:12px;color:#409eff}.first-item[data-v-15d1ac78],.sec-item[data-v-15d1ac78]{border:1px dashed #d2d2d2;padding-top:15px}.sec-item[data-v-15d1ac78]{width:98%}.mt0[data-v-15d1ac78]{margin-bottom:0}.pl8 .el-form-item__label[data-v-15d1ac78]{padding-left:10px}","",{version:3,sources:["F:/A-PRODUCT/PomeloHomeOpen_Sys/src/views/typeManagement/addAttribute.vue"],names:[],mappings:"AACA,4BACI,eAAiB,CACpB,AACD,0BACI,kBAAmB,AACnB,aAAe,CAClB,AACD,wBACI,UAAY,CACf,AACD,uBACI,SAAW,CACd,AACD,8BACI,WAAa,CAChB,AACD,yBACI,eAAgB,AAChB,aAAc,CACjB,AAKD,wDAHI,0BAA2B,AAC3B,gBAAkB,CAMrB,AAJD,2BAGI,SAAW,CACd,AACD,sBACI,eAAiB,CACpB,AACD,2CACI,iBAAmB,CACtB",file:"addAttribute.vue",sourcesContent:["\n.addParams[data-v-15d1ac78]{\n    margin-top: 15px;\n}\n.addAttr[data-v-15d1ac78]{\n    margin-left: 140px;\n    color: #409EFF;\n}\n.w100p[data-v-15d1ac78]{\n    width: 100%;\n}\n.w50p[data-v-15d1ac78]{\n    width: 50%;\n}\n.input-width[data-v-15d1ac78]{\n    width: 285px;\n}\n.addbtn[data-v-15d1ac78]{\n    font-size: 12px;\n    color:#409EFF;\n}\n.first-item[data-v-15d1ac78]{\n    border: 1px dashed #d2d2d2;\n    padding-top: 15px;\n}\n.sec-item[data-v-15d1ac78]{\n    border: 1px dashed #d2d2d2;\n    padding-top: 15px;\n    width: 98%;\n}\n.mt0[data-v-15d1ac78]{\n    margin-bottom: 0;\n}\n.pl8 .el-form-item__label[data-v-15d1ac78]{\n    padding-left: 10px;\n}\n"],sourceRoot:""}])},i224:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("3cXf"),i=l.n(a),s=l("Vo7i"),r=(l("TIfe"),{method:[],key:"",type:"string",key_type:1,unit:"",is_checkbox:"1",value_list:[{value:"",value_des:""}],remark:""}),o={method:[],key:"",type:"string",key_type:1,remark:"",unit:"",is_checkbox:"1",value_list:[{value:"",value_des:""}],list:[r]},n={props:["typeid","token","visible","attrid"],data:function(){var e=i()(o);return{top:0<window.innerHeight-660?(window.innerHeight-660)/2+"px":"0px",dialogTitle:"新建属性参数",hulian_value:!0,isChooseObject:!1,form_string:e,form:{token:this.token,type_id:this.typeid,nodeid:"",is_default:1,value_list:[JSON.parse(e)]},rules:{nodeid:[{required:!0,message:"属性名称不能为空"},{min:1,max:32,message:"属性名称最多32个字符"},{validator:this.letterAndUnderscode}]}}},computed:{},watch:{attrid:function(e){e?(this.getAttr(e),this.dialogTitle="编辑属性参数"):this.dialogTitle="新建属性参数"}},created:function(){},mounted:function(){},methods:{getAttr:function(e){var t=this;Object(s.a)({url:"/attribute/info",method:"post",data:{attr_id:e}}).then(function(e){t.form.nodeid=e.ret.nodeid,t.form.is_default=e.ret.is_default,e.ret.value_list.forEach(function(e){e.list||(e.list=[JSON.parse(i()(r))]),e.value_list||(e.value_list=[{value:"",value_des:""}])}),t.form.value_list=e.ret.value_list})},addParams:function(){this.form.value_list.push(JSON.parse(this.form_string))},deleteParams:function(e){this.form.value_list.splice(e,1)},addAttribute:function(e){var t=i()(r);e.list.push(JSON.parse(t))},deleteAttr:function(e,t){e.list.splice(t,1)},changeTypeValue:function(e,t){"int"==e?(t.key_type=2,t.value_list=[{value:1,value_des:"类型"},{value:"",value_des:"最小值"},{value:"",value_des:"最大值"}]):"object"==e?t.key_type=3:(t.key_type="otc"==e?4:1,t.value_list=[{value:"",value_des:""}])},addEnumerateItem:function(e){e.value_list.push({value:"",value_des:""})},delEnumerateItem:function(e,t){t.value_list.splice(e,1)},closeDialog:function(){this.$refs.attForm.resetFields(),this.form.value_list=[JSON.parse(this.form_string)],this.$emit("close-dialog")},confirmTechnical:function(){var t=this;this.$refs.attForm.validate(function(e){e&&(e=i()(t.form),(e=JSON.parse(e)).value_list.forEach(function(e){"3"==e.key_type?(delete e.value_list,delete e.is_checkbox,e.list.forEach(function(e){"1"!=e.key_type&&delete e.is_checkbox})):(delete e.list,"1"!=e.key_type&&delete e.is_checkbox)}),t.attrid&&(e.attr_id=t.attrid),Object(s.a)({url:t.attrid?"/attribute/edit":"/attribute/add",method:"post",data:e}).then(function(e){t.$emit("fresh-list"),t.closeDialog()}))})},letterAndUnderscode:function(e,t,l){var a=!0;if(t){for(var i=0;i<t.length;i++){var s=t.charCodeAt(i);if(!(65<=s&&s<=90||97<=s&&s<=122||95==s||33<=s&&s<=46||48<=s&&s<=57)){a=!1,l("只能是字母下划线");break}}a&&l()}else l()},unCN:function(e,t,l){/[\u4e00-\u9fa5]+/g.test(t)?l("不支持中文汉字"):l()},lengthLimit:function(e,t,l,a){l&&l.length>e?a("长度不能超过"+e+"字符"):a()}}},a={render:function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("div",{staticClass:"attDialog"},[n("el-dialog",{attrs:{"before-close":o.closeDialog,top:o.top,center:!0,title:o.dialogTitle,visible:o.visible,width:"1000px"},on:{"update:visible":function(e){o.visible=e}}},[n("el-form",{ref:"attForm",attrs:{inline:!0,rules:o.rules,model:o.form,"label-position":"left","label-width":"140px"}},[n("el-row",[n("el-col",{staticStyle:{"line-height":"32px"},attrs:{span:2}},[o._v("\n          属性信息\n        ")]),o._v(" "),n("el-col",{attrs:{span:22}},[n("el-form-item",{staticClass:"w100p",attrs:{label:"属性名称(node_ID)",prop:"nodeid"}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"仅支持字母、下划线输入，最多32个字符"},model:{value:o.form.nodeid,callback:function(e){o.$set(o.form,"nodeid",e)},expression:"form.nodeid"}})],1),o._v(" "),n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"  是否为必选"}},[n("el-radio-group",{model:{value:o.form.is_default,callback:function(e){o.$set(o.form,"is_default",e)},expression:"form.is_default"}},[n("el-radio",{attrs:{label:1}},[o._v("必选")]),o._v(" "),n("el-radio",{attrs:{label:0}},[o._v("非必选")])],1)],1)],1)],1),o._v(" "),o._l(o.form.value_list,function(s,r){return n("el-row",{key:r,staticClass:"first-item"},[n("div",[n("el-col",{staticStyle:{"line-height":"32px"},attrs:{span:2}},[o._v("\n            参数信息\n          ")]),o._v(" "),n("el-col",{attrs:{span:22}},[n("el-form-item",{attrs:{prop:"value_list."+r+".key",rules:[{required:!0,message:"参数名称不能为空"},{min:1,max:32,message:"参数名称最多32个字符"},{validator:o.letterAndUnderscode}],label:"参数名称(key)"}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"仅支持字母、下划线输入，最多32个字符"},model:{value:s.key,callback:function(e){o.$set(s,"key",e)},expression:"paramKey.key"}})],1),o._v(" "),n("el-form-item",{attrs:{inline:!0,prop:"value_list."+r+".remark",rules:[{required:!0,message:"参数含义不能为空"}],label:"参数含义","label-width":"100px"}},[n("el-input",{staticClass:"input-width",model:{value:s.remark,callback:function(e){o.$set(s,"remark",e)},expression:"paramKey.remark"}})],1),o._v(" "),n("el-form-item",{staticClass:"w50p pl8",attrs:{prop:"value_list."+r+".unit",rules:[{validator:o.lengthLimit.bind(null,16)}],label:"单位"}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"支持中英文、特殊字符，最多16个字符"},model:{value:s.unit,callback:function(e){o.$set(s,"unit",e)},expression:"paramKey.unit"}})],1),o._v(" "),n("el-form-item",{staticClass:"w100p",attrs:{prop:"value_list."+r+".method",rules:[{required:!0,message:"参数可控不能为空"}],label:"参数可控"}},[n("el-checkbox-group",{model:{value:s.method,callback:function(e){o.$set(s,"method",e)},expression:"paramKey.method"}},[n("el-checkbox",{attrs:{label:"set"}},[o._v("set")]),o._v(" "),n("el-checkbox",{attrs:{label:"get"}},[o._v("get")]),o._v(" "),n("el-checkbox",{attrs:{label:"report"}},[o._v("report")]),o._v(" "),n("el-checkbox",{attrs:{label:"alarm"}},[o._v("alarm")])],1)],1),o._v(" "),n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"参数值类型"}},[n("el-radio-group",{on:{change:function(e){return o.changeTypeValue(e,s)}},model:{value:s.type,callback:function(e){o.$set(s,"type",e)},expression:"paramKey.type"}},[n("el-radio",{attrs:{label:"string"}},[o._v("string")]),o._v(" "),n("el-radio",{attrs:{label:"int"}},[o._v("int")]),o._v(" "),n("el-radio",{attrs:{label:"object"}},[o._v("object")]),o._v(" "),n("el-radio",{attrs:{label:"float"}},[o._v("float")]),o._v(" "),n("el-radio",{attrs:{label:"array"}},[o._v("array")]),o._v(" "),n("el-radio",{attrs:{label:"bool"}},[o._v("bool")]),o._v(" "),n("el-radio",{attrs:{label:"otc"}},[o._v("otc")])],1)],1),o._v(" "),0<=["string","float","array","bool"].indexOf(s.type)?n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"复选/单选"}},[n("el-radio-group",{model:{value:s.is_checkbox,callback:function(e){o.$set(s,"is_checkbox",e)},expression:"paramKey.is_checkbox"}},[n("el-radio",{attrs:{label:"1"}},[o._v("复选")]),o._v(" "),n("el-radio",{attrs:{label:"0"}},[o._v("单选")])],1)],1):o._e(),o._v(" "),"otc"==s.type?n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"参数值"}},[n("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"数据说明"},model:{value:s.value_list[0].value_des,callback:function(e){o.$set(s.value_list[0],"value_des",e)},expression:"paramKey.value_list[0].value_des"}}),o._v(" "),n("span",[o._v("数据由厂商端输入")])],1):o._e(),o._v(" "),1==s.key_type?[n("el-form-item",{staticClass:"w100p mt0 pl8",attrs:{label:"枚举参数值"}},[n("el-form-item",{attrs:{label:"数据说明","label-width":"290px"}}),o._v(" "),n("el-form-item",{attrs:{label:"传送数据","label-width":"290px"}}),o._v(" "),n("el-form-item",{attrs:{label:"操作","label-width":"85px"}})],1),o._v(" "),o._l(s.value_list,function(t,l){return n("el-form-item",{key:l,staticClass:"w100p mt0",attrs:{label:" "}},[n("el-form-item",{attrs:{prop:"value_list."+r+".value_list."+l+".value_des",rules:[{validator:o.lengthLimit.bind(null,64)}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"最多64个字符"},model:{value:t.value_des,callback:function(e){o.$set(t,"value_des",e)},expression:"valueItem.value_des"}})],1),o._v(" "),n("el-form-item",{attrs:{prop:"value_list."+r+".value_list."+l+".value",rules:[{validator:o.lengthLimit.bind(null,32)},{validator:o.unCN}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"字母数字符号，最多32个字符"},model:{value:t.value,callback:function(e){o.$set(t,"value",e)},expression:"valueItem.value"}})],1),o._v(" "),0<l?n("el-form-item",{staticStyle:{"padding-left":"25px"},attrs:{label:""}},[n("i",{staticClass:"el-icon-delete",on:{click:function(e){return o.delEnumerateItem(l,s)}}})]):o._e()],1)}),o._v(" "),n("el-form-item",{staticClass:"w100p",attrs:{label:" "},scopedSlots:o._u([{key:"default",fn:function(e){return[n("a",{staticClass:"addbtn",attrs:{href:"javascript:void(0);"},on:{click:function(e){return o.addEnumerateItem(s)}}},[n("i",{staticClass:"el-icon-plus"}),o._v(" 添加更多参数值\n                  ")])]}}])})]:o._e(),o._v(" "),2==s.key_type?n("div",[n("el-form-item",{staticClass:"w100p mt0 pl8",attrs:{label:"参数范围值"}},[s.value_list[1]?n("el-form-item",{attrs:{prop:"value_list."+r+".value_list.1.value",rules:[{required:!0,message:"最小值不能为空"},{type:"number",message:"最小值为数字"}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入数据最小值"},model:{value:s.value_list[1].value,callback:function(e){o.$set(s.value_list[1],"value",o._n(e))},expression:"paramKey.value_list[1].value"}})],1):o._e(),o._v(" "),s.value_list[2]?n("el-form-item",{attrs:{prop:"value_list."+r+".value_list.2.value",rules:[{required:!0,message:"最大值不能为空"},{type:"number",message:"最大值为数字"}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入数据最大值"},model:{value:s.value_list[2].value,callback:function(e){o.$set(s.value_list[2],"value",o._n(e))},expression:"paramKey.value_list[2].value"}})],1):o._e()],1)],1):o._e(),o._v(" "),3==s.key_type?[o._l(s.list,function(a,i){return n("div",{key:i,staticClass:"sec-item"},[n("el-form-item",{attrs:{prop:"value_list."+r+".list."+i+".key",rules:[{required:!0,message:"参数名称不能为空"},{min:1,max:32,message:"参数名称最多32个字符"},{validator:o.letterAndUnderscode}],label:"参数名称(key)"}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"仅支持字母、下划线输入，最多32个字符"},model:{value:a.key,callback:function(e){o.$set(a,"key",e)},expression:"em.key"}})],1),o._v(" "),n("el-form-item",{attrs:{prop:"value_list."+r+".list."+i+".remark",rules:[{required:!0,message:"参数含义不能为空"}],label:"参数含义","label-width":"100px"}},[n("el-input",{staticClass:"input-width",model:{value:a.remark,callback:function(e){o.$set(a,"remark",e)},expression:"em.remark"}})],1),o._v(" "),n("el-form-item",{staticClass:"pl8",attrs:{prop:"value_list."+r+".list."+i+".unit",rules:[{validator:o.lengthLimit.bind(null,16)}],label:"单位"}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"支持中英文、特殊字符，最多16个字符"},model:{value:a.unit,callback:function(e){o.$set(a,"unit",e)},expression:"em.unit"}})],1),o._v(" "),n("el-form-item",{staticClass:"w100p",attrs:{prop:"value_list."+r+".list."+i+".method",rules:[{required:!0,message:"参数可控不能为空"}],label:"参数可控"}},[n("el-checkbox-group",{model:{value:a.method,callback:function(e){o.$set(a,"method",e)},expression:"em.method"}},[n("el-checkbox",{attrs:{label:"set"}},[o._v("set")]),o._v(" "),n("el-checkbox",{attrs:{label:"get"}},[o._v("get")]),o._v(" "),n("el-checkbox",{attrs:{label:"report"}},[o._v("report")]),o._v(" "),n("el-checkbox",{attrs:{label:"alarm"}},[o._v("alarm")])],1)],1),o._v(" "),n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"参数值类型"}},[n("el-radio-group",{on:{change:function(e){return o.changeTypeValue(e,a)}},model:{value:a.type,callback:function(e){o.$set(a,"type",e)},expression:"em.type"}},[n("el-radio",{attrs:{label:"string"}},[o._v("string")]),o._v(" "),n("el-radio",{attrs:{label:"int"}},[o._v("int")]),o._v(" "),n("el-radio",{attrs:{label:"float"}},[o._v("float")]),o._v(" "),n("el-radio",{attrs:{label:"array"}},[o._v("array")]),o._v(" "),n("el-radio",{attrs:{label:"bool"}},[o._v("bool")]),o._v(" "),n("el-radio",{attrs:{label:"otc"}},[o._v("otc")])],1)],1),o._v(" "),n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"复选/单选"}},[0<=["string","float","array","bool"].indexOf(a.type)?n("el-radio-group",{model:{value:a.is_checkbox,callback:function(e){o.$set(a,"is_checkbox",e)},expression:"em.is_checkbox"}},[n("el-radio",{attrs:{label:"1"}},[o._v("复选")]),o._v(" "),n("el-radio",{attrs:{label:"0"}},[o._v("单选")])],1):o._e()],1),o._v(" "),"otc"==a.type?n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"参数值"}},[n("el-input",{staticStyle:{width:"50%"},model:{value:a.value_list[0].value_des,callback:function(e){o.$set(a.value_list[0],"value_des",e)},expression:"em.value_list[0].value_des"}}),o._v(" "),n("span",[o._v("数据由厂商端输入")])],1):o._e(),o._v(" "),1==a.key_type?[n("el-form-item",{staticClass:"w100p mt0 pl8",attrs:{label:"枚举参数值"}},[n("el-form-item",{attrs:{label:"参数名称(key)","label-width":"290px"}}),o._v(" "),n("el-form-item",{attrs:{label:"传送数据","label-width":"290px"}}),o._v(" "),n("el-form-item",{attrs:{label:"操作","label-width":"60px"}})],1),o._v(" "),o._l(a.value_list,function(t,l){return n("el-form-item",{key:l,staticClass:"w100p mt0",attrs:{label:" "}},[n("el-form-item",{attrs:{prop:"value_list."+r+".list."+i+".value_list."+l+".value_des",rules:[{validator:o.lengthLimit.bind(null,64)}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"最多64个字符"},model:{value:t.value_des,callback:function(e){o.$set(t,"value_des",e)},expression:"vi.value_des"}})],1),o._v(" "),n("el-form-item",{attrs:{prop:"value_list."+r+".list."+i+".value_list."+l+".value",rules:[{validator:o.lengthLimit.bind(null,32)},{validator:o.unCN}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"字母数字符号，最多32个字符"},model:{value:t.value,callback:function(e){o.$set(t,"value",e)},expression:"vi.value"}})],1),o._v(" "),0<l?n("el-form-item",{staticStyle:{"padding-left":"25px"},attrs:{label:""}},[n("i",{staticClass:"el-icon-delete",on:{click:function(e){return o.delEnumerateItem(l,a)}}})]):o._e()],1)}),o._v(" "),n("el-form-item",{staticClass:"w100p",attrs:{label:" "},scopedSlots:o._u([{key:"default",fn:function(e){return[n("a",{staticClass:"addbtn",attrs:{href:"javascript:void(0);"},on:{click:function(e){return o.addEnumerateItem(a)}}},[n("i",{staticClass:"el-icon-plus"}),o._v(" 添加更多参数值\n                      ")])]}}])})]:o._e(),o._v(" "),2==a.key_type?n("div",[n("el-form-item",{staticClass:"w100p mt0 pl8",attrs:{label:"参数范围值"}},[a.value_list[1]?n("el-form-item",{attrs:{prop:"value_list."+r+".list."+i+".value_list.1.value",rules:[{required:!0,message:"最小值不能为空"},{type:"number",message:"最小值为数字"}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入数据最小值"},model:{value:a.value_list[1].value,callback:function(e){o.$set(a.value_list[1],"value",o._n(e))},expression:"em.value_list[1].value"}})],1):o._e(),o._v(" "),a.value_list[2]?n("el-form-item",{attrs:{prop:"value_list."+r+".list."+i+".value_list.2.value",rules:[{required:!0,message:"最大值不能为空"},{type:"number",message:"最大值为数字"}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入数据最大值"},model:{value:a.value_list[2].value,callback:function(e){o.$set(a.value_list[2],"value",o._n(e))},expression:"em.value_list[2].value"}})],1):o._e()],1)],1):o._e(),o._v(" "),0<i?n("div",{staticStyle:{"text-align":"right"}},[n("span",{staticClass:"el-icon-delete",attrs:{title:"删除参数"},on:{click:function(e){return o.deleteAttr(s,i)}}})]):o._e()],2)}),o._v(" "),n("a",{staticClass:"addAttr",attrs:{href:"javascript:void(0);"},on:{click:function(e){return o.addAttribute(s)}}},[n("i",{staticClass:"el-icon-plus"}),o._v(" 新增属性")])]:o._e()],2),o._v(" "),0<r?n("div",{staticStyle:{"text-align":"right"}},[n("span",{staticClass:"el-icon-delete",attrs:{title:"删除参数"},on:{click:function(e){return o.deleteParams(r)}}})]):o._e()],1)])}),o._v(" "),n("div",{staticClass:"buttonPos"},[n("el-button",{staticClass:"addParams",attrs:{type:"ghost"},on:{click:o.addParams}},[o._v("新增参数")])],1)],2),o._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:o.closeDialog}},[o._v("取 消")]),o._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:o.confirmTechnical}},[o._v("添 加")])],1)],1)],1)},staticRenderFns:[]};a=l("C7Lr")(n,a,!1,function(e){l("4BEV")},"data-v-15d1ac78",null),t.default=a.exports}});