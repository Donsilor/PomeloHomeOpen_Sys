webpackJsonp([63],{RQuP:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("ioKc"),a=i("syRP"),l=i("VU/8"),s=l(o.a,a.a,!1,null,null,null);t.default=s.exports},ioKc:function(e,t,i){"use strict";var o=i("woOf"),a=i.n(o),l=i("w79a"),s=i("TIfe"),r=i("Vo7i");t.a={name:"zigbeeAndBluetooth",data:function(){var e=this,t=function(t,i,o){0===e.$refs.upload.uploadFiles.length?o(new Error("请选择文件！")):o()};return{list:[],total:null,listLoading:!1,isToModify:!1,agreementList:[],listQuery:{page:1,limit:15},form:{type_key:"",type:"zigbee"==this.$route.name?2:3,url:"",package_id:"",sdk:{}},uploadForm:{type:13,token:Object(s.a)()},dialogVisible:!1,rules:{type_key:[{required:!0,message:"请选择产品协议"}],upload:[{required:!0,validator:t}]}}},computed:{},created:function(){},watch:{$route:function(e,t){var i={zigbee:2,bluetooth:3};this.form.type=i[e.name],this.refresh()}},mounted:function(){this.refresh()},methods:{refresh:function(){this.$store.dispatch("GetDocumentMenus"),this.getList(),this.getAgreementList(this.form.type)},getList:function(){var e=this;this.listLoading=!0;var t={type:this.form.type};Object(l.c)(t).then(function(t){e.list=t.ret,e.listLoading=!1})},getAgreementList:function(e){var t=this;Object(l.a)({technology_type:e}).then(function(e){t.agreementList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,e()},closeDialog:function(){this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.dialogVisible=!1},openDialog:function(e){e?(this.isToModify=!0,this.form.url=e.filename,this.form.type_key=e.type_key,this.form.package_id=e.package_id):(this.isToModify=!1,this.form.url="",this.form.type_key="",this.form.package_id=""),this.dialogVisible=!0},uploadSDK:function(){var e=this;this.$refs.uploadForm.validate(function(t){if(t){var i=a()({},e.form);delete i.url,e.isToModify?(delete i.type,delete i.type_key,Object(r.a)({url:"/admin/sdk/edit",method:"post",data:i}).then(function(t){e.$message.info("修改成功"),e.closeDialog(),e.refresh()})):(delete i.package_id,Object(r.a)({url:"/admin/sdk/add",method:"post",data:i}).then(function(t){e.$message.info("添加成功"),e.closeDialog(),e.refresh()}))}})},beforeZipUpload:function(e){var t=e.raw,i=t.size/1024/1024<5;return i||this.$message.error("zip文件大小不能超过 5MB!"),i&&(this.form.url=t.name),i},uploadSuccess:function(e,t,i){200===e.code?(this.$message.success("上传成功！"),this.form.sdk=e.result):this.$message.error(e.msg)},uploadError:function(e,t,i){this.$message.error(e)}}}},syRP:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-row",{staticStyle:{"margin-bottom":"20px"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.openDialog("")}}},[e._v("新建SDK包")])],1),e._v(" "),i("el-dialog",{staticClass:"doc-dialog",attrs:{"before-close":e.handleClose,center:"",width:"700px",title:"上传SDK文件",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-form",{ref:"uploadForm",attrs:{rules:e.rules,model:e.form,"label-width":"110px"}},[i("el-form-item",{attrs:{label:"协议",prop:"type_key"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{disabled:e.isToModify,placeholder:"请选择"},model:{value:e.form.type_key,callback:function(t){e.$set(e.form,"type_key",t)},expression:"form.type_key"}},e._l(e.agreementList,function(e){return i("el-option",{key:e.id,attrs:{label:e.agreement,value:e.id}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"SDK文件",prop:"upload"}},[i("el-row",[i("el-col",{attrs:{span:18}},[i("el-input",{staticStyle:{width:"100%"},attrs:{readonly:"",placeholder:"请选择文件"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),e._v(" "),i("el-col",{attrs:{span:6}},[i("el-upload",{ref:"upload",staticStyle:{display:"inline-block","margin-left":"12px"},attrs:{action:"/api/index.php/files/save",data:e.uploadForm,accept:".zip",name:"file","auto-upload":!0,multiple:!1,"show-file-list":!1,"on-change":e.beforeZipUpload,"on-error":e.uploadError,"on-success":e.uploadSuccess}},[i("el-button",{attrs:{type:"primary"}},[e._v("选择文件...")])],1)],1)],1)],1),e._v(" "),i("div",{staticClass:"upload-tips"},[e._v("只能上传zip文件，且不超过5M")])],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.uploadSDK}},[e._v("确 定")])],1)],1)],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"包名称",prop:"filename"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"包大小",prop:"size"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"上传时间",prop:"updated_at"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"最新更新人",prop:"name"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(i){e.openDialog(t.row)}}},[e._v("\n          修改\n        ")])]}}])})],1)],1)},a=[],l={render:o,staticRenderFns:a};t.a=l},w79a:function(e,t,i){"use strict";function o(e){return Object(r.a)({url:"/admin/sdk/list",method:"get",data:e})}function a(e){return Object(r.a)({url:"/producttype/technologylists",method:"post",data:{}})}function l(e){return Object(r.a)({url:"/producttype/technologylists",method:"post",data:e})}function s(e){return Object(r.a)({url:"/admin/productdoc_lists?page="+e.page,method:"post",data:e})}t.c=o,t.d=a,t.a=l,t.b=s;var r=i("Vo7i")}});
//# sourceMappingURL=63.7a042416531dcb342a82.js.map