webpackJsonp([59],{"4TSD":function(t,e,i){"use strict";function a(t){i("hcuZ")}Object.defineProperty(e,"__esModule",{value:!0});var s=i("bw/9"),n=i("i2aw"),o=i("VU/8"),r=a,l=o(s.a,n.a,!1,r,null,null);e.default=l.exports},"bw/9":function(t,e,i){"use strict";var a=i("woOf"),s=i.n(a),n=i("TIfe"),o=i("Vo7i");e.a={name:"wifi",data:function(){return{list:null,total:null,listLoading:!1,isToModify:!1,listQuery:{page:1,limit:15},type_id:this.$route.params.id,form:{admin_id:"",name:"",mail:"",mobile:"",token:Object(n.a)(),depart:"",duty:"",permission_ids:[]},status:1,dialogVisible:!1,permissionList:[],permissionMap:null,permissionTextMap:null,rules:{name:[{required:!0,message:"用户姓名不能为空"}],mail:[{required:!0,message:"公司邮箱不能为空"},{validator:function(t,e,i){/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g.test(e)?i():i(new Error("请输入合法的邮箱地址！"))}}],mobile:[{required:!0,message:"电话不能为空"},{validator:function(t,e,i){/^1\d{10}$/.test(e)?i():i(new Error("请输入合法的手机号码！"))}}],depart:[{required:!0,message:"部门不能为空"}],duty:[{required:!0,message:"职务不能为空"}],permission_ids:[{required:!0,message:"操作权限不能为空"}]}}},computed:{},created:function(){},watch:{$route:function(t,e){this.type_id=t.params.id,this.refresh()}},mounted:function(){this.refresh(),this.getPermissonList()},methods:{refresh:function(){this.$store.dispatch("GetAuthorityMenus"),this.getList()},getPermissonList:function(){var t=this;Object(o.a)({url:"/admin/permissionList",method:"post",data:{}}).then(function(e){t.permissionList=e;var i={},a={};e.forEach(function(t,e){i[t.id]=t.menu_name,a[t.menu_name]=t.id}),t.permissionMap=i,t.permissionTextMap=a})},getList:function(){var t=this;this.listLoading=!0;var e={id:this.type_id,limit:this.listQuery.limit,page:this.listQuery.page};Object(o.a)({url:"/admin/list",method:"post",data:e}).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleClose:function(t){this.$refs.permissionForm.resetFields(),this.isToModify=!1,t()},closeDialog:function(){this.$refs.permissionForm.resetFields(),this.isToModify=!1,this.dialogVisible=!1},openDialog:function(t){var e=this;t?(this.isToModify=!0,Object(o.a)({url:"/admin/info",method:"post",data:{admin_id:t.admin_id}}).then(function(t){e.form.admin_id=t.admin_id,e.form.name=t.name,e.form.mail=t.mail,e.form.mobile=t.mobile,e.form.depart=t.depart,e.form.duty=t.duty,e.status=t.status,e.form.permission_ids=t.permission_ids.map(function(t){return e.permissionMap[t]})})):this.status=1,this.dialogVisible=!0},addOrEdit:function(){var t=this;this.$refs.permissionForm.validate(function(e){if(e){var i=s()({},t.form);i.permission_ids=i.permission_ids.map(function(e){return t.permissionTextMap[e]}),Object(o.a)({url:t.isToModify?"/admin/edit":"/admin/add",method:"post",data:i}).then(function(e){t.closeDialog(),t.refresh()})}})},del:function(){var t=this;this.$confirm("是否确定停用该用户？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.a)({url:"/admin/del",method:"post",data:{admin_id:t.form.admin_id}}).then(function(e){t.closeDialog(),t.refresh()})}).catch(function(){})},enabled:function(){var t=this;this.$confirm("是否确定启用该用户？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.a)({url:"/admin/enabled",method:"post",data:{admin_id:t.form.admin_id}}).then(function(e){t.closeDialog(),t.refresh()})}).catch(function(){})},resendMail:function(t){var e=this;Object(o.a)({url:"/admin/resendMail",method:"post",data:{mail:t.mail}}).then(function(t){t&&e.$message.info("发送成功，请前往邮件激活")})}}}},hcuZ:function(t,e,i){var a=i("zyEB");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("4a3ca24e",a,!0)},i2aw:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-row",{staticStyle:{"margin-bottom":"20px"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.openDialog("")}}},[t._v("新增权限")])],1),t._v(" "),i("el-dialog",{staticClass:"doc-dialog",attrs:{"before-close":t.handleClose,center:"",width:"720px",title:t.isToModify?2==t.status?"查看用户权限":"修改用户权限":"添加权限用户",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{ref:"permissionForm",attrs:{rules:t.rules,model:t.form,"label-width":"90px"}},[i("el-form-item",{attrs:{label:"姓名",prop:"name"}},[i("el-input",{attrs:{readonly:1!=t.status,placeholder:"请输入姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"邮箱",prop:"mail"}},[i("el-input",{attrs:{readonly:!!t.isToModify,placeholder:"请输入公司邮箱"},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[i("el-input",{attrs:{readonly:1!=t.status,placeholder:"请输入手机号码"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"部门",prop:"depart"}},[i("el-input",{attrs:{readonly:1!=t.status,placeholder:"请输入所在部门"},model:{value:t.form.depart,callback:function(e){t.$set(t.form,"depart",e)},expression:"form.depart"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"职务",prop:"duty"}},[i("el-input",{attrs:{readonly:1!=t.status,placeholder:"请输入职务"},model:{value:t.form.duty,callback:function(e){t.$set(t.form,"duty",e)},expression:"form.duty"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"操作权限",prop:"permission_ids"}},[i("el-checkbox-group",{model:{value:t.form.permission_ids,callback:function(e){t.$set(t.form,"permission_ids",e)},expression:"form.permission_ids"}},t._l(t.permissionList,function(e){return i("el-checkbox",{key:e.id,staticClass:"p-checkbox",attrs:{label:e.menu_name,value:e.id,disabled:1!=t.status}})}))],1)],1),t._v(" "),0==t.status||1==t.status?i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.isToModify&&1==t.status?i("el-button",{attrs:{type:"danger",plain:""},on:{click:t.del}},[t._v("停用该用户")]):t._e(),t._v(" "),t.isToModify&&0==t.status?i("el-button",{attrs:{type:"danger",plain:""},on:{click:t.enabled}},[t._v("启用该用户")]):t._e(),t._v(" "),i("el-button",{on:{click:t.closeDialog}},[t._v("取 消")]),t._v(" "),0!=t.status?i("el-button",{attrs:{type:"primary"},on:{click:t.addOrEdit}},[t._v(t._s(t.isToModify?"保存修改":"确 定"))]):t._e()],1):t._e()],1)],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"姓名",prop:"name"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"电话",prop:"mobile"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"部门",prop:"depart"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"职务",prop:"duty"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"状态",prop:"status_txt"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"最新操作记录"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.last_action)+"  "+t._s(e.row.last_action_at))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){t.openDialog(e.row)}}},[t._v("\n                    "+t._s(2==e.row.status?"查看":"修改")+"\n                ")]),t._v(" "),2==e.row.status?i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){t.resendMail(e.row)}}},[t._v("重发激活邮件")]):t._e()]}}])})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[15,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1)],1)},s=[],n={render:a,staticRenderFns:s};e.a=n},zyEB:function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,".p-checkbox:last-child{margin-left:0}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/authorityManagement/authorityList.vue"],names:[],mappings:"AACA,uBACI,aAAe,CAClB",file:"authorityList.vue",sourcesContent:["\n.p-checkbox:last-child{\n    margin-left: 0;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=59.ab6b7d72bbbaa9655580.js.map