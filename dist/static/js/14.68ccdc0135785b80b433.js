webpackJsonp([14],{"2aSf":function(t,a,e){"use strict";function s(t){e("3n3N")}Object.defineProperty(a,"__esModule",{value:!0});var c=e("nu3u"),r=e("dKC/"),l=e("VU/8"),i=s,n=l(c.a,r.a,!1,i,"data-v-56290fff",null);a.default=n.exports},"3n3N":function(t,a,e){var s=e("C/Uh");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("5f47abfc",s,!0)},"C/Uh":function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,".el-form-item__content[data-v-56290fff]{width:80%}.card-img-tec[data-v-56290fff]{width:300px;height:200px}","",{version:3,sources:["/code/evergrande/PomeloHomeOpen_Sys/src/views/productCheck/productCheckedDetail.vue"],names:[],mappings:"AACA,wCACE,SAAW,CACZ,AACD,+BACE,YAAa,AACb,YAAa,CACd",file:"productCheckedDetail.vue",sourcesContent:["\n.el-form-item__content[data-v-56290fff] {\n  width: 80%;\n}\n.card-img-tec[data-v-56290fff] {\n  width: 300px;\n  height: 200px\n}\n"],sourceRoot:""}])},"dKC/":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("h3",[t._v("产品基本信息")]),t._v(" "),e("el-card",{staticClass:"box-card"},[e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:2}},[t._v("产品品类")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t._v(t._s(t.checkDetail.type_name))])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:2}},[t._v("产品品牌")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t._v(t._s(t.checkDetail.brand_name))])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:2}},[t._v("产品名称")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t._v(t._s(t.checkDetail.name))])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:2}},[t._v("外观图片（六视图）")]),t._v(" "),t._l(t.checkDetail.images,function(t,a){return e("el-col",{key:t,staticClass:"card-hex-vision",attrs:{offset:0===a?2:0,span:3}},[e("img",{staticClass:"image",staticStyle:{width:"100%",height:"100%"},attrs:{src:t}})])})],2),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:2}},[t._v("产品规格书")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[e("a",{attrs:{href:t.checkDetail.spec_url}},[t._v(t._s(t.checkDetail.spec_name))])])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:2}},[t._v("产品使用说明书")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[e("a",{attrs:{href:t.checkDetail.instruct_url}},[t._v(t._s(t.checkDetail.instruct_name))])])],1)],1),t._v(" "),e("h3",[t._v("接入方式选择")]),t._v(" "),e("el-card",{staticClass:"box-card"},[e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:2}},[t._v("选择技术方案")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t._v("\n        "+t._s(t.checkDetail.type_txt)+"\n      ")])],1),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-span-left",attrs:{span:2}},[t._v("型号\n      ")]),t._v(" "),e("el-col",{staticClass:"card-span-right",attrs:{span:20,offset:2}},[t._v("\n        "+t._s(t.checkDetail.type_model)+"\n      ")])],1)],1),t._v(" "),e("h3",[t._v("必选功能点")]),t._v(" "),e("el-card",{staticClass:"box-card"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.attr_list,stripe:""}},[e("el-table-column",{attrs:{prop:"attr_id",label:"Stream_ID",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"参数名称",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"value_list",label:"value"},scopedSlots:t._u([{key:"default",fn:function(a){return[1===a.row.type||2===a.row.type?e("span",[t._v(t._s(a.row.value_list.join("/")))]):e("span",[t._v(t._s(a.row.value_string))])]}}])})],1)],1)],1)},c=[],r={render:s,staticRenderFns:c};a.a=r},nu3u:function(t,a,e){"use strict";var s=e("sQkU");a.a={name:"productCheckDetail",data:function(){return{record_id:"",checkDetail:""}},computed:{attr_list:function(){if(this.checkDetail.attr_list)return this.checkDetail.attr_list.filter(function(t){return 1===t.is_enable})}},created:function(){console.log("页面传参",this.$route.query),this.record_id=this.$route.query.record_id},mounted:function(){this.getReviewInfo()},methods:{getReviewInfo:function(){var t=this,a=this,e={record_id:a.record_id};Object(s.c)(e).then(function(a){console.log("产品审核详情",a),t.checkDetail=a})}}}},sQkU:function(t,a,e){"use strict";function s(t){return Object(i.a)({url:"/admin/review_lists?page="+t.page,method:"post",data:t})}function c(){return Object(i.a)({url:"/product/type_lists",method:"post",data:{}})}function r(t){return Object(i.a)({url:"/admin/review_info",method:"post",data:t})}function l(t){return Object(i.a)({url:"/admin/review_approve",method:"post",data:t})}a.d=s,a.b=c,a.c=r,a.a=l;var i=e("Vo7i")}});
//# sourceMappingURL=14.68ccdc0135785b80b433.js.map