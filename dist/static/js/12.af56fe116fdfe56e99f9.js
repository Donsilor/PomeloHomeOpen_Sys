webpackJsonp([12],{"4VYw":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("新建")]),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:t.list}},[i("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("a",{attrs:{href:e.row.url,target:"_blank"}},[t._v("\n          "+t._s(e.row.filename)+"\n        ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"size",label:"文件大小"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(i){t.modifySDK(e.row)}}},[t._v("\n          修改\n        ")])]}}])})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1),t._v(" "),i("el-dialog",{attrs:{title:"上传设计规范",visible:t.dialogVisible,size:"small","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{ref:"uploadForm",attrs:{model:t.uploadParams,rules:t.rules,"label-position":"right"}},[i("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":t.formLabelWidth}},[i("el-select",{attrs:{disabled:t.isToModify,placeholder:"请选择"},model:{value:t.uploadParams.type_id,callback:function(e){t.$set(t.uploadParams,"type_id",e)},expression:"uploadParams.type_id"}},t._l(t.productTypeList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"文件","label-width":t.formLabelWidth,prop:"upload"}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/productdoc_upload",multiple:!1,accept:".pdf,.doc,.docx,.ppt",data:t.uploadParams,"file-list":t.fileList,"auto-upload":!1,"on-change":t.handleChange,"before-upload":t.beforeUpload,"on-error":t.uploadError,"on-success":t.uploadSuccess,limit:1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")]),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传pdf,doc,docx,ppt文件，且不超过50M")])],1)],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.closeDialog}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.uploadSDK}},[t._v("确 定")])],1)],1)],1)},a=[],n={render:o,staticRenderFns:a};e.a=n},bzuE:function(t,e,i){"use strict";i.d(e,"c",function(){return o}),i.d(e,"b",function(){return a}),i.d(e,"a",function(){return n});var o=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],n={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]}},gYKv:function(t,e,i){"use strict";var o=i("w79a"),a=i("sQkU"),n=i("bzuE"),s=i("TIfe");e.a={data:function(){var t=this,e=function(e,i,o){0===t.$refs.upload.uploadFiles.length?o(new Error("请选择上传文件！")):o()};return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:n.c,dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:e}]},formLabelWidth:"120px",productTypeList:[],fileList:[],uploadParams:{token:Object(s.a)(),file_type:22,type_id:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.listLoading=!0;var e={file_type:22,page:this.listQuery.page,limit:this.listQuery.limit};Object(o.b)(e).then(function(e){console.log("开发文档列表",e),t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(a.d)().then(function(e){console.log("产品品类",e),t.productTypeList=e.list})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleClose:function(t){t(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles()},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1},beforeUpload:function(t){var e=t.size/1024/1024<50;return e||this.$message.error("只能上传pdf,doc,docx,ppt文件，且不超过50M！"),e},handleChange:function(t,e){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var t=this;console.log("文件",this.$refs.upload.uploadFiles),this.$refs.uploadForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$refs.upload.submit()})},uploadSuccess:function(t,e,i){var o=this;console.log("成功回调",t,e,i),200===t.code?(this.$message.success("上传成功！"),setTimeout(function(){o.closeDialog()},200),this.getList()):this.$message.error(t.msg)},uploadError:function(t,e,i){console.log("失败回调",t,e,i)},modifySDK:function(t){this.dialogVisible=!0,console.log("行数据",t),this.uploadParams.type_id=t.type_id,this.uploadParams.technology_type_key=t.file_type,this.isToModify=!0}}}},pxKz:function(t,e,i){"use strict";function o(t){i("xZg5")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("gYKv"),n=i("4VYw"),s=i("VU/8"),l=o,r=s(a.a,n.a,!1,l,null,null);e.default=r.exports},sQkU:function(t,e,i){"use strict";function o(t){return Object(u.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})}function a(){return Object(u.a)({url:"/product/type_lists",method:"post",data:{}})}function n(t){return Object(u.a)({url:"/admin/review_info",method:"post",data:t})}function s(t){return Object(u.a)({url:"/admin/review_approve",method:"post",data:t})}function l(t){return Object(u.a)({url:"/admin/product_lists",method:"post",data:t})}function r(t){return Object(u.a)({url:"/admin/product_info",method:"post",data:t})}function d(t){return Object(u.a)({url:"/admin/product_unshelve",method:"post",data:t})}e.f=o,e.d=a,e.e=n,e.a=s,e.c=l,e.b=r,e.g=d;var u=i("Vo7i")},tzQz:function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"designSpecification.vue",sourceRoot:""}])},w79a:function(t,e,i){"use strict";function o(t){return Object(l.a)({url:"/admin/sdklists?page="+t.page,method:"post",data:t})}function a(t){return Object(l.a)({url:"/wifimodule/lists",method:"post",data:t})}function n(t){return Object(l.a)({url:"/agreement/lists",method:"post",data:t})}function s(t){return Object(l.a)({url:"/admin/productdoc_lists?page="+t.page,method:"post",data:t})}e.c=o,e.d=a,e.a=n,e.b=s;var l=i("Vo7i")},xZg5:function(t,e,i){var o=i("tzQz");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("22a00dd9",o,!0)}});
//# sourceMappingURL=12.af56fe116fdfe56e99f9.js.map