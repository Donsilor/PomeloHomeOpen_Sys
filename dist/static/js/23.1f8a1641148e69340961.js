webpackJsonp([23],{"0xDb":function(t,e,n){"use strict";function i(t,e){if(0===arguments.length)return null;var n=e||"{y}-{m}-{d} {h}:{i}:{s}",i=void 0;"object"===(void 0===t?"undefined":r()(t))?i=t:(10===(""+t).length&&(t=1e3*parseInt(t)),i=new Date(t));var a={y:i.getFullYear(),m:i.getMonth()+1,d:i.getDate(),h:i.getHours(),i:i.getMinutes(),s:i.getSeconds(),a:i.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var n=a[e];return"a"===e?["一","二","三","四","五","六","日"][n-1]:(t.length>0&&n<10&&(n="0"+n),n||0)})}function a(t,e){if(console.log("翻译入参",t,e,s.a,s.a[e]),!t)return"";for(var n=void 0,i=0;i<s.a[e].length;i++)s.a[e][i].DICT_DESC===t&&(n=s.a[e][i].DICT_VALUE);return n}e.b=i,e.c=a,n.d(e,"a",function(){return l});var o=n("pFYg"),r=n.n(o),s=n("bzuE"),l=function(t){for(var e=0;e<s.b.length;e++)if(s.b[e].type==t)return s.b[e].description}},"1swh":function(t,e,n){"use strict";var i=n("woOf"),a=n.n(i),o=n("sQkU"),r=n("0xDb");n("9GaH");e.a={name:"enterPriseCheckPengding",data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},queryCondition:{business_name:"",contacts:"",contacts_mobile:"",created_date:"",created_start:this.created_start,created_end:""}}},computed:{},created:function(){console.log(Object(r.c)("企业审核","checkType"))},activated:function(){this.getList()},methods:{getList:function(){var t=this;this.queryCondition.created_date[0]?(this.queryCondition.created_start=Object(r.b)(this.queryCondition.created_date[0],"{y}-{m}-{d} {h}:{i}:{s}"),this.queryCondition.created_end=Object(r.b)(this.queryCondition.created_date[1],"{y}-{m}-{d} {h}:{i}:{s}")):(this.queryCondition.created_start="",this.queryCondition.created_end=""),this.listLoading=!0;var e={type:1,status:0,limit:this.listQuery.limit,page:this.listQuery.page};a()(e,this.queryCondition),Object(o.d)(e).then(function(e){console.log("企业待审核列表",e),t.list=e.data,t.total=e.total,t.listLoading=!1})},resetForm:function(t){this.$refs[t].resetFields()},goCheckDetail:function(t){console.log("row",t),t.approved_user="",t.product_brand_name="",this.$router.push({path:"/enterpriseCheck/enterpriseCheckDetail",query:t})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()}}}},WB5W:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("1swh"),a=n("ju//"),o=n("VU/8"),r=o(i.a,a.a,!1,null,null,null);e.default=r.exports},bzuE:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return o});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,type:2,action_type:1,unapproved_reason:"营业执照/组织结构代码证/税务登记证复印件，加盖公章未审核通过",description:"营业执照/组织结构代码证/税务登记证复印件，加盖公章"},{id:2,type:4,action_type:1,unapproved_reason:"法定代表人身份证复印件，加盖公章未审核通过",description:"法定代表人身份证复印件，加盖公章"},{id:3,type:5,action_type:1,unapproved_reason:"公司出具的法人代表身份证明书，加盖公章未审核通过",description:"公司出具的法人代表身份证明书，加盖公章"},{id:4,type:9,action_type:1,unapproved_reason:"品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录未审核通过",description:"品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录"},{id:5,type:6,action_type:1,unapproved_reason:"ISO9001复印件未审核通过",description:"ISO9001复印件"},{id:6,type:7,action_type:1,unapproved_reason:"国家高新技术企业复印件未审核通过",description:"国家高新技术企业复印件"}],o={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]}},"ju//":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container calendar-list-container"},[n("div",{staticClass:"filter-container"},[n("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.queryCondition}},[n("el-form-item",{attrs:{label:"公司名称",prop:"business_name"}},[n("el-input",{attrs:{placeholder:"公司名称"},model:{value:t.queryCondition.business_name,callback:function(e){t.$set(t.queryCondition,"business_name",e)},expression:"queryCondition.business_name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系人",prop:"contacts"}},[n("el-input",{attrs:{placeholder:"联系人"},model:{value:t.queryCondition.contacts,callback:function(e){t.$set(t.queryCondition,"contacts",e)},expression:"queryCondition.contacts"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系手机",prop:"contacts_mobile"}},[n("el-input",{attrs:{placeholder:"联系手机"},model:{value:t.queryCondition.contacts_mobile,callback:function(e){t.$set(t.queryCondition,"contacts_mobile",e)},expression:"queryCondition.contacts_mobile"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"提交时间",prop:"created_date"}},[n("el-date-picker",{attrs:{type:"datetimerange",placeholder:"选择时间范围",align:"right",format:"yyyy-MM-dd HH:mm:ss"},model:{value:t.queryCondition.created_date,callback:function(e){t.$set(t.queryCondition,"created_date",e)},expression:"queryCondition.created_date"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.getList}},[t._v("查询")]),t._v(" "),n("el-button",{on:{click:function(e){t.resetForm("queryCondition")}}},[t._v("重置")])],1)],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"公司",prop:"business_name"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系人",prop:"business_contacts"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系手机",prop:"business_contacts_mobile"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"提交时间",prop:"created_at_txt"}}),t._v(" "),n("el-table-column",{attrs:{align:"center","class-name":"status-col",label:"状态",prop:"status_txt",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(e.row.status_txt))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return["published"!=e.row.status?n("el-button",{attrs:{size:"small",type:"success"},on:{click:function(n){t.goCheckDetail(e.row)}}},[n("svg-icon",{attrs:{"icon-class":"check2"}}),t._v("审批\n        ")],1):t._e()]}}])})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},sQkU:function(t,e,n){"use strict";function i(t){return Object(s.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})}function a(){return Object(s.a)({url:"/product/type_lists",method:"post",data:{}})}function o(t){return Object(s.a)({url:"/admin/review_info",method:"post",data:t})}function r(t){return Object(s.a)({url:"/admin/review_approve",method:"post",data:t})}e.d=i,e.b=a,e.c=o,e.a=r;var s=n("Vo7i")}});
//# sourceMappingURL=23.1f8a1641148e69340961.js.map