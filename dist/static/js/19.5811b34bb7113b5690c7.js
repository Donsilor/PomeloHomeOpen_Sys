webpackJsonp([19],{"7qmw":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("w79a"),o=a("sQkU"),n=a("bzuE"),r=a("TIfe"),l={data:function(){var i=this;return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:n.d,dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:function(e,t,a){0===i.$refs.upload.uploadFiles.length?a(new Error("请选择上传文件！")):a()}}]},formLabelWidth:"120px",showTypeKey:!1,agreementList:[],productTypeList:[],fileList:[],uploadParams:{technology_type:2,token:Object(r.b)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.listLoading=!0;var e={technology_type:2,page:this.listQuery.page,limit:this.listQuery.limit};Object(i.c)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(o.h)().then(function(e){t.productTypeList=e.list})},getAgreementList:function(){var t=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var e={type_id:this.uploadParams.type_id,agreement_type:2};Object(i.a)(e).then(function(e){t.agreementList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){e=e.size/1024/1024<5;return e||this.$message.error("SDK文件大小不能超过 5MB!"),e},handleChange:function(e,t){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var t=this;this.$refs.uploadForm.validate(function(e){return!!e&&void t.$refs.upload.submit()})},uploadSuccess:function(e,t,a){var i=this;200===e.code?(this.$message.success("上传成功！"),setTimeout(function(){i.closeDialog()},200),this.getList()):this.$message.error(e.msg)},uploadError:function(e,t,a){},modifySDK:function(e){this.dialogVisible=!0,this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_agreement_id,this.isToModify=!0}}},s={render:function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"app-container"},[i("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){a.dialogVisible=!0}}},[a._v("新建")]),a._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:a.list}},[i("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"technology_agreement",label:"协议"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名"},scopedSlots:a._u([{key:"default",fn:function(e){return[i("a",{attrs:{href:e.row.url,target:"_blank"}},[a._v("\n          "+a._s(e.row.filename)+"\n        ")])]}}])}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:a._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(e){a.modifySDK(t.row)}}},[a._v("\n          修改\n        ")])]}}])})],1),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!a.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":a.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:a.total},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange,"update:currentPage":function(e){a.$set(a.listQuery,"page",e)}}})],1),a._v(" "),i("el-dialog",{attrs:{title:"上传SDK文件",visible:a.dialogVisible,size:"small","before-close":a.handleClose},on:{"update:visible":function(e){a.dialogVisible=e}}},[i("el-form",{ref:"uploadForm",attrs:{model:a.uploadParams,rules:a.rules,"label-position":"right"}},[i("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":a.formLabelWidth}},[i("el-select",{attrs:{disabled:a.isToModify,placeholder:"请选择"},on:{change:a.getAgreementList},model:{value:a.uploadParams.type_id,callback:function(e){a.$set(a.uploadParams,"type_id",e)},expression:"uploadParams.type_id"}},a._l(a.productTypeList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),a._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:a.showTypeKey,expression:"showTypeKey"}],attrs:{label:"协议",prop:"technology_type_key","label-width":a.formLabelWidth}},[i("el-select",{attrs:{disabled:a.isToModify,placeholder:"请选择"},model:{value:a.uploadParams.technology_type_key,callback:function(e){a.$set(a.uploadParams,"technology_type_key",e)},expression:"uploadParams.technology_type_key"}},a._l(a.agreementList,function(e){return i("el-option",{key:e.agreement_id,attrs:{label:e.agreement,value:e.agreement_id}})}))],1),a._v(" "),i("el-form-item",{attrs:{label:"SDK文件","label-width":a.formLabelWidth,prop:"upload"}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:a.uploadParams,"file-list":a.fileList,"auto-upload":!1,"on-change":a.handleChange,"before-upload":a.beforeUpload,"on-error":a.uploadError,"on-success":a.uploadSuccess,limit:1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[a._v("选取文件")]),a._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a._v("只能上传zip文件，且不超过5M")])],1)],1)],1),a._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:a.closeDialog}},[a._v("取 消")]),a._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:a.uploadSDK}},[a._v("确 定")])],1)],1)],1)},staticRenderFns:[]};s=a("C7Lr")(l,s,!1,function(e){a("omew")},null,null),t.default=s.exports},OVgV:function(e,t,a){(e.exports=a("BkJT")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"zigbeeSdkUpload.vue",sourceRoot:""}])},bzuE:function(e,t,a){"use strict";a.d(t,"d",function(){return i}),a.d(t,"c",function(){return o}),a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],o=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],n={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},r="星络科技"},omew:function(e,t,a){var i=a("OVgV");(i="string"==typeof i?[[e.i,i,""]]:i).locals&&(e.exports=i.locals);a("8bSs")("01cd2432",i,!0)},sQkU:function(e,t,a){"use strict";t.j=function(e){return Object(i.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})},t.h=function(){return Object(i.a)({url:"/admin/product/type_lists",method:"post",data:{}})},t.i=function(e){return Object(i.a)({url:"/admin/review_info",method:"post",data:e})},t.c=function(e){return Object(i.a)({url:"/admin/review_approve",method:"post",data:e})},t.f=function(e){return Object(i.a)({url:"/admin/product_lists",method:"post",data:e})},t.e=function(e){return Object(i.a)({url:"/admin/product_info",method:"post",data:e})},t.k=function(e){return Object(i.a)({url:"/admin/product_unshelve",method:"post",data:e})},t.g=function(e){return Object(i.a)({url:"/api/ext/devcard/product",method:"get",data:e})},t.b=function(e){return Object(i.a)({url:"/api/ext/devcard/product",method:"post",data:e})},t.d=function(){return Object(i.a)({url:"/api/ext/gtags/global",method:"get"})},t.a=function(e){return Object(i.a)({url:"/api/ext/gtags/global",method:"post",data:e})};var i=a("Vo7i")},w79a:function(e,t,a){"use strict";t.c=function(e){return Object(i.a)({url:"/admin/sdk/list",method:"get",data:e})},t.d=function(e){return Object(i.a)({url:"/producttype/technologylists",method:"post",data:{}})},t.a=function(e){return Object(i.a)({url:"/producttype/technologylists",method:"post",data:e})},t.b=function(e){return Object(i.a)({url:"/admin/productdoc_lists?page="+e.page,method:"post",data:e})};var i=a("Vo7i")}});