webpackJsonp([53],{"9Huu":function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"goLiveToAudit.vue",sourceRoot:""}])},H9Io:function(e,t,a){var s=a("9Huu");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("5fe6a4f2",s,!0)},HIeg:function(e,t,a){"use strict";var s=a("//Fk"),i=a.n(s),n=a("mvHQ"),o=(a.n(n),a("woOf")),r=a.n(o),c=a("mtWM"),l=a.n(c),_=a("zL8q"),p=(a.n(_),a("IcnI")),u=a("DlMc"),d=(a.n(u),a("TIfe")),v=a("VSB1"),h=l.a.create({timeout:15e3});h.interceptors.request.use(function(e){var t={id:Object(u.v4)(),timestamp:Date.parse(new Date),version:"1.0"};return e.data instanceof FormData||-1!==e.url.indexOf("/icon")||-1!==e.url.indexOf("/product_agreement/versionadd")||(e.data=r()(t,e.data)),e.data||(e.data={}),p.a.getters.token&&(e.data.token=Object(d.b)()),"get"==e.method&&(e.url=e.url+"?"+v.a.serialize(e.data)),e},function(e){i.a.reject(e)}),h.interceptors.response.use(function(e){var t=e.data;return 200!==t.code?(Object(_.Message)({message:t.msg||t.message,type:"error",duration:2e3}),401===t.code&&p.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),i.a.reject(t)):-1!==e.config.url.indexOf("/v1")?i.a.resolve(e):e.data.result?i.a.resolve(e.data.result):i.a.resolve(e.data)},function(e){var t=e.response.data;return Object(_.Message)({message:t.msg||t.message,type:"error",duration:5e3}),401===t.code&&p.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),i.a.reject(t)}),t.a=h},SiIB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("woOf"),i=a.n(s),n=a("sQkU"),o=a("zL8q"),r={name:"goLiveToAudit",data:function(){return{version_info:{action_type:0,description:"版本信息",unapproved_reason:""},record_id:"",checkDetail:{},business_name:"",action_type:1,approved_reason:"审核通过",loading:!1}},computed:{unapproved_list:function(){var t=[];return 0==this.version_info.action_type&&t.push(i()({},this.version_info)),this.checkDetail.file_list&&this.checkDetail.file_list.forEach(function(e){0==e.action_type&&t.push(i()({},e))}),this.checkDetail.release_file_list&&this.checkDetail.release_file_list.forEach(function(e){0==e.action_type&&t.push(i()({},e))}),t},reject_reason_list:function(){var t=[];return 2==this.version_info.action_type&&t.push(i()({},this.version_info)),this.checkDetail.file_list&&this.checkDetail.file_list.forEach(function(e){2==e.action_type&&t.push(i()({},e))}),this.checkDetail.release_file_list&&this.checkDetail.release_file_list.forEach(function(e){2==e.action_type&&t.push(i()({},e))}),t}},created:function(){this.record_id=this.$route.query.record_id,this.business_name=this.$route.query.business_name,this.type=this.$route.query.type||"detail",this.status=this.$route.query.status||"0"},mounted:function(){this.$store.dispatch("GetAuditMenus"),this.getReviewInfo()},methods:{getReviewInfo:function(){var t=this,a=this,e={record_id:a.record_id};Object(n.i)(e).then(function(e){t.checkDetail=e,0<a.checkDetail.file_list.length&&a.checkDetail.file_list.forEach(function(e){a.$set(e,"action_type",0),a.$set(e,"unapproved_reason",""),a.$set(e,"description",e.type_txt)}),0<a.checkDetail.release_file_list.length&&a.checkDetail.release_file_list.forEach(function(e){a.$set(e,"action_type",0),a.$set(e,"unapproved_reason",""),a.$set(e,"description",e.type_txt)})})},imgPreview:function(e){fancyBox(e.target,this.checkDetail.licenses)},commitCheck:function(){var t=this;if(this.action_type=1,0<this.unapproved_list.length)return!1;0<this.reject_reason_list.length&&(this.action_type=2);var e=this.reject_reason_list.map(function(e){return e.description+"未审核通过"+(e.unapproved_reason?"——"+e.unapproved_reason:"")}),a={record_id:this.record_id,action_type:this.action_type,approved_reason:e.join("|")};this.$confirm("确认提交？").then(function(){Object(n.c)(a).then(function(e){e.res&&(Object(o.Message)({message:"审核成功",type:"success",duration:2e3}),t.$router.go(-1))})})},cancelCheck:function(){var e=this;this.$confirm("确认取消？").then(function(){e.$router.go(-1)})}},deactivated:function(){this.$destroy()}},c={render:function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"app-container"},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return a.$router.go(-1)}}},[s("i",{staticClass:"el-icon-arrow-left"}),a._v(" 返回\n  ")]),a._v(" "),s("h3",[a._v(a._s(a.business_name))]),a._v(" "),"detail"==a.type?s("el-card",{staticClass:"box-card"},[1==a.status?s("div",{staticStyle:{color:"#67C23A","font-size":"24px"}},[a._v("\n      审核通过 "),s("i",{staticClass:"el-icon-circle-check"})]):a._e(),a._v(" "),2==a.status?s("div",[s("p",{staticStyle:{color:"#F56C6C","font-weight":"bold"}},[a._v("审核不通过")]),a._v(" "),a._l(a.checkDetail.approved_reason,function(e,t){return s("p",{key:t},[a._v(a._s(t+1)+"、"+a._s(e))])})],2):a._e()]):a._e(),a._v(" "),s("el-card",{staticClass:"box-card golive-box"},[s("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("i"),a._v(a._s(a.checkDetail.version_no)+"版本信息\n    ")]),a._v(" "),s("el-row",{staticClass:"card-body"},[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v("版本号")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[a._v(a._s(a.checkDetail.version_no))])],1),a._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v("版本说明")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[a._v("\n          "+a._s(a.checkDetail.des)+"\n        ")])],1),a._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v("固件版本要求")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[a._v("\n          "+a._s("需"+a.checkDetail.firmware_ids_txt+"及以上版本")+"\n        ")])],1),a._v(" "),"audit"==a.type?s("el-row",{staticClass:"card-handle-else"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){a.version_info.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==a.version_info.action_type,expression:"version_info.action_type==1"}],staticClass:"el-icon-check"}),a._v("\n            审核通过\n          ")]),a._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){a.version_info.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==a.version_info.action_type,expression:"version_info.action_type==2"}],staticClass:"el-icon-check"}),a._v("\n            审核不通过\n          ")])],1),a._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!=a.version_info.action_type,expression:"version_info.action_type!=0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[a._v("审核结果：")])]),a._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==a.version_info.action_type,expression:"version_info.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"},model:{value:a.version_info.unapproved_reason,callback:function(e){a.$set(a.version_info,"unapproved_reason",e)},expression:"version_info.unapproved_reason"}}),a._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==a.version_info.action_type,expression:"version_info.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),a._v(" 审核通过\n              ")])],1)],1)],1)],1):a._e(),a._v(" "),a._l(a.checkDetail.file_list,function(t){return[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v(a._s(t.type_txt))]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[s("a",{attrs:{href:t.file_url,target:"_blank",download:""}},[s("svg-icon",{attrs:{"icon-class":"zip"}}),a._v("\n              "+a._s(t.filename)+"\n            ")],1),a._v(" "),s("span",{staticClass:"dark-gray"},[a._v(a._s(t.size))])])],1),a._v(" "),"audit"==a.type?s("el-row",{staticClass:"card-handle-else"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==t.action_type,expression:"item.action_type==1"}],staticClass:"el-icon-check"}),a._v("\n              审核通过\n            ")]),a._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==t.action_type,expression:"item.action_type==2"}],staticClass:"el-icon-check"}),a._v("\n              审核不通过\n            ")])],1),a._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==t.action_type,expression:"item.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[a._v("审核结果：")])]),a._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==t.action_type,expression:"item.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"},model:{value:t.unapproved_reason,callback:function(e){a.$set(t,"unapproved_reason",e)},expression:"item.unapproved_reason"}}),a._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.action_type,expression:"item.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),a._v(" 审核通过\n                ")])],1)],1)],1)],1):a._e()]})],2)],1),a._v(" "),s("el-card",{staticClass:"box-card golive-box"},[s("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("i"),a._v("上线资料\n    ")]),a._v(" "),s("el-row",{staticClass:"card-body"},[a._l(a.checkDetail.release_file_list,function(t){return[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v(a._s(t.type_txt))]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[s("a",{attrs:{href:t.file_url,target:"_blank",download:""}},[s("svg-icon",{attrs:{"icon-class":"zip"}}),a._v("\n              "+a._s(t.filename)+"\n            ")],1),a._v(" "),s("span",{staticClass:"dark-gray"},[a._v(a._s(t.size))])])],1),a._v(" "),"audit"==a.type?s("el-row",{staticClass:"card-handle-else"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==t.action_type,expression:"item.action_type==1"}],staticClass:"el-icon-check"}),a._v("\n              审核通过\n            ")]),a._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==t.action_type,expression:"item.action_type==2"}],staticClass:"el-icon-check"}),a._v("\n              审核不通过\n            ")])],1),a._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==t.action_type,expression:"item.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[a._v("审核结果：")])]),a._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==t.action_type,expression:"item.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"},model:{value:t.unapproved_reason,callback:function(e){a.$set(t,"unapproved_reason",e)},expression:"item.unapproved_reason"}}),a._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.action_type,expression:"item.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),a._v(" 审核通过\n                ")])],1)],1)],1)],1):a._e()]})],2)],1),a._v(" "),"audit"==a.type?s("el-card",{staticClass:"box-card audit-box",staticStyle:{"margin-top":"30px"}},[s("el-row",[s("el-col",{attrs:{offset:4}},[a.unapproved_list.length?s("p",{staticStyle:{color:"#E6A23C"}},[a._v("未审核：")]):a._e()])],1),a._v(" "),a._l(a.unapproved_list,function(e,t){return s("el-row",{key:t},[s("el-col",{attrs:{offset:4}},[s("p",[a._v(a._s(t+1)+"、"+a._s(e.prefix)+a._s(e.description)+"还未审核；")])])],1)}),a._v(" "),s("el-row",[s("el-col",{attrs:{offset:4}},[a.reject_reason_list.length?s("p",{staticStyle:{color:"#F56C6C"}},[a._v("审核不通过：")]):a._e()])],1),a._v(" "),a._l(a.reject_reason_list,function(e,t){return s("el-row",{key:t},[s("el-col",{attrs:{offset:4}},[s("p",[a._v(a._s(t+1)+"、"+a._s(e.prefix)+a._s(e.description)+"未审核通过——"+a._s(e.unapproved_reason)+"；")])])],1)}),a._v(" "),s("el-row",{staticStyle:{"padding-top":"15px"}},[s("el-col",{attrs:{span:3,offset:4}},[s("el-button",{attrs:{disabled:0<a.unapproved_list.length||0<a.reject_reason_list,type:"primary",loading:a.loading},on:{click:a.commitCheck}},[a._v("提交\n        ")])],1),a._v(" "),s("el-col",{attrs:{span:3}},[s("el-button",{on:{click:a.cancelCheck}},[a._v("取消")])],1)],1)],2):a._e()],1)},staticRenderFns:[]};var l=a("VU/8")(r,c,!1,function(e){a("H9Io")},null,null);t.default=l.exports},sQkU:function(e,t,a){"use strict";t.j=function(e){return Object(s.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})},t.h=function(){return Object(s.a)({url:"/admin/product/type_lists",method:"post",data:{}})},t.i=function(e){return Object(s.a)({url:"/admin/review_info",method:"post",data:e})},t.c=function(e){return Object(s.a)({url:"/admin/review_approve",method:"post",data:e})},t.f=function(e){return Object(s.a)({url:"/admin/product_lists",method:"post",data:e})},t.e=function(e){return Object(s.a)({url:"/admin/product_info",method:"post",data:e})},t.k=function(e){return Object(s.a)({url:"/admin/product_unshelve",method:"post",data:e})},t.g=function(e){return Object(i.a)({url:"/api/ext/devcard/product",method:"get",data:e})},t.b=function(e){return Object(i.a)({url:"/api/ext/devcard/product",method:"post",data:e})},t.d=function(){return Object(i.a)({url:"/api/ext/gtags/global",method:"get"})},t.a=function(e){return Object(i.a)({url:"/api/ext/gtags/global",method:"post",data:e})};var s=a("Vo7i"),i=a("HIeg")}});