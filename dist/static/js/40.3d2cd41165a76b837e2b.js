webpackJsonp([40],{"8ysF":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:t.handelAddCateGory}},[t._v("新增品类")])],1),t._v(" "),a("el-col",{attrs:{span:18}},[a("span",{staticClass:"tipStyle"},[a("i",{staticClass:"el-icon-warning"}),t._v("\n                品类被添加后，厂商在开放平台才能看到并加入合作意向\n            ")])])],1),t._v(" "),a("div",{staticClass:"table-container"},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"子品类",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"parent_type_name",label:"所属大品类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_user",label:"创建人",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at_txt",label:"创建时间",width:"220"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary",align:"center"},on:{click:function(a){t.handleEnterPage(e.row)}}},[t._v("进入详情")])]}}])})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[15,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1)]],2)],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},AMLw:function(t,e,a){"use strict";var n=a("Vo7i");e.a={name:"existedCategory",computed:{},created:function(){},mounted:function(){this.getList()},data:function(){return{total:null,listLoading:!1,listQuery:{page:1,limit:15},tableData:[]}},methods:{getList:function(){var t=this;this.listLoading=!0;var e={limit:this.listQuery.limit,page:this.listQuery.page,search_type:0};Object(n.a)({url:"/admin/product/type_lists",method:"post",data:e}).then(function(e){t.tableData=e.list,t.total=e.total,t.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleEnterPage:function(t){console.log(t),this.$router.push({path:"/typeManagement/categoryDetail",query:{id:t.id}})},handelAddCateGory:function(){this.$router.push({path:"/typeManagement/addCategoryDetail"})}}}},Fq6n:function(t,e,a){"use strict";function n(t){a("Rsmr")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("AMLw"),s=a("8ysF"),l=a("VU/8"),r=n,o=l(i.a,s.a,!1,r,null,null);e.default=o.exports},Rsmr:function(t,e,a){var n=a("sPio");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("236471f5",n,!0)},sPio:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".tipStyle{color:#999;margin-left:10px;font-size:12px;display:inline-block;margin-top:15px}.table-container{margin-top:20px;padding-bottom:60px}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/typeManagement/existedCategory.vue"],names:[],mappings:"AACA,UACI,WAAY,AACZ,iBAAkB,AAClB,eAAgB,AAChB,qBAAsB,AACtB,eAAiB,CACpB,AACD,iBACI,gBAAiB,AACjB,mBAAqB,CACxB",file:"existedCategory.vue",sourcesContent:["\n.tipStyle{\n    color: #999;\n    margin-left: 10px;\n    font-size: 12px;\n    display: inline-block;\n    margin-top: 15px;\n}\n.table-container{\n    margin-top: 20px;\n    padding-bottom: 60px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=40.3d2cd41165a76b837e2b.js.map