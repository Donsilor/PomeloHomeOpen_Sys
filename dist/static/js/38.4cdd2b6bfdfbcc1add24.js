webpackJsonp([38],{"3sKf":function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".table-container{margin-top:20px;padding-bottom:60px}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/typeManagement/networkManager.vue"],names:[],mappings:"AACA,iBACI,gBAAiB,AACjB,mBAAqB,CACxB",file:"networkManager.vue",sourcesContent:["\n.table-container{\n    margin-top: 20px;\n    padding-bottom: 60px;\n}\n"],sourceRoot:""}])},"8zEP":function(t,e,a){"use strict";function n(t){a("KH3Z")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("PvFc"),r=a("mbAK"),s=a("VU/8"),o=n,l=s(i.a,r.a,!1,o,null,null);e.default=l.exports},KH3Z:function(t,e,a){var n=a("3sKf");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("b39c49ca",n,!0)},PvFc:function(t,e,a){"use strict";var n=a("Vo7i");e.a={name:"networkManager",computed:{},created:function(){},mounted:function(){this.getList()},data:function(){return{total:null,listLoading:!1,listQuery:{page:1,limit:15},tableData:[]}},methods:{getList:function(){var t=this;this.listLoading=!0;var e={limit:this.listQuery.limit,page:this.listQuery.page};Object(n.a)({url:"/distribution/list",method:"post",data:e}).then(function(e){t.tableData=e.data,t.total=e.total,t.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handelAddNetWork:function(){this.$router.push({path:"/typeManagement/addNetWork"})},handleEnterPage:function(t){this.$router.push({path:"/typeManagement/addNetWork",query:{distributors_id:t.distributors_id,id:t.id}})}}}},mbAK:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:t.handelAddNetWork}},[t._v("新增配网方式")])],1)],1),t._v(" "),a("div",{staticClass:"table-container"},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,fit:"",stripe:""}},[a("el-table-column",{attrs:{prop:"distribution_name",label:"渠道商名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"network_name",label:"配网方式",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"a_name",label:"创建人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary",align:"center"},on:{click:function(a){t.handleEnterPage(e.row)}}},[t._v("进入详情")])]}}])})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[15,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1)]],2)],1)},i=[],r={render:n,staticRenderFns:i};e.a=r}});
//# sourceMappingURL=38.4cdd2b6bfdfbcc1add24.js.map