webpackJsonp([69],{RQuP:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("woOf"),l=i.n(o),a=i("w79a"),s=i("TIfe"),r=i("Vo7i"),n={name:"zigbeeAndBluetooth",data:function(){var o=this;return{list:[],total:null,listLoading:!1,isToModify:!1,agreementList:[],listQuery:{page:1,limit:15},form:{type_key:"",type:"zigbee"==this.$route.name?2:3,url:"",package_id:"",sdk:{}},uploadForm:{type:13,token:Object(s.b)()},dialogVisible:!1,rules:{type_key:[{required:!0,message:"请选择产品协议"}],upload:[{required:!0,validator:function(e,t,i){0===o.$refs.upload.uploadFiles.length?i(new Error("请选择文件！")):i()}}]}}},computed:{},created:function(){},watch:{$route:function(e){this.form.type={zigbee:2,bluetooth:3}[e.name],this.refresh()}},mounted:function(){this.refresh()},methods:{refresh:function(){this.$store.dispatch("GetDocumentMenus"),this.getList(),this.getAgreementList(this.form.type)},getList:function(){var t=this;this.listLoading=!0;var e={type:this.form.type};Object(a.c)(e).then(function(e){t.list=e.ret,t.listLoading=!1})},getAgreementList:function(e){var t=this;Object(a.a)({technology_type:e}).then(function(e){t.agreementList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,e()},closeDialog:function(){this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.dialogVisible=!1},openDialog:function(e){e?(this.isToModify=!0,this.form.url=e.filename,this.form.type_key=e.type_key,this.form.package_id=e.package_id):(this.isToModify=!1,this.form.url="",this.form.type_key="",this.form.package_id=""),this.dialogVisible=!0},uploadSDK:function(){var i=this;this.$refs.uploadForm.validate(function(e){if(e){var t=l()({},i.form);delete t.url,i.isToModify?(delete t.type,delete t.type_key,Object(r.a)({url:"/admin/sdk/edit",method:"post",data:t}).then(function(e){i.$message.info("修改成功"),i.closeDialog(),i.refresh()})):(delete t.package_id,Object(r.a)({url:"/admin/sdk/add",method:"post",data:t}).then(function(e){i.$message.info("添加成功"),i.closeDialog(),i.refresh()}))}})},beforeZipUpload:function(e){var t=e.raw,i=t.size/1024/1024<5;return i||this.$message.error("zip文件大小不能超过 5MB!"),i&&(this.form.url=t.name),i},uploadSuccess:function(e){200===e.code?(this.$message.success("上传成功！"),this.form.sdk=e.result):this.$message.error(e.msg)},uploadError:function(e){this.$message.error(e)}}},d={render:function(){var i=this,e=i.$createElement,o=i._self._c||e;return o("div",{staticClass:"app-container calendar-list-container"},[o("div",{staticClass:"filter-container"},[o("el-row",{staticStyle:{"margin-bottom":"20px"}},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){i.openDialog("")}}},[i._v("新建SDK包")])],1),i._v(" "),o("el-dialog",{staticClass:"doc-dialog",attrs:{"before-close":i.handleClose,center:"",width:"700px",title:"上传SDK文件",visible:i.dialogVisible},on:{"update:visible":function(e){i.dialogVisible=e}}},[o("el-form",{ref:"uploadForm",attrs:{rules:i.rules,model:i.form,"label-width":"110px"}},[o("el-form-item",{attrs:{label:"协议",prop:"type_key"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{disabled:i.isToModify,placeholder:"请选择"},model:{value:i.form.type_key,callback:function(e){i.$set(i.form,"type_key",e)},expression:"form.type_key"}},i._l(i.agreementList,function(e){return o("el-option",{key:e.id,attrs:{label:e.agreement,value:e.id}})}))],1),i._v(" "),o("el-form-item",{attrs:{label:"SDK文件",prop:"upload"}},[o("el-row",[o("el-col",{attrs:{span:18}},[o("el-input",{staticStyle:{width:"100%"},attrs:{readonly:"",placeholder:"请选择文件"},model:{value:i.form.url,callback:function(e){i.$set(i.form,"url",e)},expression:"form.url"}})],1),i._v(" "),o("el-col",{attrs:{span:6}},[o("el-upload",{ref:"upload",staticStyle:{display:"inline-block","margin-left":"12px"},attrs:{action:"/api/index.php/files/save",data:i.uploadForm,accept:".zip",name:"file","auto-upload":!0,multiple:!1,"show-file-list":!1,"on-change":i.beforeZipUpload,"on-error":i.uploadError,"on-success":i.uploadSuccess}},[o("el-button",{attrs:{type:"primary"}},[i._v("选择文件...")])],1)],1)],1)],1),i._v(" "),o("div",{staticClass:"upload-tips"},[i._v("只能上传zip文件，且不超过5M")])],1),i._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:i.closeDialog}},[i._v("取 消")]),i._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:i.uploadSDK}},[i._v("确 定")])],1)],1)],1),i._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:i.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:i.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[o("el-table-column",{attrs:{align:"center",label:"包名称",prop:"filename"}}),i._v(" "),o("el-table-column",{attrs:{align:"center",label:"包大小",prop:"size"}}),i._v(" "),o("el-table-column",{attrs:{align:"center",label:"上传时间",prop:"updated_at"}}),i._v(" "),o("el-table-column",{attrs:{align:"center",label:"最新更新人",prop:"name"}}),i._v(" "),o("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:i._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){i.openDialog(t.row)}}},[i._v("\n          修改\n        ")])]}}])})],1)],1)},staticRenderFns:[]},c=i("VU/8")(n,d,!1,null,null,null);t.default=c.exports},w79a:function(e,t,i){"use strict";t.c=function(e){return Object(o.a)({url:"/admin/sdk/list",method:"get",data:e})},t.d=function(e){return Object(o.a)({url:"/producttype/technologylists",method:"post",data:{}})},t.a=function(e){return Object(o.a)({url:"/producttype/technologylists",method:"post",data:e})},t.b=function(e){return Object(o.a)({url:"/admin/productdoc_lists?page="+e.page,method:"post",data:e})};var o=i("Vo7i")}});