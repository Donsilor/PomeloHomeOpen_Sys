webpackJsonp([31],{HIeg:function(e,t,o){"use strict";var i=o("rVsN"),a=o.n(i),i=o("3cXf"),i=(o.n(i),o("aA9S")),n=o.n(i),i=o("BMa3"),i=o.n(i),r=o("/QDj"),l=(o.n(r),o("IcnI")),s=o("1h0+"),d=(o.n(s),o("TIfe")),u=o("VSB1"),i=i.a.create({timeout:15e3});i.interceptors.request.use(function(e){var t={id:Object(s.v4)(),timestamp:Date.parse(new Date),version:"1.0"};return e.data instanceof FormData||-1!==e.url.indexOf("/icon")||-1!==e.url.indexOf("/product_agreement/versionadd")||-1!==e.url.indexOf("/copywritingManage/")||(e.data=n()(t,e.data)),e.data||(e.data={}),l.a.getters.token&&(e.data.token=Object(d.b)()),"get"==e.method&&(e.url=e.url+"?"+u.a.serialize(e.data)),e},function(e){a.a.reject(e)}),i.interceptors.response.use(function(e){var t=e.data;return 200!==t.code?(Object(r.Message)({message:t.msg||t.message,type:"error",duration:2e3}),401===t.code&&l.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),a.a.reject(t)):-1!==e.config.url.indexOf("/v1")?a.a.resolve(e):e.data.result?a.a.resolve(e.data.result):a.a.resolve(e.data)},function(e){e=e.response.data;return Object(r.Message)({message:e.msg||e.message,type:"error",duration:5e3}),401===e.code&&l.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),a.a.reject(e)}),t.a=i},VbgX:function(e,t,o){var i=o("Y5cD");(i="string"==typeof i?[[e.i,i,""]]:i).locals&&(e.exports=i.locals);o("8bSs")("79152f25",i,!0)},Y5cD:function(e,t,o){(e.exports=o("BkJT")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"wifiSdkUpload.vue",sourceRoot:""}])},bzuE:function(e,t,o){"use strict";o.d(t,"d",function(){return i}),o.d(t,"c",function(){return a}),o.d(t,"b",function(){return n}),o.d(t,"a",function(){return r});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],n={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},r="星络科技"},ryJJ:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("aA9S"),a=o.n(i),n=o("w79a"),r=o("sQkU"),l=o("bzuE"),s=o("TIfe"),d={data:function(){var i=this;return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:l.d,queryCondition:{type_id:""},dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:function(e,t,o){0===i.$refs.upload.uploadFiles.length?o(new Error("请选择上传文件！")):o()}}]},formLabelWidth:"120px",showTypeKey:!1,wifiModuleList:[],productTypeList:[],fileList:[],showUploadMsg:!1,uploadParams:{technology_type:1,token:Object(s.b)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.listLoading=!0;var e={technology_type:1,page:this.listQuery.page,limit:this.listQuery.limit};a()(e,this.queryCondition),Object(n.c)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(r.h)().then(function(e){t.productTypeList=e.list})},getWifiModuleList:function(){var t=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var e={type_id:this.uploadParams.type_id};Object(n.d)(e).then(function(e){t.wifiModuleList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){e=e.size/1024/1024<5;return e||this.$message.error("SDK文件大小不能超过 5MB!"),e},handleChange:function(e,t){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var t=this;this.$refs.uploadForm.validate(function(e){return!!e&&void t.$refs.upload.submit()})},uploadSuccess:function(e,t,o){var i=this;200===e.code?(this.$message.success("上传成功！"),setTimeout(function(){i.closeDialog()},200),this.getList()):this.$message.error(e.msg)},uploadError:function(e,t,o){},modifySDK:function(e){this.dialogVisible=!0,this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_module_id,this.isToModify=!0}}},i={render:function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:o.queryCondition}},[i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){o.dialogVisible=!0}}},[o._v("新建")])],1),o._v(" "),i("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:o.queryCondition.type_id,callback:function(e){o.$set(o.queryCondition,"type_id",e)},expression:"queryCondition.type_id"}},o._l(o.productTypeList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),o._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:o.getList}},[o._v("查询")])],1)],1)],1),o._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:o.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:o.list}},[i("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),o._v(" "),i("el-table-column",{attrs:{align:"center",prop:"technology_module_vendor",label:"模组/芯片厂家"}}),o._v(" "),i("el-table-column",{attrs:{align:"center",prop:"technology_module_model",label:"型号"}}),o._v(" "),i("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名","min-width":"200"},scopedSlots:o._u([{key:"default",fn:function(e){return[i("a",{attrs:{href:e.row.url,target:"_blank"}},[o._v("\r\n            "+o._s(e.row.filename)+"\r\n          ")])]}}])}),o._v(" "),i("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),o._v(" "),i("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),o._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:o._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(e){return o.modifySDK(t.row)}}},[o._v("\r\n            修改\r\n          ")])]}}])})],1),o._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!o.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":o.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:o.total},on:{"size-change":o.handleSizeChange,"current-change":o.handleCurrentChange,"update:currentPage":function(e){return o.$set(o.listQuery,"page",e)},"update:current-page":function(e){return o.$set(o.listQuery,"page",e)}}})],1),o._v(" "),i("el-dialog",{attrs:{title:"上传SDK文件",visible:o.dialogVisible,"before-close":o.handleClose},on:{"update:visible":function(e){o.dialogVisible=e}}},[i("el-form",{ref:"uploadForm",attrs:{model:o.uploadParams,rules:o.rules,"label-position":"right"}},[i("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":o.formLabelWidth}},[i("el-select",{attrs:{disabled:o.isToModify,placeholder:"请选择"},on:{change:o.getWifiModuleList},model:{value:o.uploadParams.type_id,callback:function(e){o.$set(o.uploadParams,"type_id",e)},expression:"uploadParams.type_id"}},o._l(o.productTypeList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),o._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:o.showTypeKey,expression:"showTypeKey"}],attrs:{label:"模组/芯片厂家",prop:"technology_type_key","label-width":o.formLabelWidth}},[i("el-select",{attrs:{disabled:o.isToModify,placeholder:"请选择"},model:{value:o.uploadParams.technology_type_key,callback:function(e){o.$set(o.uploadParams,"technology_type_key",e)},expression:"uploadParams.technology_type_key"}},o._l(o.wifiModuleList,function(e){return i("el-option-group",{key:e.vendor,attrs:{label:e.vendor}},o._l(e.modellist,function(e){return i("el-option",{key:e.module_id,attrs:{label:e.model,value:e.module_id}})}),1)}),1)],1),o._v(" "),i("el-form-item",{attrs:{label:"SDK文件","label-width":o.formLabelWidth,prop:"upload"}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"list-type":"text",action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:o.uploadParams,"file-list":o.fileList,"auto-upload":!1,"on-change":o.handleChange,"before-upload":o.beforeUpload,"on-error":o.uploadError,"on-success":o.uploadSuccess,limit:1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[o._v("选取文件")]),o._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[o._v("只能上传zip文件，且不超过5M")])],1)],1)],1),o._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:o.closeDialog}},[o._v("取 消")]),o._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:o.uploadSDK}},[o._v("确 定")])],1)],1)],1)},staticRenderFns:[]};i=o("C7Lr")(d,i,!1,function(e){o("VbgX")},null,null),t.default=i.exports},sQkU:function(e,t,o){"use strict";t.j=function(e){return Object(i.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})},t.h=function(){return Object(i.a)({url:"/admin/product/type_lists",method:"post",data:{}})},t.i=function(e){return Object(i.a)({url:"/admin/review_info",method:"post",data:e})},t.c=function(e){return Object(i.a)({url:"/admin/review_approve",method:"post",data:e})},t.f=function(e){return Object(i.a)({url:"/admin/product_lists",method:"post",data:e})},t.e=function(e){return Object(i.a)({url:"/admin/product_info",method:"post",data:e})},t.k=function(e){return Object(i.a)({url:"/admin/product_unshelve",method:"post",data:e})},t.g=function(e){return Object(a.a)({url:"/api/ext/devcard/product",method:"get",data:e})},t.b=function(e){return Object(a.a)({url:"/api/ext/devcard/product",method:"post",data:e})},t.d=function(){return Object(a.a)({url:"/api/ext/gtags/global",method:"get"})},t.a=function(e){return Object(a.a)({url:"/api/ext/gtags/global",method:"post",data:e})};var i=o("Vo7i"),a=o("HIeg")},w79a:function(e,t,o){"use strict";t.c=function(e){return Object(i.a)({url:"/admin/sdk/list",method:"get",data:e})},t.d=function(e){return Object(i.a)({url:"/producttype/technologylists",method:"post",data:{}})},t.a=function(e){return Object(i.a)({url:"/producttype/technologylists",method:"post",data:e})},t.b=function(e){return Object(i.a)({url:"/admin/productdoc_lists?page="+e.page,method:"post",data:e})};var i=o("Vo7i")}});