webpackJsonp([16],{N1pW:function(e,a,t){"use strict";var s=t("sQkU");a.a={name:"productCheckDetail",data:function(){return{baseInfoCheck:{action_type:1,unapproved_reason:"产品基本信息未审核通过"},tecTypeCheck:{action_type:1,unapproved_reason:"接入方式未审核通过"},funcCheck:{action_type:1,unapproved_reason:"功能点设置未审核通过"},unapproved_reason_list:[],record_id:"",checkDetail:"",action_type:null,approved_reason:""}},created:function(){console.log("页面传参",this.$route.query),this.record_id=this.$route.query.record_id},mounted:function(){this.getReviewInfo()},methods:{getReviewInfo:function(){var e=this,a=this,o={record_id:a.record_id};t.i(s.a)(o).then(function(a){console.log("产品审核详情",a),e.checkDetail=a})},generateReason:function(e,a,t,s){console.log("入参",e,a,t,s);var o=this;if(2===a)this.unapproved_reason_list.push({checkProp:e,reason:t});else if(1===a)for(var n=0;n<o.unapproved_reason_list.length;n++)o.unapproved_reason_list[n].checkProp===e&&o.unapproved_reason_list.splice(n,1)},modifyReason:function(e,a){for(var t=this,s=0;s<t.unapproved_reason_list.length;s++)console.log(t.unapproved_reason_list[s].checkProp),t.unapproved_reason_list[s].checkProp===e&&(""!=a.trim()?t.unapproved_reason_list[s].reason=a:""===a.trim()&&(t.unapproved_reason_list[s].reason=e))},commitCheck:function(){var e=this;if(this.unapproved_reason_list.length>0){this.action_type=2,e.approved_reason="";for(var a=0;a<e.unapproved_reason_list.length;a++)e.approved_reason=e.approved_reason+(a+1)+"."+e.unapproved_reason_list[a]+" ";console.log(e.approved_reason)}else this.action_type=1;this.record_id,this.action_type,e.approved_reason}}}},Zro3:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("h3",[e._v("产品基本信息")]),e._v(" "),t("el-card",{staticClass:"box-card"},[t("el-row",{staticClass:"card-row",slot:"header"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[e._v("产品品类")]),e._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[e._v(e._s(e.checkDetail.type_name))])],1),e._v(" "),t("el-row",{staticClass:"card-row",slot:"header"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[e._v("产品品牌")]),e._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[e._v(e._s(e.checkDetail.brand_name))])],1),e._v(" "),t("el-row",{staticClass:"card-row",slot:"header"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[e._v("产品名称")]),e._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[e._v(e._s(e.checkDetail.name))])],1),e._v(" "),t("el-row",{staticClass:"card-row",slot:"header"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[e._v("外观图片（六视图）")]),e._v(" "),e._l(e.checkDetail.images,function(e,a){return t("el-col",{key:e,staticClass:"card-hex-vision",attrs:{offset:0===a?2:0,span:3}},[t("img",{staticClass:"image",staticStyle:{width:"100%",height:"100%"},attrs:{src:e}})])})],2),e._v(" "),t("el-row",{staticClass:"card-row",slot:"header"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[e._v("产品规格书")]),e._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t("a",{attrs:{href:e.checkDetail.spec_url}},[e._v(e._s(e.checkDetail.spec_name))])])],1),e._v(" "),t("el-row",{staticClass:"card-row",slot:"header"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[e._v("产品使用说明书")]),e._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t("a",{attrs:{href:e.checkDetail.instruct_url}},[e._v(e._s(e.checkDetail.instruct_name))])])],1),e._v(" "),t("div",[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[t("el-row",[t("el-col",{attrs:{span:6}},[t("el-form-item",[t("el-radio-group",{on:{change:function(a){e.generateReason("产品基本信息未审核通过",e.baseInfoCheck.action_type,e.baseInfoCheck.unapproved_reason,"baseInfoCheck.unapproved_reason")}},model:{value:e.baseInfoCheck.action_type,callback:function(a){e.baseInfoCheck.action_type=a},expression:"baseInfoCheck.action_type"}},[t("el-radio",{attrs:{label:1}},[e._v("审核通过")]),e._v(" "),t("el-radio",{attrs:{label:2}},[e._v("审核不通过")])],1)],1)],1),e._v(" "),2==e.baseInfoCheck.action_type?t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"审核结果："}},[t("el-input",{on:{blur:function(a){e.modifyReason("产品基本信息未审核通过",e.baseInfoCheck.unapproved_reason)}},model:{value:e.baseInfoCheck.unapproved_reason,callback:function(a){e.baseInfoCheck.unapproved_reason=a},expression:"baseInfoCheck.unapproved_reason"}})],1)],1):e._e()],1)],1)],1)],1),e._v(" "),t("h3",[e._v("接入方式选择")]),e._v(" "),t("el-card",{staticClass:"box-card"},[t("el-row",{staticClass:"card-row",slot:"header"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[e._v("选择技术方案")]),e._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[e._v("\n        "+e._s(e.checkDetail.type_txt)+"\n      ")])],1),e._v(" "),t("el-row",{staticClass:"card-row",slot:"header"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[e._v("型号\n      ")]),e._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[e._v("\n        "+e._s(e.checkDetail.type_model)+"\n      ")])],1),e._v(" "),t("div",[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[t("el-row",[t("el-col",{attrs:{span:6}},[t("el-form-item",[t("el-radio-group",{on:{change:function(a){e.generateReason("接入方式未审核通过",e.tecTypeCheck.action_type,e.tecTypeCheck.unapproved_reason,"tecTypeCheck.unapproved_reason")}},model:{value:e.tecTypeCheck.action_type,callback:function(a){e.tecTypeCheck.action_type=a},expression:"tecTypeCheck.action_type"}},[t("el-radio",{attrs:{label:1}},[e._v("审核通过")]),e._v(" "),t("el-radio",{attrs:{label:2}},[e._v("审核不通过")])],1)],1)],1),e._v(" "),2==e.tecTypeCheck.action_type?t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"审核结果："}},[t("el-input",{on:{blur:function(a){e.modifyReason("接入方式未审核通过",e.tecTypeCheck.unapproved_reason)}},model:{value:e.tecTypeCheck.unapproved_reason,callback:function(a){e.tecTypeCheck.unapproved_reason=a},expression:"tecTypeCheck.unapproved_reason"}})],1)],1):e._e()],1)],1)],1)],1),e._v(" "),t("h3",[e._v("必选功能点")]),e._v(" "),t("el-card",{staticClass:"box-card"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.checkDetail.attr_list,stripe:""},slot:"header"},[t("el-table-column",{attrs:{prop:"attr_id",label:"Stream_ID",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"参数名称",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"value_list",label:"value"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.value_list.join("/")))])]}}])})],1),e._v(" "),t("div",[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[t("el-row",[t("el-col",{attrs:{span:6}},[t("el-form-item",[t("el-radio-group",{on:{change:function(a){e.generateReason("功能点设置未审核通过",e.funcCheck.action_type,e.funcCheck.unapproved_reason,"funcCheck")}},model:{value:e.funcCheck.action_type,callback:function(a){e.funcCheck.action_type=a},expression:"funcCheck.action_type"}},[t("el-radio",{attrs:{label:1}},[e._v("审核通过")]),e._v(" "),t("el-radio",{attrs:{label:2}},[e._v("审核不通过")])],1)],1)],1),e._v(" "),2==e.funcCheck.action_type?t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"审核结果："}},[t("el-input",{on:{blur:function(a){e.modifyReason("功能点设置未审核通过",e.funcCheck.unapproved_reason)}},model:{value:e.funcCheck.unapproved_reason,callback:function(a){e.funcCheck.unapproved_reason=a},expression:"funcCheck.unapproved_reason"}})],1)],1):e._e()],1)],1)],1)],1),e._v(" "),t("el-card",{staticClass:"box-card",staticStyle:{margin:"30px 0"}},[t("p",[e._v("审核不通过：")]),e._v(" "),e._l(e.unapproved_reason_list,function(a,s){return t("p",[e._v(e._s(s+1)+". "+e._s(a.reason)+"；")])}),e._v(" "),t("div",{staticStyle:{padding:"30px 0"}},[t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:e.commitCheck}},[e._v("提交")])],1),e._v(" "),t("el-col",{attrs:{span:4}},[t("el-button",[e._v("取消")])],1)],1)],2)],1)},o=[],n={render:s,staticRenderFns:o};a.a=n},cBOl:function(e,a,t){"use strict";function s(e){t("rLN6")}Object.defineProperty(a,"__esModule",{value:!0});var o=t("N1pW"),n=t("Zro3"),r=t("VU/8"),c=s,l=r(o.a,n.a,c,"data-v-c49785f8",null);a.default=l.exports},cm2b:function(e,a,t){a=e.exports=t("FZ+f")(!0),a.push([e.i,".el-form-item__content[data-v-c49785f8]{width:80%}.card-img-tec[data-v-c49785f8]{width:300px;height:200px}","",{version:3,sources:["/code/evergrande/PomeloHomeOpen_Sys/src/views/productCheck/productCheckDetail.vue"],names:[],mappings:"AACA,wCACE,SAAW,CACZ,AACD,+BACE,YAAa,AACb,YAAa,CACd",file:"productCheckDetail.vue",sourcesContent:["\n.el-form-item__content[data-v-c49785f8] {\n  width: 80%;\n}\n.card-img-tec[data-v-c49785f8] {\n  width: 300px;\n  height: 200px\n}\n"],sourceRoot:""}])},rLN6:function(e,a,t){var s=t("cm2b");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("7c0f587e",s,!0)},sQkU:function(e,a,t){"use strict";function s(e){return t.i(c.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})}function o(){return t.i(c.a)({url:"/product/type_lists",method:"post",data:{}})}function n(e){return t.i(c.a)({url:"/admin/review_info",method:"post",data:e})}function r(e){return t.i(c.a)({url:"/admin/review_approve",method:"post",data:e})}a.b=s,a.c=o,a.a=n,a.d=r;var c=t("Vo7i")}});
//# sourceMappingURL=16.398da8fcc6c3601916db.js.map