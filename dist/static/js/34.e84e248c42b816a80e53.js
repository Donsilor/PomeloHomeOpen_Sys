webpackJsonp([34],{HzJ8:function(e,t,i){e.exports={default:i("vY6q"),__esModule:!0}},"XO/m":function(e,t,i){var a=i("7NgR"),r=i("/tnA");e.exports=i("DH3n").getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return a(t.call(e))}},aVxs:function(e,t,i){var a=i("vKg/");(a="string"==typeof a?[[e.i,a,""]]:a).locals&&(e.exports=a.locals);i("8bSs")("2f9af3d1",a,!0)},oY40:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("HzJ8"),o=i.n(a),r=i("3cXf"),n=i.n(r),a=i("aA9S"),s=i.n(a),l=i("Vo7i"),c=i("TIfe"),a=(i("/QDj"),{name:"EnterpriseInfo",data:function(){return{token:Object(c.b)(),checkDetail:{},business_name:"",activeName:"enterpriseInfo",edit:!1,rules:{contacts:[{required:!0,message:"联系人姓名不能为空",trigger:"blur"}],mail:[{required:!0,message:"邮箱不能为空"},{validator:function(e,t,i){/^[\w\.-]+@\w+\.\w{2,}$/.test(t)?i():i("请输入正确的邮箱地址")}}],contacts_mobile:[{required:!0,message:"联系人手机不能为空"},{validator:function(e,t,i){/^1\d{10}$/.test(t)?i():i("请填写11位正确的手机号码")}}],contacts_duty:[{required:!0,message:"职位不能为空",trigger:"blur"}],name:[{required:!0,message:"公司名称不能为空",trigger:"blur"}],address:[{required:!0,message:"公司地址不能为空",trigger:"blur"}],customer_num:[{required:!0,message:"客服电话不能为空",trigger:"blur"}],registration_No:[{required:!0,message:"营业执照号不能为空"},{validator:function(e,t,i){/(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{18}/.test(t)?i():i("请填写18位正确的营业执照号")}}],type:[{required:!0,message:"合作产品不能为空"},{validator:function(e,t,i,a,r){t.length<=0&&i("合作产品不能为空！"),i()}}],brands:[{required:!0,message:"合作品牌不能为空"},{validator:function(e,t,i,a,r){t.length<=0&&i("合作品牌不能为空！"),i()}}]},uploadForm:{file_name:"",url:"",url_s:"",fileData:null},brandForm:{name:"",name_e:"",logo:"",logo_s:"",cert:"",cert_s:"",logoData:null,certData:null},otherRules:{file_name:[{required:!0,message:"文件名称不能为空"}],url:[{required:!0,message:"请上传文件"}]},brandRules:{name:[{required:!0,message:"品牌名称不能为空"}],name_e:[{required:!0,message:"品牌英文不能为空"}],logo:[{required:!0,message:"请上传品牌logo"}],cert:[{required:!0,message:"请上传品牌资质"}]},typeList:[],typeDialogVisible:!1,otherImageVisible:!1,brandDialogVisible:!1,navs:[{name:"厂商信息",url:"/enterpriseManagement/enterpriseInfo",type:"enterpriseInfo"},{name:"产品列表",url:"/enterpriseManagement/enterpriseProducts",type:"enterpriseProducts"}]}},created:function(){this.business_id=this.$route.query.business_id},mounted:function(){this.getReviewInfo()},deactivated:function(){this.$destroy()},methods:{getReviewInfo:function(){var t=this,e={business_id:this.business_id};Object(l.a)({url:"/user/detail",method:"post",data:e}).then(function(e){t.checkDetail=e})},doEdit:function(){this.edit?this.modify():(this.edit=!0,this.getTypeList())},modify:function(){var r=this;this.$refs.form.validate(function(e){var t,i,a;e&&(t=r.checkDetail.type.map(function(e){return e.type_id}),i=r.checkDetail.brands.map(function(e){return{brand_id:e.brand_id||0,brand_name:e.brand_name||"",manufacturer_name:e.manufacturer_name||"",logo:e.logoData||{file_id:e.logo_id,type:3,file_url:e.logo},certs:[e.certsData||{file_id:e.cert_ids,type:9,file_url:e.certs}]}}),a=r.checkDetail.licenses.map(function(e){return e.fileData?s()({},e.fileData,{filename:e.filename}):{file_id:e.file_id,type:e.type,filename:e.filename}}),(e=JSON.parse(n()(r.checkDetail))).business_id=r.business_id,e.types=t,e.brands=i,e.licenses=a,delete e.type,Object(l.a)({url:"/user/edit_by_admin",method:"post",data:e}).then(function(e){r.$message.info("保存成功"),r.$router.go(-1)}).catch(function(e){r.$message.error(e.msg)}))})},beforeImgUpload:function(e){e=e.size/1024/1024<5;return e||this.$message.error("请上传5M大小内图片文件"),e},handleImgSuccess:function(r){var n=this;return function(e,t,i){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:r;200===e.code?(n.checkDetail.licenses[a].file_url=e.result.file_url,n.checkDetail.licenses[a].fileData=e.result):n.$message.error("上传出错，请重新上传")}},handeler:function(e,t,i){200===e.code?8==e.result.type?(this.uploadForm.url=e.result.filename,this.uploadForm.url_s=e.result.file_url,this.uploadForm.fileData=e.result):3==e.result.type?(this.brandForm.logo=e.result.filename,this.brandForm.logo_s=e.result.file_url,this.brandForm.logoData=e.result):9==e.result.type&&(this.brandForm.cert=e.result.filename,this.brandForm.cert_s=e.result.file_url,this.brandForm.certData=e.result):this.$message.error("上传出错，请重新上传")},handleImgElseSuccess:function(r){var n=this;return function(e,t,i){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:r;200===e.code?3==e.result.type?(n.checkDetail.brands[a].logo=e.result.file_url,n.checkDetail.brands[a].logoData=e.result):9==e.result.type&&(n.checkDetail.brands[a].certs=e.result.file_url,n.checkDetail.brands[a].certsData=e.result):n.$message.error("上传出错，请重新上传")}},removeType:function(t,e){var i=this;Object(l.a)({url:"/admin/check_has_product",method:"post",data:{type_id:e.type_id,business_id:this.business_id}}).then(function(e){0==e.ret?i.checkDetail.type.splice(t,1):i.$message.warning("该产品下有关联设备，不可删除！")}).catch(function(e){i.$message.error(e.msg)})},addType:function(){var e=[],t=!0,i=!1,a=void 0;try{for(var r,n=o()(this.typeList);!(t=(r=n.next()).done);t=!0){var s=r.value;s.status&&e.push({type_id:s.id,name:s.name})}}catch(e){i=!0,a=e}finally{try{!t&&n.return&&n.return()}finally{if(i)throw a}}this.checkDetail.type=e,this.typeDialogVisible=!1},addLicense:function(){var t=this;this.$refs.uploadForm.validate(function(e){e&&(t.checkDetail.licenses.push({type:8,filename:t.uploadForm.file_name,file_url:t.uploadForm.url_s,fileData:t.uploadForm.fileData}),t.$refs.uploadForm.resetFields(),t.otherImageVisible=!1)})},removeLicense:function(e){this.checkDetail.licenses.splice(e,1)},addBrand:function(){var t=this;this.$refs.brandForm.validate(function(e){e&&(t.checkDetail.brands.push({brand_name:t.brandForm.name,manufacturer_name:t.brandForm.name_e,logo:t.brandForm.logo_s,certs:t.brandForm.cert_s,logoData:t.brandForm.logoData,certsData:t.brandForm.certData}),t.$refs.brandForm.resetFields(),t.brandDialogVisible=!1)})},removeBrand:function(t,e){var i=this;e.brand_id?Object(l.a)({url:"/admin/check_has_product",method:"post",data:{brand_id:e.brand_id,business_id:this.business_id}}).then(function(e){0==e.ret?i.checkDetail.brands.splice(t,1):i.$message.warning("该品牌下有关联设备，不可删除！")}).catch(function(e){i.$message.error(e.msg)}):this.checkDetail.brands.splice(t,1)},getTypeList:function(){var s=this;Object(l.a)({url:"/admin/product/type_lists",method:"post",data:{}}).then(function(t){var e=t.list,i=!0,a=!1,t=void 0;try{for(var r,n=o()(e);!(i=(r=n.next()).done);i=!0)r.value.status=!1}catch(e){a=!0,t=e}finally{try{!i&&n.return&&n.return()}finally{if(a)throw t}}e.sort(function(e,t){return e.id-t.id}),s.typeList=e}).catch(function(e){s.$message.error(e.msg)})},checkTypeList:function(){this.typeDialogVisible=!0;var e=this.checkDetail.type.map(function(e){return e.type_id}),t=!0,i=!1,a=void 0;try{for(var r,n=o()(this.typeList);!(t=(r=n.next()).done);t=!0){var s=r.value;0<=e.indexOf(s.id)?s.status=!0:s.status=!1}}catch(e){i=!0,a=e}finally{try{!t&&n.return&&n.return()}finally{if(i)throw a}}},setCheck:function(t){var i=this;t.status?Object(l.a)({url:"/admin/check_has_product",method:"post",data:{type_id:t.id,business_id:this.business_id}}).then(function(e){0==e.ret?t.status=!1:i.$message.warning("该产品下有关联设备，不可删除！")}).catch(function(e){i.$message.error(e.msg)}):t.status=!0},handleClose:function(t){var i=this;return function(e){i.$refs[1<arguments.length&&void 0!==arguments[1]?arguments[1]:t].resetFields(),e()}}}}),r={render:function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("el-row",{staticStyle:{"padding-left":"160px","padding-bottom":"30px"}},[r("el-menu",{staticClass:"sec-menu",staticStyle:{width:"160px"},attrs:{"default-active":a.activeName,mode:"vertical","background-color":"#f2f2f2","text-color":"#666","active-text-color":"#409EFF"}},[a._l(a.navs,function(e){return[r("router-link",{attrs:{to:{path:e.url,query:{business_id:a.business_id}}}},[r("el-menu-item",{attrs:{index:e.type}},[a._v("\n          "+a._s(e.name)+"\n          "),r("span",{staticClass:"num"},[a._v(a._s(e.num))])])],1)]})],2),a._v(" "),r("div",{staticClass:"app-container"},[r("el-row",{staticStyle:{"margin-bottom":"10px"}},[r("router-link",{attrs:{to:"/enterpriseManagement/list"}},[r("el-button",{attrs:{type:"primary",size:"medium"}},[a._v("返 回")])],1),a._v(" "),r("el-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary",size:"medium"},on:{click:a.doEdit}},[a._v(a._s(a.edit?"确定并提交修改":"编辑厂商信息"))])],1),a._v(" "),r("h3",[a._v(a._s(a.checkDetail.name))]),a._v(" "),r("el-form",{ref:"form",staticClass:"enterprise-form",attrs:{model:a.checkDetail,rules:a.rules,"label-width":"200px"}},[r("el-card",{staticClass:"box-card"},[r("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[r("i"),a._v("联系人信息\n        ")]),a._v(" "),r("el-row",{staticClass:"card-body"},[r("el-form-item",{attrs:{label:"联系人姓名",prop:"contacts"}},[r("el-input",{class:{"no-border":!a.edit},model:{value:a.checkDetail.contacts,callback:function(e){a.$set(a.checkDetail,"contacts",e)},expression:"checkDetail.contacts"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"联系人手机",prop:"contacts_mobile"}},[r("el-input",{class:{"no-border":!a.edit},model:{value:a.checkDetail.contacts_mobile,callback:function(e){a.$set(a.checkDetail,"contacts_mobile",e)},expression:"checkDetail.contacts_mobile"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"职位",prop:"contacts_duty"}},[r("el-input",{class:{"no-border":!a.edit},model:{value:a.checkDetail.contacts_duty,callback:function(e){a.$set(a.checkDetail,"contacts_duty",e)},expression:"checkDetail.contacts_duty"}})],1)],1)],1),a._v(" "),r("el-card",{staticClass:"box-card"},[r("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[r("i"),a._v("公司/团队信息\n        ")]),a._v(" "),r("el-row",{staticClass:"card-body"},[r("el-form-item",{attrs:{label:"公司名称",prop:"name"}},[r("el-input",{class:{"no-border":!a.edit},model:{value:a.checkDetail.name,callback:function(e){a.$set(a.checkDetail,"name",e)},expression:"checkDetail.name"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"公司地址",prop:"address"}},[r("el-input",{class:{"no-border":!a.edit},model:{value:a.checkDetail.address,callback:function(e){a.$set(a.checkDetail,"address",e)},expression:"checkDetail.address"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"营业执照注册号",prop:"registration_No"}},[r("el-input",{class:{"no-border":!a.edit},model:{value:a.checkDetail.registration_No,callback:function(e){a.$set(a.checkDetail,"registration_No",e)},expression:"checkDetail.registration_No"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"客服电话",prop:"customer_num"}},[r("el-input",{class:{"no-border":!a.edit},model:{value:a.checkDetail.customer_num,callback:function(e){a.$set(a.checkDetail,"customer_num",e)},expression:"checkDetail.customer_num"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"合作产品",prop:"type"}},[r("div",{style:{paddingLeft:a.edit?0:"15px"}},[a._l(a.checkDetail.type,function(t,i){return r("el-tag",{key:t.name,staticStyle:{margin:"0 10px 10px 0"},attrs:{closable:a.edit,type:"success"},on:{close:function(e){return a.removeType(i,t)}}},[a._v("\n                "+a._s(t.name)+"\n              ")])}),a._v(" "),a.edit?r("el-button",{attrs:{type:"primary",size:"small"},on:{click:a.checkTypeList}},[a._v("+添加更多")]):a._e()],2)]),a._v(" "),r("el-form-item",{attrs:{label:"合作品牌",prop:"brands"}},[a._l(a.checkDetail.brands,function(t,i){return r("div",{key:i,staticClass:"brand-box",class:{"edit-brand-box":a.edit}},[r("el-row",[r("span",[a._v("品牌中文："+a._s(t.brand_name))])]),a._v(" "),r("el-row",[r("span",[a._v("品牌英文："+a._s(t.manufacturer_name))])]),a._v(" "),r("el-row",{staticClass:"brand-img"},[r("div",{staticClass:"brand-img-box"},[t.logo?r("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],attrs:{src:t.logo,alt:"品牌logo"}}):a._e(),a._v(" "),a.edit?r("el-upload",{attrs:{"on-success":a.handleImgElseSuccess(i),"before-upload":a.beforeImgUpload,"show-file-list":!1,data:{type:3,token:a.token},action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp"}},[r("el-button",{attrs:{size:"small",type:"primary"}},[a._v("更新")])],1):a._e()],1),a._v(" "),r("div",{staticClass:"brand-img-box"},[t.certs?r("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],attrs:{src:t.certs,alt:"资格证书"}}):a._e(),a._v(" "),a.edit?r("el-upload",{attrs:{"on-success":a.handleImgElseSuccess(i),"before-upload":a.beforeImgUpload,"show-file-list":!1,data:{type:9,token:a.token},action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp"}},[r("el-button",{attrs:{size:"small",type:"primary"}},[a._v("更新")])],1):a._e()],1)]),a._v(" "),a.edit?r("i",{staticClass:"el-icon-circle-close",on:{click:function(e){return a.removeBrand(i,t)}}}):a._e()],1)}),a._v(" "),a.edit?r("el-row",[r("el-button",{on:{click:function(e){a.brandDialogVisible=!0}}},[a._v("添加品牌")])],1):a._e()],2)],1)],1),a._v(" "),r("el-card",{staticClass:"box-card"},[r("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[r("i"),a._v("上传公司资质说明\n        ")]),a._v(" "),a._l(a.checkDetail.licenses,function(e,t){return r("el-form-item",{key:e.file_id,staticClass:"license-box",attrs:{label:e.filename}},[r("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],staticClass:"card-img-size",staticStyle:{"max-height":"300px"},attrs:{src:e.file_url,alt:"图片加载失败"}}),a._v(" "),a.edit?r("el-upload",{attrs:{"on-success":a.handleImgSuccess(t),"before-upload":a.beforeImgUpload,"show-file-list":!1,data:{type:e.type,token:a.token},action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp"}},[r("el-button",{attrs:{size:"small",type:"primary"}},[a._v("更换资质")])],1):a._e(),a._v(" "),!a.edit||6!=e.type&&7!=e.type&&8!=e.type?a._e():r("el-button",{staticClass:"remove-liscense",attrs:{type:"primary",size:"small"},on:{click:function(e){return a.removeLicense(t)}}},[a._v("删除资质")])],1)}),a._v(" "),a.edit?r("el-form-item",[r("el-button",{on:{click:function(e){a.otherImageVisible=!0}}},[a._v("添加其他资质证书")])],1):a._e()],2)],1)],1),a._v(" "),r("el-dialog",{attrs:{visible:a.typeDialogVisible,title:"选择意向合作产品",width:"610px",center:""},on:{"update:visible":function(e){a.typeDialogVisible=e}}},[r("div",{staticClass:"type-list"},a._l(a.typeList,function(t){return r("div",{class:{active:t.status},on:{click:function(e){return a.setCheck(t)}}},[r("span",{attrs:{title:t.name}},[a._v(a._s(t.name))]),a._v(" "),t.status?r("i",{staticClass:"el-icon-circle-check"}):a._e()])}),0),a._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){a.typeDialogVisible=!1}}},[a._v("取 消")]),a._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:a.addType}},[a._v("确 定")])],1)]),a._v(" "),r("el-dialog",{attrs:{visible:a.otherImageVisible,"before-close":a.handleClose("uploadForm"),title:"添加其他资质证书",width:"600px",center:""},on:{"update:visible":function(e){a.otherImageVisible=e}}},[r("el-form",{ref:"uploadForm",attrs:{rules:a.otherRules,model:a.uploadForm,"label-width":"90px"}},[r("el-form-item",{attrs:{label:"文件名称",prop:"file_name"}},[r("el-input",{attrs:{maxlength:10,placeholder:"请输入文件名称，10个字内"},model:{value:a.uploadForm.file_name,callback:function(e){a.$set(a.uploadForm,"file_name",e)},expression:"uploadForm.file_name"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"文件上传",prop:"url"}},[r("el-input",{staticStyle:{width:"72%"},attrs:{readonly:"",placeholder:"请选择文件"},model:{value:a.uploadForm.url,callback:function(e){a.$set(a.uploadForm,"url",e)},expression:"uploadForm.url"}}),a._v(" "),r("el-upload",{staticStyle:{display:"inline-block","margin-left":"12px"},attrs:{"on-success":a.handeler,"before-upload":a.beforeImgUpload,"show-file-list":!1,data:{type:8,token:a.token},action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp"}},[r("el-button",{attrs:{type:"primary"}},[a._v("选择文件...")])],1)],1)],1),a._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){a.$refs.uploadForm.resetFields(),a.otherImageVisible=!1}}},[a._v("取 消")]),a._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:a.addLicense}},[a._v("确 定")])],1)],1),a._v(" "),r("el-dialog",{attrs:{visible:a.brandDialogVisible,"before-close":a.handleClose("brandForm"),title:"添加产品品牌名称",width:"650px",center:""},on:{"update:visible":function(e){a.brandDialogVisible=e}}},[r("el-form",{ref:"brandForm",attrs:{rules:a.brandRules,model:a.brandForm,"label-width":"150px"}},[r("el-form-item",{attrs:{label:"品牌名称",prop:"name"}},[r("el-input",{attrs:{maxlength:10,placeholder:"请输入品牌名称，10个字内"},model:{value:a.brandForm.name,callback:function(e){a.$set(a.brandForm,"name",e)},expression:"brandForm.name"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"品牌英文",prop:"name_e"}},[r("el-input",{attrs:{maxlength:32,placeholder:"请输入品牌英文名称，32个字符内"},model:{value:a.brandForm.name_e,callback:function(e){a.$set(a.brandForm,"name_e",e)},expression:"brandForm.name_e"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"品牌logo",prop:"logo"}},[r("el-input",{staticStyle:{width:"72%"},attrs:{readonly:"",placeholder:"400px*400px以上"},model:{value:a.brandForm.logo,callback:function(e){a.$set(a.brandForm,"logo",e)},expression:"brandForm.logo"}}),a._v(" "),r("el-upload",{staticStyle:{display:"inline-block","margin-left":"12px"},attrs:{"on-success":a.handeler,"before-upload":a.beforeImgUpload,"show-file-list":!1,data:{type:3,token:a.token},action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp"}},[r("el-button",{attrs:{type:"primary"}},[a._v("选择文件...")])],1)],1),a._v(" "),r("el-form-item",{staticClass:"ff",attrs:{label:"品牌中英文&商标资格证，回执加盖公章",prop:"cert"}},[r("el-input",{staticStyle:{width:"72%"},attrs:{readonly:"",placeholder:"商标未注册完成的上传商标注册记录"},model:{value:a.brandForm.cert,callback:function(e){a.$set(a.brandForm,"cert",e)},expression:"brandForm.cert"}}),a._v(" "),r("el-upload",{staticStyle:{display:"inline-block","margin-left":"12px"},attrs:{"on-success":a.handeler,"before-upload":a.beforeImgUpload,"show-file-list":!1,data:{type:9,token:a.token},action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp"}},[r("el-button",{attrs:{type:"primary"}},[a._v("选择文件...")])],1)],1)],1),a._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){a.$refs.brandForm.resetFields(),a.brandDialogVisible=!1}}},[a._v("取 消")]),a._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:a.addBrand}},[a._v("确 定")])],1)],1)],1)},staticRenderFns:[]};r=i("C7Lr")(a,r,!1,function(e){i("aVxs")},null,null),t.default=r.exports},"vKg/":function(e,t,i){(e.exports=i("BkJT")(!0)).push([e.i,".enterprise-form .no-border .el-input__inner{border:none;padding-left:15px}.enterprise-form .brand-box{padding:0 15px;margin-bottom:30px;position:relative;width:700px}.enterprise-form .brand-box.edit-brand-box{padding:15px;border:1px solid #d8dce5;border-radius:4px}.enterprise-form .brand-box.edit-brand-box .el-icon-circle-close{font-size:20px;cursor:pointer;position:absolute;color:#409eff;top:0;right:0}.enterprise-form .brand-img{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.enterprise-form .brand-img .brand-img-box{float:left;margin-right:30px;max-width:300px}.enterprise-form .brand-img .brand-img-box img{max-height:150px}.enterprise-form .license-box .el-form-item__label{line-height:24px}.enterprise-form .remove-liscense{position:absolute;bottom:3px;left:100px}.type-list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.type-list div{position:relative;margin:0 10px 10px 0}.type-list div.active{border-color:#15a05d;color:#15a05d}.type-list div span{width:100px;height:40px;line-height:40px;background:#f8f9fc;border:1px solid #c2d1db;border-radius:2px;text-align:center;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;font-size:12px}.type-list div i{color:#15a05d;z-index:10;position:absolute;font-size:20px;top:-5px;right:-5px}.ff .el-form-item__label{line-height:20px}","",{version:3,sources:["F:/A-PRODUCT/PomeloHomeOpen_Sys/src/views/enterpriseManagement/enterpriseInfo.vue"],names:[],mappings:"AACA,6CACE,YAAa,AACb,iBAAmB,CACpB,AACD,4BACE,eAAkB,AAClB,mBAAoB,AACpB,kBAAmB,AACnB,WAAa,CACd,AACD,2CACI,aAAc,AACd,yBAA0B,AAC1B,iBAAmB,CACtB,AACD,iEACM,eAAgB,AAChB,eAAgB,AAChB,kBAAmB,AACnB,cAAe,AACf,MAAO,AACP,OAAS,CACd,AACD,4BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AAChB,oBAAsB,CAC/B,AACD,2CACI,WAAY,AACZ,kBAAmB,AACnB,eAAiB,CACpB,AACD,+CACM,gBAAkB,CACvB,AACD,mDACE,gBAAkB,CACnB,AACD,kCACE,kBAAmB,AACnB,WAAY,AACZ,UAAY,CACb,AACD,WACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,cAAgB,CACrB,AACD,eACI,kBAAmB,AACnB,oBAA0B,CAC7B,AACD,sBACM,qBAAsB,AACtB,aAAe,CACpB,AACD,oBACM,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,mBAAoB,AACpB,yBAA0B,AAC1B,kBAAmB,AACnB,kBAAmB,AACnB,eAAgB,AAChB,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,qBAAsB,AACtB,cAAgB,CACrB,AACD,iBACM,cAAe,AACf,WAAY,AACZ,kBAAmB,AACnB,eAAgB,AAChB,SAAU,AACV,UAAY,CACjB,AACD,yBACE,gBAAkB,CACnB",file:"enterpriseInfo.vue",sourcesContent:["\n.enterprise-form .no-border .el-input__inner {\n  border: none;\n  padding-left: 15px;\n}\n.enterprise-form .brand-box {\n  padding: 0px 15px;\n  margin-bottom: 30px;\n  position: relative;\n  width: 700px;\n}\n.enterprise-form .brand-box.edit-brand-box {\n    padding: 15px;\n    border: 1px solid #d8dce5;\n    border-radius: 4px;\n}\n.enterprise-form .brand-box.edit-brand-box .el-icon-circle-close {\n      font-size: 20px;\n      cursor: pointer;\n      position: absolute;\n      color: #409EFF;\n      top: 0;\n      right: 0;\n}\n.enterprise-form .brand-img {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.enterprise-form .brand-img .brand-img-box {\n    float: left;\n    margin-right: 30px;\n    max-width: 300px;\n}\n.enterprise-form .brand-img .brand-img-box img {\n      max-height: 150px;\n}\n.enterprise-form .license-box .el-form-item__label {\n  line-height: 24px;\n}\n.enterprise-form .remove-liscense {\n  position: absolute;\n  bottom: 3px;\n  left: 100px;\n}\n.type-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.type-list div {\n    position: relative;\n    margin: 0px 10px 10px 0px;\n}\n.type-list div.active {\n      border-color: #15a05d;\n      color: #15a05d;\n}\n.type-list div span {\n      width: 100px;\n      height: 40px;\n      line-height: 40px;\n      background: #f8f9fc;\n      border: 1px solid #c2d1db;\n      border-radius: 2px;\n      text-align: center;\n      cursor: pointer;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      display: inline-block;\n      font-size: 12px;\n}\n.type-list div i {\n      color: #15a05d;\n      z-index: 10;\n      position: absolute;\n      font-size: 20px;\n      top: -5px;\n      right: -5px;\n}\n.ff .el-form-item__label {\n  line-height: 20px;\n}\n"],sourceRoot:""}])},vY6q:function(e,t,i){i("8LqW"),i("g5OY"),e.exports=i("XO/m")}});