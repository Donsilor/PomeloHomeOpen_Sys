webpackJsonp([58],{"0xDb":function(e,t,n){"use strict";n.d(t,"a",function(){return a}),t.b=o;var i=n("pFYg"),r=n.n(i),a=(n("bzuE"),function(e,t){var n=1<arguments.length&&void 0!==t?t:"yyyy-MM-dd HH:mm:ss";if(!e)return"";"string"==typeof e&&(e=e.replace(/-/g,"/"));var i={"M+":(e=new Date(e)).getMonth()+1,"d+":e.getDate(),"h+":e.getHours()%12==0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var a in/(y+)/.test(n)&&(n=n.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(n)&&(n=n.replace(RegExp.$1,(1<RegExp.$1.length?2<RegExp.$1.length?"/u661f/u671f":"/u5468":"")+{0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"}[e.getDay()+""])),i)new RegExp("("+a+")").test(n)&&(n=n.replace(RegExp.$1,1===RegExp.$1.length?i[a]:("00"+i[a]).substr((""+i[a]).length)));return n});function o(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",i=void 0,a={y:(i="object"===(void 0===e?"undefined":r()(e))?e:(10===(""+e).length&&(e=1e3*parseInt(e)),new Date(e))).getFullYear(),m:i.getMonth()+1,d:i.getDate(),h:i.getHours(),i:i.getMinutes(),s:i.getSeconds(),a:i.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=a[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(0<e.length&&n<10&&(n="0"+n),n||0)})}},XWIl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("woOf"),a=n.n(i),r=n("sQkU"),o=n("bzuE"),s=n("0xDb"),u={name:"goLiveCheckpending",data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:15},queryCondition:{business_name:"",brand_name:"",type_id:"",model:"",created_date:"",created_start:"",created_end:"",technology_type:""},productTypeList:[],productTechnologyType:o.d}},mounted:function(){var e=this;this.$store.dispatch("GetAuditMenus"),this.$nextTick(function(){e.getList()}),this.getProductType()},activated:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.queryCondition.created_date?(this.queryCondition.created_start=Object(s.b)(this.queryCondition.created_date[0],"{y}-{m}-{d} {h}:{i}:{s}"),this.queryCondition.created_end=Object(s.b)(this.queryCondition.created_date[1],"{y}-{m}-{d} {h}:{i}:{s}")):(this.queryCondition.created_start="",this.queryCondition.created_end=""),this.listLoading=!0;var e={type:5,status:0,limit:this.listQuery.limit,page:this.listQuery.page};a()(e,this.queryCondition),Object(r.j)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(r.h)().then(function(e){t.productTypeList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},resetForm:function(e){this.$refs[e].resetFields(),this.handleCurrentChange(1)},goCheckDetail:function(e){var t={record_id:e.record_id,type:"audit",business_name:e.business_name,status:e.status};this.$router.push({path:"/auditManagement/goLiveToAudit",query:t})}}},d={render:function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:n.queryCondition}},[i("el-form-item",{attrs:{label:"公司名称",prop:"business_name"}},[i("el-input",{attrs:{placeholder:"公司名称"},model:{value:n.queryCondition.business_name,callback:function(e){n.$set(n.queryCondition,"business_name",e)},expression:"queryCondition.business_name"}})],1),n._v(" "),i("el-form-item",{attrs:{label:"品牌",prop:"business_name"}},[i("el-input",{attrs:{placeholder:"品牌"},model:{value:n.queryCondition.brand_name,callback:function(e){n.$set(n.queryCondition,"brand_name",e)},expression:"queryCondition.brand_name"}})],1),n._v(" "),i("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:n.queryCondition.type_id,callback:function(e){n.$set(n.queryCondition,"type_id",e)},expression:"queryCondition.type_id"}},n._l(n.productTypeList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),n._v(" "),i("el-form-item",{attrs:{label:"创建时间",prop:"created_date"}},[i("el-date-picker",{attrs:{type:"datetimerange","start-placeholder":"选择开始日期","end-placeholder":"选择结束日期",align:"right"},model:{value:n.queryCondition.created_date,callback:function(e){n.$set(n.queryCondition,"created_date",e)},expression:"queryCondition.created_date"}})],1),n._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return n.handleCurrentChange(1)}}},[n._v("查询")]),n._v(" "),i("el-button",{on:{click:function(e){return n.resetForm("queryCondition")}}},[n._v("重置")])],1)],1)],1),n._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:n.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"公司名称",prop:"business_name","min-width":"110px"},scopedSlots:n._u([{key:"default",fn:function(e){return[i("span",[n._v(n._s(e.row.business_name))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"品牌",prop:"product_brand_name","min-width":"60px"},scopedSlots:n._u([{key:"default",fn:function(e){return[i("span",[n._v(n._s(e.row.product_brand_name))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"品类",prop:"product_type_name",width:"80px"},scopedSlots:n._u([{key:"default",fn:function(e){return[i("span",[n._v(n._s(e.row.product_type_name))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"型号",prop:"product_model","min-width":"110px"},scopedSlots:n._u([{key:"default",fn:function(e){return[i("span",[n._v(n._s(e.row.product_model))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"created_at_txt",width:"180px"},scopedSlots:n._u([{key:"default",fn:function(e){return[i("span",[n._v(n._s(e.row.approved_at_txt))])]}}])}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"版本号",prop:"version_no",width:"95"}}),n._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:n._u([{key:"default",fn:function(t){return["published"!=t.row.status&&t.row.can_approve?i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return n.goCheckDetail(t.row)}}},[n._v("\n                    进入审核\n                ")]):n._e()]}}])})],1),n._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!n.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":n.listQuery.page,"page-sizes":[15,20,30,50],"page-size":n.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:n.total},on:{"size-change":n.handleSizeChange,"current-change":n.handleCurrentChange,"update:currentPage":function(e){return n.$set(n.listQuery,"page",e)},"update:current-page":function(e){return n.$set(n.listQuery,"page",e)}}})],1)],1)},staticRenderFns:[]},l=n("VU/8")(u,d,!1,null,null,null);t.default=l.exports},bzuE:function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],r={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},o="星络科技"},sQkU:function(e,t,n){"use strict";t.j=function(e){return Object(i.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})},t.h=function(){return Object(i.a)({url:"/admin/product/type_lists",method:"post",data:{}})},t.i=function(e){return Object(i.a)({url:"/admin/review_info",method:"post",data:e})},t.c=function(e){return Object(i.a)({url:"/admin/review_approve",method:"post",data:e})},t.f=function(e){return Object(i.a)({url:"/admin/product_lists",method:"post",data:e})},t.e=function(e){return Object(i.a)({url:"/admin/product_info",method:"post",data:e})},t.k=function(e){return Object(i.a)({url:"/admin/product_unshelve",method:"post",data:e})},t.g=function(e){return Object(i.a)({url:"/api/ext/devcard/product",method:"get",data:e})},t.b=function(e){return Object(i.a)({url:"/api/ext/devcard/product",method:"post",data:e})},t.d=function(){return Object(i.a)({url:"/api/ext/gtags/global",method:"get"})},t.a=function(e){return Object(i.a)({url:"/api/ext/gtags/global",method:"post",data:e})};var i=n("Vo7i")}});