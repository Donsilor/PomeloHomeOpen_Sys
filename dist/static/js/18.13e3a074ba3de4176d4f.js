webpackJsonp([18],{"3WMu":function(e,n,t){"use strict";var a=t("sQkU");n.a={name:"goLiveCheckedDetail",data:function(){return{record_id:"",checkDetail:{file_list:[],release_file_list:[]}}},computed:{unapproved_reason_list:function(){if(this.checkDetail.approved_reason)return this.checkDetail.approved_reason}},created:function(){console.log("页面传参",this.$route.query),this.record_id=this.$route.query.record_id},mounted:function(){this.getReviewInfo()},methods:{getReviewInfo:function(){var e=this,n=this,t={record_id:n.record_id};Object(a.c)(t).then(function(t){console.log("产品审核详情",t),e.checkDetail=t,n.checkDetail.file_list.length>0&&n.checkDetail.file_list.forEach(function(e){n.$set(e,"action_type",1),n.$set(e,"unapproved_reason",e.filename+"未审核通过")}),n.checkDetail.release_file_list.length>0&&n.checkDetail.release_file_list.forEach(function(e){n.$set(e,"action_type",1),n.$set(e,"unapproved_reason",e.filename+"未审核通过")})})}},deactivated:function(){this.$destroy()}}},"6LJf":function(e,n,t){"use strict";function a(e){t("rYaE")}Object.defineProperty(n,"__esModule",{value:!0});var s=t("3WMu"),i=t("ZxXk"),r=t("VU/8"),c=a,l=r(s.a,i.a,!1,c,"data-v-6633f03d",null);n.default=l.exports},GV7Y:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,".card-img-tec[data-v-6633f03d]{width:300px;height:200px}","",{version:3,sources:["/code/evergrande/PomeloHomeOpen_Sys/src/views/goLiveCheck/goLiveCheckedDetail.vue"],names:[],mappings:"AAoHA,+BACE,YAAa,AACb,YAAa,CACd",file:"goLiveCheckedDetail.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*.el-form-item__content {*/\n/*width: 80%;*/\n/*}*/\n.card-img-tec[data-v-6633f03d] {\n  width: 300px;\n  height: 200px\n}\n"],sourceRoot:""}])},ZxXk:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app-container"},[t("el-card",{staticClass:"box-card"},[t("el-row",{staticClass:"card-row"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[e._v("版本号")]),e._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[e._v(e._s(e.checkDetail.version_no))])],1),e._v(" "),t("el-row",{staticClass:"card-row"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[e._v("版本说明")]),e._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[e._v("\n        "+e._s(e.checkDetail.des)+"\n      ")])],1),e._v(" "),e.checkDetail.file_list.length?t("hr",{staticStyle:{margin:"0px 20px 20px 20px"}}):e._e(),e._v(" "),e._l(e.checkDetail.file_list,function(n){return t("el-row",{key:n.id,staticClass:"card-row"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[e._v(e._s(n.type_txt))]),e._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t("a",{attrs:{href:n.file_url,target:"_blank"}},[e._v(e._s(n.filename))]),t("span",{staticStyle:{color:"darkgrey","padding-left":"8px"}},[e._v(e._s(n.size))]),e._v(" "),14===n.type||15===n.type?t("div",{staticStyle:{color:"darkgrey","padding-top":"10px"}},[e._v("压缩包仅支持zip格式，需按【产品品牌_产品型号】格式命名")]):t("div",{staticStyle:{color:"darkgrey","padding-top":"10px"}},[e._v("上传固件后，用户可进行设备固件更新")])])],1)}),e._v(" "),e.checkDetail.release_file_list.length?t("hr",{staticStyle:{margin:"0px 20px 20px 20px"}}):e._e(),e._v(" "),e._l(e.checkDetail.release_file_list,function(n){return t("el-row",{key:n.id,staticClass:"card-row"},[t("el-col",{staticClass:"card-span-left",attrs:{span:2}},[e._v("手机端控制页")]),e._v(" "),t("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t("a",{attrs:{href:n.file_url,target:"_blank"}},[e._v(e._s(n.filename))]),t("span",{staticStyle:{color:"darkgrey","padding-left":"8px"}},[e._v(e._s(n.size))])])],1)})],2),e._v(" "),2===e.$route.query.status?t("el-card",{staticClass:"box-card",staticStyle:{margin:"30px 0"}},[t("p",[e._v("审核不通过：")]),e._v(" "),e._l(e.unapproved_reason_list,function(n,a){return t("p",[e._v(e._s(a+1)+". "+e._s(n)+"；")])})],2):e._e()],1)},s=[],i={render:a,staticRenderFns:s};n.a=i},rYaE:function(e,n,t){var a=t("GV7Y");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("c3c401b0",a,!0)},sQkU:function(e,n,t){"use strict";function a(e){return Object(c.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})}function s(){return Object(c.a)({url:"/product/type_lists",method:"post",data:{}})}function i(e){return Object(c.a)({url:"/admin/review_info",method:"post",data:e})}function r(e){return Object(c.a)({url:"/admin/review_approve",method:"post",data:e})}n.d=a,n.b=s,n.c=i,n.a=r;var c=t("Vo7i")}});
//# sourceMappingURL=18.13e3a074ba3de4176d4f.js.map