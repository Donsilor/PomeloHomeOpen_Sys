webpackJsonp([14],{"+ssv":function(t,a,e){"use strict";function s(t){e("SwQT")}Object.defineProperty(a,"__esModule",{value:!0});var r=e("e5eo"),l=e("XZNN"),n=e("VU/8"),i=s,o=n(r.a,l.a,!1,i,null,null);a.default=o.exports},SwQT:function(t,a,e){var s=e("oild");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("720ed930",s,!0)},VSB1:function(t,a,e){"use strict";var s=e("woOf"),r=e.n(s),l=e("pFYg"),n=e.n(l);a.a={hasClass:function(t,a){return t.className&&t.className.match(new RegExp("(\\s|^)"+a+"(\\s|$)"))},addClass:function(t,a){this.hasClass(t,a)||(t.className=(t.className+" "+a).replace("  "," ").trim())},removeClass:function(t,a){if(this.hasClass(t,a)){var e=new RegExp("(\\s|^)"+a+"(\\s|$)");t.className=t.className.replace(e," ").replace("  "," ").trim()}},toggleClass:function(t,a){this.hasClass(t,a)?this.removeClass(t,a):this.addClass(t,a)},getSearches:function(){var t={};return location.search.replace(/^\?/,"").split("&").forEach(function(a){var e=a.split("=");t[e[0]]=decodeURIComponent(e[1])}),t},getSearch:function(t){return this.getSearches()[t]},serialize:function(t){var a=[];if("object"!==(void 0===t?"undefined":n()(t)))return"";for(var e in t)a.push(e+"="+encodeURIComponent(t[e]));return a.join("&")},unserialize:function(t){var a={};if(!t)return a;for(var e=t.split("&"),s=0,r=e.length;s<r;s++){var l=e[s],n=l.split("=");a[n[0]]=isNaN(n[1])?decodeURIComponent(n[1]):n[1]}return a},getElementByClassName:function(t){var a=new Array,e=document.getElementsByTagName("*"),s=0;for(var r in e)1==e[r].nodeType&&e[r].getAttribute("class")==t&&(a[s]=e[r],s++);return a},validateString:function(t,a,e,s){var r=!0,l="";return a&&0!=a.trim().length?s instanceof RegExp&&(s.test(a)||(r=!1,l=t+"格式错误")):e&&(r=!1,l="请输入"+t),{validity:r,msg:l}},spanAnalyseData:function(t,a,e){var s=0;e[t.nodeid]={index:a.length,children:{}},t.list.forEach(function(e){var l=0;"3"!=e.key_type?(s++,a.push(r()({nodeid:t.nodeid,attr_id:t.attr_id,is_enable:t.is_enable},e))):e.remark.forEach(function(r,n){s++,l++,a.push({nodeid:t.nodeid,attr_id:t.attr_id,method_string:e.method_string,key:e.key,type:e.type,value_list:e.value_list[n].value_list,remark:r.remark})})}),e[t.nodeid].len=s},spanMethod:function(t,a,e){return 0==a&&t?t.index==e?[t.len,1]:[0,0]:[1,1]}}},XZNN:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("el-button",{attrs:{size:"medium"},on:{click:function(a){t.$router.go(-1)}}},[t._v("返回")]),t._v(" "),e("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.productUnshelve}},[t._v("下架该产品")]),t._v(" "),e("h3",[t._v(t._s(t.productDetail.brand_name+t.productDetail.type_name+t.productDetail.model))]),t._v(" "),e("el-tabs",{staticStyle:{"padding-bottom":"30px"},attrs:{type:"card"},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"基本信息",name:"basic"}},[e("el-row",{},[e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("产品品类")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.type_name))])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("产品品牌")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.brand_name))])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("产品名称")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.name))])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("产品型号")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.model))])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("兼容机型")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.compat))])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("渠道商")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.distributor))])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("渠道商ID")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.distributor_pid))])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("配网方式")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.network_name))])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("配网方式描述")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.network_des))])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("产品小图")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},[t.productDetail.icon?e("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],staticClass:"six-img",attrs:{src:t.productDetail.icon,alt:"图片加载失败"}}):t._e()])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("产品图片（六观图）")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:1}},t._l(t.productDetail.images,function(t){return e("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],staticClass:"six-img",attrs:{src:t,alt:"图片加载失败"}})}))],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("产品规格书")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e("a",{staticClass:"is-link",attrs:{href:t.productDetail.spec_url,download:""}},[t._v(t._s(t.productDetail.spec_name))]),t._v(" "),e("a",{staticStyle:{"margin-left":"30px"},attrs:{href:t.productDetail.spec_url,download:""}},[e("el-button",{attrs:{type:"primary",size:"small"}},[t._v("下载")])],1)])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("产品使用说明书")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[e("a",{staticClass:"is-link",attrs:{href:t.productDetail.instruct_url}},[t._v(t._s(t.productDetail.instruct_name))]),t._v(" "),e("a",{staticStyle:{"margin-left":"30px"},attrs:{href:t.productDetail.instruct_url,download:""}},[e("el-button",{attrs:{type:"primary",size:"small"}},[t._v("下载")])],1)])],1)],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:"技术方案",name:"tech"}},[e("el-row",{},[e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("选择技术方案")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.type_txt||"无"))])],1),t._v(" "),e("el-row",{directives:[{name:"show",rawName:"v-show",value:1==t.productDetail.type,expression:"productDetail.type==1"}],staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("模组/芯片信息")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.type_vendor))])],1),t._v(" "),e("el-row",{directives:[{name:"show",rawName:"v-show",value:1==t.productDetail.type,expression:"productDetail.type==1"}],staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("型号")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.type_model))])],1),t._v(" "),e("el-row",{directives:[{name:"show",rawName:"v-show",value:2==t.productDetail.type||3==t.productDetail.type,expression:"productDetail.type==2 || productDetail.type==3"}],staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:3}},[t._v("协议")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:16,offset:1}},[t._v(t._s(t.productDetail.agreement))])],1)],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:"功能点设置",name:"fps"}},[e("h5",[t._v("必选功能点")]),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.must_fps,"span-method":t.spanMethod,"highlight-current-row":"",border:"",stripe:"",fit:""}},[e("el-table-column",{attrs:{align:"center",label:"node_ID",prop:"nodeid"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:"参数名称",prop:"remark"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",formatter:t.arrayToString,label:"value",prop:"value_list"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:"是否开启"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,disabled:""},model:{value:a.row.is_enable,callback:function(e){t.$set(a.row,"is_enable",e)},expression:"scope.row.is_enable"}})]}}])})],1),t._v(" "),e("h5",[t._v("可选功能点")]),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.opt_fps,"span-method":t.spanMethod,"highlight-current-row":"",border:"",stripe:"",fit:""}},[e("el-table-column",{attrs:{align:"center",label:"node_ID",prop:"nodeid"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:"参数名称",prop:"remark"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",formatter:t.arrayToString,label:"value",prop:"value_list"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:"是否开启",prop:"is_enable"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{attrs:{"active-value":1,"inactive-value":0,disabled:""},model:{value:a.row.is_enable,callback:function(e){t.$set(a.row,"is_enable",e)},expression:"scope.row.is_enable"}})]}}])})],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:"版本信息",name:"version"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.productDetail.version_list,"highlight-current-row":"",border:"",stripe:"",fit:""}},[e("el-table-column",{attrs:{label:"版本号",prop:"version_no"}}),t._v(" "),e("el-table-column",{attrs:{label:"版本描述",prop:"des"}}),t._v(" "),e("el-table-column",{attrs:{label:"状态",formatter:t.statusMap,prop:"status"}}),t._v(" "),e("el-table-column",{attrs:{label:"创建时间",prop:"created_at_txt"}})],1)],1)],1)],1)},r=[],l={render:s,staticRenderFns:r};a.a=l},e5eo:function(t,a,e){"use strict";var s=e("sQkU"),r=e("VSB1"),l=e("zL8q");e.n(l);a.a={name:"onlineProductDetail",data:function(){return{product_id:"",productDetail:{},must_fps:[],opt_fps:[],spanMap:{},activeName:"basic"}},created:function(){this.product_id=this.$route.query.product_id},mounted:function(){this.getReviewInfo()},methods:{getReviewInfo:function(){var t=this,a=this,e={product_id:this.product_id};Object(s.b)(e).then(function(e){t.productDetail=e,e.attr_list.forEach(function(t){var e=t.is_default?"must_fps":"opt_fps";t.list?r.a.spanAnalyseData(t,a[e],a.spanMap):a[e].push(t)})}),console.log(this.must_fps)},imgPreview:function(t){fancyBox(t.target,this.productDetail.images)},productUnshelve:function(){var t=this,a={product_id:this.product_id};this.$confirm("下架后，该产品将无法继续使用，同时相应产品开发资料将全部作废，确认请继续","下架该产品").then(function(){Object(s.g)(a).then(function(a){a&&(Object(l.Message)({message:"下架成功",type:"success",duration:2e3}),t.$router.go(-1))})})},statusMap:function(t){return{1:"开发中",2:"已发布"}[t.status]},arrayToString:function(t){return t.value_list.join("/")},spanMethod:function(t){var a=t.row,e=(t.column,t.rowIndex),s=t.columnIndex,l=this.spanMap[a.nodeid];return r.a.spanMethod(l,s,e)}},deactivated:function(){this.$destroy()}}},oild:function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,".six-img{max-height:120px;margin-right:15px}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/productManagement/onlineProductDetail.vue"],names:[],mappings:"AACA,SACE,iBAAkB,AAClB,iBAAmB,CACpB",file:"onlineProductDetail.vue",sourcesContent:["\n.six-img {\n  max-height: 120px;\n  margin-right: 15px;\n}\n"],sourceRoot:""}])},sQkU:function(t,a,e){"use strict";function s(t){return Object(p.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})}function r(){return Object(p.a)({url:"/product/type_lists",method:"post",data:{}})}function l(t){return Object(p.a)({url:"/admin/review_info",method:"post",data:t})}function n(t){return Object(p.a)({url:"/admin/review_approve",method:"post",data:t})}function i(t){return Object(p.a)({url:"/admin/product_lists",method:"post",data:t})}function o(t){return Object(p.a)({url:"/admin/product_info",method:"post",data:t})}function c(t){return Object(p.a)({url:"/admin/product_unshelve",method:"post",data:t})}a.f=s,a.d=r,a.e=l,a.a=n,a.c=i,a.b=o,a.g=c;var p=e("Vo7i")}});
//# sourceMappingURL=14.61161809e6bed9ebae5f.js.map