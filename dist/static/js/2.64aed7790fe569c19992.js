webpackJsonp([2,19,20,21],{"/jzJ":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("ryJJ"),o=i("7qmw"),l=i("uTyS"),o={name:"sdkUpload",components:{wifiSdkUpload:a.default,zigbeeSdkUpload:o.default,bluetoothSdkUpload:l.default},data:function(){return{activeName:"wifi",isZigbeeRender:!1,isBluetoothRender:!1}},methods:{renderOtherTab:function(e,t){"zigbee"===e.name?this.isZigbeeRender=!0:"bluetooth"===e.name&&(this.isBluetoothRender=!0)}}},l={render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"tab-container"},[e("el-tabs",{staticStyle:{"margin-top":"15px"},on:{"tab-click":t.renderOtherTab},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"WIFI",name:"wifi"}}),t._v(" "),e("el-tab-pane",{attrs:{label:"ZigBee",name:"zigbee"}}),t._v(" "),e("el-tab-pane",{attrs:{label:"蓝牙",name:"bluetooth"}})],1),t._v(" "),e("wifi-sdk-upload",{directives:[{name:"show",rawName:"v-show",value:"wifi"===t.activeName,expression:"activeName==='wifi'"}]}),t._v(" "),t.isZigbeeRender?e("zigbee-sdk-upload",{directives:[{name:"show",rawName:"v-show",value:"zigbee"===t.activeName,expression:"activeName==='zigbee'"}]}):t._e(),t._v(" "),t.isBluetoothRender?e("bluetooth-sdk-upload",{directives:[{name:"show",rawName:"v-show",value:"bluetooth"===t.activeName,expression:"activeName==='bluetooth'"}]}):t._e()],1)},staticRenderFns:[]};l=i("C7Lr")(o,l,!1,function(e){i("2KpD")},"data-v-15883d86",null),t.default=l.exports},"/pwZ":function(e,t,i){(e.exports=i("BkJT")(!0)).push([e.i,".tab-container[data-v-15883d86]{margin:30px}","",{version:3,sources:["E:/workespace/PomeloHomeOpen_Sys/src/views/infoUpload/sdkUpload/index.vue"],names:[],mappings:"AACA,gCACE,WAAa,CACd",file:"index.vue",sourcesContent:["\n.tab-container[data-v-15883d86]{\n  margin: 30px;\n}\n"],sourceRoot:""}])},"2KpD":function(e,t,i){var a=i("/pwZ");(a="string"==typeof a?[[e.i,a,""]]:a).locals&&(e.exports=a.locals);i("8bSs")("5b563fce",a,!0)},"7qmw":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("w79a"),o=i("sQkU"),l=i("bzuE"),s=i("TIfe"),n={data:function(){var a=this;return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:l.d,dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:function(e,t,i){0===a.$refs.upload.uploadFiles.length?i(new Error("请选择上传文件！")):i()}}]},formLabelWidth:"120px",showTypeKey:!1,agreementList:[],productTypeList:[],fileList:[],uploadParams:{technology_type:2,token:Object(s.b)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.listLoading=!0;var e={technology_type:2,page:this.listQuery.page,limit:this.listQuery.limit};Object(a.c)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(o.h)().then(function(e){t.productTypeList=e.list})},getAgreementList:function(){var t=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var e={type_id:this.uploadParams.type_id,agreement_type:2};Object(a.a)(e).then(function(e){t.agreementList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){e=e.size/1024/1024<5;return e||this.$message.error("SDK文件大小不能超过 5MB!"),e},handleChange:function(e,t){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var t=this;this.$refs.uploadForm.validate(function(e){return!!e&&void t.$refs.upload.submit()})},uploadSuccess:function(e,t,i){var a=this;200===e.code?(this.$message.success("上传成功！"),setTimeout(function(){a.closeDialog()},200),this.getList()):this.$message.error(e.msg)},uploadError:function(e,t,i){},modifySDK:function(e){this.dialogVisible=!0,this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_agreement_id,this.isToModify=!0}}},r={render:function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"app-container"},[a("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){i.dialogVisible=!0}}},[i._v("新建")]),i._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:i.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:i.list}},[a("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"technology_agreement",label:"协议"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名"},scopedSlots:i._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:e.row.url,target:"_blank"}},[i._v("\n          "+i._s(e.row.filename)+"\n        ")])]}}])}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:i._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(e){i.modifySDK(t.row)}}},[i._v("\n          修改\n        ")])]}}])})],1),i._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!i.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":i.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:i.total},on:{"size-change":i.handleSizeChange,"current-change":i.handleCurrentChange,"update:currentPage":function(e){i.$set(i.listQuery,"page",e)}}})],1),i._v(" "),a("el-dialog",{attrs:{title:"上传SDK文件",visible:i.dialogVisible,size:"small","before-close":i.handleClose},on:{"update:visible":function(e){i.dialogVisible=e}}},[a("el-form",{ref:"uploadForm",attrs:{model:i.uploadParams,rules:i.rules,"label-position":"right"}},[a("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":i.formLabelWidth}},[a("el-select",{attrs:{disabled:i.isToModify,placeholder:"请选择"},on:{change:i.getAgreementList},model:{value:i.uploadParams.type_id,callback:function(e){i.$set(i.uploadParams,"type_id",e)},expression:"uploadParams.type_id"}},i._l(i.productTypeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),i._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:i.showTypeKey,expression:"showTypeKey"}],attrs:{label:"协议",prop:"technology_type_key","label-width":i.formLabelWidth}},[a("el-select",{attrs:{disabled:i.isToModify,placeholder:"请选择"},model:{value:i.uploadParams.technology_type_key,callback:function(e){i.$set(i.uploadParams,"technology_type_key",e)},expression:"uploadParams.technology_type_key"}},i._l(i.agreementList,function(e){return a("el-option",{key:e.agreement_id,attrs:{label:e.agreement,value:e.agreement_id}})}))],1),i._v(" "),a("el-form-item",{attrs:{label:"SDK文件","label-width":i.formLabelWidth,prop:"upload"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:i.uploadParams,"file-list":i.fileList,"auto-upload":!1,"on-change":i.handleChange,"before-upload":i.beforeUpload,"on-error":i.uploadError,"on-success":i.uploadSuccess,limit:1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[i._v("选取文件")]),i._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[i._v("只能上传zip文件，且不超过5M")])],1)],1)],1),i._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:i.closeDialog}},[i._v("取 消")]),i._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:i.uploadSDK}},[i._v("确 定")])],1)],1)],1)},staticRenderFns:[]};r=i("C7Lr")(n,r,!1,function(e){i("omew")},null,null),t.default=r.exports},OVgV:function(e,t,i){(e.exports=i("BkJT")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"zigbeeSdkUpload.vue",sourceRoot:""}])},"W6D/":function(e,t,i){(e.exports=i("BkJT")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"bluetoothSdkUpload.vue",sourceRoot:""}])},XIUe:function(e,t,i){var a=i("W6D/");(a="string"==typeof a?[[e.i,a,""]]:a).locals&&(e.exports=a.locals);i("8bSs")("973f8f46",a,!0)},Y5cD:function(e,t,i){(e.exports=i("BkJT")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"wifiSdkUpload.vue",sourceRoot:""}])},bzuE:function(e,t,i){"use strict";i.d(t,"d",function(){return a}),i.d(t,"c",function(){return o}),i.d(t,"b",function(){return l}),i.d(t,"a",function(){return s});var a=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],o=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],l={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},s="星络科技"},omew:function(e,t,i){var a=i("OVgV");(a="string"==typeof a?[[e.i,a,""]]:a).locals&&(e.exports=a.locals);i("8bSs")("01cd2432",a,!0)},ryJJ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("aA9S"),o=i.n(a),l=i("w79a"),s=i("sQkU"),n=i("bzuE"),r=i("TIfe"),d={data:function(){var a=this;return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:n.d,queryCondition:{type_id:""},dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:function(e,t,i){0===a.$refs.upload.uploadFiles.length?i(new Error("请选择上传文件！")):i()}}]},formLabelWidth:"120px",showTypeKey:!1,wifiModuleList:[],productTypeList:[],fileList:[],showUploadMsg:!1,uploadParams:{technology_type:1,token:Object(r.b)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.listLoading=!0;var e={technology_type:1,page:this.listQuery.page,limit:this.listQuery.limit};o()(e,this.queryCondition),Object(l.c)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(s.h)().then(function(e){t.productTypeList=e.list})},getWifiModuleList:function(){var t=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var e={type_id:this.uploadParams.type_id};Object(l.d)(e).then(function(e){t.wifiModuleList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){e=e.size/1024/1024<5;return e||this.$message.error("SDK文件大小不能超过 5MB!"),e},handleChange:function(e,t){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var t=this;this.$refs.uploadForm.validate(function(e){return!!e&&void t.$refs.upload.submit()})},uploadSuccess:function(e,t,i){var a=this;200===e.code?(this.$message.success("上传成功！"),setTimeout(function(){a.closeDialog()},200),this.getList()):this.$message.error(e.msg)},uploadError:function(e,t,i){},modifySDK:function(e){this.dialogVisible=!0,this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_module_id,this.isToModify=!0}}},a={render:function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:i.queryCondition}},[a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){i.dialogVisible=!0}}},[i._v("新建")])],1),i._v(" "),a("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:i.queryCondition.type_id,callback:function(e){i.$set(i.queryCondition,"type_id",e)},expression:"queryCondition.type_id"}},i._l(i.productTypeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),i._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:i.getList}},[i._v("查询")])],1)],1)],1),i._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:i.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:i.list}},[a("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"technology_module_vendor",label:"模组/芯片厂家"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"technology_module_model",label:"型号"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名","min-width":"200"},scopedSlots:i._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:e.row.url,target:"_blank"}},[i._v("\r\n            "+i._s(e.row.filename)+"\r\n          ")])]}}])}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:i._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(e){i.modifySDK(t.row)}}},[i._v("\r\n            修改\r\n          ")])]}}])})],1),i._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!i.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":i.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:i.total},on:{"size-change":i.handleSizeChange,"current-change":i.handleCurrentChange,"update:currentPage":function(e){i.$set(i.listQuery,"page",e)}}})],1),i._v(" "),a("el-dialog",{attrs:{title:"上传SDK文件",visible:i.dialogVisible,"before-close":i.handleClose},on:{"update:visible":function(e){i.dialogVisible=e}}},[a("el-form",{ref:"uploadForm",attrs:{model:i.uploadParams,rules:i.rules,"label-position":"right"}},[a("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":i.formLabelWidth}},[a("el-select",{attrs:{disabled:i.isToModify,placeholder:"请选择"},on:{change:i.getWifiModuleList},model:{value:i.uploadParams.type_id,callback:function(e){i.$set(i.uploadParams,"type_id",e)},expression:"uploadParams.type_id"}},i._l(i.productTypeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),i._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:i.showTypeKey,expression:"showTypeKey"}],attrs:{label:"模组/芯片厂家",prop:"technology_type_key","label-width":i.formLabelWidth}},[a("el-select",{attrs:{disabled:i.isToModify,placeholder:"请选择"},model:{value:i.uploadParams.technology_type_key,callback:function(e){i.$set(i.uploadParams,"technology_type_key",e)},expression:"uploadParams.technology_type_key"}},i._l(i.wifiModuleList,function(e){return a("el-option-group",{key:e.vendor,attrs:{label:e.vendor}},i._l(e.modellist,function(e){return a("el-option",{key:e.module_id,attrs:{label:e.model,value:e.module_id}})}))}))],1),i._v(" "),a("el-form-item",{attrs:{label:"SDK文件","label-width":i.formLabelWidth,prop:"upload"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"list-type":"text",action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:i.uploadParams,"file-list":i.fileList,"auto-upload":!1,"on-change":i.handleChange,"before-upload":i.beforeUpload,"on-error":i.uploadError,"on-success":i.uploadSuccess,limit:1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[i._v("选取文件")]),i._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[i._v("只能上传zip文件，且不超过5M")])],1)],1)],1),i._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:i.closeDialog}},[i._v("取 消")]),i._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:i.uploadSDK}},[i._v("确 定")])],1)],1)],1)},staticRenderFns:[]};a=i("C7Lr")(d,a,!1,function(e){i("ypH6")},null,null),t.default=a.exports},sQkU:function(e,t,i){"use strict";t.j=function(e){return Object(a.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})},t.h=function(){return Object(a.a)({url:"/admin/product/type_lists",method:"post",data:{}})},t.i=function(e){return Object(a.a)({url:"/admin/review_info",method:"post",data:e})},t.c=function(e){return Object(a.a)({url:"/admin/review_approve",method:"post",data:e})},t.f=function(e){return Object(a.a)({url:"/admin/product_lists",method:"post",data:e})},t.e=function(e){return Object(a.a)({url:"/admin/product_info",method:"post",data:e})},t.k=function(e){return Object(a.a)({url:"/admin/product_unshelve",method:"post",data:e})},t.g=function(e){return Object(a.a)({url:"/api/ext/devcard/product",method:"get",data:e})},t.b=function(e){return Object(a.a)({url:"/api/ext/devcard/product",method:"post",data:e})},t.d=function(){return Object(a.a)({url:"/api/ext/gtags/global",method:"get"})},t.a=function(e){return Object(a.a)({url:"/api/ext/gtags/global",method:"post",data:e})};var a=i("Vo7i")},uTyS:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("w79a"),o=i("sQkU"),l=i("bzuE"),s=i("TIfe"),n={data:function(){var a=this;return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:l.d,dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:function(e,t,i){0===a.$refs.upload.uploadFiles.length?i(new Error("请选择上传文件！")):i()}}]},formLabelWidth:"120px",showTypeKey:!1,agreementList:[],productTypeList:[],fileList:[],uploadParams:{technology_type:3,token:Object(s.b)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.listLoading=!0;var e={technology_type:3,page:this.listQuery.page,limit:this.listQuery.limit};Object(a.c)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(o.h)().then(function(e){t.productTypeList=e.list})},getAgreementList:function(){var t=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var e={type_id:this.uploadParams.type_id,agreement_type:3};Object(a.a)(e).then(function(e){t.agreementList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){e=e.size/1024/1024<5;return e||this.$message.error("SDK文件大小不能超过 5MB!"),e},handleChange:function(e,t){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var t=this;this.$refs.uploadForm.validate(function(e){return!!e&&void t.$refs.upload.submit()})},uploadSuccess:function(e,t,i){var a=this;200===e.code?(this.$message.success("上传成功！"),setTimeout(function(){a.closeDialog()},200),this.getList()):this.$message.error(e.msg)},uploadError:function(e,t,i){},modifySDK:function(e){this.dialogVisible=!0,this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_agreement_id,this.isToModify=!0}}},r={render:function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"app-container"},[a("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){i.dialogVisible=!0}}},[i._v("新建")]),i._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:i.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:i.list}},[a("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"technology_agreement",label:"协议"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名"},scopedSlots:i._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:e.row.url,target:"_blank"}},[i._v("\n          "+i._s(e.row.filename)+"\n        ")])]}}])}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:i._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(e){i.modifySDK(t.row)}}},[i._v("\n          修改\n        ")])]}}])})],1),i._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!i.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":i.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:i.total},on:{"size-change":i.handleSizeChange,"current-change":i.handleCurrentChange,"update:currentPage":function(e){i.$set(i.listQuery,"page",e)}}})],1),i._v(" "),a("el-dialog",{attrs:{title:"上传SDK文件",visible:i.dialogVisible,size:"small","before-close":i.handleClose},on:{"update:visible":function(e){i.dialogVisible=e}}},[a("el-form",{ref:"uploadForm",attrs:{model:i.uploadParams,rules:i.rules,"label-position":"right"}},[a("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":i.formLabelWidth}},[a("el-select",{attrs:{disabled:i.isToModify,placeholder:"请选择"},on:{change:i.getAgreementList},model:{value:i.uploadParams.type_id,callback:function(e){i.$set(i.uploadParams,"type_id",e)},expression:"uploadParams.type_id"}},i._l(i.productTypeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),i._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:i.showTypeKey,expression:"showTypeKey"}],attrs:{label:"协议",prop:"technology_type_key","label-width":i.formLabelWidth}},[a("el-select",{attrs:{disabled:i.isToModify,placeholder:"请选择"},model:{value:i.uploadParams.technology_type_key,callback:function(e){i.$set(i.uploadParams,"technology_type_key",e)},expression:"uploadParams.technology_type_key"}},i._l(i.agreementList,function(e){return a("el-option",{key:e.agreement_id,attrs:{label:e.agreement,value:e.agreement_id}})}))],1),i._v(" "),a("el-form-item",{attrs:{label:"SDK文件","label-width":i.formLabelWidth,prop:"upload"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:i.uploadParams,"file-list":i.fileList,"auto-upload":!1,"on-change":i.handleChange,"before-upload":i.beforeUpload,"on-error":i.uploadError,"on-success":i.uploadSuccess,limit:1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[i._v("选取文件")]),i._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[i._v("只能上传zip文件，且不超过5M")])],1)],1)],1),i._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:i.closeDialog}},[i._v("取 消")]),i._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:i.uploadSDK}},[i._v("确 定")])],1)],1)],1)},staticRenderFns:[]};r=i("C7Lr")(n,r,!1,function(e){i("XIUe")},null,null),t.default=r.exports},w79a:function(e,t,i){"use strict";t.c=function(e){return Object(a.a)({url:"/admin/sdk/list",method:"get",data:e})},t.d=function(e){return Object(a.a)({url:"/producttype/technologylists",method:"post",data:{}})},t.a=function(e){return Object(a.a)({url:"/producttype/technologylists",method:"post",data:e})},t.b=function(e){return Object(a.a)({url:"/admin/productdoc_lists?page="+e.page,method:"post",data:e})};var a=i("Vo7i")},ypH6:function(e,t,i){var a=i("Y5cD");(a="string"==typeof a?[[e.i,a,""]]:a).locals&&(e.exports=a.locals);i("8bSs")("79152f25",a,!0)}});