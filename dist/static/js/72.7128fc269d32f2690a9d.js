webpackJsonp([72],{"/Rut":function(e,t,a){var r=a("LDaL");(r="string"==typeof r?[[e.i,r,""]]:r).locals&&(e.exports=r.locals);a("8bSs")("239bdad9",r,!0)},LDaL:function(e,t,a){(e.exports=a("BkJT")(!0)).push([e.i,".addCategoryPage .desTitleTop{border-bottom:1px solid #ddd;line-height:30px;height:30px;width:100%}.addCategoryPage .channel .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;width:110px;height:110px}.addCategoryPage .channel .el-upload:hover{border-color:#409eff}.addCategoryPage .avatar-uploader-icon{font-size:22px;color:#8c939d;width:110px;height:110px;line-height:110px;text-align:center}.addCategoryPage .avatar-uploader{display:inline-block;margin-right:15px}.addCategoryPage .avatar-uploader:last-child{margin-right:0}.addCategoryPage .avatar{width:110px;height:110px;display:block}.addCategoryPage .line25 .el-form-item__label{line-height:25px}.addCategoryPage .el-icon-delete{cursor:pointer}.addCategoryPage .el-form-item__error{padding:5px 15px!important}.addCategoryPage .fileuploadItem{display:table-cell;position:relative}.addCategoryPage .fileuploadItem .disabled .el-upload{background-color:#f5f7fa;cursor:not-allowed}.addCategoryPage .fileuploadItem:last-child .avatar-uploader{margin-right:0!important}.addCategoryPage .fileuploadItem .file_upload_img_des{position:absolute;top:109px;text-align:center;color:#999;font-size:12px;left:57px;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:110px}.addCategoryPage .el-tooltip__popper{max-width:300px}.ttips{color:#999;font-size:12px;margin:0;padding:0}","",{version:3,sources:["E:/A-project/PomeloHomeOpen_Sys/src/views/typeManagement/addNetwork.vue"],names:[],mappings:"AACA,8BACE,6BAA8B,AAC9B,iBAAkB,AAClB,YAAa,AACb,UAAY,CACb,AACD,qCACE,0BAA2B,AAC3B,kBAAmB,AACnB,eAAgB,AAChB,kBAAmB,AACnB,gBAAiB,AACjB,YAAa,AACb,YAAc,CACf,AACD,2CACE,oBAAsB,CACvB,AACD,uCACE,eAAgB,AAChB,cAAe,AACf,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,iBAAmB,CACpB,AACD,kCACE,qBAAsB,AACtB,iBAAmB,CACpB,AACD,6CACE,cAAkB,CACnB,AACD,yBACE,YAAa,AACb,aAAc,AACd,aAAe,CAChB,AACD,8CACE,gBAAkB,CACnB,AACD,iCACE,cAAgB,CACjB,AACD,sCACE,0BAA6B,CAC9B,AACD,iCACE,mBAAoB,AACpB,iBAAmB,CACpB,AACD,sDACE,yBAA0B,AAC1B,kBAAoB,CACrB,AACD,6DACE,wBAA6B,CAC9B,AACD,sDACE,kBAAmB,AACnB,UAAW,AACX,kBAAmB,AACnB,WAAY,AACZ,eAAgB,AAChB,UAAW,AACX,mCAAoC,AAC5B,2BAA4B,AACpC,WAAa,CACd,AACD,qCACE,eAAiB,CAClB,AACD,OACE,WAAY,AACZ,eAAgB,AAChB,SAAU,AACV,SAAW,CACZ",file:"addNetwork.vue",sourcesContent:["\n.addCategoryPage .desTitleTop {\n  border-bottom: 1px #ddd solid;\n  line-height: 30px;\n  height: 30px;\n  width: 100%;\n}\n.addCategoryPage .channel .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  width: 110px;\n  height: 110px;\n}\n.addCategoryPage .channel .el-upload:hover {\n  border-color: #409EFF;\n}\n.addCategoryPage .avatar-uploader-icon {\n  font-size: 22px;\n  color: #8c939d;\n  width: 110px;\n  height: 110px;\n  line-height: 110px;\n  text-align: center;\n}\n.addCategoryPage .avatar-uploader {\n  display: inline-block;\n  margin-right: 15px;\n}\n.addCategoryPage .avatar-uploader:last-child {\n  margin-right: 0px;\n}\n.addCategoryPage .avatar {\n  width: 110px;\n  height: 110px;\n  display: block;\n}\n.addCategoryPage .line25 .el-form-item__label {\n  line-height: 25px;\n}\n.addCategoryPage .el-icon-delete {\n  cursor: pointer;\n}\n.addCategoryPage .el-form-item__error {\n  padding: 5px 15px !important;\n}\n.addCategoryPage .fileuploadItem {\n  display: table-cell;\n  position: relative;\n}\n.addCategoryPage .fileuploadItem .disabled .el-upload {\n  background-color: #f5f7fa;\n  cursor: not-allowed;\n}\n.addCategoryPage .fileuploadItem:last-child .avatar-uploader {\n  margin-right: 0px !important;\n}\n.addCategoryPage .fileuploadItem .file_upload_img_des {\n  position: absolute;\n  top: 109px;\n  text-align: center;\n  color: #999;\n  font-size: 12px;\n  left: 57px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 110px;\n}\n.addCategoryPage .el-tooltip__popper {\n  max-width: 300px;\n}\n.ttips {\n  color: #999;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n}\n"],sourceRoot:""}])},ULp8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("/QDj");var r=a("Vo7i"),o=a("TIfe"),n={name:"addNetwork",computed:{},created:function(){this.getChannelList(),this.$route.query.distributors_id&&this.getInfo(this.$route.query.distributors_id)},mounted:function(){},data:function(){return{token:Object(o.b)(),add:!this.$route.query.distributors_id,form:{distributors_id:this.$route.query.distributors_id?parseInt(this.$route.query.distributors_id):"",network_name:"",network_des:""},channelList:[],rules:{distributors_id:[{required:!0,message:"请选择渠道商名称",trigger:"blur"}],network_name:[{required:!0,message:"请输入配网方式",trigger:"blur"},{max:32,message:"配网方式不能超过32个字符",trigger:"blur"}]}}},methods:{addNetword:function(){var t=this;this.$refs.ruleForm.validate(function(e){e&&t.$confirm("是否确定添加该配网方式？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.a)({url:"/distribution/add",method:"post",data:t.form}).then(function(e){t.$message({type:"success",message:"保存成功!"}),setTimeout(function(){t.$router.push({path:"/typeManagement/networkManager"})},2e3)}).catch(function(e){t.$message({type:"error",message:e.msg})})})})},getChannelList:function(){var t=this;Object(r.a)({url:"/admin/distributor/lists",method:"post",data:{type:1}}).then(function(e){e.list.forEach(function(e){t.channelList.push(e)})})},getInfo:function(e){var t=this;Object(r.a)({url:"/admin/distribution/get",method:"post",data:{distributors_id:e}}).then(function(e){e.forEach(function(e){e.id==t.$route.query.id&&(t.form.network_name=e.network_name,t.form.network_des=e.network_des)})})},handleBackEvent:function(){this.$router.push({path:"/typeManagement/networkManager"})}},components:{}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container addCategoryPage"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"ghost"},on:{click:t.handleBackEvent}},[t._v("返回")]),t._v(" "),t.add?a("el-button",{attrs:{type:"primary"},on:{click:t.addNetword}},[t._v("确定并添加该配网方式")]):t._e()],1),t._v(" "),a("el-col",{staticStyle:{margin:"20px 0px","padding-bottom":"40px"},attrs:{span:24}},[a("div",{staticClass:"desTitleTop"},[t._v("基本信息")]),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form",{ref:"ruleForm",staticStyle:{"margin-top":"20px"},attrs:{rules:t.rules,model:t.form,"label-width":"80px",size:"large"}},[a("el-form-item",{attrs:{label:"渠道商名称","label-width":"120px",prop:"distributors_id"}},[a("el-col",{attrs:{span:12}},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:!t.add,placeholder:"请选择渠道商名称"},model:{value:t.form.distributors_id,callback:function(e){t.$set(t.form,"distributors_id",e)},expression:"form.distributors_id"}},t._l(t.channelList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"配网方式","label-width":"120px",prop:"network_name"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{readonly:!t.add,span:6,placeholder:"中英文、数字、特殊字符输入,最多32个字符，区分大小写"},model:{value:t.form.network_name,callback:function(e){t.$set(t.form,"network_name",e)},expression:"form.network_name"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"配网方式描述","label-width":"120px",prop:"network_des"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{readonly:!t.add,maxlength:500,rows:5,span:6,type:"textarea"},model:{value:t.form.network_des,callback:function(e){t.$set(t.form,"network_des",e)},expression:"form.network_des"}})],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};i=a("C7Lr")(n,i,!1,function(e){a("/Rut")},null,null),t.default=i.exports}});