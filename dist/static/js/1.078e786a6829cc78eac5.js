webpackJsonp([1,49,51],{"/Dxa":function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".addParams[data-v-7aae5509]{margin-top:15px}.addAttr[data-v-7aae5509]{margin-left:140px;color:#409eff}.w100p[data-v-7aae5509]{width:100%}.w50p[data-v-7aae5509]{width:50%}.input-width[data-v-7aae5509]{width:285px}.addbtn[data-v-7aae5509]{font-size:12px;color:#409eff}.first-item[data-v-7aae5509],.sec-item[data-v-7aae5509]{border:1px dashed #d2d2d2;padding-top:15px}.sec-item[data-v-7aae5509]{width:98%}.mt0[data-v-7aae5509]{margin-bottom:0}.pl8 .el-form-item__label[data-v-7aae5509]{padding-left:10px}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/typeManagement/addAttribute.vue"],names:[],mappings:"AACA,4BACI,eAAiB,CACpB,AACD,0BACI,kBAAmB,AACnB,aAAe,CAClB,AACD,wBACI,UAAY,CACf,AACD,uBACI,SAAW,CACd,AACD,8BACI,WAAa,CAChB,AACD,yBACI,eAAgB,AAChB,aAAc,CACjB,AAKD,wDAHI,0BAA2B,AAC3B,gBAAkB,CAMrB,AAJD,2BAGI,SAAW,CACd,AACD,sBACI,eAAiB,CACpB,AACD,2CACI,iBAAmB,CACtB",file:"addAttribute.vue",sourcesContent:["\n.addParams[data-v-7aae5509]{\n    margin-top: 15px;\n}\n.addAttr[data-v-7aae5509]{\n    margin-left: 140px;\n    color: #409EFF;\n}\n.w100p[data-v-7aae5509]{\n    width: 100%;\n}\n.w50p[data-v-7aae5509]{\n    width: 50%;\n}\n.input-width[data-v-7aae5509]{\n    width: 285px;\n}\n.addbtn[data-v-7aae5509]{\n    font-size: 12px;\n    color:#409EFF;\n}\n.first-item[data-v-7aae5509]{\n    border: 1px dashed #d2d2d2;\n    padding-top: 15px;\n}\n.sec-item[data-v-7aae5509]{\n    border: 1px dashed #d2d2d2;\n    padding-top: 15px;\n    width: 98%;\n}\n.mt0[data-v-7aae5509]{\n    margin-bottom: 0;\n}\n.pl8 .el-form-item__label[data-v-7aae5509]{\n    padding-left: 10px;\n}\n"],sourceRoot:""}])},"/vah":function(e,t,a){var l=a("/Dxa");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("44d116e9",l,!0)},"433A":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"attDialog"},[a("el-dialog",{attrs:{"before-close":e.closeDialog,top:e.top,center:!0,width:"1000px",title:e.dialogTitle,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"attForm",attrs:{inline:!0,rules:e.rules,model:e.form,"label-position":"left","label-width":"140px"}},[a("el-row",[a("el-col",{staticStyle:{"line-height":"32px"},attrs:{span:2}},[e._v("\n                    属性信息\n                ")]),e._v(" "),a("el-col",{attrs:{span:22}},[a("el-form-item",{staticClass:"w100p",attrs:{label:"属性名称(node_ID)",prop:"nodeid"}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"仅支持字母、下划线输入，最多32个字符"},model:{value:e.form.nodeid,callback:function(t){e.$set(e.form,"nodeid",t)},expression:"form.nodeid"}})],1),e._v(" "),a("el-form-item",{staticClass:"w100p pl8",attrs:{label:"  是否为必选"}},[a("el-radio-group",{model:{value:e.form.is_default,callback:function(t){e.$set(e.form,"is_default",t)},expression:"form.is_default"}},[a("el-radio",{attrs:{label:1}},[e._v("必选")]),e._v(" "),a("el-radio",{attrs:{label:0}},[e._v("非必选")])],1)],1)],1)],1),e._v(" "),e._l(e.form.value_list,function(t,l){return a("el-row",{key:l,staticClass:"first-item"},[a("div",[a("el-col",{staticStyle:{"line-height":"32px"},attrs:{span:2}},[e._v("\n                        参数信息\n                    ")]),e._v(" "),a("el-col",{attrs:{span:22}},[a("el-form-item",{attrs:{label:"参数名称(key)",prop:"value_list."+l+".key",rules:[{required:!0,message:"参数名称不能为空"},{min:1,max:32,message:"参数名称最多32个字符"},{validator:e.letterAndUnderscode}]}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"仅支持字母、下划线输入，最多32个字符"},model:{value:t.key,callback:function(a){e.$set(t,"key",a)},expression:"paramKey.key"}})],1),e._v(" "),a("el-form-item",{attrs:{inline:!0,label:"参数含义","label-width":"100px",prop:"value_list."+l+".remark",rules:[{required:!0,message:"参数含义不能为空"}]}},[a("el-input",{staticClass:"input-width",model:{value:t.remark,callback:function(a){e.$set(t,"remark",a)},expression:"paramKey.remark"}})],1),e._v(" "),a("el-form-item",{staticClass:"w50p pl8",attrs:{label:"单位",prop:"value_list."+l+".unit",rules:[{validator:e.lengthLimit.bind(null,16)}]}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"支持中英文、特殊字符，最多16个字符"},model:{value:t.unit,callback:function(a){e.$set(t,"unit",a)},expression:"paramKey.unit"}})],1),e._v(" "),a("el-form-item",{staticClass:"w100p",attrs:{label:"参数可控",prop:"value_list."+l+".method",rules:[{required:!0,message:"参数可控不能为空"}]}},[a("el-checkbox-group",{model:{value:t.method,callback:function(a){e.$set(t,"method",a)},expression:"paramKey.method"}},[a("el-checkbox",{attrs:{label:"set"}},[e._v("set")]),e._v(" "),a("el-checkbox",{attrs:{label:"get"}},[e._v("get")]),e._v(" "),a("el-checkbox",{attrs:{label:"report"}},[e._v("report")]),e._v(" "),a("el-checkbox",{attrs:{label:"alarm"}},[e._v("alarm")])],1)],1),e._v(" "),a("el-form-item",{staticClass:"w100p pl8",attrs:{label:"参数值类型"}},[a("el-radio-group",{on:{change:function(a){e.changeTypeValue(a,t)}},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"paramKey.type"}},[a("el-radio",{attrs:{label:"string"}},[e._v("string")]),e._v(" "),a("el-radio",{attrs:{label:"int"}},[e._v("int")]),e._v(" "),a("el-radio",{attrs:{label:"object"}},[e._v("object")]),e._v(" "),a("el-radio",{attrs:{label:"float"}},[e._v("float")]),e._v(" "),a("el-radio",{attrs:{label:"array"}},[e._v("array")]),e._v(" "),a("el-radio",{attrs:{label:"bool"}},[e._v("bool")]),e._v(" "),a("el-radio",{attrs:{label:"otc"}},[e._v("otc")])],1)],1),e._v(" "),["string","float","array","bool"].indexOf(t.type)>=0?a("el-form-item",{staticClass:"w100p pl8",attrs:{label:"复选/单选"}},[a("el-radio-group",{model:{value:t.is_checkbox,callback:function(a){e.$set(t,"is_checkbox",a)},expression:"paramKey.is_checkbox"}},[a("el-radio",{attrs:{label:"1"}},[e._v("复选")]),e._v(" "),a("el-radio",{attrs:{label:"0"}},[e._v("单选")])],1)],1):e._e(),e._v(" "),"otc"==t.type?a("el-form-item",{staticClass:"w100p pl8",attrs:{label:"参数值"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"数据说明"},model:{value:t.value_list[0].value,callback:function(a){e.$set(t.value_list[0],"value",a)},expression:"paramKey.value_list[0].value"}}),e._v(" "),a("span",[e._v("数据由厂商端输入")])],1):e._e(),e._v(" "),1==t.key_type?[a("el-form-item",{staticClass:"w100p mt0 pl8",attrs:{label:"枚举参数值"}},[a("el-form-item",{attrs:{label:"数据说明","label-width":"290px"}}),e._v(" "),a("el-form-item",{attrs:{label:"传送数据","label-width":"290px"}}),e._v(" "),a("el-form-item",{attrs:{label:"操作","label-width":"85px"}})],1),e._v(" "),e._l(t.value_list,function(i,s){return a("el-form-item",{key:s,staticClass:"w100p mt0",attrs:{label:" "}},[a("el-form-item",{attrs:{label:"",prop:"value_list."+l+".value_list."+s+".value_des",rules:[{validator:e.lengthLimit.bind(null,64)}]}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"最多64个字符"},model:{value:i.value_des,callback:function(t){e.$set(i,"value_des",t)},expression:"valueItem.value_des"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"value_list."+l+".value_list."+s+".value",rules:[{validator:e.lengthLimit.bind(null,32)},{validator:e.unCN}]}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"字母数字符号，最多32个字符"},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"valueItem.value"}})],1),e._v(" "),s>0?a("el-form-item",{staticStyle:{"padding-left":"25px"},attrs:{label:""}},[a("i",{staticClass:"el-icon-delete",on:{click:function(a){e.delEnumerateItem(s,t)}}})]):e._e()],1)}),e._v(" "),a("el-form-item",{staticClass:"w100p",attrs:{label:" "},scopedSlots:e._u([{key:"default",fn:function(l){return[a("a",{staticClass:"addbtn",attrs:{href:"javascript:void(0);"},on:{click:function(a){e.addEnumerateItem(t)}}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 添加更多参数值\n                                    ")])]}}])})]:e._e(),e._v(" "),2==t.key_type?a("div",[a("el-form-item",{staticClass:"w100p mt0 pl8",attrs:{label:"参数范围值"}},[t.value_list[1]?a("el-form-item",{attrs:{label:"",prop:"value_list."+l+".value_list.1.value",rules:[{required:!0,message:"最小值不能为空"},{type:"number",message:"最小值为数字"}]}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入数据最小值"},model:{value:t.value_list[1].value,callback:function(a){e.$set(t.value_list[1],"value",e._n(a))},expression:"paramKey.value_list[1].value"}})],1):e._e(),e._v(" "),t.value_list[2]?a("el-form-item",{attrs:{label:"",prop:"value_list."+l+".value_list.2.value",rules:[{required:!0,message:"最大值不能为空"},{type:"number",message:"最大值为数字"}]}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入数据最大值"},model:{value:t.value_list[2].value,callback:function(a){e.$set(t.value_list[2],"value",e._n(a))},expression:"paramKey.value_list[2].value"}})],1):e._e()],1)],1):e._e(),e._v(" "),3==t.key_type?[e._l(t.list,function(i,s){return a("div",{key:s,staticClass:"sec-item"},[a("el-form-item",{attrs:{label:"参数名称(key)",prop:"value_list."+l+".list."+s+".key",rules:[{required:!0,message:"参数名称不能为空"},{min:1,max:32,message:"参数名称最多32个字符"},{validator:e.letterAndUnderscode}]}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"仅支持字母、下划线输入，最多32个字符"},model:{value:i.key,callback:function(t){e.$set(i,"key",t)},expression:"em.key"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"参数含义","label-width":"100px",prop:"value_list."+l+".list."+s+".remark",rules:[{required:!0,message:"参数含义不能为空"}]}},[a("el-input",{staticClass:"input-width",model:{value:i.remark,callback:function(t){e.$set(i,"remark",t)},expression:"em.remark"}})],1),e._v(" "),a("el-form-item",{staticClass:"pl8",attrs:{label:"单位",prop:"value_list."+l+".list."+s+".unit",rules:[{validator:e.lengthLimit.bind(null,16)}]}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"支持中英文、特殊字符，最多16个字符"},model:{value:i.unit,callback:function(t){e.$set(i,"unit",t)},expression:"em.unit"}})],1),e._v(" "),a("el-form-item",{staticClass:"w100p",attrs:{label:"参数可控",prop:"value_list."+l+".list."+s+".method",rules:[{required:!0,message:"参数可控不能为空"}]}},[a("el-checkbox-group",{model:{value:i.method,callback:function(t){e.$set(i,"method",t)},expression:"em.method"}},[a("el-checkbox",{attrs:{label:"set"}},[e._v("set")]),e._v(" "),a("el-checkbox",{attrs:{label:"get"}},[e._v("get")]),e._v(" "),a("el-checkbox",{attrs:{label:"report"}},[e._v("report")]),e._v(" "),a("el-checkbox",{attrs:{label:"alarm"}},[e._v("alarm")])],1)],1),e._v(" "),a("el-form-item",{staticClass:"w100p pl8",attrs:{label:"参数值类型"}},[a("el-radio-group",{on:{change:function(t){e.changeTypeValue(t,i)}},model:{value:i.type,callback:function(t){e.$set(i,"type",t)},expression:"em.type"}},[a("el-radio",{attrs:{label:"string"}},[e._v("string")]),e._v(" "),a("el-radio",{attrs:{label:"int"}},[e._v("int")]),e._v(" "),a("el-radio",{attrs:{label:"float"}},[e._v("float")]),e._v(" "),a("el-radio",{attrs:{label:"array"}},[e._v("array")]),e._v(" "),a("el-radio",{attrs:{label:"bool"}},[e._v("bool")]),e._v(" "),a("el-radio",{attrs:{label:"otc"}},[e._v("otc")])],1)],1),e._v(" "),a("el-form-item",{staticClass:"w100p pl8",attrs:{label:"复选/单选"}},[["string","float","array","bool"].indexOf(i.type)>=0?a("el-radio-group",{model:{value:i.is_checkbox,callback:function(t){e.$set(i,"is_checkbox",t)},expression:"em.is_checkbox"}},[a("el-radio",{attrs:{label:"1"}},[e._v("复选")]),e._v(" "),a("el-radio",{attrs:{label:"0"}},[e._v("单选")])],1):e._e()],1),e._v(" "),"otc"==i.type?a("el-form-item",{staticClass:"w100p pl8",attrs:{label:"参数值"}},[a("el-input",{staticStyle:{width:"50%"},model:{value:i.value_list[0].value,callback:function(t){e.$set(i.value_list[0],"value",t)},expression:"em.value_list[0].value"}}),e._v(" "),a("span",[e._v("数据由厂商端输入")])],1):e._e(),e._v(" "),1==i.key_type?[a("el-form-item",{staticClass:"w100p mt0 pl8",attrs:{label:"枚举参数值"}},[a("el-form-item",{attrs:{label:"参数名称(key)","label-width":"290px"}}),e._v(" "),a("el-form-item",{attrs:{label:"传送数据","label-width":"290px"}}),e._v(" "),a("el-form-item",{attrs:{label:"操作","label-width":"60px"}})],1),e._v(" "),e._l(i.value_list,function(t,o){return a("el-form-item",{key:o,staticClass:"w100p mt0",attrs:{label:" "}},[a("el-form-item",{attrs:{label:"",prop:"value_list."+l+".list."+s+".value_list."+o+".value_des",rules:[{validator:e.lengthLimit.bind(null,64)}]}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"最多64个字符"},model:{value:t.value_des,callback:function(a){e.$set(t,"value_des",a)},expression:"vi.value_des"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"value_list."+l+".list."+s+".value_list."+o+".value",rules:[{validator:e.lengthLimit.bind(null,32)},{validator:e.unCN}]}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"字母数字符号，最多32个字符"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"vi.value"}})],1),e._v(" "),o>0?a("el-form-item",{staticStyle:{"padding-left":"25px"},attrs:{label:""}},[a("i",{staticClass:"el-icon-delete",on:{click:function(t){e.delEnumerateItem(o,i)}}})]):e._e()],1)}),e._v(" "),a("el-form-item",{staticClass:"w100p",attrs:{label:" "},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{staticClass:"addbtn",attrs:{href:"javascript:void(0);"},on:{click:function(t){e.addEnumerateItem(i)}}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 添加更多参数值\n                                            ")])]}}])})]:e._e(),e._v(" "),2==i.key_type?a("div",[a("el-form-item",{staticClass:"w100p mt0 pl8",attrs:{label:"参数范围值"}},[i.value_list[1]?a("el-form-item",{attrs:{label:"",prop:"value_list."+l+".list."+s+".value_list.1.value",rules:[{required:!0,message:"最小值不能为空"},{type:"number",message:"最小值为数字"}]}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入数据最小值"},model:{value:i.value_list[1].value,callback:function(t){e.$set(i.value_list[1],"value",e._n(t))},expression:"em.value_list[1].value"}})],1):e._e(),e._v(" "),i.value_list[2]?a("el-form-item",{attrs:{label:"",prop:"value_list."+l+".list."+s+".value_list.2.value",rules:[{required:!0,message:"最大值不能为空"},{type:"number",message:"最大值为数字"}]}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入数据最大值"},model:{value:i.value_list[2].value,callback:function(t){e.$set(i.value_list[2],"value",e._n(t))},expression:"em.value_list[2].value"}})],1):e._e()],1)],1):e._e(),e._v(" "),s>0?a("div",{staticStyle:{"text-align":"right"}},[a("span",{staticClass:"el-icon-delete",attrs:{title:"删除参数"},on:{click:function(a){e.deleteAttr(t,s)}}})]):e._e()],2)}),e._v(" "),a("a",{staticClass:"addAttr",attrs:{href:"javascript:void(0);"},on:{click:function(a){e.addAttribute(t)}}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 新增属性")])]:e._e()],2),e._v(" "),l>0?a("div",{staticStyle:{"text-align":"right"}},[a("span",{staticClass:"el-icon-delete",attrs:{title:"删除参数"},on:{click:function(t){e.deleteParams(l)}}})]):e._e()],1)])}),e._v(" "),a("div",{staticClass:"buttonPos"},[a("el-button",{staticClass:"addParams",attrs:{type:"ghost"},on:{click:e.addParams}},[e._v("新增参数")])],1)],2),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.confirmTechnical}},[e._v("添 加")])],1)],1)],1)},i=[],s={render:l,staticRenderFns:i};t.a=s},"9bBU":function(e,t,a){a("mClu");var l=a("FeBl").Object;e.exports=function(e,t,a){return l.defineProperty(e,t,a)}},C4MV:function(e,t,a){e.exports={default:a("9bBU"),__esModule:!0}},DZhL:function(e,t,a){"use strict";var l=a("bOdI"),i=a.n(l),s=a("zL8q"),o=(a.n(s),a("Vo7i")),r=(a("VSB1"),a("TIfe")),n=a("bzuE"),d=a("bFNI"),c=a("i224");t.a={name:"existedCategory",computed:{},created:function(){},mounted:function(){this.getDeviceInfo()},data:function(){var e;return e={isEdit:!1,typeid:this.$route.query.id,token:Object(r.a)(),isLoadData:!1},i()(e,"isEdit",!1),i()(e,"editText","编辑引导页"),i()(e,"product",{}),i()(e,"type",{}),i()(e,"business",{}),i()(e,"brand",{}),i()(e,"model",{}),i()(e,"is_evergrande",0),i()(e,"COLTD",n.a),i()(e,"form",{}),i()(e,"addType",""),i()(e,"deviceAddTypeList",[]),i()(e,"rules",{type:[{required:!0,message:"请选择产品品类",trigger:"change"}],add_type:[{required:!0,message:"请选择产品添加方式",trigger:"change"}],add1_tips:[{required:!0,message:"请输入提示文字",trigger:"blur"},{max:255,message:"提示文字不能超过255个字符",trigger:"blur"}],add1_button:[{required:!0,message:"请输入按钮文字",trigger:"blur"},{max:8,message:"按钮文字不能超过8个字符",trigger:"blur"}],add2_tips:[{required:!0,message:"请输入提示文字",trigger:"blur"},{max:255,message:"提示文字不能超过255个字符",trigger:"blur"}],reset_tips:[{required:!0,message:"请输入重置提示文字",trigger:"blur"},{max:255,message:"重置提示文字不能超过255个字符",trigger:"blur"}]}),e},methods:{getDeviceSelectAddtype:function(){var e=this;Object(o.a)({url:"/device/deviceAddtype",method:"post",data:{token:this.token}}).then(function(t){e.deviceAddTypeList=t})},getDeviceInfo:function(){var e=this;Object(o.a)({url:"/device/deviceInfo",method:"post",data:{id:this.typeid}}).then(function(t){e.form=t,3==e.form.type&&(e.is_evergrande=1),e.form.add_type="0"==e.form.add_type?"":Number(e.form.add_type),e.form.offline_hint||(e.form.offline_hint=""),e.isLoadData=!0,e.handleImgAddToken(),e.getDeviceSelectAddtype()})},handleImgAddToken:function(){this.form.base_img.token=this.token,this.form.reset_img.token=this.token,this.form.add1_img.token=this.token,this.form.add2_img.token=this.token},handleAvatarSuccess:function(e,t){var a=e.result;switch(a.type){case 23:this.form.base_img=a,this.form.base_img.token=this.token;break;case 25:this.form.reset_img=a,this.form.reset_img.token=this.token}this.$message({type:"success",message:"上传成功！"})},handleAddImg1Success:function(e,t){this.form.add1_img=e.result,this.form.add1_img.token=this.token,this.$message({type:"success",message:"上传成功！"})},handleAddImg2Success:function(e,t){this.form.add2_img=e.result,this.form.add2_img.token=this.token,this.$message({type:"success",message:"上传成功！"})},beforeAvatarUpload:function(e){console.log(e);var t="image/png"===e.type,a=e.size/1024/1024<5;return t||this.$message.error("请上传5M大小内PNG格式的文件"),a||this.$message.error("请上传5M大小内PNG格式的文件"),t&&a},delectDevice:function(){var e=this;Object(o.a)({url:"/device/deviceDel",method:"post",data:{id:this.$route.query.id}}).then(function(t){e.$message({showClose:!0,message:"删除成功！",type:"success"}),setTimeout(function(){e.$router.push({path:"/typeManagement/deviceManager"})},2e3)})},editDevice:function(){var e=this;this.isEdit?this.$confirm("是否确认保存修改后引导页信息？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.saveDeviceInfo()}).catch(function(){e.isEdit=!1,e.editText="编辑引导页"}):(this.isEdit=!0,this.editText="确定并提交修改")},saveDeviceInfo:function(){var e=this;this.$refs.ruleForm.validate(function(t){t?(e.editText="编辑引导页",e.form.token=e.token,Object(o.a)({url:"/device/deviceEdit",method:"post",data:e.form}).then(function(t){e.isEdit=!1,e.$message({type:"success",message:"编辑引导页成功!"})}).catch(function(t){e.$message({type:"error",message:t.msg})})):e.$message({type:"error",message:"请把表单填写完整再提交修改！"})})},handleDelEvent:function(){var e=this;this.$confirm("是否确认删除此引导页，删除不能恢复。","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.delectDevice()}).catch(function(){})},handleBackEvent:function(){var e=this;this.isEdit?this.$confirm("是否确认返回? 所修改的信息将不会被保存!","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$router.push({path:"/typeManagement/deviceManager"})}).catch(function(){}):this.$router.push({path:"/typeManagement/deviceManager"})},addTechnical:function(){},getAttr:function(){},getTech:function(e){var t=this;console.log(e),Object(o.a)({url:"producttype/technologyadd",method:"post",data:e}).then(function(e){t.$message({type:"success",message:"添加方案成功！"}),t.getTechList(1),t.getTechList(2),t.getTechList(3)}).catch(function(e){t.$message({type:"error",message:e.msg})})},getTechList:function(e){var t=this;Object(o.a)({url:"producttype/technologylists",method:"post",data:{token:Object(r.a)(),type_id:this.typeid,technology_type:e}}).then(function(a){switch(e){case 1:t.technical_wifi=a.list;break;case 2:t.technical_zigbee=a.list;break;case 3:t.technical_bluetooth=a.list}}).catch(function(e){t.$message({type:"error",message:e.msg})})},arrayWifiSpanMethod:function(e){var t=(e.row,e.column,e.rowIndex);if(0===e.columnIndex)return 0===t?{rowspan:this.technical_wifi.length,colspan:1}:{rowspan:0,colspan:0}},arrayBlueToothSpanMethod:function(e){var t=(e.row,e.column,e.rowIndex);if(0===e.columnIndex)return 0===t?{rowspan:this.technical_bluetooth.length,colspan:1}:{rowspan:0,colspan:0}},arrayZigbeeSpanMethod:function(e){var t=(e.row,e.column,e.rowIndex);if(0===e.columnIndex)return 0===t?{rowspan:this.technical_zigbee.length,colspan:1}:{rowspan:0,colspan:0}}},components:{addTechnical:d.default,addAttribute:c.default}}},"ER+V":function(e,t,a){"use strict";var l=[{technology_type:"",index:0,vendor:"",model:"",agreement:""},{technology_type:"",index:1,vendor:"",model:"",agreement:""}];t.a={computed:{},created:function(){},mounted:function(){},data:function(){return{dialogFormVisible:!1,form:{technology_list:[{technology_type:"",index:0,vendor:"",model:"",agreement:""},{technology_type:"",index:1,vendor:"",model:"",agreement:""}]}}},methods:{addTechnicalList:function(){this.form.technology_list.push({technology_type:"",vendor:"",model:"",agreement:""})},removeTechnicalList:function(e){this.form.technology_list.splice(e,1)},confirmTechnical:function(){var e=this;this.$refs.techniForm.validate(function(t){if(t){var a=[],i={};e.form.technology_list.forEach(function(e,t){console.log(e.technology_type),""!=e.technology_type&&(1==e.technology_type?a.push({technology_type:e.technology_type,vendor:e.vendor,model:e.model}):a.push({technology_type:e.technology_type,agreement:e.agreement}))}),i={technology_list:a},e.$emit("get-data",i),e.dialogFormVisible=!1,e.form.technology_list=l}})}}}},a9Fw:function(e,t,a){var l=a("ucgA");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("2b2d8485",l,!0)},bFNI:function(e,t,a){"use strict";function l(e){a("a9Fw")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("ER+V"),s=a("vVg6"),o=a("VU/8"),r=l,n=o(i.a,s.a,!1,r,"data-v-59474d41",null);t.default=n.exports},bOdI:function(e,t,a){"use strict";t.__esModule=!0;var l=a("C4MV"),i=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=function(e,t,a){return t in e?(0,i.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},bzuE:function(e,t,a){"use strict";a.d(t,"d",function(){return l}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return s}),a.d(t,"a",function(){return o});var l=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],i=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],s={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},o="星络科技"},d2Ip:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".el-table__body-wrapper{overflow:hidden}.upload-container{float:right;margin-left:20px}.flex{display:-webkit-box;display:-ms-flexbox;display:flex}.desTitle{display:inline-block;padding-right:15px;color:#5a5e66;min-width:81px}.marT20{margin-top:20px}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/typeManagement/deviceDetail.vue"],names:[],mappings:"AAIA,wBACI,eAAiB,CACpB,AACD,kBACI,YAAa,AACb,gBAAkB,CACrB,AACD,MACI,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACjB,AACD,UACI,qBAAsB,AACtB,mBAAoB,AACpB,cAAe,AACf,cAAgB,CACnB,AACD,QACI,eAAiB,CACpB",file:"deviceDetail.vue",sourcesContent:["\n.upload-container{\n    float: right;\n}\n.el-table__body-wrapper{\n    overflow: hidden;\n}\n.upload-container{\n    float: right;\n    margin-left: 20px;\n}\n.flex{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.desTitle{\n    display: inline-block;\n    padding-right: 15px;\n    color: #5a5e66;\n    min-width: 81px;\n}\n.marT20{\n    margin-top: 20px;\n}\n"],sourceRoot:""}])},fYXB:function(e,t,a){"use strict";function l(e){a("wFWV")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("DZhL"),s=a("n56F"),o=a("VU/8"),r=l,n=o(i.a,s.a,!1,r,null,null);t.default=n.exports},i224:function(e,t,a){"use strict";function l(e){a("/vah")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("qQ+c"),s=a("433A"),o=a("VU/8"),r=l,n=o(i.a,s.a,!1,r,"data-v-7aae5509",null);t.default=n.exports},mClu:function(e,t,a){var l=a("kM2E");l(l.S+l.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})},n56F:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"ghost"},on:{click:e.handleBackEvent}},[e._v("返回")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.editDevice}},[e._v(e._s(e.editText))]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isEdit,expression:"!isEdit"}],attrs:{type:"danger"},on:{click:e.handleDelEvent}},[e._v("删除该引导页")])],1),e._v(" "),a("el-col",{staticStyle:{margin:"20px 0px","padding-bottom":"40px"},attrs:{span:24}},[a("el-form",{ref:"ruleForm",staticStyle:{"margin-top":"20px"},attrs:{rules:e.rules,model:e.form,"label-width":"80px",size:"large"}},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"基本信息"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{"label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{disabled:"","true-label":1,"false-label":0},model:{value:e.is_evergrande,callback:function(t){e.is_evergrande=t},expression:"is_evergrande"}},[e._v("属于"+e._s(e.COLTD)+"快联产品设备")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"品类","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{disabled:""},model:{value:e.form.type_name,callback:function(t){e.$set(e.form,"type_name",t)},expression:"form.type_name"}})],1)],1),e._v(" "),e.is_evergrande?e._e():a("el-form-item",{attrs:{label:"厂商","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{disabled:""},model:{value:e.form.business_name,callback:function(t){e.$set(e.form,"business_name",t)},expression:"form.business_name"}})],1)],1),e._v(" "),e.is_evergrande?e._e():a("el-form-item",{attrs:{label:"品牌","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{disabled:""},model:{value:e.form.brand_name,callback:function(t){e.$set(e.form,"brand_name",t)},expression:"form.brand_name"}})],1)],1),e._v(" "),e.is_evergrande?e._e():a("el-form-item",{attrs:{label:"型号","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{disabled:""},model:{value:e.form.model,callback:function(t){e.$set(e.form,"model",t)},expression:"form.model"}})],1)],1),e._v(" "),e.is_evergrande?e._e():a("el-form-item",{attrs:{label:"产品图片","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"flex"},[e.form.base_img?a("el-input",{attrs:{readonly:"",disabled:!e.isEdit},model:{value:e.form.base_img.filename,callback:function(t){e.$set(e.form.base_img,"filename",t)},expression:"form.base_img.filename"}}):e._e(),e._v(" "),a("el-upload",{staticClass:"upload-container",attrs:{action:"/api/index.php/files/save","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,accept:"image/png",data:e.form.base_img,disabled:!e.isEdit}},[a("el-button",{attrs:{size:"middle",type:"primary",disabled:!e.isEdit}},[e._v("选择文件")])],1)],1)])],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"添加方式"}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"产品添加方式","label-width":"120px",prop:"add_type"}},[a("el-col",{attrs:{span:13}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择添加方式",disabled:!e.isEdit},model:{value:e.form.add_type,callback:function(t){e.$set(e.form,"add_type",t)},expression:"form.add_type"}},e._l(e.deviceAddTypeList,function(e){return a("el-option",{key:e.type_id,attrs:{label:e.type_name,value:e.type_id}})}))],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"第一步","label-width":"120px"}},[a("el-col",{attrs:{span:13}},[e.form.add1_img?a("el-form-item",{attrs:{label:"上传图片","label-width":"80px"}},[a("div",{staticClass:"flex"},[a("el-input",{attrs:{readonly:"",disabled:!e.isEdit},model:{value:e.form.add1_img.filename,callback:function(t){e.$set(e.form.add1_img,"filename",t)},expression:"form.add1_img.filename"}}),e._v(" "),a("el-upload",{staticClass:"upload-container",attrs:{action:"/api/index.php/files/save","show-file-list":!1,"on-success":e.handleAddImg1Success,"before-upload":e.beforeAvatarUpload,accept:"image/png",data:e.form.add1_img,disabled:!e.isEdit}},[a("el-button",{attrs:{size:"middle",type:"primary",disabled:!e.isEdit}},[e._v("选择文件")])],1)],1)]):e._e()],1),e._v(" "),a("el-col",{attrs:{span:13}},[a("div",{staticClass:"marT20"},[a("el-form-item",{attrs:{label:"提示文字","label-width":"80px",prop:"add1_tips"}},[a("el-input",{staticClass:"add1TextArea",attrs:{type:"textarea",autosize:{minRows:3,maxRows:3},placeholder:"文字限制255个字符内",disabled:!e.isEdit,maxlength:255},model:{value:e.form.add1_tips,callback:function(t){e.$set(e.form,"add1_tips",t)},expression:"form.add1_tips"}})],1)],1)]),e._v(" "),a("el-col",{attrs:{span:13}},[a("div",{staticClass:"marT20 flex"},[a("el-form-item",{attrs:{label:"按钮文字","label-width":"80px",prop:"add1_button"}},[a("el-input",{attrs:{disabled:!e.isEdit,maxlength:8},model:{value:e.form.add1_button,callback:function(t){e.$set(e.form,"add1_button",t)},expression:"form.add1_button"}})],1)],1)])],1),e._v(" "),a("el-form-item",{attrs:{label:"第二步","label-width":"120px"}},[a("el-col",{attrs:{span:13}},[e.form.add2_img?a("el-form-item",{attrs:{label:"上传图片","label-width":"80px"}},[a("div",{staticClass:"flex"},[a("el-input",{attrs:{readonly:"",disabled:!e.isEdit},model:{value:e.form.add2_img.filename,callback:function(t){e.$set(e.form.add2_img,"filename",t)},expression:"form.add2_img.filename"}}),e._v(" "),a("el-upload",{staticClass:"upload-container",attrs:{action:"/api/index.php/files/save","show-file-list":!1,"on-success":e.handleAddImg2Success,"before-upload":e.beforeAvatarUpload,accept:"image/png",data:e.form.add2_img,disabled:!e.isEdit}},[a("el-button",{attrs:{size:"middle",type:"primary",disabled:!e.isEdit}},[e._v("选择文件")])],1)],1)]):e._e()],1),e._v(" "),a("el-col",{attrs:{span:13}},[a("div",{staticClass:"marT20"},[a("el-form-item",{attrs:{label:"提示文字","label-width":"80px",prop:"add2_tips"}},[a("el-input",{staticClass:"add1TextArea",attrs:{type:"textarea",autosize:{minRows:3,maxRows:3},placeholder:"文字限制255个字符内",disabled:!e.isEdit,maxlength:255},model:{value:e.form.add2_tips,callback:function(t){e.$set(e.form,"add2_tips",t)},expression:"form.add2_tips"}})],1)],1)])],1)],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"重置方式"}},[a("el-col",{attrs:{span:24}},[e.form.reset_img?a("el-form-item",{attrs:{label:"上传图片","label-width":"120px"}},[a("el-col",{attrs:{span:13}},[a("div",{staticClass:"flex"},[a("el-input",{attrs:{readonly:"",disabled:!e.isEdit},model:{value:e.form.reset_img.filename,callback:function(t){e.$set(e.form.reset_img,"filename",t)},expression:"form.reset_img.filename"}}),e._v(" "),a("el-upload",{staticClass:"upload-container",attrs:{action:"/api/index.php/files/save","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,accept:"image/png",data:e.form.reset_img,disabled:!e.isEdit}},[a("el-button",{attrs:{size:"middle",type:"primary",disabled:!e.isEdit}},[e._v("选择文件")])],1)],1)])],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"提示文字","label-width":"120px",prop:"reset_tips"}},[a("el-col",{attrs:{span:13}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:3},placeholder:"请输入其他说明",disabled:!e.isEdit,maxlength:255},model:{value:e.form.reset_tips,callback:function(t){e.$set(e.form,"reset_tips",t)},expression:"form.reset_tips"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)},i=[],s={render:l,staticRenderFns:i};t.a=s},"qQ+c":function(e,t,a){"use strict";var l=a("mvHQ"),i=a.n(l),s=a("Vo7i"),o=(a("TIfe"),{method:[],key:"",type:"string",key_type:1,unit:"",is_checkbox:"1",value_list:[{value:"",value_des:""}],remark:""}),r={method:[],key:"",type:"string",key_type:1,remark:"",unit:"",is_checkbox:"1",value_list:[{value:"",value_des:""}],list:[o]};t.a={props:["typeid","token","visible","attrid"],computed:{},created:function(){},mounted:function(){},data:function(){var e=i()(r);return{top:window.innerHeight-660>0?(window.innerHeight-660)/2+"px":"0px",dialogTitle:"新建属性参数",hulian_value:!0,isChooseObject:!1,form_string:e,form:{token:this.token,type_id:this.typeid,nodeid:"",is_default:1,value_list:[JSON.parse(e)]},rules:{nodeid:[{required:!0,message:"属性名称不能为空"},{min:1,max:32,message:"属性名称最多32个字符"},{validator:this.letterAndUnderscode}]}}},watch:{attrid:function(e){e?(this.getAttr(e),this.dialogTitle="编辑属性参数"):this.dialogTitle="新建属性参数"}},methods:{getAttr:function(e){var t=this;Object(s.a)({url:"/attribute/info",method:"post",data:{attr_id:e}}).then(function(e){t.form.nodeid=e.ret.nodeid,t.form.is_default=e.ret.is_default,e.ret.value_list.forEach(function(e){e.list||(e.list=[JSON.parse(i()(o))]),e.value_list||(e.value_list=[{value:"",value_des:""}])}),t.form.value_list=e.ret.value_list})},addParams:function(){this.form.value_list.push(JSON.parse(this.form_string))},deleteParams:function(e){this.form.value_list.splice(e,1)},addAttribute:function(e){var t=i()(o);e.list.push(JSON.parse(t))},deleteAttr:function(e,t){e.list.splice(t,1)},changeTypeValue:function(e,t){var a=[{value:1,value_des:"类型"},{value:"",value_des:"最小值"},{value:"",value_des:"最大值"}],l=[{value:"",value_des:""}];"int"==e?(t.key_type=2,t.value_list=a):"object"==e?t.key_type=3:"otc"==e?(t.key_type=4,t.value_list=[{value:"",value_des:""}]):(t.key_type=1,t.value_list=l)},addEnumerateItem:function(e){e.value_list.push({value:"",value_des:""})},delEnumerateItem:function(e,t){t.value_list.splice(e,1)},closeDialog:function(){this.$refs.attForm.resetFields(),this.form.value_list=[JSON.parse(this.form_string)],this.$emit("close-dialog")},confirmTechnical:function(){var e=this;this.$refs.attForm.validate(function(t){if(t){var a=i()(e.form),l=JSON.parse(a);l.value_list.forEach(function(e){"3"==e.key_type?(delete e.value_list,delete e.is_checkbox,e.list.forEach(function(e){"1"!=e.key_type&&delete e.is_checkbox})):(delete e.list,"1"!=e.key_type&&delete e.is_checkbox)}),e.attrid&&(l.attr_id=e.attrid),Object(s.a)({url:e.attrid?"/attribute/edit":"/attribute/add",method:"post",data:l}).then(function(t){e.$emit("fresh-list"),e.closeDialog()})}})},letterAndUnderscode:function(e,t,a){var l=!0;if(!t)return void a();for(var i=0;i<t.length;i++){var s=t.charCodeAt(i);if(!(s>=65&&s<=90||s>=97&&s<=122||95==s||s>=33&&s<=46||s>=48&&s<=57)){l=!1,a("只能是字母下划线");break}}l&&a()},unCN:function(e,t,a){/[\u4e00-\u9fa5]+/g.test(t)?a("不支持中文汉字"):a()},lengthLimit:function(e,t,a,l){a&&a.length>e?l("长度不能超过"+e+"字符"):l()}}}},ucgA:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".addbtn[data-v-59474d41]{font-size:12px;color:#999}.addTechDialog .el-dialog__body[data-v-59474d41]{overflow-y:auto;max-height:400px;padding-top:10px}.addTechDialog .el-form-item__label[data-v-59474d41]{padding-bottom:0;line-height:30px}.remove-item[data-v-59474d41]{font-size:24px;cursor:pointer;color:#409eff;position:relative;top:30px}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/typeManagement/addTechnical.vue"],names:[],mappings:"AACA,yBACI,eAAgB,AAChB,UAAY,CACf,AACD,iDACI,gBAAiB,AACjB,iBAAkB,AAClB,gBAAkB,CACrB,AACD,qDACI,iBAAoB,AACpB,gBAAkB,CACrB,AACD,8BACI,eAAgB,AAChB,eAAgB,AAChB,cAAe,AACf,kBAAmB,AACnB,QAAU,CACb",file:"addTechnical.vue",sourcesContent:["\n.addbtn[data-v-59474d41]{\n    font-size: 12px;\n    color: #999;\n}\n.addTechDialog .el-dialog__body[data-v-59474d41]{\n    overflow-y: auto;\n    max-height: 400px;\n    padding-top: 10px;\n}\n.addTechDialog .el-form-item__label[data-v-59474d41]{\n    padding-bottom: 0px;\n    line-height: 30px;\n}\n.remove-item[data-v-59474d41]{\n    font-size: 24px;\n    cursor: pointer;\n    color: #409EFF;\n    position: relative;\n    top: 30px;\n}\n"],sourceRoot:""}])},vVg6:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"inline-block"}},[a("el-dialog",{attrs:{title:"增加技术方案",visible:e.dialogFormVisible,width:"50%","custom-class":"addTechDialog"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"techniForm",attrs:{model:e.form,inline:!0,"label-position":"top"}},e._l(e.form.technology_list,function(t,l){return a("el-row",{key:t.value,attrs:{span:24}},[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"技术方案",prop:"technology_list."+l+".technology_type",rules:[{required:!0,message:"技术方案不能为空",trigger:"change"}]}},[a("el-select",{attrs:{placeholder:"请选择技术方案"},model:{value:t.technology_type,callback:function(a){e.$set(t,"technology_type",a)},expression:"item.technology_type"}},[a("el-option",{attrs:{label:"Wi-Fi方案",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"ZigBee方案",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"蓝牙方案",value:"3"}})],1)],1)],1),e._v(" "),1==t.technology_type?a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"模组/芯片厂家",prop:"technology_list."+l+".vendor",rules:[{required:!0,message:"模组/芯片厂家不能为空",trigger:"blur"}]}},[a("el-input",{model:{value:t.vendor,callback:function(a){e.$set(t,"vendor",a)},expression:"item.vendor"}})],1)],1):e._e(),e._v(" "),1==t.technology_type?a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"模组/芯片型号",prop:"technology_list."+l+".model",rules:[{required:!0,message:"模组/芯片型号不能为空",trigger:"blur"}]}},[a("el-input",{model:{value:t.model,callback:function(a){e.$set(t,"model",a)},expression:"item.model"}})],1)],1):e._e(),e._v(" "),2==t.technology_type||3==t.technology_type?a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"协议",prop:"technology_list."+l+".agreement",rules:[{required:!0,message:"协议不能为空",trigger:"blur"}]}},[a("el-input",{model:{value:t.agreement,callback:function(a){e.$set(t,"agreement",a)},expression:"item.agreement"}})],1)],1):e._e(),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-form-item",{attrs:{label:" "}},[e.form.technology_list.length>1?a("i",{staticClass:"el-icon-circle-close remove-item",on:{click:function(t){e.removeTechnicalList(l)}}}):e._e()])],1)],1)})),e._v(" "),a("a",{staticClass:"addbtn",attrs:{href:"javascript:void(0);"},on:{click:e.addTechnicalList}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 添加更多技术方案")]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.confirmTechnical}},[e._v("确 定")])],1)],1),e._v(" "),a("el-button",{staticStyle:{"margin-right":"15px"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加技术方案")])],1)},i=[],s={render:l,staticRenderFns:i};t.a=s},wFWV:function(e,t,a){var l=a("d2Ip");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("26aa81a8",l,!0)}});
//# sourceMappingURL=1.078e786a6829cc78eac5.js.map