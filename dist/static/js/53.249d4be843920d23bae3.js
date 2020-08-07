webpackJsonp([53],{"2O/Z":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Vo7i"),s=i("TIfe"),l={name:"AddBigCategory",components:{},data:function(){return{isEdit:!!this.$route.query.id,token:Object(s.b)(),isLoadData:!1,editText:"编辑品类信息",disabled:!!this.$route.query.id,form:{id:"",name:"",name_e:"",offline_hint:"",show_in_select_list:1,is_relate_switch:0,is_high_frequency:0,is_depend_router:1,icon_list:{high_light:{file_id:"",file_url:"",file_name:""},normal:{file_id:"",file_url:"",file_name:""},normal_s:{file_id:"",file_url:"",file_name:""},disabled:{file_id:"",file_url:"",file_name:""}}},rules:{id:[{validator:function(e,t,i){if(!t)return i(new Error("请输入大品类ID"));5e3<=t||t<1?i(new Error("ID必须大于0，小于5000")):i()},trigger:"blur"}],name:[{required:!0,message:"请输入大品类名称",trigger:"blur"},{max:32,message:"大品类名称不能超过32个字符",trigger:"blur"}],name_e:[{required:!0,message:"请输入大品类英文名称",trigger:"blur"},{max:32,message:"大品类英文名称不能超过32个字符",trigger:"blur"}],offline_hint:[{required:!0,message:"请输入离线提示语",trigger:"blur"}]},helpRules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],content:[{required:!0,message:"请输入详情",trigger:"blur"}]},high_light_data:{token:Object(s.b)(),file_id:"",attribute:"high_light"},normal_s_data:{token:Object(s.b)(),file_id:"",attribute:"normal_s"},normal_data:{token:Object(s.b)(),file_id:"",attribute:"normal"},disabled_data:{token:Object(s.b)(),file_id:"",attribute:"disabled"},config:{type:"1",visible:!1,header:"新增帮助",title:"",content:""},tableData:[]}},computed:{},watch:{"config.visible":function(){var e=this;this.$nextTick(function(){"1"===e.config.type?e.$refs.helpForm.resetFields():e.$refs.helpForm.clearValidate()})}},created:function(){this.isEdit&&(this.getCategoryInfo(),this.getHelpList())},mounted:function(){},methods:{showConfirm:function(e,t){var i=this;this.$confirm("是否改变发布状态?","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){"2"===(i.config.type=e)&&t&&(i.config.title=t.title,i.config.content=t.content,i.config.valid=+!t.valid,i.config.id=t.id,i.submitPost(),i.$message({type:"success",message:"操作成功!"}))}).catch(function(){i.$message({type:"info",message:"已取消!"})})},getHelpList:function(){var t=this;return Object(a.a)({url:"/producttypehelp/lists",method:"post",data:{type_id:this.$route.query.id}}).then(function(e){t.tableData=e.list})},getCategoryInfo:function(){var t=this;Object(a.a)({url:"/product/type_info",method:"post",data:{id:this.$route.query.id}}).then(function(e){t.form.name=e.name,t.form.name_e=e.name_e,t.form.id=e.id,t.form.icon_list=e.icon_list,t.form.offline_hint=e.offline_hint,void 0!==e.show_in_select_list&&(t.form.show_in_select_list=e.show_in_select_list),void 0!==e.is_high_frequency&&(t.form.is_high_frequency=e.is_high_frequency),void 0!==e.is_relate_switch&&(t.form.is_relate_switch=e.is_relate_switch),void 0!==e.is_depend_router&&(t.form.is_depend_router=e.is_depend_router),t.handleIconList(t.form.icon_list)})},handleIconList:function(e){this.high_light_data.file_id=e.high_light.file_id,this.normal_s_data.file_id=e.normal_s.file_id,this.normal_data.file_id=e.normal.file_id,this.disabled_data.file_id=e.disabled.file_id},handleAvatarSuccess:function(e){if(200===e.code){var t=e.result;switch(e.result.type){case"high_light":this.form.icon_list.high_light=t.high_light,this.high_light_data.file_id=t.high_light.file_id;break;case"normal_s":this.form.icon_list.normal_s=t.normal_s,this.normal_s_data.file_id=t.normal_s.file_id;break;case"normal":this.form.icon_list.normal=t.normal,this.normal_data.file_id=t.normal.file_id;break;case"disabled":this.form.icon_list.disabled=t.disabled,this.disabled_data.file_id=t.disabled.file_id}}else this.$message.error(e.msg)},beforeAvatarUpload:function(e){var t="image/png"===e.type,i=e.size/1024/1024<5;return t||this.$message.error("请上传5M大小内PNG格式的文件"),i||this.$message.error("请上传5M大小内PNG格式的文件"),t&&i},editGory:function(){var t=this;if(this.disabled)return this.editText="确认并提交修改",this.disabled=!1;this.$refs.ruleForm.validate(function(e){e&&t.$confirm("是否确认保存修改后品类信息？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.a)({url:"/producttype/edit",method:"post",data:t.form}).then(function(e){t.disabled=!0,t.editText="编辑品类信息",t.$message({type:"success",message:"保存成功!"})}).catch(function(e){t.$message({type:"error",message:e.msg})})})})},addGory:function(){var t=this;this.$refs.ruleForm.validate(function(e){e&&t.$confirm("是否确定添加该品类？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.a)({url:"/producttype/add",method:"post",data:t.form}).then(function(e){t.$message({type:"success",message:"保存成功!"}),setTimeout(function(){t.$router.push({path:"/typeManagement/bigCategory"})},2e3)}).catch(function(e){t.$message({type:"error",message:e.msg})})})})},delectGroy:function(){var t=this;Object(a.a)({url:"/producttype/del",method:"post",data:{id:this.$route.query.id}}).then(function(e){t.$message({showClose:!0,message:"删除成功！",type:"success"}),setTimeout(function(){t.$router.push({path:"/typeManagement/bigCategory"})},2e3)})},handleDelEvent:function(){var e=this;this.$confirm("删除后，厂商将无法再进行该品类的开发合作，确认请继续","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.delectGroy()}).catch(function(){})},handleBackEvent:function(){this.$router.push({path:"/typeManagement/bigCategory"})},newItem:function(e,t,i){this.config.type=e,this.config.header=t,this.config.visible=!0,"2"===e&&i?(this.config.title=i.title,this.config.content=i.content,this.config.valid=i.valid,this.config.id=i.id):(this.config.title="",this.config.content="")},deleteItem:function(e){var t=this;this.$confirm("删除后，该帮助指引将不在帮助中显示，确认请继续","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return Object(a.a)({url:"producttypehelp/del",method:"post",data:{id:e}})}).then(function(e){t.getHelpList()}).then(function(){t.$message({type:"success",message:"已删除成功"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},submitPost:function(){var t=this;return"1"===this.config.type?Object(a.a)({url:"/producttypehelp/add",method:"post",data:{type_id:this.$route.query.id,title:this.config.title,content:this.config.content}}).then(function(e){t.config.visible=!1,t.getHelpList()}):"2"===this.config.type?Object(a.a)({url:"/producttypehelp/edit",method:"post",data:{title:this.config.title,content:this.config.content,valid:this.config.valid,id:this.config.id}}).then(function(e){t.config.visible=!1,t.getHelpList()}).catch(function(e){}):void 0},submit:function(){var t=this;this.$refs.helpForm.validate(function(e){e&&(t.config.visible=!1,t.submitPost())})}}},o={render:function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{staticClass:"app-container calendar-list-container addCategoryPage"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"ghost"},on:{click:i.handleBackEvent}},[i._v("返回")]),i._v(" "),i.isEdit?i._e():a("el-button",{attrs:{type:"primary"},on:{click:i.addGory}},[i._v("确定并添加该品类")]),i._v(" "),i.isEdit?a("el-button",{attrs:{type:"primary"},on:{click:i.editGory}},[i._v(i._s(i.editText))]):i._e(),i._v(" "),i.isEdit&&i.disabled?a("el-button",{attrs:{type:"danger"},on:{click:i.handleDelEvent}},[i._v("删除该品类")]):i._e()],1),i._v(" "),a("el-col",{staticStyle:{margin:"20px 0px","padding-bottom":"40px"},attrs:{span:24}},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"基本信息"}},[a("el-col",{attrs:{span:24}},[a("el-form",{ref:"ruleForm",staticStyle:{"margin-top":"20px"},attrs:{rules:i.rules,model:i.form,"label-width":"120px",size:"large"}},[a("el-form-item",{attrs:{label:"品类ID",prop:"id"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{span:6,disabled:i.disabled||i.isEdit,placeholder:"请输入大品类ID"},model:{value:i.form.id,callback:function(e){i.$set(i.form,"id",e)},expression:"form.id"}})],1)],1),i._v(" "),a("el-form-item",{attrs:{label:"大品类名称",prop:"name"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{span:6,disabled:i.disabled,placeholder:"请输入大品类名称"},model:{value:i.form.name,callback:function(e){i.$set(i.form,"name",e)},expression:"form.name"}})],1)],1),i._v(" "),a("el-form-item",{attrs:{label:"大品类英文名",prop:"name_e"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{disabled:i.disabled,span:6,placeholder:"请输入大品类英文"},model:{value:i.form.name_e,callback:function(e){i.$set(i.form,"name_e",e)},expression:"form.name_e"}})],1)],1),i._v(" "),a("el-form-item",{staticStyle:{"padding-bottom":"30px"},attrs:{label:"品类图标"}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"fileuploadItem bigCategory"},[a("el-upload",{staticClass:"avatar-uploader",class:i.disabled?"disabled":"",attrs:{"show-file-list":!1,"on-success":i.handleAvatarSuccess,"before-upload":i.beforeAvatarUpload,disabled:i.disabled,data:i.high_light_data,action:"/api/index.php/producttype/iconupload",accept:"image/png"}},[""!=i.high_light_data.file_id?a("img",{staticClass:"avatar",attrs:{src:i.form.icon_list.high_light.file_url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),i._v(" "),a("span",{staticClass:"file_upload_img_des"},[i._v("高亮状态")])],1),i._v(" "),a("div",{staticClass:"fileuploadItem bigCategory"},[a("el-upload",{staticClass:"avatar-uploader",class:i.disabled?"disabled":"",attrs:{"show-file-list":!1,"on-success":i.handleAvatarSuccess,"before-upload":i.beforeAvatarUpload,disabled:i.disabled,data:i.normal_s_data,action:"/api/index.php/producttype/iconupload",accept:"image/png"}},[""!=i.normal_s_data.file_id?a("img",{staticClass:"avatar",attrs:{src:i.form.icon_list.normal_s.file_url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),i._v(" "),a("span",{staticClass:"file_upload_img_des"},[i._v("默认状态小尺寸")])],1),i._v(" "),a("div",{staticClass:"fileuploadItem bigCategory"},[a("el-upload",{staticClass:"avatar-uploader",class:i.disabled?"disabled":"",attrs:{"show-file-list":!1,"on-success":i.handleAvatarSuccess,"before-upload":i.beforeAvatarUpload,disabled:i.disabled,data:i.normal_data,action:"/api/index.php/producttype/iconupload",accept:"image/png"}},[""!=i.normal_data.file_id?a("img",{staticClass:"avatar",attrs:{src:i.form.icon_list.normal.file_url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),i._v(" "),a("span",{staticClass:"file_upload_img_des"},[i._v("默认状态大尺寸")])],1),i._v(" "),a("div",{staticClass:"fileuploadItem bigCategory"},[a("el-upload",{staticClass:"avatar-uploader",class:i.disabled?"disabled":"",attrs:{"show-file-list":!1,"on-success":i.handleAvatarSuccess,"before-upload":i.beforeAvatarUpload,disabled:i.disabled,data:i.disabled_data,action:"/api/index.php/producttype/iconupload",accept:"image/png"}},[""!=i.disabled_data.file_id?a("img",{staticClass:"avatar",attrs:{src:i.form.icon_list.disabled.file_url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),i._v(" "),a("span",{staticClass:"file_upload_img_des"},[i._v("不可用状态")])],1)])],1),i._v(" "),a("el-form-item",{attrs:{label:"品类离线提示语",prop:"offline_hint"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{rows:4,maxlength:1e3,disabled:i.disabled,span:6,type:"textarea",placeholder:"请输入离线提示语"},model:{value:i.form.offline_hint,callback:function(e){i.$set(i.form,"offline_hint",e)},expression:"form.offline_hint"}})],1)],1),i._v(" "),a("el-form-item",{staticClass:"line25",attrs:{label:"大品类是否在设备选择列表显示"}},[a("el-col",{attrs:{span:12}},[a("el-radio-group",{attrs:{disabled:i.disabled},model:{value:i.form.show_in_select_list,callback:function(e){i.$set(i.form,"show_in_select_list",e)},expression:"form.show_in_select_list"}},[a("el-radio",{attrs:{label:1}},[i._v("是")]),i._v(" "),a("el-radio",{attrs:{label:0}},[i._v("否")])],1)],1)],1),i._v(" "),a("el-form-item",{attrs:{label:"是否高频使用"}},[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{disabled:i.disabled,"true-label":1,"false-label":0},model:{value:i.form.is_high_frequency,callback:function(e){i.$set(i.form,"is_high_frequency",e)},expression:"form.is_high_frequency"}},[i._v("是")])],1)],1),i._v(" "),a("el-form-item",{staticClass:"line25",attrs:{label:"是否为智能开关关联设备品类"}},[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{disabled:i.disabled,"true-label":1,"false-label":0},model:{value:i.form.is_relate_switch,callback:function(e){i.$set(i.form,"is_relate_switch",e)},expression:"form.is_relate_switch"}},[i._v("是")])],1)],1),i._v(" "),a("el-form-item",{attrs:{label:"是否依赖路由器"}},[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{disabled:i.disabled,"true-label":1,"false-label":0},model:{value:i.form.is_depend_router,callback:function(e){i.$set(i.form,"is_depend_router",e)},expression:"form.is_depend_router"}},[i._v("是")])],1)],1)],1)],1)],1),i._v(" "),i.isEdit?a("el-tab-pane",{attrs:{label:"使用帮助"}},[a("div",{staticClass:"btns"},[a("el-button",{on:{click:function(e){i.newItem("1","新增帮助")}}},[i._v("新增帮助")])],1),i._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,title:i.config.header,visible:i.config.visible,width:"570px"},on:{"update:visible":function(e){i.$set(i.config,"visible",e)}}},[a("el-form",{ref:"helpForm",attrs:{rules:i.helpRules,model:i.config}},[a("el-form-item",{attrs:{prop:"title",label:"标题","label-width":"150"}},[a("el-input",{attrs:{placeholder:"请输入标题","auto-complete":"off"},model:{value:i.config.title,callback:function(e){i.$set(i.config,"title",e)},expression:"config.title"}})],1),i._v(" "),a("el-form-item",{attrs:{prop:"content",label:"详情","label-width":"150"}},[a("el-input",{attrs:{rows:6,type:"textarea",placeholder:"请输入详情"},model:{value:i.config.content,callback:function(e){i.$set(i.config,"content",e)},expression:"config.content"}})],1)],1),i._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){i.config.visible=!1}}},[i._v("取 消")]),i._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:i.submit}},[i._v("确 定")])],1)],1),i._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:i.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),i._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题"}}),i._v(" "),a("el-table-column",{attrs:{label:"创建时间"},scopedSlots:i._u([{key:"default",fn:function(e){return[i._v("\n                "+i._s(i._f("moment")(e.row.created_at,"YYYY-MM-DD HH:mm:ss"))+"\n              ")]}}])}),i._v(" "),a("el-table-column",{attrs:{label:"是否发布"},scopedSlots:i._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,disabled:""},nativeOn:{click:function(e){i.showConfirm("2",t.row)}},model:{value:t.row.valid,callback:function(e){i.$set(t.row,"valid",e)},expression:"scope.row.valid"}})]}}])}),i._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:i._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(e){i.newItem("2","编辑帮助",t.row)}}},[i._v("编辑")]),i._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){i.deleteItem(t.row.id)}}},[i._v("删除")])]}}])})],1)],1):i._e()],1)],1)],1)],1)},staticRenderFns:[]};var n=i("VU/8")(l,o,!1,function(e){i("MTfJ")},null,null);t.default=n.exports},MTfJ:function(e,t,i){var a=i("j9Dy");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("6b111583",a,!0)},j9Dy:function(e,t){throw new Error("Module build failed: Error: Missing binding /Users/eric/PomeloHomeOpen_Sys/node_modules/node-sass/vendor/darwin-x64-57/binding.node\nNode Sass could not find a binding for your current environment: OS X 64-bit with Node.js 8.x\n\nFound bindings for the following environments:\n  - OS X 64-bit with Node.js 10.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (/Users/eric/PomeloHomeOpen_Sys/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/Users/eric/PomeloHomeOpen_Sys/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)\n    at Function.Module._load (module.js:498:3)\n    at Module.require (module.js:597:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/Users/eric/PomeloHomeOpen_Sys/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)\n    at Function.Module._load (module.js:498:3)\n    at Module.require (module.js:597:17)")}});