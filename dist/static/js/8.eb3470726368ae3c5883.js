webpackJsonp([8],{"0DpW":function(e,t,a){var i=a("MGib");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("5e2a7539",i,!0)},"1alW":function(e,t,a){var i=a("kM2E");i(i.S,"Number",{isInteger:a("AKgy")})},AKgy:function(e,t,a){var i=a("EqjI"),r=Math.floor;e.exports=function(e){return!i(e)&&isFinite(e)&&r(e)===e}},I0YE:function(e,t,a){"use strict";var i=a("mvHQ"),r=a.n(i),s=a("RRo+"),o=a.n(s),d=a("zL8q"),l=(a.n(d),a("Vo7i")),n=(a("VSB1"),a("bzuE")),p=a("TIfe");t.a={name:"AddDevice",components:{},data:function(){var e=function(e,t,a){if(!t)return a(new Error("请输入提示文字"));o()(+t)?a():a(new Error("请输入数字值"))};return{lists:"",typeid:this.$route.query.id,token:Object(p.a)(),product:{},type:{},business:{},brand:{},model:{},is_evergrande:0,COLTD:n.a,form:{type:"",id_type:"",business_id:"",brand_id:"",product_id:"",add_type:"",base_img:{type:23,token:Object(p.a)()},add1_tips:"",add1_button:"",add1_img:{type:"24",token:Object(p.a)(),filename:""},add2_img:{type:"24",token:Object(p.a)(),filename:""},add3_img:{type:"24",token:Object(p.a)(),filename:""},add2_tips:"",add3_tips:"",reset_img:{type:"25",token:Object(p.a)(),filename:""},reset_tips:"",add_time:"",plantform_name:"",plantform_service:"",plantform_des:"",plantform_connect:""},rules:{type_id:[{required:!0,message:"请选择产品品类",trigger:"change"}],add_type:[{required:!0,message:"请选择产品添加方式",trigger:"change"}],add1_tips:[{required:!0,message:"请输入提示文字",trigger:"blur"},{max:255,message:"提示文字不能超过255个字符",trigger:"blur"}],add1_button:[{required:!0,message:"请输入按钮文字",trigger:"blur"},{max:8,message:"按钮文字不能超过8个字符",trigger:"blur"}],add2_tips:[{required:!0,message:"请输入提示文字",trigger:"blur"},{max:255,message:"提示文字不能超过255个字符",trigger:"blur"}],add3_tips:[{required:!0,message:"请输入提示文字",trigger:"blur"},{max:255,message:"提示文字不能超过255个字符",trigger:"blur"}],reset_tips:[{required:!0,message:"请输入重置提示文字",trigger:"blur"},{max:255,message:"重置提示文字不能超过255个字符",trigger:"blur"}],Auth_2_0:[{required:!1,trigger:"blur"}],add_time:[{required:!0,validator:e,trigger:"blur"}],plantform_name:[{required:!0,message:"请输入提示文字",trigger:"blur"},{max:30,message:"提示文字不能超过30个字符",trigger:"blur"}],plantform_service:[{required:!0,message:"请输入提示文字",trigger:"blur"},{max:30,message:"提示文字不能超过30个字符",trigger:"blur"}],plantform_des:[{required:!0,message:"请输入提示文字",trigger:"blur"},{max:30,message:"提示文字不能超过30个字符",trigger:"blur"}],plantform_connect:[{required:!0,message:"请输入提示文字",trigger:"blur"}]},deviceAddTypeList:[],categoryList:[]}},computed:{},watch:{is_evergrande:function(e,t){this.form.type_id="",this.form.business_id="",this.form.brand_id="",this.form.product_id="",this.business={},this.brand={},this.model={}}},created:function(){},mounted:function(){this.getDeviceSelect(),this.getDeviceSelectAddtype(),this.getBigCategory()},methods:{changeType:function(e){this.business=this.lists.find(function(t){return t.type_id===e}).business,this.form.business_id="",this.form.brand_id="",this.form.product_id=""},changeBusiness:function(e){this.brand=this.business.find(function(t){return t.business_id===e}).brand,this.form.brand_id="",this.form.product_id=""},changeBrand:function(e){this.model=this.brand.find(function(t){return t.brand_id==e}).model,this.form.product_id=""},handleAvatarSuccess:function(e,t){var a=e.result;switch(a.type){case 23:this.form.base_img=a,this.form.base_img.token=this.token;break;case 25:this.form.reset_img=a,this.form.reset_img.token=this.token}this.$message({type:"success",message:"上传成功！"})},handleAddImg1Success:function(e,t){this.form.add1_img=e.result,this.form.add1_img.token=this.token,this.$message({type:"success",message:"上传成功！"})},handleAddImg2Success:function(e,t){this.form.add2_img=e.result,this.form.add2_img.token=this.token,this.$message({type:"success",message:"上传成功！"})},handleAddImg3Success:function(e,t){this.form.add3_img=e.result,this.form.add3_img.token=this.token,this.$message({type:"success",message:"上传成功！"})},beforeAvatarUpload:function(e){console.log(e);var t="image/jpeg"===e.type||"image/jpg"||"image/png",a=e.size/1024/1024<5;return t&&a?void 0:(this.$message.error("请上传5M大小内JEPG、JPG、PNG格式的文件"),!1)},getDeviceSelect:function(){var e=this;Object(l.a)({url:"/device/deviceSelect",method:"post",data:{token:this.token}}).then(function(t){e.type=t,e.lists=t})},getBigCategory:function(){var e=this;Object(l.a)({url:"/product/parenttype_lists",method:"post",data:{token:this.token}}).then(function(t){e.categoryList=t.list})},getDeviceSelectAddtype:function(){var e=this;Object(l.a)({url:"/device/deviceAddtype",method:"post",data:{token:this.token}}).then(function(t){e.deviceAddTypeList=t})},handleBackEvent:function(){this.$router.push({path:"/typeManagement/deviceManager"})},confirmDevice:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(t){var a=JSON.parse(r()(e.form));6==a.add_type?(delete a.add1_button,delete a.add1_img,delete a.add1_tips,delete a.add2_img,delete a.add2_tips,delete a.add3_img,delete a.add3_tips,delete a.reset_img,delete a.reset_tips):5!=a.add_type&&(delete a.add3_img,delete a.add3_tips),e.is_evergrande?(a.id_type=3,a.id=e.form.type_id):(a.id_type=e.form.product_id?2:e.form.brand_id?5:e.form.business_id?4:1,a.id=e.form.product_id?e.form.product_id:e.form.brand_id?e.form.brand_id:e.form.business_id?e.form.business_id:e.form.type_id),a.app_id="",Object(l.a)({url:"/device/deviceAdd",method:"post",data:a}).then(function(t){e.$message({type:"success",message:"新增引导页成功！"}),setTimeout(function(){e.$router.push({path:"/typeManagement/deviceManager"})},2e3)}).catch(function(t){e.$message({type:"error",message:t.msg}),e.form.id=""})}else e.$message({type:"error",message:"请完整填写表单再提交！"})})}}}},MGib:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".addDevice .el-form-item__error{padding:5px 15px!important}.addDevice .title{height:30px;border-bottom:1px solid #ededed;width:80%;margin-bottom:30px}.addDevice .upload-container{float:right;margin-left:20px}.addDevice .flex{display:-webkit-box;display:-ms-flexbox;display:flex}.addDevice .desTitle{display:inline-block;padding-right:15px;color:#5a5e66;min-width:81px}.addDevice .add1TextArea{display:inline-block;vertical-align:bottom;margin-top:0}.addDevice .marT20{margin-top:20px}.app-container{padding:20px 40px}","",{version:3,sources:["d:/work/PomeloHomeOpen_Sys/src/views/typeManagement/addDevice.vue"],names:[],mappings:"AACA,gCACE,0BAA6B,CAC9B,AACD,kBACE,YAAa,AACb,gCAAiC,AACjC,UAAW,AACX,kBAAoB,CACrB,AACD,6BACE,YAAa,AACb,gBAAkB,CACnB,AACD,iBACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,qBACE,qBAAsB,AACtB,mBAAoB,AACpB,cAAe,AACf,cAAgB,CACjB,AACD,yBACE,qBAAsB,AACtB,sBAAuB,AACvB,YAAgB,CACjB,AACD,mBACE,eAAiB,CAClB,AACD,eACE,iBAAmB,CACpB",file:"addDevice.vue",sourcesContent:["\n.addDevice .el-form-item__error {\n  padding: 5px 15px !important;\n}\n.addDevice .title {\n  height: 30px;\n  border-bottom: 1px #ededed solid;\n  width: 80%;\n  margin-bottom: 30px;\n}\n.addDevice .upload-container {\n  float: right;\n  margin-left: 20px;\n}\n.addDevice .flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.addDevice .desTitle {\n  display: inline-block;\n  padding-right: 15px;\n  color: #5a5e66;\n  min-width: 81px;\n}\n.addDevice .add1TextArea {\n  display: inline-block;\n  vertical-align: bottom;\n  margin-top: 0px;\n}\n.addDevice .marT20 {\n  margin-top: 20px;\n}\n.app-container {\n  padding: 20px 40px;\n}\n"],sourceRoot:""}])},"RRo+":function(e,t,a){e.exports={default:a("c45H"),__esModule:!0}},aSrj:function(e,t,a){"use strict";function i(e){a("0DpW")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("I0YE"),s=a("nOAn"),o=a("VU/8"),d=i,l=o(r.a,s.a,!1,d,null,null);t.default=l.exports},bzuE:function(e,t,a){"use strict";a.d(t,"d",function(){return i}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return s}),a.d(t,"a",function(){return o});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],r=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],s={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},o="星络科技"},c45H:function(e,t,a){a("1alW"),e.exports=a("FeBl").Number.isInteger},nOAn:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container addDevice"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"ghost"},on:{click:e.handleBackEvent}},[e._v("返回")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.confirmDevice}},[e._v("确认并添加该引导页")])],1),e._v(" "),a("el-col",{staticStyle:{margin:"20px 0px","padding-bottom":"40px"},attrs:{span:24}},[a("el-form",{ref:"ruleForm",staticStyle:{"margin-top":"20px"},attrs:{rules:e.rules,model:e.form,"label-width":"80px",size:"large","label-position":"left"}},[a("div",{staticClass:"title"},[e._v("基本信息")]),e._v(" "),a("el-form-item",{attrs:{"label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.is_evergrande,callback:function(t){e.is_evergrande=t},expression:"is_evergrande"}},[e._v("属于"+e._s(e.COLTD)+"快联产品设备")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"品类","label-width":"120px",prop:"type_id"}},[a("el-col",{attrs:{span:12}},[e.is_evergrande?a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择产品品类"},model:{value:e.form.type_id,callback:function(t){e.$set(e.form,"type_id",t)},expression:"form.type_id"}},e._l(e.categoryList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})):a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择产品品类"},on:{change:e.changeType},model:{value:e.form.type_id,callback:function(t){e.$set(e.form,"type_id",t)},expression:"form.type_id"}},e._l(e.type,function(e){return a("el-option",{key:e.type_id,attrs:{label:e.type_name,value:e.type_id}})}))],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.is_evergrande,expression:"!is_evergrande"}],attrs:{label:"厂商","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择厂商"},on:{change:e.changeBusiness},model:{value:e.form.business_id,callback:function(t){e.$set(e.form,"business_id",t)},expression:"form.business_id"}},e._l(e.business,function(e){return a("el-option",{key:e.business_id,attrs:{label:e.business_name,value:e.business_id}})}))],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.is_evergrande,expression:"!is_evergrande"}],attrs:{label:"品牌","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择品牌"},on:{change:e.changeBrand},model:{value:e.form.brand_id,callback:function(t){e.$set(e.form,"brand_id",t)},expression:"form.brand_id"}},e._l(e.brand,function(e){return a("el-option",{key:e.brand_id,attrs:{label:e.brand_name,value:e.brand_id}})}))],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.is_evergrande,expression:"!is_evergrande"}],attrs:{label:"型号","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择型号"},model:{value:e.form.product_id,callback:function(t){e.$set(e.form,"product_id",t)},expression:"form.product_id"}},e._l(e.model,function(e){return a("el-option",{key:e.product_id,attrs:{label:e.model,value:e.product_id}})}))],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.is_evergrande,expression:"!is_evergrande"}],attrs:{label:"产品图片","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"flex"},[a("el-input",{attrs:{readonly:"",placeholder:"图片支持jpeg、jpg、png格式，大小5M内"},model:{value:e.form.base_img.filename,callback:function(t){e.$set(e.form.base_img,"filename",t)},expression:"form.base_img.filename"}}),e._v(" "),a("el-upload",{staticClass:"upload-container",attrs:{"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,data:e.form.base_img,action:"/api/index.php/files/save",accept:"image/png,image/jpeg,image/jpg"}},[a("el-button",{attrs:{size:"middle",type:"primary"}},[e._v("选择文件")])],1)],1)])],1),e._v(" "),a("div",{staticClass:"title"},[e._v("添加方式")]),e._v(" "),a("el-form-item",{attrs:{label:"产品添加方式","label-width":"120px",prop:"add_type"}},[a("el-col",{attrs:{span:12}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择添加方式"},model:{value:e.form.add_type,callback:function(t){e.$set(e.form,"add_type",t)},expression:"form.add_type"}},e._l(e.deviceAddTypeList,function(e){return a("el-option",{key:e.type_id,attrs:{label:e.type_name,value:e.type_id}})}))],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:6!=e.form.add_type,expression:"form.add_type!=6"}],attrs:{label:"第一步","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上传图片","label-width":"80px"}},[a("div",{staticClass:"flex"},[a("el-input",{attrs:{readonly:"",placeholder:"图片支持jpeg、jpg、png格式，大小5M内"},model:{value:e.form.add1_img.filename,callback:function(t){e.$set(e.form.add1_img,"filename",t)},expression:"form.add1_img.filename"}}),e._v(" "),a("el-upload",{staticClass:"upload-container",attrs:{"show-file-list":!1,"on-success":e.handleAddImg1Success,"before-upload":e.beforeAvatarUpload,data:e.form.add1_img,action:"/api/index.php/files/save",accept:"image/png,image/jpeg,image/jpg"}},[a("el-button",{attrs:{size:"middle",type:"primary"}},[e._v("选择文件")])],1)],1)]),e._v(" "),a("div",{staticClass:"marT20"},[a("el-form-item",{attrs:{prop:6!=e.form.add_type?"add1_tips":"Auth_2_0",label:"提示文字","label-width":"80px"}},[a("el-input",{staticClass:"add1TextArea",attrs:{autosize:{minRows:3,maxRows:3},maxlength:255,type:"textarea",placeholder:"文字限制255个字符内"},model:{value:e.form.add1_tips,callback:function(t){e.$set(e.form,"add1_tips",t)},expression:"form.add1_tips"}})],1)],1),e._v(" "),a("div",{staticClass:"marT20 flex"},[a("el-form-item",{attrs:{prop:6!=e.form.add_type?"add1_button":"Auth_2_0",label:"按钮文字","label-width":"80px"}},[a("el-input",{attrs:{maxlength:8,placeholder:"文字最好控制在8个字内"},model:{value:e.form.add1_button,callback:function(t){e.$set(e.form,"add1_button",t)},expression:"form.add1_button"}})],1)],1)],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:6!=e.form.add_type,expression:"form.add_type!=6"}],attrs:{label:"第二步","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上传图片","label-width":"80px"}},[a("div",{staticClass:"flex"},[a("el-input",{attrs:{readonly:"",placeholder:"图片支持jpeg、jpg、png格式，大小5M内"},model:{value:e.form.add2_img.filename,callback:function(t){e.$set(e.form.add2_img,"filename",t)},expression:"form.add2_img.filename"}}),e._v(" "),a("el-upload",{staticClass:"upload-container",attrs:{"show-file-list":!1,"on-success":e.handleAddImg2Success,"before-upload":e.beforeAvatarUpload,data:e.form.add2_img,action:"/api/index.php/files/save",accept:"image/png,image/jpeg,image/jpg"}},[a("el-button",{attrs:{size:"middle",type:"primary"}},[e._v("选择文件")])],1)],1)]),e._v(" "),a("div",{staticClass:"marT20"},[a("el-form-item",{attrs:{prop:6!=e.form.add_type?"add2_tips":"Auth_2_0",label:"提示文字","label-width":"80px"}},[a("el-input",{staticClass:"add1TextArea",attrs:{autosize:{minRows:3,maxRows:3},maxlength:255,type:"textarea",placeholder:"文字限制255个字符内"},model:{value:e.form.add2_tips,callback:function(t){e.$set(e.form,"add2_tips",t)},expression:"form.add2_tips"}})],1)],1)],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:5==e.form.add_type,expression:"form.add_type==5"}],attrs:{label:"第三步","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"上传图片","label-width":"80px"}},[a("div",{staticClass:"flex"},[a("el-input",{attrs:{readonly:"",placeholder:"图片支持jpeg、jpg、png格式，大小5M内"},model:{value:e.form.add3_img.filename,callback:function(t){e.$set(e.form.add3_img,"filename",t)},expression:"form.add3_img.filename"}}),e._v(" "),a("el-upload",{staticClass:"upload-container",attrs:{"show-file-list":!1,"on-success":e.handleAddImg3Success,"before-upload":e.beforeAvatarUpload,data:e.form.add3_img,action:"/api/index.php/files/save",accept:"image/png,image/jpeg,image/jpg"}},[a("el-button",{attrs:{size:"middle",type:"primary"}},[e._v("选择文件")])],1)],1)]),e._v(" "),a("div",{staticClass:"marT20"},[a("el-form-item",{attrs:{prop:5==e.form.add_type?"add3_tips":"Auth_2_0",label:"提示文字","label-width":"80px"}},[a("el-input",{staticClass:"add1TextArea",attrs:{autosize:{minRows:3,maxRows:3},maxlength:255,type:"textarea",placeholder:"文字限制255个字符内"},model:{value:e.form.add3_tips,callback:function(t){e.$set(e.form,"add3_tips",t)},expression:"form.add3_tips"}})],1)],1)],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:6==e.form.add_type,expression:"form.add_type==6"}],staticClass:"title"},[e._v("对接信息")]),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:6==e.form.add_type,expression:"form.add_type==6"}],attrs:{prop:6==e.form.add_type?"plantform_name":"Auth_2_0",label:"平台名称","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{maxlength:30,placeholder:"请输入"},model:{value:e.form.plantform_name,callback:function(t){e.$set(e.form,"plantform_name",t)},expression:"form.plantform_name"}})],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:6==e.form.add_type,expression:"form.add_type==6"}],attrs:{prop:6==e.form.add_type?"plantform_service":"Auth_2_0",label:"服务用语","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{maxlength:30,placeholder:"请输入"},model:{value:e.form.plantform_service,callback:function(t){e.$set(e.form,"plantform_service",t)},expression:"form.plantform_service"}})],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:6==e.form.add_type,expression:"form.add_type==6"}],attrs:{prop:6==e.form.add_type?"plantform_des":"Auth_2_0",label:"平台介绍","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{maxlength:30,placeholder:"请输入"},model:{value:e.form.plantform_des,callback:function(t){e.$set(e.form,"plantform_des",t)},expression:"form.plantform_des"}})],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:6==e.form.add_type,expression:"form.add_type==6"}],attrs:{prop:6==e.form.add_type?"plantform_connect":"Auth_2_0",label:"连接步骤","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{autosize:{minRows:5},type:"textarea",placeholder:"请输入"},model:{value:e.form.plantform_connect,callback:function(t){e.$set(e.form,"plantform_connect",t)},expression:"form.plantform_connect"}})],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:6!=e.form.add_type,expression:"form.add_type!=6"}],staticClass:"title"},[e._v("连接方式")]),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:6!=e.form.add_type,expression:"form.add_type!=6"}],attrs:{prop:6!=e.form.add_type?"add_time":"Auth_2_0",label:"超时时间","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{maxlength:3,placeholder:"请输入整数，限制三位，单位为秒"},model:{value:e.form.add_time,callback:function(t){e.$set(e.form,"add_time",t)},expression:"form.add_time"}})],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:6!=e.form.add_type,expression:"form.add_type!=6"}],staticClass:"title"},[e._v("重置方式")]),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:6!=e.form.add_type,expression:"form.add_type!=6"}],attrs:{label:"上传图片","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"flex"},[a("el-input",{attrs:{readonly:"",placeholder:"图片支持jpeg、jpg、png格式，大小5M内"},model:{value:e.form.reset_img.filename,callback:function(t){e.$set(e.form.reset_img,"filename",t)},expression:"form.reset_img.filename"}}),e._v(" "),a("el-upload",{staticClass:"upload-container",attrs:{"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,data:e.form.reset_img,action:"/api/index.php/files/save",accept:"image/png,image/jpeg,image/jpg"}},[a("el-button",{attrs:{size:"middle",type:"primary"}},[e._v("选择文件")])],1)],1)])],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:6!=e.form.add_type,expression:"form.add_type!=6"}],attrs:{prop:6!=e.form.add_type?"reset_tips":"Auth_2_0",label:"提示文字","label-width":"120px"}},[a("el-col",{attrs:{span:12}},[a("el-input",{attrs:{autosize:{minRows:3,maxRows:3},maxlength:255,type:"textarea",placeholder:"文字限制255个字符内"},model:{value:e.form.reset_tips,callback:function(t){e.$set(e.form,"reset_tips",t)},expression:"form.reset_tips"}})],1)],1)],1)],1)],1)],1)},r=[],s={render:i,staticRenderFns:r};t.a=s}});
//# sourceMappingURL=8.eb3470726368ae3c5883.js.map