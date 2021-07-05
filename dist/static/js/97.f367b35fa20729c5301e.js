webpackJsonp([97],{a0CT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Vo7i"),n={data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:15},formVisible:!1,isEdit:!1,manufacturerList:[],formItem:{manufacturer_name:"",licence:"",public_key:""}}},computed:{dialogTitle:function(){return this.isEdit?"edit licence":"add licence"}},created:function(){},mounted:function(){this.refresh()},methods:{refresh:function(){var t=this;this.$nextTick(function(){t.getList()}),this.getManufacturerList()},getManufacturerList:function(){var e=this;Object(a.a)({url:"manufacturer/lists"}).then(function(t){e.manufacturerList=t.list})},getList:function(){var e=this;this.listLoading=!0;var t={limit:this.listQuery.limit,page:this.listQuery.page};Object(a.a)({url:"manufacturer/licence/lists",data:t}).then(function(t){e.list=t.data,e.total=t.total_page,e.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},addLicence:function(){this.isEdit=!1,this.formVisible=!0,this.formItem={}},editLicence:function(t){this.isEdit=!0,this.formVisible=!0,this.formItem=t},onSubmit:function(){var e=this;Object(a.a)({url:this.isEdit?"manufacturer/licence/edit":"manufacturer/licence/add",method:"post",data:this.formItem}).then(function(t){e.$message.success("操作成功！"),e.formVisible=!1,e.getList()})}}},l={render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",{staticStyle:{"margin-bottom":"10px"}},[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:i.addLicence}},[i._v("\n      新增licence\n    ")])],1),i._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:i.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:i.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"品牌名称",prop:"manufacturer_name"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"licence",prop:"licence"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"public_key",prop:"public_key"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:i._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){i.editLicence(e.row,!0)}}},[i._v("\n          编辑\n        ")])]}}])})],1),i._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!i.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":i.listQuery.page,"page-sizes":[15,20,30,50],"page-size":i.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:i.total},on:{"size-change":i.handleSizeChange,"current-change":i.handleCurrentChange,"update:currentPage":function(t){i.$set(i.listQuery,"page",t)}}})],1),i._v(" "),a("el-dialog",{attrs:{visible:i.formVisible,title:i.dialogTitle},on:{"update:visible":function(t){i.formVisible=t}}},[a("el-form",{attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"品牌名称"}},[a("el-select",{attrs:{disabled:i.isEdit},model:{value:i.formItem.manufacturer_name,callback:function(t){i.$set(i.formItem,"manufacturer_name",t)},expression:"formItem.manufacturer_name"}},i._l(i.manufacturerList,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}))],1),i._v(" "),a("el-form-item",{attrs:{label:"licence"}},[a("el-input",{attrs:{type:"textarea"},model:{value:i.formItem.licence,callback:function(t){i.$set(i.formItem,"licence",t)},expression:"formItem.licence"}})],1),i._v(" "),a("el-form-item",{attrs:{label:"public_key"}},[a("el-input",{attrs:{type:"textarea"},model:{value:i.formItem.public_key,callback:function(t){i.$set(i.formItem,"public_key",t)},expression:"formItem.public_key"}})],1)],1),i._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:i.onSubmit}},[i._v("提交")]),i._v(" "),a("el-button",{on:{click:function(t){i.formVisible=!1}}},[i._v("取消")])],1)],1)],1)},staticRenderFns:[]},r=i("VU/8")(n,l,!1,null,null,null);e.default=r.exports}});