webpackJsonp([9],{"1H6C":function(t,e,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&0<=Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime"),i=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("HhN8"),a)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},FiTB:function(t,e,r){(t.exports=r("FZ+f")(!0)).push([t.i,".checkContent[data-v-008a1ca4],.imgAddBtn[data-v-008a1ca4],.text[data-v-008a1ca4]{margin-top:10px}.col[data-v-008a1ca4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.col span[data-v-008a1ca4]{display:block;width:50px}.tx-r[data-v-008a1ca4]{text-align:right}[data-v-008a1ca4] .el-upload-list{float:left}","",{version:3,sources:["/Users/eric/PomeloHomeOpen_Sys/src/views/typeManagement/addCard.vue"],names:[],mappings:"AAOA,kFACE,eAAiB,CAClB,AACD,sBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,2BACI,cAAe,AACf,UAAY,CACf,AACD,uBACE,gBAAkB,CACnB,AACD,kCACE,UAAY,CACb",file:"addCard.vue",sourcesContent:["\n.text[data-v-008a1ca4] {\n  margin-top: 10px;\n}\n.imgAddBtn[data-v-008a1ca4] {\n  margin-top: 10px;\n}\n.checkContent[data-v-008a1ca4] {\n  margin-top: 10px;\n}\n.col[data-v-008a1ca4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.col span[data-v-008a1ca4] {\n    display: block;\n    width: 50px;\n}\n.tx-r[data-v-008a1ca4] {\n  text-align: right;\n}\n[data-v-008a1ca4] .el-upload-list {\n  float: left;\n}\n"],sourceRoot:""}])},HhN8:function(S,t){!function(t){"use strict";var c,e=Object.prototype,l=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",n=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag",o="object"==typeof S,s=t.regeneratorRuntime;if(s)o&&(S.exports=s);else{(s=t.regeneratorRuntime=o?S.exports:{}).wrap=x;var d="suspendedStart",p="suspendedYield",f="executing",m="completed",h={},u={};u[a]=function(){return this};var g=Object.getPrototypeOf,v=g&&g(g(B([])));v&&v!==e&&l.call(v,a)&&(u=v);var y=w.prototype=b.prototype=Object.create(u);C.prototype=y.constructor=w,w.constructor=C,w[i]=C.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(y),t},s.awrap=function(t){return{__await:t}},A(k.prototype),k.prototype[n]=function(){return this},s.AsyncIterator=k,s.async=function(t,e,r,n){var a=new k(x(t,e,r,n));return s.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},A(y),y[i]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},s.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},s.values=B,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=c),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var a=this.tryEntries[e],i=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var o=l.call(a,"catchLoc"),s=l.call(a,"finallyLoc");if(o&&s){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:B(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=c),h}}}function x(t,e,r,n){var i,o,s,c,a=e&&e.prototype instanceof b?e:b,l=Object.create(a.prototype),u=new E(n||[]);return l._invoke=(i=t,o=r,s=u,c=d,function(t,e){if(c===f)throw new Error("Generator is already running");if(c===m){if("throw"===t)throw e;return j()}for(s.method=t,s.arg=e;;){var r=s.delegate;if(r){var n=I(r,s);if(n){if(n===h)continue;return n}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(c===d)throw c=m,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);c=f;var a=_(i,o,s);if("normal"===a.type){if(c=s.done?m:p,a.arg===h)continue;return{value:a.arg,done:s.done}}"throw"===a.type&&(c=m,s.method="throw",s.arg=a.arg)}}),l}function _(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function C(){}function w(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(c){var e;this._invoke=function(r,n){function t(){return new Promise(function(t,e){!function e(t,r,n,a){var i=_(c[t],c,r);if("throw"!==i.type){var o=i.arg,s=o.value;return s&&"object"==typeof s&&l.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,n,a)},function(t){e("throw",t,n,a)}):Promise.resolve(s).then(function(t){o.value=t,n(o)},a)}a(i.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function I(t,e){var r=t.iterator[e.method];if(r===c){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=c,I(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=_(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=c),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function B(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(l.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=c,t.done=!0,t};return n.next=n}}return{next:j}}function j(){return{value:c,done:!0}}}(function(){return this}()||Function("return this")())},UyAJ:function(t,e,r){"use strict";e.c=function(t){return Object(n.a)({url:"/api/ext/devcard/template",method:"get",data:t})},e.d=function(t){return Object(n.a)({url:"/api/ext/devcard/template",method:"post",data:t})},e.b=function(){return Object(n.a)({url:"/api/ext/devcard/size",method:"get"})},e.a=function(t){return Object(n.a)({url:"/api/ext/devcard/size",method:"post",data:t})};var n=r("Vo7i")},Xxa5:function(t,e,r){t.exports=r("1H6C")},eXaO:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("woOf"),i=r.n(n),a=r("fZjL"),o=r.n(a),s=r("Xxa5"),c=r.n(s),l=r("exGp"),u=r.n(l),d=r("TIfe"),p=r("Vo7i");function f(t){return Object(p.a)({url:"api/ext/devcard/rect",method:"post",data:t})}var m=r("UyAJ"),h={data:function(){return{andImgList:[],iosImgList:[],ipadImgList:[],cardList:[],dataList:[],dialogImageUrl:"",dialogVisible:!1,and_base_img:{type:12,token:Object(d.b)()},ios_base_img:{type:12,token:Object(d.b)()},ipad_base_img:{type:12,token:Object(d.b)()},formVisible:!1,formItem:{},checked:{},addOperateImages:{}}},created:function(){var e=this;return u()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCardSizeList();case 2:e.getRectCard();case 3:case"end":return t.stop()}},t,e)}))()},mounted:function(){},methods:{returnList:function(e,r,n){var t=e.images&&e.images[r.x+","+r.y]&&e.images[r.x+","+r.y][0]?e.images[r.x+","+r.y][0]:[],a=[];return o()(e.operateImages).forEach(function(t){e.operateImages[t].x.toString()===r.x.toString()&&e.operateImages[t].y.toString()===r.y.toString()&&e.operateImages[t].os.toString()===n.toString()&&a.push(e.operateImages[t])}),i()([],t,a)},getRectCard:function(){var e=this;Object(p.a)({url:"api/ext/devcard/rect",method:"get"}).then(function(t){t.data.forEach(function(r){r.checked={},e.cardList.forEach(function(t){r.checked[t.x+","+t.y]=!1});var n={};o()(r.images).forEach(function(e){r.images;r.images[e][0]&&r.images[e][0].forEach(function(t){t.url=t.img,t.op=2,t.x=e.split(",")[0],t.y=e.split(",")[1],t.os=0,n[t.imgid]=t}),r.images[e][1]&&r.images[e][1].forEach(function(t){t.url=t.img,t.op=2,t.x=e.split(",")[0],t.y=e.split(",")[1],t.os=1,n[t.imgid]=t}),r.images[e][2]&&r.images[e][2].forEach(function(t){t.url=t.img,t.op=2,t.x=e.split(",")[0],t.y=e.split(",")[1],t.os=2,n[t.imgid]=t})}),r.operateImages=n}),e.dataList=t.data})},getCardSizeList:function(){var e=this;Object(m.b)({}).then(function(t){t.data.forEach(function(t){t.checked=!1,t.andImgList=[],t.iosImgList=[],t.ipadImgList=[]}),e.cardList=t.data})},resetCardCheck:function(){this.cardList.forEach(function(t){t.checked=!1})},addCard:function(){this.formVisible=!0,this.formItem={},this.addOperateImages={},this.resetCardCheck()},addNewCard:function(){var a=this,i=[];o()(this.addOperateImages).forEach(function(e){var r=a.addOperateImages[e].x,n=a.addOperateImages[e].y;a.cardList.forEach(function(t){!t.checked||parseInt(t.x)!==parseInt(r)||parseInt(t.y)!==parseInt(n)||1!==a.addOperateImages[e].op&&3!==a.addOperateImages[e].op||i.push(a.addOperateImages[e])})}),this.formItem.operator=1,this.formItem.images=i,f(this.formItem).then(function(t){200===t.code?(a.$message({message:"保存添加成功",type:"success"}),a.formVisible=!1,a.getRectCard()):a.$message.error("卡片添加失败")})},save:function(n){var e=this,t={operator:2,rect_id:n.rect_id,rect_name:n.rect_name,images:[]},a=[];o()(n.operateImages).forEach(function(t){var e=n.operateImages[t].x,r=n.operateImages[t].y;n.checked[e+","+r]&&a.push(n.operateImages[t])}),t.images=a,f(t).then(function(t){200===t.code?(e.$message({message:"保存修改成功",type:"success"}),e.getRectCard()):e.$message.error("保存修改失败")})},del:function(t){var e=this,r={rect_id:t.rect_id,rect_name:t.rect_name,operator:3};this.$confirm("确认取消？").then(function(){f(r).then(function(t){200===t.code?(e.$message({message:"删除成功",type:"success"}),e.getRectCard()):e.$message.error("删除失败")})})},checkChange:function(){},handleChange:function(t,e){this.fileList=e.slice(-3)},uploadSuccess:function(r,n,a){return function(t){var e={x:n.x,y:n.y,os:a,name:t.result.filename,img:t.result.object,op:1};r.operateImages[t.result.md5]=e}},removeSuccess:function(a){return function(t,e){if(t.response){var r=t.response.result.md5;delete a.operateImages[r]}else{var n=t.imgid;a.operateImages[n].op=3}}},handleUpload:function(r,n){var a=this;return function(t){var e={x:r.x,y:r.y,os:n,name:t.result.filename,img:t.result.object,op:1};a.addOperateImages[t.result.md5]=e}},handleremove:function(t){var e=t.response.result.md5;delete this.addOperateImages[e]},imageChange:function(t,e){this.imgList=e.slice(-3)},imageSuccess:function(){},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0}}},g={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",{staticStyle:{"margin-bottom":"10px"}},[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:n.addCard}},[n._v("\n      新增卡片\n    ")])],1),n._v(" "),a("div",n._l(n.dataList,function(r,e){return a("el-card",{key:e,staticClass:"box-card"},[a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("el-col",{staticClass:"col",attrs:{span:5}},[a("span",[n._v("名称:")]),n._v(" "),a("el-input",{attrs:{placeholder:"请输入名称"},model:{value:r.rect_name,callback:function(t){n.$set(r,"rect_name",t)},expression:"item.rect_name"}})],1),n._v(" "),a("el-col",{staticClass:"col",staticStyle:{"margin-left":"10px"},attrs:{span:5}},[a("span",[n._v("\n            ID:\n          ")]),n._v(" "),a("el-input",{attrs:{disabled:"",placeholder:"请输入ID"},model:{value:r.rect_id,callback:function(t){n.$set(r,"rect_id",t)},expression:"item.rect_id"}})],1),n._v(" "),a("el-col",{attrs:{span:1,offset:10}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){n.save(r,e)}}},[n._v("\n            保存\n          ")])],1),n._v(" "),a("el-col",{staticStyle:{"margin-left":"20px"},attrs:{span:1}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){n.del(r,e)}}},[n._v("\n            删除\n          ")])],1)],1),n._v(" "),n._l(n.cardList,function(e,t){return a("el-row",{key:t,staticClass:"imgContent"},[a("el-col",{staticClass:"checkContent",attrs:{span:1}},[a("el-checkbox",{model:{value:r.checked[e.x+","+e.y],callback:function(t){n.$set(r.checked,e.x+","+e.y,t)},expression:"item.checked[ele.x+','+ele.y]"}},[n._v(n._s(e.x+"*"+e.y))])],1),n._v(" "),a("el-col",{attrs:{span:23}},[a("el-col",{attrs:{span:7}},[a("el-col",{staticClass:"text",attrs:{span:3}},[n._v("安卓：")]),n._v(" "),a("el-col",{attrs:{span:4}},[a("el-upload",{attrs:{"on-success":n.uploadSuccess(r,e,0),data:n.and_base_img,"file-list":n.returnList(r,e,"0"),"on-remove":n.removeSuccess(r),action:"/api/index.php/files/save"}},[a("el-button",{staticClass:"imgAddBtn",attrs:{icon:"el-icon-plus",size:"mini"}},[n._v("添加图片")])],1)],1)],1),n._v(" "),a("el-col",{attrs:{span:7}},[a("el-col",{staticClass:"text",attrs:{span:3}},[n._v("IOS：")]),n._v(" "),a("el-col",{attrs:{span:4}},[a("el-upload",{attrs:{"on-success":n.uploadSuccess(r,e,1),data:n.ios_base_img,"file-list":n.returnList(r,e,"1"),"on-remove":n.removeSuccess(r),action:"/api/index.php/files/save"}},[a("el-button",{staticClass:"imgAddBtn",attrs:{icon:"el-icon-plus",size:"mini"}},[n._v("添加图片")])],1)],1)],1),n._v(" "),a("el-col",{attrs:{span:7}},[a("el-col",{staticClass:"text",attrs:{span:3}},[n._v("面板：")]),n._v(" "),a("el-col",{attrs:{span:4}},[a("el-upload",{attrs:{"on-success":n.uploadSuccess(r,e,2),data:n.ipad_base_img,"file-list":n.returnList(r,e,"2"),"on-remove":n.removeSuccess(r),action:"/api/index.php/files/save"}},[a("el-button",{staticClass:"imgAddBtn",attrs:{icon:"el-icon-plus",size:"mini"}},[n._v("添加图片")])],1)],1)],1)],1)],1)})],2)})),n._v(" "),a("el-dialog",{attrs:{visible:n.dialogVisible},on:{"update:visible":function(t){n.dialogVisible=t}}},[a("img",{attrs:{src:n.dialogImageUrl,width:"100%",alt:""}})]),n._v(" "),a("el-dialog",{attrs:{visible:n.formVisible,title:"添加卡片"},on:{"update:visible":function(t){n.formVisible=t}}},[a("el-form",{staticClass:"form",attrs:{"label-width":"200px"}},[a("el-form-item",{attrs:{label:"ID"}},[a("el-input",{attrs:{type:"input"},model:{value:n.formItem.rect_id,callback:function(t){n.$set(n.formItem,"rect_id",t)},expression:"formItem.rect_id"}})],1),n._v(" "),a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{type:"input"},model:{value:n.formItem.rect_name,callback:function(t){n.$set(n.formItem,"rect_name",t)},expression:"formItem.rect_name"}})],1),n._v(" "),n._l(n.cardList,function(e,t){return a("el-row",{key:t,staticClass:"imgContent",attrs:{span:24}},[a("el-col",{staticClass:"checkContent",attrs:{span:3}},[a("el-checkbox",{model:{value:e.checked,callback:function(t){n.$set(e,"checked",t)},expression:"item.checked"}},[n._v("\n            "+n._s(e.x)+"*"+n._s(e.y)+"\n          ")])],1),n._v(" "),a("el-col",{attrs:{span:21}},[a("el-col",{attrs:{span:4}},[n._v("安卓图片：")]),n._v(" "),a("el-col",{attrs:{span:17}},[a("el-upload",{attrs:{"on-preview":n.handlePictureCardPreview,data:n.and_base_img,"file-list":e.androidImgList,"on-success":n.handleUpload(e,0),"on-remove":n.handleremove,action:"/api/index.php/files/save","list-type":"picture"}},[a("i",{staticClass:"el-icon-plus"})])],1),n._v(" "),a("el-col",{attrs:{span:4}},[n._v("IOS图片：")]),n._v(" "),a("el-col",{attrs:{span:17}},[a("el-upload",{attrs:{"on-preview":n.handlePictureCardPreview,data:n.ios_base_img,"file-list":e.iosImgList,"on-success":n.handleUpload(e,1),"on-remove":n.handleremove,action:"/api/index.php/files/save","list-type":"picture"}},[a("i",{staticClass:"el-icon-plus"})])],1),n._v(" "),a("el-col",{attrs:{span:4}},[n._v("面板图片：")]),n._v(" "),a("el-col",{attrs:{span:17}},[a("el-upload",{attrs:{"on-preview":n.handlePictureCardPreview,data:n.ipad_base_img,"file-list":e.ipadImgList,"on-success":n.handleUpload(e,2),"on-remove":n.handleremove,action:"/api/index.php/files/save","list-type":"picture"}},[a("i",{staticClass:"el-icon-plus"})])],1)],1)],1)})],2),n._v(" "),a("el-row",{staticClass:"tx-r"},[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:n.addNewCard}},[n._v("\n        确认添加\n      ")])],1)],1)],1)},staticRenderFns:[]};var v=r("VU/8")(h,g,!1,function(t){r("tm+q")},"data-v-008a1ca4",null);e.default=v.exports},exGp:function(t,e,r){"use strict";e.__esModule=!0;var n,a=r("//Fk"),c=(n=a)&&n.__esModule?n:{default:n};e.default=function(t){return function(){var s=t.apply(this,arguments);return new c.default(function(i,o){return function e(t,r){try{var n=s[t](r),a=n.value}catch(t){return void o(t)}if(!n.done)return c.default.resolve(a).then(function(t){e("next",t)},function(t){e("throw",t)});i(a)}("next")})}}},"tm+q":function(t,e,r){var n=r("FiTB");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r("rjj0")("3ce23c78",n,!0)}});