webpackJsonp([106,83],{1:function(e,t,n){n("j1ja"),e.exports=n("6DsQ")},"5GDW":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("T452"),i={data:function(){return{show:!0,content:""}},created:function(){},mounted:function(){var t=this,e=this.paramQuery(),n={copywritingKey:e.copywritingKey};Object(a.h)(n).then(function(e){t.content=e.data.content,document.getElementById("content").innerHTML=t.content})},methods:{paramQuery:function(){var e={},t=document.location+"";if(!(0<t.indexOf("?")))return{};var n=(t=t.substr(t.indexOf("?")+1)).split("&");e.keys=[];for(var a=0;a<n.length;a+=1){var i=n[a].split("=");e[i[0]]=decodeURIComponent(i[1]),e.keys.push(i[0])}return e}}},r={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0,!1,!1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content",attrs:{id:"content"}},[n("p",{staticStyle:{"text-align":"center",color:"white"}},[e._v("内容加载中....")])])}]};var o=n("VU/8")(i,r,!1,function(e){n("GMLX")},"data-v-5c61d56e",null);t.default=o.exports},"6DsQ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("5GDW");new(n("7+uW").default)({el:"#app",components:{h5Page:a.default},template:"<h5Page/>"})},GMLX:function(e,t){},IcnI:function(e,t,n){"use strict";var a=n("Dd8w"),i=n.n(a),r=n("7+uW"),o=n("r8sI"),u=n.n(o),s=n("lbHh"),c=n.n(s),d={state:{sidebar:{opened:!+c.a.get("sidebarStatus")}},mutations:{TOGGLE_SIDEBAR:function(e){e.sidebar.opened?c.a.set("sidebarStatus",1):c.a.set("sidebarStatus",0),e.sidebar.opened=!e.sidebar.opened},breadListMutations:function(e,t){e.breadListState=t,sessionStorage.setItem("breadListStorage",t)}},actions:{ToggleSideBar:function(e){(0,e.commit)("TOGGLE_SIDEBAR")}},getters:{breadListState:function(){return JSON.parse(sessionStorage.getItem("breadListStorage"))||[]}}},l=n("//Fk"),f=n.n(l),p=n("Vo7i");var _=n("TIfe"),m={state:{token:Object(_.b)(),name:Object(_.c)(),avatar:"",roles:[],auditMenus:{},documentMenus:{},authorityMenus:[],isSuperAdmin:Object(_.a)()},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_NAME:function(e,t){e.name=t},SET_AVATAR:function(e,t){e.avatar=t},SET_ROLES:function(e,t){e.roles=t},SET_AUDIT_MENUS:function(e,t){e.auditMenus=t},SET_DOCUMENT_MENUS:function(e,t){e.documentMenus=t},SET_AUTHORITY_MENUS:function(e,t){e.authorityMenus=t}},actions:{Login:function(e,i){var r=e.commit,o=i.mail.trim();return new f.a(function(n,t){var e,a;e=o,a=i.password,Object(p.a)({url:"/admin/login",method:"post",data:{mail:e,password:a}}).then(function(e){var t=e;Object(_.g)(t.token),Object(_.h)(o),e.hasOwnProperty("permissions")&&1==e.permissions.del_product_admin?Object(_.f)(!0):0==e.permissions.del_product_admin&&Object(_.f)(!1),r("SET_NAME",o),r("SET_TOKEN",t.token),n()}).catch(function(e){t(e)})})},GetInfo:function(e){var a=e.commit,i=e.state;return new f.a(function(n,t){getInfo(i.token).then(function(e){var t=e.data;a("SET_ROLES",t.role),a("SET_NAME",t.name),a("SET_AVATAR",t.avatar),n(e)}).catch(function(e){t(e)})})},LogOut:function(e){var n=e.commit,a=e.state;return new f.a(function(e,t){a.token,Object(p.a)({url:"/admin/logout",method:"post",data:{}}).then(function(){n("SET_NAME",""),n("SET_TOKEN",""),n("SET_ROLES",[]),Object(_.d)(),Object(_.e)(),e()}).catch(function(e){t(e)})})},FedLogOut:function(e){var t=e.commit;return new f.a(function(e){t("SET_TOKEN",""),Object(_.d)(),e()})},GetAuditMenus:function(e){var a=e.commit;return new f.a(function(t,n){Object(p.a)({url:"/admin/apprmenu",method:"post",data:{}}).then(function(e){a("SET_AUDIT_MENUS",e.list),t()}).catch(function(e){n(e)})})},GetDocumentMenus:function(e){var a=e.commit;return new f.a(function(t,n){Object(p.a)({url:"/admin/documentMenu",method:"post",data:{}}).then(function(e){a("SET_DOCUMENT_MENUS",e.list),t()}).catch(function(e){n(e)})})},GetAuthorityMenus:function(e){var a=e.commit;return new f.a(function(t,n){Object(p.a)({url:"/admin/menu",method:"post",data:{}}).then(function(e){a("SET_AUTHORITY_MENUS",e),t()}).catch(function(e){n(e)})})}}},v=n("mvHQ"),g=n.n(v),h={state:{token:localStorage.getItem("authorization")||"",isOpen:!1,userInfos:JSON.parse(localStorage.getItem("userInfos"))||{},productStatus:JSON.parse(sessionStorage.getItem("productStatus"))||!1,listOwnerMenu:"",deviceDetail:"",subDeviceDetail:"",fileServiceId:sessionStorage.getItem("fileServiceId")||""},getters:{opened:function(e){return"false"!==e.isOpen&&("true"===e.isOpen||void 0)},regName:function(e){return localStorage.getItem("userInfos")?JSON.parse(localStorage.getItem("userInfos")).regName:e.userInfos.regName},proStatus:function(e){return!!e.productStatus},getCacheListOwnerMenu:function(e){return!!e.listOwnerMenu&&e.listOwnerMenu},getDeviceDetail:function(e){return!!e.deviceDetail&&e.deviceDetail},getsubDeviceDetail:function(e){return!!e.subDeviceDetail&&e.subDeviceDetail},getFileServiceId:function(e){return e.fileServiceId?e.fileServiceId:""}},mutations:{SET_OPENED:function(e,t){e.isOpen=String(t),sessionStorage.setItem("open",t)},SET_TOKEN:function(e,t){e.token=t,localStorage.setItem("authorization",t)},REMOVE_TOKEN:function(e,t){e.token=t,localStorage.removeItem("authorization")},SET_USERINFOS:function(e,t){e.userInfos=t;var n=g()(t);localStorage.setItem("userInfos",n)},SET_PRODUCT_STATUS:function(e,t){e.productStatus=t;var n=g()(t);sessionStorage.setItem("productStatus",n)},SET_LIST_OWNER_MENU:function(e,t){e.listOwnerMenu=t},SET_DEVICE_DETAIL:function(e,t){e.deviceDetail=t},SET_SUB_DEVICE_DETAIL:function(e,t){e.subDeviceDetail=t},SET_FILE_SERVICE_ID:function(e,t){e.fileServiceId=t,sessionStorage.setItem("fileServiceId",t)}},actions:{}},S={sidebar:function(e){return e.app.sidebar},token:function(e){return e.user.token},avatar:function(e){return e.user.avatar},name:function(e){return e.user.name},isSuperAdmin:function(e){return e.user.isSuperAdmin},roles:function(e){return e.user.roles},auditMenus:function(e){return e.user.auditMenus},documentMenus:function(e){return e.user.documentMenus},authorityMenus:function(e){return e.user.authorityMenus}};r.default.use(u.a);var E=new u.a.Store({modules:{app:d,user:m,category:h},getters:i()({getSelList:function(){return sessionStorage.getItem("selList")?JSON.parse(sessionStorage.getItem("selList")):null}},S)});t.a=E},T452:function(e,t,n){"use strict";t.b=function(e){return Object(a.a)({url:"/java_api/api/ext/set_roomenv_param/add",method:"post",data:e})},t.l=function(e){return Object(a.a)({url:"/java_api/api/ext/set_roomenv_param/update",method:"post",data:e})},t.j=function(e){return Object(a.a)({url:"/java_api/api/ext/set_roomenv_param/query",method:"get",params:e})},t.g=function(e){return Object(a.a)({url:"/java_api/api/ext/roomEnvScore/list",method:"post",data:e})},t.d=function(e){return Object(a.a)({url:"/java_api/api/ext/roomEnvScore/add",method:"post",data:e})},t.n=function(e){return Object(a.a)({url:"/java_api/api/ext/roomEnvScore/update",method:"post",data:e})},t.e=function(e){return Object(a.a)({url:"/java_api/api/ext/roomEnvScore/delete",method:"post",data:e})},t.f=function(){return Object(a.a)({url:"/java_api/api/ext/sysDefaultRoom/list",method:"post",data:{}})},t.c=function(e){return Object(a.a)({url:"/java_api/api/ext/sysDefaultRoom/add",method:"post",data:e})},t.m=function(e){return Object(a.a)({url:"/java_api/api/ext/sysDefaultRoom/update",method:"post",data:e})},t.i=function(e){return Object(a.a)({url:"/java_api/api/ext/copywritingManage/list",method:"post",data:e})},t.h=function(e){return Object(a.a)({url:"/java_api/api/ext/copywritingManage/detail",method:"post",data:e})},t.k=function(e){return Object(a.a)({url:"/java_api/api/ext/copywritingManage/edit",method:"post",data:e})},t.a=function(e){return Object(a.a)({url:"/java_api/api/ext/copywritingManage/add",method:"post",data:e})};var a=n("Vo7i")},TIfe:function(e,t,n){"use strict";t.b=function(){return i.a.get(r)},t.g=function(e){return i.a.set(r,e)},t.d=function(){return i.a.remove(r)},t.c=function(){return i.a.get(o)},t.h=function(e){return i.a.set(o,e)},t.e=function(){return i.a.remove(o)},t.a=function(){return i.a.get(u)},t.f=function(e){return i.a.set(u,e)};var a=n("lbHh"),i=n.n(a),r="Admin-Token",o="USERNAME",u="ISSUPERADMIN"},VSB1:function(e,t,n){"use strict";var a=n("woOf"),o=n.n(a),i=n("pFYg"),r=n.n(i);t.a={hasClass:function(e,t){return e.className&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},addClass:function(e,t){this.hasClass(e,t)||(e.className=(e.className+" "+t).replace("  "," ").trim())},removeClass:function(e,t){var n;this.hasClass(e,t)&&(n=new RegExp("(\\s|^)"+t+"(\\s|$)"),e.className=e.className.replace(n," ").replace("  "," ").trim())},toggleClass:function(e,t){this.hasClass(e,t)?this.removeClass(e,t):this.addClass(e,t)},getSearches:function(){var n={};return location.search.replace(/^\?/,"").split("&").forEach(function(e){var t=e.split("=");n[t[0]]=decodeURIComponent(t[1])}),n},getSearch:function(e){return this.getSearches()[e]},serialize:function(e){var t=[];if("object"!==(void 0===e?"undefined":r()(e)))return"";for(var n in e)t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")},unserialize:function(e){var t={};if(!e)return t;for(var n=e.split("&"),a=0,i=n.length;a<i;a++){var r=n[a].split("=");t[r[0]]=isNaN(r[1])?decodeURIComponent(r[1]):r[1]}return t},getElementByClassName:function(e){var t=[],n=document.getElementsByTagName("*"),a=0;for(var i in n)1==+n[i].nodeType&&n[i].getAttribute("class")===e&&(t[a]=n[i],a++);return t},validateString:function(e,t,n,a){var i=!0,r="";return t&&0!=t.trim().length?a instanceof RegExp&&(a.test(t)||(i=!1,r=e+"格式错误")):n&&(i=!1,r="请输入"+e),{validity:i,msg:r}},spanAnalyseData:function(n,a,e){var i=0;e[n.nodeid]={index:a.length,children:{}},n.list.forEach(function(t){"3"!=t.key_type?"1"==t.key_type?t.origin_value_list.forEach(function(e){i++,a.push(o()({nodeid:n.nodeid,attr_id:n.attr_id,value:e,is_enable:0<=t.value_list.indexOf(e)},t))}):(i++,a.push(o()({nodeid:n.nodeid,attr_id:n.attr_id,is_enable:!!t.value_list.length},t))):t.value_list.forEach(function(t,e){"1"==t.key_type?t.origin_value_list.forEach(function(e){i++,a.push({nodeid:n.nodeid,attr_id:n.attr_id,method_string:t.method_string,key:t.key,type:t.type,key_type:t.key_type,value_list:t.value_list,remark:t.remark,origin_value_list:t.origin_value_list||[],origin_value_list_des:t.value_des||[],value_string:t.value_string||"",value:e,is_checkbox:t.is_checkbox,is_enable:0<=t.value_list.indexOf(e)})}):(i++,a.push({nodeid:n.nodeid,attr_id:n.attr_id,method_string:t.method_string,key:t.key,type:t.type,key_type:t.key_type,value_list:t.value_list,remark:t.remark,unit:t.unit,origin_value_list:t.origin_value_list||[],origin_value_list_des:t.value_des||[],value_string:t.value_string||"",origin_value_string:t.origin_value_string,is_enable:!!t.value_list.length}))})}),e[n.nodeid].len=i},spanAnalyseDataElse:function(a,i,e){var r=0;e[a.nodeid]={index:i.length,children:{}},a.list.forEach(function(n,e){"3"!=n.key_type?(r++,i.push(o()({nodeid:a.nodeid,attr_id:a.attr_id,level:1,is_checkbox:n.is_checkbox||"0",index:e},n))):n.value_list.forEach(function(e,t){r++,i.push({nodeid:a.nodeid,attr_id:a.attr_id,method_string:e.method_string,key:e.key,type:e.type,key_type:e.key_type,value_list:e.value_list,remark:e.remark,unit:e.unit,origin_value_list:e.origin_value_list||[],origin_value_list_des:e.value_des||[],value_string:e.value_string||"",origin_value_string:e.origin_value_string,level:2,index:t,p_key:n.key,p_key_type:n.key_type,is_checkbox:e.is_checkbox||"0"})})}),e[a.nodeid].len=r},spanMethod:function(e,t,n){return 0==t&&e?e.index==n?[e.len,1]:[0,0]:[1,1]}}},Vo7i:function(e,t,n){"use strict";var a=n("//Fk"),i=n.n(a),r=n("mvHQ"),o=(n.n(r),n("woOf")),u=n.n(o),s=n("mtWM"),c=n.n(s),d=n("zL8q"),l=(n.n(d),n("IcnI")),f=n("DlMc"),p=(n.n(f),n("TIfe")),_=n("VSB1"),m=c.a.create({timeout:15e3});m.interceptors.request.use(function(e){var t={id:Object(f.v4)(),timestamp:Date.parse(new Date),version:"1.0"};return e.data instanceof FormData||-1!==e.url.indexOf("/icon")||-1!==e.url.indexOf("/product_agreement/versionadd")||(e.data=u()(t,e.data)),-1!==e.url.indexOf("/v1")||-1!==e.url.indexOf("/scene_web_type_mgt")||-1!==e.url.indexOf("scene_web_template_mgt")||-1!==e.url.indexOf("/icon")||(-1===e.url.indexOf("/java_api/")?e.url="/api/index.php"+e.url:e.url=e.url.replace(/\/java_api/g,"")),e.data||(e.data={}),l.a.getters.token&&(e.data.token=Object(p.b)()),"get"==e.method&&(e.url=e.url+"?"+_.a.serialize(e.data)),-1<e.url.indexOf("/api/ext")&&(e.url=e.url.replace(/\/api\/index.php/,"")),e},function(e){i.a.reject(e)}),m.interceptors.response.use(function(e){var t=e.data;return 200!==t.code?(Object(d.Message)({message:t.msg||t.message,type:"error",duration:2e3}),401===t.code&&l.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),i.a.reject(t)):-1!==e.config.url.indexOf("/v1")?i.a.resolve(e):e.data.result?i.a.resolve(e.data.result):i.a.resolve(e.data)},function(e){var t=e.response.data;return Object(d.Message)({message:t.msg||t.message,type:"error",duration:5e3}),401===t.code&&l.a.dispatch("FedLogOut").then(function(){window.location.assign(window.location.origin+window.location.pathname+"#/login")}),i.a.reject(t)}),t.a=m}},[1]);