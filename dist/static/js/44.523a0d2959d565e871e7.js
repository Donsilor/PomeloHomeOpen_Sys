webpackJsonp([44],{"+weV":function(e,t,a){var s=a("2uGp");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("dbb55fca",s,!0)},"2uGp":function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"productCheckDetail.vue",sourceRoot:""}])},HIeg:function(e,t,a){"use strict";var s=a("//Fk"),r=a.n(s),n=a("mvHQ"),o=(a.n(n),a("woOf")),c=a.n(o),l=a("mtWM"),i=a.n(l),p=a("zL8q"),d=(a.n(p),a("IcnI")),_=a("DlMc"),u=(a.n(_),a("TIfe")),h=a("VSB1"),f=i.a.create({timeout:15e3});f.interceptors.request.use(function(e){var t={id:Object(_.v4)(),timestamp:Date.parse(new Date),version:"1.0"};return e.data instanceof FormData||-1!==e.url.indexOf("/icon")||-1!==e.url.indexOf("/product_agreement/versionadd")||(e.data=c()(t,e.data)),e.data||(e.data={}),d.a.getters.token&&(e.data.token=Object(u.b)()),"get"==e.method&&(e.url=e.url+"?"+h.a.serialize(e.data)),e},function(e){r.a.reject(e)}),f.interceptors.response.use(function(e){var t=e.data;return 200!==t.code?(Object(p.Message)({message:t.msg||t.message,type:"error",duration:2e3}),401===t.code&&d.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),r.a.reject(t)):-1!==e.config.url.indexOf("/v1")?r.a.resolve(e):e.data.result?r.a.resolve(e.data.result):r.a.resolve(e.data)},function(e){var t=e.response.data;return Object(p.Message)({message:t.msg||t.message,type:"error",duration:5e3}),401===t.code&&d.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),r.a.reject(t)}),t.a=f},cBOl:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("sQkU"),n=a("zL8q"),s={name:"productCheckDetail",data:function(){return{baseInfoCheck:{action_type:1,unapproved_reason:"产品基本信息未审核通过"},tecTypeCheck:{action_type:1,unapproved_reason:"接入方式未审核通过"},funcCheck_default:{action_type:1,unapproved_reason:"必选功能点设置未审核通过"},funcCheck_optional:{action_type:1,unapproved_reason:"可选功能点设置未审核通过"},unapproved_reason_list:[],record_id:"",checkDetail:"",action_type:null,approved_reason:""}},computed:{attr_list_default:function(){if(this.checkDetail.attr_list)return this.checkDetail.attr_list.filter(function(e){return 1===e.is_enable&&1===e.is_default})},attr_list_optional:function(){if(this.checkDetail.attr_list)return this.checkDetail.attr_list.filter(function(e){return 1===e.is_enable&&0===e.is_default})}},created:function(){this.record_id=this.$route.query.record_id},mounted:function(){this.getReviewInfo()},methods:{getReviewInfo:function(){var t=this,e={record_id:this.record_id};Object(r.i)(e).then(function(e){t.checkDetail=e})},generateReason:function(e,t,a){if(2===t)this.unapproved_reason_list.push({checkProp:e,reason:a});else if(1===t)for(var s=0;s<this.unapproved_reason_list.length;s++)this.unapproved_reason_list[s].checkProp===e&&this.unapproved_reason_list.splice(s,1)},modifyReason:function(e,t){for(var a=this,s=0;s<a.unapproved_reason_list.length;s++)a.unapproved_reason_list[s].checkProp===e&&(""!=t.trim()?a.unapproved_reason_list[s].reason=t:""===t.trim()&&(a.unapproved_reason_list[s].reason=e))},commitCheck:function(){var t=this,e=this;if(0<this.unapproved_reason_list.length){this.action_type=2,e.approved_reason="";for(var a=0;a<e.unapproved_reason_list.length;a++)e.approved_reason=0===a?e.unapproved_reason_list[a].reason:e.approved_reason+"|"+e.unapproved_reason_list[a].reason}else this.action_type=1;var s={record_id:this.record_id,action_type:this.action_type,approved_reason:e.approved_reason};Object(r.c)(s).then(function(e){e.res&&(Object(n.Message)({message:"审核成功",type:"success",duration:2e3}),t.$router.go(-1))})},cancelCheck:function(){var t=this;this.$confirm("确认取消？").then(function(e){t.$router.go(-1)}).catch(function(e){})}},deactivated:function(){this.$destroy()}},o={render:function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"app-container"},[s("h3",[a._v("产品基本信息")]),a._v(" "),s("el-card",{staticClass:"box-card"},[s("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[s("el-col",{staticClass:"card-span-left",attrs:{span:2}},[a._v("产品品类")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},[a._v(a._s(a.checkDetail.type_name))])],1),a._v(" "),s("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[s("el-col",{staticClass:"card-span-left",attrs:{span:2}},[a._v("产品品牌")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},[a._v(a._s(a.checkDetail.brand_name))])],1),a._v(" "),s("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[s("el-col",{staticClass:"card-span-left",attrs:{span:2}},[a._v("产品名称")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},[a._v(a._s(a.checkDetail.name))])],1),a._v(" "),s("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[s("el-col",{staticClass:"card-span-left",attrs:{span:2}},[a._v("外观图片（六视图）")]),a._v(" "),a._l(a.checkDetail.images,function(e,t){return s("el-col",{key:e,staticClass:"card-hex-vision",attrs:{offset:0===t?1:0,span:3}},[s("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],staticStyle:{width:"100%",height:"100%"},attrs:{src:e}})])})],2),a._v(" "),s("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[s("el-col",{staticClass:"card-span-left",attrs:{span:2}},[a._v("产品规格书")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},[s("a",{attrs:{href:a.checkDetail.spec_url}},[a._v(a._s(a.checkDetail.spec_name))])])],1),a._v(" "),s("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[s("el-col",{staticClass:"card-span-left",attrs:{span:2}},[a._v("产品使用说明书")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},[s("a",{attrs:{href:a.checkDetail.instruct_url}},[a._v(a._s(a.checkDetail.instruct_name))])])],1),a._v(" "),s("div",[s("el-form",{staticClass:"check-form-inline",attrs:{inline:!0}},[s("el-row",[s("el-col",{staticClass:"check-radio",attrs:{span:6}},[s("el-form-item",[s("el-radio-group",{on:{change:function(e){return a.generateReason("产品基本信息未审核通过",a.baseInfoCheck.action_type,a.baseInfoCheck.unapproved_reason,"baseInfoCheck.unapproved_reason")}},model:{value:a.baseInfoCheck.action_type,callback:function(e){a.$set(a.baseInfoCheck,"action_type",e)},expression:"baseInfoCheck.action_type"}},[s("el-radio",{attrs:{label:1}},[a._v("审核通过")]),a._v(" "),s("el-radio",{attrs:{label:2}},[a._v("审核不通过")])],1)],1)],1),a._v(" "),2==a.baseInfoCheck.action_type?s("el-col",{staticClass:"check-reason",attrs:{span:18,offset:1}},[s("el-form-item",{attrs:{label:"审核结果："}},[s("el-input",{attrs:{type:"textarea",autosize:"",maxlength:500},on:{blur:function(e){return a.modifyReason("产品基本信息未审核通过",a.baseInfoCheck.unapproved_reason)}},model:{value:a.baseInfoCheck.unapproved_reason,callback:function(e){a.$set(a.baseInfoCheck,"unapproved_reason",e)},expression:"baseInfoCheck.unapproved_reason"}})],1)],1):a._e()],1)],1)],1)],1),a._v(" "),s("h3",[a._v("接入方式选择")]),a._v(" "),s("el-card",{staticClass:"box-card"},[s("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[s("el-col",{staticClass:"card-span-left",attrs:{span:2}},[a._v("选择技术方案")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},[a._v("\r\n        "+a._s(a.checkDetail.type_txt)+"\r\n      ")])],1),a._v(" "),"wifi"===a.checkDetail.type_txt?s("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[s("el-col",{staticClass:"card-span-left",attrs:{span:2}},[a._v("芯片厂商")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},[a._v("\r\n        "+a._s(a.checkDetail.type_vendor)+"\r\n      ")])],1):a._e(),a._v(" "),"wifi"===a.checkDetail.type_txt?s("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[s("el-col",{staticClass:"card-span-left",attrs:{span:2}},[a._v("芯片型号\r\n      ")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},[a._v("\r\n        "+a._s(a.checkDetail.type_model)+"\r\n      ")])],1):a._e(),a._v(" "),"zigbee"===a.checkDetail.type_txt||"bluetooth"===a.checkDetail.type_txt?s("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[s("el-col",{staticClass:"card-span-left",attrs:{span:2}},[a._v("协议\r\n      ")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},[a._v("\r\n        "+a._s(a.checkDetail.agreement)+"\r\n      ")])],1):a._e(),a._v(" "),s("div",[s("el-form",{staticClass:"check-form-inline",attrs:{inline:!0}},[s("el-row",[s("el-col",{staticClass:"check-radio",attrs:{span:6}},[s("el-form-item",[s("el-radio-group",{on:{change:function(e){return a.generateReason("接入方式未审核通过",a.tecTypeCheck.action_type,a.tecTypeCheck.unapproved_reason,"tecTypeCheck.unapproved_reason")}},model:{value:a.tecTypeCheck.action_type,callback:function(e){a.$set(a.tecTypeCheck,"action_type",e)},expression:"tecTypeCheck.action_type"}},[s("el-radio",{attrs:{label:1}},[a._v("审核通过")]),a._v(" "),s("el-radio",{attrs:{label:2}},[a._v("审核不通过")])],1)],1)],1),a._v(" "),2==a.tecTypeCheck.action_type?s("el-col",{staticClass:"check-reason",attrs:{span:18}},[s("el-form-item",{attrs:{label:"审核结果："}},[s("el-input",{attrs:{type:"textarea",autosize:"",maxlength:500},on:{blur:function(e){return a.modifyReason("接入方式未审核通过",a.tecTypeCheck.unapproved_reason)}},model:{value:a.tecTypeCheck.unapproved_reason,callback:function(e){a.$set(a.tecTypeCheck,"unapproved_reason",e)},expression:"tecTypeCheck.unapproved_reason"}})],1)],1):a._e()],1)],1)],1)],1),a._v(" "),s("h3",[a._v("必选功能点")]),a._v(" "),s("el-card",{staticClass:"box-card"},[s("el-table",{staticStyle:{width:"100%"},attrs:{slot:"header",data:a.attr_list_default,stripe:""},slot:"header"},[s("el-table-column",{attrs:{prop:"attr_id",label:"Stream_ID",width:"180"}}),a._v(" "),s("el-table-column",{attrs:{prop:"name",label:"参数名称",width:"180"}}),a._v(" "),s("el-table-column",{attrs:{prop:"value_list",label:"value"},scopedSlots:a._u([{key:"default",fn:function(e){return[1===e.row.type||2===e.row.type?s("span",[a._v(a._s(e.row.value_list.join("/")))]):s("span",[a._v(a._s(e.row.value_string))])]}}])})],1),a._v(" "),s("div",[s("el-form",{staticClass:"check-form-inline",attrs:{inline:!0}},[s("el-row",[s("el-col",{staticClass:"check-radio",attrs:{span:6}},[s("el-form-item",[s("el-radio-group",{on:{change:function(e){return a.generateReason("必选功能点设置未审核通过",a.funcCheck_default.action_type,a.funcCheck_default.unapproved_reason,"funcCheck_default")}},model:{value:a.funcCheck_default.action_type,callback:function(e){a.$set(a.funcCheck_default,"action_type",e)},expression:"funcCheck_default.action_type"}},[s("el-radio",{attrs:{label:1}},[a._v("审核通过")]),a._v(" "),s("el-radio",{attrs:{label:2}},[a._v("审核不通过")])],1)],1)],1),a._v(" "),2==a.funcCheck_default.action_type?s("el-col",{staticClass:"check-reason",attrs:{span:18}},[s("el-form-item",{attrs:{label:"审核结果："}},[s("el-input",{attrs:{type:"textarea",autosize:"",maxlength:500},on:{blur:function(e){return a.modifyReason("必选功能点设置未审核通过",a.funcCheck_default.unapproved_reason)}},model:{value:a.funcCheck_default.unapproved_reason,callback:function(e){a.$set(a.funcCheck_default,"unapproved_reason",e)},expression:"funcCheck_default.unapproved_reason"}})],1)],1):a._e()],1)],1)],1)],1),a._v(" "),s("h3",[a._v("可选功能点")]),a._v(" "),s("el-card",{staticClass:"box-card"},[s("el-table",{staticStyle:{width:"100%"},attrs:{slot:"header",data:a.attr_list_optional,stripe:""},slot:"header"},[s("el-table-column",{attrs:{prop:"attr_id",label:"Stream_ID",width:"180"}}),a._v(" "),s("el-table-column",{attrs:{prop:"name",label:"参数名称",width:"180"}}),a._v(" "),s("el-table-column",{attrs:{prop:"value_list",label:"value"},scopedSlots:a._u([{key:"default",fn:function(e){return[1===e.row.type||2===e.row.type?s("span",[a._v(a._s(e.row.value_list.join("/")))]):s("span",[a._v(a._s(e.row.value_string))])]}}])})],1),a._v(" "),s("div",[s("el-form",{staticClass:"check-form-inline",attrs:{inline:!0}},[s("el-row",[s("el-col",{staticClass:"check-radio",attrs:{span:6}},[s("el-form-item",[s("el-radio-group",{on:{change:function(e){return a.generateReason("可选功能点设置未审核通过",a.funcCheck_optional.action_type,a.funcCheck_optional.unapproved_reason,"funcCheck_optional")}},model:{value:a.funcCheck_optional.action_type,callback:function(e){a.$set(a.funcCheck_optional,"action_type",e)},expression:"funcCheck_optional.action_type"}},[s("el-radio",{attrs:{label:1}},[a._v("审核通过")]),a._v(" "),s("el-radio",{attrs:{label:2}},[a._v("审核不通过")])],1)],1)],1),a._v(" "),2==a.funcCheck_optional.action_type?s("el-col",{staticClass:"check-reason",attrs:{span:18}},[s("el-form-item",{attrs:{label:"审核结果："}},[s("el-input",{attrs:{type:"textarea",autosize:"",maxlength:500},on:{blur:function(e){return a.modifyReason("可选功能点设置未审核通过",a.funcCheck_optional.unapproved_reason)}},model:{value:a.funcCheck_optional.unapproved_reason,callback:function(e){a.$set(a.funcCheck_optional,"unapproved_reason",e)},expression:"funcCheck_optional.unapproved_reason"}})],1)],1):a._e()],1)],1)],1)],1),a._v(" "),s("el-card",{staticClass:"box-card",staticStyle:{margin:"30px 0"}},[a.unapproved_reason_list.length?s("p",[a._v("审核不通过：")]):a._e(),a._v(" "),a._l(a.unapproved_reason_list,function(e,t){return s("p",[a._v(a._s(t+1)+". "+a._s(e.reason)+"；")])}),a._v(" "),s("div",{staticStyle:{padding:"30px 0"}},[s("el-col",{attrs:{span:4}},[s("el-button",{attrs:{type:"primary"},on:{click:a.commitCheck}},[a._v("提交")])],1),a._v(" "),s("el-col",{attrs:{span:4}},[s("el-button",{on:{click:a.cancelCheck}},[a._v("取消")])],1)],1)],2)],1)},staticRenderFns:[]};var c=a("VU/8")(s,o,!1,function(e){a("+weV")},"data-v-7c8e0164",null);t.default=c.exports},sQkU:function(e,t,a){"use strict";t.j=function(e){return Object(s.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})},t.h=function(){return Object(s.a)({url:"/admin/product/type_lists",method:"post",data:{}})},t.i=function(e){return Object(s.a)({url:"/admin/review_info",method:"post",data:e})},t.c=function(e){return Object(s.a)({url:"/admin/review_approve",method:"post",data:e})},t.f=function(e){return Object(s.a)({url:"/admin/product_lists",method:"post",data:e})},t.e=function(e){return Object(s.a)({url:"/admin/product_info",method:"post",data:e})},t.k=function(e){return Object(s.a)({url:"/admin/product_unshelve",method:"post",data:e})},t.g=function(e){return Object(r.a)({url:"/api/ext/devcard/product",method:"get",data:e})},t.b=function(e){return Object(r.a)({url:"/api/ext/devcard/product",method:"post",data:e})},t.d=function(){return Object(r.a)({url:"/api/ext/gtags/global",method:"get"})},t.a=function(e){return Object(r.a)({url:"/api/ext/gtags/global",method:"post",data:e})};var s=a("Vo7i"),r=a("HIeg")}});