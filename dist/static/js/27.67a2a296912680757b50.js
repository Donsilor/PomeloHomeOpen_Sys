webpackJsonp([27],{OfDK:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("woOf"),l=o.n(i),n=o("w79a"),a=o("bzuE"),r=o("TIfe"),s={data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},queryCondition:{technology_type:""},productTechnologyType:a.d,dialogVisible:!0,form:{},formLabelWidth:"120px",wifiModuleList:[],technology_type_key:"",fileList:[],uploadParams:{token:Object(r.b)()}}},created:function(){this.getList(),this.getWifiModuleList()},methods:{getList:function(){var e=this;this.listLoading=!0;var t={page:this.listQuery.page,limit:this.listQuery.limit};l()(t,this.queryCondition),Object(n.c)(t).then(function(t){e.list=t.data,e.total=t.total,e.listLoading=!1})},getWifiModuleList:function(){var e=this;Object(n.d)().then(function(t){e.wifiModuleList=t.list})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleClose:function(t){t()},uploadSDK:function(){this.$refs.upload.submit()},uploadSuccess:function(){},uploadError:function(){}}},c={render:function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("div",{staticClass:"app-container"},[i("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:o.queryCondition}},[i("el-form-item",{attrs:{label:"接入方式",prop:"technology_type"}},[i("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:o.queryCondition.technology_type,callback:function(t){o.$set(o.queryCondition,"technology_type",t)},expression:"queryCondition.technology_type"}},o._l(o.productTechnologyType,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),o._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:o.getList}},[o._v("查询")]),o._v(" "),i("el-button",{on:{click:function(t){o.dialogVisible=!0}}},[o._v("新建")])],1)],1),o._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:o.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:o.list}},[i("el-table-column",{attrs:{prop:"type_name",label:"品类",width:"180"}}),o._v(" "),i("el-table-column",{attrs:{prop:"technology_module_vendor",label:"模组/芯片厂家",width:"180"}}),o._v(" "),i("el-table-column",{attrs:{prop:"technology_module_model",label:"型号",width:"180"}}),o._v(" "),i("el-table-column",{attrs:{prop:"size",label:"SDK大小"}}),o._v(" "),i("el-table-column",{attrs:{prop:"updated_at_txt",label:"上传时间"}}),o._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:o._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"success"},on:{click:function(t){o.goCheckDetail(e.row)}}},[o._v("\n          修改\n        ")])]}}])})],1),o._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!o.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":o.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:o.total},on:{"size-change":o.handleSizeChange,"current-change":o.handleCurrentChange,"update:currentPage":function(t){o.$set(o.listQuery,"page",t)}}})],1),o._v(" "),i("el-dialog",{attrs:{title:"上传SDK文件",visible:o.dialogVisible,size:"small","before-close":o.handleClose},on:{"update:visible":function(t){o.dialogVisible=t}}},[i("el-form",{attrs:{model:o.form,"label-position":"right"}},[i("el-form-item",{attrs:{label:"模组/芯片厂家","label-width":o.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:o.technology_type_key,callback:function(t){o.technology_type_key=t},expression:"technology_type_key"}},o._l(o.wifiModuleList,function(t){return i("el-option-group",{key:t.vendor,attrs:{label:t.vendor}},o._l(t.modellist,function(t){return i("el-option",{key:t.module_id,attrs:{label:t.model,value:t.module_id}})}))}))],1),o._v(" "),i("el-form-item",{attrs:{label:"型号","label-width":o.formLabelWidth}},[i("el-input",{attrs:{placeholder:"型号"},model:{value:o.technology_type_key,callback:function(t){o.technology_type_key=t},expression:"technology_type_key"}})],1),o._v(" "),i("el-form-item",{attrs:{label:"SDK文件","label-width":o.formLabelWidth}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/sdk_upload",multiple:!1,data:o.uploadParams,"file-list":o.fileList,"auto-upload":!1,"on-error":o.uploadError,"on-success":o.uploadSuccess}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[o._v("选取文件")])],1)],1)],1),o._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){o.dialogVisible=!1}}},[o._v("取 消")]),o._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:o.uploadSDK}},[o._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var u=o("VU/8")(s,c,!1,function(t){o("mImD")},null,null);e.default=u.exports},ZboX:function(t,e,o){(t.exports=o("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"sdkUpload.vue",sourceRoot:""}])},bzuE:function(t,e,o){"use strict";o.d(e,"d",function(){return i}),o.d(e,"c",function(){return l}),o.d(e,"b",function(){return n}),o.d(e,"a",function(){return a});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],l=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],n={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},a="星络科技"},mImD:function(t,e,o){var i=o("ZboX");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("f7fcecf8",i,!0)},w79a:function(t,e,o){"use strict";e.c=function(t){return Object(i.a)({url:"/admin/sdk/list",method:"get",data:t})},e.d=function(t){return Object(i.a)({url:"/producttype/technologylists",method:"post",data:{}})},e.a=function(t){return Object(i.a)({url:"/producttype/technologylists",method:"post",data:t})},e.b=function(t){return Object(i.a)({url:"/admin/productdoc_lists?page="+t.page,method:"post",data:t})};var i=o("Vo7i")}});