webpackJsonp([22],{HG15:function(t,e,a){var i=a("Uvn1");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("00d0b32b",i,!0)},Uvn1:function(t,e,a){(t.exports=a("FZ+f")(!0)).push([t.i,".form .text{margin-top:10px}.form .bottom_text{line-height:20px}.form .bottom_text span{font-size:10px;color:hsla(0,0%,50%,.529412)}","",{version:3,sources:["/Users/eric/PomeloHomeOpen_Sys/src/views/typeManagement/addTag.vue"],names:[],mappings:"AACA,YACE,eAAiB,CAClB,AACD,mBACE,gBAAkB,CACnB,AACD,wBACI,eAAgB,AAChB,4BAAqC,CACxC",file:"addTag.vue",sourcesContent:["\n.form .text {\n  margin-top: 10px;\n}\n.form .bottom_text {\n  line-height: 20px;\n}\n.form .bottom_text span {\n    font-size: 10px;\n    color: rgba(128, 128, 128, 0.529412);\n}\n"],sourceRoot:""}])},UyAJ:function(t,e,a){"use strict";e.c=function(t){return Object(i.a)({url:"/api/ext/devcard/template",method:"get",data:t})},e.d=function(t){return Object(i.a)({url:"/api/ext/devcard/template",method:"post",data:t})},e.b=function(){return Object(i.a)({url:"/api/ext/devcard/size",method:"get"})},e.a=function(t){return Object(i.a)({url:"/api/ext/devcard/size",method:"post",data:t})};var i=a("Vo7i")},fYXe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("mvHQ");var i=a("woOf"),c=a.n(i),s=a("fZjL"),r=a.n(s),n=(a("Vo7i"),a("sQkU")),o=a("TIfe"),l=a("UyAJ"),m="http://zsj-smarthome.oss-cn-shenzhen.aliyuncs.com/",g={data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:15},formVisible:!1,isEdit:!1,tagList:[],formItem:{gtag_name:"",gtag_id:"",enable:1,dev_limit:"",panel_can:"",gtag_img:""},showImages:{},operateImages:{},cardList:[],imageList:{ios:[],android:[],panel:[]},fileList:[],imgList:[],base_img:{type:12,token:Object(o.b)()},dialogImageUrl:"",dialogVisible:!1,tagImageList:[],editRow:null,checkBox:null}},computed:{dialogTitle:function(){return this.isEdit?"编辑":"新增"}},watch:{cardList:function(){}},created:function(){},mounted:function(){this.refresh(),this.getCardSizeList()},methods:{returnList:function(e,a){var i=this,t=this.showImages&&this.showImages[e.x+","+e.y]&&this.showImages[e.x+","+e.y][a.toString()]?this.showImages[e.x+","+e.y][a.toString()]:[],s=[];t.forEach(function(t){"check"!==t.name&&t.img.indexOf("check")<=-1&&s.push(t)});var n=[];return r()(this.operateImages).forEach(function(t){"check"!==i.operateImages[t].name&&i.operateImages[t].img.indexOf("check")<=-1&&i.operateImages[t].x.toString()===e.x.toString()&&i.operateImages[t].y.toString()===e.y.toString()&&i.operateImages[t].os.toString()===a.toString()&&n.push(i.operateImages[t])}),c()([],s,n)},dataFormat:function(t){var e=new Date(t),a=e.getFullYear(),i=e.getMonth()+1;return a+"-"+(i=i<10?"0"+i:i)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())+" "+(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())},refresh:function(){var t=this;this.$nextTick(function(){t.getTagList()})},getTagList:function(){var a=this;this.listLoading=!0;var t={size:this.listQuery.limit,page:this.listQuery.page};Object(n.d)(t).then(function(t){a.tagList=t.data,a.tagList.forEach(function(t,e){t.create_time=a.dataFormat(1e3*t.create_time),t.update_time=a.dataFormat(1e3*t.update_time)}),a.total=t.page_info.total,a.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getTagList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getTagList()},addTag:function(){this.isEdit=!1,this.formVisible=!0,this.formItem={},this.tagImageList=[],this.showImages={},this.operateImages={},this.initCheckBox()},editTag:function(t){var i=this;this.initCheckBox();var e=c()({},t),s=t.images,n={},o={};r()(s).forEach(function(a){r()(s[a]).forEach(function(e){s[a][e].forEach(function(t){"check"===t.name&&-1<t.img.indexOf("check")?(s[a][e].op=2,t.x=a.split(",")[0],t.y=a.split(",")[1],t.os=e,o[t.imgid]=t,i.checkBox[a.split(",")[0]+","+a.split(",")[1]]&&(i.checkBox[a.split(",")[0]+","+a.split(",")[1]][e]={checked:!0,postObj:t})):(t.url=-1<t.img.indexOf("http")?t.img:m+t.img,s[a][e].op=2,t.x=a.split(",")[0],t.y=a.split(",")[1],t.os=e,n[t.imgid]=t)})})}),this.editRow=e,this.isEdit=!0,this.formVisible=!0,this.formItem={gtag_name:t.gtag_name,gtag_id:t.gtag_id,enable:1,dev_limit:t.dev_limit,panel_can:t.panel_can,gtag_img:t.gtag_img,images:{}},this.showImages=t.images,this.operateImages=n,this.opreateCheck=o,this.tagImageList=t.gtag_img?[{name:t.gtag_name,url:-1<t.gtag_img.indexOf("http")?t.gtag_img:m+t.gtag_img}]:[]},delTag:function(e){var a=this;this.$confirm("确认删除？").then(function(t){a.formItem=e,a.formItem.enable=0,a.formItem.images&&(a.formItem.images=[]),a.onSubmit()}).catch(function(t){})},onSubmit:function(){var i=this,t=this.formItem;if(0!==this.formItem.enable){var s=[],a=this;this.cardList.forEach(function(e){r()(a.operateImages).forEach(function(t){parseInt(e.x)!==parseInt(a.operateImages[t].x)||parseInt(e.y)!==parseInt(a.operateImages[t].y)||1!==parseInt(a.operateImages[t].op)&&3!==parseInt(a.operateImages[t].op)||s.push(a.operateImages[t])})}),r()(this.checkBox).forEach(function(a){r()(i.checkBox[a]).forEach(function(t){if(i.checkBox[a][t].checked)i.checkBox[a][t].postObj.op=1,s.push(i.checkBox[a][t].postObj);else{var e=i.checkBox[a][t].postObj.imgid;i.opreateCheck&&i.opreateCheck[e]&&(i.opreateCheck[e].op=3,s.push(i.opreateCheck[e]))}})}),t.images=s}Object(n.a)(c()({},t,{gtag_img:t.gtag_img&&-1<t.gtag_img.indexOf("http")?"oss_temp"+t.gtag_img.split("oss_temp")[1]:t.gtag_img})).then(function(t){i.$message.success("操作成功！"),i.formVisible=!1,i.getTagList()}).catch(function(t){})},getCardSizeList:function(){var a=this;this.listLoading=!0;var i={};Object(l.b)().then(function(t){var e=t.data;e.forEach(function(t){i[t.x+","+t.y]={},i[t.x+","+t.y][0]={checked:!1,postObj:{op:1,x:t.x,y:t.y,name:"check",img:"check",os:0}},i[t.x+","+t.y][1]={checked:!1,postObj:{op:1,x:t.x,y:t.y,name:"check",img:"check",os:1}},i[t.x+","+t.y][2]={checked:!1,postObj:{op:1,x:t.x,y:t.y,name:"check",img:"check",os:2}}}),a.checkBox=i,a.cardList=e})},initCheckBox:function(){var a=this;r()(this.checkBox).forEach(function(e){r()(a.checkBox[e]).forEach(function(t){a.checkBox[e][t].checked=!1})})},handleSuccess:function(t){this.formItem.gtag_img=t.result.object},removeTagImage:function(){this.formItem.gtag_img=""},uploadSuccess:function(a,i){var s=this;return function(t){if(200===t.code){var e={x:a.x,y:a.y,os:i,name:t.result.filename,img:t.result.object,op:1};s.operateImages[t.result.md5]=e}else s.$message.error("图片上传失败，请重新选择")}},handleRemove:function(t){var e=this;if(t.response){if(200===t.response.code){var a=t.response.result.md5;delete e.operateImages[a]}}else{var i=t.imgid;e.operateImages[i].op=3}},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0}}},u={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("el-row",{staticStyle:{"margin-bottom":"10px"}},[i("el-button",{attrs:{disabled:0===a.cardList.length,size:"medium",type:"primary"},on:{click:a.addTag}},[a._v("\n      新增编组tag\n    ")])],1),a._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:a.tagList,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"标签编号",prop:"gtag_id"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"标签名称",prop:"gtag_name"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"面板是否可调",prop:"panel_can"},scopedSlots:a._u([{key:"default",fn:function(t){return[i("div",[a._v("\n          "+a._s("1"===t.row.panel_can.toString()?"是":"否")+"\n        ")])]}}])}),a._v(">\n    "),i("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"create_time"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"更新时间",prop:"update_time"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:a._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){a.delTag(e.row)}}},[a._v("\n          删除\n        ")]),a._v(" "),i("el-button",{attrs:{disabled:0===a.cardList.length,size:"small",type:"primary"},on:{click:function(t){a.editTag(e.row,!0)}}},[a._v("\n          编辑\n        ")])]}}])})],1),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!a.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":a.listQuery.page,"page-sizes":[15,20,30,50],"page-size":a.listQuery.limit,total:a.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){a.$set(a.listQuery,"page",t)},"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange}})],1),a._v(" "),i("el-dialog",{attrs:{visible:a.formVisible,title:a.dialogTitle},on:{"update:visible":function(t){a.formVisible=t}}},[i("el-form",{staticClass:"form",attrs:{"label-width":"300px"}},[i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:0==a.isEdit,expression:"isEdit == false"}],attrs:{label:"标签编号"}},[i("el-input",{attrs:{type:"input"},model:{value:a.formItem.gtag_id,callback:function(t){a.$set(a.formItem,"gtag_id",t)},expression:"formItem.gtag_id"}})],1),a._v(" "),i("el-form-item",{attrs:{label:"标签名称"}},[i("el-input",{attrs:{type:"input"},model:{value:a.formItem.gtag_name,callback:function(t){a.$set(a.formItem,"gtag_name",t)},expression:"formItem.gtag_name"}})],1),a._v(" "),i("el-form-item",{attrs:{label:"上传图片"}},[i("el-upload",{attrs:{data:a.base_img,"on-success":a.handleSuccess,"on-remove":a.removeTagImage,"file-list":a.tagImageList,limit:1,action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp"}},[i("i",{staticClass:"el-icon-plus"})])],1),a._v(" "),i("el-form-item",{attrs:{label:""}},[i("template",{slot:"label"},[i("div",{staticClass:"bottom_text"},[a._v("\n            编组数量限制（非必填）"),i("br"),a._v(" "),i("span",{},[a._v("用于面板屏幕配置多设备选择设备")])])]),a._v(" "),i("el-input",{attrs:{placeholder:"请输入正整数，0表示无穷大"},model:{value:a.formItem.dev_limit,callback:function(t){a.$set(a.formItem,"dev_limit",t)},expression:"formItem.dev_limit"}})],2),a._v(" "),i("el-form-item",{attrs:{label:"面板是否可用"}},[i("el-radio",{attrs:{label:1},model:{value:a.formItem.panel_can,callback:function(t){a.$set(a.formItem,"panel_can",t)},expression:"formItem.panel_can"}},[a._v("是")]),a._v(" "),i("el-radio",{attrs:{label:0},model:{value:a.formItem.panel_can,callback:function(t){a.$set(a.formItem,"panel_can",t)},expression:"formItem.panel_can"}},[a._v("否")])],1),a._v(" "),a._l(a.cardList,function(e,t){return i("el-row",{key:t,staticClass:"imgContent",attrs:{span:24}},[i("el-col",{staticClass:"checkContent",attrs:{span:1}},[i("div",[a._v("\n            "+a._s(e.x)+"*"+a._s(e.y)+"\n          ")])]),a._v(" "),i("el-col",{attrs:{span:21}},[i("el-col",{attrs:{span:7}},[i("el-col",{staticClass:"text",attrs:{span:12}},[i("el-checkbox",{model:{value:a.checkBox[e.x+","+e.y][0].checked,callback:function(t){a.$set(a.checkBox[e.x+","+e.y][0],"checked",t)},expression:"checkBox[item.x+','+item.y]['0'].checked"}},[a._v("\n                安卓图片：\n              ")])],1),a._v(" "),i("el-col",{attrs:{span:12}},[i("el-upload",{attrs:{data:a.base_img,"file-list":a.returnList(e,"0"),"on-success":a.uploadSuccess(e,0),"on-remove":a.handleRemove,action:"/api/index.php/files/save"}},[i("el-button",{staticClass:"imgAddBtn",attrs:{icon:"el-icon-plus",size:"mini"}},[a._v("添加图片")])],1)],1)],1),a._v(" "),i("el-col",{attrs:{span:7}},[i("el-col",{staticClass:"text",attrs:{span:12}},[i("el-checkbox",{model:{value:a.checkBox[e.x+","+e.y][1].checked,callback:function(t){a.$set(a.checkBox[e.x+","+e.y][1],"checked",t)},expression:"checkBox[item.x+','+item.y]['1'].checked"}},[a._v("\n                IOS图片：\n              ")])],1),a._v(" "),i("el-col",{attrs:{span:12}},[i("el-upload",{attrs:{data:a.base_img,"file-list":a.returnList(e,"1"),"on-success":a.uploadSuccess(e,1),"on-remove":a.handleRemove,action:"/api/index.php/files/save"}},[i("el-button",{staticClass:"imgAddBtn",attrs:{icon:"el-icon-plus",size:"mini"}},[a._v("添加图片")])],1)],1)],1),a._v(" "),i("el-col",{attrs:{span:7}},[i("el-col",{staticClass:"text",attrs:{span:12}},[i("el-checkbox",{model:{value:a.checkBox[e.x+","+e.y][2].checked,callback:function(t){a.$set(a.checkBox[e.x+","+e.y][2],"checked",t)},expression:"checkBox[item.x+','+item.y]['2'].checked"}},[a._v("\n                面板图片：\n              ")])],1),a._v(" "),i("el-col",{attrs:{span:12}},[i("el-upload",{attrs:{data:a.base_img,"file-list":a.returnList(e,"2"),"on-success":a.uploadSuccess(e,2),"on-remove":a.handleRemove,action:"/api/index.php/files/save"}},[i("el-button",{staticClass:"imgAddBtn",attrs:{icon:"el-icon-plus",size:"mini"}},[a._v("添加图片")])],1)],1)],1)],1)],1)})],2),a._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:a.onSubmit}},[a._v("提交")]),a._v(" "),i("el-button",{on:{click:function(t){a.formVisible=!1}}},[a._v("取消")])],1)],1),a._v(" "),i("el-dialog",{attrs:{"append-to-body":!0,visible:a.dialogVisible},on:{"update:visible":function(t){a.dialogVisible=t}}},[i("img",{attrs:{src:a.dialogImageUrl,width:"100%",alt:""}})])],1)},staticRenderFns:[]};var d=a("VU/8")(g,u,!1,function(t){a("HG15")},null,null);e.default=d.exports},sQkU:function(t,e,a){"use strict";e.j=function(t){return Object(i.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})},e.h=function(){return Object(i.a)({url:"/admin/product/type_lists",method:"post",data:{}})},e.i=function(t){return Object(i.a)({url:"/admin/review_info",method:"post",data:t})},e.c=function(t){return Object(i.a)({url:"/admin/review_approve",method:"post",data:t})},e.f=function(t){return Object(i.a)({url:"/admin/product_lists",method:"post",data:t})},e.e=function(t){return Object(i.a)({url:"/admin/product_info",method:"post",data:t})},e.k=function(t){return Object(i.a)({url:"/admin/product_unshelve",method:"post",data:t})},e.g=function(t){return Object(i.a)({url:"/api/ext/devcard/product",method:"get",data:t})},e.b=function(t){return Object(i.a)({url:"/api/ext/devcard/product",method:"post",data:t})},e.d=function(){return Object(i.a)({url:"/api/ext/gtags/global",method:"get"})},e.a=function(t){return Object(i.a)({url:"/api/ext/gtags/global",method:"post",data:t})};var i=a("Vo7i")}});