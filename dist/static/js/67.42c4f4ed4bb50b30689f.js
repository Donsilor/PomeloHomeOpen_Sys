webpackJsonp([67],{fYXe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("Vo7i");var i=a("sQkU"),n={data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:15},formVisible:!1,isEdit:!1,tagList:[],formItem:{gtag_name:"",gtag_id:"",enable:1}}},computed:{dialogTitle:function(){return this.isEdit?"edit tag":"add tag"}},created:function(){},mounted:function(){this.refresh()},methods:{dataFormat:function(t){var e=new Date(t),a=e.getFullYear(),i=e.getMonth()+1;return a+"-"+(i=i<10?"0"+i:i)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())+" "+(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())},refresh:function(){var t=this;this.$nextTick(function(){t.getTagList()})},getTagList:function(){var e=this;this.listLoading=!0;var t={size:this.listQuery.limit,page:this.listQuery.page};Object(i.d)(t).then(function(t){e.tagList=t.data,e.tagList.forEach(function(t){t.create_time=e.dataFormat(1e3*t.create_time),t.update_time=e.dataFormat(1e3*t.update_time)}),e.total=t.page_info.total,e.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getTagList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getTagList()},addTag:function(){this.isEdit=!1,this.formVisible=!0,this.formItem={}},editTag:function(t){this.isEdit=!0,this.formVisible=!0,this.formItem=t},delTag:function(e){var a=this;this.$confirm("确认删除？").then(function(t){a.formItem=e,a.formItem.enable=0,a.onSubmit()}).catch(function(t){})},onSubmit:function(){var e=this,t=this.formItem;Object(i.a)(t).then(function(t){e.$message.success("操作成功！"),e.formVisible=!1,e.getTagList()})}}},r={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("el-row",{staticStyle:{"margin-bottom":"10px"}},[i("el-button",{attrs:{size:"medium",type:"primary"},on:{click:a.addTag}},[a._v("\n      新增编组tag\n    ")])],1),a._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:a.tagList,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"标签编号",prop:"gtag_id"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"标签名称",prop:"gtag_name"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"enable",prop:"enable"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"create_time"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"更新时间",prop:"update_time"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:a._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){a.delTag(e.row)}}},[a._v("\n          删除\n        ")]),a._v(" "),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){a.editTag(e.row,!0)}}},[a._v("\n          编辑\n        ")])]}}])})],1),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!a.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":a.listQuery.page,"page-sizes":[15,20,30,50],"page-size":a.listQuery.limit,total:a.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){a.$set(a.listQuery,"page",t)},"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange}})],1),a._v(" "),i("el-dialog",{attrs:{visible:a.formVisible,title:a.dialogTitle},on:{"update:visible":function(t){a.formVisible=t}}},[i("el-form",{attrs:{"label-width":"120px"}},[i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:0==a.isEdit,expression:"isEdit == false"}],attrs:{label:"标签编号"}},[i("el-input",{attrs:{type:"textarea"},model:{value:a.formItem.gtag_id,callback:function(t){a.$set(a.formItem,"gtag_id",t)},expression:"formItem.gtag_id"}})],1),a._v(" "),i("el-form-item",{attrs:{label:"标签名称"}},[i("el-input",{attrs:{type:"textarea"},model:{value:a.formItem.gtag_name,callback:function(t){a.$set(a.formItem,"gtag_name",t)},expression:"formItem.gtag_name"}})],1)],1),a._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:a.onSubmit}},[a._v("提交")]),a._v(" "),i("el-button",{on:{click:function(t){a.formVisible=!1}}},[a._v("取消")])],1)],1)],1)},staticRenderFns:[]},o=a("VU/8")(n,r,!1,null,null,null);e.default=o.exports},sQkU:function(t,e,a){"use strict";e.j=function(t){return Object(i.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})},e.h=function(){return Object(i.a)({url:"/admin/product/type_lists",method:"post",data:{}})},e.i=function(t){return Object(i.a)({url:"/admin/review_info",method:"post",data:t})},e.c=function(t){return Object(i.a)({url:"/admin/review_approve",method:"post",data:t})},e.f=function(t){return Object(i.a)({url:"/admin/product_lists",method:"post",data:t})},e.e=function(t){return Object(i.a)({url:"/admin/product_info",method:"post",data:t})},e.k=function(t){return Object(i.a)({url:"/admin/product_unshelve",method:"post",data:t})},e.g=function(t){return Object(i.a)({url:"/api/ext/gtags/product",method:"get",data:t})},e.b=function(t){return Object(i.a)({url:"/api/ext/gtags/product",method:"post",data:t})},e.d=function(){return Object(i.a)({url:"/api/ext/gtags/global",method:"get"})},e.a=function(t){return Object(i.a)({url:"/api/ext/gtags/global",method:"post",data:t})};var i=a("Vo7i")}});