webpackJsonp([33],{"8sj2":function(t,e,s){"use strict";var a=s("woOf"),i=s.n(a),n=s("sQkU"),o=s("zL8q");s.n(o);e.a={name:"goLiveToAudit",data:function(){return{version_info:{action_type:0,description:"版本信息",unapproved_reason:""},record_id:"",checkDetail:{},business_name:"",action_type:1,approved_reason:"审核通过"}},computed:{unapproved_list:function(){var t=[];return 0==this.version_info.action_type&&t.push(i()({},this.version_info)),this.checkDetail.file_list&&this.checkDetail.file_list.forEach(function(e){0==e.action_type&&t.push(i()({},e))}),this.checkDetail.release_file_list&&this.checkDetail.release_file_list.forEach(function(e){0==e.action_type&&t.push(i()({},e))}),t},reject_reason_list:function(){var t=[];return 2==this.version_info.action_type&&t.push(i()({},this.version_info)),this.checkDetail.file_list&&this.checkDetail.file_list.forEach(function(e){2==e.action_type&&t.push(i()({},e))}),this.checkDetail.release_file_list&&this.checkDetail.release_file_list.forEach(function(e){2==e.action_type&&t.push(i()({},e))}),t}},created:function(){this.record_id=this.$route.query.record_id,this.business_name=this.$route.query.business_name,this.type=this.$route.query.type||"detail",this.status=this.$route.query.status||"0"},mounted:function(){this.$store.dispatch("GetAuditMenus"),this.getReviewInfo()},methods:{getReviewInfo:function(){var t=this,e=this,s={record_id:e.record_id};Object(n.e)(s).then(function(s){t.checkDetail=s,e.checkDetail.file_list.length>0&&e.checkDetail.file_list.forEach(function(t){e.$set(t,"action_type",0),e.$set(t,"unapproved_reason",""),e.$set(t,"description",t.type_txt)}),e.checkDetail.release_file_list.length>0&&e.checkDetail.release_file_list.forEach(function(t){e.$set(t,"action_type",0),e.$set(t,"unapproved_reason",""),e.$set(t,"description",t.type_txt)})})},imgPreview:function(t){fancyBox(t.target,this.checkDetail.licenses)},commitCheck:function(){var t=this;if(this.action_type=1,this.unapproved_list.length>0)return!1;this.reject_reason_list.length>0&&(this.action_type=2);var e={record_id:this.record_id,action_type:this.action_type,approved_reason:this.approved_reason};this.$confirm("确认提交？").then(function(){Object(n.a)(e).then(function(e){e.res&&(Object(o.Message)({message:"审核成功",type:"success",duration:2e3}),t.$router.go(-1))})})},cancelCheck:function(){var t=this;this.$confirm("确认取消？").then(function(){t.$router.go(-1)})}},deactivated:function(){this.$destroy()}}},Nc7n:function(t,e,s){var a=s("SyPB");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("ddf76288",a,!0)},SiIB:function(t,e,s){"use strict";function a(t){s("Nc7n")}Object.defineProperty(e,"__esModule",{value:!0});var i=s("8sj2"),n=s("jYzZ"),o=s("VU/8"),c=a,r=o(i.a,n.a,!1,c,null,null);e.default=r.exports},SyPB:function(t,e,s){e=t.exports=s("FZ+f")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"goLiveToAudit.vue",sourceRoot:""}])},jYzZ:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.$router.go(-1)}}},[s("i",{staticClass:"el-icon-arrow-left"}),t._v(" 返回\n  ")]),t._v(" "),s("h3",[t._v(t._s(t.business_name))]),t._v(" "),"detail"==t.type?s("el-card",{staticClass:"box-card"},[1==t.status?s("div",{staticStyle:{color:"#67C23A","font-size":"24px"}},[t._v("\n      审核通过 "),s("i",{staticClass:"el-icon-circle-check"})]):t._e(),t._v(" "),2==t.status?s("div",[s("p",{staticStyle:{color:"#F56C6C","font-weight":"bold"}},[t._v("审核不通过")]),t._v(" "),t._l(t.checkDetail.approved_reason,function(e,a){return s("p",[t._v(t._s(a+1)+"、"+t._s(e))])})],2):t._e()]):t._e(),t._v(" "),s("el-card",{staticClass:"box-card golive-box"},[s("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("i"),t._v(t._s(t.checkDetail.version_no)+"版本信息\n    ")]),t._v(" "),s("el-row",{staticClass:"card-body"},[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("版本号")]),t._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.checkDetail.version_no))])],1),t._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("版本说明")]),t._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v("\n          "+t._s(t.checkDetail.des)+"\n        ")])],1),t._v(" "),"audit"==t.type?s("el-row",{staticClass:"card-handle-else"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.version_info.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==t.version_info.action_type,expression:"version_info.action_type==1"}],staticClass:"el-icon-check"}),t._v("\n            审核通过\n          ")]),t._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.version_info.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==t.version_info.action_type,expression:"version_info.action_type==2"}],staticClass:"el-icon-check"}),t._v("\n            审核不通过\n          ")])],1),t._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!=t.version_info.action_type,expression:"version_info.action_type!=0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[t._v("审核结果：")])]),t._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==t.version_info.action_type,expression:"version_info.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.version_info.action_type,expression:"version_info.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),t._v(" 审核通过\n              ")])],1)],1)],1)],1):t._e(),t._v(" "),t._l(t.checkDetail.file_list,function(e){return[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v(t._s(e.type_txt))]),t._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[s("a",{attrs:{href:e.file_url,target:"_blank",download:""}},[s("svg-icon",{attrs:{"icon-class":"zip"}}),t._v("\n              "+t._s(e.filename)+"\n            ")],1),t._v(" "),s("span",{staticClass:"dark-gray"},[t._v(t._s(e.size))])])],1),t._v(" "),"audit"==t.type?s("el-row",{staticClass:"card-handle-else"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==e.action_type,expression:"item.action_type==1"}],staticClass:"el-icon-check"}),t._v("\n              审核通过\n            ")]),t._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==e.action_type,expression:"item.action_type==2"}],staticClass:"el-icon-check"}),t._v("\n              审核不通过\n            ")])],1),t._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==e.action_type,expression:"item.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[t._v("审核结果：")])]),t._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==e.action_type,expression:"item.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"},model:{value:e.unapproved_reason,callback:function(s){t.$set(e,"unapproved_reason",s)},expression:"item.unapproved_reason"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.action_type,expression:"item.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),t._v(" 审核通过\n                ")])],1)],1)],1)],1):t._e()]})],2)],1),t._v(" "),s("el-card",{staticClass:"box-card golive-box"},[s("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("i"),t._v("上线资料\n    ")]),t._v(" "),s("el-row",{staticClass:"card-body"},[t._l(t.checkDetail.release_file_list,function(e){return[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v(t._s(e.type_txt))]),t._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[s("a",{attrs:{href:e.file_url,target:"_blank",download:""}},[s("svg-icon",{attrs:{"icon-class":"zip"}}),t._v("\n              "+t._s(e.filename)+"\n            ")],1),t._v(" "),s("span",{staticClass:"dark-gray"},[t._v(t._s(e.size))])])],1),t._v(" "),"audit"==t.type?s("el-row",{staticClass:"card-handle-else"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==e.action_type,expression:"item.action_type==1"}],staticClass:"el-icon-check"}),t._v("\n              审核通过\n            ")]),t._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==e.action_type,expression:"item.action_type==2"}],staticClass:"el-icon-check"}),t._v("\n              审核不通过\n            ")])],1),t._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==e.action_type,expression:"item.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[t._v("审核结果：")])]),t._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==e.action_type,expression:"item.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"},model:{value:e.unapproved_reason,callback:function(s){t.$set(e,"unapproved_reason",s)},expression:"item.unapproved_reason"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.action_type,expression:"item.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),t._v(" 审核通过\n                ")])],1)],1)],1)],1):t._e()]})],2)],1),t._v(" "),"audit"==t.type?s("el-card",{staticClass:"box-card audit-box",staticStyle:{"margin-top":"30px"}},[s("el-row",[s("el-col",{attrs:{offset:4}},[t.unapproved_list.length?s("p",{staticStyle:{color:"#E6A23C"}},[t._v("未审核：")]):t._e()])],1),t._v(" "),t._l(t.unapproved_list,function(e,a){return s("el-row",[s("el-col",{attrs:{offset:4}},[s("p",[t._v(t._s(a+1)+"、"+t._s(e.prefix)+t._s(e.description)+"还未审核；")])])],1)}),t._v(" "),s("el-row",[s("el-col",{attrs:{offset:4}},[t.reject_reason_list.length?s("p",{staticStyle:{color:"#F56C6C"}},[t._v("审核不通过：")]):t._e()])],1),t._v(" "),t._l(t.reject_reason_list,function(e,a){return s("el-row",[s("el-col",{attrs:{offset:4}},[s("p",[t._v(t._s(a+1)+"、"+t._s(e.prefix)+t._s(e.description)+"未审核通过——"+t._s(e.unapproved_reason)+"；")])])],1)}),t._v(" "),s("el-row",{staticStyle:{"padding-top":"15px"}},[s("el-col",{attrs:{span:3,offset:4}},[s("el-button",{attrs:{disabled:t.unapproved_list.length>0||t.reject_reason_list>0,type:"primary"},on:{click:t.commitCheck}},[t._v("提交\n        ")])],1),t._v(" "),s("el-col",{attrs:{span:3}},[s("el-button",{on:{click:t.cancelCheck}},[t._v("取消")])],1)],1)],2):t._e()],1)},i=[],n={render:a,staticRenderFns:i};e.a=n},sQkU:function(t,e,s){"use strict";function a(t){return Object(_.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})}function i(){return Object(_.a)({url:"/product/type_lists",method:"post",data:{}})}function n(t){return Object(_.a)({url:"/admin/review_info",method:"post",data:t})}function o(t){return Object(_.a)({url:"/admin/review_approve",method:"post",data:t})}function c(t){return Object(_.a)({url:"/admin/product_lists",method:"post",data:t})}function r(t){return Object(_.a)({url:"/admin/product_info",method:"post",data:t})}function l(t){return Object(_.a)({url:"/admin/product_unshelve",method:"post",data:t})}e.f=a,e.d=i,e.e=n,e.a=o,e.c=c,e.b=r,e.g=l;var _=s("Vo7i")}});
//# sourceMappingURL=33.ea285667dd9a8e1b4e3e.js.map