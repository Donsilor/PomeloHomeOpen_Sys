webpackJsonp([68],{DE2s:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={name:"configManagement",data:function(){return{activeName:this.$route.name,height:window.innerHeight-50,width:window.innerWidth-300,navs:[{name:"设备故障方案配置",url:"/configManagement/deviceFault",type:"deviceFault"},{name:"路由器事件配置",url:"/configManagement/eventMsg",type:"eventMsg"},{name:"APP配置",url:"/configManagement/appConfig",type:"appConfig"}]}}},i={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"tab-container"},[t("el-row",{staticStyle:{"padding-left":"160px","padding-bottom":"30px"}},[t("el-menu",{staticClass:"sec-menu doc-menu",attrs:{mode:"vertical","default-active":n.activeName,"background-color":"#f2f2f2","text-color":"#666","active-text-color":"#409EFF"}},[n._l(n.navs,function(e){return[t("router-link",{attrs:{to:e.url}},[t("el-menu-item",{attrs:{index:e.type}},[n._v("\n                        "+n._s(e.name)+"\n                    ")])],1)]})],2),n._v(" "),t("router-view")],1)],1)},staticRenderFns:[]};var o=t("VU/8")(a,i,!1,function(e){t("SXTN")},"data-v-7580a675",null);n.default=o.exports},OZY2:function(e,n,t){(e.exports=t("FZ+f")(!0)).push([e.i,".sec-menu[data-v-7580a675]{position:fixed;left:150px;width:160px}","",{version:3,sources:["/Users/eric/PomeloHomeOpen_Sys/src/views/configManagement/index.vue"],names:[],mappings:"AACA,2BACE,eAAgB,AAChB,WAAY,AACZ,WAAa,CACd",file:"index.vue",sourcesContent:["\n.sec-menu[data-v-7580a675] {\n  position: fixed;\n  left: 150px;\n  width: 160px;\n}\n"],sourceRoot:""}])},SXTN:function(e,n,t){var a=t("OZY2");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("c3eb5228",a,!0)}});