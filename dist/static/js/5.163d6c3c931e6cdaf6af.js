webpackJsonp([5,30,31,32],{"/jzJ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("ryJJ"),o=a("7qmw"),l=a("uTyS"),n={name:"sdkUpload",components:{wifiSdkUpload:i.default,zigbeeSdkUpload:o.default,bluetoothSdkUpload:l.default},data:function(){return{activeName:"wifi",isZigbeeRender:!1,isBluetoothRender:!1}},methods:{renderOtherTab:function(e){"zigbee"===e.name?this.isZigbeeRender=!0:"bluetooth"===e.name&&(this.isBluetoothRender=!0)}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-container"},[a("el-tabs",{staticStyle:{"margin-top":"15px"},on:{"tab-click":t.renderOtherTab},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"WIFI",name:"wifi"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"ZigBee",name:"zigbee"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"蓝牙",name:"bluetooth"}})],1),t._v(" "),a("wifi-sdk-upload",{directives:[{name:"show",rawName:"v-show",value:"wifi"===t.activeName,expression:"activeName==='wifi'"}]}),t._v(" "),t.isZigbeeRender?a("zigbee-sdk-upload",{directives:[{name:"show",rawName:"v-show",value:"zigbee"===t.activeName,expression:"activeName==='zigbee'"}]}):t._e(),t._v(" "),t.isBluetoothRender?a("bluetooth-sdk-upload",{directives:[{name:"show",rawName:"v-show",value:"bluetooth"===t.activeName,expression:"activeName==='bluetooth'"}]}):t._e()],1)},staticRenderFns:[]};var r=a("VU/8")(n,s,!1,function(e){a("yFq3")},"data-v-15883d86",null);t.default=r.exports},"06X7":function(e,t,a){var i=a("XanO");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("e42dd1d2",i,!0)},"7qmw":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("w79a"),o=a("sQkU"),l=a("bzuE"),n=a("TIfe"),s={data:function(){var i=this;return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:l.d,dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:function(e,t,a){0===i.$refs.upload.uploadFiles.length?a(new Error("请选择上传文件！")):a()}}]},formLabelWidth:"120px",showTypeKey:!1,agreementList:[],productTypeList:[],fileList:[],uploadParams:{technology_type:2,token:Object(n.b)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.listLoading=!0;var e={technology_type:2,page:this.listQuery.page,limit:this.listQuery.limit};Object(i.c)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(o.h)().then(function(e){t.productTypeList=e.list})},getAgreementList:function(){var t=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var e={type_id:this.uploadParams.type_id,agreement_type:2};Object(i.a)(e).then(function(e){t.agreementList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){var t=e.size/1024/1024<5;return t||this.$message.error("SDK文件大小不能超过 5MB!"),t},handleChange:function(){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var t=this;this.$refs.uploadForm.validate(function(e){if(!e)return!1;t.$refs.upload.submit()})},uploadSuccess:function(e){var t=this;200===e.code?(this.$message.success("上传成功！"),setTimeout(function(){t.closeDialog()},200),this.getList()):this.$message.error(e.msg)},uploadError:function(){},modifySDK:function(e){this.dialogVisible=!0,this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_agreement_id,this.isToModify=!0}}},r={render:function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"app-container"},[i("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){a.dialogVisible=!0}}},[a._v("新建")]),a._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:a.list}},[i("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"technology_agreement",label:"协议"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名"},scopedSlots:a._u([{key:"default",fn:function(e){return[i("a",{attrs:{href:e.row.url,target:"_blank"}},[a._v("\n          "+a._s(e.row.filename)+"\n        ")])]}}])}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:a._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(e){return a.modifySDK(t.row)}}},[a._v("\n          修改\n        ")])]}}])})],1),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!a.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":a.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:a.total},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange,"update:currentPage":function(e){return a.$set(a.listQuery,"page",e)},"update:current-page":function(e){return a.$set(a.listQuery,"page",e)}}})],1),a._v(" "),i("el-dialog",{attrs:{title:"上传SDK文件",visible:a.dialogVisible,size:"small","before-close":a.handleClose},on:{"update:visible":function(e){a.dialogVisible=e}}},[i("el-form",{ref:"uploadForm",attrs:{model:a.uploadParams,rules:a.rules,"label-position":"right"}},[i("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":a.formLabelWidth}},[i("el-select",{attrs:{disabled:a.isToModify,placeholder:"请选择"},on:{change:a.getAgreementList},model:{value:a.uploadParams.type_id,callback:function(e){a.$set(a.uploadParams,"type_id",e)},expression:"uploadParams.type_id"}},a._l(a.productTypeList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),a._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:a.showTypeKey,expression:"showTypeKey"}],attrs:{label:"协议",prop:"technology_type_key","label-width":a.formLabelWidth}},[i("el-select",{attrs:{disabled:a.isToModify,placeholder:"请选择"},model:{value:a.uploadParams.technology_type_key,callback:function(e){a.$set(a.uploadParams,"technology_type_key",e)},expression:"uploadParams.technology_type_key"}},a._l(a.agreementList,function(e){return i("el-option",{key:e.agreement_id,attrs:{label:e.agreement,value:e.agreement_id}})}),1)],1),a._v(" "),i("el-form-item",{attrs:{label:"SDK文件","label-width":a.formLabelWidth,prop:"upload"}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:a.uploadParams,"file-list":a.fileList,"auto-upload":!1,"on-change":a.handleChange,"before-upload":a.beforeUpload,"on-error":a.uploadError,"on-success":a.uploadSuccess,limit:1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[a._v("选取文件")]),a._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a._v("只能上传zip文件，且不超过5M")])],1)],1)],1),a._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:a.closeDialog}},[a._v("取 消")]),a._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:a.uploadSDK}},[a._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(s,r,!1,function(e){a("06X7")},null,null);t.default=d.exports},GnL2:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"wifiSdkUpload.vue",sourceRoot:""}])},HIeg:function(e,t,a){"use strict";var i=a("//Fk"),o=a.n(i),l=a("mvHQ"),n=(a.n(l),a("woOf")),s=a.n(n),r=a("mtWM"),d=a.n(r),u=a("zL8q"),c=(a.n(u),a("IcnI")),p=a("DlMc"),g=(a.n(p),a("TIfe")),h=a("VSB1"),m=d.a.create({timeout:15e3});m.interceptors.request.use(function(e){var t={id:Object(p.v4)(),timestamp:Date.parse(new Date),version:"1.0"};return e.data instanceof FormData||-1!==e.url.indexOf("/icon")||-1!==e.url.indexOf("/product_agreement/versionadd")||(e.data=s()(t,e.data)),e.data||(e.data={}),c.a.getters.token&&(e.data.token=Object(g.b)()),"get"==e.method&&(e.url=e.url+"?"+h.a.serialize(e.data)),e},function(e){o.a.reject(e)}),m.interceptors.response.use(function(e){var t=e.data;return 200!==t.code?(Object(u.Message)({message:t.msg||t.message,type:"error",duration:2e3}),401===t.code&&c.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),o.a.reject(t)):-1!==e.config.url.indexOf("/v1")?o.a.resolve(e):e.data.result?o.a.resolve(e.data.result):o.a.resolve(e.data)},function(e){var t=e.response.data;return Object(u.Message)({message:t.msg||t.message,type:"error",duration:5e3}),401===t.code&&c.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),o.a.reject(t)}),t.a=m},JBdV:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"bluetoothSdkUpload.vue",sourceRoot:""}])},LfAm:function(e,t,a){var i=a("JBdV");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("55a98a86",i,!0)},NX1n:function(e,t,a){var i=a("GnL2");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("69400dba",i,!0)},WWuK:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,".tab-container[data-v-15883d86]{margin:30px}","",{version:3,sources:["D:/Product/PomeloHomeOpen_Sys/src/views/infoUpload/sdkUpload/index.vue"],names:[],mappings:"AACA,gCACE,WAAa,CACd",file:"index.vue",sourcesContent:["\n.tab-container[data-v-15883d86]{\n  margin: 30px;\n}\n"],sourceRoot:""}])},XanO:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"zigbeeSdkUpload.vue",sourceRoot:""}])},bzuE:function(e,t,a){"use strict";a.d(t,"d",function(){return i}),a.d(t,"c",function(){return o}),a.d(t,"b",function(){return l}),a.d(t,"a",function(){return n});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],o=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],l={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},n="星络科技"},ryJJ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("woOf"),o=a.n(i),l=a("w79a"),n=a("sQkU"),s=a("bzuE"),r=a("TIfe"),d={data:function(){var i=this;return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:s.d,queryCondition:{type_id:""},dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:function(e,t,a){0===i.$refs.upload.uploadFiles.length?a(new Error("请选择上传文件！")):a()}}]},formLabelWidth:"120px",showTypeKey:!1,wifiModuleList:[],productTypeList:[],fileList:[],showUploadMsg:!1,uploadParams:{technology_type:1,token:Object(r.b)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.listLoading=!0;var e={technology_type:1,page:this.listQuery.page,limit:this.listQuery.limit};o()(e,this.queryCondition),Object(l.c)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(n.h)().then(function(e){t.productTypeList=e.list})},getWifiModuleList:function(){var t=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var e={type_id:this.uploadParams.type_id};Object(l.d)(e).then(function(e){t.wifiModuleList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){var t=e.size/1024/1024<5;return t||this.$message.error("SDK文件大小不能超过 5MB!"),t},handleChange:function(){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var t=this;this.$refs.uploadForm.validate(function(e){if(!e)return!1;t.$refs.upload.submit()})},uploadSuccess:function(e){var t=this;200===e.code?(this.$message.success("上传成功！"),setTimeout(function(){t.closeDialog()},200),this.getList()):this.$message.error(e.msg)},uploadError:function(){},modifySDK:function(e){this.dialogVisible=!0,this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_module_id,this.isToModify=!0}}},u={render:function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:a.queryCondition}},[i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){a.dialogVisible=!0}}},[a._v("新建")])],1),a._v(" "),i("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:a.queryCondition.type_id,callback:function(e){a.$set(a.queryCondition,"type_id",e)},expression:"queryCondition.type_id"}},a._l(a.productTypeList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),a._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:a.getList}},[a._v("查询")])],1)],1)],1),a._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:a.list}},[i("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"technology_module_vendor",label:"模组/芯片厂家"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"technology_module_model",label:"型号"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名","min-width":"200"},scopedSlots:a._u([{key:"default",fn:function(e){return[i("a",{attrs:{href:e.row.url,target:"_blank"}},[a._v("\r\n            "+a._s(e.row.filename)+"\r\n          ")])]}}])}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:a._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(e){return a.modifySDK(t.row)}}},[a._v("\r\n            修改\r\n          ")])]}}])})],1),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!a.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":a.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:a.total},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange,"update:currentPage":function(e){return a.$set(a.listQuery,"page",e)},"update:current-page":function(e){return a.$set(a.listQuery,"page",e)}}})],1),a._v(" "),i("el-dialog",{attrs:{title:"上传SDK文件",visible:a.dialogVisible,"before-close":a.handleClose},on:{"update:visible":function(e){a.dialogVisible=e}}},[i("el-form",{ref:"uploadForm",attrs:{model:a.uploadParams,rules:a.rules,"label-position":"right"}},[i("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":a.formLabelWidth}},[i("el-select",{attrs:{disabled:a.isToModify,placeholder:"请选择"},on:{change:a.getWifiModuleList},model:{value:a.uploadParams.type_id,callback:function(e){a.$set(a.uploadParams,"type_id",e)},expression:"uploadParams.type_id"}},a._l(a.productTypeList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),a._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:a.showTypeKey,expression:"showTypeKey"}],attrs:{label:"模组/芯片厂家",prop:"technology_type_key","label-width":a.formLabelWidth}},[i("el-select",{attrs:{disabled:a.isToModify,placeholder:"请选择"},model:{value:a.uploadParams.technology_type_key,callback:function(e){a.$set(a.uploadParams,"technology_type_key",e)},expression:"uploadParams.technology_type_key"}},a._l(a.wifiModuleList,function(e){return i("el-option-group",{key:e.vendor,attrs:{label:e.vendor}},a._l(e.modellist,function(e){return i("el-option",{key:e.module_id,attrs:{label:e.model,value:e.module_id}})}),1)}),1)],1),a._v(" "),i("el-form-item",{attrs:{label:"SDK文件","label-width":a.formLabelWidth,prop:"upload"}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"list-type":"text",action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:a.uploadParams,"file-list":a.fileList,"auto-upload":!1,"on-change":a.handleChange,"before-upload":a.beforeUpload,"on-error":a.uploadError,"on-success":a.uploadSuccess,limit:1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[a._v("选取文件")]),a._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a._v("只能上传zip文件，且不超过5M")])],1)],1)],1),a._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:a.closeDialog}},[a._v("取 消")]),a._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:a.uploadSDK}},[a._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(d,u,!1,function(e){a("NX1n")},null,null);t.default=c.exports},sQkU:function(e,t,a){"use strict";t.j=function(e){return Object(i.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})},t.h=function(){return Object(i.a)({url:"/admin/product/type_lists",method:"post",data:{}})},t.i=function(e){return Object(i.a)({url:"/admin/review_info",method:"post",data:e})},t.c=function(e){return Object(i.a)({url:"/admin/review_approve",method:"post",data:e})},t.f=function(e){return Object(i.a)({url:"/admin/product_lists",method:"post",data:e})},t.e=function(e){return Object(i.a)({url:"/admin/product_info",method:"post",data:e})},t.k=function(e){return Object(i.a)({url:"/admin/product_unshelve",method:"post",data:e})},t.g=function(e){return Object(o.a)({url:"/api/ext/devcard/product",method:"get",data:e})},t.b=function(e){return Object(o.a)({url:"/api/ext/devcard/product",method:"post",data:e})},t.d=function(){return Object(o.a)({url:"/api/ext/gtags/global",method:"get"})},t.a=function(e){return Object(o.a)({url:"/api/ext/gtags/global",method:"post",data:e})};var i=a("Vo7i"),o=a("HIeg")},uTyS:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("w79a"),o=a("sQkU"),l=a("bzuE"),n=a("TIfe"),s={data:function(){var i=this;return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:l.d,dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:function(e,t,a){0===i.$refs.upload.uploadFiles.length?a(new Error("请选择上传文件！")):a()}}]},formLabelWidth:"120px",showTypeKey:!1,agreementList:[],productTypeList:[],fileList:[],uploadParams:{technology_type:3,token:Object(n.b)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.listLoading=!0;var e={technology_type:3,page:this.listQuery.page,limit:this.listQuery.limit};Object(i.c)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(o.h)().then(function(e){t.productTypeList=e.list})},getAgreementList:function(){var t=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var e={type_id:this.uploadParams.type_id,agreement_type:3};Object(i.a)(e).then(function(e){t.agreementList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){var t=e.size/1024/1024<5;return t||this.$message.error("SDK文件大小不能超过 5MB!"),t},handleChange:function(){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var t=this;this.$refs.uploadForm.validate(function(e){if(!e)return!1;t.$refs.upload.submit()})},uploadSuccess:function(e){var t=this;200===e.code?(this.$message.success("上传成功！"),setTimeout(function(){t.closeDialog()},200),this.getList()):this.$message.error(e.msg)},uploadError:function(){},modifySDK:function(e){this.dialogVisible=!0,this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_agreement_id,this.isToModify=!0}}},r={render:function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"app-container"},[i("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){a.dialogVisible=!0}}},[a._v("新建")]),a._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:a.list}},[i("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"technology_agreement",label:"协议"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名"},scopedSlots:a._u([{key:"default",fn:function(e){return[i("a",{attrs:{href:e.row.url,target:"_blank"}},[a._v("\n          "+a._s(e.row.filename)+"\n        ")])]}}])}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:a._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(e){return a.modifySDK(t.row)}}},[a._v("\n          修改\n        ")])]}}])})],1),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!a.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":a.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:a.total},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange,"update:currentPage":function(e){return a.$set(a.listQuery,"page",e)},"update:current-page":function(e){return a.$set(a.listQuery,"page",e)}}})],1),a._v(" "),i("el-dialog",{attrs:{title:"上传SDK文件",visible:a.dialogVisible,size:"small","before-close":a.handleClose},on:{"update:visible":function(e){a.dialogVisible=e}}},[i("el-form",{ref:"uploadForm",attrs:{model:a.uploadParams,rules:a.rules,"label-position":"right"}},[i("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":a.formLabelWidth}},[i("el-select",{attrs:{disabled:a.isToModify,placeholder:"请选择"},on:{change:a.getAgreementList},model:{value:a.uploadParams.type_id,callback:function(e){a.$set(a.uploadParams,"type_id",e)},expression:"uploadParams.type_id"}},a._l(a.productTypeList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),a._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:a.showTypeKey,expression:"showTypeKey"}],attrs:{label:"协议",prop:"technology_type_key","label-width":a.formLabelWidth}},[i("el-select",{attrs:{disabled:a.isToModify,placeholder:"请选择"},model:{value:a.uploadParams.technology_type_key,callback:function(e){a.$set(a.uploadParams,"technology_type_key",e)},expression:"uploadParams.technology_type_key"}},a._l(a.agreementList,function(e){return i("el-option",{key:e.agreement_id,attrs:{label:e.agreement,value:e.agreement_id}})}),1)],1),a._v(" "),i("el-form-item",{attrs:{label:"SDK文件","label-width":a.formLabelWidth,prop:"upload"}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:a.uploadParams,"file-list":a.fileList,"auto-upload":!1,"on-change":a.handleChange,"before-upload":a.beforeUpload,"on-error":a.uploadError,"on-success":a.uploadSuccess,limit:1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[a._v("选取文件")]),a._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a._v("只能上传zip文件，且不超过5M")])],1)],1)],1),a._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:a.closeDialog}},[a._v("取 消")]),a._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:a.uploadSDK}},[a._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(s,r,!1,function(e){a("LfAm")},null,null);t.default=d.exports},w79a:function(e,t,a){"use strict";t.c=function(e){return Object(i.a)({url:"/admin/sdk/list",method:"get",data:e})},t.d=function(e){return Object(i.a)({url:"/producttype/technologylists",method:"post",data:{}})},t.a=function(e){return Object(i.a)({url:"/producttype/technologylists",method:"post",data:e})},t.b=function(e){return Object(i.a)({url:"/admin/productdoc_lists?page="+e.page,method:"post",data:e})};var i=a("Vo7i")},yFq3:function(e,t,a){var i=a("WWuK");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("85b86c2e",i,!0)}});