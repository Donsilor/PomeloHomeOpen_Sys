webpackJsonp([64],{"+cc2":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("uc5b"),n=a("auLY"),l=a("VU/8"),s=l(i.a,n.a,!1,null,null,null);e.default=s.exports},auLY:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"厂商名称",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"联系人",prop:"contacts"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"联系人手机",prop:"contacts_mobile"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"审核时间",prop:"approved_at"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){t.toDetai(e.row)}}},[t._v("\n                    查看详情\n                ")])]}}])})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[15,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1)],1)},n=[],l={render:i,staticRenderFns:n};e.a=l},uc5b:function(t,e,a){"use strict";var i=a("Vo7i");e.a={name:"enterpriseList",data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:15}}},computed:{},created:function(){},mounted:function(){this.refresh()},methods:{refresh:function(){this.getList()},getList:function(){var t=this;this.listLoading=!0;var e={limit:this.listQuery.limit,page:this.listQuery.page};Object(i.a)({url:"/user/list",method:"post",data:e}).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},toDetai:function(t){var e={business_id:t.business_id};this.$router.push({path:"/enterpriseManagement/enterpriseInfo",query:e})}}}}});
//# sourceMappingURL=64.c7596d9a609dc1f0385b.js.map