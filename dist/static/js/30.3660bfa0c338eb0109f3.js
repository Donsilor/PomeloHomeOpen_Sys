webpackJsonp([30],{Xybi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("a3Yh"),a=n.n(i),r=n("3cXf"),o=n.n(r),i=n("4YfN"),s=n.n(i),l=n("sQkU"),u=n("Vo7i"),r=(n("TIfe"),{name:"OnlineProducts",data:function(){return{list:null,total:null,listLoading:!1,businessList:[],brandsList:[],typeList:[],queryCondition:{business_id:"",brand_id:"",type_id:""},listQuery:{page:1,limit:15},copyList:[],editSortFlag:!1}},computed:{},created:function(){this.getBusinessList(),this.getTypeList(),this.getBrandList()},mounted:function(){var t=this;this.$nextTick(function(){t.refresh()})},methods:{unableSearchChange:function(e,n,t){var i=this;Object(u.a)({url:"/admin/set_unable_search",method:"post",data:{unable_search:e?1:0,product_id:n.product_id}}).then(function(t){i.$message.success("操作成功"),n.unable_search=e?1:0})},refresh:function(){this.getList()},getList:function(){var n=this;this.listLoading=!0;var t={limit:this.listQuery.limit,page:this.listQuery.page,search_type:1};""!=this.queryCondition.business_id&&(t.business_id=this.queryCondition.business_id),""!=this.queryCondition.brand_id&&(t.brand_id=this.queryCondition.brand_id),""!=this.queryCondition.type_id&&(t.parent_type_id=this.queryCondition.type_id),Object(l.f)(t).then(function(t){var e=t.data.map(function(t){return s()({},t,{selfSort:t.sort})});n.copyList=JSON.parse(o()(e)),n.list=e,n.total=t.total,n.listLoading=!1})},getBusinessList:function(){var e=this;Object(u.a)({url:"/user/select",method:"get",data:{is_online:1}}).then(function(t){e.businessList=t})},getBrandList:function(){var e=this;Object(u.a)({url:"/brand/select",method:"post",data:{is_online:1}}).then(function(t){e.brandsList=t})},getTypeList:function(){var e=this;Object(u.a)({url:"/product/parenttype_lists",method:"post",data:{}}).then(function(t){e.typeList=t.list}).catch(function(t){e.$message.error(t.msg)})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.editSortFlag=!1,this.getList()},toDetai:function(t){t={product_id:t.product_id};this.$router.push({path:"/productManagement/onlineProductDetail",query:t})},saveSortResult:function(){var e=this,n={},t=(this.list.filter(function(t){return t.sort!=t.selfSort}).map(function(t){return a()({},t.product_id,t.selfSort)}).reduce(function(t,e){n=s()({},n,e)},n),{sortlist:n});Object(u.a)({url:"admin/set_sort",method:"post",data:t}).then(function(t){e.handleCurrentChange(1),e.editSortFlag=!1})},cancelEdit:function(){this.editSortFlag=!1,this.list=this.copyList}}}),i={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("el-row",{staticStyle:{"padding-bottom":"30px"}},[i("el-select",{attrs:{clearable:"",placeholder:"全部厂商"},model:{value:n.queryCondition.business_id,callback:function(t){n.$set(n.queryCondition,"business_id",t)},expression:"queryCondition.business_id"}},n._l(n.businessList,function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.business_id}})}),1),n._v(" "),i("el-select",{attrs:{clearable:"",placeholder:"全部品牌"},model:{value:n.queryCondition.brand_id,callback:function(t){n.$set(n.queryCondition,"brand_id",t)},expression:"queryCondition.brand_id"}},n._l(n.brandsList,function(t,e){return i("el-option",{key:e,attrs:{label:t.brand_name,value:t.brand_id}})}),1),n._v(" "),i("el-select",{attrs:{clearable:"",placeholder:"大品类"},model:{value:n.queryCondition.type_id,callback:function(t){n.$set(n.queryCondition,"type_id",t)},expression:"queryCondition.type_id"}},n._l(n.typeList,function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.id}})}),1),n._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return n.handleCurrentChange(1)}}},[n._v("查找")])],1),n._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:n.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",width:"100",label:"序号"},scopedSlots:n._u([{key:"default",fn:function(e){return[n.editSortFlag?i("div",[i("el-input",{model:{value:e.row.selfSort,callback:function(t){n.$set(e.row,"selfSort",t)},expression:"scope.row.selfSort"}})],1):i("div",[n._v(n._s(e.row.sort))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"品类",prop:"type_name"}}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"品牌",prop:"brand_name"}}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"型号",prop:"model"}}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"厂商",prop:"business_name"}}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"版本号"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v("\n        "+n._s(t.row.version_no_H5?"H5控制页版本"+t.row.version_no_H5:"")+n._s(" 固件版本"+t.row.version_no_firmware)+"\n      ")]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"created_at"}}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"屏蔽搜索"},scopedSlots:n._u([{key:"default",fn:function(e){return[i("el-checkbox",{on:{change:function(t){return n.unableSearchChange(t,e.row,e.$index)}},model:{value:1===e.row.unable_search,callback:function(t){n.$set(e.row,"unable_search === 1",t)},expression:"scope.row.unable_search === 1"}})]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:n._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return n.toDetai(e.row)}}},[n._v("\n          查看详情\n        ")])]}}])})],1),n._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!n.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n.editSortFlag?n._e():i("el-button",{staticStyle:{float:"left","margin-top":"10px"},attrs:{type:"primary",size:"medium"},on:{click:function(t){n.editSortFlag=!0}}},[n._v("编辑排序")]),n._v(" "),n.editSortFlag?i("el-button",{staticStyle:{float:"left","margin-top":"10px"},attrs:{type:"primary",size:"medium"},on:{click:n.saveSortResult}},[n._v("保存排序")]):n._e(),n._v(" "),n.editSortFlag?i("el-button",{staticStyle:{float:"left","margin-top":"10px"},attrs:{size:"medium"},on:{click:n.cancelEdit}},[n._v("取消")]):n._e(),n._v(" "),i("el-pagination",{attrs:{"current-page":n.listQuery.page,"page-sizes":[15,20,30,50],"page-size":n.listQuery.limit,total:n.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){return n.$set(n.listQuery,"page",t)},"update:current-page":function(t){return n.$set(n.listQuery,"page",t)},"size-change":n.handleSizeChange,"current-change":n.handleCurrentChange}})],1)],1)},staticRenderFns:[]},i=n("C7Lr")(r,i,!1,null,null,null);e.default=i.exports},a3Yh:function(t,e,n){"use strict";e.__esModule=!0;var i,a=n("liLe"),r=(i=a)&&i.__esModule?i:{default:i};e.default=function(t,e,n){return e in t?(0,r.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},gGjR:function(t,e,n){n("vdXL");var i=n("DH3n").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},liLe:function(t,e,n){t.exports={default:n("gGjR"),__esModule:!0}},sQkU:function(t,e,n){"use strict";e.j=function(t){return Object(i.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})},e.h=function(){return Object(i.a)({url:"/admin/product/type_lists",method:"post",data:{}})},e.i=function(t){return Object(i.a)({url:"/admin/review_info",method:"post",data:t})},e.c=function(t){return Object(i.a)({url:"/admin/review_approve",method:"post",data:t})},e.f=function(t){return Object(i.a)({url:"/admin/product_lists",method:"post",data:t})},e.e=function(t){return Object(i.a)({url:"/admin/product_info",method:"post",data:t})},e.k=function(t){return Object(i.a)({url:"/admin/product_unshelve",method:"post",data:t})},e.g=function(t){return Object(i.a)({url:"/api/ext/devcard/product",method:"get",data:t})},e.b=function(t){return Object(i.a)({url:"/api/ext/devcard/product",method:"post",data:t})},e.d=function(){return Object(i.a)({url:"/api/ext/gtags/global",method:"get"})},e.a=function(t){return Object(i.a)({url:"/api/ext/gtags/global",method:"post",data:t})};var i=n("Vo7i")},vdXL:function(t,e,n){var i=n("uSC2");i(i.S+i.F*!n("5cPm"),"Object",{defineProperty:n("FIRb").f})}});