webpackJsonp([71],{DOfh:function(t,e,a){var n=a("Z/RY");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("a6dc0456",n,!0)},Fq6n:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Vo7i"),i={name:"existedCategory",computed:{},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.getList()})},data:function(){return{total:null,listLoading:!1,listQuery:{page:1,limit:15},tableData:[]}},methods:{getList:function(){var e=this;this.listLoading=!0;var t={limit:this.listQuery.limit,page:this.listQuery.page,search_type:0};Object(n.a)({url:"/admin/product/type_lists",method:"post",data:t}).then(function(t){e.tableData=t.list,e.total=t.total,e.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleEnterPage:function(t){this.$router.push({path:"/typeManagement/categoryDetail",query:{id:t.id}})},handelAddCateGory:function(){this.$router.push({path:"/typeManagement/addCategoryDetail"})}}},l={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"primary"},on:{click:a.handelAddCateGory}},[a._v("新增品类")])],1),a._v(" "),n("el-col",{attrs:{span:18}},[n("span",{staticClass:"tipStyle"},[n("i",{staticClass:"el-icon-warning"}),a._v("\n                品类被添加后，厂商在开放平台才能看到并加入合作意向\n            ")])])],1),a._v(" "),n("div",{staticClass:"table-container"},[[n("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,stripe:""}},[n("el-table-column",{attrs:{prop:"id",label:"子品类ID",width:"250"}}),a._v(" "),n("el-table-column",{attrs:{prop:"name",label:"子品类",width:"250"}}),a._v(" "),n("el-table-column",{attrs:{prop:"parent_type_name",label:"所属大品类"}}),a._v(" "),n("el-table-column",{attrs:{prop:"created_user",label:"创建人",width:"120",align:"center"}}),a._v(" "),n("el-table-column",{attrs:{prop:"created_at_txt",label:"创建时间",width:"220"}}),a._v(" "),n("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary",align:"center"},on:{click:function(t){return a.handleEnterPage(e.row)}}},[a._v("进入详情")])]}}])})],1),a._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!a.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":a.listQuery.page,"page-sizes":[15,20,30,50],"page-size":a.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:a.total},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange,"update:currentPage":function(t){return a.$set(a.listQuery,"page",t)},"update:current-page":function(t){return a.$set(a.listQuery,"page",t)}}})],1)]],2)],1)},staticRenderFns:[]};var r=a("VU/8")(i,l,!1,function(t){a("DOfh")},null,null);e.default=r.exports},"Z/RY":function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,".tipStyle{color:#999;margin-left:10px;font-size:12px;display:inline-block;margin-top:15px}.table-container{margin-top:20px;padding-bottom:60px}","",{version:3,sources:["D:/Product/PomeloHomeOpen_Sys/src/views/typeManagement/existedCategory.vue"],names:[],mappings:"AACA,UACI,WAAY,AACZ,iBAAkB,AAClB,eAAgB,AAChB,qBAAsB,AACtB,eAAiB,CACpB,AACD,iBACI,gBAAiB,AACjB,mBAAqB,CACxB",file:"existedCategory.vue",sourcesContent:["\n.tipStyle{\n    color: #999;\n    margin-left: 10px;\n    font-size: 12px;\n    display: inline-block;\n    margin-top: 15px;\n}\n.table-container{\n    margin-top: 20px;\n    padding-bottom: 60px;\n}\n"],sourceRoot:""}])}});