webpackJsonp([29],{"+7zO":function(e,t,a){"use strict";t.b=function(e){return Object(r.a)({url:"/api/ext/panelPage/config",method:"GET"})},t.a=function(e){return Object(r.a)({url:"/api/ext/panelPage/config",method:"post",data:e})};var r=a("Vo7i")},JAL0:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"addPanelDialog.vue",sourceRoot:""}])},"g+/i":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("woOf"),o=a.n(r),s=a("+7zO"),l={props:{dialogFormVisible:{type:Boolean,default:!1},tableData:{type:Array,default:function(){return[]}},status:{type:String,default:""},rowData:{type:Object,default:function(){return{}}}},data:function(){return{title:"新增后将不可删除，手机App将一直显示该项，请谨慎操作",form:{pageId:"",pageName:"",pageEnable:0,sort:1},rules:{pageId:[{required:!0,validator:function(e,t,a){/^-?[1-9]\d*$/.test(t)?a():a(new Error("请输入整数"))},trigger:"blur"}],pageName:[{required:!0,message:"请输入页面名称",trigger:"change"}],pageEnable:[{required:!0,message:"请选择初始化状态",trigger:"change"}],sort:[{required:!0,message:"请选择排序方式",trigger:"change"}]}}},computed:{sortNo:function(){return 0===this.form.sort?this.tableData[0].sortNo-1:this.tableData[this.tableData.length-1].sortNo+1}},created:function(){"edit"===this.status&&(this.form.pageId=this.rowData.pageId,this.form.pageName=this.rowData.pageName,this.form.pageEnable=this.rowData.pageEnable,this.form.sortNo=this.rowData.sortNo)},methods:{submitForm:function(){var a=this;this.$refs.ruleForm.validate(function(e){if(!e)return!1;if("add"===status)a.form.pageId=Number(a.form.pageId),a.$confirm("新增后将不可删除，手机App将一直显示该项，请谨慎操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=o()({},a.form);e.sortNo=a.sortNo,delete e.sort,Object(s.a)(e).then(function(e){200===e.code&&a.$message({type:"success",message:"新增成功!"}),a.$emit("closeAddDialog",1)})}).catch(function(){a.$message({type:"info",message:"已取消"})});else{var t=o()({},a.form);delete t.sort,Object(s.a)(t).then(function(e){200===e.code&&a.$message({type:"success",message:"编辑完成!"}),a.$emit("closeAddDialog",1)})}})},resetForm:function(){this.$emit("closeAddDialog")}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{staticClass:"imgbox",attrs:{"append-to-body":!0,visible:t.dialogFormVisible,"before-close":t.resetForm,title:"新增面板页面",width:"50%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"ruleForm",attrs:{rules:t.rules,model:t.form,"reset-fields":"","label-width":"150px"}},[a("el-form-item",{attrs:{label:"页面ID",prop:"pageId"}},[a("el-input",{attrs:{disabled:"edit"===t.status,autocomplete:"off",placeholder:"请输入组织名"},model:{value:t.form.pageId,callback:function(e){t.$set(t.form,"pageId",e)},expression:"form.pageId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"页面名称",prop:"pageName"}},[a("el-input",{attrs:{placeholder:"请输入页面名称"},model:{value:t.form.pageName,callback:function(e){t.$set(t.form,"pageName",e)},expression:"form.pageName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"初始化状态是否启用",prop:"pageEnable"}},[a("el-radio-group",{model:{value:t.form.pageEnable,callback:function(e){t.$set(t.form,"pageEnable",e)},expression:"form.pageEnable"}},[a("el-radio",{attrs:{label:1}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),t._v(" "),"add"===t.status?a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-radio-group",{model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}},[a("el-radio",{attrs:{label:0}},[t._v("排在前面")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("排在后面")])],1)],1):t._e(),t._v(" "),"add"===t.status?a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("span",{staticStyle:{color:"red"}},[t._v(t._s(t.title))])]):t._e()],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.resetForm}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(l,i,!1,function(e){a("r49U")},"data-v-7f0be058",null);t.default=n.exports},r49U:function(e,t,a){var r=a("JAL0");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("6d42795e",r,!0)}});