webpackJsonp([5,51,54],{PJiV:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,".addParams[data-v-15d1ac78]{margin-top:15px}.addAttr[data-v-15d1ac78]{margin-left:140px;color:#409eff}.w100p[data-v-15d1ac78]{width:100%}.w50p[data-v-15d1ac78]{width:50%}.input-width[data-v-15d1ac78]{width:285px}.addbtn[data-v-15d1ac78]{font-size:12px;color:#409eff}.first-item[data-v-15d1ac78],.sec-item[data-v-15d1ac78]{border:1px dashed #d2d2d2;padding-top:15px}.sec-item[data-v-15d1ac78]{width:98%}.mt0[data-v-15d1ac78]{margin-bottom:0}.pl8 .el-form-item__label[data-v-15d1ac78]{padding-left:10px}","",{version:3,sources:["d:/work/PomeloHomeOpen_Sys/src/views/typeManagement/addAttribute.vue"],names:[],mappings:"AACA,4BACI,eAAiB,CACpB,AACD,0BACI,kBAAmB,AACnB,aAAe,CAClB,AACD,wBACI,UAAY,CACf,AACD,uBACI,SAAW,CACd,AACD,8BACI,WAAa,CAChB,AACD,yBACI,eAAgB,AAChB,aAAc,CACjB,AAKD,wDAHI,0BAA2B,AAC3B,gBAAkB,CAMrB,AAJD,2BAGI,SAAW,CACd,AACD,sBACI,eAAiB,CACpB,AACD,2CACI,iBAAmB,CACtB",file:"addAttribute.vue",sourcesContent:["\n.addParams[data-v-15d1ac78]{\n    margin-top: 15px;\n}\n.addAttr[data-v-15d1ac78]{\n    margin-left: 140px;\n    color: #409EFF;\n}\n.w100p[data-v-15d1ac78]{\n    width: 100%;\n}\n.w50p[data-v-15d1ac78]{\n    width: 50%;\n}\n.input-width[data-v-15d1ac78]{\n    width: 285px;\n}\n.addbtn[data-v-15d1ac78]{\n    font-size: 12px;\n    color:#409EFF;\n}\n.first-item[data-v-15d1ac78]{\n    border: 1px dashed #d2d2d2;\n    padding-top: 15px;\n}\n.sec-item[data-v-15d1ac78]{\n    border: 1px dashed #d2d2d2;\n    padding-top: 15px;\n    width: 98%;\n}\n.mt0[data-v-15d1ac78]{\n    margin-bottom: 0;\n}\n.pl8 .el-form-item__label[data-v-15d1ac78]{\n    padding-left: 10px;\n}\n"],sourceRoot:""}])},UgB1:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,".addbtn[data-v-15eb2cf1]{font-size:12px;color:#999}.addTechDialog .el-dialog__body[data-v-15eb2cf1]{overflow-y:auto;max-height:400px;padding-top:10px}.addTechDialog .el-form-item__label[data-v-15eb2cf1]{padding-bottom:0;line-height:30px}.remove-item[data-v-15eb2cf1]{font-size:24px;cursor:pointer;color:#409eff;position:relative;top:30px}","",{version:3,sources:["d:/work/PomeloHomeOpen_Sys/src/views/typeManagement/addTechnical.vue"],names:[],mappings:"AACA,yBACI,eAAgB,AAChB,UAAY,CACf,AACD,iDACI,gBAAiB,AACjB,iBAAkB,AAClB,gBAAkB,CACrB,AACD,qDACI,iBAAoB,AACpB,gBAAkB,CACrB,AACD,8BACI,eAAgB,AAChB,eAAgB,AAChB,cAAe,AACf,kBAAmB,AACnB,QAAU,CACb",file:"addTechnical.vue",sourcesContent:["\n.addbtn[data-v-15eb2cf1]{\n    font-size: 12px;\n    color: #999;\n}\n.addTechDialog .el-dialog__body[data-v-15eb2cf1]{\n    overflow-y: auto;\n    max-height: 400px;\n    padding-top: 10px;\n}\n.addTechDialog .el-form-item__label[data-v-15eb2cf1]{\n    padding-bottom: 0px;\n    line-height: 30px;\n}\n.remove-item[data-v-15eb2cf1]{\n    font-size: 24px;\n    cursor: pointer;\n    color: #409EFF;\n    position: relative;\n    top: 30px;\n}\n"],sourceRoot:""}])},a10I:function(e,t,a){var l=a("tD9m");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("03d94e30",l,!0)},atKs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("mvHQ"),i=a.n(l),r=(a("zL8q"),a("Vo7i")),o=(a("VSB1"),a("TIfe")),s=(a("bFNI"),a("i224"),{name:"existedCategory",computed:{},created:function(){},mounted:function(){this.getParentType()},data:function(){return{isLoadedTechnical:!1,typeid:this.$route.query.id,token:Object(o.b)(),isLoadData:!1,editText:"编辑品类信息",form:{id:"",name:"",name_e:"",parent_type_id:"",parent_name:"",parent_name_e:"",icon_list:{high_light:{file_id:"",file_url:"",file_name:""},normal:{file_id:"",file_url:"",file_name:""},normal_s:{file_id:"",file_url:"",file_name:""},disabled:{file_id:"",file_url:"",file_name:""}},parent_icon_list:{high_light:{file_id:"",file_url:"",file_name:""},normal:{file_id:"",file_url:"",file_name:""},normal_s:{file_id:"",file_url:"",file_name:""},disabled:{file_id:"",file_url:"",file_name:""}},show_in_select_list:0},rules:{id:[{validator:function(e,t,a){if(!t)return a(new Error("请输入子品类ID"));t<=5e3?a(new Error("ID必须大于5000")):a()},trigger:"blur"}],name:[{required:!0,message:"请输入子品类名称",trigger:"blur"},{max:32,message:"子品类名称不能超过32个字符",trigger:"blur"}],name_e:[{required:!0,message:"请输入子品类英文名称",trigger:"blur"},{max:32,message:"子品类英文名称不能超过32个字符",trigger:"blur"}],parent_type_id:[{required:!0,message:"请选择所属品类",trigger:"change"}]},technical_wifi:[],technical_bluetooth:[],technical_zigbee:[],parentList:[],high_light_data:{token:Object(o.b)(),file_id:"",attribute:"high_light"},normal_s_data:{token:Object(o.b)(),file_id:"",attribute:"normal_s"},normal_data:{token:Object(o.b)(),file_id:"",attribute:"normal"},disabled_data:{token:Object(o.b)(),file_id:"",attribute:"disabled"},parent_high_light_data:{token:Object(o.b)(),file_id:"",attribute:"parent_high_light"},parent_normal_s_data:{token:Object(o.b)(),file_id:"",attribute:"parent_normal_s"},parent_normal_data:{token:Object(o.b)(),file_id:"",attribute:"parent_normal"},parent_disabled_data:{token:Object(o.b)(),file_id:"",attribute:"parent_disabled"}}},methods:{getParentType:function(){var t=this;Object(r.a)({url:"/product/parenttype_lists",method:"post",data:{}}).then(function(e){t.parentList=e.list})},handleAvatarSuccess:function(e){if(200===e.code){var t=e.result;switch(e.result.type){case"high_light":this.form.icon_list.high_light=t.high_light,this.high_light_data.file_id=t.high_light.file_id;break;case"normal_s":this.form.icon_list.normal_s=t.normal_s,this.normal_s_data.file_id=t.normal_s.file_id;break;case"normal":this.form.icon_list.normal=t.normal,this.normal_data.file_id=t.normal.file_id;break;case"disabled":this.form.icon_list.disabled=t.disabled,this.disabled_data.file_id=t.disabled.file_id;break;case"parent_high_light":this.form.parent_icon_list.high_light=t.parent_high_light,this.parent_high_light_data.file_id=t.parent_high_light.file_id;break;case"parent_normal_s":this.form.parent_icon_list.normal_s=t.parent_normal_s,this.parent_normal_s_data.file_id=t.parent_normal_s.file_id;break;case"parent_normal":this.form.parent_icon_list.normal=t.parent_normal,this.parent_normal_data.file_id=t.parent_normal.file_id;break;case"parent_disabled":this.form.parent_icon_list.disabled=t.parent_disabled,this.parent_disabled_data.file_id=t.parent_disabled.file_id}}else this.$message.error("上传出错，请重新上传")},beforeAvatarUpload:function(e){var t="image/png"===e.type,a=e.size/1024/1024<5;return t||this.$message.error("请上传5M大小内PNG格式的文件"),a||this.$message.error("请上传5M大小内PNG格式的文件"),t&&a},addGory:function(){var e=this;this.$confirm("是否确定添加该品类？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.addGoryEvent()}).catch(function(){})},addGoryEvent:function(){var a=this;this.$refs.ruleForm.validate(function(e){if(!e)return a.$message({type:"error",message:"添加品类失败!"}),!1;var t=JSON.parse(i()(a.form));Object(r.a)({url:"/producttype/add",method:"post",data:t}).then(function(e){a.$message({type:"success",message:"保存成功!"}),setTimeout(function(){a.$router.push({path:"/typeManagement/existedCategory"})},2e3)}).catch(function(e){a.$message({type:"error",message:e.msg})})})},handleBackEvent:function(){this.$router.push({path:"/typeManagement/existedCategory"})}},components:{}}),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container addCategoryPage"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"ghost"},on:{click:t.handleBackEvent}},[t._v("返回")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addGory}},[t._v("确定并添加该品类")])],1),t._v(" "),a("el-col",{staticStyle:{margin:"20px 0px","padding-bottom":"40px"},attrs:{span:24}},[a("div",{staticClass:"desTitleTop"},[t._v("基本信息")]),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form",{ref:"ruleForm",staticStyle:{"margin-top":"20px"},attrs:{rules:t.rules,model:t.form,"label-width":"125px",size:"large"}},[a("el-form-item",{attrs:{label:"子品类ID",prop:"id"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{span:6,placeholder:"请输入子品类ID"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"子品类名称",prop:"name"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{span:6,placeholder:"请输入子品类名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"子品类英文名",prop:"name_e"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{span:6,placeholder:"请输入子品类英文"},model:{value:t.form.name_e,callback:function(e){t.$set(t.form,"name_e",e)},expression:"form.name_e"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{"padding-bottom":"30px"},attrs:{label:"品类图标"}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"fileuploadItem gavin"},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/index.php/producttype/iconupload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,accept:"image/png",data:t.high_light_data}},[""!=t.high_light_data.file_id?a("img",{staticClass:"avatar",attrs:{src:t.form.icon_list.high_light.file_url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),a("span",{staticClass:"file_upload_img_des"},[t._v("高亮状态")])],1),t._v(" "),a("div",{staticClass:"fileuploadItem gavin"},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/index.php/producttype/iconupload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,accept:"image/png",data:t.normal_s_data}},[""!=t.normal_s_data.file_id?a("img",{staticClass:"avatar",attrs:{src:t.form.icon_list.normal_s.file_url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),a("span",{staticClass:"file_upload_img_des"},[t._v("默认状态小尺寸")])],1),t._v(" "),a("div",{staticClass:"fileuploadItem gavin"},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/index.php/producttype/iconupload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,accept:"image/png",data:t.normal_data}},[""!=t.normal_data.file_id?a("img",{staticClass:"avatar",attrs:{src:t.form.icon_list.normal.file_url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),a("span",{staticClass:"file_upload_img_des"},[t._v("默认状态大尺寸")])],1),t._v(" "),a("div",{staticClass:"fileuploadItem gavin"},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/index.php/producttype/iconupload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,accept:"image/png",data:t.disabled_data}},[""!=t.disabled_data.file_id?a("img",{staticClass:"avatar",attrs:{src:t.form.icon_list.disabled.file_url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),a("span",{staticClass:"file_upload_img_des"},[t._v("不可用状态")])],1)])],1),t._v(" "),a("el-form-item",{attrs:{label:"所属大品类",prop:"parent_type_id"}},[a("el-col",{attrs:{span:12}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"所属品类"},model:{value:t.form.parent_type_id,callback:function(e){t.$set(t.form,"parent_type_id",e)},expression:"form.parent_type_id"}},t._l(t.parentList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(s,n,!1,function(e){a("a10I")},null,null);t.default=d.exports},bFNI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=[{technology_type:"",index:0,vendor:"",model:"",agreement:""},{technology_type:"",index:1,vendor:"",model:"",agreement:""}],l={computed:{},created:function(){},mounted:function(){},data:function(){return{dialogFormVisible:!1,form:{technology_list:[{technology_type:"",index:0,vendor:"",model:"",agreement:""},{technology_type:"",index:1,vendor:"",model:"",agreement:""}]}}},methods:{addTechnicalList:function(){this.form.technology_list.push({technology_type:"",vendor:"",model:"",agreement:""})},removeTechnicalList:function(e){this.form.technology_list.splice(e,1)},confirmTechnical:function(){var l=this;this.$refs.techniForm.validate(function(e){if(e){var t,a=[];l.form.technology_list.forEach(function(e,t){""!=e.technology_type&&(1==e.technology_type?a.push({technology_type:e.technology_type,vendor:e.vendor,model:e.model}):a.push({technology_type:e.technology_type,agreement:e.agreement}))}),t={technology_list:a},l.$emit("get-data",t),l.dialogFormVisible=!1,l.form.technology_list=i}})}}},r={render:function(){var l=this,e=l.$createElement,i=l._self._c||e;return i("div",{staticStyle:{display:"inline-block"}},[i("el-dialog",{attrs:{title:"增加技术方案",visible:l.dialogFormVisible,width:"50%","custom-class":"addTechDialog"},on:{"update:visible":function(e){l.dialogFormVisible=e}}},[i("el-form",{ref:"techniForm",attrs:{model:l.form,inline:!0,"label-position":"top"}},l._l(l.form.technology_list,function(t,a){return i("el-row",{key:t.value,attrs:{span:24}},[i("el-col",{attrs:{span:7}},[i("el-form-item",{attrs:{label:"技术方案",prop:"technology_list."+a+".technology_type",rules:[{required:!0,message:"技术方案不能为空",trigger:"change"}]}},[i("el-select",{attrs:{placeholder:"请选择技术方案"},model:{value:t.technology_type,callback:function(e){l.$set(t,"technology_type",e)},expression:"item.technology_type"}},[i("el-option",{attrs:{label:"Wi-Fi方案",value:"1"}}),l._v(" "),i("el-option",{attrs:{label:"ZigBee方案",value:"2"}}),l._v(" "),i("el-option",{attrs:{label:"蓝牙方案",value:"3"}})],1)],1)],1),l._v(" "),1==t.technology_type?i("el-col",{attrs:{span:7}},[i("el-form-item",{attrs:{label:"模组/芯片厂家",prop:"technology_list."+a+".vendor",rules:[{required:!0,message:"模组/芯片厂家不能为空",trigger:"blur"}]}},[i("el-input",{model:{value:t.vendor,callback:function(e){l.$set(t,"vendor",e)},expression:"item.vendor"}})],1)],1):l._e(),l._v(" "),1==t.technology_type?i("el-col",{attrs:{span:7}},[i("el-form-item",{attrs:{label:"模组/芯片型号",prop:"technology_list."+a+".model",rules:[{required:!0,message:"模组/芯片型号不能为空",trigger:"blur"}]}},[i("el-input",{model:{value:t.model,callback:function(e){l.$set(t,"model",e)},expression:"item.model"}})],1)],1):l._e(),l._v(" "),2==t.technology_type||3==t.technology_type?i("el-col",{attrs:{span:7}},[i("el-form-item",{attrs:{label:"协议",prop:"technology_list."+a+".agreement",rules:[{required:!0,message:"协议不能为空",trigger:"blur"}]}},[i("el-input",{model:{value:t.agreement,callback:function(e){l.$set(t,"agreement",e)},expression:"item.agreement"}})],1)],1):l._e(),l._v(" "),i("el-col",{attrs:{span:3}},[i("el-form-item",{attrs:{label:" "}},[1<l.form.technology_list.length?i("i",{staticClass:"el-icon-circle-close remove-item",on:{click:function(e){l.removeTechnicalList(a)}}}):l._e()])],1)],1)})),l._v(" "),i("a",{staticClass:"addbtn",attrs:{href:"javascript:void(0);"},on:{click:l.addTechnicalList}},[i("i",{staticClass:"el-icon-plus"}),l._v(" 添加更多技术方案")]),l._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){l.dialogFormVisible=!1}}},[l._v("取 消")]),l._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:l.confirmTechnical}},[l._v("确 定")])],1)],1),l._v(" "),i("el-button",{staticStyle:{"margin-right":"15px"},on:{click:function(e){l.dialogFormVisible=!0}}},[l._v("添加技术方案")])],1)},staticRenderFns:[]};var o=a("VU/8")(l,r,!1,function(e){a("hOKv")},"data-v-15eb2cf1",null);t.default=o.exports},hOKv:function(e,t,a){var l=a("UgB1");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("4e98d3ee",l,!0)},i224:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("mvHQ"),i=a.n(l),r=a("Vo7i"),o=(a("TIfe"),{method:[],key:"",type:"string",key_type:1,unit:"",is_checkbox:"1",value_list:[{value:"",value_des:""}],remark:""}),s={method:[],key:"",type:"string",key_type:1,remark:"",unit:"",is_checkbox:"1",value_list:[{value:"",value_des:""}],list:[o]},n={props:["typeid","token","visible","attrid"],data:function(){var e=i()(s);return{top:0<window.innerHeight-660?(window.innerHeight-660)/2+"px":"0px",dialogTitle:"新建属性参数",hulian_value:!0,isChooseObject:!1,form_string:e,form:{token:this.token,type_id:this.typeid,nodeid:"",is_default:1,value_list:[JSON.parse(e)]},rules:{nodeid:[{required:!0,message:"属性名称不能为空"},{min:1,max:32,message:"属性名称最多32个字符"},{validator:this.letterAndUnderscode}]}}},computed:{},watch:{attrid:function(e){e?(this.getAttr(e),this.dialogTitle="编辑属性参数"):this.dialogTitle="新建属性参数"}},created:function(){},mounted:function(){},methods:{getAttr:function(e){var t=this;Object(r.a)({url:"/attribute/info",method:"post",data:{attr_id:e}}).then(function(e){t.form.nodeid=e.ret.nodeid,t.form.is_default=e.ret.is_default,e.ret.value_list.forEach(function(e){e.list||(e.list=[JSON.parse(i()(o))]),e.value_list||(e.value_list=[{value:"",value_des:""}])}),t.form.value_list=e.ret.value_list})},addParams:function(){this.form.value_list.push(JSON.parse(this.form_string))},deleteParams:function(e){this.form.value_list.splice(e,1)},addAttribute:function(e){var t=i()(o);e.list.push(JSON.parse(t))},deleteAttr:function(e,t){e.list.splice(t,1)},changeTypeValue:function(e,t){"int"==e?(t.key_type=2,t.value_list=[{value:1,value_des:"类型"},{value:"",value_des:"最小值"},{value:"",value_des:"最大值"}]):"object"==e?t.key_type=3:(t.key_type="otc"==e?4:1,t.value_list=[{value:"",value_des:""}])},addEnumerateItem:function(e){e.value_list.push({value:"",value_des:""})},delEnumerateItem:function(e,t){t.value_list.splice(e,1)},closeDialog:function(){this.$refs.attForm.resetFields(),this.form.value_list=[JSON.parse(this.form_string)],this.$emit("close-dialog")},confirmTechnical:function(){var l=this;this.$refs.attForm.validate(function(e){if(e){var t=i()(l.form),a=JSON.parse(t);a.value_list.forEach(function(e){"3"==e.key_type?(delete e.value_list,delete e.is_checkbox,e.list.forEach(function(e){"1"!=e.key_type&&delete e.is_checkbox})):(delete e.list,"1"!=e.key_type&&delete e.is_checkbox)}),l.attrid&&(a.attr_id=l.attrid),Object(r.a)({url:l.attrid?"/attribute/edit":"/attribute/add",method:"post",data:a}).then(function(e){l.$emit("fresh-list"),l.closeDialog()})}})},letterAndUnderscode:function(e,t,a){var l=!0;if(t){for(var i=0;i<t.length;i++){var r=t.charCodeAt(i);if(!(65<=r&&r<=90||97<=r&&r<=122||95==r||33<=r&&r<=46||48<=r&&r<=57)){l=!1,a("只能是字母下划线");break}}l&&a()}else a()},unCN:function(e,t,a){/[\u4e00-\u9fa5]+/g.test(t)?a("不支持中文汉字"):a()},lengthLimit:function(e,t,a,l){a&&a.length>e?l("长度不能超过"+e+"字符"):l()}}},d={render:function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("div",{staticClass:"attDialog"},[n("el-dialog",{attrs:{"before-close":s.closeDialog,top:s.top,center:!0,title:s.dialogTitle,visible:s.visible,width:"1000px"},on:{"update:visible":function(e){s.visible=e}}},[n("el-form",{ref:"attForm",attrs:{inline:!0,rules:s.rules,model:s.form,"label-position":"left","label-width":"140px"}},[n("el-row",[n("el-col",{staticStyle:{"line-height":"32px"},attrs:{span:2}},[s._v("\n          属性信息\n        ")]),s._v(" "),n("el-col",{attrs:{span:22}},[n("el-form-item",{staticClass:"w100p",attrs:{label:"属性名称(node_ID)",prop:"nodeid"}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"仅支持字母、下划线输入，最多32个字符"},model:{value:s.form.nodeid,callback:function(e){s.$set(s.form,"nodeid",e)},expression:"form.nodeid"}})],1),s._v(" "),n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"  是否为必选"}},[n("el-radio-group",{model:{value:s.form.is_default,callback:function(e){s.$set(s.form,"is_default",e)},expression:"form.is_default"}},[n("el-radio",{attrs:{label:1}},[s._v("必选")]),s._v(" "),n("el-radio",{attrs:{label:0}},[s._v("非必选")])],1)],1)],1)],1),s._v(" "),s._l(s.form.value_list,function(r,o){return n("el-row",{key:o,staticClass:"first-item"},[n("div",[n("el-col",{staticStyle:{"line-height":"32px"},attrs:{span:2}},[s._v("\n            参数信息\n          ")]),s._v(" "),n("el-col",{attrs:{span:22}},[n("el-form-item",{attrs:{prop:"value_list."+o+".key",rules:[{required:!0,message:"参数名称不能为空"},{min:1,max:32,message:"参数名称最多32个字符"},{validator:s.letterAndUnderscode}],label:"参数名称(key)"}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"仅支持字母、下划线输入，最多32个字符"},model:{value:r.key,callback:function(e){s.$set(r,"key",e)},expression:"paramKey.key"}})],1),s._v(" "),n("el-form-item",{attrs:{inline:!0,prop:"value_list."+o+".remark",rules:[{required:!0,message:"参数含义不能为空"}],label:"参数含义","label-width":"100px"}},[n("el-input",{staticClass:"input-width",model:{value:r.remark,callback:function(e){s.$set(r,"remark",e)},expression:"paramKey.remark"}})],1),s._v(" "),n("el-form-item",{staticClass:"w50p pl8",attrs:{prop:"value_list."+o+".unit",rules:[{validator:s.lengthLimit.bind(null,16)}],label:"单位"}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"支持中英文、特殊字符，最多16个字符"},model:{value:r.unit,callback:function(e){s.$set(r,"unit",e)},expression:"paramKey.unit"}})],1),s._v(" "),n("el-form-item",{staticClass:"w100p",attrs:{prop:"value_list."+o+".method",rules:[{required:!0,message:"参数可控不能为空"}],label:"参数可控"}},[n("el-checkbox-group",{model:{value:r.method,callback:function(e){s.$set(r,"method",e)},expression:"paramKey.method"}},[n("el-checkbox",{attrs:{label:"set"}},[s._v("set")]),s._v(" "),n("el-checkbox",{attrs:{label:"get"}},[s._v("get")]),s._v(" "),n("el-checkbox",{attrs:{label:"report"}},[s._v("report")]),s._v(" "),n("el-checkbox",{attrs:{label:"alarm"}},[s._v("alarm")])],1)],1),s._v(" "),n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"参数值类型"}},[n("el-radio-group",{on:{change:function(e){s.changeTypeValue(e,r)}},model:{value:r.type,callback:function(e){s.$set(r,"type",e)},expression:"paramKey.type"}},[n("el-radio",{attrs:{label:"string"}},[s._v("string")]),s._v(" "),n("el-radio",{attrs:{label:"int"}},[s._v("int")]),s._v(" "),n("el-radio",{attrs:{label:"object"}},[s._v("object")]),s._v(" "),n("el-radio",{attrs:{label:"float"}},[s._v("float")]),s._v(" "),n("el-radio",{attrs:{label:"array"}},[s._v("array")]),s._v(" "),n("el-radio",{attrs:{label:"bool"}},[s._v("bool")]),s._v(" "),n("el-radio",{attrs:{label:"otc"}},[s._v("otc")])],1)],1),s._v(" "),0<=["string","float","array","bool"].indexOf(r.type)?n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"复选/单选"}},[n("el-radio-group",{model:{value:r.is_checkbox,callback:function(e){s.$set(r,"is_checkbox",e)},expression:"paramKey.is_checkbox"}},[n("el-radio",{attrs:{label:"1"}},[s._v("复选")]),s._v(" "),n("el-radio",{attrs:{label:"0"}},[s._v("单选")])],1)],1):s._e(),s._v(" "),"otc"==r.type?n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"参数值"}},[n("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"数据说明"},model:{value:r.value_list[0].value_des,callback:function(e){s.$set(r.value_list[0],"value_des",e)},expression:"paramKey.value_list[0].value_des"}}),s._v(" "),n("span",[s._v("数据由厂商端输入")])],1):s._e(),s._v(" "),1==r.key_type?[n("el-form-item",{staticClass:"w100p mt0 pl8",attrs:{label:"枚举参数值"}},[n("el-form-item",{attrs:{label:"数据说明","label-width":"290px"}}),s._v(" "),n("el-form-item",{attrs:{label:"传送数据","label-width":"290px"}}),s._v(" "),n("el-form-item",{attrs:{label:"操作","label-width":"85px"}})],1),s._v(" "),s._l(r.value_list,function(t,a){return n("el-form-item",{key:a,staticClass:"w100p mt0",attrs:{label:" "}},[n("el-form-item",{attrs:{prop:"value_list."+o+".value_list."+a+".value_des",rules:[{validator:s.lengthLimit.bind(null,64)}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"最多64个字符"},model:{value:t.value_des,callback:function(e){s.$set(t,"value_des",e)},expression:"valueItem.value_des"}})],1),s._v(" "),n("el-form-item",{attrs:{prop:"value_list."+o+".value_list."+a+".value",rules:[{validator:s.lengthLimit.bind(null,32)},{validator:s.unCN}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"字母数字符号，最多32个字符"},model:{value:t.value,callback:function(e){s.$set(t,"value",e)},expression:"valueItem.value"}})],1),s._v(" "),0<a?n("el-form-item",{staticStyle:{"padding-left":"25px"},attrs:{label:""}},[n("i",{staticClass:"el-icon-delete",on:{click:function(e){s.delEnumerateItem(a,r)}}})]):s._e()],1)}),s._v(" "),n("el-form-item",{staticClass:"w100p",attrs:{label:" "},scopedSlots:s._u([{key:"default",fn:function(e){return[n("a",{staticClass:"addbtn",attrs:{href:"javascript:void(0);"},on:{click:function(e){s.addEnumerateItem(r)}}},[n("i",{staticClass:"el-icon-plus"}),s._v(" 添加更多参数值\n                  ")])]}}])})]:s._e(),s._v(" "),2==r.key_type?n("div",[n("el-form-item",{staticClass:"w100p mt0 pl8",attrs:{label:"参数范围值"}},[r.value_list[1]?n("el-form-item",{attrs:{prop:"value_list."+o+".value_list.1.value",rules:[{required:!0,message:"最小值不能为空"},{type:"number",message:"最小值为数字"}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入数据最小值"},model:{value:r.value_list[1].value,callback:function(e){s.$set(r.value_list[1],"value",s._n(e))},expression:"paramKey.value_list[1].value"}})],1):s._e(),s._v(" "),r.value_list[2]?n("el-form-item",{attrs:{prop:"value_list."+o+".value_list.2.value",rules:[{required:!0,message:"最大值不能为空"},{type:"number",message:"最大值为数字"}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入数据最大值"},model:{value:r.value_list[2].value,callback:function(e){s.$set(r.value_list[2],"value",s._n(e))},expression:"paramKey.value_list[2].value"}})],1):s._e()],1)],1):s._e(),s._v(" "),3==r.key_type?[s._l(r.list,function(l,i){return n("div",{key:i,staticClass:"sec-item"},[n("el-form-item",{attrs:{prop:"value_list."+o+".list."+i+".key",rules:[{required:!0,message:"参数名称不能为空"},{min:1,max:32,message:"参数名称最多32个字符"},{validator:s.letterAndUnderscode}],label:"参数名称(key)"}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"仅支持字母、下划线输入，最多32个字符"},model:{value:l.key,callback:function(e){s.$set(l,"key",e)},expression:"em.key"}})],1),s._v(" "),n("el-form-item",{attrs:{prop:"value_list."+o+".list."+i+".remark",rules:[{required:!0,message:"参数含义不能为空"}],label:"参数含义","label-width":"100px"}},[n("el-input",{staticClass:"input-width",model:{value:l.remark,callback:function(e){s.$set(l,"remark",e)},expression:"em.remark"}})],1),s._v(" "),n("el-form-item",{staticClass:"pl8",attrs:{prop:"value_list."+o+".list."+i+".unit",rules:[{validator:s.lengthLimit.bind(null,16)}],label:"单位"}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"支持中英文、特殊字符，最多16个字符"},model:{value:l.unit,callback:function(e){s.$set(l,"unit",e)},expression:"em.unit"}})],1),s._v(" "),n("el-form-item",{staticClass:"w100p",attrs:{prop:"value_list."+o+".list."+i+".method",rules:[{required:!0,message:"参数可控不能为空"}],label:"参数可控"}},[n("el-checkbox-group",{model:{value:l.method,callback:function(e){s.$set(l,"method",e)},expression:"em.method"}},[n("el-checkbox",{attrs:{label:"set"}},[s._v("set")]),s._v(" "),n("el-checkbox",{attrs:{label:"get"}},[s._v("get")]),s._v(" "),n("el-checkbox",{attrs:{label:"report"}},[s._v("report")]),s._v(" "),n("el-checkbox",{attrs:{label:"alarm"}},[s._v("alarm")])],1)],1),s._v(" "),n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"参数值类型"}},[n("el-radio-group",{on:{change:function(e){s.changeTypeValue(e,l)}},model:{value:l.type,callback:function(e){s.$set(l,"type",e)},expression:"em.type"}},[n("el-radio",{attrs:{label:"string"}},[s._v("string")]),s._v(" "),n("el-radio",{attrs:{label:"int"}},[s._v("int")]),s._v(" "),n("el-radio",{attrs:{label:"float"}},[s._v("float")]),s._v(" "),n("el-radio",{attrs:{label:"array"}},[s._v("array")]),s._v(" "),n("el-radio",{attrs:{label:"bool"}},[s._v("bool")]),s._v(" "),n("el-radio",{attrs:{label:"otc"}},[s._v("otc")])],1)],1),s._v(" "),n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"复选/单选"}},[0<=["string","float","array","bool"].indexOf(l.type)?n("el-radio-group",{model:{value:l.is_checkbox,callback:function(e){s.$set(l,"is_checkbox",e)},expression:"em.is_checkbox"}},[n("el-radio",{attrs:{label:"1"}},[s._v("复选")]),s._v(" "),n("el-radio",{attrs:{label:"0"}},[s._v("单选")])],1):s._e()],1),s._v(" "),"otc"==l.type?n("el-form-item",{staticClass:"w100p pl8",attrs:{label:"参数值"}},[n("el-input",{staticStyle:{width:"50%"},model:{value:l.value_list[0].value_des,callback:function(e){s.$set(l.value_list[0],"value_des",e)},expression:"em.value_list[0].value_des"}}),s._v(" "),n("span",[s._v("数据由厂商端输入")])],1):s._e(),s._v(" "),1==l.key_type?[n("el-form-item",{staticClass:"w100p mt0 pl8",attrs:{label:"枚举参数值"}},[n("el-form-item",{attrs:{label:"参数名称(key)","label-width":"290px"}}),s._v(" "),n("el-form-item",{attrs:{label:"传送数据","label-width":"290px"}}),s._v(" "),n("el-form-item",{attrs:{label:"操作","label-width":"60px"}})],1),s._v(" "),s._l(l.value_list,function(t,a){return n("el-form-item",{key:a,staticClass:"w100p mt0",attrs:{label:" "}},[n("el-form-item",{attrs:{prop:"value_list."+o+".list."+i+".value_list."+a+".value_des",rules:[{validator:s.lengthLimit.bind(null,64)}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"最多64个字符"},model:{value:t.value_des,callback:function(e){s.$set(t,"value_des",e)},expression:"vi.value_des"}})],1),s._v(" "),n("el-form-item",{attrs:{prop:"value_list."+o+".list."+i+".value_list."+a+".value",rules:[{validator:s.lengthLimit.bind(null,32)},{validator:s.unCN}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"字母数字符号，最多32个字符"},model:{value:t.value,callback:function(e){s.$set(t,"value",e)},expression:"vi.value"}})],1),s._v(" "),0<a?n("el-form-item",{staticStyle:{"padding-left":"25px"},attrs:{label:""}},[n("i",{staticClass:"el-icon-delete",on:{click:function(e){s.delEnumerateItem(a,l)}}})]):s._e()],1)}),s._v(" "),n("el-form-item",{staticClass:"w100p",attrs:{label:" "},scopedSlots:s._u([{key:"default",fn:function(e){return[n("a",{staticClass:"addbtn",attrs:{href:"javascript:void(0);"},on:{click:function(e){s.addEnumerateItem(l)}}},[n("i",{staticClass:"el-icon-plus"}),s._v(" 添加更多参数值\n                      ")])]}}])})]:s._e(),s._v(" "),2==l.key_type?n("div",[n("el-form-item",{staticClass:"w100p mt0 pl8",attrs:{label:"参数范围值"}},[l.value_list[1]?n("el-form-item",{attrs:{prop:"value_list."+o+".list."+i+".value_list.1.value",rules:[{required:!0,message:"最小值不能为空"},{type:"number",message:"最小值为数字"}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入数据最小值"},model:{value:l.value_list[1].value,callback:function(e){s.$set(l.value_list[1],"value",s._n(e))},expression:"em.value_list[1].value"}})],1):s._e(),s._v(" "),l.value_list[2]?n("el-form-item",{attrs:{prop:"value_list."+o+".list."+i+".value_list.2.value",rules:[{required:!0,message:"最大值不能为空"},{type:"number",message:"最大值为数字"}],label:""}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入数据最大值"},model:{value:l.value_list[2].value,callback:function(e){s.$set(l.value_list[2],"value",s._n(e))},expression:"em.value_list[2].value"}})],1):s._e()],1)],1):s._e(),s._v(" "),0<i?n("div",{staticStyle:{"text-align":"right"}},[n("span",{staticClass:"el-icon-delete",attrs:{title:"删除参数"},on:{click:function(e){s.deleteAttr(r,i)}}})]):s._e()],2)}),s._v(" "),n("a",{staticClass:"addAttr",attrs:{href:"javascript:void(0);"},on:{click:function(e){s.addAttribute(r)}}},[n("i",{staticClass:"el-icon-plus"}),s._v(" 新增属性")])]:s._e()],2),s._v(" "),0<o?n("div",{staticStyle:{"text-align":"right"}},[n("span",{staticClass:"el-icon-delete",attrs:{title:"删除参数"},on:{click:function(e){s.deleteParams(o)}}})]):s._e()],1)])}),s._v(" "),n("div",{staticClass:"buttonPos"},[n("el-button",{staticClass:"addParams",attrs:{type:"ghost"},on:{click:s.addParams}},[s._v("新增参数")])],1)],2),s._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:s.closeDialog}},[s._v("取 消")]),s._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:s.confirmTechnical}},[s._v("添 加")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(n,d,!1,function(e){a("qu1P")},"data-v-15d1ac78",null);t.default=c.exports},qu1P:function(e,t,a){var l=a("PJiV");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("f4d71b74",l,!0)},tD9m:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,".addCategoryPage .el-form-item__error{padding:5px 15px!important}.addCategoryPage .desTitle,.addCategoryPage .desTitleTop{border-bottom:1px solid #ddd;line-height:30px;height:30px}.addCategoryPage .desTitleTop{width:100%}.addCategoryPage .gavin .avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;width:110px;height:110px}.addCategoryPage .gavin .avatar-uploader .el-upload:hover{border-color:#409eff}.addCategoryPage .avatar-uploader-icon{font-size:22px;color:#8c939d;width:110px;height:110px;line-height:110px;text-align:center}.addCategoryPage .avatar-uploader{display:inline-block;margin-right:15px}.addCategoryPage .avatar-uploader:last-child{margin-right:0}.addCategoryPage .avatar{width:110px;height:110px;display:block}.addCategoryPage .line25 .el-form-item__label{line-height:25px}.addCategoryPage .el-icon-delete{cursor:pointer}.addCategoryPage .fileuploadItem{display:table-cell;position:relative}.addCategoryPage .fileuploadItem .disabled .el-upload{background-color:#f5f7fa;cursor:not-allowed}.addCategoryPage .fileuploadItem:last-child .avatar-uploader{margin-right:0!important}.addCategoryPage .fileuploadItem .file_upload_img_des{position:absolute;top:109px;text-align:center;color:#999;font-size:12px;left:57px;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:110px}.addCategoryPage .el-tooltip__popper{max-width:300px}","",{version:3,sources:["d:/work/PomeloHomeOpen_Sys/src/views/typeManagement/addCategoryDetail.vue"],names:[],mappings:"AACA,sCACE,0BAA6B,CAC9B,AAMD,yDAJE,6BAA8B,AAC9B,iBAAkB,AAClB,WAAa,CAOd,AALD,8BAIE,UAAY,CACb,AACD,oDACE,0BAA2B,AAC3B,kBAAmB,AACnB,eAAgB,AAChB,kBAAmB,AACnB,gBAAiB,AACjB,YAAa,AACb,YAAc,CACf,AACD,0DACE,oBAAsB,CACvB,AACD,uCACE,eAAgB,AAChB,cAAe,AACf,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,iBAAmB,CACpB,AACD,kCACE,qBAAsB,AACtB,iBAAmB,CACpB,AACD,6CACE,cAAkB,CACnB,AACD,yBACE,YAAa,AACb,aAAc,AACd,aAAe,CAChB,AACD,8CACE,gBAAkB,CACnB,AACD,iCACE,cAAgB,CACjB,AACD,iCACE,mBAAoB,AACpB,iBAAmB,CACpB,AACD,sDACE,yBAA0B,AAC1B,kBAAoB,CACrB,AACD,6DACE,wBAA6B,CAC9B,AACD,sDACE,kBAAmB,AACnB,UAAW,AACX,kBAAmB,AACnB,WAAY,AACZ,eAAgB,AAChB,UAAW,AACX,mCAAoC,AAC5B,2BAA4B,AACpC,WAAa,CACd,AACD,qCACE,eAAiB,CAClB",file:"addCategoryDetail.vue",sourcesContent:["\n.addCategoryPage .el-form-item__error {\n  padding: 5px 15px !important;\n}\n.addCategoryPage .desTitle {\n  border-bottom: 1px #ddd solid;\n  line-height: 30px;\n  height: 30px;\n}\n.addCategoryPage .desTitleTop {\n  border-bottom: 1px #ddd solid;\n  line-height: 30px;\n  height: 30px;\n  width: 100%;\n}\n.addCategoryPage .gavin .avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  width: 110px;\n  height: 110px;\n}\n.addCategoryPage .gavin .avatar-uploader .el-upload:hover {\n  border-color: #409EFF;\n}\n.addCategoryPage .avatar-uploader-icon {\n  font-size: 22px;\n  color: #8c939d;\n  width: 110px;\n  height: 110px;\n  line-height: 110px;\n  text-align: center;\n}\n.addCategoryPage .avatar-uploader {\n  display: inline-block;\n  margin-right: 15px;\n}\n.addCategoryPage .avatar-uploader:last-child {\n  margin-right: 0px;\n}\n.addCategoryPage .avatar {\n  width: 110px;\n  height: 110px;\n  display: block;\n}\n.addCategoryPage .line25 .el-form-item__label {\n  line-height: 25px;\n}\n.addCategoryPage .el-icon-delete {\n  cursor: pointer;\n}\n.addCategoryPage .fileuploadItem {\n  display: table-cell;\n  position: relative;\n}\n.addCategoryPage .fileuploadItem .disabled .el-upload {\n  background-color: #f5f7fa;\n  cursor: not-allowed;\n}\n.addCategoryPage .fileuploadItem:last-child .avatar-uploader {\n  margin-right: 0px !important;\n}\n.addCategoryPage .fileuploadItem .file_upload_img_des {\n  position: absolute;\n  top: 109px;\n  text-align: center;\n  color: #999;\n  font-size: 12px;\n  left: 57px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 110px;\n}\n.addCategoryPage .el-tooltip__popper {\n  max-width: 300px;\n}\n"],sourceRoot:""}])}});