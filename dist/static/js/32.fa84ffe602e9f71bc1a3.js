webpackJsonp([32],{"0xDb":function(t,e,n){"use strict";function i(t,e){if(0===arguments.length)return null;var n=e||"{y}-{m}-{d} {h}:{i}:{s}",i=void 0;"object"===(void 0===t?"undefined":r()(t))?i=t:(10===(""+t).length&&(t=1e3*parseInt(t)),i=new Date(t));var a={y:i.getFullYear(),m:i.getMonth()+1,d:i.getDate(),h:i.getHours(),i:i.getMinutes(),s:i.getSeconds(),a:i.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var n=a[e];return"a"===e?["一","二","三","四","五","六","日"][n-1]:(t.length>0&&n<10&&(n="0"+n),n||0)})}e.a=i;var a=n("pFYg"),r=n.n(a);n("bzuE")},"7Uae":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container calendar-list-container"},[n("div",{staticClass:"filter-container"},[n("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.queryCondition}},[n("el-form-item",{attrs:{label:"公司名称",prop:"business_name"}},[n("el-input",{attrs:{placeholder:"公司名称"},model:{value:t.queryCondition.business_name,callback:function(e){t.$set(t.queryCondition,"business_name",e)},expression:"queryCondition.business_name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"品牌",prop:"business_name"}},[n("el-input",{attrs:{placeholder:"品牌"},model:{value:t.queryCondition.brand_name,callback:function(e){t.$set(t.queryCondition,"brand_name",e)},expression:"queryCondition.brand_name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.queryCondition.type_id,callback:function(e){t.$set(t.queryCondition,"type_id",e)},expression:"queryCondition.type_id"}},t._l(t.productTypeList,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),n("el-form-item",{attrs:{label:"创建时间",prop:"created_date"}},[n("el-date-picker",{attrs:{type:"datetimerange","start-placeholder":"选择开始日期","end-placeholder":"选择结束日期",align:"right"},model:{value:t.queryCondition.created_date,callback:function(e){t.$set(t.queryCondition,"created_date",e)},expression:"queryCondition.created_date"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){t.handleCurrentChange(1)}}},[t._v("查询")]),t._v(" "),n("el-button",{on:{click:function(e){t.resetForm("queryCondition")}}},[t._v("重置")])],1)],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"公司名称",prop:"business_name","min-width":"110px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.business_name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"品牌",prop:"product_brand_name","min-width":"60px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.product_brand_name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"品类",prop:"product_type_name",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.product_type_name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"型号",prop:"product_model","min-width":"110px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.product_model))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"created_at_txt",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.approved_at_txt))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"技术方案",prop:"product_technology_type",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.product_technology_type))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return["published"!=e.row.status?n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(n){t.goCheckDetail(e.row)}}},[t._v("进入审核\n                ")]):t._e()]}}])})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[15,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},KdXa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("MnWj"),a=n("7Uae"),r=n("VU/8"),o=r(i.a,a.a,!1,null,null,null);e.default=o.exports},MnWj:function(t,e,n){"use strict";var i=n("woOf"),a=n.n(i),r=n("sQkU"),o=n("bzuE"),s=n("0xDb");e.a={name:"goLiveCheckpending",data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:15},queryCondition:{business_name:"",brand_name:"",type_id:"",model:"",created_date:"",created_start:"",created_end:"",technology_type:""},productTypeList:[],productTechnologyType:o.d}},mounted:function(){var t=this;this.$store.dispatch("GetAuditMenus"),this.$nextTick(function(){t.getList()}),this.getProductType()},activated:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.queryCondition.created_date?(this.queryCondition.created_start=Object(s.a)(this.queryCondition.created_date[0],"{y}-{m}-{d} {h}:{i}:{s}"),this.queryCondition.created_end=Object(s.a)(this.queryCondition.created_date[1],"{y}-{m}-{d} {h}:{i}:{s}")):(this.queryCondition.created_start="",this.queryCondition.created_end=""),this.listLoading=!0;var e={type:3,status:0,limit:this.listQuery.limit,page:this.listQuery.page};a()(e,this.queryCondition),Object(r.f)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(r.d)().then(function(e){t.productTypeList=e.list})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},resetForm:function(t){this.$refs[t].resetFields(),this.handleCurrentChange(1)},goCheckDetail:function(t){var e={record_id:t.record_id,type:"audit",business_name:t.business_name,status:t.status};this.$router.push({path:"/auditManagement/productToAudit",query:e})}}}},bzuE:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],r={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},o="星络科技"},sQkU:function(t,e,n){"use strict";function i(t){return Object(l.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})}function a(){return Object(l.a)({url:"/admin/product/type_lists",method:"post",data:{}})}function r(t){return Object(l.a)({url:"/admin/review_info",method:"post",data:t})}function o(t){return Object(l.a)({url:"/admin/review_approve",method:"post",data:t})}function s(t){return Object(l.a)({url:"/admin/product_lists",method:"post",data:t})}function d(t){return Object(l.a)({url:"/admin/product_info",method:"post",data:t})}function u(t){return Object(l.a)({url:"/admin/product_unshelve",method:"post",data:t})}e.f=i,e.d=a,e.e=r,e.a=o,e.c=s,e.b=d,e.g=u;var l=n("Vo7i")}});
//# sourceMappingURL=32.fa84ffe602e9f71bc1a3.js.map