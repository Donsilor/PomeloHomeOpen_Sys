webpackJsonp([42],{"7akC":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("sQkU"),r=t("/QDj"),a={name:"goLiveCheckDetail",data:function(){return{versionCheck:{action_type:1,unapproved_reason:"版本信息未审核通过"},unapproved_reason_list:[],record_id:"",checkDetail:{file_list:[],release_file_list:[]},action_type:null,approved_reason:""}},created:function(){this.record_id=this.$route.query.record_id},mounted:function(){this.getReviewInfo()},methods:{getReviewInfo:function(){var e=this,t=this,n={record_id:t.record_id};Object(o.i)(n).then(function(n){e.checkDetail=n,t.checkDetail.file_list&&t.checkDetail.file_list.forEach(function(n){t.$set(n,"action_type",1),t.$set(n,"unapproved_reason",n.type_txt+"未审核通过")}),t.checkDetail.release_file_list&&t.checkDetail.release_file_list.forEach(function(n){t.$set(n,"action_type",1),t.$set(n,"unapproved_reason",n.type_txt+"未审核通过")})})},generateReason:function(n,e,t){var a=this;if(2===e)this.unapproved_reason_list.push({checkProp:n,reason:t});else if(1===e)for(var o=0;o<a.unapproved_reason_list.length;o++)a.unapproved_reason_list[o].checkProp===n&&a.unapproved_reason_list.splice(o,1)},modifyReason:function(n,e){for(var t=this,a=0;a<t.unapproved_reason_list.length;a++)t.unapproved_reason_list[a].checkProp===n&&(""!=e.trim()?t.unapproved_reason_list[a].reason=e:""===e.trim()&&(t.unapproved_reason_list[a].reason=n))},commitCheck:function(){var e=this,n=this;if(0<this.unapproved_reason_list.length){this.action_type=2,n.approved_reason="";for(var t=0;t<n.unapproved_reason_list.length;t++)n.approved_reason=0===t?n.unapproved_reason_list[t].reason:n.approved_reason+"|"+n.unapproved_reason_list[t].reason}else this.action_type=1;var a={record_id:this.record_id,action_type:this.action_type,approved_reason:n.approved_reason};Object(o.c)(a).then(function(n){n.res&&(Object(r.Message)({message:"审核成功",type:"success",duration:2e3}),e.$router.go(-1))})},cancelCheck:function(){var e=this;this.$confirm("确认取消？").then(function(n){e.$router.go(-1)}).catch(function(n){})}},deactivated:function(){this.$destroy()}},s={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("el-row",{staticClass:"card-row"},[a("el-col",{staticClass:"card-span-left",attrs:{span:2}},[t._v("版本号")]),t._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t._v(t._s(t.checkDetail.version_no))])],1),t._v(" "),a("el-row",{staticClass:"card-row"},[a("el-col",{staticClass:"card-span-left",attrs:{span:2}},[t._v("版本说明")]),t._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t._v("\r\n        "+t._s(t.checkDetail.des)+"\r\n        "),a("div",{staticStyle:{"padding-top":"30px"}},[a("el-form",{staticClass:"check-form-inline",attrs:{inline:!0}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",[a("el-radio-group",{on:{change:function(n){t.generateReason("版本信息未审核通过",t.versionCheck.action_type,t.versionCheck.unapproved_reason)}},model:{value:t.versionCheck.action_type,callback:function(n){t.$set(t.versionCheck,"action_type",n)},expression:"versionCheck.action_type"}},[a("el-radio",{attrs:{label:1}},[t._v("审核通过")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("审核不通过")])],1)],1)],1),t._v(" "),2==t.versionCheck.action_type?a("el-col",{staticClass:"check-reason",attrs:{span:18}},[a("el-form-item",{attrs:{label:"审核结果："}},[a("el-input",{attrs:{type:"textarea",autosize:"",maxlength:500},on:{blur:function(n){t.modifyReason("版本信息未审核通过",t.versionCheck.unapproved_reason)}},model:{value:t.versionCheck.unapproved_reason,callback:function(n){t.$set(t.versionCheck,"unapproved_reason",n)},expression:"versionCheck.unapproved_reason"}})],1)],1):t._e()],1)],1)],1)])],1),t._v(" "),t.checkDetail.file_list.length?a("hr",{staticStyle:{margin:"0px 20px 20px 20px"}}):t._e(),t._v(" "),t._l(t.checkDetail.file_list,function(e){return a("el-row",{key:e.id,staticClass:"card-row"},[a("el-col",{staticClass:"card-span-left",attrs:{span:2}},[t._v(t._s(e.type_txt))]),t._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[a("a",{attrs:{href:e.file_url,target:"_blank"}},[t._v(t._s(e.filename))]),a("span",{staticStyle:{color:"darkgrey","padding-left":"8px"}},[t._v(t._s(e.size))]),t._v(" "),14===e.type||15===e.type?a("div",{staticStyle:{color:"darkgrey","padding-top":"10px"}},[t._v("压缩包仅支持zip格式，需按【产品品牌_产品型号】格式命名")]):a("div",{staticStyle:{color:"darkgrey","padding-top":"10px"}},[t._v("上传固件后，用户可进行设备固件更新")]),t._v(" "),a("div",{staticStyle:{"padding-top":"10px"}},[a("el-form",{staticClass:"check-form-inline",attrs:{inline:!0}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",[a("el-radio-group",{on:{change:function(n){t.generateReason(e.type_txt+"未审核通过",e.action_type,e.unapproved_reason)}},model:{value:e.action_type,callback:function(n){t.$set(e,"action_type",n)},expression:"item.action_type"}},[a("el-radio",{attrs:{label:1}},[t._v("审核通过")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("审核不通过")])],1)],1)],1),t._v(" "),2==e.action_type?a("el-col",{staticClass:"check-reason",attrs:{span:18}},[a("el-form-item",{attrs:{label:"审核结果："}},[a("el-input",{attrs:{type:"textarea",autosize:"",maxlength:500},on:{blur:function(n){t.modifyReason(e.type_txt+"未审核通过",e.unapproved_reason)}},model:{value:e.unapproved_reason,callback:function(n){t.$set(e,"unapproved_reason",n)},expression:"item.unapproved_reason"}})],1)],1):t._e()],1)],1)],1)])],1)}),t._v(" "),t.checkDetail.release_file_list.length?a("hr",{staticStyle:{margin:"0px 20px 20px 20px"}}):t._e(),t._v(" "),t._l(t.checkDetail.release_file_list,function(e){return a("el-row",{key:e.id,staticClass:"card-row"},[a("el-col",{staticClass:"card-span-left",attrs:{span:2}},[t._v(t._s(e.type_txt))]),t._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[a("a",{attrs:{href:e.file_url,target:"_blank"}},[t._v(t._s(e.filename))]),a("span",{staticStyle:{color:"darkgrey","padding-left":"8px"}},[t._v(t._s(e.size))]),t._v(" "),a("div",{staticStyle:{"padding-top":"10px"}},[a("el-form",{staticClass:"check-form-inline",attrs:{inline:!0}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",[a("el-radio-group",{on:{change:function(n){t.generateReason(e.type_txt+"未审核通过",e.action_type,e.unapproved_reason)}},model:{value:e.action_type,callback:function(n){t.$set(e,"action_type",n)},expression:"item.action_type"}},[a("el-radio",{attrs:{label:1}},[t._v("审核通过")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("审核不通过")])],1)],1)],1),t._v(" "),2==e.action_type?a("el-col",{staticClass:"check-reason",attrs:{span:18}},[a("el-form-item",{attrs:{label:"审核结果："}},[a("el-input",{attrs:{type:"textarea",autosize:"",maxlength:500},on:{blur:function(n){t.modifyReason(e.type_txt+"未审核通过",e.unapproved_reason)}},model:{value:e.unapproved_reason,callback:function(n){t.$set(e,"unapproved_reason",n)},expression:"item.unapproved_reason"}})],1)],1):t._e()],1)],1)],1)])],1)})],2),t._v(" "),a("el-card",{staticClass:"box-card",staticStyle:{margin:"30px 0"}},[t.unapproved_reason_list.length?a("p",[t._v("审核不通过：")]):t._e(),t._v(" "),t._l(t.unapproved_reason_list,function(n,e){return a("p",[t._v(t._s(e+1)+". "+t._s(n.reason)+"；")])}),t._v(" "),a("div",{staticStyle:{padding:"30px 0"}},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:t.commitCheck}},[t._v("提交")])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-button",{on:{click:t.cancelCheck}},[t._v("取消")])],1)],1)],2)],1)},staticRenderFns:[]};s=t("C7Lr")(a,s,!1,function(n){t("HfoE")},"data-v-187b2d04",null),e.default=s.exports},HfoE:function(n,e,t){var a=t("ujXO");(a="string"==typeof a?[[n.i,a,""]]:a).locals&&(n.exports=a.locals);t("8bSs")("09f2364a",a,!0)},sQkU:function(n,e,t){"use strict";e.j=function(n){return Object(a.a)({url:"/admin/review_lists?page="+n.page,method:"post",data:n})},e.h=function(){return Object(a.a)({url:"/admin/product/type_lists",method:"post",data:{}})},e.i=function(n){return Object(a.a)({url:"/admin/review_info",method:"post",data:n})},e.c=function(n){return Object(a.a)({url:"/admin/review_approve",method:"post",data:n})},e.f=function(n){return Object(a.a)({url:"/admin/product_lists",method:"post",data:n})},e.e=function(n){return Object(a.a)({url:"/admin/product_info",method:"post",data:n})},e.k=function(n){return Object(a.a)({url:"/admin/product_unshelve",method:"post",data:n})},e.g=function(n){return Object(a.a)({url:"/api/ext/devcard/product",method:"get",data:n})},e.b=function(n){return Object(a.a)({url:"/api/ext/devcard/product",method:"post",data:n})},e.d=function(){return Object(a.a)({url:"/api/ext/gtags/global",method:"get"})},e.a=function(n){return Object(a.a)({url:"/api/ext/gtags/global",method:"post",data:n})};var a=t("Vo7i")},ujXO:function(n,e,t){(n.exports=t("BkJT")(!0)).push([n.i,".card-img-tec[data-v-187b2d04]{width:300px;height:200px}","",{version:3,sources:["E:/workespace/PomeloHomeOpen_Sys/src/views/goLiveCheck/goLiveCheckDetail.vue"],names:[],mappings:"AAwRA,+BACE,YAAa,AACb,YAAa,CACd",file:"goLiveCheckDetail.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*.el-form-item__content {*/\n  /*width: 80%;*/\n/*}*/\n.card-img-tec[data-v-187b2d04] {\n  width: 300px;\n  height: 200px\n}\n"],sourceRoot:""}])}});