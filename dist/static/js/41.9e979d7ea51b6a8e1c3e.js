webpackJsonp([41],{"06pO":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("0t9r"),a=i("y/nc"),l=i("VU/8"),r=l(o.a,a.a,!1,null,null,null);e.default=r.exports},"0t9r":function(t,e,i){"use strict";var o=i("w79a"),a=i("sQkU"),l=i("TIfe");e.a={name:"wifi",data:function(){var t=this,e=function(e,i,o){0===t.$refs.upload.uploadFiles.length?o(new Error("请选择文件！")):o()};return{list:null,total:null,listLoading:!1,isToModify:!1,showTypeKey:!1,productTypeList:[],moduleList:[],listQuery:{page:1,limit:10},form:{type_id:"",technology_type_key_map:"",technology_type_key:"",technology_type:1,token:Object(l.a)(),url:""},dialogVisible:!1,moduleProps:{children:"modellist",value:"module_id",label:"model"},rules:{type_id:[{required:!0,message:"请选择产品品类"}],technology_type_key_map:[{required:!0,validator:function(t,e,i){e[1]?i():i("请选择模组/芯片厂家")},trigger:"blur"}],upload:[{required:!0,validator:e,trigger:"change"}]}}},computed:{},created:function(){},watch:{"form.type_id":function(t,e){this.moduleList=[],t&&this.getWifiModule(t)},"form.technology_type_key_map":function(t,e){this.form.technology_type_key=t[1]}},mounted:function(){this.refresh(),this.getProductType()},methods:{refresh:function(){this.$store.dispatch("GetDocumentMenus"),this.getList()},getList:function(){var t=this;this.listLoading=!0;var e={technology_type:this.form.technology_type,limit:this.listQuery.limit,page:this.listQuery.page};Object(o.c)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(a.d)().then(function(e){t.productTypeList=e.list})},getWifiModule:function(t){var e=this;this.showTypeKey=!0,Object(o.d)({type_id:t}).then(function(t){e.moduleList=t.list;var i=e;e.moduleList.forEach(function(t){i.$set(t,"module_id",t.vendor),i.$set(t,"model",t.vendor)})})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleClose:function(t){this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1,t()},closeDialog:function(){this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1,this.dialogVisible=!1},openDialog:function(t){t?(this.isToModify=!0,this.form.type_id=t.type_id,this.form.url=t.filename,this.form.technology_type_key_map=[t.technology_module_vendor,t.technology_module_id]):(this.form.type_id="",this.form.url="",this.form.technology_type_key_map=[]),this.dialogVisible=!0},uploadSDK:function(){var t=this;this.$refs.uploadForm.validate(function(e){if(!e)return!1;t.$refs.upload.submit()})},beforeZipUpload:function(t){var e=t.raw,i=e.type.toLowerCase().indexOf("zip")>=0,o=e.size/1024/1024<5;return i||this.$message.error("只能上传zip文件!"),o||this.$message.error("zip文件大小不能超过 5MB!"),i&&o&&(this.form.url=e.name),i&&o},uploadSuccess:function(t,e,i){var o=this;200===t.code?(this.$message.success("上传成功！"),setTimeout(function(){o.closeDialog()},200),this.refresh()):this.$message.error(t.msg)},uploadError:function(t,e,i){this.$message.error(t)}}}},sQkU:function(t,e,i){"use strict";function o(t){return Object(d.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})}function a(){return Object(d.a)({url:"/product/type_lists",method:"post",data:{}})}function l(t){return Object(d.a)({url:"/admin/review_info",method:"post",data:t})}function r(t){return Object(d.a)({url:"/admin/review_approve",method:"post",data:t})}function s(t){return Object(d.a)({url:"/admin/product_lists",method:"post",data:t})}function n(t){return Object(d.a)({url:"/admin/product_info",method:"post",data:t})}function u(t){return Object(d.a)({url:"/admin/product_unshelve",method:"post",data:t})}e.f=o,e.d=a,e.e=l,e.a=r,e.c=s,e.b=n,e.g=u;var d=i("Vo7i")},w79a:function(t,e,i){"use strict";function o(t){return Object(s.a)({url:"/admin/sdklists?page="+t.page,method:"post",data:t})}function a(t){return Object(s.a)({url:"/wifimodule/lists",method:"post",data:t})}function l(t){return Object(s.a)({url:"/agreement/lists",method:"post",data:t})}function r(t){return Object(s.a)({url:"/admin/productdoc_lists?page="+t.page,method:"post",data:t})}e.c=o,e.d=a,e.a=l,e.b=r;var s=i("Vo7i")},"y/nc":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-row",{staticStyle:{"margin-bottom":"20px"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.openDialog("")}}},[t._v("新建SDK包")])],1),t._v(" "),i("el-dialog",{staticClass:"doc-dialog",attrs:{"before-close":t.handleClose,center:"",width:"700px",title:"上传SDK文件",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{ref:"uploadForm",attrs:{rules:t.rules,model:t.form,"label-width":"110px"}},[i("el-form-item",{attrs:{label:"产品品类",prop:"type_id"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{disabled:t.isToModify,placeholder:"请选择"},model:{value:t.form.type_id,callback:function(e){t.$set(t.form,"type_id",e)},expression:"form.type_id"}},t._l(t.productTypeList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),t.showTypeKey?i("el-form-item",{attrs:{label:"模组/芯片厂家",prop:"technology_type_key_map"}},[i("el-cascader",{staticStyle:{width:"100%"},attrs:{disabled:t.isToModify,placeholder:"请选择",options:t.moduleList,props:t.moduleProps},model:{value:t.form.technology_type_key_map,callback:function(e){t.$set(t.form,"technology_type_key_map",e)},expression:"form.technology_type_key_map"}})],1):t._e(),t._v(" "),i("el-form-item",{attrs:{label:"SDK文件",prop:"upload"}},[i("el-input",{staticStyle:{width:"75%"},attrs:{readonly:"",placeholder:"请选择文件"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}}),t._v(" "),i("el-upload",{ref:"upload",staticStyle:{display:"inline-block","margin-left":"12px"},attrs:{action:"/api/index.php/admin/sdk_upload",data:t.form,accept:".zip",name:"file","auto-upload":!1,multiple:!1,"show-file-list":!1,"on-change":t.beforeZipUpload,"on-error":t.uploadError,"on-success":t.uploadSuccess}},[i("el-button",{attrs:{type:"primary"}},[t._v("选择文件...")])],1)],1),t._v(" "),i("div",{staticClass:"upload-tips"},[t._v("只能上传zip文件，且不超过5M")])],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.closeDialog}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.uploadSDK}},[t._v("确 定")])],1)],1)],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"品类",prop:"type_name"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"模组/芯片厂家",prop:"technology_module_vendor"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"型号",prop:"technology_module_model"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"包大小",prop:"size"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"上传时间",prop:"updated_at_txt"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(i){t.openDialog(e.row)}}},[t._v("\n                    修改\n                ")])]}}])})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1)],1)},a=[],l={render:o,staticRenderFns:a};e.a=l}});
//# sourceMappingURL=41.9e979d7ea51b6a8e1c3e.js.map