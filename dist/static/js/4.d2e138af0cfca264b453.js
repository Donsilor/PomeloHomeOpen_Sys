webpackJsonp([4,22,23],{"0xDb":function(e,t,n){"use strict";function i(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",i=void 0;"object"===(void 0===e?"undefined":o()(e))?i=e:(10===(""+e).length&&(e=1e3*parseInt(e)),i=new Date(e));var a={y:i.getFullYear(),m:i.getMonth()+1,d:i.getDate(),h:i.getHours(),i:i.getMinutes(),s:i.getSeconds(),a:i.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=a[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}t.a=i;var a=n("hRKE"),o=n.n(a);n("bzuE")},"3fGN":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("U5P4"),a=n("eRnf"),o=n("C7Lr"),r=o(i.a,a.a,!1,null,null,null);t.default=r.exports},Eg8A:function(e,t,n){"use strict";function i(e){n("wIom")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("fI2Y"),o=n("q+7J"),r=n("C7Lr"),l=i,s=r(a.a,o.a,!1,l,"data-v-4122ad79",null);t.default=s.exports},U5P4:function(e,t,n){"use strict";var i=n("aA9S"),a=n.n(i),o=n("sQkU"),r=n("bzuE"),l=n("0xDb");t.a={name:"productCheckpending",data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},queryCondition:{business_name:"",brand_name:"",type_id:"",model:"",created_date:"",created_start:"",created_end:"",technology_type:""},productTypeList:[],productTechnologyType:r.d}},activated:function(){this.getList(),this.getProductType()},methods:{getList:function(){var e=this;this.queryCondition.created_date[0]?(this.queryCondition.created_start=Object(l.a)(this.queryCondition.created_date[0],"{y}-{m}-{d} {h}:{i}:{s}"),this.queryCondition.created_end=Object(l.a)(this.queryCondition.created_date[1],"{y}-{m}-{d} {h}:{i}:{s}")):(this.queryCondition.created_start="",this.queryCondition.created_end=""),this.listLoading=!0;var t={type:3,status:0,limit:this.listQuery.limit,page:this.listQuery.page};a()(t,this.queryCondition),Object(o.f)(t).then(function(t){console.log("审核产品列表",t),e.list=t.data,e.total=t.total,e.listLoading=!1})},getProductType:function(){var e=this;Object(o.d)().then(function(t){console.log("产品品类",t),e.productTypeList=t.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},resetForm:function(e){this.$refs[e].resetFields(),this.handleCurrentChange(1)},goCheckDetail:function(e){e.approved_user="",this.$router.push({path:"/productCheck/productCheckDetail",query:e})}}}},bzuE:function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],o={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},r="星络科技"},eRnf:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("div",{staticClass:"filter-container"},[n("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryCondition}},[n("el-form-item",{attrs:{label:"公司名称",prop:"business_name"}},[n("el-input",{attrs:{placeholder:"公司名称"},model:{value:e.queryCondition.business_name,callback:function(t){e.$set(e.queryCondition,"business_name",t)},expression:"queryCondition.business_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"品牌",prop:"brand_name"}},[n("el-input",{attrs:{placeholder:"品牌"},model:{value:e.queryCondition.brand_name,callback:function(t){e.$set(e.queryCondition,"brand_name",t)},expression:"queryCondition.brand_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.queryCondition.type_id,callback:function(t){e.$set(e.queryCondition,"type_id",t)},expression:"queryCondition.type_id"}},e._l(e.productTypeList,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"型号",prop:"model"}},[n("el-input",{attrs:{placeholder:"型号"},model:{value:e.queryCondition.model,callback:function(t){e.$set(e.queryCondition,"model",t)},expression:"queryCondition.model"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"创建时间",prop:"created_date"}},[n("el-date-picker",{attrs:{type:"datetimerange",placeholder:"选择时间范围",align:"right"},model:{value:e.queryCondition.created_date,callback:function(t){e.$set(e.queryCondition,"created_date",t)},expression:"queryCondition.created_date"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"接入方式",prop:"technology_type"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.queryCondition.technology_type,callback:function(t){e.$set(e.queryCondition,"technology_type",t)},expression:"queryCondition.technology_type"}},e._l(e.productTechnologyType,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getList}},[e._v("查询")]),e._v(" "),n("el-button",{on:{click:function(t){e.resetForm("queryCondition")}}},[e._v("重置")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"公司",prop:"business_name"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"品牌",prop:"product_brand_name"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"品类",prop:"product_type_name",width:"95"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"型号",prop:"product_model"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"创建时间","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.approved_at_txt))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"接入方式",width:"95",prop:"product_technology_type"}}),e._v(" "),n("el-table-column",{attrs:{align:"center","class-name":"status-col",label:"状态",width:"110",prop:"status_txt"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(t.row.status_txt))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return["published"!=t.row.status?n("el-button",{attrs:{size:"small",type:"success"},on:{click:function(n){e.goCheckDetail(t.row)}}},[n("svg-icon",{attrs:{"icon-class":"check2"}}),e._v("审批\n        ")],1):e._e()]}}])})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},a=[],o={render:i,staticRenderFns:a};t.a=o},fI2Y:function(e,t,n){"use strict";var i=n("3fGN"),a=n("i33u");t.a={name:"productCheck",components:{productCheckPending:i.default,productChecked:a.default},data:function(){return{activeName:"checkPending",isCheckedRender:!1}},methods:{renderChecked:function(e,t){"checked"===e.name&&(this.isCheckedRender=!0)}}}},i33u:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("j7PS"),a=n("i7b9"),o=n("C7Lr"),r=o(i.a,a.a,!1,null,null,null);t.default=r.exports},i7b9:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container calendar-list-container"},[n("div",{staticClass:"filter-container"},[n("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryCondition}},[n("el-form-item",{attrs:{label:"公司名称",prop:"business_name"}},[n("el-input",{attrs:{placeholder:"公司名称"},model:{value:e.queryCondition.business_name,callback:function(t){e.$set(e.queryCondition,"business_name",t)},expression:"queryCondition.business_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"品牌",prop:"brand_name"}},[n("el-input",{attrs:{placeholder:"品牌"},model:{value:e.queryCondition.brand_name,callback:function(t){e.$set(e.queryCondition,"brand_name",t)},expression:"queryCondition.brand_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.queryCondition.type_id,callback:function(t){e.$set(e.queryCondition,"type_id",t)},expression:"queryCondition.type_id"}},e._l(e.productTypeList,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"型号",prop:"model"}},[n("el-input",{attrs:{placeholder:"型号"},model:{value:e.queryCondition.model,callback:function(t){e.$set(e.queryCondition,"model",t)},expression:"queryCondition.model"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"创建时间",prop:"created_date"}},[n("el-date-picker",{attrs:{type:"datetimerange",placeholder:"选择时间范围",align:"right"},model:{value:e.queryCondition.created_date,callback:function(t){e.$set(e.queryCondition,"created_date",t)},expression:"queryCondition.created_date"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"接入方式",prop:"technology_type"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.queryCondition.technology_type,callback:function(t){e.$set(e.queryCondition,"technology_type",t)},expression:"queryCondition.technology_type"}},e._l(e.productTechnologyType,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getList}},[e._v("查询")]),e._v(" "),n("el-button",{on:{click:function(t){e.resetForm("queryCondition")}}},[e._v("重置")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"公司",prop:"business_name"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"品牌",prop:"product_brand_name"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"品类",prop:"product_type_name",width:"95"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"型号",prop:"product_model"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"创建时间","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.approved_at_txt))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"接入方式",width:"95",prop:"product_technology_type"}}),e._v(" "),n("el-table-column",{attrs:{align:"center","class-name":"status-col",label:"状态",width:"110",prop:"status_txt"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(t.row.status_txt))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return["published"!=t.row.status?n("el-button",{attrs:{size:"small",type:"success"},on:{click:function(n){e.goCheckDetail(t.row)}}},[e._v("\n          查看详情\n        ")]):e._e()]}}])})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},a=[],o={render:i,staticRenderFns:a};t.a=o},j7PS:function(e,t,n){"use strict";var i=n("aA9S"),a=n.n(i),o=n("sQkU"),r=n("bzuE"),l=n("0xDb");t.a={name:"productCheckpending",data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},queryCondition:{business_name:"",brand_name:"",type_id:"",model:"",created_date:"",created_start:"",created_end:"",technology_type:""},productTypeList:[],productTechnologyType:r.d}},mounted:function(){this.getList(),this.getProductType()},activated:function(){this.getList(),this.getProductType()},methods:{getList:function(){var e=this;this.queryCondition.created_date[0]?(this.queryCondition.created_start=Object(l.a)(this.queryCondition.created_date[0],"{y}-{m}-{d} {h}:{i}:{s}"),this.queryCondition.created_end=Object(l.a)(this.queryCondition.created_date[1],"{y}-{m}-{d} {h}:{i}:{s}")):(this.queryCondition.created_start="",this.queryCondition.created_end=""),this.listLoading=!0;var t={type:3,status:3,limit:this.listQuery.limit,page:this.listQuery.page};a()(t,this.queryCondition),Object(o.f)(t).then(function(t){console.log("审核产品列表",t.data),e.list=t.data,e.total=t.total,e.listLoading=!1})},getProductType:function(){var e=this;Object(o.d)().then(function(t){e.productTypeList=t.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},resetForm:function(e){this.$refs[e].resetFields(),this.handleCurrentChange(1)},goCheckDetail:function(e){this.$router.push({path:"/productCheck/productCheckedDetail",query:e})}}}},"q+7J":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab-container"},[n("el-tabs",{staticStyle:{"margin-top":"15px"},on:{"tab-click":e.renderChecked},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"待审核",name:"checkPending"}}),e._v(" "),n("el-tab-pane",{attrs:{label:"已审核",name:"checked"}})],1),e._v(" "),n("product-check-pending",{directives:[{name:"show",rawName:"v-show",value:"checkPending"===e.activeName,expression:"activeName==='checkPending'"}]}),e._v(" "),e.isCheckedRender?n("product-checked",{directives:[{name:"show",rawName:"v-show",value:"checked"===e.activeName,expression:"activeName==='checked'"}]}):e._e()],1)},a=[],o={render:i,staticRenderFns:a};t.a=o},sQkU:function(e,t,n){"use strict";function i(e){return Object(d.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})}function a(){return Object(d.a)({url:"/admin/product/type_lists",method:"post",data:{}})}function o(e){return Object(d.a)({url:"/admin/review_info",method:"post",data:e})}function r(e){return Object(d.a)({url:"/admin/review_approve",method:"post",data:e})}function l(e){return Object(d.a)({url:"/admin/product_lists",method:"post",data:e})}function s(e){return Object(d.a)({url:"/admin/product_info",method:"post",data:e})}function c(e){return Object(d.a)({url:"/admin/product_unshelve",method:"post",data:e})}t.f=i,t.d=a,t.e=o,t.a=r,t.c=l,t.b=s,t.g=c;var d=n("Vo7i")},uqrw:function(e,t,n){t=e.exports=n("BkJT")(!0),t.push([e.i,".tab-container[data-v-4122ad79]{margin:30px}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/productCheck/index.vue"],names:[],mappings:"AACA,gCACE,WAAa,CACd",file:"index.vue",sourcesContent:["\n.tab-container[data-v-4122ad79]{\n  margin: 30px;\n}\n"],sourceRoot:""}])},wIom:function(e,t,n){var i=n("uqrw");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("8bSs")("b328f330",i,!0)}});
//# sourceMappingURL=4.d2e138af0cfca264b453.js.map