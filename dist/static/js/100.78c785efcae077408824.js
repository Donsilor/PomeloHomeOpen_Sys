webpackJsonp([100],{YBQJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("Vo7i");var n={data:function(){return{list:null,listLoading:!0}},filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t,e=this;this.listLoading=!0,(t=this.listQuery,Object(l.a)({url:"/table/list",method:"get",params:t})).then(function(t){e.list=t.data.items,e.listLoading=!1})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Title"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.title)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.author))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Pageviews",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.pageviews)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(t.row.status))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"Display_time",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(t.row.display_time))])]}}])})],1)],1)},staticRenderFns:[]},i=a("VU/8")(n,s,!1,null,null,null);e.default=i.exports}});