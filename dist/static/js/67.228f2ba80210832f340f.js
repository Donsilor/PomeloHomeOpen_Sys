webpackJsonp([67],{"8pwx":function(t,e,i){"use strict";var a=i("Vo7i");e.a={data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:15},formVisible:!1,isEdit:!1,manufacturerList:[],formItem:{manufacturer_name:"",licence:"",public_key:""}}},computed:{dialogTitle:function(){return this.isEdit?"edit licence":"add licence"}},created:function(){},mounted:function(){this.refresh()},methods:{refresh:function(){var t=this;this.$nextTick(function(){t.getList()}),this.getManufacturerList()},getManufacturerList:function(){var t=this;Object(a.a)({url:"manufacturer/lists"}).then(function(e){console.log(e),t.manufacturerList=e.list})},getList:function(){var t=this;this.listLoading=!0;var e={limit:this.listQuery.limit,page:this.listQuery.page};Object(a.a)({url:"manufacturer/licence/lists",data:e}).then(function(e){t.list=e.data,t.total=e.total_page,t.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},addLicence:function(){this.isEdit=!1,this.formVisible=!0,this.formItem={}},editLicence:function(t,e){this.isEdit=!0,this.formVisible=!0,this.formItem=t},onSubmit:function(){var t=this;Object(a.a)({url:this.isEdit?"manufacturer/licence/edit":"manufacturer/licence/add",method:"post",data:this.formItem}).then(function(e){t.$message.success("操作成功！"),t.formVisible=!1,t.getList()})}}}},a0CT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("8pwx"),n=i("bkXE"),l=i("VU/8"),r=l(a.a,n.a,!1,null,null,null);e.default=r.exports},bkXE:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container calendar-list-container"},[i("el-row",{staticStyle:{"margin-bottom":"10px"}},[i("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.addLicence}},[t._v("\n      新增licence\n    ")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"品牌名称",prop:"manufacturer_name"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"licence",prop:"licence"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"public_key",prop:"public_key"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(i){t.editLicence(e.row,!0)}}},[t._v("\n          编辑\n        ")])]}}])})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[15,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1),t._v(" "),i("el-dialog",{attrs:{visible:t.formVisible,title:t.dialogTitle},on:{"update:visible":function(e){t.formVisible=e}}},[i("el-form",{attrs:{"label-width":"120px"}},[i("el-form-item",{attrs:{label:"品牌名称"}},[i("el-select",{attrs:{disabled:t.isEdit},model:{value:t.formItem.manufacturer_name,callback:function(e){t.$set(t.formItem,"manufacturer_name",e)},expression:"formItem.manufacturer_name"}},t._l(t.manufacturerList,function(t,e){return i("el-option",{key:e,attrs:{label:t,value:t}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"licence"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.formItem.licence,callback:function(e){t.$set(t.formItem,"licence",e)},expression:"formItem.licence"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"public_key"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.formItem.public_key,callback:function(e){t.$set(t.formItem,"public_key",e)},expression:"formItem.public_key"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")]),t._v(" "),i("el-button",{on:{click:function(e){t.formVisible=!1}}},[t._v("取消")])],1)],1)],1)},n=[],l={render:a,staticRenderFns:n};e.a=l}});
//# sourceMappingURL=67.228f2ba80210832f340f.js.map