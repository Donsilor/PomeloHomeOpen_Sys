webpackJsonp([66],{"5GDW":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("T452"),o={data:function(){return{show:!0,content:""}},created:function(){},mounted:function(){var e=this,t=this.paramQuery(),n={copywritingKey:t.copywritingKey};Object(a.h)(n).then(function(t){e.content=t.data.content,document.getElementById("content").innerHTML=e.content})},methods:{paramQuery:function(){var t={},e=document.location+"";if(!(0<e.indexOf("?")))return{};var n=(e=e.substr(e.indexOf("?")+1)).split("&");t.keys=[];for(var a=0;a<n.length;a+=1){var o=n[a].split("=");t[o[0]]=decodeURIComponent(o[1]),t.keys.push(o[0])}return t}}},r={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content",attrs:{id:"content"}},[n("p",{staticStyle:{"text-align":"center",color:"white"}},[t._v("内容加载中....")])])}]};var i=n("VU/8")(o,r,!1,function(t){n("GMLX")},"data-v-5c61d56e",null);e.default=i.exports},GMLX:function(t,e){},HIeg:function(t,e,n){"use strict";var a=n("//Fk"),o=n.n(a),r=n("mvHQ"),i=(n.n(r),n("woOf")),c=n.n(i),u=n("mtWM"),d=n.n(u),s=n("zL8q"),p=(n.n(s),n("IcnI")),l=n("DlMc"),m=(n.n(l),n("TIfe")),f=n("VSB1"),g=d.a.create({timeout:15e3});g.interceptors.request.use(function(t){var e={id:Object(l.v4)(),timestamp:Date.parse(new Date),version:"1.0"};return t.data instanceof FormData||-1!==t.url.indexOf("/icon")||-1!==t.url.indexOf("/product_agreement/versionadd")||-1!==t.url.indexOf("/copywritingManage/")||(t.data=c()(e,t.data)),t.data||(t.data={}),p.a.getters.token&&(t.data.token=Object(m.b)()),"get"==t.method&&(t.url=t.url+"?"+f.a.serialize(t.data)),t},function(t){o.a.reject(t)}),g.interceptors.response.use(function(t){var e=t.data;return 200!==e.code?(Object(s.Message)({message:e.msg||e.message,type:"error",duration:2e3}),401===e.code&&p.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),o.a.reject(e)):-1!==t.config.url.indexOf("/v1")?o.a.resolve(t):t.data.result?o.a.resolve(t.data.result):o.a.resolve(t.data)},function(t){var e=t.response.data;return Object(s.Message)({message:e.msg||e.message,type:"error",duration:5e3}),401===e.code&&p.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),o.a.reject(e)}),e.a=g},T452:function(t,e,n){"use strict";e.b=function(t){return Object(a.a)({url:"/api/ext/set_roomenv_param/add",method:"post",data:t})},e.l=function(t){return Object(a.a)({url:"/api/ext/set_roomenv_param/update",method:"post",data:t})},e.j=function(t){return Object(a.a)({url:"/api/ext/set_roomenv_param/query",method:"get",params:t})},e.g=function(t){return Object(a.a)({url:"/api/ext/roomEnvScore/list",method:"post",data:t})},e.d=function(t){return Object(a.a)({url:"/api/ext/roomEnvScore/add",method:"post",data:t})},e.n=function(t){return Object(a.a)({url:"/api/ext/roomEnvScore/update",method:"post",data:t})},e.e=function(t){return Object(a.a)({url:"/api/ext/roomEnvScore/delete",method:"post",data:t})},e.f=function(){return Object(a.a)({url:"/api/ext/sysDefaultRoom/list",method:"post",data:{}})},e.c=function(t){return Object(a.a)({url:"/api/ext/sysDefaultRoom/add",method:"post",data:t})},e.m=function(t){return Object(a.a)({url:"/api/ext/sysDefaultRoom/update",method:"post",data:t})},e.i=function(t){return Object(a.a)({url:"/api/ext/copywritingManage/list",method:"post",data:t})},e.h=function(t){return Object(a.a)({url:"/api/ext/copywritingManage/detail",method:"post",data:t})},e.k=function(t){return Object(a.a)({url:"/api/ext/copywritingManage/edit",method:"post",data:t})},e.a=function(t){return Object(a.a)({url:"/api/ext/copywritingManage/add",method:"post",data:t})};var a=n("HIeg")}});