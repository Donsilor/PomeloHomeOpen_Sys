webpackJsonp([101],{dLzS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Vo7i"),i={name:"enterpriseProducts",data:function(){return{list:null,total:null,business_name:"",listLoading:!1,business_id:this.$route.query.business_id,listQuery:{page:1,limit:15,business_id:this.$route.query.business_id},activeName:"enterpriseProducts",navs:[{name:"厂商信息",url:"/enterpriseManagement/enterpriseInfo",type:"enterpriseInfo"},{name:"产品列表",url:"/enterpriseManagement/enterpriseProducts",type:"enterpriseProducts"}]}},computed:{},created:function(){},mounted:function(){this.refresh()},methods:{refresh:function(){this.getList()},getList:function(){var t=this;this.listLoading=!0,Object(a.a)({url:"/user/productList",method:"post",data:this.listQuery}).then(function(e){t.list=e.data,t.total=e.total,t.business_name=e.business_name,t.listLoading=!1})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},toDetai:function(e){var t={product_id:e.product_id};this.$router.push({path:"/productManagement/onlineProductDetail",query:t})}}},s={render:function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("el-row",{staticStyle:{"padding-left":"160px","padding-bottom":"30px"}},[a("el-menu",{staticClass:"sec-menu",staticStyle:{width:"160px"},attrs:{mode:"vertical","default-active":n.activeName,"background-color":"#f2f2f2","text-color":"#666","active-text-color":"#409EFF"}},[n._l(n.navs,function(e){return[a("router-link",{attrs:{to:{path:e.url,query:{business_id:n.business_id}}}},[a("el-menu-item",{attrs:{index:e.type}},[n._v("\n                    "+n._s(e.name)+"\n                    "),a("span",{staticClass:"num"},[n._v(n._s(e.num))])])],1)]})],2),n._v(" "),a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",[a("router-link",{attrs:{to:"/enterpriseManagement/list"}},[a("el-button",{attrs:{type:"primary",size:"medium"}},[n._v("返 回")])],1)],1),n._v(" "),a("el-row",[a("h3",[n._v(n._s(n.business_name))]),n._v(" "),a("p",{staticStyle:{color:"#999999"}},[n._v("已上线"+n._s(n.total)+"个产品")])]),n._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:n.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"品类",prop:"product_type_name"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"品牌",prop:"brand_name"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"型号",prop:"model"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"厂商",prop:"business_name"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"版本号",prop:"version_no"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"created_at"}}),n._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:n._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){n.toDetai(t.row)}}},[n._v("\n                        查看详情\n                    ")])]}}])})],1),n._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!n.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":n.listQuery.page,"page-sizes":[15,20,30,50],"page-size":n.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:n.total},on:{"size-change":n.handleSizeChange,"current-change":n.handleCurrentChange,"update:currentPage":function(e){n.$set(n.listQuery,"page",e)}}})],1)],1)],1)},staticRenderFns:[]},r=n("VU/8")(i,s,!1,null,null,null);t.default=r.exports}});