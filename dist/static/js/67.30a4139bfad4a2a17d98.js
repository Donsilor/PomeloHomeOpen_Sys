webpackJsonp([67],{"3rTz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("sQkU"),a=n("Vo7i"),s=(n("TIfe"),{name:"OnlineProducts",data:function(){return{list:null,total:null,listLoading:!1,businessList:[],brandsList:[],typeList:[],queryCondition:{business_id:"",brand_id:"",type_id:""},listQuery:{page:1,limit:15}}},computed:{},created:function(){this.getBusinessList(),this.getTypeList(),this.getBrandList()},mounted:function(){var t=this;this.$nextTick(function(){t.refresh()})},methods:{refresh:function(){this.getList()},getList:function(){var e=this;this.listLoading=!0;var t={limit:this.listQuery.limit,page:this.listQuery.page,search_type:3};""!=this.queryCondition.business_id&&(t.business_id=this.queryCondition.business_id),""!=this.queryCondition.brand_id&&(t.brand_id=this.queryCondition.brand_id),""!=this.queryCondition.type_id&&(t.type_id=this.queryCondition.type_id),Object(i.c)(t).then(function(t){e.list=t.data,e.total=t.total,e.listLoading=!1})},getBusinessList:function(){var e=this;Object(a.a)({url:"/user/select",method:"get",data:{is_online:1}}).then(function(t){e.businessList=t})},getBrandList:function(){var e=this;Object(a.a)({url:"/brand/select",method:"post",data:{}}).then(function(t){e.brandsList=t})},getTypeList:function(){var e=this;Object(a.a)({url:"/admin/product/type_lists",method:"post",data:{}}).then(function(t){e.typeList=t.list}).catch(function(t){e.$message.error(t.msg)})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},toDetai:function(t){var e={product_id:t.product_id,lineStatus:"offline"};this.$router.push({path:"/productManagement/offlineProductDetail",query:e})}}}),r={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("el-row",{staticStyle:{"padding-bottom":"30px"}},[i("el-select",{attrs:{clearable:"",placeholder:"全部厂商"},model:{value:n.queryCondition.business_id,callback:function(t){n.$set(n.queryCondition,"business_id",t)},expression:"queryCondition.business_id"}},n._l(n.businessList,function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.business_id}})})),n._v(" "),i("el-select",{attrs:{clearable:"",placeholder:"全部品牌"},model:{value:n.queryCondition.brand_id,callback:function(t){n.$set(n.queryCondition,"brand_id",t)},expression:"queryCondition.brand_id"}},n._l(n.brandsList,function(t,e){return i("el-option",{key:e,attrs:{label:t.brand_name,value:t.brand_id}})})),n._v(" "),i("el-select",{attrs:{clearable:"",placeholder:"全部品类"},model:{value:n.queryCondition.type_id,callback:function(t){n.$set(n.queryCondition,"type_id",t)},expression:"queryCondition.type_id"}},n._l(n.typeList,function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),n._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){n.handleCurrentChange(1)}}},[n._v("查找")])],1),n._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:n.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"品类",prop:"type_name"}}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"品牌",prop:"brand_name"}}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"型号",prop:"model"}}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"厂商",prop:"business_name"}}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"版本号"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v("\n        "+n._s(t.row.version_no_H5?"H5控制页版本"+t.row.version_no_H5:"")+n._s(" 固件版本"+t.row.version_no_firmware)+"\n      ")]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"created_at"}}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:n._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){n.toDetai(e.row)}}},[n._v("\n          查看详情\n        ")])]}}])})],1),n._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!n.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":n.listQuery.page,"page-sizes":[15,20,30,50],"page-size":n.listQuery.limit,total:n.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){n.$set(n.listQuery,"page",t)},"size-change":n.handleSizeChange,"current-change":n.handleCurrentChange}})],1)],1)},staticRenderFns:[]},o=n("VU/8")(s,r,!1,null,null,null);e.default=o.exports},sQkU:function(t,e,n){"use strict";e.f=function(t){return Object(i.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})},e.d=function(){return Object(i.a)({url:"/admin/product/type_lists",method:"post",data:{}})},e.e=function(t){return Object(i.a)({url:"/admin/review_info",method:"post",data:t})},e.a=function(t){return Object(i.a)({url:"/admin/review_approve",method:"post",data:t})},e.c=function(t){return Object(i.a)({url:"/admin/product_lists",method:"post",data:t})},e.b=function(t){return Object(i.a)({url:"/admin/product_info",method:"post",data:t})},e.g=function(t){return Object(i.a)({url:"/admin/product_unshelve",method:"post",data:t})};var i=n("Vo7i")}});