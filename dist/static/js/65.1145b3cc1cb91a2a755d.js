webpackJsonp([65],{"08OF":function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,".table-container{margin-top:20px;padding-bottom:60px}","",{version:3,sources:["D:/Product/PomeloHomeOpen_Sys/src/views/typeManagement/voicePlatform.vue"],names:[],mappings:"AACA,iBACI,gBAAiB,AACjB,mBAAqB,CACxB",file:"voicePlatform.vue",sourcesContent:["\n.table-container{\n    margin-top: 20px;\n    padding-bottom: 60px;\n}\n"],sourceRoot:""}])},oVPv:function(t,e,a){var n=a("08OF");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("20f965f6",n,!0)},qh2y:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Vo7i"),i=(a("TIfe"),{name:"voicePlatform",computed:{},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.getList()})},data:function(){return{total:null,listLoading:!1,listQuery:{page:1,limit:15},tableData:[]}},methods:{getList:function(){var e=this;this.listLoading=!0;var t={limit:this.listQuery.limit,page:this.listQuery.page};Object(n.a)({url:"/admin/voice/list",method:"get",data:t}).then(function(t){e.tableData=t.data,e.total=t.total,e.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},addVoicePlatform:function(){this.$router.push({path:"/typeManagement/addVoicePlatform"})},handleEnterPage:function(t){this.$router.push({path:"/typeManagement/addVoicePlatform",query:{distributors_id:t.distributors_id,id:t.voice_id}})}}}),r={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"primary"},on:{click:a.addVoicePlatform}},[a._v("新增语音平台")])],1)],1),a._v(" "),n("div",{staticClass:"table-container"},[[n("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,fit:"",stripe:""}},[n("el-table-column",{attrs:{prop:"logo_url",label:"语音平台logo"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("img",{staticStyle:{display:"block"},attrs:{width:"50",src:t.row.logo_url,alt:"logo"}})]}}])}),a._v(" "),n("el-table-column",{attrs:{prop:"name",label:"语音平台名称",align:"center"}}),a._v(" "),n("el-table-column",{attrs:{prop:"created_at",label:"创建时间"},scopedSlots:a._u([{key:"default",fn:function(t){return[n("span",[a._v(a._s(t.row.created_user+"  创建于"+t.row.created_at))])]}}])}),a._v(" "),n("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary",align:"center"},on:{click:function(t){return a.handleEnterPage(e.row)}}},[a._v("进入详情")])]}}])})],1),a._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!a.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":a.listQuery.page,"page-sizes":[15,20,30,50],"page-size":a.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:a.total},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange,"update:currentPage":function(t){return a.$set(a.listQuery,"page",t)},"update:current-page":function(t){return a.$set(a.listQuery,"page",t)}}})],1)]],2)],1)},staticRenderFns:[]};var o=a("VU/8")(i,r,!1,function(t){a("oVPv")},null,null);e.default=o.exports}});