webpackJsonp([85],{sQkU:function(t,e,i){"use strict";e.j=function(t){return Object(a.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})},e.h=function(){return Object(a.a)({url:"/admin/product/type_lists",method:"post",data:{}})},e.i=function(t){return Object(a.a)({url:"/admin/review_info",method:"post",data:t})},e.c=function(t){return Object(a.a)({url:"/admin/review_approve",method:"post",data:t})},e.f=function(t){return Object(a.a)({url:"/admin/product_lists",method:"post",data:t})},e.e=function(t){return Object(a.a)({url:"/admin/product_info",method:"post",data:t})},e.k=function(t){return Object(a.a)({url:"/admin/product_unshelve",method:"post",data:t})},e.g=function(t){return Object(a.a)({url:"/api/ext/devcard/product",method:"get",data:t})},e.b=function(t){return Object(a.a)({url:"/api/ext/devcard/product",method:"post",data:t})},e.d=function(){return Object(a.a)({url:"/api/ext/gtags/global",method:"get"})},e.a=function(t){return Object(a.a)({url:"/api/ext/gtags/global",method:"post",data:t})};var a=i("Vo7i")},w79a:function(t,e,i){"use strict";e.c=function(t){return Object(a.a)({url:"/admin/sdk/list",method:"get",data:t})},e.d=function(t){return Object(a.a)({url:"/producttype/technologylists",method:"post",data:{}})},e.a=function(t){return Object(a.a)({url:"/producttype/technologylists",method:"post",data:t})},e.b=function(t){return Object(a.a)({url:"/admin/productdoc_lists?page="+t.page,method:"post",data:t})};var a=i("Vo7i")},zBtN:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("w79a"),o=i("sQkU"),r=i("TIfe"),l={name:"developmentAndUidesign",data:function(){var a=this;return{list:null,total:null,listLoading:!1,isToModify:!1,labelText:"development"==this.$route.name?"开发文档":"设计规范文档",productTypeList:[],listQuery:{page:1,limit:15},form:{type_id:"",file_type:"development"==this.$route.name?21:22,token:Object(r.b)(),url:""},dialogVisible:!1,rules:{type_id:[{required:!0,message:"请选择产品品类"}],upload:[{required:!0,validator:function(t,e,i){0===a.$refs.upload.uploadFiles.length?i(new Error("请选择文件！")):i()}}]}}},computed:{},created:function(){},watch:{$route:function(t,e){this.form.file_type={development:21,uiDesign:22}[t.name],this.labelText="development"==t.name?"开发文档":"设计规范文档",this.refresh()}},mounted:function(){this.refresh(),this.getProductType()},methods:{refresh:function(){this.$store.dispatch("GetDocumentMenus"),this.getList()},getList:function(){var e=this;this.listLoading=!0;var t={file_type:this.form.file_type,limit:this.listQuery.limit,page:this.listQuery.page};Object(a.b)(t).then(function(t){e.list=t.data,e.total=t.total,e.listLoading=!1})},getProductType:function(){var e=this;Object(o.h)().then(function(t){e.productTypeList=t.list})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleClose:function(t){this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,t()},closeDialog:function(){this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.dialogVisible=!1},openDialog:function(t){t?(this.isToModify=!0,this.form.type_id=t.type_id,this.form.url=t.filename):(this.form.type_id="",this.form.url=""),this.dialogVisible=!0},uploadSDK:function(){var e=this;this.$refs.uploadForm.validate(function(t){return!!t&&void e.$refs.upload.submit()})},beforeZipUpload:function(t){var e=t.raw,i=e.name.split("."),t=0<=["PDF","DOC","DOCX","PPT"].indexOf(i[i.length-1].toUpperCase()),i=e.size/1024/1024<50;return t||this.$message.error("只能上传PDF、DOC、DOCX、PPT文件!"),i||this.$message.error("文件大小不能超过 50MB!"),t&&i&&(this.form.url=e.name),t&&i},uploadSuccess:function(t,e,i){var a=this;200===t.code?(this.$message.success("上传成功！"),setTimeout(function(){a.closeDialog()},200),this.refresh()):this.$message.error(t.msg)},uploadError:function(t,e,i){this.$message.error(t)}}},n={render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return i.openDialog("")}}},[i._v("新建"+i._s(i.labelText))])],1),i._v(" "),a("el-dialog",{staticClass:"doc-dialog",attrs:{"before-close":i.handleClose,center:"",width:"700px",title:"上传开发文档",visible:i.dialogVisible},on:{"update:visible":function(t){i.dialogVisible=t}}},[a("el-form",{ref:"uploadForm",attrs:{rules:i.rules,model:i.form,"label-width":"110px"}},[a("el-form-item",{attrs:{label:"产品品类",prop:"type_id"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:i.isToModify,placeholder:"请选择"},model:{value:i.form.type_id,callback:function(t){i.$set(i.form,"type_id",t)},expression:"form.type_id"}},i._l(i.productTypeList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),i._v(" "),a("el-form-item",{attrs:{label:i.labelText,prop:"upload"}},[a("el-row",[a("el-col",{attrs:{span:18}},[a("el-input",{staticStyle:{width:"100%"},attrs:{readonly:"",placeholder:"请选择文件"},model:{value:i.form.url,callback:function(t){i.$set(i.form,"url",t)},expression:"form.url"}})],1),i._v(" "),a("el-col",{attrs:{span:6}},[a("el-upload",{ref:"upload",staticStyle:{display:"inline-block","margin-left":"12px"},attrs:{action:"/api/index.php/admin/productdoc_upload",data:i.form,accept:".pdf,.doc,.docx,.ppt",name:"file","auto-upload":!1,multiple:!1,"show-file-list":!1,"on-change":i.beforeZipUpload,"on-error":i.uploadError,"on-success":i.uploadSuccess}},[a("el-button",{attrs:{type:"primary"}},[i._v("选择文件...")])],1)],1)],1)],1),i._v(" "),a("div",{staticClass:"upload-tips",staticStyle:{"padding-left":"110px",bottom:"-35px"}},[i._v("文件不大于50MB，支持文档格式PDF、DOC、DOCX、PPT等")])],1),i._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:i.closeDialog}},[i._v("取 消")]),i._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:i.uploadSDK}},[i._v("确 定")])],1)],1)],1),i._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:i.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:i.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"品类",prop:"type_name"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"文件名",prop:"filename"},scopedSlots:i._u([{key:"default",fn:function(t){return[a("a",{attrs:{href:t.row.url,target:"_blank",download:""}},[i._v(i._s(t.row.filename))])]}}])}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"文件大小",prop:"size"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"上传时间",prop:"updated_at_txt"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:i._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return i.openDialog(e.row)}}},[i._v("\n          修改\n        ")])]}}])})],1),i._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!i.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":i.listQuery.page,"page-sizes":[15,20,30,50],"page-size":i.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:i.total},on:{"size-change":i.handleSizeChange,"current-change":i.handleCurrentChange,"update:currentPage":function(t){return i.$set(i.listQuery,"page",t)},"update:current-page":function(t){return i.$set(i.listQuery,"page",t)}}})],1)],1)},staticRenderFns:[]},n=i("C7Lr")(l,n,!1,null,null,null);e.default=n.exports}});