webpackJsonp([69],{UyAJ:function(t,e,i){"use strict";e.c=function(t){return Object(a.a)({url:"/api/ext/devcard/template",method:"get",data:t})},e.d=function(t){return Object(a.a)({url:"/api/ext/devcard/template",method:"post",data:t})},e.b=function(){return Object(a.a)({url:"/api/ext/devcard/size",method:"get"})},e.a=function(t){return Object(a.a)({url:"/api/ext/devcard/size",method:"post",data:t})};var a=i("Vo7i")},Vjw9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("3cXf"),n=(i("Vo7i"),i("sQkU"),i("UyAJ")),r={data:function(){return{list:null,listLoading:!1,listQuery:{page:1,limit:15},formVisible:!1,isEdit:!1,tagList:[],formItem:{y:"",x:"",operator:""}}},computed:{dialogTitle:function(){return this.isEdit?"修改卡片":"新增卡片"}},created:function(){},mounted:function(){this.refresh()},methods:{dataFormat:function(t){var e=new Date(t),i=e.getFullYear(),t=e.getMonth()+1;return i+"-"+(t=t<10?"0"+t:t)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())+" "+(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())},refresh:function(){var t=this;this.$nextTick(function(){t.getCardSizeList()})},getCardSizeList:function(){var e=this;this.listLoading=!0;var t={size:this.listQuery.limit,page:this.listQuery.page};Object(n.b)(t).then(function(t){e.tagList=t.data,e.tagList.forEach(function(t){t.create_time=e.dataFormat(1e3*t.create_time),t.update_time=e.dataFormat(1e3*t.update_time)}),e.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getCardSizeList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getCardSizeList()},addCart:function(){this.isEdit=!1,this.formVisible=!0,this.formItem={},this.formItem.operator=1},editCard:function(t,e){this.isEdit=!0,this.formVisible=!0,this.formItem=t,this.formItem.operator=2},delCard:function(e){var i=this;this.$confirm("确认删除？").then(function(t){i.formItem=e,i.formItem.operator=3,i.onSubmit()}).catch(function(t){})},onSubmit:function(){var e=this,t=this.formItem;Object(n.a)(t).then(function(t){e.$message.success("操作成功！"),e.formVisible=!1,e.getCardSizeList()})}}},a={render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",{staticStyle:{"margin-bottom":"10px"}},[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:i.addCart}},[i._v("\n      新增大小\n    ")])],1),i._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:i.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:i.tagList,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"大小名称"},scopedSlots:i._u([{key:"default",fn:function(t){return[a("div",[i._v("\n          "+i._s(t.row.x)+"*"+i._s(t.row.y)+"\n        ")])]}}])}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"create_time"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"更新时间",prop:"update_time"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:i._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return i.delCard(e.row)}}},[i._v("\n          删除\n        ")])]}}])})],1),i._v(" "),a("el-dialog",{attrs:{visible:i.formVisible,title:i.dialogTitle},on:{"update:visible":function(t){i.formVisible=t}}},[a("el-form",{attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"宽"}},[a("el-input",{attrs:{type:"input"},model:{value:i.formItem.x,callback:function(t){i.$set(i.formItem,"x",t)},expression:"formItem.x"}})],1),i._v(" "),a("el-form-item",{attrs:{label:"高"}},[a("el-input",{attrs:{type:"input"},model:{value:i.formItem.y,callback:function(t){i.$set(i.formItem,"y",t)},expression:"formItem.y"}})],1)],1),i._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:i.onSubmit}},[i._v("提交")]),i._v(" "),a("el-button",{on:{click:function(t){i.formVisible=!1}}},[i._v("取消")])],1)],1)],1)},staticRenderFns:[]},a=i("C7Lr")(r,a,!1,null,null,null);e.default=a.exports},sQkU:function(t,e,i){"use strict";e.j=function(t){return Object(a.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})},e.h=function(){return Object(a.a)({url:"/admin/product/type_lists",method:"post",data:{}})},e.i=function(t){return Object(a.a)({url:"/admin/review_info",method:"post",data:t})},e.c=function(t){return Object(a.a)({url:"/admin/review_approve",method:"post",data:t})},e.f=function(t){return Object(a.a)({url:"/admin/product_lists",method:"post",data:t})},e.e=function(t){return Object(a.a)({url:"/admin/product_info",method:"post",data:t})},e.k=function(t){return Object(a.a)({url:"/admin/product_unshelve",method:"post",data:t})},e.g=function(t){return Object(a.a)({url:"/api/ext/devcard/product",method:"get",data:t})},e.b=function(t){return Object(a.a)({url:"/api/ext/devcard/product",method:"post",data:t})},e.d=function(){return Object(a.a)({url:"/api/ext/gtags/global",method:"get"})},e.a=function(t){return Object(a.a)({url:"/api/ext/gtags/global",method:"post",data:t})};var a=i("Vo7i")}});