webpackJsonp([64],{N3le:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("Vo7i");var o={name:"ProductManagement",data:function(){return{activeName:this.$route.meta.key||this.$route.name,height:window.innerHeight-50,width:window.innerWidth-300,navs:[{name:"已上线产品",url:"/productManagement/onlineProducts",type:"onlineProducts"},{name:"已下线产品",url:"/productManagement/offlineProducts",type:"offlineProducts"}]}},mounted:function(){},methods:{}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-container"},[n("el-row",{staticStyle:{"padding-left":"160px","padding-bottom":"30px"}},[n("el-menu",{staticClass:"sec-menu doc-menu",attrs:{"default-active":t.activeName,mode:"vertical","background-color":"#f2f2f2","text-color":"#666","active-text-color":"#409EFF"}},[t._l(t.navs,function(e){return[n("router-link",{attrs:{to:e.url}},[n("el-menu-item",{attrs:{index:e.type}},[t._v("\n            "+t._s(e.name)+"\n          ")])],1)]})],2),t._v(" "),n("router-view")],1)],1)},staticRenderFns:[]};var a=n("VU/8")(o,i,!1,function(e){n("fl/+")},"data-v-97804284",null);t.default=a.exports},"fl/+":function(e,t,n){var o=n("sK+v");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("106fc965",o,!0)},"sK+v":function(e,t,n){(e.exports=n("FZ+f")(!0)).push([e.i,".sec-menu[data-v-97804284]{position:fixed;left:150px;width:160px}","",{version:3,sources:["F:/A-PRODUCT/PomeloHomeOpen_Sys/src/views/productManagement/index.vue"],names:[],mappings:"AACA,2BACE,eAAgB,AAChB,WAAY,AACZ,WAAa,CACd",file:"index.vue",sourcesContent:["\n.sec-menu[data-v-97804284] {\n  position: fixed;\n  left: 150px;\n  width: 160px;\n}\n"],sourceRoot:""}])}});