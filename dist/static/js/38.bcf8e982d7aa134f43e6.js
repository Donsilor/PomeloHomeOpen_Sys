webpackJsonp([38],{"06pO":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("woOf"),i=o.n(a),r=o("w79a"),n=(o("sQkU"),o("TIfe")),s=o("Vo7i"),l={name:"wifi",data:function(){var a=this;return{list:[],total:null,listLoading:!1,isToModify:!1,moduleList:[],uploadForm:{type:13,token:Object(n.b)()},form:{technology_type_key_map:[],type_key:"",type:1,url:"",package_id:"",sdk:{}},dialogVisible:!1,moduleProps:{children:"model_list"},rules:{technology_type_key_map:[{required:!0,validator:function(e,t,o){t[1]?o():o("请选择模组/芯片厂家")},trigger:"blur"}],upload:[{required:!0,validator:function(e,t,o){0===a.$refs.upload.uploadFiles.length?o(new Error("请选择文件！")):o()},trigger:"change"}]}}},computed:{},created:function(){},watch:{"form.technology_type_key_map":function(e){this.form.type_key=e[1]}},mounted:function(){this.refresh(),this.getWifiModule()},methods:{refresh:function(){this.$store.dispatch("GetDocumentMenus"),this.getList()},getList:function(){var t=this;this.listLoading=!0;var e={type:this.form.type};Object(r.c)(e).then(function(e){t.list=e.ret,t.listLoading=!1})},getWifiModule:function(){var t=this;Object(r.d)().then(function(e){t.moduleList=e.wifi_list,t.moduleList.forEach(function(e){t.$set(e,"value",e.vendor),t.$set(e,"label",e.vendor),e.model_list.forEach(function(e){t.$set(e,"value",e.id),t.$set(e,"label",e.name)})})})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1,e()},closeDialog:function(){this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1,this.dialogVisible=!1},openDialog:function(e){e?(this.isToModify=!0,this.form.url=e.filename,this.form.technology_type_key_map=[e.vendor,e.type_key],this.form.package_id=e.package_id):(this.isToModify=!1,this.form.url="",this.form.technology_type_key_map=[],this.form.package_id=""),this.dialogVisible=!0},uploadSDK:function(){var o=this;this.$refs.uploadForm.validate(function(e){if(e){var t=i()({},o.form);delete t.technology_type_key_map,delete t.url,o.isToModify?(delete t.type,delete t.type_key,Object(s.a)({url:"/admin/sdk/edit",method:"post",data:t}).then(function(e){o.$message.info("修改成功"),o.closeDialog(),o.refresh()})):(delete t.package_id,Object(s.a)({url:"/admin/sdk/add",method:"post",data:t}).then(function(e){o.$message.info("添加成功"),o.closeDialog(),o.refresh()}))}})},beforeZipUpload:function(e){var t=e.raw,o=t.size/1024/1024<5;return o||this.$message.error("文件大小不能超过 5MB!"),o&&(this.form.url=t.name),o},uploadSuccess:function(e){200===e.code?(this.$message.success("上传成功！"),this.form.sdk=e.result):this.$message.error(e.msg)},uploadError:function(e){this.$message.error(e)}}},c={render:function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return o.openDialog("")}}},[o._v("新建SDK包")])],1),o._v(" "),a("el-dialog",{staticClass:"doc-dialog",attrs:{"before-close":o.handleClose,center:"",width:"700px",title:"上传SDK文件",visible:o.dialogVisible},on:{"update:visible":function(e){o.dialogVisible=e}}},[a("el-form",{ref:"uploadForm",attrs:{rules:o.rules,model:o.form,"label-width":"110px"}},[a("el-form-item",{attrs:{label:"模组/芯片厂家",prop:"technology_type_key_map"}},[a("el-cascader",{staticStyle:{width:"100%"},attrs:{disabled:o.isToModify,clearable:!o.isToModify,filterable:"",placeholder:"请选择",options:o.moduleList,props:o.moduleProps},model:{value:o.form.technology_type_key_map,callback:function(e){o.$set(o.form,"technology_type_key_map",e)},expression:"form.technology_type_key_map"}})],1),o._v(" "),a("el-form-item",{attrs:{label:"SDK文件",prop:"upload"}},[a("el-row",[a("el-col",{attrs:{span:18}},[a("el-input",{staticStyle:{width:"100%"},attrs:{readonly:"",placeholder:"请选择文件"},model:{value:o.form.url,callback:function(e){o.$set(o.form,"url",e)},expression:"form.url"}})],1),o._v(" "),a("el-col",{attrs:{span:6}},[a("el-upload",{ref:"upload",staticStyle:{display:"inline-block","margin-left":"12px"},attrs:{action:"/api/index.php/files/save",data:o.uploadForm,accept:".zip,.gz,.rar",name:"file","auto-upload":!0,multiple:!1,"show-file-list":!1,"on-change":o.beforeZipUpload,"on-error":o.uploadError,"on-success":o.uploadSuccess}},[a("el-button",{attrs:{type:"primary"}},[o._v("选择文件...")])],1)],1)],1)],1),o._v(" "),a("div",{staticClass:"upload-tips"},[o._v("支持zip、gz、rar格式文件，且不超过5M")])],1),o._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:o.closeDialog}},[o._v("取 消")]),o._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:o.uploadSDK}},[o._v("确 定")])],1)],1)],1),o._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:o.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:o.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"模组/芯片厂家",prop:"vendor"}}),o._v(" "),a("el-table-column",{attrs:{align:"center",label:"型号",prop:"model"}}),o._v(" "),a("el-table-column",{attrs:{align:"center",label:"包大小",prop:"size"}}),o._v(" "),a("el-table-column",{attrs:{align:"center",label:"上传时间",prop:"updated_at"}}),o._v(" "),a("el-table-column",{attrs:{align:"center",label:"最新更新人",prop:"name"}}),o._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:o._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return o.openDialog(t.row)}}},[o._v("\n                    修改\n                ")])]}}])})],1)],1)},staticRenderFns:[]};var d=o("VU/8")(l,c,!1,function(e){o("6zrU")},null,null);t.default=d.exports},"6zrU":function(e,t,o){var a=o("hnI7");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o("rjj0")("131af9cc",a,!0)},HIeg:function(e,t,o){"use strict";var a=o("//Fk"),i=o.n(a),r=o("mvHQ"),n=(o.n(r),o("woOf")),s=o.n(n),l=o("mtWM"),c=o.n(l),d=o("zL8q"),u=(o.n(d),o("IcnI")),p=o("DlMc"),f=(o.n(p),o("TIfe")),m=o("VSB1"),h=c.a.create({timeout:15e3});h.interceptors.request.use(function(e){var t={id:Object(p.v4)(),timestamp:Date.parse(new Date),version:"1.0"};return e.data instanceof FormData||-1!==e.url.indexOf("/icon")||-1!==e.url.indexOf("/product_agreement/versionadd")||-1!==e.url.indexOf("/copywritingManage/")||(e.data=s()(t,e.data)),e.data||(e.data={}),u.a.getters.token&&(e.data.token=Object(f.b)()),"get"==e.method&&(e.url=e.url+"?"+m.a.serialize(e.data)),e},function(e){i.a.reject(e)}),h.interceptors.response.use(function(e){var t=e.data;return 200!==t.code?(Object(d.Message)({message:t.msg||t.message,type:"error",duration:2e3}),401===t.code&&u.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),i.a.reject(t)):-1!==e.config.url.indexOf("/v1")?i.a.resolve(e):e.data.result?i.a.resolve(e.data.result):i.a.resolve(e.data)},function(e){var t=e.response.data;return Object(d.Message)({message:t.msg||t.message,type:"error",duration:5e3}),401===t.code&&u.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),i.a.reject(t)}),t.a=h},hnI7:function(e,t,o){(e.exports=o("FZ+f")(!0)).push([e.i,".el-cascader-menu{height:400px}","",{version:3,sources:["D:/Product/PomeloHomeOpen_Sys/src/views/documentManagement/wifi.vue"],names:[],mappings:"AACA,kBACE,YAAc,CACf",file:"wifi.vue",sourcesContent:["\n.el-cascader-menu {\n  height: 400px;\n}\n"],sourceRoot:""}])},sQkU:function(e,t,o){"use strict";t.j=function(e){return Object(a.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})},t.h=function(){return Object(a.a)({url:"/admin/product/type_lists",method:"post",data:{}})},t.i=function(e){return Object(a.a)({url:"/admin/review_info",method:"post",data:e})},t.c=function(e){return Object(a.a)({url:"/admin/review_approve",method:"post",data:e})},t.f=function(e){return Object(a.a)({url:"/admin/product_lists",method:"post",data:e})},t.e=function(e){return Object(a.a)({url:"/admin/product_info",method:"post",data:e})},t.k=function(e){return Object(a.a)({url:"/admin/product_unshelve",method:"post",data:e})},t.g=function(e){return Object(i.a)({url:"/api/ext/devcard/product",method:"get",data:e})},t.b=function(e){return Object(i.a)({url:"/api/ext/devcard/product",method:"post",data:e})},t.d=function(){return Object(i.a)({url:"/api/ext/gtags/global",method:"get"})},t.a=function(e){return Object(i.a)({url:"/api/ext/gtags/global",method:"post",data:e})};var a=o("Vo7i"),i=o("HIeg")},w79a:function(e,t,o){"use strict";t.c=function(e){return Object(a.a)({url:"/admin/sdk/list",method:"get",data:e})},t.d=function(e){return Object(a.a)({url:"/producttype/technologylists",method:"post",data:{}})},t.a=function(e){return Object(a.a)({url:"/producttype/technologylists",method:"post",data:e})},t.b=function(e){return Object(a.a)({url:"/admin/productdoc_lists?page="+e.page,method:"post",data:e})};var a=o("Vo7i")}});