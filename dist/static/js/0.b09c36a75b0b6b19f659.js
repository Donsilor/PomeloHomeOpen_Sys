webpackJsonp([0,9,10,11],{"/jzJ":function(e,t,o){"use strict";function i(e){o("2KpD")}Object.defineProperty(t,"__esModule",{value:!0});var a=o("9BWa"),l=o("tWgq"),s=o("C7Lr"),n=i,r=s(a.a,l.a,!1,n,"data-v-15883d86",null);t.default=r.exports},"/pwZ":function(e,t,o){t=e.exports=o("BkJT")(!0),t.push([e.i,".tab-container[data-v-15883d86]{margin:30px}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/infoUpload/sdkUpload/index.vue"],names:[],mappings:"AACA,gCACE,WAAa,CACd",file:"index.vue",sourcesContent:["\n.tab-container[data-v-15883d86]{\n  margin: 30px;\n}\n"],sourceRoot:""}])},"2KpD":function(e,t,o){var i=o("/pwZ");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o("8bSs")("5b563fce",i,!0)},"7qmw":function(e,t,o){"use strict";function i(e){o("omew")}Object.defineProperty(t,"__esModule",{value:!0});var a=o("OPex"),l=o("WhR/"),s=o("C7Lr"),n=i,r=s(a.a,l.a,!1,n,null,null);t.default=r.exports},"9BWa":function(e,t,o){"use strict";var i=o("ryJJ"),a=o("7qmw"),l=o("uTyS");t.a={name:"sdkUpload",components:{wifiSdkUpload:i.default,zigbeeSdkUpload:a.default,bluetoothSdkUpload:l.default},data:function(){return{activeName:"wifi",isZigbeeRender:!1,isBluetoothRender:!1}},methods:{renderOtherTab:function(e,t){"zigbee"===e.name?this.isZigbeeRender=!0:"bluetooth"===e.name&&(this.isBluetoothRender=!0)}}}},HSGA:function(e,t,o){"use strict";var i=o("w79a"),a=o("sQkU"),l=o("bzuE"),s=o("TIfe");t.a={data:function(){var e=this,t=function(t,o,i){0===e.$refs.upload.uploadFiles.length?i(new Error("请选择上传文件！")):i()};return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:l.d,dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:t}]},formLabelWidth:"120px",showTypeKey:!1,agreementList:[],productTypeList:[],fileList:[],uploadParams:{technology_type:3,token:Object(s.a)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var e=this;this.listLoading=!0;var t={technology_type:3,page:this.listQuery.page,limit:this.listQuery.limit};Object(i.c)(t).then(function(t){console.log("sdk列表",t),e.list=t.data,e.total=t.total,e.listLoading=!1})},getProductType:function(){var e=this;Object(a.d)().then(function(t){console.log("产品品类",t),e.productTypeList=t.list})},getAgreementList:function(){var e=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var t={type_id:this.uploadParams.type_id,agreement_type:3};Object(i.a)(t).then(function(t){console.log("协议列表",t),e.agreementList=t.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){var t=e.size/1024/1024<5;return t||this.$message.error("SDK文件大小不能超过 5MB!"),t},handleChange:function(e,t){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var e=this;console.log("文件",this.$refs.upload.uploadFiles),this.$refs.uploadForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$refs.upload.submit()})},uploadSuccess:function(e,t,o){var i=this;console.log("成功回调",e,t,o),200===e.code?(this.$message.success("上传成功！"),setTimeout(function(){i.closeDialog()},200),this.getList()):this.$message.error(e.msg)},uploadError:function(e,t,o){console.log("失败回调",e,t,o)},modifySDK:function(e){this.dialogVisible=!0,console.log("行数据",e),this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_agreement_id,this.isToModify=!0}}}},Is7h:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("div",{staticClass:"filter-container"},[o("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryCondition}},[o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新建")])],1),e._v(" "),o("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.queryCondition.type_id,callback:function(t){e.$set(e.queryCondition,"type_id",t)},expression:"queryCondition.type_id"}},e._l(e.productTypeList,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getList}},[e._v("查询")])],1)],1)],1),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:e.list}},[o("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"technology_module_vendor",label:"模组/芯片厂家"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"technology_module_model",label:"型号"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("a",{attrs:{href:t.row.url,target:"_blank"}},[e._v("\r\n            "+e._s(t.row.filename)+"\r\n          ")])]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(o){e.modifySDK(t.row)}}},[e._v("\r\n            修改\r\n          ")])]}}])})],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[o("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),o("el-dialog",{attrs:{title:"上传SDK文件",visible:e.dialogVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("el-form",{ref:"uploadForm",attrs:{model:e.uploadParams,rules:e.rules,"label-position":"right"}},[o("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":e.formLabelWidth}},[o("el-select",{attrs:{disabled:e.isToModify,placeholder:"请选择"},on:{change:e.getWifiModuleList},model:{value:e.uploadParams.type_id,callback:function(t){e.$set(e.uploadParams,"type_id",t)},expression:"uploadParams.type_id"}},e._l(e.productTypeList,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showTypeKey,expression:"showTypeKey"}],attrs:{label:"模组/芯片厂家",prop:"technology_type_key","label-width":e.formLabelWidth}},[o("el-select",{attrs:{disabled:e.isToModify,placeholder:"请选择"},model:{value:e.uploadParams.technology_type_key,callback:function(t){e.$set(e.uploadParams,"technology_type_key",t)},expression:"uploadParams.technology_type_key"}},e._l(e.wifiModuleList,function(t){return o("el-option-group",{key:t.vendor,attrs:{label:t.vendor}},e._l(t.modellist,function(e){return o("el-option",{key:e.module_id,attrs:{label:e.model,value:e.module_id}})}))}))],1),e._v(" "),o("el-form-item",{attrs:{label:"SDK文件","label-width":e.formLabelWidth,prop:"upload"}},[o("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"list-type":"text",action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:e.uploadParams,"file-list":e.fileList,"auto-upload":!1,"on-change":e.handleChange,"before-upload":e.beforeUpload,"on-error":e.uploadError,"on-success":e.uploadSuccess,limit:1}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传zip文件，且不超过5M")])],1)],1)],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.uploadSDK}},[e._v("确 定")])],1)],1)],1)},a=[],l={render:i,staticRenderFns:a};t.a=l},OPex:function(e,t,o){"use strict";var i=o("w79a"),a=o("sQkU"),l=o("bzuE"),s=o("TIfe");t.a={data:function(){var e=this,t=function(t,o,i){0===e.$refs.upload.uploadFiles.length?i(new Error("请选择上传文件！")):i()};return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:l.d,dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:t}]},formLabelWidth:"120px",showTypeKey:!1,agreementList:[],productTypeList:[],fileList:[],uploadParams:{technology_type:2,token:Object(s.a)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var e=this;this.listLoading=!0;var t={technology_type:2,page:this.listQuery.page,limit:this.listQuery.limit};Object(i.c)(t).then(function(t){console.log("sdk列表",t),e.list=t.data,e.total=t.total,e.listLoading=!1})},getProductType:function(){var e=this;Object(a.d)().then(function(t){console.log("产品品类",t),e.productTypeList=t.list})},getAgreementList:function(){var e=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var t={type_id:this.uploadParams.type_id,agreement_type:2};Object(i.a)(t).then(function(t){console.log("协议列表",t),e.agreementList=t.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){var t=e.size/1024/1024<5;return t||this.$message.error("SDK文件大小不能超过 5MB!"),t},handleChange:function(e,t){console.log("上传",e,t),this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var e=this;console.log("文件",this.$refs.upload.uploadFiles),this.$refs.uploadForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$refs.upload.submit()})},uploadSuccess:function(e,t,o){var i=this;console.log("成功回调",e,t,o),200===e.code?(this.$message.success("上传成功！"),setTimeout(function(){i.closeDialog()},200),this.getList()):this.$message.error(e.msg)},uploadError:function(e,t,o){console.log("失败回调",e,t,o)},modifySDK:function(e){this.dialogVisible=!0,console.log("行数据",e),this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_agreement_id,this.isToModify=!0}}}},OVgV:function(e,t,o){t=e.exports=o("BkJT")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"zigbeeSdkUpload.vue",sourceRoot:""}])},"W6D/":function(e,t,o){t=e.exports=o("BkJT")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"bluetoothSdkUpload.vue",sourceRoot:""}])},"WhR/":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新建")]),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:e.list}},[o("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"technology_agreement",label:"协议"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("a",{attrs:{href:t.row.url,target:"_blank"}},[e._v("\n          "+e._s(t.row.filename)+"\n        ")])]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(o){e.modifySDK(t.row)}}},[e._v("\n          修改\n        ")])]}}])})],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[o("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),o("el-dialog",{attrs:{title:"上传SDK文件",visible:e.dialogVisible,size:"small","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("el-form",{ref:"uploadForm",attrs:{model:e.uploadParams,rules:e.rules,"label-position":"right"}},[o("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":e.formLabelWidth}},[o("el-select",{attrs:{disabled:e.isToModify,placeholder:"请选择"},on:{change:e.getAgreementList},model:{value:e.uploadParams.type_id,callback:function(t){e.$set(e.uploadParams,"type_id",t)},expression:"uploadParams.type_id"}},e._l(e.productTypeList,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showTypeKey,expression:"showTypeKey"}],attrs:{label:"协议",prop:"technology_type_key","label-width":e.formLabelWidth}},[o("el-select",{attrs:{disabled:e.isToModify,placeholder:"请选择"},model:{value:e.uploadParams.technology_type_key,callback:function(t){e.$set(e.uploadParams,"technology_type_key",t)},expression:"uploadParams.technology_type_key"}},e._l(e.agreementList,function(e){return o("el-option",{key:e.agreement_id,attrs:{label:e.agreement,value:e.agreement_id}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"SDK文件","label-width":e.formLabelWidth,prop:"upload"}},[o("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:e.uploadParams,"file-list":e.fileList,"auto-upload":!1,"on-change":e.handleChange,"before-upload":e.beforeUpload,"on-error":e.uploadError,"on-success":e.uploadSuccess,limit:1}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传zip文件，且不超过5M")])],1)],1)],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.uploadSDK}},[e._v("确 定")])],1)],1)],1)},a=[],l={render:i,staticRenderFns:a};t.a=l},XIUe:function(e,t,o){var i=o("W6D/");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o("8bSs")("973f8f46",i,!0)},Y5cD:function(e,t,o){t=e.exports=o("BkJT")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"wifiSdkUpload.vue",sourceRoot:""}])},"ZNm/":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新建")]),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:e.list}},[o("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"technology_agreement",label:"协议"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("a",{attrs:{href:t.row.url,target:"_blank"}},[e._v("\n          "+e._s(t.row.filename)+"\n        ")])]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(o){e.modifySDK(t.row)}}},[e._v("\n          修改\n        ")])]}}])})],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[o("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),o("el-dialog",{attrs:{title:"上传SDK文件",visible:e.dialogVisible,size:"small","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("el-form",{ref:"uploadForm",attrs:{model:e.uploadParams,rules:e.rules,"label-position":"right"}},[o("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":e.formLabelWidth}},[o("el-select",{attrs:{disabled:e.isToModify,placeholder:"请选择"},on:{change:e.getAgreementList},model:{value:e.uploadParams.type_id,callback:function(t){e.$set(e.uploadParams,"type_id",t)},expression:"uploadParams.type_id"}},e._l(e.productTypeList,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showTypeKey,expression:"showTypeKey"}],attrs:{label:"协议",prop:"technology_type_key","label-width":e.formLabelWidth}},[o("el-select",{attrs:{disabled:e.isToModify,placeholder:"请选择"},model:{value:e.uploadParams.technology_type_key,callback:function(t){e.$set(e.uploadParams,"technology_type_key",t)},expression:"uploadParams.technology_type_key"}},e._l(e.agreementList,function(e){return o("el-option",{key:e.agreement_id,attrs:{label:e.agreement,value:e.agreement_id}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"SDK文件","label-width":e.formLabelWidth,prop:"upload"}},[o("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:e.uploadParams,"file-list":e.fileList,"auto-upload":!1,"on-change":e.handleChange,"before-upload":e.beforeUpload,"on-error":e.uploadError,"on-success":e.uploadSuccess,limit:1}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传zip文件，且不超过5M")])],1)],1)],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.uploadSDK}},[e._v("确 定")])],1)],1)],1)},a=[],l={render:i,staticRenderFns:a};t.a=l},bzuE:function(e,t,o){"use strict";o.d(t,"d",function(){return i}),o.d(t,"c",function(){return a}),o.d(t,"b",function(){return l}),o.d(t,"a",function(){return s});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],l={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},s="星络科技"},m8C1:function(e,t,o){"use strict";var i=o("aA9S"),a=o.n(i),l=o("w79a"),s=o("sQkU"),n=o("bzuE"),r=o("TIfe");t.a={data:function(){var e=this,t=function(t,o,i){0===e.$refs.upload.uploadFiles.length?i(new Error("请选择上传文件！")):i()};return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:n.d,queryCondition:{type_id:""},dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:t}]},formLabelWidth:"120px",showTypeKey:!1,wifiModuleList:[],productTypeList:[],fileList:[],showUploadMsg:!1,uploadParams:{technology_type:1,token:Object(r.a)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var e=this;this.listLoading=!0;var t={technology_type:1,page:this.listQuery.page,limit:this.listQuery.limit};a()(t,this.queryCondition),Object(l.c)(t).then(function(t){console.log("wifisdk列表",t),e.list=t.data,e.total=t.total,e.listLoading=!1})},getProductType:function(){var e=this;Object(s.d)().then(function(t){console.log("产品品类",t),e.productTypeList=t.list})},getWifiModuleList:function(){var e=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var t={type_id:this.uploadParams.type_id};Object(l.d)(t).then(function(t){console.log("WIFI模组/芯片列表",t),e.wifiModuleList=t.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){console.log("文件大小",e);var t=e.size/1024/1024<5;return t||this.$message.error("SDK文件大小不能超过 5MB!"),t},handleChange:function(e,t){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var e=this;console.log("文件",this.$refs.upload.uploadFiles),this.$refs.uploadForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$refs.upload.submit()})},uploadSuccess:function(e,t,o){var i=this;console.log("成功回调",e,t,o),200===e.code?(this.$message.success("上传成功！"),setTimeout(function(){i.closeDialog()},200),this.getList()):this.$message.error(e.msg)},uploadError:function(e,t,o){console.log("失败回调",e,t,o)},modifySDK:function(e){this.dialogVisible=!0,console.log("行数据",e),this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_module_id,this.isToModify=!0}}}},omew:function(e,t,o){var i=o("OVgV");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o("8bSs")("01cd2432",i,!0)},ryJJ:function(e,t,o){"use strict";function i(e){o("ypH6")}Object.defineProperty(t,"__esModule",{value:!0});var a=o("m8C1"),l=o("Is7h"),s=o("C7Lr"),n=i,r=s(a.a,l.a,!1,n,null,null);t.default=r.exports},sQkU:function(e,t,o){"use strict";function i(e){return Object(u.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})}function a(){return Object(u.a)({url:"/admin/product/type_lists",method:"post",data:{}})}function l(e){return Object(u.a)({url:"/admin/review_info",method:"post",data:e})}function s(e){return Object(u.a)({url:"/admin/review_approve",method:"post",data:e})}function n(e){return Object(u.a)({url:"/admin/product_lists",method:"post",data:e})}function r(e){return Object(u.a)({url:"/admin/product_info",method:"post",data:e})}function d(e){return Object(u.a)({url:"/admin/product_unshelve",method:"post",data:e})}t.f=i,t.d=a,t.e=l,t.a=s,t.c=n,t.b=r,t.g=d;var u=o("Vo7i")},tWgq:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tab-container"},[o("el-tabs",{staticStyle:{"margin-top":"15px"},on:{"tab-click":e.renderOtherTab},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[o("el-tab-pane",{attrs:{label:"WIFI",name:"wifi"}}),e._v(" "),o("el-tab-pane",{attrs:{label:"ZigBee",name:"zigbee"}}),e._v(" "),o("el-tab-pane",{attrs:{label:"蓝牙",name:"bluetooth"}})],1),e._v(" "),o("wifi-sdk-upload",{directives:[{name:"show",rawName:"v-show",value:"wifi"===e.activeName,expression:"activeName==='wifi'"}]}),e._v(" "),e.isZigbeeRender?o("zigbee-sdk-upload",{directives:[{name:"show",rawName:"v-show",value:"zigbee"===e.activeName,expression:"activeName==='zigbee'"}]}):e._e(),e._v(" "),e.isBluetoothRender?o("bluetooth-sdk-upload",{directives:[{name:"show",rawName:"v-show",value:"bluetooth"===e.activeName,expression:"activeName==='bluetooth'"}]}):e._e()],1)},a=[],l={render:i,staticRenderFns:a};t.a=l},uTyS:function(e,t,o){"use strict";function i(e){o("XIUe")}Object.defineProperty(t,"__esModule",{value:!0});var a=o("HSGA"),l=o("ZNm/"),s=o("C7Lr"),n=i,r=s(a.a,l.a,!1,n,null,null);t.default=r.exports},w79a:function(e,t,o){"use strict";function i(e){return Object(n.a)({url:"/admin/sdk/list",method:"get",data:e})}function a(e){return Object(n.a)({url:"/producttype/technologylists",method:"post",data:{}})}function l(e){return Object(n.a)({url:"/producttype/technologylists",method:"post",data:e})}function s(e){return Object(n.a)({url:"/admin/productdoc_lists?page="+e.page,method:"post",data:e})}t.c=i,t.d=a,t.a=l,t.b=s;var n=o("Vo7i")},ypH6:function(e,t,o){var i=o("Y5cD");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o("8bSs")("79152f25",i,!0)}});
//# sourceMappingURL=0.b09c36a75b0b6b19f659.js.map