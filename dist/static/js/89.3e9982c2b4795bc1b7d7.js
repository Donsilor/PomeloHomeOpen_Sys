webpackJsonp([89],{"2fa7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("aA9S"),r=i.n(a),n=i("Vo7i"),l={data:function(){return{list:null,total:null,listLoading:!1,listQuery:{page:1,limit:15},formVisible:!1,isEdit:!1,typeList:[],manufacturerList:[],productList:[],formItem:{},brand_id:"",type_id:""}},computed:{dialogTitle:function(){return this.isEdit?"edit fault":"add fault"}},created:function(){},mounted:function(){this.refresh()},methods:{refresh:function(){this.getList(),this.getTypeList(),this.getManufacturerList()},getManufacturerList:function(){var e=this;Object(n.a)({url:"brand/select",method:"POST",data:{is_online:1}}).then(function(t){e.manufacturerList=t})},getTypeList:function(){var e=this;Object(n.a)({url:"product/parenttype_lists",method:"POST"}).then(function(t){e.typeList=t.list})},onBrandChange:function(t){this.brand_id=this.getBrandId(),this.formItem.product_id="",this.getProductList()},onTypeChange:function(t){this.type_id=t,this.formItem.product_id="",this.getProductList()},getBrandId:function(){var e=this,t=this.manufacturerList.filter(function(t){return t.manufacturer_name===e.formItem.manufacturer});return t.length?t[0].brand_id:""},getProductList:function(){var e=this;Object(n.a)({url:"admin/product_lists",method:"POST",data:{limit:999,parent_type_id:this.type_id||void 0,brand_id:this.brand_id||void 0,search_type:1,page:1}}).then(function(t){e.productList=t.data})},getList:function(){var e=this;this.listLoading=!0;var t={limit:this.listQuery.limit,page:this.listQuery.page};Object(n.a)({url:"device/fault/lists",data:t}).then(function(t){e.list=t.data,e.total=t.total_page,e.listLoading=!1})},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},addFault:function(){this.isEdit=!1,this.formVisible=!0,this.formItem={push_time:[[]],product_id:""},this.brand_id="",this.type_id="",this.productList=[]},editFault:function(t,e){this.isEdit=!0,this.formVisible=!0,this.formItem=r()({},t,{push_time:this.setFormatTime(JSON.parse(t.push_time))}),t.manufacturer&&(this.brand_id=this.getBrandId()),t.cid&&(this.type_id=t.cid),this.getProductList()},deleteFault:function(e){var i=this;this.$confirm("删除后将不能恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.a)({url:"device/fault/del",method:"POST",data:{id:e.id}}).then(function(t){e.is_valid=0,i.$message({type:"success",message:"删除成功!"})})}).catch(function(){i.$message({type:"info",message:"已取消删除"})})},deleteRow:function(t){this.formItem.push_time.splice(t,1)},addRow:function(){this.formItem.push_time.push([])},setFormatTime:function(t){return t.map(function(t){return t.map(function(t){return 0<(t+="").indexOf(":")?t:(10<t?t:"0"+t)+":00"})})},getFormatTime:function(t){return t.map(function(t){return t.map(function(t){return 0<t.indexOf(":")?parseInt(t.split(":")[0]):t})})},onSubmit:function(){var e=this,t=r()({},this.formItem,{push_time:this.getFormatTime(this.formItem.push_time),created_at:void 0,updated_at:void 0,is_valid:void 0});Object(n.a)({url:this.isEdit?"device/fault/edit":"device/fault/add",method:"post",data:t}).then(function(t){e.$message.success("操作成功！"),e.formVisible=!1,e.getList()})},getTypeTextById:function(e){var t=this.typeList.filter(function(t){return t.id===e});return t.length?t[0].name:e},getPushRightsText:function(t){return{0:"全员",1:"户主"}[t]},getTimeSelectOption:function(){return{start:"00:00",end:"23:00",step:"01:00"}}}},a={render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("el-row",{staticStyle:{"margin-bottom":"10px"}},[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:i.addFault}},[i._v("\n            新增方案\n        ")])],1),i._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:i.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:i.list,"element-loading-text":"给我一点时间",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"manufacturer",prop:"manufacturer"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"品类"},scopedSlots:i._u([{key:"default",fn:function(t){return[i._v(i._s(i.getTypeTextById(t.row.cid)))]}}])}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"pid",prop:"product_id"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"code",prop:"code"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"status",prop:"status"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"des",prop:"des"}}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"是否有效"},scopedSlots:i._u([{key:"default",fn:function(t){return[t.row.is_valid?a("el-tag",{attrs:{type:"success"}},[i._v("有效")]):a("el-tag",{attrs:{type:"info"}},[i._v("已删除")])]}}])}),i._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:i._u([{key:"default",fn:function(e){return[e.row.is_valid?a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return i.editFault(e.row,!0)}}},[i._v("编辑")]):i._e(),i._v(" "),e.row.is_valid?a("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(t){return i.deleteFault(e.row)}}},[i._v("删除")]):i._e()]}}])})],1),i._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!i.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":i.listQuery.page,"page-sizes":[15,20,30,50],"page-size":i.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:i.total},on:{"size-change":i.handleSizeChange,"current-change":i.handleCurrentChange,"update:currentPage":function(t){return i.$set(i.listQuery,"page",t)},"update:current-page":function(t){return i.$set(i.listQuery,"page",t)}}})],1),i._v(" "),a("el-dialog",{attrs:{visible:i.formVisible,title:i.dialogTitle},on:{"update:visible":function(t){i.formVisible=t}}},[a("el-form",{attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"品类"}},[a("el-select",{attrs:{disabled:i.isEdit},on:{change:i.onTypeChange},model:{value:i.formItem.cid,callback:function(t){i.$set(i.formItem,"cid",t)},expression:"formItem.cid"}},i._l(i.typeList,function(t){return a("el-option",{key:t.id,attrs:{value:t.id,label:t.name}})}),1)],1),i._v(" "),a("el-form-item",{attrs:{label:"品牌"}},[a("el-select",{attrs:{disabled:i.isEdit},on:{change:i.onBrandChange},model:{value:i.formItem.manufacturer,callback:function(t){i.$set(i.formItem,"manufacturer",t)},expression:"formItem.manufacturer"}},i._l(i.manufacturerList,function(t,e){return a("el-option",{key:e,attrs:{label:t.manufacturer_name,value:t.manufacturer_name}})}),1)],1),i._v(" "),a("el-form-item",{attrs:{label:"product_id"}},[a("el-select",{attrs:{clearable:""},model:{value:i.formItem.product_id,callback:function(t){i.$set(i.formItem,"product_id",t)},expression:"formItem.product_id"}},i._l(i.productList,function(t){return a("el-option",{key:t.product_id,attrs:{value:t.product_id,label:t.product_id}})}),1)],1),i._v(" "),a("el-form-item",{attrs:{label:"code"}},[a("el-input",{attrs:{disabled:i.isEdit},model:{value:i.formItem.code,callback:function(t){i.$set(i.formItem,"code",t)},expression:"formItem.code"}})],1),i._v(" "),a("el-form-item",{attrs:{label:"status"}},[a("el-select",{model:{value:i.formItem.status,callback:function(t){i.$set(i.formItem,"status",t)},expression:"formItem.status"}},[a("el-option",{attrs:{label:"fixed",value:0}}),i._v(" "),a("el-option",{attrs:{label:"open",value:1}})],1)],1),i._v(" "),a("el-form-item",{attrs:{label:"level"}},[a("el-select",{model:{value:i.formItem.level,callback:function(t){i.$set(i.formItem,"level",t)},expression:"formItem.level"}},[a("el-option",{attrs:{label:"未定义",value:0}}),i._v(" "),a("el-option",{attrs:{label:"低",value:1}}),i._v(" "),a("el-option",{attrs:{label:"中",value:2}}),i._v(" "),a("el-option",{attrs:{label:"高",value:3}})],1)],1),i._v(" "),a("el-form-item",{attrs:{label:"tip_type"}},[a("el-select",{model:{value:i.formItem.tip_type,callback:function(t){i.$set(i.formItem,"tip_type",t)},expression:"formItem.tip_type"}},[a("el-option",{attrs:{label:"弹窗交互",value:1}}),i._v(" "),a("el-option",{attrs:{label:"仅提示",value:2}})],1)],1),i._v(" "),a("el-form-item",{attrs:{label:"push_rights"}},[a("el-select",{model:{value:i.formItem.push_rights,callback:function(t){i.$set(i.formItem,"push_rights",t)},expression:"formItem.push_rights"}},[a("el-option",{attrs:{label:"全员",value:0}}),i._v(" "),a("el-option",{attrs:{label:"户主",value:1}})],1)],1),i._v(" "),a("el-form-item",{attrs:{label:"push_time"}},[i._l(i.formItem.push_time,function(t,e){return a("div",{key:e,staticClass:"push_time_item"},[a("el-time-select",{staticClass:"hour",attrs:{clearable:!1,"picker-options":i.getTimeSelectOption(e,0)},model:{value:i.formItem.push_time[e][0],callback:function(t){i.$set(i.formItem.push_time[e],0,t)},expression:"formItem.push_time[index][0]"}}),i._v(" -\n                    "),a("el-time-select",{staticClass:"hour",attrs:{clearable:!1,"picker-options":i.getTimeSelectOption(e,1)},model:{value:i.formItem.push_time[e][1],callback:function(t){i.$set(i.formItem.push_time[e],1,t)},expression:"formItem.push_time[index][1]"}}),i._v(" "),1<i.formItem.push_time.length?a("i",{staticClass:"el-icon-remove",on:{click:function(t){return i.deleteRow(e)}}}):i._e()],1)}),i._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus",size:"mini"},on:{click:i.addRow}},[i._v("新增一行")])],2),i._v(" "),a("el-form-item",{attrs:{label:"push_type"}},[a("el-input",{model:{value:i.formItem.push_type,callback:function(t){i.$set(i.formItem,"push_type",t)},expression:"formItem.push_type"}})],1),i._v(" "),a("el-form-item",{attrs:{label:"title"}},[a("el-input",{model:{value:i.formItem.title,callback:function(t){i.$set(i.formItem,"title",t)},expression:"formItem.title"}})],1),i._v(" "),a("el-form-item",{attrs:{label:"des"}},[a("el-input",{attrs:{type:"textarea",rows:"2"},model:{value:i.formItem.des,callback:function(t){i.$set(i.formItem,"des",t)},expression:"formItem.des"}}),i._v(" "),a("span",[i._v("支持标签：${family_name},${room_name},${device_name}")])],1),i._v(" "),a("el-form-item",{attrs:{label:"revover_desc"}},[a("el-input",{attrs:{type:"textarea",rows:"2"},model:{value:i.formItem.revover_desc,callback:function(t){i.$set(i.formItem,"revover_desc",t)},expression:"formItem.revover_desc"}})],1)],1),i._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:i.onSubmit}},[i._v("提交")]),i._v(" "),a("el-button",{on:{click:function(t){i.formVisible=!1}}},[i._v("取消")])],1)],1)],1)},staticRenderFns:[]};a=i("C7Lr")(l,a,!1,function(t){i("hrBE")},"data-v-e8bec67a",null),e.default=a.exports},SCuq:function(t,e,i){(t.exports=i("BkJT")(!0)).push([t.i,".push_time_item[data-v-e8bec67a]{margin-bottom:5px}.hour[data-v-e8bec67a]{width:110px}","",{version:3,sources:["E:/A-project/PomeloHomeOpen_Sys/src/views/configManagement/deviceFault.vue"],names:[],mappings:"AACA,iCACE,iBAAmB,CACpB,AACD,uBACE,WAAa,CACd",file:"deviceFault.vue",sourcesContent:["\n.push_time_item[data-v-e8bec67a] {\r\n  margin-bottom: 5px;\n}\n.hour[data-v-e8bec67a] {\r\n  width: 110px;\n}\r\n"],sourceRoot:""}])},hrBE:function(t,e,i){var a=i("SCuq");(a="string"==typeof a?[[t.i,a,""]]:a).locals&&(t.exports=a.locals);i("8bSs")("00273582",a,!0)}});