webpackJsonp([55],{"1sGz":function(t,e,n){var a=n("Ro+m");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("505e9ced",a,!0)},"36jj":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Vo7i"),i={name:"ChannelManager",data:function(){return{total:null,listLoading:!1,listQuery:{page:1,limit:15},tableData:[]}},computed:{},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.getList()})},methods:{getList:function(){var e=this;this.listLoading=!0;var t={limit:this.listQuery.limit,page:this.listQuery.page,type:0};Object(a.a)({url:"/admin/distributor/lists",method:"post",data:t}).then(function(t){e.tableData=t.list,e.total=t.total,e.listLoading=!1})},setOpen:function(t){Object(a.a)({url:"/distributor/setopen",method:"post",data:{id:t.id,is_open:t.is_open}}).then(function(t){}).catch(function(){t.is_open=2+~t.is_open})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleEnterPage:function(t){this.$router.push({path:"/typeManagement/channelDetail",query:{id:t.id}})},handelAddChannel:function(){this.$router.push({path:"/typeManagement/channelDetail"})}}},o={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:n.handelAddChannel}},[n._v("添加新渠道商")])],1)],1),n._v(" "),a("div",{staticClass:"table-container"},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:n.tableData,fit:"",stripe:""}},[a("el-table-column",{attrs:{prop:"sort",label:"序号"}}),n._v(" "),a("el-table-column",{attrs:{prop:"logo_url",label:"渠道商logo"},scopedSlots:n._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{display:"block"},attrs:{src:t.row.logo_url,width:"50",alt:"logo"}})]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"name",label:"渠道商名称",align:"center"}}),n._v(" "),a("el-table-column",{attrs:{prop:"created_user",label:"记录"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v("\n            "+n._s(t.row.created_user+" "+t.row.created_at)+"\n          ")]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"is_open",label:"是否启用"},scopedSlots:n._u([{key:"default",fn:function(e){return[a("div",[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(t){n.setOpen(e.row)}},model:{value:e.row.is_open,callback:function(t){n.$set(e.row,"is_open",t)},expression:"scope.row.is_open"}})],1)]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"is_open",label:"是否第三方"},scopedSlots:n._u([{key:"default",fn:function(t){return[a("div",[n._v("\n              "+n._s(t.row.is_third?"是":"否")+"\n            ")])]}}])}),n._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary",align:"center"},on:{click:function(t){n.handleEnterPage(e.row)}}},[n._v("进入详情")])]}}])})],1)]],2)],1)},staticRenderFns:[]};var l=n("VU/8")(i,o,!1,function(t){n("1sGz")},null,null);e.default=l.exports},"Ro+m":function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,".table-container{margin-top:20px;padding-bottom:60px}","",{version:3,sources:["F:/A-PRODUCT/PomeloHomeOpen_Sys/src/views/typeManagement/channelManager.vue"],names:[],mappings:"AACA,iBACI,gBAAiB,AACjB,mBAAqB,CACxB",file:"channelManager.vue",sourcesContent:["\n.table-container{\n    margin-top: 20px;\n    padding-bottom: 60px;\n}\n"],sourceRoot:""}])}});