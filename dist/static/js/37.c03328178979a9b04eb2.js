webpackJsonp([37],{BiwI:function(t,e,a){var n=a("XEuq");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("2a2fb3e6",n,!0)},XEuq:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".tipStyle{color:#999;margin-left:10px;font-size:12px;display:inline-block;margin-top:15px}.table-container{margin-top:20px;padding-bottom:60px}","",{version:3,sources:["F:/PomeloHomeOpen_Sys/src/views/typeManagement/bigCategory.vue"],names:[],mappings:"AACA,UACI,WAAY,AACZ,iBAAkB,AAClB,eAAgB,AAChB,qBAAsB,AACtB,eAAiB,CACpB,AACD,iBACI,gBAAiB,AACjB,mBAAqB,CACxB",file:"bigCategory.vue",sourcesContent:["\n.tipStyle{\n    color: #999;\n    margin-left: 10px;\n    font-size: 12px;\n    display: inline-block;\n    margin-top: 15px;\n}\n.table-container{\n    margin-top: 20px;\n    padding-bottom: 60px;\n}\n"],sourceRoot:""}])},"ka/P":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:t.handelAddCateGory}},[t._v("新增品类")])],1)],1),t._v(" "),a("div",{staticClass:"table-container"},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,fit:"",stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"大品类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_user",label:"创建人",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary",align:"center"},on:{click:function(a){t.handleEnterPage(e.row)}}},[t._v("进入详情")])]}}])})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1)]],2)],1)},i=[],r={render:n,staticRenderFns:i};e.a=r},kkXZ:function(t,e,a){"use strict";function n(t){a("BiwI")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("sOgL"),r=a("ka/P"),l=a("VU/8"),s=n,o=l(i.a,r.a,!1,s,null,null);e.default=o.exports},sOgL:function(t,e,a){"use strict";var n=a("Vo7i");e.a={name:"bigCategory",computed:{},created:function(){},mounted:function(){this.getList()},data:function(){return{total:null,listLoading:!1,listQuery:{page:1,limit:10},tableData:[]}},methods:{getList:function(){var t=this;this.listLoading=!0;var e={limit:this.listQuery.limit,page:this.listQuery.page};Object(n.a)({url:"/product/parenttype_lists",method:"post",data:e}).then(function(e){t.tableData=e.list,t.total=e.total,t.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleEnterPage:function(t){this.$router.push({path:"/typeManagement/addBigCategory",query:{id:t.id}})},handelAddCateGory:function(){this.$router.push({path:"/typeManagement/addBigCategory"})}}}}});
//# sourceMappingURL=37.c03328178979a9b04eb2.js.map