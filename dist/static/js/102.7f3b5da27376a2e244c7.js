webpackJsonp([102],{UfLi:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i("Vo7i"),a=i("TIfe"),o={name:"enterpriseDoc",data:function(){var l=this;return{list:null,total:null,listLoading:!1,isToModify:!1,productTypeList:[],typesMap:{},listQuery:{page:1,limit:15},form:{type_id:"",token:Object(a.b)(),url:""},dialogVisible:!1,rules:{type_id:[{required:!0,message:"请选择文件品类"}],upload:[{required:!0,validator:function(t,e,i){0===l.$refs.upload.uploadFiles.length?i(new Error("请选择文件！")):i()}}]}}},computed:{},created:function(){},mounted:function(){this.refresh(),this.getTypes()},methods:{refresh:function(){this.$store.dispatch("GetDocumentMenus"),this.getList()},getList:function(){var e=this;this.listLoading=!0;var t={limit:this.listQuery.limit,page:this.listQuery.page};Object(l.a)({url:"/admin/userdoc_lists",method:"post",data:t}).then(function(t){e.list=t.data,e.total=t.total,e.listLoading=!1})},getTypes:function(){var e=this;Object(l.a)({url:"/admin/productdoc_types",method:"post",data:{}}).then(function(t){var i={};(e.productTypeList=t).forEach(function(t,e){i[t.type_id]=t.type}),e.typesMap=i})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleClose:function(t){this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,t()},closeDialog:function(){this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.dialogVisible=!1},openDialog:function(t){t?(this.isToModify=!0,this.form.type_id=parseInt(t.type_id),this.form.url=t.filename):(this.form.type_id="",this.form.url=""),this.dialogVisible=!0},uploadSDK:function(){var e=this;this.$refs.uploadForm.validate(function(t){return!!t&&void e.$refs.upload.submit()})},beforeZipUpload:function(t){var e=t.raw,i=e.name.split("."),t=0<=["PDF","DOC","DOCX","PPT"].indexOf(i[i.length-1].toUpperCase()),i=e.size/1024/1024<50;return t||this.$message.error("只能上传PDF、DOC、DOCX、PPT文件!"),i||this.$message.error("文件大小不能超过 50MB!"),t&&i&&(this.form.url=e.name),t&&i},uploadSuccess:function(t,e,i){var l=this;200===t.code?(this.$message.success("上传成功！"),setTimeout(function(){l.closeDialog()},200),this.refresh()):this.$message.error(t.msg)},uploadError:function(t,e,i){this.$message.error(t)}}},s={render:function(){var i=this,t=i.$createElement,l=i._self._c||t;return l("div",{staticClass:"app-container calendar-list-container"},[l("div",{staticClass:"filter-container"},[l("el-row",{staticStyle:{"margin-bottom":"20px"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){return i.openDialog("")}}},[i._v("新建模板文档")])],1),i._v(" "),l("el-dialog",{staticClass:"doc-dialog",attrs:{"before-close":i.handleClose,center:"",width:"700px",title:"上传文档模板",visible:i.dialogVisible},on:{"update:visible":function(t){i.dialogVisible=t}}},[l("el-form",{ref:"uploadForm",attrs:{rules:i.rules,model:i.form,"label-width":"110px"}},[l("el-form-item",{attrs:{label:"文件品类",prop:"type_id"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{disabled:i.isToModify,placeholder:"请选择"},model:{value:i.form.type_id,callback:function(t){i.$set(i.form,"type_id",t)},expression:"form.type_id"}},i._l(i.productTypeList,function(t){return l("el-option",{key:t.type_id,attrs:{label:t.type,value:t.type_id}})}),1)],1),i._v(" "),l("el-form-item",{attrs:{label:"开发文档",prop:"upload"}},[l("el-row",[l("el-col",{attrs:{span:18}},[l("el-input",{staticStyle:{width:"100%"},attrs:{readonly:"",placeholder:"请选择文件"},model:{value:i.form.url,callback:function(t){i.$set(i.form,"url",t)},expression:"form.url"}})],1),i._v(" "),l("el-col",{attrs:{span:6}},[l("el-upload",{ref:"upload",staticStyle:{display:"inline-block","margin-left":"12px"},attrs:{action:"/api/index.php/admin/userdoc_upload",data:i.form,accept:".pdf,.doc,.docx,.ppt",name:"file","auto-upload":!1,multiple:!1,"show-file-list":!1,"on-change":i.beforeZipUpload,"on-error":i.uploadError,"on-success":i.uploadSuccess}},[l("el-button",{attrs:{type:"primary"}},[i._v("选择文件...")])],1)],1)],1)],1),i._v(" "),l("div",{staticClass:"upload-tips",staticStyle:{"padding-left":"110px",bottom:"-35px"}},[i._v("文件不大于50MB，支持文档格式PDF、DOC、DOCX、PPT等")])],1),i._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:i.closeDialog}},[i._v("取 消")]),i._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:i.uploadSDK}},[i._v("确 定")])],1)],1)],1),i._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:i.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:i.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[l("el-table-column",{attrs:{align:"center",label:"文件品类",prop:"type_id"},scopedSlots:i._u([{key:"default",fn:function(t){return[i._v("\n                "+i._s(i.typesMap[t.row.type_id]||t.row.type_id)+"\n            ")]}}])}),i._v(" "),l("el-table-column",{attrs:{align:"center",label:"文件名",prop:"filename"},scopedSlots:i._u([{key:"default",fn:function(t){return[l("a",{attrs:{href:t.row.url,download:""}},[i._v(i._s(t.row.filename))])]}}])}),i._v(" "),l("el-table-column",{attrs:{align:"center",label:"文件大小",prop:"size"}}),i._v(" "),l("el-table-column",{attrs:{align:"center",label:"上传时间",prop:"updated_at"}}),i._v(" "),l("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:i._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return i.openDialog(e.row)}}},[i._v("\n                    修改\n                ")])]}}])})],1),i._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:!i.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[l("el-pagination",{attrs:{"current-page":i.listQuery.page,"page-sizes":[15,20,30,50],"page-size":i.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:i.total},on:{"size-change":i.handleSizeChange,"current-change":i.handleCurrentChange,"update:currentPage":function(t){return i.$set(i.listQuery,"page",t)},"update:current-page":function(t){return i.$set(i.listQuery,"page",t)}}})],1)],1)},staticRenderFns:[]},s=i("C7Lr")(o,s,!1,null,null,null);e.default=s.exports}});