webpackJsonp([8],{GWIs:function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"designSpecification.vue",sourceRoot:""}])},Sy2l:function(t,e,i){var o=i("GWIs");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("2dc32065",o,!0)},bzuE:function(t,e,i){"use strict";i.d(e,"c",function(){return o}),i.d(e,"b",function(){return a}),i.d(e,"a",function(){return s});var o=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,action_type:1,unapproved_reason:"营业执照/组织结构代码证/税务登记证复印件，加盖公章未审核通过",description:"营业执照/组织结构代码证/税务登记证复印件，加盖公章"},{id:2,action_type:1,unapproved_reason:"法定代表人身份证复印件，加盖公章未审核通过",description:"法定代表人身份证复印件，加盖公章"},{id:3,action_type:1,unapproved_reason:"公司出具的法人代表身份证明书，加盖公章未审核通过",description:"公司出具的法人代表身份证明书，加盖公章"},{id:4,action_type:1,unapproved_reason:"品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录未审核通过",description:"品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录"},{id:5,action_type:1,unapproved_reason:"ISO9001复印件未审核通过",description:"ISO9001复印件"},{id:6,action_type:1,unapproved_reason:"国家高新技术企业复印件未审核通过",description:"国家高新技术企业复印件"}],s={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]}},gYKv:function(t,e,i){"use strict";var o=i("w79a"),a=i("sQkU"),s=i("bzuE"),l=i("TIfe");e.a={data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:s.c,dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,message:"请选择上传文件",trigger:"blur"}]},formLabelWidth:"120px",productTypeList:[],fileList:[],uploadParams:{token:Object(l.a)(),file_type:22,type_id:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.listLoading=!0;var e={file_type:22,page:this.listQuery.page,limit:this.listQuery.limit};Object(o.b)(e).then(function(e){console.log("开发文档列表",e),t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(a.b)().then(function(e){console.log("产品品类",e),t.productTypeList=e.list})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleClose:function(t){t(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles()},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1},beforeUpload:function(t){var e=t.size/1024/1024<50;return e||this.$message.error("SDK文件大小不能超过 50MB!"),e},uploadSDK:function(){var t=this;if(console.log("文件",this.$refs.upload.uploadFiles),0===this.$refs.upload.uploadFiles.length)return this.$message.warning("请选择文件！"),!1;this.$refs.uploadForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$refs.upload.submit()})},uploadSuccess:function(t,e,i){console.log("成功回调",t,e,i),200===t.code&&(this.$message.success("上传成功！"),this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.getList())},uploadError:function(t,e,i){console.log("失败回调",t,e,i)},modifySDK:function(t){this.dialogVisible=!0,console.log("行数据",t),this.uploadParams.type_id=t.type_id,this.uploadParams.technology_type_key=t.file_type,this.isToModify=!0}}}},pxKz:function(t,e,i){"use strict";function o(t){i("Sy2l")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("gYKv"),s=i("xxVc"),l=i("VU/8"),r=o,n=l(a.a,s.a,!1,r,null,null);e.default=n.exports},sQkU:function(t,e,i){"use strict";function o(t){return Object(r.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})}function a(){return Object(r.a)({url:"/product/type_lists",method:"post",data:{}})}function s(t){return Object(r.a)({url:"/admin/review_info",method:"post",data:t})}function l(t){return Object(r.a)({url:"/admin/review_approve",method:"post",data:t})}e.d=o,e.b=a,e.c=s,e.a=l;var r=i("Vo7i")},w79a:function(t,e,i){"use strict";function o(t){return Object(r.a)({url:"/admin/sdklists?page="+t.page,method:"post",data:t})}function a(t){return Object(r.a)({url:"/wifimodule/lists",method:"post",data:t})}function s(t){return Object(r.a)({url:"/agreement/lists",method:"post",data:t})}function l(t){return Object(r.a)({url:"/admin/productdoc_lists?page="+t.page,method:"post",data:t})}e.c=o,e.d=a,e.a=s,e.b=l;var r=i("Vo7i")},xxVc:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("新建")]),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:t.list}},[i("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("a",{attrs:{href:e.row.url,target:"_blank"}},[t._v("\n          "+t._s(e.row.filename)+"\n        ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"size",label:"文件大小"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"created_at_txt",label:"上传时间"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(i){t.modifySDK(e.row)}}},[t._v("\n          修改\n        ")])]}}])})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1),t._v(" "),i("el-dialog",{attrs:{title:"上传设计规范",visible:t.dialogVisible,size:"small","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{ref:"uploadForm",attrs:{model:t.uploadParams,rules:t.rules,"label-position":"right"}},[i("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":t.formLabelWidth}},[i("el-select",{attrs:{disabled:t.isToModify,placeholder:"请选择"},model:{value:t.uploadParams.type_id,callback:function(e){t.$set(t.uploadParams,"type_id",e)},expression:"uploadParams.type_id"}},t._l(t.productTypeList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"文件","label-width":t.formLabelWidth,prop:"upload"}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/productdoc_upload",multiple:!1,accept:".pdf,.doc,.docx,.ppt",data:t.uploadParams,"file-list":t.fileList,"auto-upload":!1,"before-upload":t.beforeUpload,"on-error":t.uploadError,"on-success":t.uploadSuccess,limit:1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传pdf,doc,docx,ppt文件，且不超过50M")])],1)],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.closeDialog}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.uploadSDK}},[t._v("确 定")])],1)],1)],1)},a=[],s={render:o,staticRenderFns:a};e.a=s}});
//# sourceMappingURL=8.d14fce049ef2902bbf49.js.map