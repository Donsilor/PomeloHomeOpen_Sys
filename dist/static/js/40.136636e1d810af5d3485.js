webpackJsonp([40],{"+7zO":function(e,t,a){"use strict";t.b=function(e){return Object(o.a)({url:"/api/ext/panelPage/config",method:"GET"})},t.a=function(e){return Object(o.a)({url:"/api/ext/panelPage/config",method:"post",data:e})};var o=a("HIeg")},HIeg:function(e,t,a){"use strict";var o=a("rVsN"),r=a.n(o),o=a("3cXf"),o=(a.n(o),a("aA9S")),s=a.n(o),o=a("BMa3"),o=a.n(o),n=a("/QDj"),i=(a.n(n),a("IcnI")),l=a("1h0+"),d=(a.n(l),a("TIfe")),c=a("VSB1"),o=o.a.create({timeout:15e3});o.interceptors.request.use(function(e){var t={id:Object(l.v4)(),timestamp:Date.parse(new Date),version:"1.0"};return e.data instanceof FormData||-1!==e.url.indexOf("/icon")||-1!==e.url.indexOf("/product_agreement/versionadd")||-1!==e.url.indexOf("/copywritingManage/")||(e.data=s()(t,e.data)),e.data||(e.data={}),i.a.getters.token&&(e.data.token=Object(d.b)()),"get"==e.method&&(e.url=e.url+"?"+c.a.serialize(e.data)),e},function(e){r.a.reject(e)}),o.interceptors.response.use(function(e){var t=e.data;return 200!==t.code?(Object(n.Message)({message:t.msg||t.message,type:"error",duration:2e3}),401===t.code&&i.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),r.a.reject(t)):-1!==e.config.url.indexOf("/v1")?r.a.resolve(e):e.data.result?r.a.resolve(e.data.result):r.a.resolve(e.data)},function(e){e=e.response.data;return Object(n.Message)({message:e.msg||e.message,type:"error",duration:5e3}),401===e.code&&i.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),r.a.reject(e)}),t.a=o},QdId:function(e,t,a){var o=a("yRDm");(o="string"==typeof o?[[e.i,o,""]]:o).locals&&(e.exports=o.locals);a("8bSs")("2d6b7984",o,!0)},"g+/i":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("aA9S"),r=a.n(o),s=a("+7zO"),n={props:{dialogFormVisible:{type:Boolean,default:!1},tableData:{type:Array,default:function(){return[]}},status:{type:String,default:""},rowData:{type:Object,default:function(){return{}}}},data:function(){return{title:"新增后将不可删除，手机App将一直显示该项，请谨慎操作",form:{pageId:"",pageName:"",pageEnable:0,sort:1},rules:{pageId:[{required:!0,validator:function(e,t,a){/^[0-9]\d*$/.test(t)?a():a(new Error("请输入整数且不包括负整数"))},trigger:"blur"}],pageName:[{required:!0,message:"请输入页面名称",trigger:"change"}],pageEnable:[{required:!0,message:"请选择初始化状态",trigger:"change"}],sort:[{required:!0,message:"请选择排序方式",trigger:"change"}]}}},computed:{sortNo:function(){return 0===this.form.sort?this.tableData[0].sortNo-1:this.tableData[this.tableData.length-1].sortNo+1}},created:function(){"edit"===this.status&&(this.form.pageId=this.rowData.pageId,this.form.pageName=this.rowData.pageName,this.form.pageEnable=this.rowData.pageEnable,this.form.sortNo=this.rowData.sortNo)},methods:{submitForm:function(){var t=this;this.$refs.ruleForm.validate(function(e){return!!e&&void("add"===t.status?(t.form.pageId=Number(t.form.pageId),t.$confirm("新增后将不可删除，手机App将一直显示该项，请谨慎操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=r()({},t.form);e.sortNo=t.sortNo,delete e.sort,Object(s.a)(e).then(function(e){200===e.code&&t.$message({type:"success",message:"新增成功!"}),t.$emit("closeAddDialog",1)})}).catch(function(){t.$message({type:"info",message:"已取消"})})):(delete(e=r()({},t.form)).sort,Object(s.a)(e).then(function(e){200===e.code&&t.$message({type:"success",message:"编辑完成!"}),t.$emit("closeAddDialog",1)})))})},resetForm:function(){this.$emit("closeAddDialog")}}},o={render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("el-dialog",{staticClass:"imgbox",attrs:{"append-to-body":!0,visible:t.dialogFormVisible,"before-close":t.resetForm,title:"新增面板页面",width:"50%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{ref:"ruleForm",attrs:{rules:t.rules,model:t.form,"reset-fields":"","label-width":"150px"}},[e("el-form-item",{attrs:{label:"页面ID",prop:"pageId"}},[e("el-input",{attrs:{disabled:"edit"===t.status,autocomplete:"off",placeholder:"请输入组织名"},model:{value:t.form.pageId,callback:function(e){t.$set(t.form,"pageId",e)},expression:"form.pageId"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"页面名称",prop:"pageName"}},[e("el-input",{attrs:{placeholder:"请输入页面名称"},model:{value:t.form.pageName,callback:function(e){t.$set(t.form,"pageName",e)},expression:"form.pageName"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"初始化状态是否启用",prop:"pageEnable"}},[e("el-radio-group",{model:{value:t.form.pageEnable,callback:function(e){t.$set(t.form,"pageEnable",e)},expression:"form.pageEnable"}},[e("el-radio",{attrs:{label:1}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),t._v(" "),"add"===t.status?e("el-form-item",{attrs:{label:"排序",prop:"sort"}},[e("el-radio-group",{model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}},[e("el-radio",{attrs:{label:0}},[t._v("排在前面")]),t._v(" "),e("el-radio",{attrs:{label:1}},[t._v("排在后面")])],1)],1):t._e(),t._v(" "),"add"===t.status?e("el-form-item",{attrs:{label:"备注",prop:"remark"}},[e("span",{staticStyle:{color:"red"}},[t._v(t._s(t.title))])]):t._e()],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.resetForm}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};o=a("C7Lr")(n,o,!1,function(e){a("QdId")},"data-v-523e65cb",null),t.default=o.exports},yRDm:function(e,t,a){(e.exports=a("BkJT")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"addPanelDialog.vue",sourceRoot:""}])}});