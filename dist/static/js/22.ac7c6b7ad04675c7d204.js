webpackJsonp([22,42,43],{"0xDb":function(e,t,n){"use strict";n.d(t,"a",function(){return a}),t.b=r;var t=n("hRKE"),i=n.n(t),a=(n("bzuE"),function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss";if(!e)return"";"string"==typeof e&&(e=e.replace(/-/g,"/"));var n,a={"M+":(e=new Date(e)).getMonth()+1,"d+":e.getDate(),"h+":e.getHours()%12==0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(1<RegExp.$1.length?2<RegExp.$1.length?"/u661f/u671f":"/u5468":"")+{0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"}[e.getDay()+""])),a)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return t});function r(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",t=void 0,a={y:(t="object"===(void 0===e?"undefined":i()(e))?e:(10===(""+e).length&&(e=1e3*parseInt(e)),new Date(e))).getFullYear(),m:t.getMonth()+1,d:t.getDate(),h:t.getHours(),i:t.getMinutes(),s:t.getSeconds(),a:t.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=a[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(n=0<e.length&&n<10?"0"+n:n)||0})}},"3fGN":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("aA9S"),i=n.n(a),r=n("sQkU"),o=n("bzuE"),s=n("0xDb"),l={name:"productCheckpending",data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},queryCondition:{business_name:"",brand_name:"",type_id:"",model:"",created_date:"",created_start:"",created_end:"",technology_type:""},productTypeList:[],productTechnologyType:o.d}},activated:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.queryCondition.created_date[0]?(this.queryCondition.created_start=Object(s.b)(this.queryCondition.created_date[0],"{y}-{m}-{d} {h}:{i}:{s}"),this.queryCondition.created_end=Object(s.b)(this.queryCondition.created_date[1],"{y}-{m}-{d} {h}:{i}:{s}")):(this.queryCondition.created_start="",this.queryCondition.created_end=""),this.listLoading=!0;var e={type:3,status:0,limit:this.listQuery.limit,page:this.listQuery.page};i()(e,this.queryCondition),Object(r.j)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(r.h)().then(function(e){t.productTypeList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},resetForm:function(e){this.$refs[e].resetFields(),this.handleCurrentChange(1)},goCheckDetail:function(e){e.approved_user="",this.$router.push({path:"/productCheck/productCheckDetail",query:e})}}},a={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:n.queryCondition}},[a("el-form-item",{attrs:{label:"公司名称",prop:"business_name"}},[a("el-input",{attrs:{placeholder:"公司名称"},model:{value:n.queryCondition.business_name,callback:function(e){n.$set(n.queryCondition,"business_name",e)},expression:"queryCondition.business_name"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"品牌",prop:"brand_name"}},[a("el-input",{attrs:{placeholder:"品牌"},model:{value:n.queryCondition.brand_name,callback:function(e){n.$set(n.queryCondition,"brand_name",e)},expression:"queryCondition.brand_name"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:n.queryCondition.type_id,callback:function(e){n.$set(n.queryCondition,"type_id",e)},expression:"queryCondition.type_id"}},n._l(n.productTypeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),n._v(" "),a("el-form-item",{attrs:{label:"型号",prop:"model"}},[a("el-input",{attrs:{placeholder:"型号"},model:{value:n.queryCondition.model,callback:function(e){n.$set(n.queryCondition,"model",e)},expression:"queryCondition.model"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"创建时间",prop:"created_date"}},[a("el-date-picker",{attrs:{type:"datetimerange",placeholder:"选择时间范围",align:"right"},model:{value:n.queryCondition.created_date,callback:function(e){n.$set(n.queryCondition,"created_date",e)},expression:"queryCondition.created_date"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"接入方式",prop:"technology_type"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:n.queryCondition.technology_type,callback:function(e){n.$set(n.queryCondition,"technology_type",e)},expression:"queryCondition.technology_type"}},n._l(n.productTechnologyType,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),n._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:n.getList}},[n._v("查询")]),n._v(" "),a("el-button",{on:{click:function(e){return n.resetForm("queryCondition")}}},[n._v("重置")])],1)],1)],1),n._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:n.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"公司",prop:"business_name"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"品牌",prop:"product_brand_name"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"品类",prop:"product_type_name",width:"95"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"型号",prop:"product_model"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"创建时间","min-width":"150"},scopedSlots:n._u([{key:"default",fn:function(e){return[a("span",[n._v(n._s(e.row.approved_at_txt))])]}}])}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"接入方式",width:"95",prop:"product_technology_type"}}),n._v(" "),a("el-table-column",{attrs:{align:"center","class-name":"status-col",label:"状态",width:"110",prop:"status_txt"},scopedSlots:n._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:n._f("statusFilter")(e.row.status)}},[n._v(n._s(e.row.status_txt))])]}}])}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:n._u([{key:"default",fn:function(t){return["published"!=t.row.status?a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(e){return n.goCheckDetail(t.row)}}},[a("svg-icon",{attrs:{"icon-class":"check2"}}),n._v("审批\n        ")],1):n._e()]}}])})],1),n._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!n.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":n.listQuery.page,"page-sizes":[10,20,30,50],"page-size":n.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:n.total},on:{"size-change":n.handleSizeChange,"current-change":n.handleCurrentChange,"update:currentPage":function(e){return n.$set(n.listQuery,"page",e)},"update:current-page":function(e){return n.$set(n.listQuery,"page",e)}}})],1)],1)},staticRenderFns:[]},a=n("C7Lr")(l,a,!1,null,null,null);t.default=a.exports},Eg8A:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("3fGN"),i=n("i33u"),a={name:"productCheck",components:{productCheckPending:a.default,productChecked:i.default},data:function(){return{activeName:"checkPending",isCheckedRender:!1}},methods:{renderChecked:function(e,t){"checked"===e.name&&(this.isCheckedRender=!0)}}},i={render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"tab-container"},[e("el-tabs",{staticStyle:{"margin-top":"15px"},on:{"tab-click":t.renderChecked},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"待审核",name:"checkPending"}}),t._v(" "),e("el-tab-pane",{attrs:{label:"已审核",name:"checked"}})],1),t._v(" "),e("product-check-pending",{directives:[{name:"show",rawName:"v-show",value:"checkPending"===t.activeName,expression:"activeName==='checkPending'"}]}),t._v(" "),t.isCheckedRender?e("product-checked",{directives:[{name:"show",rawName:"v-show",value:"checked"===t.activeName,expression:"activeName==='checked'"}]}):t._e()],1)},staticRenderFns:[]};i=n("C7Lr")(a,i,!1,function(e){n("MX07")},"data-v-4122ad79",null),t.default=i.exports},HIeg:function(e,t,n){"use strict";var a=n("rVsN"),i=n.n(a),a=n("3cXf"),a=(n.n(a),n("aA9S")),r=n.n(a),a=n("BMa3"),a=n.n(a),o=n("/QDj"),s=(n.n(o),n("IcnI")),l=n("1h0+"),d=(n.n(l),n("TIfe")),c=n("VSB1"),a=a.a.create({timeout:15e3});a.interceptors.request.use(function(e){var t={id:Object(l.v4)(),timestamp:Date.parse(new Date),version:"1.0"};return e.data instanceof FormData||-1!==e.url.indexOf("/icon")||-1!==e.url.indexOf("/product_agreement/versionadd")||-1!==e.url.indexOf("/copywritingManage/")||(e.data=r()(t,e.data)),e.data||(e.data={}),s.a.getters.token&&(e.data.token=Object(d.b)()),"get"==e.method&&(e.url=e.url+"?"+c.a.serialize(e.data)),e},function(e){i.a.reject(e)}),a.interceptors.response.use(function(e){var t=e.data;return 200!==t.code?(Object(o.Message)({message:t.msg||t.message,type:"error",duration:2e3}),401===t.code&&s.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),i.a.reject(t)):-1!==e.config.url.indexOf("/v1")?i.a.resolve(e):e.data.result?i.a.resolve(e.data.result):i.a.resolve(e.data)},function(e){e=e.response.data;return Object(o.Message)({message:e.msg||e.message,type:"error",duration:5e3}),401===e.code&&s.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),i.a.reject(e)}),t.a=a},MX07:function(e,t,n){var a=n("uqrw");(a="string"==typeof a?[[e.i,a,""]]:a).locals&&(e.exports=a.locals);n("8bSs")("b328f330",a,!0)},bzuE:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var a=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],i=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],r={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},o="星络科技"},i33u:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("aA9S"),i=n.n(a),r=n("sQkU"),o=n("bzuE"),s=n("0xDb"),l={name:"ProductCheckpending",data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},queryCondition:{business_name:"",brand_name:"",type_id:"",model:"",created_date:"",created_start:"",created_end:"",technology_type:""},productTypeList:[],productTechnologyType:o.d}},mounted:function(){this.getList(),this.getProductType()},activated:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.queryCondition.created_date[0]?(this.queryCondition.created_start=Object(s.b)(this.queryCondition.created_date[0],"{y}-{m}-{d} {h}:{i}:{s}"),this.queryCondition.created_end=Object(s.b)(this.queryCondition.created_date[1],"{y}-{m}-{d} {h}:{i}:{s}")):(this.queryCondition.created_start="",this.queryCondition.created_end=""),this.listLoading=!0;var e={type:3,status:3,limit:this.listQuery.limit,page:this.listQuery.page};i()(e,this.queryCondition),Object(r.j)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(r.h)().then(function(e){t.productTypeList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},resetForm:function(e){this.$refs[e].resetFields(),this.handleCurrentChange(1)},goCheckDetail:function(e){this.$router.push({path:"/productCheck/productCheckedDetail",query:e})}}},a={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:n.queryCondition}},[a("el-form-item",{attrs:{label:"公司名称",prop:"business_name"}},[a("el-input",{attrs:{placeholder:"公司名称"},model:{value:n.queryCondition.business_name,callback:function(e){n.$set(n.queryCondition,"business_name",e)},expression:"queryCondition.business_name"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"品牌",prop:"brand_name"}},[a("el-input",{attrs:{placeholder:"品牌"},model:{value:n.queryCondition.brand_name,callback:function(e){n.$set(n.queryCondition,"brand_name",e)},expression:"queryCondition.brand_name"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:n.queryCondition.type_id,callback:function(e){n.$set(n.queryCondition,"type_id",e)},expression:"queryCondition.type_id"}},n._l(n.productTypeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),n._v(" "),a("el-form-item",{attrs:{label:"型号",prop:"model"}},[a("el-input",{attrs:{placeholder:"型号"},model:{value:n.queryCondition.model,callback:function(e){n.$set(n.queryCondition,"model",e)},expression:"queryCondition.model"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"创建时间",prop:"created_date"}},[a("el-date-picker",{attrs:{type:"datetimerange",placeholder:"选择时间范围",align:"right"},model:{value:n.queryCondition.created_date,callback:function(e){n.$set(n.queryCondition,"created_date",e)},expression:"queryCondition.created_date"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"接入方式",prop:"technology_type"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:n.queryCondition.technology_type,callback:function(e){n.$set(n.queryCondition,"technology_type",e)},expression:"queryCondition.technology_type"}},n._l(n.productTechnologyType,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),n._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:n.getList}},[n._v("查询")]),n._v(" "),a("el-button",{on:{click:function(e){return n.resetForm("queryCondition")}}},[n._v("重置")])],1)],1)],1),n._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:n.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"公司",prop:"business_name"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"品牌",prop:"product_brand_name"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"品类",prop:"product_type_name",width:"95"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"型号",prop:"product_model"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"创建时间","min-width":"150"},scopedSlots:n._u([{key:"default",fn:function(e){return[a("span",[n._v(n._s(e.row.approved_at_txt))])]}}])}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"接入方式",width:"95",prop:"product_technology_type"}}),n._v(" "),a("el-table-column",{attrs:{align:"center","class-name":"status-col",label:"状态",width:"110",prop:"status_txt"},scopedSlots:n._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:n._f("statusFilter")(e.row.status)}},[n._v(n._s(e.row.status_txt))])]}}])}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:n._u([{key:"default",fn:function(t){return["published"!=t.row.status?a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(e){return n.goCheckDetail(t.row)}}},[n._v("\n          查看详情\n        ")]):n._e()]}}])})],1),n._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!n.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":n.listQuery.page,"page-sizes":[10,20,30,50],"page-size":n.listQuery.limit,total:n.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(e){return n.$set(n.listQuery,"page",e)},"update:current-page":function(e){return n.$set(n.listQuery,"page",e)},"size-change":n.handleSizeChange,"current-change":n.handleCurrentChange}})],1)],1)},staticRenderFns:[]},a=n("C7Lr")(l,a,!1,null,null,null);t.default=a.exports},sQkU:function(e,t,n){"use strict";t.j=function(e){return Object(a.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})},t.h=function(){return Object(a.a)({url:"/admin/product/type_lists",method:"post",data:{}})},t.i=function(e){return Object(a.a)({url:"/admin/review_info",method:"post",data:e})},t.c=function(e){return Object(a.a)({url:"/admin/review_approve",method:"post",data:e})},t.f=function(e){return Object(a.a)({url:"/admin/product_lists",method:"post",data:e})},t.e=function(e){return Object(a.a)({url:"/admin/product_info",method:"post",data:e})},t.k=function(e){return Object(a.a)({url:"/admin/product_unshelve",method:"post",data:e})},t.g=function(e){return Object(i.a)({url:"/api/ext/devcard/product",method:"get",data:e})},t.b=function(e){return Object(i.a)({url:"/api/ext/devcard/product",method:"post",data:e})},t.d=function(){return Object(i.a)({url:"/api/ext/gtags/global",method:"get"})},t.a=function(e){return Object(i.a)({url:"/api/ext/gtags/global",method:"post",data:e})};var a=n("Vo7i"),i=n("HIeg")},uqrw:function(e,t,n){(e.exports=n("BkJT")(!0)).push([e.i,".tab-container[data-v-4122ad79]{margin:30px}","",{version:3,sources:["E:/workespace/PomeloHomeOpen_Sys/src/views/productCheck/index.vue"],names:[],mappings:"AACA,gCACE,WAAa,CACd",file:"index.vue",sourcesContent:["\n.tab-container[data-v-4122ad79]{\n  margin: 30px;\n}\n"],sourceRoot:""}])}});