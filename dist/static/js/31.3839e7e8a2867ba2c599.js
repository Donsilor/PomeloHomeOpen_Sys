webpackJsonp([31],{"C+Vd":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("woOf"),r=a.n(o),i=(a("zL8q"),a("Vo7i")),n=(a("VSB1"),a("TIfe")),l=a("E4LH"),d={name:"ChannelDetail",components:{},data:function(){return{isEdit:!!this.$route.query.id,token:Object(n.b)(),isLoadData:!1,hasProduct:!1,editText:"编辑渠道商信息",disabled:!!this.$route.query.id,id:this.$route.query.id?this.$route.query.id:"",form:{sort:"",id:this.$route.query.id,name:"",name_e:"",logo:{id:"",type:27,object:"",filename:"",url:"",md5:""},qrcode:{id:"",type:28,object:"",filename:"",url:"",md5:""},is_third:1,third_info:""},rules:{name:[{required:!0,message:"请输入渠道商名称",trigger:"blur"},{max:32,message:"渠道商名称不能超过32个字符",trigger:"blur"},{validator:l.b}],name_e:[{required:!0,message:"请输入渠道商英文",trigger:"blur"},{max:32,message:"渠道商英文不能超过32个字符",trigger:"blur"},{validator:l.c}]},logo:{token:Object(n.b)(),type:27},qrcode:{token:Object(n.b)(),type:28}}},computed:{},created:function(){this.isEdit&&this.getChannelInfo()},mounted:function(){},methods:{radioChange:function(){this.form.third_info=""},getChannelInfo:function(){var t=this;Object(i.a)({url:"/distributor/info",method:"post",data:{id:this.$route.query.id}}).then(function(e){t.form.name=e.name,t.form.sort=e.sort,t.form.name_e=e.name_e,t.form.logo=e.logo,t.form.qrcode=e.qrcode,t.hasProduct=!!e.has_product,t.form.is_third=e.is_third,t.form.third_info=e.third_info})},handleLogoSuccess:function(e){var t;200===e.code?((t=r()({},e.result)).url=t.file_url,this.form.logo=t):this.$message.error(e.msg)},handleQrSuccess:function(e){var t;200===e.code?((t=r()({},e.result)).url=t.file_url,this.form.qrcode=t):this.$message.error(e.msg)},beforeLogoUpload:function(e){var t="image/png"===e.type,a=e.size/1024/1024<5;return t||this.$message.error("请上传5M大小内PNG格式的logo"),a||this.$message.error("请上传5M大小内PNG格式的logo"),t&&a},beforeQrUpload:function(e){var t=e.size/1024/1024<5;return t||this.$message.error("请上传5M大小内的二维码图标"),t},editChannel:function(){var t=this;if(this.disabled)return this.editText="确认并提交修改",this.disabled=!1;this.$refs.ruleForm.validate(function(e){if(e){if(""==t.form.logo.url||""==t.form.qrcode.url)return void t.$message.error("请上传渠道商logo和二维码！");t.$confirm("是否确认保存修改后渠道商信息？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.a)({url:"/distributor/edit",method:"post",data:t.form}).then(function(e){t.disabled=!0,t.editText="编辑渠道商信息",t.$message({type:"success",message:"保存成功!"})}).catch(function(e){t.$message({type:"error",message:e.msg})})})}})},addChannel:function(){var t=this;this.$refs.ruleForm.validate(function(e){if(e){if(""==t.form.logo.url||""==t.form.qrcode.url)return void t.$message.error("请上传渠道商logo和二维码！");t.$confirm("是否确定添加该渠道商？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.a)({url:"/distributor/add",method:"post",data:t.form}).then(function(e){t.$message({type:"success",message:"保存成功!"}),setTimeout(function(){t.$router.push({path:"/typeManagement/channelManager"})},2e3)}).catch(function(e){t.$message({type:"error",message:e.msg})})})}})},handleDelEvent:function(){var e=this;this.$confirm("是否确认删除此渠道商，删除不能恢复。","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.deleteChannel()}).catch(function(){})},deleteChannel:function(){var t=this;Object(i.a)({url:"/distributor/delete",method:"post",data:{id:this.form.id}}).then(function(e){e&&(t.$message.info("删除成功！"),t.$router.push({path:"/typeManagement/channelManager"}))}).catch(function(e){})},handleBackEvent:function(){this.$router.push({path:"/typeManagement/channelManager"})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container addCategoryPage"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"ghost"},on:{click:t.handleBackEvent}},[t._v("返回")]),t._v(" "),t.isEdit?t._e():a("el-button",{attrs:{type:"primary"},on:{click:t.addChannel}},[t._v("确定并添加该渠道商")]),t._v(" "),t.isEdit?a("el-button",{attrs:{type:"primary"},on:{click:t.editChannel}},[t._v(t._s(t.editText))]):t._e(),t._v(" "),t.isEdit&&!t.hasProduct?a("el-button",{attrs:{type:"danger"},on:{click:t.handleDelEvent}},[t._v("删除该渠道商")]):t._e()],1),t._v(" "),a("el-col",{staticStyle:{margin:"20px 0px","padding-bottom":"40px"},attrs:{span:24}},[a("div",{staticClass:"desTitleTop"},[t._v("基本信息")]),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form",{ref:"ruleForm",staticStyle:{"margin-top":"20px"},attrs:{rules:t.rules,model:t.form,"label-width":"80px",size:"large"}},[a("el-form-item",{attrs:{label:"序号","label-width":"120px",prop:"sort"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{span:6,disabled:t.disabled||t.hasProduct,placeholder:" 请输入序号"},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道商名称","label-width":"120px",prop:"name"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{span:6,disabled:t.disabled||t.hasProduct,placeholder:" 中文名限中文、字母、32个字符、区分大小写"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道商英文","label-width":"120px",prop:"name_e"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{disabled:t.disabled||t.hasProduct,span:6,placeholder:" 字母、下划线, 最多32个字符，区分大小写"},model:{value:t.form.name_e,callback:function(e){t.$set(t.form,"name_e",e)},expression:"form.name_e"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{"padding-bottom":"30px"},attrs:{label:"渠道商logo","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("p",{staticClass:"ttips"},[t._v("图标要求格式png，logo以外区域透明，大小5M以内")]),t._v(" "),a("div",{staticClass:"fileuploadItem channel"},[a("el-upload",{staticClass:"avatar-uploader",class:t.disabled?"disabled":"",attrs:{"show-file-list":!1,"on-success":t.handleLogoSuccess,"before-upload":t.beforeLogoUpload,disabled:t.disabled,data:t.logo,action:"/api/index.php/files/save",accept:"image/png"}},[""!=t.form.logo.url?a("img",{staticClass:"avatar",attrs:{src:t.form.logo.url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)])],1),t._v(" "),a("el-form-item",{staticStyle:{"padding-bottom":"30px"},attrs:{label:"二维码","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("p",{staticClass:"ttips"},[t._v("图标要求格式png、jpg、jpeg、gif、bmp，大小5M以内")]),t._v(" "),a("div",{staticClass:"fileuploadItem channel"},[a("el-upload",{staticClass:"avatar-uploader",class:t.disabled?"disabled":"",attrs:{"show-file-list":!1,"on-success":t.handleQrSuccess,"before-upload":t.beforeQrUpload,disabled:t.disabled,data:t.qrcode,action:"/api/index.php/files/save",accept:"image/*"}},[""!=t.form.qrcode.url?a("img",{staticClass:"avatar",attrs:{src:t.form.qrcode.url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)])],1),t._v(" "),a("el-form-item",{staticStyle:{"padding-bottom":"30px"},attrs:{label:"是否第三方","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-radio",{attrs:{label:1,disabled:t.disabled},on:{change:t.radioChange},model:{value:t.form.is_third,callback:function(e){t.$set(t.form,"is_third",e)},expression:"form.is_third"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:0,disabled:t.disabled},on:{change:t.radioChange},model:{value:t.form.is_third,callback:function(e){t.$set(t.form,"is_third",e)},expression:"form.is_third"}},[t._v("否")])],1)],1),t._v(" "),t.form.is_third?a("el-form-item",{staticStyle:{"padding-bottom":"30px"},attrs:{label:"第三方简介","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{type:"textarea",disabled:t.disabled,rows:2,max:32,placeholder:"内容不限字符，32个字符，区别大小写"},model:{value:t.form.third_info,callback:function(e){t.$set(t.form,"third_info",e)},expression:"form.third_info"}})],1)],1):t._e()],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(d,s,!1,function(e){a("qH+g")},null,null);t.default=c.exports},E4LH:function(e,t,a){"use strict";t.a=function(e){return/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g.test(e)},t.c=function(e,t,a){var o=!0;if(!t)return void a();for(var r=0;r<t.length;r++){var i=t.charCodeAt(r);if(!(65<=i&&i<=90||97<=i&&i<=122||95==i)){o=!1,a("只能是字母下划线");break}}o&&a()},t.b=function(e,t,a){var o=!0;if(!t)return void a();for(var r=0;r<t.length;r++){var i=t.charAt(r);if(!/[\u4e00-\u9fa5a-zA-Z]+/g.test(i)){o=!1,a("只能是中文字母");break}}o&&a()}},"G/Kv":function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,".addCategoryPage .desTitleTop{border-bottom:1px solid #ddd;line-height:30px;height:30px;width:100%}.addCategoryPage .channel .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;width:110px;height:110px}.addCategoryPage .channel .el-upload:hover{border-color:#409eff}.addCategoryPage .avatar-uploader-icon{font-size:22px;color:#8c939d;width:110px;height:110px;line-height:110px;text-align:center}.addCategoryPage .avatar-uploader{display:inline-block;margin-right:15px}.addCategoryPage .avatar-uploader:last-child{margin-right:0}.addCategoryPage .avatar{width:110px;height:110px;display:block}.addCategoryPage .line25 .el-form-item__label{line-height:25px}.addCategoryPage .el-icon-delete{cursor:pointer}.addCategoryPage .el-form-item__error{padding:5px 15px!important}.addCategoryPage .fileuploadItem{display:table-cell;position:relative}.addCategoryPage .fileuploadItem .disabled .el-upload{background-color:#f5f7fa;cursor:not-allowed}.addCategoryPage .fileuploadItem:last-child .avatar-uploader{margin-right:0!important}.addCategoryPage .fileuploadItem .file_upload_img_des{position:absolute;top:109px;text-align:center;color:#999;font-size:12px;left:57px;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:110px}.addCategoryPage .el-tooltip__popper{max-width:300px}.ttips{color:#999;font-size:12px;margin:0;padding:0}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/typeManagement/channelDetail.vue"],names:[],mappings:"AACA,8BACE,6BAA8B,AAC9B,iBAAkB,AAClB,YAAa,AACb,UAAY,CACb,AACD,qCACE,0BAA2B,AAC3B,kBAAmB,AACnB,eAAgB,AAChB,kBAAmB,AACnB,gBAAiB,AACjB,YAAa,AACb,YAAc,CACf,AACD,2CACE,oBAAsB,CACvB,AACD,uCACE,eAAgB,AAChB,cAAe,AACf,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,iBAAmB,CACpB,AACD,kCACE,qBAAsB,AACtB,iBAAmB,CACpB,AACD,6CACE,cAAkB,CACnB,AACD,yBACE,YAAa,AACb,aAAc,AACd,aAAe,CAChB,AACD,8CACE,gBAAkB,CACnB,AACD,iCACE,cAAgB,CACjB,AACD,sCACE,0BAA6B,CAC9B,AACD,iCACE,mBAAoB,AACpB,iBAAmB,CACpB,AACD,sDACE,yBAA0B,AAC1B,kBAAoB,CACrB,AACD,6DACE,wBAA6B,CAC9B,AACD,sDACE,kBAAmB,AACnB,UAAW,AACX,kBAAmB,AACnB,WAAY,AACZ,eAAgB,AAChB,UAAW,AACX,mCAAoC,AAC5B,2BAA4B,AACpC,WAAa,CACd,AACD,qCACE,eAAiB,CAClB,AACD,OACE,WAAY,AACZ,eAAgB,AAChB,SAAU,AACV,SAAW,CACZ",file:"channelDetail.vue",sourcesContent:["\n.addCategoryPage .desTitleTop {\n  border-bottom: 1px #ddd solid;\n  line-height: 30px;\n  height: 30px;\n  width: 100%;\n}\n.addCategoryPage .channel .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  width: 110px;\n  height: 110px;\n}\n.addCategoryPage .channel .el-upload:hover {\n  border-color: #409EFF;\n}\n.addCategoryPage .avatar-uploader-icon {\n  font-size: 22px;\n  color: #8c939d;\n  width: 110px;\n  height: 110px;\n  line-height: 110px;\n  text-align: center;\n}\n.addCategoryPage .avatar-uploader {\n  display: inline-block;\n  margin-right: 15px;\n}\n.addCategoryPage .avatar-uploader:last-child {\n  margin-right: 0px;\n}\n.addCategoryPage .avatar {\n  width: 110px;\n  height: 110px;\n  display: block;\n}\n.addCategoryPage .line25 .el-form-item__label {\n  line-height: 25px;\n}\n.addCategoryPage .el-icon-delete {\n  cursor: pointer;\n}\n.addCategoryPage .el-form-item__error {\n  padding: 5px 15px !important;\n}\n.addCategoryPage .fileuploadItem {\n  display: table-cell;\n  position: relative;\n}\n.addCategoryPage .fileuploadItem .disabled .el-upload {\n  background-color: #f5f7fa;\n  cursor: not-allowed;\n}\n.addCategoryPage .fileuploadItem:last-child .avatar-uploader {\n  margin-right: 0px !important;\n}\n.addCategoryPage .fileuploadItem .file_upload_img_des {\n  position: absolute;\n  top: 109px;\n  text-align: center;\n  color: #999;\n  font-size: 12px;\n  left: 57px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 110px;\n}\n.addCategoryPage .el-tooltip__popper {\n  max-width: 300px;\n}\n.ttips {\n  color: #999;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n}\n"],sourceRoot:""}])},"qH+g":function(e,t,a){var o=a("G/Kv");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("445f57b2",o,!0)}});