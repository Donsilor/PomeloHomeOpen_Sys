webpackJsonp([75],{"8Zc7":function(t,e,a){var n=a("D22S");(n="string"==typeof n?[[t.i,n,""]]:n).locals&&(t.exports=n.locals);a("8bSs")("527be75e",n,!0)},D22S:function(t,e,a){(t.exports=a("BkJT")(!0)).push([t.i,".tipStyle{color:#999;margin-left:10px;font-size:12px;display:inline-block;margin-top:15px}.table-container{margin-top:20px;padding-bottom:60px}","",{version:3,sources:["E:/workespace/PomeloHomeOpen_Sys/src/views/typeManagement/appCategory.vue"],names:[],mappings:"AACA,UACE,WAAY,AACZ,iBAAkB,AAClB,eAAgB,AAChB,qBAAsB,AACtB,eAAiB,CAClB,AACD,iBACE,gBAAiB,AACjB,mBAAqB,CACtB",file:"appCategory.vue",sourcesContent:["\n.tipStyle{\n  color: #999;\n  margin-left: 10px;\n  font-size: 12px;\n  display: inline-block;\n  margin-top: 15px;\n}\n.table-container{\n  margin-top: 20px;\n  padding-bottom: 60px;\n}\n"],sourceRoot:""}])},F5qO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Vo7i"),i={name:"BigCategory",data:function(){return{total:null,listLoading:!1,listQuery:{page:1,limit:15},tableData:[]}},computed:{},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.getList()})},methods:{getList:function(){var e=this;this.listLoading=!0;var t={limit:this.listQuery.limit,page:this.listQuery.page};Object(n.a)({url:"apptype/lists",method:"post",data:t}).then(function(t){e.tableData=t.data,e.total=t.total,e.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleEnterPage:function(t){this.$router.push({path:"/typeManagement/appCategoryDetail",query:{id:t.id}})},handelAddCateGory:function(){this.$router.push({path:"/typeManagement/appCategoryDetail"})}}},r={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"primary"},on:{click:a.handelAddCateGory}},[a._v("新增品类")])],1)],1),a._v(" "),n("div",{staticClass:"table-container"},[[n("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,fit:"",stripe:""}},[n("el-table-column",{attrs:{prop:"order",label:"排序"}}),a._v(" "),n("el-table-column",{attrs:{prop:"name",label:"APP品类"}}),a._v(" "),n("el-table-column",{attrs:{prop:"children",label:"下属品类",align:"center"}}),a._v(" "),n("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}}),a._v(" "),n("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary",align:"center"},on:{click:function(t){return a.handleEnterPage(e.row)}}},[a._v("进入详情")])]}}])})],1),a._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!a.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":a.listQuery.page,"page-sizes":[15,20,30,50],"page-size":a.listQuery.limit,total:a.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){return a.$set(a.listQuery,"page",t)},"update:current-page":function(t){return a.$set(a.listQuery,"page",t)},"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange}})],1)]],2)],1)},staticRenderFns:[]};r=a("C7Lr")(i,r,!1,function(t){a("8Zc7")},null,null),e.default=r.exports}});