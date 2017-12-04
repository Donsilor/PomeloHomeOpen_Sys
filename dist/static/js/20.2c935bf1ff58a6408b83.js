webpackJsonp([20],{"0xDb":function(e,t,n){"use strict";function i(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",i=void 0;"object"===(void 0===e?"undefined":o()(e))?i=e:(10===(""+e).length&&(e=1e3*parseInt(e)),i=new Date(e));var a={y:i.getFullYear(),m:i.getMonth()+1,d:i.getDate(),h:i.getHours(),i:i.getMinutes(),s:i.getSeconds(),a:i.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=a[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}t.a=i;var a=n("pFYg"),o=n.n(a)},CulW:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("div",{staticClass:"filter-container"},[n("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryCondition}},[n("el-form-item",{attrs:{label:"公司名称",prop:"business_name"}},[n("el-input",{attrs:{placeholder:"公司名称"},model:{value:e.queryCondition.business_name,callback:function(t){e.$set(e.queryCondition,"business_name",t)},expression:"queryCondition.business_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"品牌",prop:"business_name"}},[n("el-input",{attrs:{placeholder:"品牌"},model:{value:e.queryCondition.brand_name,callback:function(t){e.$set(e.queryCondition,"brand_name",t)},expression:"queryCondition.brand_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.queryCondition.type_id,callback:function(t){e.$set(e.queryCondition,"type_id",t)},expression:"queryCondition.type_id"}},e._l(e.productTypeList,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"型号",prop:"model"}},[n("el-input",{attrs:{placeholder:"型号"},model:{value:e.queryCondition.model,callback:function(t){e.$set(e.queryCondition,"model",t)},expression:"queryCondition.model"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"创建时间",prop:"created_date"}},[n("el-date-picker",{attrs:{type:"datetimerange",placeholder:"选择时间范围",align:"right"},model:{value:e.queryCondition.created_date,callback:function(t){e.$set(e.queryCondition,"created_date",t)},expression:"queryCondition.created_date"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.getList}},[e._v("查询")]),e._v(" "),n("el-button",{on:{click:function(t){e.resetForm("queryCondition")}}},[e._v("重置")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{"min-width":"110px",label:"公司"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.business_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"110px",label:"品牌"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.product_brand_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"110px",label:"品类"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.product_type_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"110px",label:"型号"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.product_model))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"180px",align:"center",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.approved_at_txt))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"接入方式",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.product_technology_type))])]}}])}),e._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",[e._v(e._s(t.row.status_txt))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return["published"!=t.row.status?n("el-button",{attrs:{size:"small",type:"success"},on:{click:function(n){e.goCheckDetail(t.row)}}},[e._v("\n          查看详情\n        ")]):e._e()]}}])})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},a=[],o={render:i,staticRenderFns:a};t.a=o},OcjY:function(e,t,n){"use strict";var i=n("woOf"),a=n.n(i),o=n("sQkU"),r=n("bzuE"),s=n("0xDb");t.a={name:"goLiveCheckpending",data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},queryCondition:{business_name:"",brand_name:"",type_id:"",model:"",created_date:"",created_start:"",created_end:"",technology_type:""},productTypeList:[],productTechnologyType:r.b}},activated:function(){this.getList(),this.getProductType()},methods:{getList:function(){var e=this;this.queryCondition.created_date[0]?(this.queryCondition.created_start=Object(s.a)(this.queryCondition.created_date[0],"{y}-{m}-{d} {h}:{i}:{s}"),this.queryCondition.created_end=Object(s.a)(this.queryCondition.created_date[1],"{y}-{m}-{d} {h}:{i}:{s}")):(this.queryCondition.created_start="",this.queryCondition.created_end=""),this.listLoading=!0;var t={type:4,status:0,limit:this.listQuery.limit,page:this.listQuery.page};a()(t,this.queryCondition),Object(o.d)(t).then(function(t){console.log("审核产品列表",t.data),e.list=t.data,e.total=t.total,e.listLoading=!1})},getProductType:function(){var e=this;Object(o.b)().then(function(t){e.productTypeList=t.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},resetForm:function(e){this.$refs[e].resetFields()},goCheckDetail:function(e){this.$router.push({path:"/goLiveCheck/goLiveCheckDetail",query:e})}}}},bzuE:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,action_type:1,unapproved_reason:"营业执照/组织结构代码证/税务登记证复印件，加盖公章未审核通过",description:"营业执照/组织结构代码证/税务登记证复印件，加盖公章"},{id:2,action_type:1,unapproved_reason:"法定代表人身份证复印件，加盖公章未审核通过",description:"法定代表人身份证复印件，加盖公章"},{id:3,action_type:1,unapproved_reason:"公司出具的法人代表身份证明书，加盖公章未审核通过",description:"公司出具的法人代表身份证明书，加盖公章"},{id:4,action_type:1,unapproved_reason:"品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录未审核通过",description:"品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录"},{id:5,action_type:1,unapproved_reason:"ISO9001复印件未审核通过",description:"ISO9001复印件"},{id:6,action_type:1,unapproved_reason:"国家高新技术企业复印件未审核通过",description:"国家高新技术企业复印件"},{id:7,action_type:1,unapproved_reason:"其他资质证书未审核通过",description:"其他资质证书"}]},of2Q:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("OcjY"),a=n("CulW"),o=n("VU/8"),r=o(i.a,a.a,!1,null,null,null);t.default=r.exports},sQkU:function(e,t,n){"use strict";function i(e){return Object(s.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})}function a(){return Object(s.a)({url:"/product/type_lists",method:"post",data:{}})}function o(e){return Object(s.a)({url:"/admin/review_info",method:"post",data:e})}function r(e){return Object(s.a)({url:"/admin/review_approve",method:"post",data:e})}t.d=i,t.b=a,t.c=o,t.a=r;var s=n("Vo7i")}});
//# sourceMappingURL=20.2c935bf1ff58a6408b83.js.map