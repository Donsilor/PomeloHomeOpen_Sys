webpackJsonp([22],{"7akC":function(n,e,t){"use strict";function a(n){t("vNHC")}Object.defineProperty(e,"__esModule",{value:!0});var o=t("v0X7"),s=t("PQGI"),r=t("VU/8"),i=a,l=r(o.a,s.a,!1,i,"data-v-cefe7848",null);e.default=l.exports},PQGI:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("el-card",{staticClass:"box-card"},[t("el-row",{staticClass:"card-row"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[n._v("版本号")]),n._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[n._v(n._s(n.checkDetail.version_no))])],1),n._v(" "),t("el-row",{staticClass:"card-row"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[n._v("版本说明")]),n._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[n._v("\n        "+n._s(n.checkDetail.des)+"\n        "),t("div",{staticStyle:{"padding-top":"30px"}},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[t("el-row",[t("el-col",{attrs:{span:6}},[t("el-form-item",[t("el-radio-group",{on:{change:function(e){n.generateReason("版本信息未审核通过",n.versionCheck.action_type,n.versionCheck.unapproved_reason)}},model:{value:n.versionCheck.action_type,callback:function(e){n.$set(n.versionCheck,"action_type",e)},expression:"versionCheck.action_type"}},[t("el-radio",{attrs:{label:1}},[n._v("审核通过")]),n._v(" "),t("el-radio",{attrs:{label:2}},[n._v("审核不通过")])],1)],1)],1),n._v(" "),2==n.versionCheck.action_type?t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"审核结果："}},[t("el-input",{on:{blur:function(e){n.modifyReason("版本信息未审核通过",n.versionCheck.unapproved_reason)}},model:{value:n.versionCheck.unapproved_reason,callback:function(e){n.$set(n.versionCheck,"unapproved_reason",e)},expression:"versionCheck.unapproved_reason"}})],1)],1):n._e()],1)],1)],1)])],1),n._v(" "),n._l(n.checkDetail.file_list,function(e){return t("el-row",{key:e.id,staticClass:"card-row"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[n._v("手机端控制页")]),n._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t("a",{attrs:{href:e.url}},[n._v(n._s(e.filename))]),n._v(" "),t("div",[n._v(n._s(e.size))]),n._v(" "),t("div",{staticStyle:{"padding-top":"30px"}},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[t("el-row",[t("el-col",{attrs:{span:6}},[t("el-form-item",[t("el-radio-group",{on:{change:function(t){n.generateReason(e.filename+"未审核通过",e.action_type,e.unapproved_reason)}},model:{value:e.action_type,callback:function(t){n.$set(e,"action_type",t)},expression:"item.action_type"}},[t("el-radio",{attrs:{label:1}},[n._v("审核通过")]),n._v(" "),t("el-radio",{attrs:{label:2}},[n._v("审核不通过")])],1)],1)],1),n._v(" "),2==n.baseInfoCheck.action_type?t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"审核结果："}},[t("el-input",{on:{blur:function(t){n.modifyReason(e.filename+"未审核通过",e.unapproved_reason)}},model:{value:e.unapproved_reason,callback:function(t){n.$set(e,"unapproved_reason",t)},expression:"item.unapproved_reason"}})],1)],1):n._e()],1)],1)],1)])],1)}),n._v(" "),n._l(n.checkDetail.release_file_list,function(e){return t("el-row",{key:e.id,staticClass:"card-row"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[n._v("手机端控制页")]),n._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t("a",{attrs:{href:e.url}},[n._v(n._s(e.filename))]),n._v(" "),t("div",[n._v(n._s(e.size))]),n._v(" "),t("div",{staticStyle:{"padding-top":"30px"}},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[t("el-row",[t("el-col",{attrs:{span:6}},[t("el-form-item",[t("el-radio-group",{on:{change:function(t){n.generateReason(e.filename+"未审核通过",e.action_type,e.unapproved_reason)}},model:{value:e.action_type,callback:function(t){n.$set(e,"action_type",t)},expression:"item.action_type"}},[t("el-radio",{attrs:{label:1}},[n._v("审核通过")]),n._v(" "),t("el-radio",{attrs:{label:2}},[n._v("审核不通过")])],1)],1)],1),n._v(" "),2==n.baseInfoCheck.action_type?t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"审核结果："}},[t("el-input",{on:{blur:function(t){n.modifyReason(e.filename+"未审核通过",e.unapproved_reason)}},model:{value:e.unapproved_reason,callback:function(t){n.$set(e,"unapproved_reason",t)},expression:"item.unapproved_reason"}})],1)],1):n._e()],1)],1)],1)])],1)})],2),n._v(" "),t("el-card",{staticClass:"box-card",staticStyle:{margin:"30px 0"}},[t("p",[n._v("审核不通过：")]),n._v(" "),n._l(n.unapproved_reason_list,function(e,a){return t("p",[n._v(n._s(a+1)+". "+n._s(e.reason)+"；")])}),n._v(" "),t("div",{staticStyle:{padding:"30px 0"}},[t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:n.commitCheck}},[n._v("提交")])],1),n._v(" "),t("el-col",{attrs:{span:4}},[t("el-button",[n._v("取消")])],1)],1)],2)],1)},o=[],s={render:a,staticRenderFns:o};e.a=s},oS9K:function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,".card-img-tec[data-v-cefe7848]{width:300px;height:200px}","",{version:3,sources:["/code/evergrande/PomeloHomeOpen_Sys/src/views/goLiveCheck/goLiveCheckDetail.vue"],names:[],mappings:"AAwQA,+BACE,YAAa,AACb,YAAa,CACd",file:"goLiveCheckDetail.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*.el-form-item__content {*/\n  /*width: 80%;*/\n/*}*/\n.card-img-tec[data-v-cefe7848] {\n  width: 300px;\n  height: 200px\n}\n"],sourceRoot:""}])},sQkU:function(n,e,t){"use strict";function a(n){return Object(i.a)({url:"/admin/review_lists?page="+n.page,method:"post",data:n})}function o(){return Object(i.a)({url:"/product/type_lists",method:"post",data:{}})}function s(n){return Object(i.a)({url:"/admin/review_info",method:"post",data:n})}function r(n){return Object(i.a)({url:"/admin/review_approve",method:"post",data:n})}e.d=a,e.b=o,e.c=s,e.a=r;var i=t("Vo7i")},v0X7:function(n,e,t){"use strict";var a=t("sQkU"),o=t("zL8q");t.n(o);e.a={name:"goLiveCheckDetail",data:function(){return{versionCheck:{action_type:1,unapproved_reason:"版本信息未审核通过"},unapproved_reason_list:[],record_id:"",checkDetail:"",action_type:null,approved_reason:""}},created:function(){console.log("页面传参",this.$route.query),this.record_id=this.$route.query.record_id},mounted:function(){this.getReviewInfo()},methods:{getReviewInfo:function(){var n=this,e=this,t={record_id:e.record_id};Object(a.c)(t).then(function(t){console.log("产品审核详情",t),n.checkDetail=t,e.checkDetail.file_list.length>0&&e.checkDetail.file_list.forEach(function(n){e.$set(n,"action_type",1),e.$set(n,"unapproved_reason",n.filename+"未审核通过")}),e.checkDetail.release_file_list.length>0&&e.checkDetail.release_file_list.forEach(function(n){e.$set(n,"action_type",1),e.$set(n,"unapproved_reason",n.filename+"未审核通过")})})},generateReason:function(n,e,t){console.log("入参",n,e,t);var a=this;if(2===e)this.unapproved_reason_list.push({checkProp:n,reason:t});else if(1===e)for(var o=0;o<a.unapproved_reason_list.length;o++)a.unapproved_reason_list[o].checkProp===n&&a.unapproved_reason_list.splice(o,1)},modifyReason:function(n,e){for(var t=this,a=0;a<t.unapproved_reason_list.length;a++)console.log(t.unapproved_reason_list[a].checkProp),t.unapproved_reason_list[a].checkProp===n&&(""!=e.trim()?t.unapproved_reason_list[a].reason=e:""===e.trim()&&(t.unapproved_reason_list[a].reason=n))},commitCheck:function(){var n=this;if(this.unapproved_reason_list.length>0){this.action_type=2,n.approved_reason="";for(var e=0;e<n.unapproved_reason_list.length;e++)n.approved_reason=0===e?n.unapproved_reason_list[e].reason:n.approved_reason+"|"+n.unapproved_reason_list[e].reason;console.log(n.approved_reason.split("|"))}else this.action_type=1;this.record_id,this.action_type,n.approved_reason}}}},vNHC:function(n,e,t){var a=t("oS9K");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("7629f03c",a,!0)}});
//# sourceMappingURL=22.398db4d764fddce47bfe.js.map