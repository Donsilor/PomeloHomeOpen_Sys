webpackJsonp([13],{BO1k:function(e,t,a){e.exports={default:a("fxRn"),__esModule:!0}},XbBF:function(e,t,a){var i=a("rw4J");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("3cfd349c",i,!0)},fxRn:function(e,t,a){a("+tPU"),a("zQR9"),e.exports=a("g8Ux")},g8Ux:function(e,t,a){var i=a("77Pl"),r=a("3fs2");e.exports=a("FeBl").getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return i(t.call(e))}},gKbg:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticStyle:{"padding-left":"160px","padding-bottom":"30px"}},[a("el-menu",{staticClass:"sec-menu",staticStyle:{width:"160px"},attrs:{mode:"vertical","default-active":e.activeName,"background-color":"#f2f2f2","text-color":"#666","active-text-color":"#409EFF"}},[e._l(e.navs,function(t){return[a("router-link",{attrs:{to:{path:t.url,query:{business_id:e.business_id}}}},[a("el-menu-item",{attrs:{index:t.type}},[e._v("\n                    "+e._s(t.name)+"\n                    "),a("span",{staticClass:"num"},[e._v(e._s(t.num))])])],1)]})],2),e._v(" "),a("div",{staticClass:"app-container"},[a("el-row",{staticStyle:{"margin-bottom":"10px"}},[a("router-link",{attrs:{to:"/enterpriseManagement/list"}},[a("el-button",{attrs:{type:"primary",size:"medium"}},[e._v("返 回")])],1),e._v(" "),a("el-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary",size:"medium"},on:{click:e.doEdit}},[e._v(e._s(e.edit?"确定并提交修改":"编辑厂商信息"))])],1),e._v(" "),a("h3",[e._v(e._s(e.checkDetail.name))]),e._v(" "),a("el-form",{ref:"form",staticClass:"enterprise-form",attrs:{model:e.checkDetail,rules:e.rules,"label-width":"200px"}},[a("el-card",{staticClass:"box-card"},[a("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[a("i"),e._v("联系人信息\n            ")]),e._v(" "),a("el-row",{staticClass:"card-body"},[a("el-form-item",{attrs:{label:"联系人姓名",prop:"contacts"}},[a("el-input",{class:{"no-border":!e.edit},model:{value:e.checkDetail.contacts,callback:function(t){e.$set(e.checkDetail,"contacts",t)},expression:"checkDetail.contacts"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系人手机",prop:"contacts_mobile"}},[a("el-input",{class:{"no-border":!e.edit},model:{value:e.checkDetail.contacts_mobile,callback:function(t){e.$set(e.checkDetail,"contacts_mobile",t)},expression:"checkDetail.contacts_mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"职位",prop:"contacts_duty"}},[a("el-input",{class:{"no-border":!e.edit},model:{value:e.checkDetail.contacts_duty,callback:function(t){e.$set(e.checkDetail,"contacts_duty",t)},expression:"checkDetail.contacts_duty"}})],1)],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[a("i"),e._v("公司/团队信息\n            ")]),e._v(" "),a("el-row",{staticClass:"card-body"},[a("el-form-item",{attrs:{label:"公司名称",prop:"name"}},[a("el-input",{class:{"no-border":!e.edit},model:{value:e.checkDetail.name,callback:function(t){e.$set(e.checkDetail,"name",t)},expression:"checkDetail.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公司地址",prop:"address"}},[a("el-input",{class:{"no-border":!e.edit},model:{value:e.checkDetail.address,callback:function(t){e.$set(e.checkDetail,"address",t)},expression:"checkDetail.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"营业执照注册号",prop:"registration_No"}},[a("el-input",{class:{"no-border":!e.edit},model:{value:e.checkDetail.registration_No,callback:function(t){e.$set(e.checkDetail,"registration_No",t)},expression:"checkDetail.registration_No"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"合作产品",prop:"type"}},[a("div",{style:{paddingLeft:e.edit?0:"15px"}},[e._l(e.checkDetail.type,function(t,i){return a("el-tag",{key:t.name,staticStyle:{margin:"0 10px 10px 0"},attrs:{type:"success",closable:e.edit},on:{close:function(a){e.removeType(i,t)}}},[e._v("\n                            "+e._s(t.name)+"\n                        ")])}),e._v(" "),e.edit?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.checkTypeList}},[e._v("+添加更多")]):e._e()],2)]),e._v(" "),a("el-form-item",{attrs:{label:"合作品牌",prop:"brands"}},[e._l(e.checkDetail.brands,function(t,i){return a("div",{key:i,staticClass:"brand-box",class:{"edit-brand-box":e.edit}},[a("el-row",[a("span",[e._v("品牌中文："+e._s(t.brand_name))])]),e._v(" "),a("el-row",[a("span",[e._v("品牌英文："+e._s(t.manufacturer_name))])]),e._v(" "),a("el-row",{staticClass:"brand-img"},[a("div",{staticClass:"brand-img-box"},[t.logo?a("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],attrs:{src:t.logo,alt:"品牌logo"}}):e._e(),e._v(" "),e.edit?a("el-upload",{attrs:{action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp","on-success":e.handleImgElseSuccess(i),"before-upload":e.beforeImgUpload,"show-file-list":!1,data:{type:3,token:e.token}}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("更新")])],1):e._e()],1),e._v(" "),a("div",{staticClass:"brand-img-box"},[t.certs?a("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],attrs:{src:t.certs,alt:"资格证书"}}):e._e(),e._v(" "),e.edit?a("el-upload",{attrs:{action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp","on-success":e.handleImgElseSuccess(i),"before-upload":e.beforeImgUpload,"show-file-list":!1,data:{type:9,token:e.token}}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("更新")])],1):e._e()],1)]),e._v(" "),e.edit?a("i",{staticClass:"el-icon-circle-close",on:{click:function(a){e.removeBrand(i,t)}}}):e._e()],1)}),e._v(" "),a("el-row",[a("el-button",{on:{click:function(t){e.brandDialogVisible=!0}}},[e._v("添加品牌")])],1)],2)],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("el-row",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[a("i"),e._v("上传公司资质说明\n            ")]),e._v(" "),e._l(e.checkDetail.licenses,function(t,i){return a("el-form-item",{key:t.file_id,staticClass:"license-box",attrs:{label:t.filename}},[a("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],staticClass:"card-img-size",staticStyle:{"max-height":"300px"},attrs:{alt:"图片加载失败",src:t.file_url}}),e._v(" "),e.edit?a("el-upload",{attrs:{action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp","on-success":e.handleImgSuccess(i),"before-upload":e.beforeImgUpload,"show-file-list":!1,data:{type:t.type,token:e.token}}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("更换资质")])],1):e._e()],1)}),e._v(" "),e.edit?a("el-form-item",[a("el-button",{on:{click:function(t){e.otherImageVisible=!0}}},[e._v("添加其他资质证书")])],1):e._e()],2)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"选择意向合作产品",visible:e.typeDialogVisible,width:"610px",center:""},on:{"update:visible":function(t){e.typeDialogVisible=t}}},[a("div",{staticClass:"type-list"},e._l(e.typeList,function(t){return a("div",{class:{active:t.status},on:{click:function(a){e.setCheck(t)}}},[a("span",{attrs:{title:t.name}},[e._v(e._s(t.name))]),e._v(" "),t.status?a("i",{staticClass:"el-icon-circle-check"}):e._e()])})),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.typeDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addType}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"添加其他资质证书",visible:e.otherImageVisible,width:"600px",center:""},on:{"update:visible":function(t){e.otherImageVisible=t}}},[a("el-form",{ref:"uploadForm",attrs:{rules:e.otherRules,model:e.uploadForm,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"文件名称",prop:"file_name"}},[a("el-input",{attrs:{maxlength:10,placeholder:"请输入文件名称，10个字内"},model:{value:e.uploadForm.file_name,callback:function(t){e.$set(e.uploadForm,"file_name",t)},expression:"uploadForm.file_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"文件上传",prop:"url"}},[a("el-input",{staticStyle:{width:"72%"},attrs:{readonly:"",placeholder:"请选择文件"},model:{value:e.uploadForm.url,callback:function(t){e.$set(e.uploadForm,"url",t)},expression:"uploadForm.url"}}),e._v(" "),a("el-upload",{staticStyle:{display:"inline-block","margin-left":"12px"},attrs:{action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp","on-success":e.handeler,"before-upload":e.beforeImgUpload,"show-file-list":!1,data:{type:8,token:e.token}}},[a("el-button",{attrs:{type:"primary"}},[e._v("选择文件...")])],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.otherImageVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addImage}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"添加产品品牌名称",visible:e.brandDialogVisible,width:"600px",center:""},on:{"update:visible":function(t){e.brandDialogVisible=t}}},[a("el-form",{ref:"brandForm",attrs:{rules:e.brandRules,model:e.brandForm,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"品牌名称",prop:"name"}},[a("el-input",{attrs:{maxlength:10,placeholder:"请输入品牌名称，10个字内"},model:{value:e.brandForm.name,callback:function(t){e.$set(e.brandForm,"name",t)},expression:"brandForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"品牌英文",prop:"name_e"}},[a("el-input",{attrs:{maxlength:10,placeholder:"请输入品牌英文名称，32个字符内"},model:{value:e.brandForm.name_e,callback:function(t){e.$set(e.brandForm,"name_e",t)},expression:"brandForm.name_e"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"品牌logo",prop:"logo"}},[a("el-input",{staticStyle:{width:"72%"},attrs:{readonly:"",placeholder:"请选择文件"},model:{value:e.brandForm.logo,callback:function(t){e.$set(e.brandForm,"logo",t)},expression:"brandForm.logo"}}),e._v(" "),a("el-upload",{staticStyle:{display:"inline-block","margin-left":"12px"},attrs:{action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp","on-success":e.handeler,"before-upload":e.beforeImgUpload,"show-file-list":!1,data:{type:3,token:e.token}}},[a("el-button",{attrs:{type:"primary"}},[e._v("选择文件...")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"品牌资质",prop:"cert"}},[a("el-input",{staticStyle:{width:"72%"},attrs:{readonly:"",placeholder:"请选择文件"},model:{value:e.brandForm.cert,callback:function(t){e.$set(e.brandForm,"cert",t)},expression:"brandForm.cert"}}),e._v(" "),a("el-upload",{staticStyle:{display:"inline-block","margin-left":"12px"},attrs:{action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp","on-success":e.handeler,"before-upload":e.beforeImgUpload,"show-file-list":!1,data:{type:9,token:e.token}}},[a("el-button",{attrs:{type:"primary"}},[e._v("选择文件...")])],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.brandDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addBrand}},[e._v("确 定")])],1)],1)],1)},r=[],n={render:i,staticRenderFns:r};t.a=n},oY40:function(e,t,a){"use strict";function i(e){a("XbBF")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("sDSt"),n=a("gKbg"),s=a("VU/8"),o=i,l=s(r.a,n.a,!1,o,null,null);t.default=l.exports},rw4J:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".enterprise-form .no-border .el-input__inner{border:none;padding-left:15px}.enterprise-form .brand-box{padding:0 15px;margin-bottom:30px;position:relative;width:700px}.enterprise-form .brand-box.edit-brand-box{padding:15px;border:1px solid #d8dce5;border-radius:4px}.enterprise-form .brand-box.edit-brand-box .el-icon-circle-close{font-size:20px;cursor:pointer;position:absolute;color:#409eff;top:0;right:0}.enterprise-form .brand-img{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.enterprise-form .brand-img .brand-img-box{float:left;margin-right:30px;max-width:300px}.enterprise-form .brand-img .brand-img-box img{max-height:150px}.enterprise-form .license-box .el-form-item__label{line-height:24px}.type-list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.type-list div{position:relative;margin:0 10px 10px 0}.type-list div.active{border-color:#15a05d;color:#15a05d}.type-list div span{width:100px;height:40px;line-height:40px;background:#f8f9fc;border:1px solid #c2d1db;border-radius:2px;text-align:center;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;font-size:12px}.type-list div i{color:#15a05d;z-index:10;position:absolute;font-size:20px;top:-5px;right:-5px}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/enterpriseManagement/enterpriseInfo.vue"],names:[],mappings:"AACA,6CACE,YAAa,AACb,iBAAmB,CACpB,AACD,4BACE,eAAkB,AAClB,mBAAoB,AACpB,kBAAmB,AACnB,WAAa,CACd,AACD,2CACI,aAAc,AACd,yBAA0B,AAC1B,iBAAmB,CACtB,AACD,iEACM,eAAgB,AAChB,eAAgB,AAChB,kBAAmB,AACnB,cAAe,AACf,MAAO,AACP,OAAS,CACd,AACD,4BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AAChB,oBAAsB,CAC/B,AACD,2CACI,WAAY,AACZ,kBAAmB,AACnB,eAAiB,CACpB,AACD,+CACM,gBAAkB,CACvB,AACD,mDACE,gBAAkB,CACnB,AACD,WACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,cAAgB,CACrB,AACD,eACI,kBAAmB,AACnB,oBAA0B,CAC7B,AACD,sBACM,qBAAsB,AACtB,aAAe,CACpB,AACD,oBACM,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,mBAAoB,AACpB,yBAA0B,AAC1B,kBAAmB,AACnB,kBAAmB,AACnB,eAAgB,AAChB,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,qBAAsB,AACtB,cAAgB,CACrB,AACD,iBACM,cAAe,AACf,WAAY,AACZ,kBAAmB,AACnB,eAAgB,AAChB,SAAU,AACV,UAAY,CACjB",file:"enterpriseInfo.vue",sourcesContent:["\n.enterprise-form .no-border .el-input__inner {\n  border: none;\n  padding-left: 15px;\n}\n.enterprise-form .brand-box {\n  padding: 0px 15px;\n  margin-bottom: 30px;\n  position: relative;\n  width: 700px;\n}\n.enterprise-form .brand-box.edit-brand-box {\n    padding: 15px;\n    border: 1px solid #d8dce5;\n    border-radius: 4px;\n}\n.enterprise-form .brand-box.edit-brand-box .el-icon-circle-close {\n      font-size: 20px;\n      cursor: pointer;\n      position: absolute;\n      color: #409EFF;\n      top: 0;\n      right: 0;\n}\n.enterprise-form .brand-img {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.enterprise-form .brand-img .brand-img-box {\n    float: left;\n    margin-right: 30px;\n    max-width: 300px;\n}\n.enterprise-form .brand-img .brand-img-box img {\n      max-height: 150px;\n}\n.enterprise-form .license-box .el-form-item__label {\n  line-height: 24px;\n}\n.type-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.type-list div {\n    position: relative;\n    margin: 0px 10px 10px 0px;\n}\n.type-list div.active {\n      border-color: #15a05d;\n      color: #15a05d;\n}\n.type-list div span {\n      width: 100px;\n      height: 40px;\n      line-height: 40px;\n      background: #f8f9fc;\n      border: 1px solid #c2d1db;\n      border-radius: 2px;\n      text-align: center;\n      cursor: pointer;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      display: inline-block;\n      font-size: 12px;\n}\n.type-list div i {\n      color: #15a05d;\n      z-index: 10;\n      position: absolute;\n      font-size: 20px;\n      top: -5px;\n      right: -5px;\n}\n"],sourceRoot:""}])},sDSt:function(e,t,a){"use strict";var i=a("BO1k"),r=a.n(i),n=a("mvHQ"),s=a.n(n),o=a("woOf"),l=a.n(o),c=a("Vo7i"),d=a("TIfe"),p=a("zL8q");a.n(p);t.a={name:"enterpriseInfo",data:function(){return{token:Object(d.a)(),checkDetail:{},business_name:"",activeName:"enterpriseInfo",edit:!1,rules:{contacts:[{required:!0,message:"联系人姓名不能为空",trigger:"blur"}],mail:[{required:!0,message:"邮箱不能为空"},{validator:function(e,t,a){if(!/^[\w\.-]+@\w+\.\w{2,}$/.test(t))return void a("请输入正确的邮箱地址");a()}}],contacts_mobile:[{required:!0,message:"联系人手机不能为空"},{validator:function(e,t,a){if(!/^1\d{10}$/.test(t))return void a("请填写11位正确的手机号码");a()}}],contacts_duty:[{required:!0,message:"职位不能为空",trigger:"blur"}],name:[{required:!0,message:"公司名称不能为空",trigger:"blur"}],address:[{required:!0,message:"公司地址不能为空",trigger:"blur"}],registration_No:[{required:!0,message:"营业执照号不能为空"},{validator:function(e,t,a){if(!/(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{18}/.test(t))return void a("请填写18位正确的营业执照号");a()}}],type:[{required:!0},{validator:function(e,t,a,i,r){t.length<=0&&a("合作产品不能为空！"),a()}}],brands:[{required:!0},{validator:function(e,t,a,i,r){t.length<=0&&a("合作品牌不能为空！"),a()}}]},uploadForm:{file_name:"",url:"",url_s:"",fileData:null},brandForm:{name:"",name_e:"",logo:"",logo_s:"",cert:"",cert_s:"",logoData:null,certData:null},otherRules:{file_name:[{required:!0,message:"文件名称不能为空"}],url:[{required:!0,message:"请上传文件"}]},brandRules:{name:[{required:!0,message:"品牌名称不能为空"}],name_e:[{required:!0,message:"品牌英文不能为空"}],logo:[{required:!0,message:"请上传品牌logo"}],cert:[{required:!0,message:"请上传品牌资质"}]},typeList:[],typeDialogVisible:!1,otherImageVisible:!1,brandDialogVisible:!1,navs:[{name:"厂商信息",url:"/enterpriseManagement/enterpriseInfo",type:"enterpriseInfo"},{name:"产品列表",url:"/enterpriseManagement/enterpriseProducts",type:"enterpriseProducts"}]}},created:function(){this.business_id=this.$route.query.business_id},mounted:function(){this.getReviewInfo()},methods:{getReviewInfo:function(){var e=this,t=this,a={business_id:t.business_id};Object(c.a)({url:"/user/detail",method:"post",data:a}).then(function(t){e.checkDetail=t})},doEdit:function(){if(this.edit)return void this.modify();this.edit=!0,this.getTypeList()},modify:function(){var e=this;this.$refs.form.validate(function(t){if(t){var a=e.checkDetail.type.map(function(e){return e.type_id}),i=e.checkDetail.brands.map(function(e){return{brand_id:e.brand_id?e.brand_id:0,brand_name:e.brand_name?e.brand_name:"",manufacturer_name:e.manufacturer_name?e.manufacturer_name:"",logo:e.logoData?e.logoData:{file_id:e.logo_id,type:3,file_url:e.logo},certs:[e.certsData?e.certsData:{file_id:e.cert_ids,type:9,file_url:e.certs}]}}),r=e.checkDetail.licenses.map(function(e){return e.fileData?l()({},e.fileData,{filename:e.filename}):{file_id:e.file_id,type:e.type,filename:e.filename}}),n=JSON.parse(s()(e.checkDetail));n.business_id=e.business_id,n.types=a,n.brands=i,n.licenses=r,delete n.type,Object(c.a)({url:"/user/edit_by_admin",method:"post",data:n}).then(function(t){e.$message.info("保存成功")}).catch(function(t){e.$message.error(t.msg)})}})},beforeImgUpload:function(e){var t=e.size/1024/1024<5;return t||this.$message.error("请上传5M大小内图片文件"),t},handleImgSuccess:function(e){var t=this;return function(a,i,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e;if(200!==a.code)return void t.$message.error("上传出错，请重新上传");t.checkDetail.licenses[n].file_url=a.result.file_url,t.checkDetail.licenses[n].fileData=a.result}},handeler:function(e,t,a){if(200!==e.code)return void this.$message.error("上传出错，请重新上传");8==e.result.type?(this.uploadForm.url=e.result.filename,this.uploadForm.url_s=e.result.file_url,this.uploadForm.fileData=e.result):3==e.result.type?(this.brandForm.logo=e.result.filename,this.brandForm.logo_s=e.result.file_url,this.brandForm.logoData=e.result):9==e.result.type&&(this.brandForm.cert=e.result.filename,this.brandForm.cert_s=e.result.file_url,this.brandForm.certData=e.result)},handleImgElseSuccess:function(e){var t=this;return function(a,i,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e;if(200!==a.code)return void t.$message.error("上传出错，请重新上传");3==a.result.type?(t.checkDetail.brands[n].logo=a.result.file_url,t.checkDetail.brands[n].logoData=a.result):9==a.result.type&&(t.checkDetail.brands[n].certs=a.result.file_url,t.checkDetail.brands[n].certsData=a.result)}},removeType:function(e,t){var a=this;Object(c.a)({url:"/admin/check_has_product",method:"post",data:{type_id:t.type_id,business_id:this.business_id}}).then(function(t){0==t.ret?a.checkDetail.type.splice(e,1):a.$message.warning("该产品下有关联设备，不可删除！")}).catch(function(e){a.$message.error(e.msg)})},addType:function(){var e=[],t=!0,a=!1,i=void 0;try{for(var n,s=r()(this.typeList);!(t=(n=s.next()).done);t=!0){var o=n.value;o.status&&e.push({type_id:o.id,name:o.name})}}catch(e){a=!0,i=e}finally{try{!t&&s.return&&s.return()}finally{if(a)throw i}}this.checkDetail.type=e,this.typeDialogVisible=!1},addImage:function(){var e=this;this.$refs.uploadForm.validate(function(t){t&&(e.checkDetail.licenses.push({type:8,filename:e.uploadForm.file_name,file_url:e.uploadForm.url_s,fileData:e.uploadForm.fileData}),e.otherImageVisible=!1)})},addBrand:function(){var e=this;this.$refs.brandForm.validate(function(t){t&&(e.checkDetail.brands.push({brand_name:e.brandForm.name,manufacturer_name:e.brandForm.name_e,logo:e.brandForm.logo_s,certs:e.brandForm.cert_s,logoData:e.brandForm.logoData,certsData:e.brandForm.certData}),e.brandDialogVisible=!1)})},removeBrand:function(e,t){var a=this;Object(c.a)({url:"/admin/check_has_product",method:"post",data:{brand_id:t.brand_id,business_id:this.business_id}}).then(function(t){0==t.ret?a.checkDetail.brands.splice(e,1):a.$message.warning("该品牌下有关联设备，不可删除！")}).catch(function(e){a.$message.error(e.msg)})},getTypeList:function(){var e=this;Object(c.a)({url:"product/type_lists",method:"post",data:{}}).then(function(t){function a(e,t){return e.id-t.id}var i=t.list,n=!0,s=!1,o=void 0;try{for(var l,c=r()(i);!(n=(l=c.next()).done);n=!0){l.value.status=!1}}catch(e){s=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(s)throw o}}i.sort(a),e.typeList=i}).catch(function(t){e.$message.error(t.msg)})},checkTypeList:function(){this.typeDialogVisible=!0;var e=this.checkDetail.type.map(function(e){return e.type_id}),t=!0,a=!1,i=void 0;try{for(var n,s=r()(this.typeList);!(t=(n=s.next()).done);t=!0){var o=n.value;e.indexOf(o.id)>=0?o.status=!0:o.status=!1}}catch(e){a=!0,i=e}finally{try{!t&&s.return&&s.return()}finally{if(a)throw i}}},setCheck:function(e){e.status||(e.status=!0)}},deactivated:function(){this.$destroy()}}}});
//# sourceMappingURL=13.e9ad240ab42416c712aa.js.map