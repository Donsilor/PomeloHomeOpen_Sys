webpackJsonp([65],{"4xrP":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"ExistedCategory",data:function(){return{activeName:this.$route.meta.key||this.$route.name,isCheckedRender:!1,height:window.innerHeight-50,navs:[{name:"产品子品类",url:"/typeManagement/existedCategory",type:"existedCategory"},{name:"产品大品类",url:"/typeManagement/bigCategory",type:"bigCategory"},{name:"APP品类",url:"/typeManagement/appCategory",type:"appCategory"},{name:"引导页管理",url:"/typeManagement/deviceManager",type:"deviceManager"},{name:"配网方式管理",url:"/typeManagement/networkManager",type:"networkManager"},{name:"渠道商管理",url:"/typeManagement/channelManager",type:"channelManager"},{name:"语音平台管理",url:"/typeManagement/voicePlatform",type:"voicePlatform"},{name:"技术方案管理",url:"/typeManagement/technology",type:"technology"},{name:"品牌licence管理",url:"/typeManagement/manufacturer",type:"manufacturer"},{name:"编组tag管理",url:"/typeManagement/addTag",type:"addTag"},{name:"卡片大小",url:"/typeManagement/cardManage",type:"cardManage"},{name:"非设备卡片大小设置",url:"/typeManagement/addCard",type:"addCard"},{name:"面板屏幕模版",url:"/typeManagement/screen",type:"screen"},{name:"面板页面配置",url:"/typeManagement/panelPage",type:"panelPage"}]}},computed:{},created:function(){},mounted:function(){},methods:{renderChecked:function(e,t){"checked"===e.name&&(this.isCheckedRender=!0)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-container"},[a("el-row",{staticStyle:{"padding-left":"160px","padding-bottom":"30px"}},[a("el-menu",{staticClass:"sec-menu",attrs:{"default-active":t.activeName,mode:"vertical","background-color":"#f2f2f2","text-color":"#666","active-text-color":"#409EFF"}},[t._l(t.navs,function(e){return[a("router-link",{key:e.name,attrs:{to:e.url}},[a("el-menu-item",{attrs:{index:e.type}},[e.icon?a("i",{class:e.icon}):t._e(),t._v("\n            "+t._s(e.name)+"\n          ")])],1)]})],2),t._v(" "),a("router-view")],1)],1)},staticRenderFns:[]};r=a("C7Lr")(n,r,!1,function(e){a("KyPG")},"data-v-0ba6e9ad",null),t.default=r.exports},"9b5t":function(e,t,a){(e.exports=a("BkJT")(!0)).push([e.i,".sec-menu[data-v-0ba6e9ad]{position:fixed;left:150px;width:160px}","",{version:3,sources:["E:/A-project/PomeloHomeOpen_Sys/src/views/typeManagement/index.vue"],names:[],mappings:"AACA,2BACI,eAAgB,AAChB,WAAY,AACZ,WAAa,CAChB",file:"index.vue",sourcesContent:["\n.sec-menu[data-v-0ba6e9ad]{\n    position: fixed;\n    left: 150px;\n    width: 160px;\n}\n"],sourceRoot:""}])},KyPG:function(e,t,a){var n=a("9b5t");(n="string"==typeof n?[[e.i,n,""]]:n).locals&&(e.exports=n.locals);a("8bSs")("0fdbc838",n,!0)}});