webpackJsonp([25],{"+g1N":function(t,e,a){(t.exports=a("BkJT")(!0)).push([t.i,".el-upload-list__item,.el-upload-list__item:first-child{margin-top:0}","",{version:3,sources:["F:/A-PRODUCT/PomeloHomeOpen_Sys/src/components/typeManagement/uploadView.vue"],names:[],mappings:"AAIA,wDACE,YAAgB,CACjB",file:"uploadView.vue",sourcesContent:["\n.el-upload-list__item:first-child {\n  margin-top: 0px;\n}\n.el-upload-list__item {\n  margin-top: 0px;\n}\n"],sourceRoot:""}])},AxUr:function(t,e,a){(t.exports=a("BkJT")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"addTag.vue",sourceRoot:""}])},I35t:function(t,e,a){var i=a("+g1N");(i="string"==typeof i?[[t.i,i,""]]:i).locals&&(t.exports=i.locals);a("8bSs")("b6d26fb6",i,!0)},UyAJ:function(t,e,a){"use strict";e.c=function(t){return Object(i.a)({url:"/api/ext/devcard/template",method:"get",data:t})},e.d=function(t){return Object(i.a)({url:"/api/ext/devcard/template",method:"post",data:t})},e.b=function(){return Object(i.a)({url:"/api/ext/devcard/size",method:"get"})},e.a=function(t){return Object(i.a)({url:"/api/ext/devcard/size",method:"post",data:t})};var i=a("Vo7i")},fYXe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("aA9S"),n=a.n(i),s=(a("Vo7i"),a("sQkU")),o=a("TIfe"),r=a("p+uC"),i={components:{uploadComponent:r.a},props:{formVisible:{type:Boolean},isEdit:{type:Boolean},row:{type:Object||null}},data:function(){return{formItem:{gtag_name:"",gtag_id:"",enable:1,dev_limit:"",panel_can:"",gtag_img:""},operateImages:{},tagImageList:[],base_img:{type:12,token:Object(o.b)()}}},created:function(){},watch:{row:function(){this.row?(n()(this.formItem,this.row),this.tagImageList=this.row.gtag_img?[{name:this.row.gtag_name,url:-1<this.row.gtag_img.indexOf("http")?this.row.gtag_img:"http://zsj-smarthome.oss-cn-shenzhen.aliyuncs.com/"+this.row.gtag_img}]:[]):(this.formItem={gtag_name:"",gtag_id:"",enable:1,dev_limit:"",panel_can:"",gtag_img:""},this.tagImageList=[])}},computed:{dialogTitle:function(){return this.isEdit?"编辑":"新增"}},methods:{handleSuccess:function(t){this.formItem.gtag_img=t.result.object},removeTagImage:function(t,e){this.formItem.gtag_img=""},closeView:function(){this.$emit("closeView")},onSubmit:function(){var e=this,t=n()({},this.formItem,{images:this.operateImages});Object(s.a)(t).then(function(t){e.$message.success("操作成功！"),e.closeView(),e.$emit("getTagList")}).catch(function(t){})}}},r={render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("el-dialog",{attrs:{"before-close":e.closeView,visible:e.formVisible,title:e.dialogTitle},on:{"update:visible":function(t){e.formVisible=t}}},[t("el-form",{staticClass:"form",attrs:{"label-width":"300px"}},[t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:0==e.isEdit,expression:"isEdit == false"}],attrs:{label:"标签编号"}},[t("el-input",{attrs:{type:"input"},model:{value:e.formItem.gtag_id,callback:function(t){e.$set(e.formItem,"gtag_id",t)},expression:"formItem.gtag_id"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"标签名称"}},[t("el-input",{attrs:{type:"input"},model:{value:e.formItem.gtag_name,callback:function(t){e.$set(e.formItem,"gtag_name",t)},expression:"formItem.gtag_name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"上传图片"}},[t("el-upload",{attrs:{data:e.base_img,"on-success":e.handleSuccess,"on-remove":e.removeTagImage,"file-list":e.tagImageList,limit:1,action:"/api/index.php/files/save",accept:"image/png,image/gif,image/jpeg,image/jpg,image/bmp"}},[t("i",{staticClass:"el-icon-plus"})])],1),e._v(" "),t("el-form-item",{attrs:{label:""}},[t("template",{slot:"label"},[t("div",{staticClass:"bottom_text"},[e._v("\n            编组数量限制（非必填）"),t("br"),e._v(" "),t("span",{},[e._v("用于面板屏幕配置多设备选择设备")])])]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入正整数，0表示无穷大"},model:{value:e.formItem.dev_limit,callback:function(t){e.$set(e.formItem,"dev_limit",t)},expression:"formItem.dev_limit"}})],2),e._v(" "),t("el-form-item",{attrs:{label:"面板是否可用"}},[t("el-radio",{attrs:{label:1},model:{value:e.formItem.panel_can,callback:function(t){e.$set(e.formItem,"panel_can",t)},expression:"formItem.panel_can"}},[e._v("是")]),e._v(" "),t("el-radio",{attrs:{label:0},model:{value:e.formItem.panel_can,callback:function(t){e.$set(e.formItem,"panel_can",t)},expression:"formItem.panel_can"}},[e._v("否")])],1),e._v(" "),t("uploadComponent",{attrs:{operateImages:e.operateImages,cardData:e.row}})],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),t("el-button",{on:{click:e.closeView}},[e._v("取消")])],1)],1)},staticRenderFns:[]},i={components:{addTagView:a("C7Lr")(i,r,!1,null,null,null).exports},data:function(){return{total:null,listLoading:!1,listQuery:{page:1,limit:15},formVisible:!1,isEdit:!1,tagList:[],editRow:null}},computed:{},watch:{cardList:function(){}},created:function(){},mounted:function(){this.refresh()},methods:{dataFormat:function(t){var e=new Date(t),a=e.getFullYear(),t=e.getMonth()+1;return a+"-"+(t=t<10?"0"+t:t)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())+" "+(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())},refresh:function(){var t=this;this.$nextTick(function(){t.getTagList()})},getTagList:function(){var a=this;this.listLoading=!0;var t={size:this.listQuery.limit,page:this.listQuery.page};Object(s.d)(t).then(function(t){a.tagList=t.data,a.tagList.forEach(function(t,e){t.create_time=a.dataFormat(1e3*t.create_time),t.update_time=a.dataFormat(1e3*t.update_time)}),a.total=t.page_info.total,a.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getTagList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getTagList()},addTag:function(){this.editRow=null,this.isEdit=!1,this.formVisible=!0},editTag:function(t,e){this.editRow=t,this.isEdit=!0,this.formVisible=!0},delTag:function(e){var a=this;this.$confirm("确认删除？").then(function(t){a.onSubmit(e)}).catch(function(t){})},onSubmit:function(t){var e=this,t=n()({},t,{enable:0,gtag_img:t.gtag_img&&-1<t.gtag_img.indexOf("http")?"oss_temp"+t.gtag_img.split("oss_temp")[1]:t.gtag_img});Object(s.a)(t).then(function(t){e.$message.success("操作成功！"),e.getTagList()}).catch(function(t){})}}},r={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("el-row",{staticStyle:{"margin-bottom":"10px"}},[i("el-button",{attrs:{size:"medium",type:"primary"},on:{click:a.addTag}},[a._v("\n      新增编组tag\n    ")])],1),a._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:a.tagList,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"标签编号",prop:"gtag_id"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"标签名称",prop:"gtag_name"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"面板是否可调",prop:"panel_can"},scopedSlots:a._u([{key:"default",fn:function(t){return[i("div",[a._v("\n          "+a._s("1"===t.row.panel_can.toString()?"是":"否")+"\n        ")])]}}])}),a._v(">\n    "),i("el-table-column",{attrs:{align:"center",label:"创建时间",prop:"create_time"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"更新时间",prop:"update_time"}}),a._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:a._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return a.delTag(e.row)}}},[a._v("\n          删除\n        ")]),a._v(" "),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return a.editTag(e.row,!0)}}},[a._v("\n          编辑\n        ")])]}}])})],1),a._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!a.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":a.listQuery.page,"page-sizes":[15,20,30,50],"page-size":a.listQuery.limit,total:a.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"update:currentPage":function(t){return a.$set(a.listQuery,"page",t)},"update:current-page":function(t){return a.$set(a.listQuery,"page",t)},"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange}})],1),a._v(" "),i("addTagView",{attrs:{isEdit:a.isEdit,formVisible:a.formVisible,row:a.editRow},on:{getTagList:a.getTagList,closeView:function(t){a.formVisible=!1}}})],1)},staticRenderFns:[]};r=a("C7Lr")(i,r,!1,function(t){a("qcPn")},null,null),e.default=r.exports},"p+uC":function(t,e,a){"use strict";var i=a("aA9S"),n=a.n(i),s=a("UyAJ"),o=a("TIfe"),r={props:{imageData:{type:Object||null},os:{type:Number},card:{type:Object},imageList:{type:Array||null},edit:{type:Boolean}},data:function(){return{and_base_img:{type:12,token:Object(o.b)()},ios_base_img:{type:12,token:Object(o.b)()},ipad_base_img:{type:12,token:Object(o.b)()}}},created:function(){},computed:{type:function(){return 0===this.os?"安卓：":1===this.os?"IOS：":"面板："}},methods:{handleChange:function(t,e){},uploadSuccess:function(t,e,a){var i=this;return function(t){t={x:i.card.x,y:i.card.y,os:i.os,name:t.result.filename,img:t.result.object,op:1};i.$emit("change-image",{file:t,card:i.card,os:i.os})}},removeSuccess:function(t){var a=this;return function(t,e){t.response?(t.response.result.object,a.$emit("del-image",{file:t.response,card:a.card,os:a.os})):(t.imgid,t.op=3,a.$emit("del-image",{file:t,card:a.card,os:a.os}))}},handleUpload:function(a,i){var n=this;return function(t){var e={x:a.x,y:a.y,os:i,name:t.result.filename,img:t.result.object,op:1};n.addOperateImages[t.result.md5]=e}},handleremove:function(t,e){t=t.response.result.md5;delete this.addOperateImages[t]},imageChange:function(t,e){},imageSuccess:function(t){},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},returnList:function(){var e=this;return this.imageList?this.imageList.filter(function(t){if(3!==t.op)return t.imgid&&(t.url=t.img,t.op=2,t.os=e.os,t.x=e.card.x,t.y=e.card.y),t}):[]}}},i={render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("el-col",{attrs:{span:8}},[e("el-col",{staticClass:"text",attrs:{span:5}},[t._v("\n          "+t._s(t.type)+"\n      ")]),t._v(" "),e("el-col",{attrs:{span:19}},[e("el-upload",{attrs:{disabled:!t.edit,"on-success":t.uploadSuccess(),data:t.and_base_img,"file-list":t.returnList(),"on-remove":t.removeSuccess(t.imageData),action:"/api/index.php/files/save"}},[e("el-button",{staticClass:"imgAddBtn",attrs:{icon:"el-icon-plus",size:"mini"}},[t._v("添加图片")])],1)],1)],1)],1)},staticRenderFns:[]};r={components:{uploadView:a("C7Lr")(r,i,!1,function(t){a("I35t")},null,null).exports},props:{imageData:{type:Object||null},card:{type:Object},edit:{type:Boolean}},data:function(){return{}},created:function(){},computed:{check:{get:function(){return 1===this.imageData.check},set:function(t){this.imageData.check=t?1:0}}},methods:{getList:function(t){return this.imageData?0===t?this.imageData.android:1===t?this.imageData.ios:this.imageData.panel:[]},changeIamge:function(t){this.$emit("change-image",t)},delImage:function(t){this.$emit("del-image",t)}}},i={render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("el-row",{staticClass:"imgContent"},[t("el-col",{staticClass:"checkContent",attrs:{span:2}},[t("el-checkbox",{attrs:{disabled:!e.edit},model:{value:e.check,callback:function(t){e.check=t},expression:"check"}},[e._v(e._s(e.card.x+"*"+e.card.y))])],1),e._v(" "),t("el-col",{attrs:{span:22}},[t("uploadView",{attrs:{os:0,edit:e.edit,imageList:e.getList(0),imageData:e.imageData,card:e.card},on:{"change-image":e.changeIamge,"del-image":e.delImage}}),e._v(" "),t("uploadView",{attrs:{os:1,edit:e.edit,imageList:e.getList(1),imageData:e.imageData,card:e.card},on:{"change-image":e.changeIamge,"del-image":e.delImage}}),e._v(" "),t("uploadView",{attrs:{edit:e.edit,os:2,imageList:e.getList(2),imageData:e.imageData,card:e.card},on:{"change-image":e.changeIamge,"del-image":e.delImage}})],1)],1)],1)},staticRenderFns:[]},r={components:{cardImageView:a("C7Lr")(r,i,!1,null,null,null).exports},props:{operateImages:{type:Object},cardData:{type:Object||null},edit:{type:Boolean||null,default:!0}},data:function(){return{cardList:[],platform:["android","ios","panel"]}},watch:{cardData:function(){this.initOperateImages()},operateImages:function(){this.initOperateImages()}},created:function(){this.getCardSizeList()},methods:{getCardSizeList:function(){var e=this;Object(s.b)({}).then(function(t){e.cardList=t.data,e.initOperateImages()})},initOperateImages:function(){var a=this;this.cardList.forEach(function(t){var e={check:0,android:[],ios:[],panel:[]};a.cardData&&a.cardData.images&&a.cardData.images[t.x+","+t.y]&&(1===a.cardData.images[t.x+","+t.y].check&&(e.check=1),a.cardData.images[t.x+","+t.y].android&&n()(e.android,a.cardData.images[t.x+","+t.y].android),a.cardData.images[t.x+","+t.y].ios&&n()(e.ios,a.cardData.images[t.x+","+t.y].ios),a.cardData.images[t.x+","+t.y].panel&&n()(e.panel,a.cardData.images[t.x+","+t.y].panel)),a.$set(a.operateImages,t.x+","+t.y,e)})},changeIamge:function(t){t.card.x,t.card.y;var e=t.card.x+","+t.card.y,a=this.platform[t.os];this.operateImages[e][a].push(t.file)},delImage:function(e){e.card.x,e.card.y;var t,a=e.card.x+","+e.card.y,i=this.platform[e.os];e.file.imgid?this.operateImages[a][i].map(function(t){t.img===e.file.img&&n()(t,e.file)}):(t=this.operateImages[a][i].filter(function(t){if(t.img!==e.file.img)return!0}),this.operateImages[a][i]=t)}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[0<Object.keys(e.operateImages).length?[e._l(e.cardList,function(t){return[a("cardImageView",{attrs:{edit:e.edit,card:t,imageData:e.operateImages[t.x+","+t.y]},on:{"change-image":e.changeIamge,"del-image":e.delImage}})]})]:e._e()],2)},staticRenderFns:[]},i=a("C7Lr")(r,i,!1,null,null,null),e.a=i.exports},qcPn:function(t,e,a){var i=a("AxUr");(i="string"==typeof i?[[t.i,i,""]]:i).locals&&(t.exports=i.locals);a("8bSs")("95c6774c",i,!0)},sQkU:function(t,e,a){"use strict";e.j=function(t){return Object(i.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})},e.h=function(){return Object(i.a)({url:"/admin/product/type_lists",method:"post",data:{}})},e.i=function(t){return Object(i.a)({url:"/admin/review_info",method:"post",data:t})},e.c=function(t){return Object(i.a)({url:"/admin/review_approve",method:"post",data:t})},e.f=function(t){return Object(i.a)({url:"/admin/product_lists",method:"post",data:t})},e.e=function(t){return Object(i.a)({url:"/admin/product_info",method:"post",data:t})},e.k=function(t){return Object(i.a)({url:"/admin/product_unshelve",method:"post",data:t})},e.g=function(t){return Object(i.a)({url:"/api/ext/devcard/product",method:"get",data:t})},e.b=function(t){return Object(i.a)({url:"/api/ext/devcard/product",method:"post",data:t})},e.d=function(){return Object(i.a)({url:"/api/ext/gtags/global",method:"get"})},e.a=function(t){return Object(i.a)({url:"/api/ext/gtags/global",method:"post",data:t})};var i=a("Vo7i")}});