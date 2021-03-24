webpackJsonp([76],{"14/0":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("woOf"),n=i.n(s),a=i("Vo7i"),l={data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:15},formVisible:!1,isEdit:!1,typeList:[],formItem:{cid:"",event_name:"",push_rights:"",push_time:[],push_type:"",des:""}}},computed:{dialogTitle:function(){return this.isEdit?"edit event msg":"add event msg"}},created:function(){},mounted:function(){this.refresh()},methods:{refresh:function(){this.getList(),this.getTypeList()},getTypeList:function(){var e=this;Object(a.a)({url:"product/parenttype_lists",method:"POST"}).then(function(t){e.typeList=t.list})},getList:function(){var e=this;this.listLoading=!0;var t={limit:this.listQuery.limit,page:this.listQuery.page};Object(a.a)({url:"event/lists",data:t}).then(function(t){e.list=t.data,e.total=t.total_page,e.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},addEventMsg:function(){this.isEdit=!1,this.formVisible=!0,this.formItem={push_time:[[]]}},editEventMsg:function(t){this.isEdit=!0,this.formVisible=!0,this.formItem=n()({},t,{push_time:this.setFormatTime(JSON.parse(t.push_time))})},setFormatTime:function(t){return t.map(function(t){return t.map(function(t){return 0<(t+="").indexOf(":")?t:(10<t?t:"0"+t)+":00"})})},getFormatTime:function(t){return t.map(function(t){return t.map(function(t){return 0<t.indexOf(":")?parseInt(t.split(":")[0]):t})})},onSubmit:function(){var e=this,t=n()({},this.formItem,{push_time:this.getFormatTime(this.formItem.push_time),created_at:void 0,updated_at:void 0});Object(a.a)({url:this.isEdit?"event/edit":"event/add",method:"post",data:t}).then(function(t){e.$message.success("操作成功！"),e.formVisible=!1,e.getList()})},deleteRow:function(t){this.formItem.push_time.splice(t,1)},addRow:function(){this.formItem.push_time.push([])},getTypeTextById:function(e){var t=this.typeList.filter(function(t){return t.id===e});return t.length?t[0].name:e},getPushRightsText:function(t){return{0:"全员",1:"户主"}[t]},getTimeSelectOption:function(){return{start:"00:00",end:"23:00",step:"01:00"}}}},o={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"app-container calendar-list-container"},[s("el-row",{staticStyle:{"margin-bottom":"10px"}},[s("el-button",{attrs:{size:"medium",type:"primary"},on:{click:i.addEventMsg}},[i._v("\n      新增事件\n    ")])],1),i._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:i.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:i.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[s("el-table-column",{attrs:{align:"center",label:"事件名称",prop:"event_name"}}),i._v(" "),s("el-table-column",{attrs:{align:"center",label:"品类"},scopedSlots:i._u([{key:"default",fn:function(t){return[i._v(i._s(i.getTypeTextById(t.row.cid)))]}}])}),i._v(" "),s("el-table-column",{attrs:{align:"center",label:"push_rights"},scopedSlots:i._u([{key:"default",fn:function(t){return[i._v(i._s(i.getPushRightsText(t.row.push_rights)))]}}])}),i._v(" "),s("el-table-column",{attrs:{align:"center",label:"push_time",prop:"push_time"}}),i._v(" "),s("el-table-column",{attrs:{align:"center",label:"push_type",prop:"push_type"}}),i._v(" "),s("el-table-column",{attrs:{align:"center",label:"des",prop:"des"}}),i._v(" "),s("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:i._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){i.editEventMsg(e.row,!0)}}},[i._v("\n          编辑\n        ")])]}}])})],1),i._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!i.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[s("el-pagination",{attrs:{"current-page":i.listQuery.page,"page-sizes":[15,20,30,50],"page-size":i.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:i.total},on:{"size-change":i.handleSizeChange,"current-change":i.handleCurrentChange,"update:currentPage":function(t){i.$set(i.listQuery,"page",t)}}})],1),i._v(" "),s("el-dialog",{attrs:{visible:i.formVisible,title:i.dialogTitle},on:{"update:visible":function(t){i.formVisible=t}}},[s("el-form",{attrs:{"label-width":"120px"}},[s("el-form-item",{attrs:{label:"品类"}},[s("el-select",{attrs:{disabled:i.isEdit},model:{value:i.formItem.cid,callback:function(t){i.$set(i.formItem,"cid",t)},expression:"formItem.cid"}},i._l(i.typeList,function(t){return s("el-option",{key:t.id,attrs:{value:t.id,label:t.name}})}))],1),i._v(" "),s("el-form-item",{attrs:{label:"事件名称"}},[s("el-input",{attrs:{disabled:i.isEdit},model:{value:i.formItem.event_name,callback:function(t){i.$set(i.formItem,"event_name",t)},expression:"formItem.event_name"}})],1),i._v(" "),s("el-form-item",{attrs:{label:"push_rights"}},[s("el-select",{model:{value:i.formItem.push_rights,callback:function(t){i.$set(i.formItem,"push_rights",t)},expression:"formItem.push_rights"}},[s("el-option",{attrs:{label:"全员",value:0}}),i._v(" "),s("el-option",{attrs:{label:"户主",value:1}})],1)],1),i._v(" "),s("el-form-item",{attrs:{label:"push_time"}},[i._l(i.formItem.push_time,function(t,e){return s("div",{key:e,staticClass:"push_time_item"},[s("el-time-select",{staticClass:"hour",attrs:{clearable:!1,"picker-options":i.getTimeSelectOption(e,0)},model:{value:i.formItem.push_time[e][0],callback:function(t){i.$set(i.formItem.push_time[e],0,t)},expression:"formItem.push_time[index][0]"}}),i._v(" -\n          "),s("el-time-select",{staticClass:"hour",attrs:{clearable:!1,"picker-options":i.getTimeSelectOption(e,1)},model:{value:i.formItem.push_time[e][1],callback:function(t){i.$set(i.formItem.push_time[e],1,t)},expression:"formItem.push_time[index][1]"}}),i._v(" "),1<i.formItem.push_time.length?s("i",{staticClass:"el-icon-remove",on:{click:function(t){i.deleteRow(e)}}}):i._e()],1)}),i._v(" "),s("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus",size:"mini"},on:{click:i.addRow}},[i._v("新增一行")])],2),i._v(" "),s("el-form-item",{attrs:{label:"push_type"}},[s("el-input",{model:{value:i.formItem.push_type,callback:function(t){i.$set(i.formItem,"push_type",t)},expression:"formItem.push_type"}})],1),i._v(" "),s("el-form-item",{attrs:{label:"des"}},[s("el-input",{attrs:{type:"textarea",rows:"2"},model:{value:i.formItem.des,callback:function(t){i.$set(i.formItem,"des",t)},expression:"formItem.des"}}),i._v(" "),s("span",[i._v("支持标签：${family_name},${room_name},${device_name}")])],1)],1),i._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:i.onSubmit}},[i._v("提交")]),i._v(" "),s("el-button",{on:{click:function(t){i.formVisible=!1}}},[i._v("取消")])],1)],1)],1)},staticRenderFns:[]};var r=i("VU/8")(l,o,!1,function(t){i("y5q7")},"data-v-6a7455ee",null);e.default=r.exports},KZgb:function(t,e,i){(t.exports=i("FZ+f")(!0)).push([t.i,".push_time_item[data-v-6a7455ee]{margin-bottom:5px}.hour[data-v-6a7455ee]{width:100px}","",{version:3,sources:["D:/workspace/PomeloHomeOpen_Sys/src/views/configManagement/eventMsg.vue"],names:[],mappings:"AACA,iCACE,iBAAmB,CACpB,AACD,uBACE,WAAa,CACd",file:"eventMsg.vue",sourcesContent:["\n.push_time_item[data-v-6a7455ee] {\r\n  margin-bottom: 5px;\n}\n.hour[data-v-6a7455ee] {\r\n  width: 100px;\n}\r\n"],sourceRoot:""}])},y5q7:function(t,e,i){var s=i("KZgb");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("fc4888e4",s,!0)}});