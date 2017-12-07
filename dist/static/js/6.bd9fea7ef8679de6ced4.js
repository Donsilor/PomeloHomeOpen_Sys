webpackJsonp([6],{"53iX":function(e,t,i){t=e.exports=i("FZ+f")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"bluetoothSdkUpload.vue",sourceRoot:""}])},Oa57:function(e,t,i){"use strict";var o=i("w79a"),a=i("sQkU"),s=i("bzuE"),l=i("TIfe");t.a={data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:s.b,dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}]},formLabelWidth:"120px",showTypeKey:!1,agreementList:[],productTypeList:[],fileList:[],uploadParams:{technology_type:3,token:Object(l.a)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var e=this;this.listLoading=!0;var t={technology_type:3,page:this.listQuery.page,limit:this.listQuery.limit};Object(o.c)(t).then(function(t){console.log("sdk列表",t),e.list=t.data,e.total=t.total,e.listLoading=!1})},getProductType:function(){var e=this;Object(a.b)().then(function(t){console.log("产品品类",t),e.productTypeList=t.list})},getAgreementList:function(){var e=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var t={type_id:this.uploadParams.type_id,agreement_type:3};Object(o.a)(t).then(function(t){console.log("协议列表",t),e.agreementList=t.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){var t=e.size/1024/1024<5;return t||this.$message.error("SDK文件大小不能超过 5MB!"),t},uploadSDK:function(){var e=this;if(console.log("文件",this.$refs.upload.uploadFiles),0===this.$refs.upload.uploadFiles.length)return this.$message.warning("请选择文件！"),!1;this.$refs.uploadForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$refs.upload.submit()})},uploadSuccess:function(e,t,i){console.log("成功回调",e,t,i),200===e.code&&(this.$message.success("上传成功！"),this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.getList())},uploadError:function(e,t,i){console.log("失败回调",e,t,i)},modifySDK:function(e){this.dialogVisible=!0,console.log("行数据",e),this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_agreement_id,this.isToModify=!0}}}},XWjv:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新建")]),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:e.list}},[i("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"technology_agreement",label:"协议"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("a",{attrs:{href:t.row.url}},[e._v("\n          "+e._s(t.row.filename)+"\n        ")])]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"created_at_txt",label:"上传时间"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(i){e.modifySDK(t.row)}}},[e._v("\n          修改\n        ")])]}}])})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),i("el-dialog",{attrs:{title:"上传SDK文件",visible:e.dialogVisible,size:"small","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-form",{ref:"uploadForm",attrs:{model:e.uploadParams,rules:e.rules,"label-position":"right"}},[i("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":e.formLabelWidth}},[i("el-select",{attrs:{disabled:e.isToModify,placeholder:"请选择"},on:{change:e.getAgreementList},model:{value:e.uploadParams.type_id,callback:function(t){e.$set(e.uploadParams,"type_id",t)},expression:"uploadParams.type_id"}},e._l(e.productTypeList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showTypeKey,expression:"showTypeKey"}],attrs:{label:"协议",prop:"technology_type_key","label-width":e.formLabelWidth}},[i("el-select",{attrs:{disabled:e.isToModify,placeholder:"请选择"},model:{value:e.uploadParams.technology_type_key,callback:function(t){e.$set(e.uploadParams,"technology_type_key",t)},expression:"uploadParams.technology_type_key"}},e._l(e.agreementList,function(e){return i("el-option",{key:e.agreement_id,attrs:{label:e.agreement,value:e.agreement_id}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"SDK文件","label-width":e.formLabelWidth}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:e.uploadParams,"file-list":e.fileList,"auto-upload":!1,"before-upload":e.beforeUpload,"on-error":e.uploadError,"on-success":e.uploadSuccess,limit:1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传zip文件，且不超过5M")])],1)],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.uploadSDK}},[e._v("确 定")])],1)],1)],1)},a=[],s={render:o,staticRenderFns:a};t.a=s},bzuE:function(e,t,i){"use strict";i.d(t,"b",function(){return o}),i.d(t,"a",function(){return a});var o=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,action_type:1,unapproved_reason:"营业执照/组织结构代码证/税务登记证复印件，加盖公章未审核通过",description:"营业执照/组织结构代码证/税务登记证复印件，加盖公章"},{id:2,action_type:1,unapproved_reason:"法定代表人身份证复印件，加盖公章未审核通过",description:"法定代表人身份证复印件，加盖公章"},{id:3,action_type:1,unapproved_reason:"公司出具的法人代表身份证明书，加盖公章未审核通过",description:"公司出具的法人代表身份证明书，加盖公章"},{id:4,action_type:1,unapproved_reason:"品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录未审核通过",description:"品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录"},{id:5,action_type:1,unapproved_reason:"ISO9001复印件未审核通过",description:"ISO9001复印件"},{id:6,action_type:1,unapproved_reason:"国家高新技术企业复印件未审核通过",description:"国家高新技术企业复印件"},{id:7,action_type:1,unapproved_reason:"其他资质证书未审核通过",description:"其他资质证书"}]},ex4w:function(e,t,i){var o=i("53iX");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i("rjj0")("59d6a668",o,!0)},sQkU:function(e,t,i){"use strict";function o(e){return Object(n.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})}function a(){return Object(n.a)({url:"/product/type_lists",method:"post",data:{}})}function s(e){return Object(n.a)({url:"/admin/review_info",method:"post",data:e})}function l(e){return Object(n.a)({url:"/admin/review_approve",method:"post",data:e})}t.d=o,t.b=a,t.c=s,t.a=l;var n=i("Vo7i")},uTyS:function(e,t,i){"use strict";function o(e){i("ex4w")}Object.defineProperty(t,"__esModule",{value:!0});var a=i("Oa57"),s=i("XWjv"),l=i("VU/8"),n=o,r=l(a.a,s.a,!1,n,null,null);t.default=r.exports},w79a:function(e,t,i){"use strict";function o(e){return Object(n.a)({url:"/admin/sdklists?page="+e.page,method:"post",data:e})}function a(e){return Object(n.a)({url:"/wifimodule/lists",method:"post",data:e})}function s(e){return Object(n.a)({url:"/agreement/lists",method:"post",data:e})}function l(e){return Object(n.a)({url:"/admin/productdoc_lists?page="+e.page,method:"post",data:e})}t.c=o,t.d=a,t.a=s,t.b=l;var n=i("Vo7i")}});
//# sourceMappingURL=6.bd9fea7ef8679de6ced4.js.map