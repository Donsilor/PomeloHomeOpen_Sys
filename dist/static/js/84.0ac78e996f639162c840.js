webpackJsonp([84],{H06k:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("Vo7i"),a={name:"documentManagement",data:function(){return{activeName:this.$route.name,height:window.innerHeight-50,width:window.innerWidth-300,navs:[{name:"Wi-Fi",url:"/documentManagement/wifi",type:"wifi",num:0},{name:"ZigBee",url:"/documentManagement/zigbee",type:"zigbee",num:0},{name:"蓝牙",url:"/documentManagement/bluetooth",type:"bluetooth",num:0},{name:"产品开发文档",url:"/documentManagement/development",type:"development",num:0},{name:"厂商文档管理",url:"/documentManagement/enterprise",type:"enterprise",num:0}]}},computed:{documentMenus:function(){return this.$store.state.user.documentMenus}},watch:{documentMenus:function(t){this.navs.forEach(function(e,n){e.num=t[e.name]})}},mounted:function(){},methods:{getMenuNum:function(){var e=this;Object(o.a)({url:"/admin/documentMenu",method:"post",data:{}}).then(function(t){e.navs.forEach(function(e,n){e.num=t.list[e.name]})})}}},i={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"tab-container"},[t("el-row",{staticStyle:{"padding-left":"160px","padding-bottom":"30px"}},[t("el-menu",{staticClass:"sec-menu doc-menu",attrs:{mode:"vertical","default-active":n.activeName,"background-color":"#f2f2f2","text-color":"#666","active-text-color":"#409EFF"}},[n._l(n.navs,function(e){return[t("router-link",{attrs:{to:e.url}},[t("el-menu-item",{attrs:{index:e.type}},[n._v("\n                        "+n._s(e.name)+"\n                        "),t("span",{staticClass:"num"},[n._v(n._s(e.num))])])],1)]})],2),n._v(" "),t("router-view")],1)],1)},staticRenderFns:[]};i=t("C7Lr")(a,i,!1,function(e){t("XO3l")},"data-v-96809d3c",null),n.default=i.exports},XO3l:function(e,n,t){var o=t("amIo");(o="string"==typeof o?[[e.i,o,""]]:o).locals&&(e.exports=o.locals);t("8bSs")("53b07516",o,!0)},amIo:function(e,n,t){(e.exports=t("BkJT")(!0)).push([e.i,".sec-menu[data-v-96809d3c]{position:fixed;left:150px;width:160px}","",{version:3,sources:["D:/project/c/PomeloHomeOpen_Sys/src/views/documentManagement/index.vue"],names:[],mappings:"AACA,2BACI,eAAgB,AAChB,WAAY,AACZ,WAAa,CAChB",file:"index.vue",sourcesContent:["\n.sec-menu[data-v-96809d3c]{\n    position: fixed;\n    left: 150px;\n    width: 160px;\n}\n"],sourceRoot:""}])}});