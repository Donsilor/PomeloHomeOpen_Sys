webpackJsonp([15,41],{"+7zO":function(e,t,a){"use strict";t.b=function(e){return Object(o.a)({url:"/api/ext/panelPage/config",method:"GET"})},t.a=function(e){return Object(o.a)({url:"/api/ext/panelPage/config",method:"post",data:e})};var o=a("Vo7i")},"0xDb":function(e,t,a){"use strict";a.d(t,"a",function(){return o}),t.b=n;var t=a("hRKE"),r=a.n(t),o=(a("bzuE"),function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss";if(!e)return"";"string"==typeof e&&(e=e.replace(/-/g,"/"));var a,o={"M+":(e=new Date(e)).getMonth()+1,"d+":e.getDate(),"h+":e.getHours()%12==0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(1<RegExp.$1.length?2<RegExp.$1.length?"/u661f/u671f":"/u5468":"")+{0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"}[e.getDay()+""])),o)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?o[a]:("00"+o[a]).substr((""+o[a]).length)));return t});function n(e,t){if(0===arguments.length)return null;var a=t||"{y}-{m}-{d} {h}:{i}:{s}",t=void 0,o={y:(t="object"===(void 0===e?"undefined":r()(e))?e:(10===(""+e).length&&(e=1e3*parseInt(e)),new Date(e))).getFullYear(),m:t.getMonth()+1,d:t.getDate(),h:t.getHours(),i:t.getMinutes(),s:t.getSeconds(),a:t.getDay()};return a.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var a=o[t];return"a"===t?["一","二","三","四","五","六","日"][a-1]:(a=0<e.length&&a<10?"0"+a:a)||0})}},aKBz:function(e,t,a){var o=a("yRDm");(o="string"==typeof o?[[e.i,o,""]]:o).locals&&(e.exports=o.locals);a("8bSs")("2d6b7984",o,!0)},bzuE:function(e,t,a){"use strict";a.d(t,"d",function(){return o}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});var o=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],r=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],n={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},i="星络科技"},"dTF+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("+7zO"),r=(a("0xDb"),{name:"Index",components:{AddDialog:a("g+/i").default},data:function(){return{dialogFormVisible:!1,tableData:[],status:"",rowData:null}},mounted:function(){this.getDataList()},methods:{handleMove:function(e){var t=this,a=parseInt(e.newSort);/^-?[0-9]\d*$/.test(a)?(e={pageId:e.pageId,pageName:e.pageName,sortNo:a,pageEnable:e.pageEnable},Object(o.a)(e).then(function(e){t.getDataList()})):this.$message.error("请输入整数且不包括负整数")},getDataList:function(){var t=this;Object(o.b)().then(function(e){t.tableData=e.data})},handleEdite:function(e){this.dialogFormVisible=!0,this.status="edit",this.rowData=e},addNew:function(){this.status="add",this.dialogFormVisible=!0},closeAddDialog:function(e){e&&this.getDataList(),this.dialogFormVisible=!1}}}),n={render:function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{staticClass:"screen-container"},[o("h4",[a._v("屏幕配置列表")]),a._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:a.addNew}},[a._v("新增面板页面")]),a._v(" "),o("el-table",{staticStyle:{width:"1100px"},attrs:{data:a.tableData,border:""}},[o("el-table-column",{attrs:{fixed:"",prop:"pageId",label:"ID"}}),a._v(" "),o("el-table-column",{attrs:{prop:"pageName",label:"页面名称",width:""}}),a._v(" "),o("el-table-column",{attrs:{label:"初始化状态是否启用",width:""},scopedSlots:a._u([{key:"default",fn:function(e){return[a._v("\n        "+a._s(0===e.row.pageEnable?"禁用":"启用")+"\n      ")]}}])}),a._v(" "),o("el-table-column",{attrs:{prop:"sortNo",label:"排序"}}),a._v(" "),o("el-table-column",{attrs:{label:"操作",width:"350"},scopedSlots:a._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return a.handleEdite(t.row)}}},[a._v("编辑")]),a._v(" "),o("div",{staticClass:"sort_box"},[o("el-input",{attrs:{size:"mini",placeholder:"请输入排序号"},model:{value:t.row.newSort,callback:function(e){a.$set(t.row,"newSort",e)},expression:"scope.row.newSort"}}),a._v(" "),o("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(e){return a.handleMove(t.row)}}},[a._v("排序")])],1)]}}])})],1),a._v(" "),a.dialogFormVisible?o("AddDialog",{attrs:{"table-data":a.tableData,status:a.status,"row-data":a.rowData,"dialog-form-visible":a.dialogFormVisible},on:{closeAddDialog:a.closeAddDialog}}):a._e()],1)},staticRenderFns:[]};n=a("C7Lr")(r,n,!1,function(e){a("zkIu")},"data-v-677407f6",null),t.default=n.exports},"g+/i":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("aA9S"),r=a.n(o),n=a("+7zO"),i={props:{dialogFormVisible:{type:Boolean,default:!1},tableData:{type:Array,default:function(){return[]}},status:{type:String,default:""},rowData:{type:Object,default:function(){return{}}}},data:function(){return{title:"新增后将不可删除，手机App将一直显示该项，请谨慎操作",form:{pageId:"",pageName:"",pageEnable:0,sort:1},rules:{pageId:[{required:!0,validator:function(e,t,a){/^[0-9]\d*$/.test(t)?a():a(new Error("请输入整数且不包括负整数"))},trigger:"blur"}],pageName:[{required:!0,message:"请输入页面名称",trigger:"change"}],pageEnable:[{required:!0,message:"请选择初始化状态",trigger:"change"}],sort:[{required:!0,message:"请选择排序方式",trigger:"change"}]}}},computed:{sortNo:function(){return 0===this.form.sort?this.tableData[0].sortNo-1:this.tableData[this.tableData.length-1].sortNo+1}},created:function(){"edit"===this.status&&(this.form.pageId=this.rowData.pageId,this.form.pageName=this.rowData.pageName,this.form.pageEnable=this.rowData.pageEnable,this.form.sortNo=this.rowData.sortNo)},methods:{submitForm:function(){var t=this;this.$refs.ruleForm.validate(function(e){return!!e&&void("add"===t.status?(t.form.pageId=Number(t.form.pageId),t.$confirm("新增后将不可删除，手机App将一直显示该项，请谨慎操作, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=r()({},t.form);e.sortNo=t.sortNo,delete e.sort,Object(n.a)(e).then(function(e){200===e.code&&t.$message({type:"success",message:"新增成功!"}),t.$emit("closeAddDialog",1)})}).catch(function(){t.$message({type:"info",message:"已取消"})})):(delete(e=r()({},t.form)).sort,Object(n.a)(e).then(function(e){200===e.code&&t.$message({type:"success",message:"编辑完成!"}),t.$emit("closeAddDialog",1)})))})},resetForm:function(){this.$emit("closeAddDialog")}}},o={render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("el-dialog",{staticClass:"imgbox",attrs:{"append-to-body":!0,visible:t.dialogFormVisible,"before-close":t.resetForm,title:"新增面板页面",width:"50%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{ref:"ruleForm",attrs:{rules:t.rules,model:t.form,"reset-fields":"","label-width":"150px"}},[e("el-form-item",{attrs:{label:"页面ID",prop:"pageId"}},[e("el-input",{attrs:{disabled:"edit"===t.status,autocomplete:"off",placeholder:"请输入组织名"},model:{value:t.form.pageId,callback:function(e){t.$set(t.form,"pageId",e)},expression:"form.pageId"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"页面名称",prop:"pageName"}},[e("el-input",{attrs:{placeholder:"请输入页面名称"},model:{value:t.form.pageName,callback:function(e){t.$set(t.form,"pageName",e)},expression:"form.pageName"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"初始化状态是否启用",prop:"pageEnable"}},[e("el-radio-group",{model:{value:t.form.pageEnable,callback:function(e){t.$set(t.form,"pageEnable",e)},expression:"form.pageEnable"}},[e("el-radio",{attrs:{label:1}},[t._v("是")]),t._v(" "),e("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),t._v(" "),"add"===t.status?e("el-form-item",{attrs:{label:"排序",prop:"sort"}},[e("el-radio-group",{model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}},[e("el-radio",{attrs:{label:0}},[t._v("排在前面")]),t._v(" "),e("el-radio",{attrs:{label:1}},[t._v("排在后面")])],1)],1):t._e(),t._v(" "),"add"===t.status?e("el-form-item",{attrs:{label:"备注",prop:"remark"}},[e("span",{staticStyle:{color:"red"}},[t._v(t._s(t.title))])]):t._e()],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.resetForm}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};o=a("C7Lr")(i,o,!1,function(e){a("aKBz")},"data-v-523e65cb",null),t.default=o.exports},qKII:function(e,t,a){(e.exports=a("BkJT")(!0)).push([e.i,".screen-container[data-v-677407f6]{margin:0 20px}.sort_box[data-v-677407f6]{display:inline-block;margin-left:30px}.el-button[data-v-677407f6]{margin-bottom:10px}.el-input[data-v-677407f6]{width:110px}","",{version:3,sources:["E:/A-project/PomeloHomeOpen_Sys/src/views/typeManagement/panelPage.vue"],names:[],mappings:"AACA,mCACE,aAAiB,CAClB,AACD,2BACE,qBAAsB,AACtB,gBAAkB,CACnB,AACD,4BACE,kBAAoB,CACrB,AACD,2BACI,WAAa,CAChB",file:"panelPage.vue",sourcesContent:["\n.screen-container[data-v-677407f6]{\r\n  margin: 0px 20px;\n}\n.sort_box[data-v-677407f6]{\r\n  display: inline-block;\r\n  margin-left: 30px;\n}\n.el-button[data-v-677407f6]{\r\n  margin-bottom: 10px;\n}\n.el-input[data-v-677407f6]{\r\n    width: 110px;\n}\r\n"],sourceRoot:""}])},yRDm:function(e,t,a){(e.exports=a("BkJT")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"addPanelDialog.vue",sourceRoot:""}])},zkIu:function(e,t,a){var o=a("qKII");(o="string"==typeof o?[[e.i,o,""]]:o).locals&&(e.exports=o.locals);a("8bSs")("298182da",o,!0)}});