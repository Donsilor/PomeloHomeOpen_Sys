webpackJsonp([17],{"0xDb":function(e,t,a){"use strict";t.a=n;var s=a("pFYg"),i=a.n(s);a("bzuE");function n(e,t){if(0===arguments.length)return null;var a=t||"{y}-{m}-{d} {h}:{i}:{s}",s=void 0,n={y:(s="object"===(void 0===e?"undefined":i()(e))?e:(10===(""+e).length&&(e=1e3*parseInt(e)),new Date(e))).getFullYear(),m:s.getMonth()+1,d:s.getDate(),h:s.getHours(),i:s.getMinutes(),s:s.getSeconds(),a:s.getDay()};return a.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var a=n[t];return"a"===t?["一","二","三","四","五","六","日"][a-1]:(0<e.length&&a<10&&(a="0"+a),a||0)})}},"1Jo0":function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,".enterprise-audit .brand-box{padding:0;margin-bottom:30px;position:relative}.enterprise-audit .brand-box:last-child{margin-bottom:0}.enterprise-audit .brand-box img{max-height:120px;margin-right:15px}","",{version:3,sources:["/Users/eric/PomeloHomeOpen_Sys/src/views/auditManagement/enterpriseToAudit.vue"],names:[],mappings:"AACA,6BACE,UAAW,AACX,mBAAoB,AACpB,iBAAmB,CACpB,AACD,wCACI,eAAiB,CACpB,AACD,iCACI,iBAAkB,AAClB,iBAAmB,CACtB",file:"enterpriseToAudit.vue",sourcesContent:["\n.enterprise-audit .brand-box {\n  padding: 0;\n  margin-bottom: 30px;\n  position: relative;\n}\n.enterprise-audit .brand-box:last-child {\n    margin-bottom: 0;\n}\n.enterprise-audit .brand-box img {\n    max-height: 120px;\n    margin-right: 15px;\n}\n"],sourceRoot:""}])},"5xU3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("woOf"),n=a.n(s),i=a("sQkU"),c=(a("0xDb"),a("zL8q")),o={name:"enterpriseToAudit",data:function(){return{contactsCheck:{action_type:0,description:"联系人信息",unapproved_reason:""},companyInfoCheck:{action_type:0,description:"公司/团队信息",unapproved_reason:""},record_id:"",checkDetail:{},business_name:"",originalCheckType:[],action_type:1,approved_reason:"审核通过"}},computed:{unapproved_list:function(){var t=[];return 0==this.contactsCheck.action_type&&t.push(n()({},this.contactsCheck)),0==this.companyInfoCheck.action_type&&t.push(n()({},this.companyInfoCheck)),this.checkDetail.licenses&&this.checkDetail.licenses.forEach(function(e){0==e.action_type&&t.push(n()({},e))}),this.originalCheckType.forEach(function(e){0==e.action_type&&t.push(n()({},e))}),t},reject_reason_list:function(){var t=[];return 2==this.contactsCheck.action_type&&t.push(n()({reject_type:"contacts"},this.contactsCheck)),2==this.companyInfoCheck.action_type&&t.push(n()({reject_type:"company"},this.companyInfoCheck)),this.checkDetail.licenses&&this.checkDetail.licenses.forEach(function(e){2==e.action_type&&t.push(n()({reject_type:"upload"},e))}),this.originalCheckType.forEach(function(e){2==e.action_type&&t.push(n()({reject_type:"copy"},e))}),t}},created:function(){this.record_id=this.$route.query.record_id,this.business_name=this.$route.query.business_name,this.type=this.$route.query.type||"detail",this.status=this.$route.query.status||"0"},mounted:function(){this.$store.dispatch("GetAuditMenus"),this.getReviewInfo()},methods:{getReviewInfo:function(){var t=this,a=this,e={record_id:a.record_id},s=[];Object(i.e)(e).then(function(e){t.checkDetail=e,0<a.checkDetail.licenses.length&&(a.checkDetail.licenses.forEach(function(e){a.$set(e,"action_type",0),a.$set(e,"prefix","上传——"),a.$set(e,"url",e.file_url),e.description=e.filename,a.$set(e,"unapproved_reason",""),s.push({action_type:0,prefix:"复核——",type:e.type,unapproved_reason:e.unapproved_reason,description:e.description})}),a.originalCheckType=s)})},imgPreview:function(e){fancyBox(e.target,this.checkDetail.licenses)},commitCheck:function(){var t=this;if(this.action_type=1,this.approved_reason="审核通过",0<this.unapproved_list.length)return!1;0<this.reject_reason_list.length&&(this.action_type=2,this.approved_reason=this.reject_reason_list.map(function(e){var t="";return e.prefix&&(t+=e.prefix),t+=e.description+"未审核通过",t+=e.unapproved_reason?"——"+e.unapproved_reason:""}).join("|"));var e=this.reject_reason_list.map(function(e){return e.description+"未审核通过"+(e.unapproved_reason?"——"+e.unapproved_reason:"")}),a={record_id:this.record_id,action_type:this.action_type,approved_reason:e.join("|")};this.$confirm("确认提交？").then(function(){Object(i.a)(a).then(function(e){e.res&&(Object(c.Message)({message:"审核成功",type:"success",duration:2e3}),t.$router.go(-1))})})},cancelCheck:function(){var e=this;this.$confirm("确认取消？").then(function(){e.$router.go(-1)})}},deactivated:function(){this.$destroy()}},r={render:function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"app-container"},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){a.$router.go(-1)}}},[s("i",{staticClass:"el-icon-arrow-left"}),a._v(" 返回\n    ")]),a._v(" "),s("h3",[a._v(a._s(a.business_name))]),a._v(" "),"detail"==a.type?s("el-card",{staticClass:"box-card"},[1==a.status?s("div",{staticStyle:{color:"#67C23A","font-size":"24px"}},[a._v("\n            审核通过 "),s("i",{staticClass:"el-icon-circle-check"})]):a._e(),a._v(" "),2==a.status?s("div",[s("p",{staticStyle:{color:"#F56C6C","font-weight":"bold"}},[a._v("审核不通过")]),a._v(" "),a._l(a.checkDetail.approved_reason,function(e,t){return s("p",{key:t},[a._v(a._s(t+1)+"、"+a._s(e))])})],2):a._e()]):a._e(),a._v(" "),s("el-card",{staticClass:"box-card"},[s("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("i"),a._v("联系人信息\n        ")]),a._v(" "),s("el-row",{staticClass:"card-body"},[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v("联系人姓名")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[a._v(a._s(a.checkDetail.contacts))])],1),a._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v("联系人手机")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[a._v(a._s(a.checkDetail.contacts_mobile))])],1),a._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v("职位")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[a._v(a._s(a.checkDetail.contacts_duty))])],1)],1),a._v(" "),"audit"==a.type?s("el-row",{staticClass:"card-handle"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){a.contactsCheck.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==a.contactsCheck.action_type,expression:"contactsCheck.action_type==1"}],staticClass:"el-icon-check"}),a._v("\n                    审核通过\n                ")]),a._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){a.contactsCheck.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==a.contactsCheck.action_type,expression:"contactsCheck.action_type==2"}],staticClass:"el-icon-check"}),a._v("\n                    审核不通过\n                ")])],1),a._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==a.contactsCheck.action_type,expression:"contactsCheck.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[a._v("审核结果：")])]),a._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==a.contactsCheck.action_type,expression:"contactsCheck.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"},model:{value:a.contactsCheck.unapproved_reason,callback:function(e){a.$set(a.contactsCheck,"unapproved_reason",e)},expression:"contactsCheck.unapproved_reason"}}),a._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==a.contactsCheck.action_type,expression:"contactsCheck.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),a._v(" 审核通过\n                        ")])],1)],1)],1)],1):a._e()],1),a._v(" "),s("el-card",{staticClass:"box-card"},[s("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("i"),a._v("公司/团队信息\n        ")]),a._v(" "),s("el-row",{staticClass:"card-body enterprise-audit"},[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v("公司名称")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[a._v(a._s(a.checkDetail.name))])],1),a._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v("公司地址")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[a._v(a._s(a.checkDetail.address))])],1),a._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v("营业执照注册号")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[a._v(a._s(a.checkDetail.registration_No))])],1),a._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v("客服电话")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[a._v(a._s(a.checkDetail.customer_num))])],1),a._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v("合作产品\n                ")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},a._l(a.checkDetail.type,function(e){return s("el-tag",{key:e.name,staticStyle:{margin:"0 10px 10px 0"},attrs:{type:"success"}},[a._v("\n                        "+a._s(e.name)+"\n                    ")])}))],1),a._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[a._v("合作品牌\n                ")]),a._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},a._l(a.checkDetail.brands,function(e,t){return s("div",{key:t,staticClass:"brand-box"},[s("el-row",[s("span",[a._v("品牌中文："+a._s(e.brand_name))])]),a._v(" "),s("el-row",{staticStyle:{margin:"10px auto"}},[s("span",[a._v("品牌英文："+a._s(e.manufacturer_name))])]),a._v(" "),s("el-row",[e.logo?s("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],attrs:{src:e.logo,alt:"品牌logo"}}):a._e(),a._v(" "),e.certs?s("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],attrs:{src:e.certs,alt:"资格证书"}}):a._e()])],1)}))],1)],1),a._v(" "),"audit"==a.type?s("el-row",{staticClass:"card-handle"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){a.companyInfoCheck.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==a.companyInfoCheck.action_type,expression:"companyInfoCheck.action_type==1"}],staticClass:"el-icon-check"}),a._v("\n                    审核通过\n                ")]),a._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){a.companyInfoCheck.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==a.companyInfoCheck.action_type,expression:"companyInfoCheck.action_type==2"}],staticClass:"el-icon-check"}),a._v("\n                    审核不通过\n                ")])],1),a._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==a.companyInfoCheck.action_type,expression:"companyInfoCheck.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[a._v("审核结果：")])]),a._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==a.companyInfoCheck.action_type,expression:"companyInfoCheck.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"},model:{value:a.companyInfoCheck.unapproved_reason,callback:function(e){a.$set(a.companyInfoCheck,"unapproved_reason",e)},expression:"companyInfoCheck.unapproved_reason"}}),a._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==a.companyInfoCheck.action_type,expression:"companyInfoCheck.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),a._v(" 审核通过\n                        ")])],1)],1)],1)],1):a._e()],1),a._v(" "),s("el-card",{staticClass:"box-card"},[s("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("i"),a._v("上传公司资质说明\n        ")]),a._v(" "),a._l(a.checkDetail.licenses,function(t,e){return s("div",{key:t.file_id,staticClass:"license-box"},[s("el-row",[s("el-col",{staticClass:"license-title",attrs:{offset:4}},[a._v("\n                    "+a._s(e+1)+"、"+a._s(t.filename)+"\n                ")])],1),a._v(" "),s("el-row",[s("el-col",{attrs:{offset:4}},[s("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],staticClass:"card-img-size",staticStyle:{"max-height":"300px"},attrs:{alt:"图片加载失败",src:t.file_url}})])],1),a._v(" "),"audit"==a.type?s("el-row",{staticClass:"card-handle-else"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==t.action_type,expression:"item.action_type==1"}],staticClass:"el-icon-check"}),a._v("\n                        审核通过\n                    ")]),a._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==t.action_type,expression:"item.action_type==2"}],staticClass:"el-icon-check"}),a._v("\n                        审核不通过\n                    ")])],1),a._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==t.action_type,expression:"item.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[a._v("审核结果：")])]),a._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==t.action_type,expression:"item.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"},model:{value:t.unapproved_reason,callback:function(e){a.$set(t,"unapproved_reason",e)},expression:"item.unapproved_reason"}}),a._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.action_type,expression:"item.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),a._v(" 审核通过\n                            ")])],1)],1)],1)],1):a._e()],1)})],2),a._v(" "),s("el-card",{staticClass:"box-card"},[s("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("i"),a._v("复核原件\n        ")]),a._v(" "),a._l(a.originalCheckType,function(t,e){return s("div",{key:t.id,staticClass:"review-license"},[s("el-row",[s("el-col",{attrs:{offset:4}},[s("p",[a._v(a._s(e+1)+"、"+a._s(t.description))])])],1),a._v(" "),"audit"==a.type?s("el-row",{staticClass:"card-handle-else"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==t.action_type,expression:"item.action_type==1"}],staticClass:"el-icon-check"}),a._v("\n                        审核通过\n                    ")]),a._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==t.action_type,expression:"item.action_type==2"}],staticClass:"el-icon-check"}),a._v("\n                        审核不通过\n                    ")])],1),a._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==t.action_type,expression:"item.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[a._v("审核结果：")])]),a._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==t.action_type,expression:"item.action_type == 2"}],attrs:{type:"textarea",autosize:"",maxlength:500,placeholder:"审核未通过理由"},model:{value:t.unapproved_reason,callback:function(e){a.$set(t,"unapproved_reason",e)},expression:"item.unapproved_reason"}}),a._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.action_type,expression:"item.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),a._v(" 审核通过\n                            ")])],1)],1)],1)],1):a._e()],1)})],2),a._v(" "),"audit"==a.type?s("el-card",{staticClass:"box-card audit-box",staticStyle:{"margin-top":"30px"}},[s("el-row",[s("el-col",{attrs:{offset:4}},[a.unapproved_list.length?s("p",{staticStyle:{color:"#E6A23C"}},[a._v("未审核：")]):a._e()])],1),a._v(" "),a._l(a.unapproved_list,function(e,t){return s("el-row",{key:t},[s("el-col",{attrs:{offset:4}},[s("p",[a._v(a._s(t+1)+"、"+a._s(e.prefix)+a._s(e.description)+"还未审核；")])])],1)}),a._v(" "),s("el-row",[s("el-col",{attrs:{offset:4}},[a.reject_reason_list.length?s("p",{staticStyle:{color:"#F56C6C"}},[a._v("审核不通过：")]):a._e()])],1),a._v(" "),a._l(a.reject_reason_list,function(e,t){return s("el-row",{key:t},[s("el-col",{attrs:{offset:4}},[s("p",[a._v(a._s(t+1)+"、"+a._s(e.prefix)+a._s(e.description)+"未审核通过——"+a._s(e.unapproved_reason)+"；")])])],1)}),a._v(" "),s("el-row",{staticStyle:{"padding-top":"15px"}},[s("el-col",{attrs:{span:3,offset:4}},[s("el-button",{attrs:{disabled:0<a.unapproved_list.length||0<a.reject_reason_list,type:"primary"},on:{click:a.commitCheck}},[a._v("提交\n                ")])],1),a._v(" "),s("el-col",{attrs:{span:3}},[s("el-button",{on:{click:a.cancelCheck}},[a._v("取消")])],1)],1)],2):a._e()],1)},staticRenderFns:[]};var l=a("VU/8")(o,r,!1,function(e){a("CqIy")},null,null);t.default=l.exports},CqIy:function(e,t,a){var s=a("1Jo0");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("2cdbd6e0",s,!0)},bzuE:function(e,t,a){"use strict";a.d(t,"d",function(){return s}),a.d(t,"c",function(){return n}),a.d(t,"b",function(){return i}),a.d(t,"a",function(){return c});var s=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],n=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],i={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},c="星络科技"},sQkU:function(e,t,a){"use strict";t.f=function(e){return Object(s.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})},t.d=function(){return Object(s.a)({url:"/admin/product/type_lists",method:"post",data:{}})},t.e=function(e){return Object(s.a)({url:"/admin/review_info",method:"post",data:e})},t.a=function(e){return Object(s.a)({url:"/admin/review_approve",method:"post",data:e})},t.c=function(e){return Object(s.a)({url:"/admin/product_lists",method:"post",data:e})},t.b=function(e){return Object(s.a)({url:"/admin/product_info",method:"post",data:e})},t.g=function(e){return Object(s.a)({url:"/admin/product_unshelve",method:"post",data:e})};var s=a("Vo7i")}});