webpackJsonp([46],{"45cV":function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".table-container{margin-top:20px;padding-bottom:60px}.frt{float:right;margin-left:12px}","",{version:3,sources:["E:/proj/PomeloHomeOpen_Sys/src/views/typeManagement/deviceManager.vue"],names:[],mappings:"AACA,iBACI,gBAAiB,AACjB,mBAAqB,CACxB,AACD,KACI,YAAa,AACb,gBAAkB,CACrB",file:"deviceManager.vue",sourcesContent:["\n.table-container{\n    margin-top: 20px;\n    padding-bottom: 60px;\n}\n.frt{\n    float: right;\n    margin-left: 12px;\n}\n"],sourceRoot:""}])},a7Xa:function(t,e,a){var n=a("45cV");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("a5292f76",n,!0)},cXBz:function(t,e,a){"use strict";var n=a("Vo7i"),i=(a("VSB1"),a("TIfe"));e.a={name:"existedCategory",computed:{},created:function(){},mounted:function(){this.getList(),this.getAddType(),this.getTypeTree(),this.getBusinessList()},data:function(){return{tableData:[],addFucSetModal:!1,addFucForm:[],total:0,limit:0,token:Object(i.a)(),typeTree:[],childType:[],businessList:[],type_id:"",child_id:"",business_id:"",listQuery:{page:1,limit:15}}},methods:{handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},getList:function(){var t=this;Object(n.a)({url:"/device/deviceList",method:"post",data:{page:this.listQuery.page,token:Object(i.a)(),limit:this.listQuery.limit,type_id:this.child_id,parent_type_id:this.type_id,business_id:this.business_id}}).then(function(e){t.tableData=e.data,t.total=Number(e.total),t.limit=Number(e.per_page)}).catch(function(e){t.$message({type:"error",message:e.msg})})},getTypeTree:function(){var t=this;Object(n.a)({url:"/producttype/tree",method:"get",data:{}}).then(function(e){t.typeTree=e})},getBusinessList:function(){var t=this;Object(n.a)({url:"/user/select",method:"get",data:{}}).then(function(e){t.businessList=e})},changeType:function(t){var e=this.typeTree.find(function(e){return e.type_id==parseInt(t)});this.childType=e?e.children:[],this.child_id=""},handleEnterPage:function(t){this.$router.push({path:"/typeManagement/deviceDetail",query:{id:t.id}})},addDevice:function(){this.$router.push({path:"/typeManagement/addDevice"})},getAddType:function(){var t=this;Object(n.a)({url:"/device/getAddtype",method:"post",data:{}}).then(function(e){t.addFucForm=e,t.addFucForm.forEach(function(t,e){t.status=!!t.status})}).catch(function(e){t.$message({type:"error",message:e.msg})})},addFuc:function(){var t=this;this.addFucForm.forEach(function(t,e){t.status=t.status?1:0}),Object(n.a)({url:"/device/setAddtype",method:"post",data:{token:this.token,settings:this.addFucForm}}).then(function(e){t.$message({type:"success",message:"修改设置成功"}),t.addFucSetModal=!1,t.addFucForm.forEach(function(t,e){t.status=!!t.status})}).catch(function(e){t.$message({type:"error",message:e.msg})})},search:function(){this.getList()}}}},uj0Z:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:t.addDevice}},[t._v("新增引导页")]),t._v(" "),a("el-button",{attrs:{type:"ghost"},on:{click:function(e){t.addFucSetModal=!0}}},[t._v("客户端添加设备设置")]),t._v(" "),a("el-button",{staticClass:"frt",attrs:{type:"primary"},on:{click:function(e){t.handleCurrentChange(1)}}},[t._v("查找")]),t._v(" "),a("el-select",{staticClass:"frt",attrs:{clearable:"",placeholder:"全部厂商"},model:{value:t.business_id,callback:function(e){t.business_id=e},expression:"business_id"}},t._l(t.businessList,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.business_id}})})),t._v(" "),a("el-select",{staticClass:"frt",attrs:{clearable:"",placeholder:"全部子品类"},model:{value:t.child_id,callback:function(e){t.child_id=e},expression:"child_id"}},t._l(t.childType,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.type_id}})})),t._v(" "),a("el-select",{staticClass:"frt",attrs:{clearable:"",placeholder:"全部大品类"},on:{change:t.changeType},model:{value:t.type_id,callback:function(e){t.type_id=e},expression:"type_id"}},t._l(t.typeTree,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.type_id}})}))],1)],1),t._v(" "),a("div",{staticClass:"table-container"},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"type_name",label:"子品类",width:"220"}}),t._v(" "),a("el-table-column",{attrs:{prop:"parent_type_name",label:"所属大品类",width:"220"}}),t._v(" "),a("el-table-column",{attrs:{prop:"model",label:"产品型号",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"business_name",label:"厂商"}}),t._v(" "),a("el-table-column",{attrs:{prop:"business_name",label:"是否融合版",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["100001"==e.row.app_id?a("span",[t._v("是")]):a("span",[t._v("否")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"business_name",label:"是否默认产品",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.is_default?a("span",[t._v("是")]):a("span",[t._v("否")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间",width:"220"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary",align:"center"},on:{click:function(a){t.handleEnterPage(e.row)}}},[t._v("编辑")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[15,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})]],2),t._v(" "),a("el-dialog",{attrs:{title:"客户端添加设备设置",visible:t.addFucSetModal,width:"30%"},on:{"update:visible":function(e){t.addFucSetModal=e}}},[a("span",{staticClass:"danger",staticStyle:{display:"inline-block","margin-bottom":"20px"}},[t._v("该设置影响客户端能否添加设备，请确认后谨慎操作")]),t._v(" "),t._l(t.addFucForm,function(e){return a("div",[a("el-checkbox",{model:{value:e.status,callback:function(a){t.$set(e,"status",a)},expression:"item.status"}},[t._v(t._s(e.name))])],1)}),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addFucSetModal=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addFuc}},[t._v("确 定")])],1)],2)],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},z8TS:function(t,e,a){"use strict";function n(t){a("a7Xa")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("cXBz"),s=a("uj0Z"),l=a("VU/8"),r=n,o=l(i.a,s.a,!1,r,null,null);e.default=o.exports}});
//# sourceMappingURL=46.1cdd7ed3b39e0ef1e6a6.js.map