webpackJsonp([30],{"7qmw":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("w79a"),i=a("sQkU"),n=a("bzuE"),r=a("TIfe"),s={data:function(){var o=this;return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:n.d,dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:function(e,t,a){0===o.$refs.upload.uploadFiles.length?a(new Error("请选择上传文件！")):a()}}]},formLabelWidth:"120px",showTypeKey:!1,agreementList:[],productTypeList:[],fileList:[],uploadParams:{technology_type:2,token:Object(r.b)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var t=this;this.listLoading=!0;var e={technology_type:2,page:this.listQuery.page,limit:this.listQuery.limit};Object(o.c)(e).then(function(e){t.list=e.data,t.total=e.total,t.listLoading=!1})},getProductType:function(){var t=this;Object(i.h)().then(function(e){t.productTypeList=e.list})},getAgreementList:function(){var t=this;this.showTypeKey=!0,this.uploadParams.technology_type_key="";var e={type_id:this.uploadParams.type_id,agreement_type:2};Object(o.a)(e).then(function(e){t.agreementList=e.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.showTypeKey=!1},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1,this.showTypeKey=!1},beforeUpload:function(e){e=e.size/1024/1024<5;return e||this.$message.error("SDK文件大小不能超过 5MB!"),e},handleChange:function(e,t){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var t=this;this.$refs.uploadForm.validate(function(e){return!!e&&void t.$refs.upload.submit()})},uploadSuccess:function(e,t,a){var o=this;200===e.code?(this.$message.success("上传成功！"),setTimeout(function(){o.closeDialog()},200),this.getList()):this.$message.error(e.msg)},uploadError:function(e,t,a){},modifySDK:function(e){this.dialogVisible=!0,this.uploadParams.type_id=e.type_id,this.uploadParams.technology_type_key=e.technology_agreement_id,this.isToModify=!0}}},l={render:function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{staticClass:"app-container"},[o("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){a.dialogVisible=!0}}},[a._v("新建")]),a._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:a.list}},[o("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),a._v(" "),o("el-table-column",{attrs:{align:"center",prop:"technology_agreement",label:"协议"}}),a._v(" "),o("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名"},scopedSlots:a._u([{key:"default",fn:function(e){return[o("a",{attrs:{href:e.row.url,target:"_blank"}},[a._v("\n          "+a._s(e.row.filename)+"\n        ")])]}}])}),a._v(" "),o("el-table-column",{attrs:{align:"center",prop:"size",label:"SDK大小"}}),a._v(" "),o("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),a._v(" "),o("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:a._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(e){return a.modifySDK(t.row)}}},[a._v("\n          修改\n        ")])]}}])})],1),a._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!a.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[o("el-pagination",{attrs:{"current-page":a.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:a.total},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange,"update:currentPage":function(e){return a.$set(a.listQuery,"page",e)},"update:current-page":function(e){return a.$set(a.listQuery,"page",e)}}})],1),a._v(" "),o("el-dialog",{attrs:{title:"上传SDK文件",visible:a.dialogVisible,size:"small","before-close":a.handleClose},on:{"update:visible":function(e){a.dialogVisible=e}}},[o("el-form",{ref:"uploadForm",attrs:{model:a.uploadParams,rules:a.rules,"label-position":"right"}},[o("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":a.formLabelWidth}},[o("el-select",{attrs:{disabled:a.isToModify,placeholder:"请选择"},on:{change:a.getAgreementList},model:{value:a.uploadParams.type_id,callback:function(e){a.$set(a.uploadParams,"type_id",e)},expression:"uploadParams.type_id"}},a._l(a.productTypeList,function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),a._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:a.showTypeKey,expression:"showTypeKey"}],attrs:{label:"协议",prop:"technology_type_key","label-width":a.formLabelWidth}},[o("el-select",{attrs:{disabled:a.isToModify,placeholder:"请选择"},model:{value:a.uploadParams.technology_type_key,callback:function(e){a.$set(a.uploadParams,"technology_type_key",e)},expression:"uploadParams.technology_type_key"}},a._l(a.agreementList,function(e){return o("el-option",{key:e.agreement_id,attrs:{label:e.agreement,value:e.agreement_id}})}),1)],1),a._v(" "),o("el-form-item",{attrs:{label:"SDK文件","label-width":a.formLabelWidth,prop:"upload"}},[o("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:a.uploadParams,"file-list":a.fileList,"auto-upload":!1,"on-change":a.handleChange,"before-upload":a.beforeUpload,"on-error":a.uploadError,"on-success":a.uploadSuccess,limit:1}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[a._v("选取文件")]),a._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a._v("只能上传zip文件，且不超过5M")])],1)],1)],1),a._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:a.closeDialog}},[a._v("取 消")]),a._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:a.uploadSDK}},[a._v("确 定")])],1)],1)],1)},staticRenderFns:[]};l=a("C7Lr")(s,l,!1,function(e){a("VPTt")},null,null),t.default=l.exports},HIeg:function(e,t,a){"use strict";var o=a("rVsN"),i=a.n(o),o=a("3cXf"),o=(a.n(o),a("aA9S")),n=a.n(o),o=a("BMa3"),o=a.n(o),r=a("/QDj"),s=(a.n(r),a("IcnI")),l=a("1h0+"),d=(a.n(l),a("TIfe")),u=a("VSB1"),o=o.a.create({timeout:15e3});o.interceptors.request.use(function(e){var t={id:Object(l.v4)(),timestamp:Date.parse(new Date),version:"1.0"};return e.data instanceof FormData||-1!==e.url.indexOf("/icon")||-1!==e.url.indexOf("/product_agreement/versionadd")||-1!==e.url.indexOf("/copywritingManage/")||(e.data=n()(t,e.data)),e.data||(e.data={}),s.a.getters.token&&(e.data.token=Object(d.b)()),"get"==e.method&&(e.url=e.url+"?"+u.a.serialize(e.data)),e},function(e){i.a.reject(e)}),o.interceptors.response.use(function(e){var t=e.data;return 200!==t.code?(Object(r.Message)({message:t.msg||t.message,type:"error",duration:2e3}),401===t.code&&s.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),i.a.reject(t)):-1!==e.config.url.indexOf("/v1")?i.a.resolve(e):e.data.result?i.a.resolve(e.data.result):i.a.resolve(e.data)},function(e){e=e.response.data;return Object(r.Message)({message:e.msg||e.message,type:"error",duration:5e3}),401===e.code&&s.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),i.a.reject(e)}),t.a=o},OVgV:function(e,t,a){(e.exports=a("BkJT")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"zigbeeSdkUpload.vue",sourceRoot:""}])},VPTt:function(e,t,a){var o=a("OVgV");(o="string"==typeof o?[[e.i,o,""]]:o).locals&&(e.exports=o.locals);a("8bSs")("01cd2432",o,!0)},bzuE:function(e,t,a){"use strict";a.d(t,"d",function(){return o}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var o=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],i=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],n={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},r="星络科技"},sQkU:function(e,t,a){"use strict";t.j=function(e){return Object(o.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})},t.h=function(){return Object(o.a)({url:"/admin/product/type_lists",method:"post",data:{}})},t.i=function(e){return Object(o.a)({url:"/admin/review_info",method:"post",data:e})},t.c=function(e){return Object(o.a)({url:"/admin/review_approve",method:"post",data:e})},t.f=function(e){return Object(o.a)({url:"/admin/product_lists",method:"post",data:e})},t.e=function(e){return Object(o.a)({url:"/admin/product_info",method:"post",data:e})},t.k=function(e){return Object(o.a)({url:"/admin/product_unshelve",method:"post",data:e})},t.g=function(e){return Object(i.a)({url:"/api/ext/devcard/product",method:"get",data:e})},t.b=function(e){return Object(i.a)({url:"/api/ext/devcard/product",method:"post",data:e})},t.d=function(){return Object(i.a)({url:"/api/ext/gtags/global",method:"get"})},t.a=function(e){return Object(i.a)({url:"/api/ext/gtags/global",method:"post",data:e})};var o=a("Vo7i"),i=a("HIeg")},w79a:function(e,t,a){"use strict";t.c=function(e){return Object(o.a)({url:"/admin/sdk/list",method:"get",data:e})},t.d=function(e){return Object(o.a)({url:"/producttype/technologylists",method:"post",data:{}})},t.a=function(e){return Object(o.a)({url:"/producttype/technologylists",method:"post",data:e})},t.b=function(e){return Object(o.a)({url:"/admin/productdoc_lists?page="+e.page,method:"post",data:e})};var o=a("Vo7i")}});