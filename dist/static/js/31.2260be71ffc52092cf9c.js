webpackJsonp([31],{ObH7:function(t,a,e){(t.exports=e("FZ+f")(!0)).push([t.i,".six-img{max-height:120px;margin-right:15px}.el-switch{z-index:100}.product-audit .brand-box{padding:0}.product-audit .brand-box img{max-height:120px;margin-right:15px}","",{version:3,sources:["D:/newPro/PomeloHomeOpen_Sys/src/views/auditManagement/productToAudit.vue"],names:[],mappings:"AACA,SACE,iBAAkB,AAClB,iBAAmB,CACpB,AACD,WACE,WAAa,CACd,AACD,0BACE,SAAW,CACZ,AACD,8BACI,iBAAkB,AAClB,iBAAmB,CACtB",file:"productToAudit.vue",sourcesContent:["\n.six-img {\n  max-height: 120px;\n  margin-right: 15px;\n}\n.el-switch {\n  z-index: 100;\n}\n.product-audit .brand-box {\n  padding: 0;\n}\n.product-audit .brand-box img {\n    max-height: 120px;\n    margin-right: 15px;\n}\n"],sourceRoot:""}])},Q3hr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("woOf"),i=e.n(s),c=e("sQkU"),n=e("VSB1"),o=e("zL8q"),r={name:"ProductToAudit",filters:{arrayToString:function(t){return t instanceof Array?t.join("/"):t}},data:function(){return{audit_info:{basic:{action_type:0,description:"产品基本信息",unapproved_reason:""},tech:{action_type:0,description:"技术方案选择",unapproved_reason:""},must_fps:{action_type:0,description:"必选功能点",unapproved_reason:""},opt_fps:{action_type:0,description:"可选功能点",unapproved_reason:""}},must_fps:[],opt_fps:[],spanMap:{},record_id:"",checkDetail:{},business_name:"",action_type:1,approved_reason:"审核通过"}},computed:{device_access_type:function(){switch(this.checkDetail.device_access_type){case 0:return"中控接入";case 1:return"云云对接";case 2:return"APP对接";case 3:return"云中控接入"}},unapproved_list:function(){var t=[];for(var a in this.audit_info)("must_fps"!=a&&"opt_fps"!=a||0!=this[a].length)&&0==this.audit_info[a].action_type&&t.push(i()({},this.audit_info[a]));return t},reject_reason_list:function(){var t=[];for(var a in this.audit_info)("must_fps"!=a&&"opt_fps"!=a||0!=this[a].length)&&2==this.audit_info[a].action_type&&t.push(i()({},this.audit_info[a]));return t}},created:function(){this.record_id=this.$route.query.record_id,this.business_name=this.$route.query.business_name,this.type=this.$route.query.type||"detail",this.status=this.$route.query.status||"0"},mounted:function(){this.$store.dispatch("GetAuditMenus"),this.getReviewInfos()},deactivated:function(){this.$destroy()},methods:{getReviewInfos:function(){var a=this,e=this,t={record_id:e.record_id};Object(c.e)(t).then(function(t){a.checkDetail=t;try{a.checkDetail.compat_ext=JSON.parse(a.checkDetail.compat_ext)}catch(t){a.checkDetail.compat_ext=a.checkDetail.compat_ext}a.checkDetail.compat_ext&&0!=a.checkDetail.compat_ext.length||(a.checkDetail.compat_ext=[],a.checkDetail.compat_ext.push({brand:"",compat:""})),t.attr_list.forEach(function(t){var a=t.is_default?"must_fps":"opt_fps";t.list?n.a.spanAnalyseData(t,e[a],e.spanMap):e[a].push(t)})})},imgPreview:function(t){fancyBox(t.target,this.checkDetail.licenses)},commitCheck:function(){var a=this;if(this.action_type=1,this.approved_reason="审核通过",0<this.unapproved_list.length)return!1;0<this.reject_reason_list.length&&(this.action_type=2),0<this.reject_reason_list.length&&(this.action_type=2,this.approved_reason=this.reject_reason_list.map(function(t){var a=t.description+"未审核通过";return a+=t.unapproved_reason?"——"+t.unapproved_reason:""}).join("|"));var t=this.reject_reason_list.map(function(t){return t.description+"未审核通过"+(t.unapproved_reason?"——"+t.unapproved_reason:"")}),e={record_id:this.record_id,action_type:this.action_type,approved_reason:t.join("|")};this.$confirm("确认提交？").then(function(){Object(c.a)(e).then(function(t){t.res&&(Object(o.Message)({message:"审核成功",type:"success",duration:2e3}),a.$router.go(-1))})})},cancelCheck:function(){var t=this;this.$confirm("确认取消？").then(function(){t.$router.go(-1)})},spanMethod:function(t){var a=t.row,e=(t.column,t.rowIndex),s=t.columnIndex,i=this.spanMap[a.nodeid];return n.a.spanMethod(i,s,e)}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.$router.go(-1)}}},[s("i",{staticClass:"el-icon-arrow-left"}),e._v(" 返回\n  ")]),e._v(" "),s("h3",[e._v(e._s(e.business_name))]),e._v(" "),"detail"==e.type?s("el-card",{staticClass:"box-card"},[1==e.status?s("div",{staticStyle:{color:"#67C23A","font-size":"24px"}},[e._v("\n      审核通过 "),s("i",{staticClass:"el-icon-circle-check"})]):e._e(),e._v(" "),2==e.status?s("div",[s("p",{staticStyle:{color:"#F56C6C","font-weight":"bold"}},[e._v("审核不通过")]),e._v(" "),e._l(e.checkDetail.approved_reason,function(t,a){return s("p",{key:a},[e._v(e._s(a+1)+"、"+e._s(t))])})],2):e._e()]):e._e(),e._v(" "),s("el-card",{staticClass:"box-card"},[s("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("i"),e._v("产品基本信息\n    ")]),e._v(" "),s("el-row",{staticClass:"card-body product-audit"},[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("产品品类")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.type_name))])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("对接方式")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.device_access_type))])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("合作品牌\n        ")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},[s("div",{staticClass:"brand-box"},[s("el-row",[s("span",[e._v("品牌中文："+e._s(e.checkDetail.brand_name))])]),e._v(" "),s("el-row",{staticStyle:{margin:"10px auto"}},[s("span",[e._v("品牌英文："+e._s(e.checkDetail.manufacturer_name))])]),e._v(" "),s("el-row",[e.checkDetail.brand_logo?s("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],attrs:{src:e.checkDetail.brand_logo,alt:"品牌logo"}}):e._e(),e._v(" "),e.checkDetail.brand_cert?s("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],attrs:{src:e.checkDetail.brand_cert,alt:"资格证书"}}):e._e()])],1)])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("产品名称")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.name))])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("产品别名")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.display_name))])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("产品型号")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.model))])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("兼容机型")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.compat))])],1),e._v(" "),e._l(e.checkDetail.compat_ext,function(t,a){return s("el-row",{staticClass:"card-row"},[s("el-row",{key:a,staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left edit-label",attrs:{span:3}},[e._v(e._s("兼容机型"+(a+2)))]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:3,offset:1}},[e._v(e._s(t.brand))]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:3,offset:1}},[e._v(e._s(t.compat))]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:3,offset:1}},[e._v(e._s(t.name))])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left edit-label",attrs:{span:3}},[e._v(" ")]),e._v(" "),s("el-col",{attrs:{span:6}},[s("img",{staticStyle:{"margin-left":"60px"},attrs:{src:t.icon_url,width:"80",alt:""}})])],1)],1)}),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("渠道商")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.distributor))])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("渠道商ID")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.distributor_pid))])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("客服电话")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.vendor_phone))])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("配网方式")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.network_name))])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("配网方式描述")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.network_des))])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("产品小图")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},[e.checkDetail.icon?s("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],staticClass:"six-img",attrs:{src:e.checkDetail.icon,alt:"图片加载失败"}}):e._e()])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("产品图片（六观图）")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},e._l(e.checkDetail.images,function(t){return s("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],key:t,staticClass:"six-img",attrs:{src:t,alt:"图片加载失败"}})}))],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("产品规格书")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[s("a",{attrs:{href:e.checkDetail.spec_url,target:"_blank",download:""}},[e._v(e._s(e.checkDetail.spec_name))])])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("产品使用说明书")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[s("a",{attrs:{href:e.checkDetail.instruct_url,target:"_blank",download:""}},[e._v(e._s(e.checkDetail.instruct_name))])])],1)],2),e._v(" "),"audit"==e.type?s("el-row",{staticClass:"card-handle"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.audit_info.basic.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==e.audit_info.basic.action_type,expression:"audit_info.basic.action_type==1"}],staticClass:"el-icon-check"}),e._v("\n          审核通过\n        ")]),e._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.audit_info.basic.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==e.audit_info.basic.action_type,expression:"audit_info.basic.action_type==2"}],staticClass:"el-icon-check"}),e._v("\n          审核不通过\n        ")])],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==e.audit_info.basic.action_type,expression:"audit_info.basic.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[e._v("审核结果：")])]),e._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==e.audit_info.basic.action_type,expression:"audit_info.basic.action_type == 2"}],attrs:{maxlength:500,type:"textarea",autosize:"",placeholder:"审核未通过理由"},model:{value:e.audit_info.basic.unapproved_reason,callback:function(t){e.$set(e.audit_info.basic,"unapproved_reason",t)},expression:"audit_info.basic.unapproved_reason"}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.audit_info.basic.action_type,expression:"audit_info.basic.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),e._v(" 审核通过\n            ")])],1)],1)],1)],1):e._e()],1),e._v(" "),s("el-card",{staticClass:"box-card"},[s("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("i"),e._v("技术方案选择\n    ")]),e._v(" "),s("el-row",{staticClass:"card-body"},[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("选择技术方案")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.type_txt||"无"))])],1),e._v(" "),1==e.checkDetail.type?[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("模组/芯片信息")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.type_vendor))])],1),e._v(" "),s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("型号")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.type_model))])],1)]:e._e(),e._v(" "),2==e.checkDetail.type||3==e.checkDetail.type?[s("el-row",{staticClass:"card-row"},[s("el-col",{staticClass:"card-span-left",attrs:{span:3}},[e._v("标准协议")]),e._v(" "),s("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e._v(e._s(e.checkDetail.agreement))])],1)]:e._e()],2),e._v(" "),"audit"==e.type?s("el-row",{staticClass:"card-handle"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.audit_info.tech.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==e.audit_info.tech.action_type,expression:"audit_info.tech.action_type==1"}],staticClass:"el-icon-check"}),e._v("\n          审核通过\n        ")]),e._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.audit_info.tech.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==e.audit_info.tech.action_type,expression:"audit_info.tech.action_type==2"}],staticClass:"el-icon-check"}),e._v("\n          审核不通过\n        ")])],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==e.audit_info.tech.action_type,expression:"audit_info.tech.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[e._v("审核结果：")])]),e._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==e.audit_info.tech.action_type,expression:"audit_info.tech.action_type == 2"}],attrs:{maxlength:500,type:"textarea",autosize:"",placeholder:"审核未通过理由"},model:{value:e.audit_info.tech.unapproved_reason,callback:function(t){e.$set(e.audit_info.tech,"unapproved_reason",t)},expression:"audit_info.tech.unapproved_reason"}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.audit_info.tech.action_type,expression:"audit_info.tech.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),e._v(" 审核通过\n            ")])],1)],1)],1)],1):e._e()],1),e._v(" "),s("el-card",{staticClass:"box-card"},[s("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("i"),e._v("必选功能点\n    ")]),e._v(" "),s("el-row",[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.must_fps,"span-method":e.spanMethod,"highlight-current-row":"",border:"",stripe:"",fit:""}},[s("el-table-column",{attrs:{align:"center",label:"Stream_ID",prop:"nodeid"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"参数名称",prop:"remark"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"value",prop:"value_list"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s("1"==t.row.key_type?t.row.value:t.row.origin_value_string)+"\n          ")]}}])}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"开启状态",prop:"is_enable"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-switch",{attrs:{value:!0,disabled:""}})]}}])})],1)],1),e._v(" "),"audit"==e.type&&0<e.must_fps.length?s("el-row",{staticClass:"card-handle"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.audit_info.must_fps.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==e.audit_info.must_fps.action_type,expression:"audit_info.must_fps.action_type==1"}],staticClass:"el-icon-check"}),e._v("\n          审核通过\n        ")]),e._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.audit_info.must_fps.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==e.audit_info.must_fps.action_type,expression:"audit_info.must_fps.action_type==2"}],staticClass:"el-icon-check"}),e._v("\n          审核不通过\n        ")])],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==e.audit_info.must_fps.action_type,expression:"audit_info.must_fps.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[e._v("审核结果：")])]),e._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==e.audit_info.must_fps.action_type,expression:"audit_info.must_fps.action_type == 2"}],attrs:{maxlength:500,type:"textarea",autosize:"",placeholder:"审核未通过理由"},model:{value:e.audit_info.must_fps.unapproved_reason,callback:function(t){e.$set(e.audit_info.must_fps,"unapproved_reason",t)},expression:"audit_info.must_fps.unapproved_reason"}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.audit_info.must_fps.action_type,expression:"audit_info.must_fps.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),e._v(" 审核通过\n            ")])],1)],1)],1)],1):e._e()],1),e._v(" "),s("el-card",{staticClass:"box-card"},[s("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("i"),e._v("可选功能点\n    ")]),e._v(" "),s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.opt_fps,"span-method":e.spanMethod,"highlight-current-row":"",border:"",stripe:"",fit:""}},[s("el-table-column",{attrs:{align:"center",label:"Stream_ID",prop:"nodeid"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"参数名称",prop:"remark"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"value",prop:"value_list"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s("1"==t.row.key_type?t.row.value:t.row.origin_value_string)+"\n        ")]}}])}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"开启状态",prop:"is_enable"},scopedSlots:e._u([{key:"default",fn:function(a){return[s("el-switch",{attrs:{disabled:""},model:{value:a.row.is_enable,callback:function(t){e.$set(a.row,"is_enable",t)},expression:"scope.row.is_enable"}})]}}])})],1),e._v(" "),"audit"==e.type&&0<e.opt_fps.length?s("el-row",{staticClass:"card-handle"},[s("el-col",{attrs:{span:6,offset:4}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.audit_info.opt_fps.action_type=1}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:1==e.audit_info.opt_fps.action_type,expression:"audit_info.opt_fps.action_type==1"}],staticClass:"el-icon-check"}),e._v("\n          审核通过\n        ")]),e._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.audit_info.opt_fps.action_type=2}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:2==e.audit_info.opt_fps.action_type,expression:"audit_info.opt_fps.action_type==2"}],staticClass:"el-icon-check"}),e._v("\n          审核不通过\n        ")])],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:0!==e.audit_info.opt_fps.action_type,expression:"audit_info.opt_fps.action_type !== 0"}],staticClass:"check-reason",attrs:{span:14}},[s("el-row",[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"audit-result-label"},[e._v("审核结果：")])]),e._v(" "),s("el-col",{attrs:{span:20}},[s("el-input",{directives:[{name:"show",rawName:"v-show",value:2==e.audit_info.opt_fps.action_type,expression:"audit_info.opt_fps.action_type == 2"}],attrs:{maxlength:500,type:"textarea",autosize:"",placeholder:"审核未通过理由"},model:{value:e.audit_info.opt_fps.unapproved_reason,callback:function(t){e.$set(e.audit_info.opt_fps,"unapproved_reason",t)},expression:"audit_info.opt_fps.unapproved_reason"}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.audit_info.opt_fps.action_type,expression:"audit_info.opt_fps.action_type == 1"}],staticClass:"audit-result-pass"},[s("i",{staticClass:"el-icon-circle-check"}),e._v(" 审核通过\n            ")])],1)],1)],1)],1):e._e()],1),e._v(" "),"audit"==e.type?s("el-card",{staticClass:"box-card audit-box",staticStyle:{"margin-top":"30px"}},[s("el-row",[s("el-col",{attrs:{offset:4}},[e.unapproved_list.length?s("p",{staticStyle:{color:"#E6A23C"}},[e._v("未审核：")]):e._e()])],1),e._v(" "),e._l(e.unapproved_list,function(t,a){return s("el-row",{key:a},[s("el-col",{attrs:{offset:4}},[s("p",[e._v(e._s(a+1)+"、"+e._s(t.prefix)+e._s(t.description)+"还未审核；")])])],1)}),e._v(" "),s("el-row",[s("el-col",{attrs:{offset:4}},[e.reject_reason_list.length?s("p",{staticStyle:{color:"#F56C6C"}},[e._v("审核不通过：")]):e._e()])],1),e._v(" "),e._l(e.reject_reason_list,function(t,a){return s("el-row",{key:a},[s("el-col",{attrs:{offset:4}},[s("p",[e._v(e._s(a+1)+"、"+e._s(t.prefix)+e._s(t.description)+"未审核通过——"+e._s(t.unapproved_reason)+"；")])])],1)}),e._v(" "),s("el-row",{staticStyle:{"padding-top":"15px"}},[s("el-col",{attrs:{span:3,offset:4}},[s("el-button",{attrs:{disabled:0<e.unapproved_list.length||0<e.reject_reason_list,type:"primary"},on:{click:e.commitCheck}},[e._v("提交\n        ")])],1),e._v(" "),s("el-col",{attrs:{span:3}},[s("el-button",{on:{click:e.cancelCheck}},[e._v("取消")])],1)],1)],2):e._e()],1)},staticRenderFns:[]};var _=e("VU/8")(r,l,!1,function(t){e("gaIE")},null,null);a.default=_.exports},gaIE:function(t,a,e){var s=e("ObH7");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("4a7995eb",s,!0)},sQkU:function(t,a,e){"use strict";a.f=function(t){return Object(s.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})},a.d=function(){return Object(s.a)({url:"/admin/product/type_lists",method:"post",data:{}})},a.e=function(t){return Object(s.a)({url:"/admin/review_info",method:"post",data:t})},a.a=function(t){return Object(s.a)({url:"/admin/review_approve",method:"post",data:t})},a.c=function(t){return Object(s.a)({url:"/admin/product_lists",method:"post",data:t})},a.b=function(t){return Object(s.a)({url:"/admin/product_info",method:"post",data:t})},a.g=function(t){return Object(s.a)({url:"/admin/product_unshelve",method:"post",data:t})};var s=e("Vo7i")}});