webpackJsonp([38],{ItbF:function(e,t,s){(e.exports=s("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"firmwareToAudit.vue",sourceRoot:""}])},Pzur:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("woOf"),i=s.n(a),n=s("sQkU"),o=s("zL8q"),r={name:"goLiveToAudit",data:function(){return{version_info:{action_type:0,description:"版本信息",unapproved_reason:""},record_id:"",checkDetail:{},business_name:"",action_type:1,approved_reason:"审核通过"}},computed:{unapproved_list:function(){var t=[];return 0==this.version_info.action_type&&t.push(i()({},this.version_info)),this.checkDetail.file_list&&this.checkDetail.file_list.forEach(function(e){0==e.action_type&&t.push(i()({},e))}),this.checkDetail.release_file_list&&this.checkDetail.release_file_list.forEach(function(e){0==e.action_type&&t.push(i()({},e))}),t},reject_reason_list:function(){var t=[];return 2==this.version_info.action_type&&t.push(i()({},this.version_info)),this.checkDetail.file_list&&this.checkDetail.file_list.forEach(function(e){2==e.action_type&&t.push(i()({},e))}),this.checkDetail.release_file_list&&this.checkDetail.release_file_list.forEach(function(e){2==e.action_type&&t.push(i()({},e))}),t}},created:function(){this.record_id=this.$route.query.record_id,this.business_name=this.$route.query.business_name,this.type=this.$route.query.type||"detail",this.status=this.$route.query.status||"0"},mounted:function(){this.$store.dispatch("GetAuditMenus"),this.getReviewInfo()},methods:{getReviewInfo:function(){var t=this,s=this,e={record_id:s.record_id};Object(n.e)(e).then(function(e){t.checkDetail=e,0<s.checkDetail.file_list.length&&s.checkDetail.file_list.forEach(function(e){s.$set(e,"action_type",0),s.$set(e,"unapproved_reason",""),s.$set(e,"description",e.type_txt)}),0<s.checkDetail.release_file_list.length&&s.checkDetail.release_file_list.forEach(function(e){s.$set(e,"action_type",0),s.$set(e,"unapproved_reason",""),s.$set(e,"description",e.type_txt)})})},imgPreview:function(e){fancyBox(e.target,this.checkDetail.licenses)},commitCheck:function(){var t=this;if(this.action_type=1,0<this.unapproved_list.length)return!1;0<this.reject_reason_list.length&&(this.action_type=2);var e=this.reject_reason_list.map(function(e){return e.description+"未审核通过"+(e.unapproved_reason?"——"+e.unapproved_reason:"")}),s={record_id:this.record_id,action_type:this.action_type,approved_reason:e.join("|")};this.$confirm("确认提交？").then(function(){Object(n.a)(s).then(function(e){e.res&&(Object(o.Message)({message:"审核成功",type:"success",duration:2e3}),t.$router.go(-1))})})},cancelCheck:function(){var e=this;this.$confirm("确认取消？").then(function(){e.$router.go(-1)})}},deactivated:function(){this.$destroy()}},c={render:function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"app-container"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){s.$router.go(-1)}}},[a("i",{staticClass:"el-icon-arrow-left"}),s._v(" 返回\n    ")]),s._v(" "),a("h3",[s._v(s._s(s.business_name))]),s._v(" "),"detail"==s.type?a("el-card",{staticClass:"box-card"},[1==s.status?a("div",{staticStyle:{color:"#67C23A","font-size":"24px"}},[s._v("\n            审核通过 "),a("i",{staticClass:"el-icon-circle-check"})]):s._e(),s._v(" "),2==s.status?a("div",[a("p",{staticStyle:{color:"#F56C6C","font-weight":"bold"}},[s._v("审核不通过")]),s._v(" "),s._l(s.checkDetail.approved_reason,function(e,t){return a("p",{key:t},[s._v(s._s(t+1)+"、"+s._s(e))])})],2):s._e()]):s._e(),s._v(" "),a("el-card",{staticClass:"box-card golive-box"},[a("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[a("i"),s._v(s._s(s.checkDetail.version_no)+"版本信息\n        ")]),s._v(" "),a("el-row",{staticClass:"card-body"},[a("el-row",{staticClass:"card-row"},[a("el-col",{staticClass:"card-span-left",attrs:{span:3}},[s._v("版本号")]),s._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[s._v(s._s(s.checkDetail.version_no))])],1),s._v(" "),a("el-row",{staticClass:"card-row"},[a("el-col",{staticClass:"card-span-left",attrs:{span:3}},[s._v("版本说明")]),s._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[s._v("\n                    "+s._s(s.checkDetail.des)+"\n                ")])],1),s._v(" "),"audit"==s.type?a("el-row",{staticClass:"card-handle-else"},[a("el-col",{attrs:{span:6,offset:4}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){s.version_info.action_type=1}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:1==s.version_info.action_type,expression:"version_info.action_type==1"}],staticClass:"el-icon-check"}),s._v("\n                        审核通过\n                    ")]),s._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){s.version_info.action_type=2}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:2==s.version_info.action_type,expression:"version_info.action_type==2"}],staticClass:"el-icon-check"}),s._v("\n                        审核不通过\n                    ")])],1),s._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:0!=s.version_info.action_type,expression:"version_info.action_type!=0"}],staticClass:"check-reason",attrs:{span:14}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"audit-result-label"},[s._v("审核结果：")])]),s._v(" "),a("el-col",{attrs:{span:20}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:2==s.version_info.action_type,expression:"version_info.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"},model:{value:s.version_info.unapproved_reason,callback:function(e){s.$set(s.version_info,"unapproved_reason",e)},expression:"version_info.unapproved_reason"}}),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==s.version_info.action_type,expression:"version_info.action_type == 1"}],staticClass:"audit-result-pass"},[a("i",{staticClass:"el-icon-circle-check"}),s._v(" 审核通过\n                            ")])],1)],1)],1)],1):s._e(),s._v(" "),s._l(s.checkDetail.file_list,function(t,e){return[a("el-row",{staticClass:"card-row"},[a("el-col",{staticClass:"card-span-left",attrs:{span:3}},[s._v(s._s(t.type_txt))]),s._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[a("a",{attrs:{href:t.file_url,target:"_blank",download:""}},[a("svg-icon",{attrs:{"icon-class":"zip"}}),s._v("\n                            "+s._s(t.filename)+"\n                        ")],1),s._v(" "),a("span",{staticClass:"dark-gray"},[s._v(s._s(t.size))])])],1),s._v(" "),"audit"==s.type?a("el-row",{staticClass:"card-handle-else"},[a("el-col",{attrs:{span:6,offset:4}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.action_type=1}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:1==t.action_type,expression:"item.action_type==1"}],staticClass:"el-icon-check"}),s._v("\n                            审核通过\n                        ")]),s._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.action_type=2}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:2==t.action_type,expression:"item.action_type==2"}],staticClass:"el-icon-check"}),s._v("\n                            审核不通过\n                        ")])],1),s._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==t.action_type,expression:"item.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"audit-result-label"},[s._v("审核结果：")])]),s._v(" "),a("el-col",{attrs:{span:20}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:2==t.action_type,expression:"item.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"},model:{value:t.unapproved_reason,callback:function(e){s.$set(t,"unapproved_reason",e)},expression:"item.unapproved_reason"}}),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.action_type,expression:"item.action_type == 1"}],staticClass:"audit-result-pass"},[a("i",{staticClass:"el-icon-circle-check"}),s._v(" 审核通过\n                                ")])],1)],1)],1)],1):s._e()]})],2)],1),s._v(" "),a("el-card",{staticClass:"box-card golive-box"},[a("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[a("i"),s._v("上线资料\n        ")]),s._v(" "),a("el-row",{staticClass:"card-body"},[s._l(s.checkDetail.release_file_list,function(t){return[a("el-row",{staticClass:"card-row"},[a("el-col",{staticClass:"card-span-left",attrs:{span:3}},[s._v(s._s(t.type_txt))]),s._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[a("a",{attrs:{href:t.file_url,target:"_blank",download:""}},[a("svg-icon",{attrs:{"icon-class":"zip"}}),s._v("\n                            "+s._s(t.filename)+"\n                        ")],1),s._v(" "),a("span",{staticClass:"dark-gray"},[s._v(s._s(t.size))])])],1),s._v(" "),"audit"==s.type?a("el-row",{staticClass:"card-handle-else"},[a("el-col",{attrs:{span:6,offset:4}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.action_type=1}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:1==t.action_type,expression:"item.action_type==1"}],staticClass:"el-icon-check"}),s._v("\n                            审核通过\n                        ")]),s._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.action_type=2}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:2==t.action_type,expression:"item.action_type==2"}],staticClass:"el-icon-check"}),s._v("\n                            审核不通过\n                        ")])],1),s._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==t.action_type,expression:"item.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"audit-result-label"},[s._v("审核结果：")])]),s._v(" "),a("el-col",{attrs:{span:20}},[a("el-input",{directives:[{name:"show",rawName:"v-show",value:2==t.action_type,expression:"item.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"},model:{value:t.unapproved_reason,callback:function(e){s.$set(t,"unapproved_reason",e)},expression:"item.unapproved_reason"}}),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.action_type,expression:"item.action_type == 1"}],staticClass:"audit-result-pass"},[a("i",{staticClass:"el-icon-circle-check"}),s._v(" 审核通过\n                                ")])],1)],1)],1)],1):s._e()]})],2)],1),s._v(" "),"audit"==s.type?a("el-card",{staticClass:"box-card audit-box",staticStyle:{"margin-top":"30px"}},[a("el-row",[a("el-col",{attrs:{offset:4}},[s.unapproved_list.length?a("p",{staticStyle:{color:"#E6A23C"}},[s._v("未审核：")]):s._e()])],1),s._v(" "),s._l(s.unapproved_list,function(e,t){return a("el-row",{key:t},[a("el-col",{attrs:{offset:4}},[a("p",[s._v(s._s(t+1)+"、"+s._s(e.prefix)+s._s(e.description)+"还未审核；")])])],1)}),s._v(" "),a("el-row",[a("el-col",{attrs:{offset:4}},[s.reject_reason_list.length?a("p",{staticStyle:{color:"#F56C6C"}},[s._v("审核不通过：")]):s._e()])],1),s._v(" "),s._l(s.reject_reason_list,function(e,t){return a("el-row",{key:t},[a("el-col",{attrs:{offset:4}},[a("p",[s._v(s._s(t+1)+"、"+s._s(e.prefix)+s._s(e.description)+"未审核通过——"+s._s(e.unapproved_reason)+"；")])])],1)}),s._v(" "),a("el-row",{staticStyle:{"padding-top":"15px"}},[a("el-col",{attrs:{span:3,offset:4}},[a("el-button",{attrs:{disabled:0<s.unapproved_list.length||0<s.reject_reason_list,type:"primary"},on:{click:s.commitCheck}},[s._v("提交\n                ")])],1),s._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{on:{click:s.cancelCheck}},[s._v("取消")])],1)],1)],2):s._e()],1)},staticRenderFns:[]};var l=s("VU/8")(r,c,!1,function(e){s("fT/X")},null,null);t.default=l.exports},"fT/X":function(e,t,s){var a=s("ItbF");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("f52040c8",a,!0)},sQkU:function(e,t,s){"use strict";t.f=function(e){return Object(a.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})},t.d=function(){return Object(a.a)({url:"/admin/product/type_lists",method:"post",data:{}})},t.e=function(e){return Object(a.a)({url:"/admin/review_info",method:"post",data:e})},t.a=function(e){return Object(a.a)({url:"/admin/review_approve",method:"post",data:e})},t.c=function(e){return Object(a.a)({url:"/admin/product_lists",method:"post",data:e})},t.b=function(e){return Object(a.a)({url:"/admin/product_info",method:"post",data:e})},t.g=function(e){return Object(a.a)({url:"/admin/product_unshelve",method:"post",data:e})};var a=s("Vo7i")}});