webpackJsonp([45],{"0xDb":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),e.b=r;var e=n("hRKE"),a=n.n(e),i=(n("bzuE"),function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss";if(!t)return"";"string"==typeof t&&(t=t.replace(/-/g,"/"));var n,i={"M+":(t=new Date(t)).getMonth()+1,"d+":t.getDate(),"h+":t.getHours()%12==0?12:t.getHours()%12,"H+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(e)&&(e=e.replace(RegExp.$1,(1<RegExp.$1.length?2<RegExp.$1.length?"/u661f/u671f":"/u5468":"")+{0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"}[t.getDay()+""])),i)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?i[n]:("00"+i[n]).substr((""+i[n]).length)));return e});function r(t,e){if(0===arguments.length)return null;var n=e||"{y}-{m}-{d} {h}:{i}:{s}",e=void 0,i={y:(e="object"===(void 0===t?"undefined":a()(t))?t:(10===(""+t).length&&(t=1e3*parseInt(t)),new Date(t))).getFullYear(),m:e.getMonth()+1,d:e.getDate(),h:e.getHours(),i:e.getMinutes(),s:e.getSeconds(),a:e.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var n=i[e];return"a"===e?["一","二","三","四","五","六","日"][n-1]:(n=0<t.length&&n<10?"0"+n:n)||0})}},NIVW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("aA9S"),a=n.n(i),r=n("sQkU"),o=n("bzuE"),s=n("0xDb"),u={name:"goLiveCheckedpending",data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:15},queryCondition:{business_name:"",brand_name:"",type_id:"",model:"",created_date:"",created_start:"",created_end:"",technology_type:""},productTypeList:[],productTechnologyType:o.d}},mounted:function(){var t=this;this.$store.dispatch("GetAuditMenus"),this.$nextTick(function(){t.getList()}),this.getProductType()},activated:function(){this.getList(),this.getProductType()},methods:{getList:function(){var e=this;this.queryCondition.created_date?(this.queryCondition.created_start=Object(s.b)(this.queryCondition.created_date[0],"{y}-{m}-{d} {h}:{i}:{s}"),this.queryCondition.created_end=Object(s.b)(this.queryCondition.created_date[1],"{y}-{m}-{d} {h}:{i}:{s}")):(this.queryCondition.created_start="",this.queryCondition.created_end=""),this.listLoading=!0;var t={type:3,status:3,limit:this.listQuery.limit,page:this.listQuery.page};a()(t,this.queryCondition),Object(r.j)(t).then(function(t){e.list=t.data,e.total=t.total,e.listLoading=!1})},getProductType:function(){var e=this;Object(r.h)().then(function(t){e.productTypeList=t.list})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},resetForm:function(t){this.$refs[t].resetFields(),this.this.handleCurrentChange(1)},goCheckDetail:function(t){t={record_id:t.record_id,type:"detail",business_name:t.business_name,status:t.status};this.$router.push({path:"/auditManagement/productToAudit",query:t})}}},i={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:n.queryCondition}},[i("el-form-item",{attrs:{label:"公司名称",prop:"business_name"}},[i("el-input",{attrs:{placeholder:"公司名称"},model:{value:n.queryCondition.business_name,callback:function(t){n.$set(n.queryCondition,"business_name",t)},expression:"queryCondition.business_name"}})],1),n._v(" "),i("el-form-item",{attrs:{label:"品牌",prop:"business_name"}},[i("el-input",{attrs:{placeholder:"品牌"},model:{value:n.queryCondition.brand_name,callback:function(t){n.$set(n.queryCondition,"brand_name",t)},expression:"queryCondition.brand_name"}})],1),n._v(" "),i("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:n.queryCondition.type_id,callback:function(t){n.$set(n.queryCondition,"type_id",t)},expression:"queryCondition.type_id"}},n._l(n.productTypeList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),n._v(" "),i("el-form-item",{attrs:{label:"创建时间",prop:"created_date"}},[i("el-date-picker",{attrs:{type:"datetimerange","start-placeholder":"选择开始日期","end-placeholder":"选择结束日期",align:"right"},model:{value:n.queryCondition.created_date,callback:function(t){n.$set(n.queryCondition,"created_date",t)},expression:"queryCondition.created_date"}})],1),n._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){n.handleCurrentChange(1)}}},[n._v("查询")]),n._v(" "),i("el-button",{on:{click:function(t){n.resetForm("queryCondition")}}},[n._v("重置")])],1)],1)],1),n._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:n.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"公司名称",prop:"business_name","min-width":"110px"},scopedSlots:n._u([{key:"default",fn:function(t){return[i("span",[n._v(n._s(t.row.business_name))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"品牌",prop:"product_brand_name","min-width":"60px"},scopedSlots:n._u([{key:"default",fn:function(t){return[i("span",[n._v(n._s(t.row.product_brand_name))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"品类",prop:"product_type_name",width:"80px"},scopedSlots:n._u([{key:"default",fn:function(t){return[i("span",[n._v(n._s(t.row.product_type_name))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"型号",prop:"product_model","min-width":"110px"},scopedSlots:n._u([{key:"default",fn:function(t){return[i("span",[n._v(n._s(t.row.product_model))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"审核时间",prop:"approved_at_txt",width:"180px"},scopedSlots:n._u([{key:"default",fn:function(t){return[i("span",[n._v(n._s(t.row.approved_at_txt))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"技术方案",prop:"product_technology_type",width:"95"},scopedSlots:n._u([{key:"default",fn:function(t){return[i("span",[n._v(n._s(t.row.product_technology_type))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center","class-name":"status-col",label:"状态",width:"110"},scopedSlots:n._u([{key:"default",fn:function(t){return[i("el-tag",{attrs:{type:n._f("statusFilter")(t.row.status)}},[n._v(n._s(t.row.status_txt))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:n._u([{key:"default",fn:function(e){return["published"!=e.row.status?i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){n.goCheckDetail(e.row)}}},[n._v("\n                    查看详情\n                ")]):n._e()]}}])})],1),n._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!n.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":n.listQuery.page,"page-sizes":[15,20,30,50],"page-size":n.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:n.total},on:{"size-change":n.handleSizeChange,"current-change":n.handleCurrentChange,"update:currentPage":function(t){n.$set(n.listQuery,"page",t)}}})],1)],1)},staticRenderFns:[]},i=n("C7Lr")(u,i,!1,null,null,null);e.default=i.exports},bzuE:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],r={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},o="星络科技"},sQkU:function(t,e,n){"use strict";e.j=function(t){return Object(i.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})},e.h=function(){return Object(i.a)({url:"/admin/product/type_lists",method:"post",data:{}})},e.i=function(t){return Object(i.a)({url:"/admin/review_info",method:"post",data:t})},e.c=function(t){return Object(i.a)({url:"/admin/review_approve",method:"post",data:t})},e.f=function(t){return Object(i.a)({url:"/admin/product_lists",method:"post",data:t})},e.e=function(t){return Object(i.a)({url:"/admin/product_info",method:"post",data:t})},e.k=function(t){return Object(i.a)({url:"/admin/product_unshelve",method:"post",data:t})},e.g=function(t){return Object(i.a)({url:"/api/ext/devcard/product",method:"get",data:t})},e.b=function(t){return Object(i.a)({url:"/api/ext/devcard/product",method:"post",data:t})},e.d=function(){return Object(i.a)({url:"/api/ext/gtags/global",method:"get"})},e.a=function(t){return Object(i.a)({url:"/api/ext/gtags/global",method:"post",data:t})};var i=n("Vo7i")}});