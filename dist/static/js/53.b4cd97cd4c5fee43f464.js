webpackJsonp([53],{"0vW3":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-row",{staticStyle:{"margin-bottom":"20px"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.openDialog("")}}},[e._v("新增权限")])],1),e._v(" "),i("el-dialog",{staticClass:"doc-dialog",attrs:{"before-close":e.handleClose,center:"",width:"720px",title:e.isToModify?"修改用户权限":"添加权限用户",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-form",{ref:"permissionForm",attrs:{rules:e.rules,model:e.form,"label-width":"90px"}},[i("el-form-item",{attrs:{label:"姓名",prop:"name"}},[i("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"邮箱",prop:"mail"}},[i("el-input",{attrs:{placeholder:"请输入公司邮箱"},model:{value:e.form.mail,callback:function(t){e.$set(e.form,"mail",t)},expression:"form.mail"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[i("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"部门",prop:"depart"}},[i("el-input",{attrs:{placeholder:"请输入所在部门"},model:{value:e.form.depart,callback:function(t){e.$set(e.form,"depart",t)},expression:"form.depart"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"职务",prop:"duty"}},[i("el-input",{attrs:{placeholder:"请输入职务"},model:{value:e.form.duty,callback:function(t){e.$set(e.form,"duty",t)},expression:"form.duty"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"操作权限",prop:"permission_ids"}},[i("el-checkbox-group",{model:{value:e.form.permission_ids,callback:function(t){e.$set(e.form,"permission_ids",t)},expression:"form.permission_ids"}},e._l(e.permissionList,function(e){return i("el-checkbox",{key:e.id,staticClass:"p-checkbox",attrs:{label:e.menu_name,value:e.id}})}))],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e.isToModify?i("el-button",{attrs:{type:"danger",plain:""},on:{click:e.del}},[e._v("删除该用户")]):e._e(),e._v(" "),i("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.addOrEdit}},[e._v(e._s(e.isToModify?"保存修改":"确 定"))])],1)],1)],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"姓名",prop:"name"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"电话",prop:"mobile"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"部门",prop:"depart"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"职务",prop:"duty"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"最新操作记录"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.last_action)+"  "+e._s(t.row.last_action_at))])]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(i){e.openDialog(t.row)}}},[e._v("\n                    修改\n                ")])]}}])})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[15,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},o=[],s={render:a,staticRenderFns:o};t.a=s},"4TSD":function(e,t,i){"use strict";function a(e){i("KUNk")}Object.defineProperty(t,"__esModule",{value:!0});var o=i("bw/9"),s=i("0vW3"),n=i("VU/8"),r=a,l=n(o.a,s.a,!1,r,null,null);t.default=l.exports},"4uw6":function(e,t,i){t=e.exports=i("FZ+f")(!0),t.push([e.i,".p-checkbox:last-child{margin-left:0}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/authorityManagement/authorityList.vue"],names:[],mappings:"AACA,uBACI,aAAe,CAClB",file:"authorityList.vue",sourcesContent:["\n.p-checkbox:last-child{\n    margin-left: 0;\n}\n"],sourceRoot:""}])},KUNk:function(e,t,i){var a=i("4uw6");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("7dbf1c4b",a,!0)},"bw/9":function(e,t,i){"use strict";var a=i("woOf"),o=i.n(a),s=i("TIfe"),n=i("Vo7i");t.a={name:"wifi",data:function(){return{list:null,total:null,listLoading:!1,isToModify:!1,listQuery:{page:1,limit:15},type_id:this.$route.params.id,form:{admin_id:"",name:"",mail:"",mobile:"",token:Object(s.a)(),depart:"",duty:"",permission_ids:[]},dialogVisible:!1,permissionList:[],permissionMap:null,permissionTextMap:null,rules:{name:[{required:!0,message:"用户姓名不能为空"}],mail:[{required:!0,message:"公司邮箱不能为空"},{validator:function(e,t,i){/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g.test(t)?i():i(new Error("请输入合法的邮箱地址！"))}}],mobile:[{required:!0,message:"电话不能为空"},{validator:function(e,t,i){/^1\d{10}$/.test(t)?i():i(new Error("请输入合法的手机号码！"))}}],depart:[{required:!0,message:"部门不能为空"}],duty:[{required:!0,message:"职务不能为空"}],permission_ids:[{required:!0,message:"操作权限不能为空"}]}}},computed:{},created:function(){},watch:{$route:function(e,t){this.type_id=e.params.id,this.refresh()}},mounted:function(){this.refresh(),this.getPermissonList()},methods:{refresh:function(){this.$store.dispatch("GetAuthorityMenus"),this.getList()},getPermissonList:function(){var e=this;Object(n.a)({url:"/admin/permissionList",method:"post",data:{}}).then(function(t){e.permissionList=t;var i={},a={};t.forEach(function(e,t){i[e.id]=e.menu_name,a[e.menu_name]=e.id}),e.permissionMap=i,e.permissionTextMap=a})},getList:function(){var e=this;this.listLoading=!0;var t={id:this.type_id,limit:this.listQuery.limit,page:this.listQuery.page};Object(n.a)({url:"/admin/list",method:"post",data:t}).then(function(t){e.list=t.data,e.total=t.total,e.listLoading=!1})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){this.$refs.permissionForm.resetFields(),this.isToModify=!1,e()},closeDialog:function(){this.$refs.permissionForm.resetFields(),this.isToModify=!1,this.dialogVisible=!1},openDialog:function(e){var t=this;e&&(this.isToModify=!0,Object(n.a)({url:"/admin/info",method:"post",data:{admin_id:e.admin_id}}).then(function(e){t.form.admin_id=e.admin_id,t.form.name=e.name,t.form.mail=e.mail,t.form.mobile=e.mobile,t.form.depart=e.depart,t.form.duty=e.duty,t.form.permission_ids=e.permission_ids.map(function(e){return t.permissionMap[e]})})),this.dialogVisible=!0},addOrEdit:function(){var e=this;this.$refs.permissionForm.validate(function(t){if(t){var i=o()({},e.form);i.permission_ids=i.permission_ids.map(function(t){return e.permissionTextMap[t]}),Object(n.a)({url:e.isToModify?"/admin/edit":"/admin/add",method:"post",data:i}).then(function(t){e.closeDialog(),e.refresh()})}})},del:function(){var e=this;this.$confirm("是否确定删除该用户？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.a)({url:"/admin/del",method:"post",data:{admin_id:e.form.admin_id}}).then(function(t){e.closeDialog(),e.refresh()})}).catch(function(){})}}}}});
//# sourceMappingURL=53.b4cd97cd4c5fee43f464.js.map