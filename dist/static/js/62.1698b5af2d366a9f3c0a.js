webpackJsonp([62],{"0W7Q":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container calendar-list-container"},[n("el-row",{staticStyle:{"padding-bottom":"30px"}},[n("el-select",{attrs:{clearable:"",placeholder:"全部厂商"},model:{value:t.business_id,callback:function(e){t.business_id=e},expression:"business_id"}},t._l(t.businessList,function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.business_id}})})),t._v(" "),n("el-select",{attrs:{clearable:"",placeholder:"全部品牌"},model:{value:t.brand_id,callback:function(e){t.brand_id=e},expression:"brand_id"}},t._l(t.brandsList,function(t,e){return n("el-option",{key:e,attrs:{label:t.brand_name,value:t.brand_id}})})),t._v(" "),n("el-select",{attrs:{clearable:"",placeholder:"全部品类"},model:{value:t.type_id,callback:function(e){t.type_id=e},expression:"type_id"}},t._l(t.typeList,function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.getList}},[t._v("查找")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"品类",prop:"type_name"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"品牌",prop:"brand_name"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"型号",prop:"model"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"厂商",prop:"business_name"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"版本号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.version_no_H5?"H5控制页版本"+e.row.version_no_H5:"")+t._s(" 固件版本"+e.row.version_no_firmware)+"\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"created_at"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(n){t.toDetai(e.row)}}},[t._v("\n                    查看详情\n                ")])]}}])})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{"current-page":t.listQuery.page,"page-sizes":[15,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"page",e)}}})],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},IZn0:function(t,e,n){"use strict";var i=n("sQkU"),a=n("Vo7i");n("TIfe");e.a={name:"onlineProducts",data:function(){return{list:null,total:null,listLoading:!1,businessList:[],brandsList:[],typeList:[],business_id:"",brand_id:"",type_id:"",listQuery:{page:1,limit:15}}},computed:{},created:function(){this.getBusinessList(),this.getTypeList(),this.getBrandList()},mounted:function(){this.refresh()},methods:{refresh:function(){this.getList()},getList:function(){var t=this;this.listLoading=!0;var e={limit:this.listQuery.limit,page:this.listQuery.page,search_type:1};""!=this.business_id&&(e.business_id=this.business_id),""!=this.brand_id&&(e.brand_id=this.brand_id),""!=this.type_id&&(e.type_id=this.type_id),Object(i.c)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getBusinessList:function(){var t=this;Object(a.a)({url:"/user/select",method:"get",data:{is_online:1}}).then(function(e){t.businessList=e})},getBrandList:function(){var t=this;Object(a.a)({url:"/brand/select",method:"post",data:{is_online:1}}).then(function(e){t.brandsList=e})},getTypeList:function(){var t=this;Object(a.a)({url:"/admin/product/type_lists",method:"post",data:{}}).then(function(e){t.typeList=e.list}).catch(function(e){t.$message.error(e.msg)})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},toDetai:function(t){var e={product_id:t.product_id};this.$router.push({path:"/productManagement/onlineProductDetail",query:e})}}}},Xybi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("IZn0"),a=n("0W7Q"),s=n("VU/8"),r=s(i.a,a.a,!1,null,null,null);e.default=r.exports},sQkU:function(t,e,n){"use strict";function i(t){return Object(c.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})}function a(){return Object(c.a)({url:"/admin/product/type_lists",method:"post",data:{}})}function s(t){return Object(c.a)({url:"/admin/review_info",method:"post",data:t})}function r(t){return Object(c.a)({url:"/admin/review_approve",method:"post",data:t})}function l(t){return Object(c.a)({url:"/admin/product_lists",method:"post",data:t})}function o(t){return Object(c.a)({url:"/admin/product_info",method:"post",data:t})}function u(t){return Object(c.a)({url:"/admin/product_unshelve",method:"post",data:t})}e.f=i,e.d=a,e.e=s,e.a=r,e.c=l,e.b=o,e.g=u;var c=n("Vo7i")}});
//# sourceMappingURL=62.1698b5af2d366a9f3c0a.js.map