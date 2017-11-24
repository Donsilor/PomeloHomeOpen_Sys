webpackJsonp([10],{"3fGN":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("hf62"),a=n("84a1"),o=n("VU/8"),l=o(i.a,a.a,null,null,null);t.default=l.exports},"84a1":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("div",{staticClass:"filter-container"},[n("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryCondition}},[n("el-form-item",{attrs:{label:"公司名称",prop:"business_name"}},[n("el-input",{attrs:{placeholder:"公司名称"},model:{value:e.queryCondition.business_name,callback:function(t){e.queryCondition.business_name=t},expression:"queryCondition.business_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"品牌",prop:"brand_name"}},[n("el-input",{attrs:{placeholder:"品牌"},model:{value:e.queryCondition.brand_name,callback:function(t){e.queryCondition.brand_name=t},expression:"queryCondition.brand_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.queryCondition.type_id,callback:function(t){e.queryCondition.type_id=t},expression:"queryCondition.type_id"}},e._l(e.productTypeList,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"型号",prop:"model"}},[n("el-input",{attrs:{placeholder:"型号"},model:{value:e.queryCondition.model,callback:function(t){e.queryCondition.model=t},expression:"queryCondition.model"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"创建时间",prop:"created_date"}},[n("el-date-picker",{attrs:{type:"datetimerange",placeholder:"选择时间范围",align:"right"},model:{value:e.queryCondition.created_date,callback:function(t){e.queryCondition.created_date=t},expression:"queryCondition.created_date"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"接入方式",prop:"technology_type"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.queryCondition.technology_type,callback:function(t){e.queryCondition.technology_type=t},expression:"queryCondition.technology_type"}},e._l(e.productTechonologyType,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.getList}},[e._v("查询")]),e._v(" "),n("el-button",{on:{click:function(t){e.resetForm("queryCondition")}}},[e._v("重置")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{"min-width":"110px",label:"公司"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.business_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"110px",label:"品牌"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.product_brand_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"110px",label:"品类"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.product_type_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"110px",label:"型号"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.product_model))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"180px",align:"center",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.approved_at_txt))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"接入方式",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.product_techonology_type))])]}}])}),e._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",[e._v(e._s(t.row.status_txt))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return["published"!=t.row.status?n("el-button",{attrs:{size:"small",type:"success"},on:{click:function(n){e.goCheckPengdingDetail(t.row)}}},[e._v("\n          查看详情\n        ")]):e._e()]}}])})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.listQuery.page=t}}})],1)],1)},a=[],o={render:i,staticRenderFns:a};t.a=o},bzuE:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}]},hf62:function(e,t,n){"use strict";var i=n("woOf"),a=n.n(i),o=n("sQkU"),l=n("bzuE");t.a={name:"productCheckpending",data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},queryCondition:{business_name:"",brand_name:"",type_id:"",model:"",created_date:"",created_start:"",created_end:"",technology_type:""},productTypeList:[],productTechonologyType:l.a}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var e=this;this.listLoading=!0;var t={token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZGV2cGhvLmV2ZXJncmFuZGUuY24vaW5kZXgucGhwL2FkbWluL2xvZ2luIiwiaWF0IjoxNTEwNzExMDkxLCJleHAiOjE1MTE5MjA2OTEsIm5iZiI6MTUxMDcxMTA5MSwianRpIjoiMjFwelkzeld1ZUhtS0haaiIsInN1YiI6M30.cx2jVQcZ_Z-a2jlbu9eJ3lVDBOCnfr_l6TDK908MR-I",type:3,status:0,limit:10,page:this.listQuery.page};a()(t,this.queryCondition),n.i(o.a)(t).then(function(t){console.log("审核产品列表",t.data),e.list=t.data.result.data,e.total=t.data.result.total,e.listLoading=!1})},getProductType:function(){var e=this;n.i(o.b)().then(function(t){e.productTypeList=t.data.result.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},resetForm:function(e){this.$refs[e].resetFields()},goCheckPengdingDetail:function(){this.$router.push({path:"/productCheck/productCheckDetail",query:{}})}}}},sQkU:function(e,t,n){"use strict";function i(e){return n.i(o.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})}function a(){return n.i(o.a)({url:"/product/type_lists",method:"post"})}t.a=i,t.b=a;var o=n("Vo7i")}});
//# sourceMappingURL=10.bed45e8b676473a61f46.js.map