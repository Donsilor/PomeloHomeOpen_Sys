webpackJsonp([102],{lrVb:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"app-container"},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[l("el-form-item",{attrs:{label:"Activity name"}},[l("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"Activity zone"}},[l("el-select",{attrs:{placeholder:"please select your zone"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[l("el-option",{attrs:{label:"Zone one",value:"shanghai"}}),t._v(" "),l("el-option",{attrs:{label:"Zone two",value:"beijing"}})],1)],1),t._v(" "),l("el-form-item",{attrs:{label:"Activity time"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},model:{value:t.form.date1,callback:function(e){t.$set(t.form,"date1",e)},expression:"form.date1"}})],1),t._v(" "),l("el-col",{staticClass:"line",attrs:{span:2}},[t._v("-")]),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"Pick a time"},model:{value:t.form.date2,callback:function(e){t.$set(t.form,"date2",e)},expression:"form.date2"}})],1)],1),t._v(" "),l("el-form-item",{attrs:{label:"Instant delivery"}},[l("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:t.form.delivery,callback:function(e){t.$set(t.form,"delivery",e)},expression:"form.delivery"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"Activity type"}},[l("el-checkbox-group",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[l("el-checkbox",{attrs:{label:"Online activities",name:"type"}}),t._v(" "),l("el-checkbox",{attrs:{label:"Promotion activities",name:"type"}}),t._v(" "),l("el-checkbox",{attrs:{label:"Offline activities",name:"type"}}),t._v(" "),l("el-checkbox",{attrs:{label:"Simple brand exposure",name:"type"}})],1)],1),t._v(" "),l("el-form-item",{attrs:{label:"Resources"}},[l("el-radio-group",{model:{value:t.form.resource,callback:function(e){t.$set(t.form,"resource",e)},expression:"form.resource"}},[l("el-radio",{attrs:{label:"Sponsor"}}),t._v(" "),l("el-radio",{attrs:{label:"Venue"}})],1)],1),t._v(" "),l("el-form-item",{attrs:{label:"Activity form"}},[l("el-input",{attrs:{type:"textarea"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),t._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("Create")]),t._v(" "),l("el-button",[t._v("Cancel")])],1)],1)],1)},staticRenderFns:[]},r=l("VU/8")({data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){this.$message("submit!")}}},a,!1,null,null,null);t.default=r.exports}});