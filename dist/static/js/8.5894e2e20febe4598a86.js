webpackJsonp([8,21],{"0xDb":function(e,t,n){"use strict";n.d(t,"a",function(){return i}),t.b=r;var t=n("hRKE"),a=n.n(t),i=(n("bzuE"),function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd HH:mm:ss";if(!e)return"";"string"==typeof e&&(e=e.replace(/-/g,"/"));var n,i={"M+":(e=new Date(e)).getMonth()+1,"d+":e.getDate(),"h+":e.getHours()%12==0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(1<RegExp.$1.length?2<RegExp.$1.length?"/u661f/u671f":"/u5468":"")+{0:"/u65e5",1:"/u4e00",2:"/u4e8c",3:"/u4e09",4:"/u56db",5:"/u4e94",6:"/u516d"}[e.getDay()+""])),i)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?i[n]:("00"+i[n]).substr((""+i[n]).length)));return t});function r(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",t=void 0,i={y:(t="object"===(void 0===e?"undefined":a()(e))?e:(10===(""+e).length&&(e=1e3*parseInt(e)),new Date(e))).getFullYear(),m:t.getMonth()+1,d:t.getDate(),h:t.getHours(),i:t.getMinutes(),s:t.getSeconds(),a:t.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=i[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(n=0<e.length&&n<10?"0"+n:n)||0})}},"2ZiF":function(e,t,n){"use strict";var u=n("1tfL"),i=n("uSC2"),p=n("PGvq"),A=n("V88E"),x=n("pBi0"),m=n("qaXV"),b=n("bJ/5"),v=n("/tnA");i(i.S+i.F*!n("3Bg5")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,i,a,r=p(e),o="function"==typeof this?this:Array,s=arguments.length,l=1<s?arguments[1]:void 0,c=void 0!==l,d=0,e=v(r);if(c&&(l=u(l,2<s?arguments[2]:void 0,2)),null==e||o==Array&&x(e))for(n=new o(t=m(r.length));d<t;d++)b(n,d,c?l(r[d],d):r[d]);else for(a=e.call(r),n=new o;!(i=a.next()).done;d++)b(n,d,c?A(a,l,[i.value,d],!0):i.value);return n.length=d,n}})},"4/mA":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("3cXf"),a=n.n(i),r=n("IHPB"),o=n.n(r),i=n("aA9S"),s=n.n(i),l=n("UyAJ"),r={name:"Edite",props:{dialogVisible:{type:Boolean,default:!0},title:{type:String,default:"新增模板"},templateObj:{type:Object,default:function(){return{}}}},data:function(){return{localObj:{},itemList:[{isClick:0,isSave:0,key:1,xIndex:1,yIndex:1,color:""},{isClick:0,isSave:0,key:2,xIndex:2,yIndex:1,color:""},{isClick:0,isSave:0,key:3,xIndex:3,yIndex:1,color:""},{isClick:0,isSave:0,key:4,xIndex:4,yIndex:1,color:""},{isClick:0,isSave:0,key:5,xIndex:1,yIndex:2,color:""},{isClick:0,isSave:0,key:6,xIndex:2,yIndex:2,color:""},{isClick:0,isSave:0,key:7,xIndex:3,yIndex:2,color:""},{isClick:0,isSave:0,key:8,xIndex:4,yIndex:2,color:""},{isClick:0,isSave:0,key:9,xIndex:1,yIndex:3,color:""},{isClick:0,isSave:0,key:10,xIndex:2,yIndex:3,color:""},{isClick:0,isSave:0,key:11,xIndex:3,yIndex:3,color:""},{isClick:0,isSave:0,key:12,xIndex:4,yIndex:3,color:""},{isClick:0,isSave:0,key:13,xIndex:1,yIndex:4,color:""},{isClick:0,isSave:0,key:14,xIndex:2,yIndex:4,color:""},{isClick:0,isSave:0,key:15,xIndex:3,yIndex:4,color:""},{isClick:0,isSave:0,key:16,xIndex:4,yIndex:4,color:""}],ScreenArray:[],ItemArray:[],form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"90px"}},watch:{templateObj:{handler:function(e){var i=this;e.template&&(this.localObj=s()({},e),e=JSON.parse(e.template),this.ScreenArray=e,"查看模板"===this.title?(this.itemList.forEach(function(e){e.isSave=1}),e.forEach(function(e,n){e[1].forEach(function(t){i.itemList.find(function(e){return e.key===t}).color=i.color(n+1)})})):"编辑模板"===this.title&&(this.itemList.forEach(function(e){e.isSave=1}),e.forEach(function(e,n){e[1].forEach(function(t){i.itemList.find(function(e){return e.key===t}).color=i.color(n+1)})})))},immediate:!0}},methods:{color:function(e){var t="#3a8ee6";return 1===e?t="#668B8B":2===e?t="#FFDAB9":3===e?t="#23e01e":4===e?t="#b45342":5===e?t="#e2ce66":6===e?t="#808cde":7===e?t="#dc3dbb":8===e?t="#084e21":9===e?t="#ece5ab":10===e&&(t="#a07397"),t},save:function(){var e,t,n,i;this.ItemArray.sort(function(e,t){return e.key-t.key}),0!==this.ItemArray.length&&(n=this.ItemArray.map(function(e){return e.key}).slice(0),e=this.ItemArray.map(function(e){return e.xIndex}),t=this.ItemArray.map(function(e){return e.yIndex}),e=Math.max.apply(Math,o()(e))-Math.min.apply(Math,o()(e))+1,t=Math.max.apply(Math,o()(t))-Math.min.apply(Math,o()(t))+1,n.length===t*e?(this.ScreenArray.push([[e,t],n]),n=this.ScreenArray.length,i=this.color(n),this.ItemArray.forEach(function(e){e.isSave=1,e.color=i}),this.ItemArray=[]):this.$message.error("选择的方块不能组成矩形"))},itemCick:function(e){e.isSave||(e.isClick=0===e.isClick?1:0,e.isClick?this.ItemArray.push(e):(e=this.ItemArray.indexOf(e),this.ItemArray.splice(e,1)))},submit:function(){var e,t,n=this;this.localObj.name?this.itemList.every(function(e){return 1===e.isSave})?(e=1,"修改模板"===this.title&&(e=2),this.ScreenArray.sort(function(e,t){return e[1][0]-t[1][0]}),t=a()(this.ScreenArray),t={operator:e,id:this.localObj.id,template:t,name:this.localObj.name},Object(l.d)(t).then(function(e){n.$message.success("保存成功"),n.$emit("update:dialogVisible",!1),n.$emit("refresh")})):this.$message.error("置屏幕不完整，请分配完所有的格子"):this.$message.error("请输入模版名称")},reset:function(){this.ScreenArray=[],this.ItemArray=[],this.itemList=[{isClick:0,isSave:0,key:1,xIndex:1,yIndex:1,color:""},{isClick:0,isSave:0,key:2,xIndex:2,yIndex:1,color:""},{isClick:0,isSave:0,key:3,xIndex:3,yIndex:1,color:""},{isClick:0,isSave:0,key:4,xIndex:4,yIndex:1,color:""},{isClick:0,isSave:0,key:5,xIndex:1,yIndex:2,color:""},{isClick:0,isSave:0,key:6,xIndex:2,yIndex:2,color:""},{isClick:0,isSave:0,key:7,xIndex:3,yIndex:2,color:""},{isClick:0,isSave:0,key:8,xIndex:4,yIndex:2,color:""},{isClick:0,isSave:0,key:9,xIndex:1,yIndex:3,color:""},{isClick:0,isSave:0,key:10,xIndex:2,yIndex:3,color:""},{isClick:0,isSave:0,key:11,xIndex:3,yIndex:3,color:""},{isClick:0,isSave:0,key:12,xIndex:4,yIndex:3,color:""},{isClick:0,isSave:0,key:13,xIndex:1,yIndex:4,color:""},{isClick:0,isSave:0,key:14,xIndex:2,yIndex:4,color:""},{isClick:0,isSave:0,key:15,xIndex:3,yIndex:4,color:""},{isClick:0,isSave:0,key:16,xIndex:4,yIndex:4,color:""}]},close:function(){this.$emit("update:dialogVisible",!1)}}},i={render:function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("el-dialog",{attrs:{visible:n.dialogVisible,title:n.title,center:"",width:"70%"},on:{close:n.close}},[i("div",{staticClass:"title"},[i("span",[n._v("屏幕配置名称：")]),n._v(" "),i("el-input",{attrs:{disabled:"查看模板"===n.title,autocomplete:"off"},model:{value:n.localObj.name,callback:function(e){n.$set(n.localObj,"name",e)},expression:"localObj.name"}})],1),n._v(" "),i("div",{staticClass:"full-screen"},n._l(n.itemList,function(t,e){return i("div",{key:e,staticClass:"screen-item",class:{click:t.isClick,isSave:t.isSave},style:{backgroundColor:t.color},on:{click:function(e){return n.itemCick(t)}}},[n._v(n._s(e+1)+"\n    ")])}),0),n._v(" "),"查看模板"!==n.title?i("div",{staticClass:"button-contaier"},[i("button",{staticClass:"save-btn",on:{click:n.save}},[n._v("保存当前选中\n    ")]),n._v(" "),i("button",{staticClass:"save-btn",on:{click:n.reset}},[n._v("重置\n    ")])]):n._e(),n._v(" "),"查看模板"!==n.title?i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:n.close}},[n._v("取 消")]),n._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:n.submit}},[n._v("提 交\n    ")])],1):n._e()])},staticRenderFns:[]};i=n("C7Lr")(r,i,!1,function(e){n("FAxV")},"data-v-30adb3ea",null),t.default=i.exports},"7nxD":function(e,t,n){(e.exports=n("BkJT")(!0)).push([e.i,".screen-container[data-v-142711bc]{margin:0 20px}.sort_box[data-v-142711bc]{display:inline-block;margin-left:30px}.el-button[data-v-142711bc]{margin-bottom:10px}.el-input[data-v-142711bc]{width:110px}","",{version:3,sources:["F:/A-PRODUCT/PomeloHomeOpen_Sys/src/views/ScreenManageMent/Index.vue"],names:[],mappings:"AACA,mCACE,aAAiB,CAClB,AACD,2BACE,qBAAsB,AACtB,gBAAkB,CACnB,AACD,4BACE,kBAAoB,CACrB,AACD,2BACI,WAAa,CAChB",file:"Index.vue",sourcesContent:["\n.screen-container[data-v-142711bc]{\r\n  margin: 0px 20px;\n}\n.sort_box[data-v-142711bc]{\r\n  display: inline-block;\r\n  margin-left: 30px;\n}\n.el-button[data-v-142711bc]{\r\n  margin-bottom: 10px;\n}\n.el-input[data-v-142711bc]{\r\n    width: 110px;\n}\r\n"],sourceRoot:""}])},FAxV:function(e,t,n){var i=n("UYmG");(i="string"==typeof i?[[e.i,i,""]]:i).locals&&(e.exports=i.locals);n("8bSs")("5725da2c",i,!0)},IHPB:function(e,t,n){"use strict";t.__esModule=!0;var i,a=n("kfHR"),r=(i=a)&&i.__esModule?i:{default:i};t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,r.default)(e)}},KYMQ:function(e,t,n){n("g5OY"),n("2ZiF"),e.exports=n("DH3n").Array.from},MgS8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("UyAJ"),a=n("0xDb"),r={name:"Index",components:{Edite:n("4/mA").default},data:function(){return{templateObj:{},title:"新增模板",dialogFormVisible:!1,tableData:[]}},mounted:function(){this.getDataList()},methods:{handleMove:function(e){var t=this,n=parseInt(e.newSort);!n||n<1?this.$message.error("请输入正整数"):(e={id:e.id,name:e.name,sort:n,template:e.template,operator:2},Object(i.d)(e).then(function(e){t.getDataList()}))},getDataList:function(){var t=this;Object(i.c)({page:1,size:10}).then(function(e){t.tableData=e.data})},timeFomatter:function(e,t,n,i){return Object(a.a)(1e3*n,"yyyy-MM-dd HH:mm:ss")},widthFormatter:function(e,t,n,i){e=JSON.parse(e.template)[0],e=e&&e[0];return e&&e[0]},heightFormatter:function(e,t,n,i){e=JSON.parse(e.template)[0],e=e&&e[0];return e&&e[1]},handleEdite:function(e){this.title="编辑模板",this.templateObj=e,this.dialogFormVisible=!0},addNew:function(){this.title="新增模板",this.dialogFormVisible=!0,this.templateObj={}},handleCheck:function(e){this.title="查看模板",this.templateObj=e,this.dialogFormVisible=!0},handleDelete:function(e){var t=this,e={id:e.id,name:e.name,operator:3};Object(i.d)(e).then(function(e){t.$message.success("删除成功"),t.getDataList()})}}},o={render:function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"screen-container"},[i("h4",[n._v("屏幕配置列表")]),n._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:n.addNew}},[n._v("新增配置")]),n._v(" "),i("el-table",{staticStyle:{width:"1100px"},attrs:{data:n.tableData,border:""}},[i("el-table-column",{attrs:{fixed:"",prop:"name",label:"大小名称",width:"250"}}),n._v(" "),i("el-table-column",{attrs:{formatter:n.timeFomatter,prop:"create_time",label:"创建时间",width:""}}),n._v(" "),i("el-table-column",{attrs:{formatter:n.timeFomatter,prop:"update_time",label:"更新时间",width:""}}),n._v(" "),i("el-table-column",{attrs:{prop:"sort",label:"排序",width:"100"}}),n._v(" "),i("el-table-column",{attrs:{label:"操作",width:"350"},scopedSlots:n._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return n.handleCheck(t.row)}}},[n._v("查看")]),n._v(" "),i("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return n.handleDelete(t.row)}}},[n._v("删除")]),n._v(" "),i("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return n.handleEdite(t.row)}}},[n._v("编辑")]),n._v(" "),i("div",{staticClass:"sort_box"},[i("el-input",{attrs:{size:"mini",placeholder:"请输入排序号"},model:{value:t.row.newSort,callback:function(e){n.$set(t.row,"newSort",e)},expression:"scope.row.newSort"}}),n._v(" "),i("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(e){return n.handleMove(t.row)}}},[n._v("排序")])],1)]}}])})],1),n._v(" "),n.dialogFormVisible?i("edite",{attrs:{"template-obj":n.templateObj,title:n.title,"dialog-visible":n.dialogFormVisible},on:{"update:dialogVisible":function(e){n.dialogFormVisible=e},"update:dialog-visible":function(e){n.dialogFormVisible=e},refresh:n.getDataList}}):n._e()],1)},staticRenderFns:[]};o=n("C7Lr")(r,o,!1,function(e){n("Zpdf")},"data-v-142711bc",null),t.default=o.exports},UYmG:function(e,t,n){(e.exports=n("BkJT")(!0)).push([e.i,".el-input[data-v-30adb3ea]{width:300px}.full-screen[data-v-30adb3ea]{width:410px;height:410px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:10px auto}.title[data-v-30adb3ea]{width:50%;margin:15px auto}.el-button[data-v-30adb3ea]{margin-right:15px;font-size:16px}.screen-item[data-v-30adb3ea]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100px;height:100px;text-align:center;line-height:100px;border:1px solid #add8e6}.button-contaier[data-v-30adb3ea]{width:250px;margin:10px auto}.click[data-v-30adb3ea]{background:#cbcbcb}.isSave[data-v-30adb3ea]{background:gray}.save-btn[data-v-30adb3ea]{margin:20px}","",{version:3,sources:["F:/A-PRODUCT/PomeloHomeOpen_Sys/src/views/ScreenManageMent/edite.vue"],names:[],mappings:"AACA,2BACG,WAAa,CACf,AACD,8BACG,YAAa,AACb,aAAc,AACd,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AAC/B,6BAA8B,AAC1B,uBAAwB,AACpB,mBAAoB,AAC5B,mBAAoB,AAChB,eAAgB,AACpB,gBAAkB,CACpB,AACD,wBACG,UAAW,AACX,gBAAkB,CACpB,AACD,4BACG,kBAAmB,AACnB,cAAgB,CAClB,AACD,8BACG,yBAAyB,AACtB,sBAAsB,AACrB,qBAAqB,AACjB,iBAAiB,AACzB,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,kBAAmB,AACnB,wBAA4B,CAC9B,AACD,kCACE,YAAa,AACb,gBAAkB,CACnB,AACD,wBACG,kBAAoB,CACtB,AACD,yBACG,eAAiB,CACnB,AACD,2BACG,WAAa,CACf",file:"edite.vue",sourcesContent:["\n.el-input[data-v-30adb3ea]{\n   width: 300px;\n}\n.full-screen[data-v-30adb3ea] {\n   width: 410px;\n   height: 410px;\n   display: -webkit-box;\n   display: -ms-flexbox;\n   display: flex;\n   -webkit-box-orient: horizontal;\n   -webkit-box-direction: normal;\n       -ms-flex-direction: row;\n           flex-direction: row;\n   -ms-flex-wrap: wrap;\n       flex-wrap: wrap;\n   margin: 10px auto;\n}\n.title[data-v-30adb3ea]{\n   width:50% ;\n   margin: 15px auto;\n}\n.el-button[data-v-30adb3ea]{\n   margin-right: 15px;\n   font-size: 16px;\n}\n.screen-item[data-v-30adb3ea] {\n   -webkit-user-select:none;\n      -moz-user-select:none;\n       -ms-user-select:none;\n           user-select:none;\n   width: 100px;\n   height: 100px;\n   text-align: center;\n   line-height: 100px;\n   border: 1px solid lightblue;\n}\n.button-contaier[data-v-30adb3ea]{\n  width: 250px;\n  margin: 10px auto;\n}\n.click[data-v-30adb3ea] {\n   background: #cbcbcb;\n}\n.isSave[data-v-30adb3ea] {\n   background: gray;\n}\n.save-btn[data-v-30adb3ea] {\n   margin: 20px;\n}\n"],sourceRoot:""}])},UyAJ:function(e,t,n){"use strict";t.c=function(e){return Object(i.a)({url:"/api/ext/devcard/template",method:"get",data:e})},t.d=function(e){return Object(i.a)({url:"/api/ext/devcard/template",method:"post",data:e})},t.b=function(){return Object(i.a)({url:"/api/ext/devcard/size",method:"get"})},t.a=function(e){return Object(i.a)({url:"/api/ext/devcard/size",method:"post",data:e})};var i=n("Vo7i")},Zpdf:function(e,t,n){var i=n("7nxD");(i="string"==typeof i?[[e.i,i,""]]:i).locals&&(e.exports=i.locals);n("8bSs")("ac0bf8e2",i,!0)},"bJ/5":function(e,t,n){"use strict";var i=n("FIRb"),a=n("ZwTi");e.exports=function(e,t,n){t in e?i.f(e,t,a(0,n)):e[t]=n}},bzuE:function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var i=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],a=[{id:1,type:2,action_type:0,unapproved_reason:"",description:"营业执照复印件，加盖公章"},{id:2,type:9,action_type:0,unapproved_reason:"",description:"品牌中英文&商标资格证，回执加盖公章"},{id:3,type:4,action_type:0,unapproved_reason:"",description:"法定代表人身份证复印件，加盖公章"},{id:4,type:5,action_type:0,unapproved_reason:"",description:"公司出具的法人代表身份证明书，加盖公章"},{id:5,action_type:0,unapproved_reason:"",description:"商标未注册完成的上传商标注册记录"},{id:6,type:6,action_type:0,unapproved_reason:"",description:"ISO9001复印件"},{id:7,type:7,action_type:0,unapproved_reason:"",description:"国家高新技术企业复印件"},{id:8,type:8,action_type:0,unapproved_reason:"",description:"其他资质证书"}],r={checkType:[{DICT_VALUE:1,DICT_DESC:"企业审核"},{DICT_VALUE:3,DICT_DESC:"产品创建审核"},{DICT_VALUE:4,DICT_DESC:"产品上线审核"}],checkStatus:[{DICT_VALUE:1,DICT_DESC:"审批中"},{DICT_VALUE:2,DICT_DESC:"审批通过"},{DICT_VALUE:3,DICT_DESC:"审批不通过"},{DICT_VALUE:4,DICT_DESC:"已审批"}]},o="星络科技"},kfHR:function(e,t,n){e.exports={default:n("KYMQ"),__esModule:!0}}});