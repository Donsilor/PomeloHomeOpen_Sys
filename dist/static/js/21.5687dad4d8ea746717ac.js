webpackJsonp([21],{GnL2:function(t,e,i){(t.exports=i("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"wifiSdkUpload.vue",sourceRoot:""}])},SgsR:function(t,e,i){var o=i("GnL2");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("69400dba",o,!0)},bzuE:function(t,e,i){"use strict";i.d(e,"d",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"b",function(){return l}),i.d(e,"a",function(){return n});var o=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],l={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},n="星络科技"},ryJJ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("woOf"),a=i.n(o),l=i("w79a"),n=i("sQkU"),r=i("bzuE"),s=i("TIfe"),d={data:function(){var o=this;return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:r.d,queryCondition:{type_id:""},dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:function(t,e,i){0===o.$refs.upload.uploadFiles.length?i(new Error("请选择上传文件！")):i()}}]},formLabelWidth:"120px",showTypeKey:!1,wifiModuleList:[],productTypeList:[],fileList:[],showUploadMsg:!1,uploadParams:{technology_type:1,token:Object(s.b)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var e=this;this.listLoading=!0;var t={technology_type:1,page:this.listQuery.page,limit:this.listQuery.limit};a()(t,this.queryCondition),Object(l.c)(t).then(function(t){e.list=t.data,e.total=t.total,e.listLoading=!1})},getProductType:function(){var e=this;Object(n.h)().then(function(t){e.productTypeList=t.list})},getWifiModuleList:function(){var e=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var t={type_id:this.uploadParams.type_id};Object(l.d)(t).then(function(t){e.wifiModuleList=t.list})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleClose:function(t){t(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(t){var e=t.size/1024/1024<5;return e||this.$message.error("SDK文件大小不能超过 5MB!"),e},handleChange:function(){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var e=this;this.$refs.uploadForm.validate(function(t){return!!t&&void e.$refs.upload.submit()})},uploadSuccess:function(t){var e=this;200===t.code?(this.$message.success("上传成功！"),setTimeout(function(){e.closeDialog()},200),this.getList()):this.$message.error(t.msg)},uploadError:function(){},modifySDK:function(t){this.dialogVisible=!0,this.uploadParams.type_id=t.type_id,this.uploadParams.technology_type_key=t.technology_module_id,this.isToModify=!0}}},u={render:function(){var i=this,t=i.$createElement,o=i._self._c||t;return o("div",{staticClass:"app-container"},[o("div",{staticClass:"filter-container"},[o("el-form",{ref:"queryCondition",staticClass:"demo-form-inline",attrs:{inline:!0,model:i.queryCondition}},[o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){i.dialogVisible=!0}}},[i._v("新建")])],1),i._v(" "),o("el-form-item",{attrs:{label:"品类",prop:"type_id"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:i.queryCondition.type_id,callback:function(t){i.$set(i.queryCondition,"type_id",t)},expression:"queryCondition.type_id"}},i._l(i.productTypeList,function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),i._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:i.getList}},[i._v("查询")])],1)],1)],1),i._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:i.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:i.list}},[o("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),i._v(" "),o("el-table-column",{attrs:{align:"center",prop:"technology_module_vendor",label:"模组/芯片厂家"}}),i._v(" "),o("el-table-column",{attrs:{align:"center",prop:"technology_module_model",label:"型号"}}),i._v(" "),o("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名","min-width":"200"},scopedSlots:i._u([{key:"default",fn:function(t){return[o("a",{attrs:{href:t.row.url,target:"_blank"}},[i._v("\r\n            "+i._s(t.row.filename)+"\r\n          ")])]}}])}),i._v(" "),o("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),i._v(" "),o("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),i._v(" "),o("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:i._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(t){i.modifySDK(e.row)}}},[i._v("\r\n            修改\r\n          ")])]}}])})],1),i._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!i.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[o("el-pagination",{attrs:{"current-page":i.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:i.total},on:{"size-change":i.handleSizeChange,"current-change":i.handleCurrentChange,"update:currentPage":function(t){i.$set(i.listQuery,"page",t)}}})],1),i._v(" "),o("el-dialog",{attrs:{title:"上传SDK文件",visible:i.dialogVisible,"before-close":i.handleClose},on:{"update:visible":function(t){i.dialogVisible=t}}},[o("el-form",{ref:"uploadForm",attrs:{model:i.uploadParams,rules:i.rules,"label-position":"right"}},[o("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":i.formLabelWidth}},[o("el-select",{attrs:{disabled:i.isToModify,placeholder:"请选择"},on:{change:i.getWifiModuleList},model:{value:i.uploadParams.type_id,callback:function(t){i.$set(i.uploadParams,"type_id",t)},expression:"uploadParams.type_id"}},i._l(i.productTypeList,function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),i._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:i.showTypeKey,expression:"showTypeKey"}],attrs:{label:"模组/芯片厂家",prop:"technology_type_key","label-width":i.formLabelWidth}},[o("el-select",{attrs:{disabled:i.isToModify,placeholder:"请选择"},model:{value:i.uploadParams.technology_type_key,callback:function(t){i.$set(i.uploadParams,"technology_type_key",t)},expression:"uploadParams.technology_type_key"}},i._l(i.wifiModuleList,function(t){return o("el-option-group",{key:t.vendor,attrs:{label:t.vendor}},i._l(t.modellist,function(t){return o("el-option",{key:t.module_id,attrs:{label:t.model,value:t.module_id}})}))}))],1),i._v(" "),o("el-form-item",{attrs:{label:"SDK文件","label-width":i.formLabelWidth,prop:"upload"}},[o("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"list-type":"text",action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:i.uploadParams,"file-list":i.fileList,"auto-upload":!1,"on-change":i.handleChange,"before-upload":i.beforeUpload,"on-error":i.uploadError,"on-success":i.uploadSuccess,limit:1}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[i._v("选取文件")]),i._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[i._v("只能上传zip文件，且不超过5M")])],1)],1)],1),i._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:i.closeDialog}},[i._v("取 消")]),i._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:i.uploadSDK}},[i._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var p=i("VU/8")(d,u,!1,function(t){i("SgsR")},null,null);e.default=p.exports},sQkU:function(t,e,i){"use strict";e.j=function(t){return Object(o.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})},e.h=function(){return Object(o.a)({url:"/admin/product/type_lists",method:"post",data:{}})},e.i=function(t){return Object(o.a)({url:"/admin/review_info",method:"post",data:t})},e.c=function(t){return Object(o.a)({url:"/admin/review_approve",method:"post",data:t})},e.f=function(t){return Object(o.a)({url:"/admin/product_lists",method:"post",data:t})},e.e=function(t){return Object(o.a)({url:"/admin/product_info",method:"post",data:t})},e.k=function(t){return Object(o.a)({url:"/admin/product_unshelve",method:"post",data:t})},e.g=function(t){return Object(o.a)({url:"/api/ext/devcard/product",method:"get",data:t})},e.b=function(t){return Object(o.a)({url:"/api/ext/devcard/product",method:"post",data:t})},e.d=function(){return Object(o.a)({url:"/api/ext/gtags/global",method:"get"})},e.a=function(t){return Object(o.a)({url:"/api/ext/gtags/global",method:"post",data:t})};var o=i("Vo7i")},w79a:function(t,e,i){"use strict";e.c=function(t){return Object(o.a)({url:"/admin/sdk/list",method:"get",data:t})},e.d=function(t){return Object(o.a)({url:"/producttype/technologylists",method:"post",data:{}})},e.a=function(t){return Object(o.a)({url:"/producttype/technologylists",method:"post",data:t})},e.b=function(t){return Object(o.a)({url:"/admin/productdoc_lists?page="+t.page,method:"post",data:t})};var o=i("Vo7i")}});