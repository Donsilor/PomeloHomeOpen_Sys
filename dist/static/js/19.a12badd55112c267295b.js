webpackJsonp([19],{E4LH:function(e,t,a){"use strict";function o(e){return/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g.test(e)}function r(e,t,a){var o=!0;if(!t)return void a();for(var r=0;r<t.length;r++){var i=t.charCodeAt(r);if(!(i>=65&&i<=90||i>=97&&i<=122||95==i)){o=!1,a("只能是字母下划线");break}}o&&a()}function i(e,t,a){var o=!0;if(!t)return void a();for(var r=0;r<t.length;r++){var i=/[\u4e00-\u9fa5a-zA-Z]+/g,n=t.charAt(r);if(!i.test(n)){o=!1,a("只能是中文字母");break}}o&&a()}t.a=o,t.c=r,t.b=i},PgcN:function(e,t,a){t=e.exports=a("BkJT")(!0),t.push([e.i,".addCategoryPage .desTitleTop{border-bottom:1px solid #ddd;line-height:30px;height:30px;width:100%}.addCategoryPage .channel .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;width:110px;height:110px}.addCategoryPage .channel .el-upload:hover{border-color:#409eff}.addCategoryPage .avatar-uploader-icon{font-size:22px;color:#8c939d;width:110px;height:110px;line-height:110px;text-align:center}.addCategoryPage .avatar-uploader{display:inline-block;margin-right:15px}.addCategoryPage .avatar-uploader:last-child{margin-right:0}.addCategoryPage .avatar{width:110px;height:110px;display:block}.addCategoryPage .line25 .el-form-item__label{line-height:25px}.addCategoryPage .el-icon-delete{cursor:pointer}.addCategoryPage .el-form-item__error{padding:5px 15px!important}.addCategoryPage .fileuploadItem{display:table-cell;position:relative}.addCategoryPage .fileuploadItem .disabled .el-upload{background-color:#f5f7fa;cursor:not-allowed}.addCategoryPage .fileuploadItem:last-child .avatar-uploader{margin-right:0!important}.addCategoryPage .fileuploadItem .file_upload_img_des{position:absolute;top:109px;text-align:center;color:#999;font-size:12px;left:57px;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:110px}.addCategoryPage .el-tooltip__popper{max-width:300px}.ttips{color:#999;font-size:12px;margin:0;padding:0}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/typeManagement/addVoicePlatform.vue"],names:[],mappings:"AACA,8BACE,6BAA8B,AAC9B,iBAAkB,AAClB,YAAa,AACb,UAAY,CACb,AACD,qCACE,0BAA2B,AAC3B,kBAAmB,AACnB,eAAgB,AAChB,kBAAmB,AACnB,gBAAiB,AACjB,YAAa,AACb,YAAc,CACf,AACD,2CACE,oBAAsB,CACvB,AACD,uCACE,eAAgB,AAChB,cAAe,AACf,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,iBAAmB,CACpB,AACD,kCACE,qBAAsB,AACtB,iBAAmB,CACpB,AACD,6CACE,cAAkB,CACnB,AACD,yBACE,YAAa,AACb,aAAc,AACd,aAAe,CAChB,AACD,8CACE,gBAAkB,CACnB,AACD,iCACE,cAAgB,CACjB,AACD,sCACE,0BAA6B,CAC9B,AACD,iCACE,mBAAoB,AACpB,iBAAmB,CACpB,AACD,sDACE,yBAA0B,AAC1B,kBAAoB,CACrB,AACD,6DACE,wBAA6B,CAC9B,AACD,sDACE,kBAAmB,AACnB,UAAW,AACX,kBAAmB,AACnB,WAAY,AACZ,eAAgB,AAChB,UAAW,AACX,mCAAoC,AAC5B,2BAA4B,AACpC,WAAa,CACd,AACD,qCACE,eAAiB,CAClB,AACD,OACE,WAAY,AACZ,eAAgB,AAChB,SAAU,AACV,SAAW,CACZ",file:"addVoicePlatform.vue",sourcesContent:["\n.addCategoryPage .desTitleTop {\n  border-bottom: 1px #ddd solid;\n  line-height: 30px;\n  height: 30px;\n  width: 100%;\n}\n.addCategoryPage .channel .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  width: 110px;\n  height: 110px;\n}\n.addCategoryPage .channel .el-upload:hover {\n  border-color: #409EFF;\n}\n.addCategoryPage .avatar-uploader-icon {\n  font-size: 22px;\n  color: #8c939d;\n  width: 110px;\n  height: 110px;\n  line-height: 110px;\n  text-align: center;\n}\n.addCategoryPage .avatar-uploader {\n  display: inline-block;\n  margin-right: 15px;\n}\n.addCategoryPage .avatar-uploader:last-child {\n  margin-right: 0px;\n}\n.addCategoryPage .avatar {\n  width: 110px;\n  height: 110px;\n  display: block;\n}\n.addCategoryPage .line25 .el-form-item__label {\n  line-height: 25px;\n}\n.addCategoryPage .el-icon-delete {\n  cursor: pointer;\n}\n.addCategoryPage .el-form-item__error {\n  padding: 5px 15px !important;\n}\n.addCategoryPage .fileuploadItem {\n  display: table-cell;\n  position: relative;\n}\n.addCategoryPage .fileuploadItem .disabled .el-upload {\n  background-color: #f5f7fa;\n  cursor: not-allowed;\n}\n.addCategoryPage .fileuploadItem:last-child .avatar-uploader {\n  margin-right: 0px !important;\n}\n.addCategoryPage .fileuploadItem .file_upload_img_des {\n  position: absolute;\n  top: 109px;\n  text-align: center;\n  color: #999;\n  font-size: 12px;\n  left: 57px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 110px;\n}\n.addCategoryPage .el-tooltip__popper {\n  max-width: 300px;\n}\n.ttips {\n  color: #999;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n}\n"],sourceRoot:""}])},UNhK:function(e,t,a){"use strict";function o(e){a("b9Lv")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("uP88"),i=a("bsBS"),n=a("C7Lr"),d=o,l=n(r.a,i.a,!1,d,null,null);t.default=l.exports},b9Lv:function(e,t,a){var o=a("PgcN");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("8bSs")("55a69952",o,!0)},bsBS:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container addCategoryPage"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"ghost"},on:{click:e.handleBackEvent}},[e._v("返回")]),e._v(" "),e.isEdit?e._e():a("el-button",{attrs:{type:"primary"},on:{click:e.addVoice}},[e._v("确定并添加该语音平台")]),e._v(" "),e.isEdit?a("el-button",{attrs:{type:"primary"},on:{click:e.editVoice}},[e._v(e._s(e.editText))]):e._e()],1),e._v(" "),a("el-col",{staticStyle:{margin:"20px 0px","padding-bottom":"40px"},attrs:{span:24}},[a("div",{staticClass:"desTitleTop"},[e._v("基本信息")]),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form",{ref:"ruleForm",staticStyle:{"margin-top":"20px"},attrs:{rules:e.rules,model:e.form,"label-width":"80px",size:"large"}},[a("el-form-item",{attrs:{label:"语音平台中文","label-width":"120px",prop:"name"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{maxlength:32,span:6,disabled:e.disabled,placeholder:" 中文名限中文、字母、32个字符、区分大小写"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"语音平台描述","label-width":"120px",prop:"desc"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{type:"textarea",rows:6,disabled:e.disabled,span:6,placeholder:" 请输入语音平台描述"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{"padding-bottom":"30px"},attrs:{label:"语音平台logo","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("p",{staticClass:"ttips"},[e._v("图标要求格式png，logo以外区域透明，大小5M以内")]),e._v(" "),a("div",{staticClass:"fileuploadItem channel"},[a("el-upload",{staticClass:"avatar-uploader",class:e.disabled?"disabled":"",attrs:{action:"/api/index.php/files/save","show-file-list":!1,"on-success":e.handleLogoSuccess,"before-upload":e.beforeLogoUpload,accept:"image/png",disabled:e.disabled,data:e.logo}},[""!=e.form.logo.url?a("img",{staticClass:"avatar",attrs:{src:e.form.logo.url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)])],1)],1)],1)],1)],1)],1)},r=[],i={render:o,staticRenderFns:r};t.a=i},uP88:function(e,t,a){"use strict";var o=a("aA9S"),r=a.n(o),i=a("Gir3"),n=(a.n(i),a("Vo7i")),d=(a("VSB1"),a("TIfe")),l=a("E4LH");t.a={name:"addVoicePlatform",computed:{},created:function(){this.isEdit&&this.getVoiceInfo()},mounted:function(){},data:function(){return{isEdit:!!this.$route.query.id,token:Object(d.a)(),isLoadData:!1,editText:"编辑语音平台信息",disabled:!!this.$route.query.id,id:this.$route.query.id?this.$route.query.id:"",form:{voice_id:this.$route.query.id,name:"",desc:"",logo:{id:"",type:29,object:"",filename:"",url:"",md5:""}},rules:{name:[{required:!0,message:"请输入语音平台中文",trigger:"blur"},{validator:l.b}],desc:[{required:!0,message:"请输入语音平台描述",trigger:"blur"}]},logo:{token:Object(d.a)(),type:29}}},methods:{getVoiceInfo:function(){var e=this;Object(n.a)({url:"/admin/voice/info",method:"get",data:{voice_id:this.$route.query.id}}).then(function(t){e.form.name=t.name,e.form.desc=t.desc,e.form.logo=t.logo})},handleLogoSuccess:function(e,t){if(200!==e.code)return void this.$message.error(e.msg);var a=r()({id:this.form.logo.id},e.result);a.url=a.file_url,this.form.logo=a},beforeLogoUpload:function(e){var t="image/png"===e.type,a=e.size/1024/1024<5;return t||this.$message.error("请上传5M大小内PNG格式的logo"),a||this.$message.error("请上传5M大小内PNG格式的logo"),t&&a},editVoice:function(){var e=this;if(this.disabled)return this.editText="确认并提交修改",this.disabled=!1,!1;this.$refs.ruleForm.validate(function(t){if(t){if(""==e.form.logo.url)return void e.$message.error("请上传语音平台logo！");e.$confirm("是否确认保存修改后语音平台信息？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.a)({url:"/admin/voice/edit",method:"post",data:e.form}).then(function(t){e.disabled=!0,e.editText="编辑语音平台信息",e.$message({type:"success",message:"保存成功!"})}).catch(function(t){e.$message({type:"error",message:t.msg})})})}})},addVoice:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(t){if(""==e.form.logo.url)return void e.$message.error("请上传语音平台logo");e.$confirm("是否确定添加该语音平台？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.a)({url:"/admin/voice/add",method:"post",data:e.form}).then(function(t){e.$message({type:"success",message:"保存成功!"}),setTimeout(function(){e.$router.push({path:"/typeManagement/voicePlatform"})},2e3)}).catch(function(t){e.$message({type:"error",message:t.msg})})})}})},handleBackEvent:function(){this.$router.push({path:"/typeManagement/voicePlatform"})}},components:{}}}});
//# sourceMappingURL=19.a12badd55112c267295b.js.map