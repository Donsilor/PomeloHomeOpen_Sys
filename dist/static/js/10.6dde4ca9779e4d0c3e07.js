webpackJsonp([10],{"1Wvq":function(e,t,i){/*!
 * Name: vue-upload-component
 * Version: 2.7.0
 * Author: LianYue
 */
!function(t,i){e.exports=i()}(0,function(){"use strict";function e(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText="":t.appendChild(document.createTextNode("")),e.appendChild(t)}}();var t={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{attrs:{type:"file",name:e.$parent.name,id:e.$parent.inputId||e.$parent.name,accept:e.$parent.accept,webkitdirectory:e.$parent.directory&&e.$parent.features.directory,directory:e.$parent.directory&&e.$parent.features.directory,multiple:e.$parent.multiple&&e.$parent.features.html5},on:{change:e.change}})},staticRenderFns:[],methods:{change:function(e){this.$destroy(),this.$parent.addInputFile(e.target),new this.constructor({parent:this.$parent,el:this.$el})}}},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),i=' .file-uploads { overflow: hidden; position: relative; text-align: center; display: inline-block; } .file-uploads.file-uploads-html4 input[type="file"] { opacity: 0; font-size: 20em; z-index: 1; top: 0; left: 0; right: 0; bottom: 0; position: absolute; width: 100%; height: 100%; } .file-uploads.file-uploads-html5 input[type="file"] { overflow: hidden; position: fixed; width: 1px; height: 1px; z-index: -1; opacity: 0; } ';t.type="text/css",t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i)),e.appendChild(t)}}();var n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{class:e.className},[e._t("default"),e._v(" "),i("input-file")],2)},staticRenderFns:[],components:{InputFile:t},props:{inputId:{type:String},name:{type:String,default:"file"},accept:{type:String},multiple:{type:Boolean},maximum:{type:Number,default:function(){return this.multiple?0:1}},addIndex:{type:[Boolean,Number]},directory:{type:Boolean},postAction:{type:String},putAction:{type:String},headers:{type:Object,default:Object},data:{type:Object,default:Object},timeout:{type:Number,default:0},drop:{default:!1},dropDirectory:{type:Boolean,default:!0},size:{type:Number,default:0},extensions:{default:Array},value:{type:Array,default:Array},thread:{type:Number,default:1}},data:function(){return{files:this.value,features:{html5:!0,directory:!1,drag:!1},active:!1,dropActive:!1,uploading:0,destroy:!1}},mounted:function(){var e=document.createElement("input");e.type="file",e.multiple=!0,window.FormData&&e.files?("boolean"!=typeof e.webkitdirectory&&"boolean"!=typeof e.directory||(this.features.directory=!0),this.features.html5&&void 0!==e.ondrop&&(this.features.drop=!0)):this.features.html5=!1,this.maps={},this.$nextTick(function(){this.$parent&&this.$parent.$forceUpdate(),this.watchDrop(this.drop)})},beforeDestroy:function(){this.destroy=!0,this.active=!1},computed:{uploaded:function(){for(var e=void 0,t=0;t<this.files.length;t++)if(e=this.files[t],e.fileObject&&!e.error&&!e.success)return!1;return!0},className:function(){return["file-uploads",this.features.html5?"file-uploads-html5":"file-uploads-html4",this.features.directory&&this.directory?"file-uploads-directory":void 0,this.features.drop&&this.drop?"file-uploads-drop":void 0]}},watch:{active:function(e){this.watchActive(e)},dropActive:function(){this.$parent&&this.$parent.$forceUpdate()},drop:function(e){this.watchDrop(e)},value:function(e){if(this.files!==e){this.files=e;var t=this.maps;this.maps={};for(var i=0;i<this.files.length;i++){var r=this.files[i];this.maps[r.id]=r}for(var n in this.maps){var o=this.maps[n],a=t[n];o!==a&&this.emitFile(o,a)}for(var s in t)this.maps[s]||this.emitFile(void 0,t[s])}}},methods:{clear:function(){if(this.files.length){var e=this.files;this.files=[],this.maps={},this.emitInput();for(var t=0;t<e.length;t++)this.emitFile(void 0,e[t])}return!0},get:function(e){return!!e&&("object"===(void 0===e?"undefined":r(e))?this.maps[e.id]||!1:this.maps[e]||!1)},add:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.addIndex,r=e,n=r instanceof Array;n||(r=[r]);for(var o=[],a=0;a<r.length;a++){var s=r[a];this.features.html5&&s instanceof Blob&&(s={file:s,size:s.size,name:s.webkitRelativePath||s.relativePath||s.name||"unknown",type:s.type});var l=!1;if(!1===s.fileObject||(s.fileObject?l=!0:"undefined"!=typeof Element&&s.el instanceof Element?l=!0:"undefined"!=typeof Blob&&s.file instanceof Blob&&(l=!0)),l&&(s=i({fileObject:!0,size:-1,name:"Filename",type:"",active:!1,error:"",success:!1,putAction:this.putAction,postAction:this.postAction,timeout:this.timeout},s,{response:{},progress:"0.00",speed:0}),s.data=i({},this.data,s.data?s.data:{}),s.headers=i({},this.headers,s.headers?s.headers:{})),s.id||(s.id=Math.random().toString(36).substr(2)),!this.emitFilter(s,void 0)){if(this.maximum>1&&o.length+this.files.length>=this.maximum)break;if(o.push(s),1===this.maximum)break}}if(!o.length)return!1;1===this.maximum&&this.clear();var u=void 0;!0===t||0===t?u=o.concat(this.files):t?(u=o.concat([]),u.splice(t,0,o)):u=this.files.concat(o),this.files=u;for(var d=0;d<o.length;d++){var c=o[d];this.maps[c.id]=c}this.emitInput();for(var p=0;p<o.length;p++)this.emitFile(o[p],void 0);return n?o:o[0]},addInputFile:function(e){var t=[];if(e.files)for(var i=0;i<e.files.length;i++){var r=e.files[i];t.push({size:r.size,name:r.webkitRelativePath||r.relativePath||r.name,type:r.type,file:r,el:e})}else t.push({name:e.value.replace(/^.*?([^\/\\\r\n]+)$/,"$1"),el:e});return this.add(t)},addDataTransfer:function(t){var i=this,r=[];if(t.items&&t.items.length){for(var n=[],o=0;o<t.items.length;o++){var a=t.items[o];a=a.getAsEntry?a.getAsEntry():a.webkitGetAsEntry?a.webkitGetAsEntry():a.getAsFile(),a&&n.push(a)}return new Promise(function(t,o){!function o(a){var s=n[a];if(!s||i.maximum>0&&r.length>=i.maximum)return t(i.add(r));i.getEntry(s).then(function(t){r.push.apply(r,e(t)),o(a+1)})}(0)})}if(t.files.length){for(var s=0;s<t.files.length&&(r.push(t.files[s]),!(this.maximum>0&&r.length>=this.maximum));s++);return Promise.resolve(this.add(r))}return Promise.resolve([])},getEntry:function(t){var i=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise(function(n,o){if(t.isFile)t.file(function(e){n([{size:e.size,name:r+e.name,type:e.type,file:e}])});else if(t.isDirectory&&i.dropDirectory){var a=[],s=t.createReader();!function o(){s.readEntries(function(s){!function l(u){return!s[u]&&0===u||i.maximum>0&&a.length>=i.maximum?n(a):s[u]?void i.getEntry(s[u],r+t.name+"/").then(function(t){a.push.apply(a,e(t)),l(u+1)}):o()}(0)})}()}else n([])})},replace:function(e,t){var i=this.get(e),r=this.get(t);if(!i||!r||i===r)return!1;var n=this.files.concat([]),o=n.indexOf(i),a=n.indexOf(r);return-1!==o&&-1!==a&&(n[o]=r,n[a]=i,this.files=n,this.emitInput(),!0)},remove:function(e){var t=this.get(e);if(t){if(this.emitFilter(void 0,t))return!1;var i=this.files.concat([]),r=i.indexOf(t);if(-1===r)return console.error("remove",t),!1;i.splice(r,1),this.files=i,delete this.maps[t.id],this.emitInput(),this.emitFile(void 0,t)}return t},update:function(e,t){var r=this.get(e);if(r){var n=i({},r,t);if(!r.fileObject||!r.active||n.active||n.error||n.success||(n.error="abort"),this.emitFilter(n,r))return!1;var o=this.files.concat([]),a=o.indexOf(r);return-1===a?(console.error("update",r),!1):(o.splice(a,1,n),this.files=o,delete this.maps[r.id],this.maps[n.id]=n,this.emitInput(),this.emitFile(n,r),n)}return!1},emitFilter:function(e,t){var i=!1;return this.$emit("input-filter",e,t,function(){return i=!0}),i},emitFile:function(e,t){this.$emit("input-file",e,t),!(e&&e.fileObject&&e.active)||t&&t.active?e&&e.fileObject&&e.active||!t||!t.fileObject||!t.active||this.uploading--:(this.uploading++,this.$nextTick(function(){var t=this;setTimeout(function(){t.upload(e).then(function(){(e=t.get(e))&&e.fileObject&&t.update(e,{active:!1,success:!e.error})}).catch(function(i){t.update(e,{active:!1,success:!1,error:i.code||i.error||i.message||i})})},parseInt(50*Math.random()+50,10))})),!this.active||Boolean(e)===Boolean(t)&&e.active===t.active||this.watchActive(!0)},emitInput:function(){this.$emit("input",this.files)},upload:function(e){var t=this.get(e);if(!t)return Promise.reject("not_exists");if(!t.fileObject)return Promise.reject("file_object");if(t.error)return Promise.reject(t.error);if(t.success)return Promise.resolve(t);var i=this.extensions;return i&&(i.length||void 0===i.length)&&("object"===(void 0===i?"undefined":r(i))&&i instanceof RegExp||("string"==typeof i&&(i=i.split(",").map(function(e){return e.trim()}).filter(function(e){return e})),i=new RegExp("\\.("+i.join("|").replace(/\./g,"\\.")+")$","i")),-1===t.name.search(i))?Promise.reject("extension"):this.size>0&&t.size>=0&&t.size>this.size?Promise.reject("size"):this.features.html5&&t.putAction?this.uploadPut(t):this.features.html5?this.uploadHtml5(t):this.uploadHtml4(t)},uploadPut:function(e){var t=[],i=void 0;for(var r in e.data)null!==(i=e.data[r])&&void 0!==i&&t.push(encodeURIComponent(r)+"="+encodeURIComponent(i));var n=t.length?(-1===e.putAction.indexOf("?")?"?":"&")+t.join("&"):"",o=new XMLHttpRequest;return o.open("PUT",e.putAction+n),this.uploadXhr(o,e,e.file)},uploadHtml5:function(e){var t=new window.FormData,i=void 0;for(var n in e.data)i=e.data[n],i&&"object"===(void 0===i?"undefined":r(i))&&"function"!=typeof i.toString?i instanceof File?t.append(n,i,i.name):t.append(n,JSON.stringify(i)):null!==i&&void 0!==i&&t.append(n,i);t.append(this.name,e.file,e.file.filename||e.name);var o=new XMLHttpRequest;return o.open("POST",e.postAction),this.uploadXhr(o,e,t)},uploadXhr:function(e,t,i){var r=this,n=t,o=0,a=0;e.upload.onprogress=function(e){if(n=r.get(n),e.lengthComputable&&n&&n.fileObject&&n.active){var t=Math.round(Date.now()/1e3);t!==o&&(o=t,n=r.update(n,{progress:(e.loaded/e.total*100).toFixed(2),speed:e.loaded-a}),a=e.loaded)}};var s=setInterval(function(){if(!(n=r.get(n))||!n.fileObject||n.success||n.error||!n.active){s&&(clearInterval(s),s=!1);try{e.abort(),e.timeout=1}catch(e){}}},100);return new Promise(function(t,o){var a=void 0,l=function(i){if(!a){if(a=!0,s&&(clearInterval(s),s=!1),!(n=r.get(n)))return o("not_exists");if(!n.fileObject)return o("file_object");if(n.error)return o(n.error);if(!n.active)return o("abort");if(n.success)return t(n);var l={};switch(i.type){case"timeout":case"abort":l.error=i.type;break;case"error":e.status?e.status>=500?l.error="server":e.status>=400&&(l.error="denied"):l.error="network";break;default:e.status>=500?l.error="server":e.status>=400?l.error="denied":l.progress="100.00"}if(e.responseText){var u=e.getResponseHeader("Content-Type");u&&-1!==u.indexOf("/json")?l.response=JSON.parse(e.responseText):l.response=e.responseText}return n=r.update(n,l),n.error?o(n.error):t(n)}};e.onload=l,e.onerror=l,e.onabort=l,e.ontimeout=l,n.timeout&&(e.timeout=n.timeout);for(var u in n.headers)e.setRequestHeader(u,n.headers[u]);n=r.update(n,{xhr:e}),e.send(i)})},uploadHtml4:function(e){var t=this,i=e,n=function(e){27===e.keyCode&&e.preventDefault()},o=document.createElement("iframe");o.id="upload-iframe-"+i.id,o.name="upload-iframe-"+i.id,o.src="about:blank",o.setAttribute("style","width:1px;height:1px;top:-999em;position:absolute; margin-top:-999em;");var a=document.createElement("form");a.action=i.postAction,a.name="upload-form-"+i.id,a.setAttribute("method","POST"),a.setAttribute("target","upload-iframe-"+i.id),a.setAttribute("enctype","multipart/form-data");var s=void 0,l=void 0;for(var u in i.data)s=i.data[u],s&&"object"===(void 0===s?"undefined":r(s))&&"function"!=typeof s.toString&&(s=JSON.stringify(s)),null!==s&&void 0!==s&&(l=document.createElement("input"),l.type="hidden",l.name=u,a.appendChild(l));a.appendChild(i.el),document.body.appendChild(o).appendChild(a);var d=function(){var e=void 0;try{o.contentWindow&&(e=o.contentWindow.document)}catch(e){}if(!e)try{e=o.contentDocument?o.contentDocument:o.document}catch(t){e=o.document}return e&&e.body?e.body.innerHTML:null};return new Promise(function(e,r){setTimeout(function(){if(!(i=t.update(i,{iframe:o})))return r("not_exists");var s=setInterval(function(){(i=t.get(i))&&i.fileObject&&!i.success&&!i.error&&i.active||(s&&(clearInterval(s),s=!1),o.onabort({type:i?"abort":"not_exists"}))},100),l=void 0,u=function(o){if(!l){if(l=!0,s&&(clearInterval(s),s=!1),document.body.removeEventListener("keydown",n),!(i=t.get(i)))return r("not_exists");if(!i.fileObject)return r("file_object");if(i.error)return r(i.error);if(!i.active)return r("abort");if(i.success)return e(i);var a=d(),u={};switch(o.type){case"abort":u.error="abort";break;case"error":i.error?u.error=i.error:u.error=null===a?"network":"denied";break;default:i.error?u.error=i.error:null===u?u.error="network":u.progress="100.00"}if(null!==a){if(a&&"{"===a.substr(0,1)&&"}"===a.substr(a.length-1,1))try{a=JSON.parse(a)}catch(e){}u.response=a}return i=t.update(i,u),i.error?r(i.error):e(i)}};o.onload=u,o.onerror=u,o.onabort=u,document.body.addEventListener("keydown",n),a.submit()},50)}).then(function(e){return o.parentNode&&o.parentNode.removeChild(o),e}).catch(function(e){return o.parentNode&&o.parentNode.removeChild(o),e})},watchActive:function(e){for(var t=void 0,i=0;t=this.files[i];)if(i++,t.fileObject)if(e&&!this.destroy){if(this.uploading>=this.thread||this.uploading&&!this.features.html5)break;t.active||t.error||t.success||this.update(t,{active:!0})}else t.active&&this.update(t,{active:!1});else;0===this.uploading&&(this.active=!1)},watchDrop:function(e){var t=e;if(this.features.drop){if(this.dropElement)try{document.removeEventListener("dragenter",this.onDragenter,!1),document.removeEventListener("dragleave",this.onDragleave,!1),this.dropElement.removeEventListener("dragover",this.onDragover,!1),this.dropElement.removeEventListener("drop",this.onDrop,!1)}catch(e){}t?"string"==typeof t?t=document.querySelector(t)||this.$root.$el.querySelector(t):!0===t&&(t=this.$parent.$el):t=!1,this.dropElement=t,this.dropElement&&(document.addEventListener("dragenter",this.onDragenter,!1),document.addEventListener("dragleave",this.onDragleave,!1),this.dropElement.addEventListener("dragover",this.onDragover,!1),this.dropElement.addEventListener("drop",this.onDrop,!1))}},onDragenter:function(e){e.preventDefault(),this.dropActive||(this.dropActive=!0)},onDragleave:function(e){e.preventDefault(),("HTML"===e.target.nodeName||0===e.screenX&&0===e.screenY&&!e.fromElement&&e.offsetX<=0)&&(this.dropActive=!1)},onDragover:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault(),this.dropActive=!1,this.addDataTransfer(e.dataTransfer)}}},o=Object.freeze({default:n});return o&&n||o})},EiZA:function(e,t,i){"use strict";var r=i("w79a"),n=i("sQkU"),o=i("bzuE"),a=i("1Wvq"),s=i.n(a),l=i("TIfe");t.a={components:{FileUpload:s.a},data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:10},queryCondition:{technology_type:""},productTechonologyType:o.a,dialogVisible:!0,form:{},formLabelWidth:"120px",wifiModuleList:[],productTypeList:[],technology_type_key:"",fileList:[],technology_type:"",uploadParams:{technology_type:1,token:i.i(l.a)(),type_id:"",technology_type_key:""}}},mounted:function(){this.getList(),this.getWifiModuleList(),this.getProductType()},methods:{getList:function(){var e=this;this.listLoading=!0;var t={technology_type:1,page:this.listQuery.page,limit:this.listQuery.limit};i.i(r.a)(t).then(function(t){console.log("sdk列表",t),e.list=t.data,e.total=t.total,e.listLoading=!1})},getProductType:function(){var e=this;i.i(n.c)().then(function(t){console.log("产品品类",t),e.productTypeList=t.list})},getWifiModuleList:function(){var e=this;i.i(r.b)().then(function(t){console.log("WIFI模组/芯片列表",t),e.wifiModuleList=t.list})},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleClose:function(e){e()},uploadSDK:function(){console.log("文件",this.fileList),this.$refs.upload.submit()},uploadSuccess:function(e,t,i){console.log("成功回调",e,t,i)},uploadError:function(e,t,i){console.log("失败回调",e,t,i)}}}},"L/h4":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新建")]),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":"",data:e.list}},[i("el-table-column",{attrs:{prop:"type_name",label:"品类",width:"80"}}),e._v(" "),i("el-table-column",{attrs:{prop:"technology_module_vendor",label:"模组/芯片厂家"}}),e._v(" "),i("el-table-column",{attrs:{prop:"technology_module_model",label:"型号",width:"180"}}),e._v(" "),i("el-table-column",{attrs:{prop:"filename",label:"文件名",width:"200"}}),e._v(" "),i("el-table-column",{attrs:{prop:"size",label:"SDK大小"}}),e._v(" "),i("el-table-column",{attrs:{prop:"created_at_txt",label:"上传时间"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"small",type:"success"},on:{click:function(i){e.modifySDK(t.row)}}},[e._v("\n            修改\n          ")])]}}])})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[i("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.listQuery.page=t}}})],1),e._v(" "),i("el-dialog",{attrs:{title:"上传SDK文件",visible:e.dialogVisible,size:"small","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-form",{attrs:{model:e.form,"label-position":"right"}},[i("el-form-item",{attrs:{label:"品类",prop:"type_id","label-width":e.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.uploadParams.type_id,callback:function(t){e.uploadParams.type_id=t},expression:"uploadParams.type_id"}},e._l(e.productTypeList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"模组/芯片厂家","label-width":e.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.uploadParams.technology_type_key,callback:function(t){e.uploadParams.technology_type_key=t},expression:"uploadParams.technology_type_key"}},e._l(e.wifiModuleList,function(t){return i("el-option-group",{key:t.vendor,attrs:{label:t.vendor}},e._l(t.modellist,function(e){return i("el-option",{key:e.module_id,attrs:{label:e.model,value:e.module_id}})}))}))],1),e._v(" "),i("el-form-item",{attrs:{label:"SDK文件","label-width":e.formLabelWidth}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/api/index.php/admin/sdk_upload",multiple:!1,accept:".zip",data:e.uploadParams,"file-list":e.fileList,"auto-upload":!1,"on-error":e.uploadError,"on-success":e.uploadSuccess,limit:1}},[i("el-button",{attrs:{size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),i("div",{staticClass:"el-upload__tip",slot:"tip"},[e._v("只能上传zip文件，且不超过5M")])],1)],1)],1),e._v(" "),i("span",{staticClass:"dialog-footer",slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.uploadSDK}},[e._v("确 定")])],1)],1)],1)},n=[],o={render:r,staticRenderFns:n};t.a=o},bzuE:function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return n});var r=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],n=[{id:1,action_type:1,unapproved_reason:"营业执照/组织结构代码证/税务登记证复印件，加盖公章未审核通过",description:"营业执照/组织结构代码证/税务登记证复印件，加盖公章"},{id:2,action_type:1,unapproved_reason:"法定代表人身份证复印件，加盖公章未审核通过",description:"法定代表人身份证复印件，加盖公章"},{id:3,action_type:1,unapproved_reason:"公司出具的法人代表身份证明书，加盖公章未审核通过",description:"公司出具的法人代表身份证明书，加盖公章"},{id:4,action_type:1,unapproved_reason:"品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录未审核通过",description:"品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录"},{id:5,action_type:1,unapproved_reason:"ISO9001复印件未审核通过",description:"ISO9001复印件"},{id:6,action_type:1,unapproved_reason:"国家高新技术企业复印件未审核通过",description:"国家高新技术企业复印件"},{id:7,action_type:1,unapproved_reason:"其他资质证书未审核通过",description:"其他资质证书"}]},f2ep:function(e,t,i){t=e.exports=i("FZ+f")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"wifiSdkUpload.vue",sourceRoot:""}])},ryJJ:function(e,t,i){"use strict";function r(e){i("ttT5")}Object.defineProperty(t,"__esModule",{value:!0});var n=i("EiZA"),o=i("L/h4"),a=i("VU/8"),s=r,l=a(n.a,o.a,s,null,null);t.default=l.exports},sQkU:function(e,t,i){"use strict";function r(e){return i.i(s.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})}function n(){return i.i(s.a)({url:"/product/type_lists",method:"post",data:{}})}function o(e){return i.i(s.a)({url:"/admin/review_info",method:"post",data:e})}function a(e){return i.i(s.a)({url:"/admin/review_approve",method:"post",data:e})}t.b=r,t.c=n,t.a=o,t.d=a;var s=i("Vo7i")},ttT5:function(e,t,i){var r=i("f2ep");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);i("rjj0")("5c84ea45",r,!0)},w79a:function(e,t,i){"use strict";function r(e){return i.i(a.a)({url:"/admin/sdklists?page="+e.page,method:"post",data:e})}function n(){return i.i(a.a)({url:"/wifimodule/lists",method:"post",data:{}})}function o(e){return i.i(a.a)({url:"/admin/productdoc_lists?page="+e.page,method:"post",data:e})}t.a=r,t.b=n,t.c=o;var a=i("Vo7i")}});
//# sourceMappingURL=10.6dde4ca9779e4d0c3e07.js.map