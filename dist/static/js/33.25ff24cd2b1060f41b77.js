webpackJsonp([33],{"9ZEd":function(t,e,a){var i=a("VrX/");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("0a69465c",i,!0)},HIeg:function(t,e,a){"use strict";var i=a("//Fk"),o=a.n(i),n=a("mvHQ"),r=(a.n(n),a("woOf")),s=a.n(r),l=a("mtWM"),d=a.n(l),u=a("zL8q"),c=(a.n(u),a("IcnI")),p=a("DlMc"),f=(a.n(p),a("TIfe")),g=a("VSB1"),m=d.a.create({timeout:15e3});m.interceptors.request.use(function(t){var e={id:Object(p.v4)(),timestamp:Date.parse(new Date),version:"1.0"};return t.data instanceof FormData||-1!==t.url.indexOf("/icon")||-1!==t.url.indexOf("/product_agreement/versionadd")||(t.data=s()(e,t.data)),t.data||(t.data={}),c.a.getters.token&&(t.data.token=Object(f.b)()),"get"==t.method&&(t.url=t.url+"?"+g.a.serialize(t.data)),t},function(t){o.a.reject(t)}),m.interceptors.response.use(function(t){var e=t.data;return 200!==e.code?(Object(u.Message)({message:e.msg||e.message,type:"error",duration:2e3}),401===e.code&&c.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),o.a.reject(e)):-1!==t.config.url.indexOf("/v1")?o.a.resolve(t):t.data.result?o.a.resolve(t.data.result):o.a.resolve(t.data)},function(t){var e=t.response.data;return Object(u.Message)({message:e.msg||e.message,type:"error",duration:5e3}),401===e.code&&c.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),o.a.reject(e)}),e.a=m},SG9G:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("w79a"),o=a("sQkU"),n=a("bzuE"),r=a("TIfe"),s={data:function(){var i=this;return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},productTechnologyType:n.d,dialogVisible:!1,isToModify:!1,rules:{type_id:[{required:!0,message:"请选择品类",trigger:"blur"}],technology_type_key:[{required:!0,message:"请选择芯片型号",trigger:"blur"}],upload:[{required:!0,validator:function(t,e,a){0===i.$refs.upload.uploadFiles.length?a(new Error("请选择上传文件！")):a()}}]},formLabelWidth:"120px",productTypeList:[],fileList:[],uploadParams:{token:Object(r.b)(),file_type:21,type_id:""}}},mounted:function(){this.getList(),this.getProductType()},methods:{getList:function(){var e=this;this.listLoading=!0;var t={file_type:21,page:this.listQuery.page,limit:this.listQuery.limit};Object(i.b)(t).then(function(t){e.list=t.data,e.total=t.total,e.listLoading=!1})},getProductType:function(){var e=this;Object(o.h)().then(function(t){e.productTypeList=t.list})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleClose:function(t){t(),this.isToModify=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles()},closeDialog:function(){this.dialogVisible=!1,this.$refs.uploadForm.resetFields(),this.$refs.upload.clearFiles(),this.isToModify=!1},beforeUpload:function(t){var e=t.size/1024/1024<50;return e||this.$message.error("只能上传pdf,doc,docx,ppt文件，且不超过50M！"),e},handleChange:function(){this.$refs.uploadForm.validateField("upload")},uploadSDK:function(){var e=this;this.$refs.uploadForm.validate(function(t){if(!t)return!1;e.$refs.upload.submit()})},uploadSuccess:function(t){var e=this;200===t.code?(this.$message.success("上传成功！"),setTimeout(function(){e.closeDialog()},200),this.getList()):this.$message.error(t.msg)},uploadError:function(){},modifySDK:function(t){this.dialogVisible=!0,this.uploadParams.type_id=t.type_id,this.uploadParams.technology_type_key=t.file_type,this.isToModify=!0}}},l={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"app-container"},[i("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){a.dialogVisible=!0}}},[a._v("新建")]),a._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:a.list}},[i("el-table-column",{attrs:{align:"center",prop:"type_name",label:"品类"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"filename",label:"文件名","min-width":"180"},scopedSlots:a._u([{key:"default",fn:function(t){return[i("a",{attrs:{href:t.row.url,target:"_blank"}},[a._v("\n          "+a._s(t.row.filename)+"\n        ")])]}}])}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"size",label:"文件大小"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",prop:"updated_at_txt",label:"上传时间"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:a._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit"},on:{click:function(t){return a.modifySDK(e.row)}}},[a._v("\n          修改\n        ")])]}}])})],1),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!a.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":a.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:a.total},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange,"update:currentPage":function(t){return a.$set(a.listQuery,"page",t)},"update:current-page":function(t){return a.$set(a.listQuery,"page",t)}}})],1),a._v(" "),i("el-dialog",{attrs:{title:"上传开发文档",visible:a.dialogVisible,size:"small","before-close":a.handleClose},on:{"update:visible":function(t){a.dialogVisible=t}}},[i("el-form",{ref:"uploadForm",attrs:{model:a.uploadParams,rules:a.rules,"label-position":"right"}},[i("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":a.formLabelWidth}},[i("el-select",{attrs:{disabled:a.isToModify,placeholder:"请选择"},model:{value:a.uploadParams.type_id,callback:function(t){a.$set(a.uploadParams,"type_id",t)},expression:"uploadParams.type_id"}},a._l(a.productTypeList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),a._v(" "),i("el-form-item",{attrs:{label:"开发文档","label-width":a.formLabelWidth,prop:"upload"}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/productdoc_upload",multiple:!1,accept:".pdf,.doc,.docx,.ppt",data:a.uploadParams,"file-list":a.fileList,"auto-upload":!1,"on-change":a.handleChange,"before-upload":a.beforeUpload,"on-error":a.uploadError,"on-success":a.uploadSuccess,limit:1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[a._v("选取文件")]),a._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a._v("只能上传pdf,doc,docx,ppt文件，且不超过50M")])],1)],1)],1),a._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:a.closeDialog}},[a._v("取 消")]),a._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:a.uploadSDK}},[a._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(s,l,!1,function(t){a("9ZEd")},null,null);e.default=d.exports},"VrX/":function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"developDoc.vue",sourceRoot:""}])},bzuE:function(t,e,a){"use strict";a.d(e,"d",function(){return i}),a.d(e,"c",function(){return o}),a.d(e,"b",function(){return n}),a.d(e,"a",function(){return r});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],o=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],n={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},r="星络科技"},sQkU:function(t,e,a){"use strict";e.j=function(t){return Object(i.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})},e.h=function(){return Object(i.a)({url:"/admin/product/type_lists",method:"post",data:{}})},e.i=function(t){return Object(i.a)({url:"/admin/review_info",method:"post",data:t})},e.c=function(t){return Object(i.a)({url:"/admin/review_approve",method:"post",data:t})},e.f=function(t){return Object(i.a)({url:"/admin/product_lists",method:"post",data:t})},e.e=function(t){return Object(i.a)({url:"/admin/product_info",method:"post",data:t})},e.k=function(t){return Object(i.a)({url:"/admin/product_unshelve",method:"post",data:t})},e.g=function(t){return Object(o.a)({url:"/api/ext/devcard/product",method:"get",data:t})},e.b=function(t){return Object(o.a)({url:"/api/ext/devcard/product",method:"post",data:t})},e.d=function(){return Object(o.a)({url:"/api/ext/gtags/global",method:"get"})},e.a=function(t){return Object(o.a)({url:"/api/ext/gtags/global",method:"post",data:t})};var i=a("Vo7i"),o=a("HIeg")},w79a:function(t,e,a){"use strict";e.c=function(t){return Object(i.a)({url:"/admin/sdk/list",method:"get",data:t})},e.d=function(t){return Object(i.a)({url:"/producttype/technologylists",method:"post",data:{}})},e.a=function(t){return Object(i.a)({url:"/producttype/technologylists",method:"post",data:t})},e.b=function(t){return Object(i.a)({url:"/admin/productdoc_lists?page="+t.page,method:"post",data:t})};var i=a("Vo7i")}});