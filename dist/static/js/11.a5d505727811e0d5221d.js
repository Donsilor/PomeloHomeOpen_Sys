webpackJsonp([11],{"4zeL":function(e,t,a){var o=a("EJHT");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("2a2df310",o,!0)},EJHT:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"enterpriseCheckDetail.vue",sourceRoot:""}])},bzuE:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return s});var o=[{id:1,name:"wifi"},{id:2,name:"zigbee"},{id:3,name:"bluetooth"}],s=[{id:1,action_type:1,unapproved_reason:"营业执照/组织结构代码证/税务登记证复印件，加盖公章未审核通过",description:"营业执照/组织结构代码证/税务登记证复印件，加盖公章"},{id:2,action_type:1,unapproved_reason:"法定代表人身份证复印件，加盖公章未审核通过",description:"法定代表人身份证复印件，加盖公章"},{id:3,action_type:1,unapproved_reason:"公司出具的法人代表身份证明书，加盖公章未审核通过",description:"公司出具的法人代表身份证明书，加盖公章"},{id:4,action_type:1,unapproved_reason:"品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录未审核通过",description:"品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录"},{id:5,action_type:1,unapproved_reason:"ISO9001复印件未审核通过",description:"ISO9001复印件"},{id:6,action_type:1,unapproved_reason:"国家高新技术企业复印件未审核通过",description:"国家高新技术企业复印件"},{id:7,action_type:1,unapproved_reason:"其他资质证书未审核通过",description:"其他资质证书"}]},gAg6:function(e,t,a){"use strict";var o=a("sQkU"),s=a("bzuE"),n=a("zL8q");a.n(n);t.a={name:"enterpriseCheckDetail",data:function(){return{contactsCheck:{action_type:1,unapproved_reason:"联系人信息未审核通过"},companyInfoCheck:{action_type:1,unapproved_reason:"公司/团队信息未审核通过"},unapproved_reason_list:[],record_id:"",checkDetail:"",originalCheckType:s.a,action_type:null,approved_reason:"",licensesImgs:[]}},computed:{},created:function(){console.log("页面传参",this.$route.query),this.record_id=this.$route.query.record_id},mounted:function(){this.getReviewInfo()},methods:{getReviewInfo:function(){var e=this,t=this,a={record_id:t.record_id};Object(o.c)(a).then(function(a){console.log("企业审核详情",a),e.checkDetail=a,t.checkDetail.licenses.length>0&&t.checkDetail.licenses.forEach(function(e){t.$set(e,"action_type",1),t.$set(e,"unapproved_reason",e.filename+"未审核通过"),t.$set(e,"url",e.file_url)})})},imgPreview:function(e){fancyBox(e.target,this.checkDetail.licenses)},generateReason:function(e,t,a){var o=this;if(2===t)this.unapproved_reason_list.push({checkProp:e,reason:a});else if(1===t)for(var s=0;s<o.unapproved_reason_list.length;s++)o.unapproved_reason_list[s].checkProp===e&&o.unapproved_reason_list.splice(s,1)},modifyReason:function(e,t){for(var a=this,o=0;o<a.unapproved_reason_list.length;o++)console.log(a.unapproved_reason_list[o].checkProp),a.unapproved_reason_list[o].checkProp===e&&(""!=t.trim()?a.unapproved_reason_list[o].reason=t:""===t.trim()&&(a.unapproved_reason_list[o].reason=e))},commitCheck:function(){var e=this,t=this;if(this.unapproved_reason_list.length>0){this.action_type=2,t.approved_reason="";for(var a=0;a<t.unapproved_reason_list.length;a++)t.approved_reason=0===a?t.unapproved_reason_list[a].reason:t.approved_reason+"|"+t.unapproved_reason_list[a].reason;console.log(t.approved_reason.split("|"))}else this.action_type=1;var s={record_id:this.record_id,action_type:this.action_type,approved_reason:t.approved_reason};console.log("审核入参",s),Object(o.a)(s).then(function(t){t.res&&(console.log("提交成功"),Object(n.Message)({message:"审核成功",type:"success",duration:2e3}),e.$router.go(-1))})},cancelCheck:function(){var e=this;this.$confirm("确认取消？").then(function(t){console.log("取消"),e.$router.go(-1)}).catch(function(e){console.log("留在本页面")})}},deactivated:function(){this.$destroy()}}},sQkU:function(e,t,a){"use strict";function o(e){return Object(c.a)({url:"/admin/review_lists?page="+e.page,method:"post",data:e})}function s(){return Object(c.a)({url:"/product/type_lists",method:"post",data:{}})}function n(e){return Object(c.a)({url:"/admin/review_info",method:"post",data:e})}function r(e){return Object(c.a)({url:"/admin/review_approve",method:"post",data:e})}t.d=o,t.b=s,t.c=n,t.a=r;var c=a("Vo7i")},"wGm/":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("h3",[e._v("联系人信息")]),e._v(" "),a("el-card",{staticClass:"box-card"},[a("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[a("el-col",{staticClass:"card-span-left",attrs:{span:4}},[e._v("联系人姓名")]),e._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:15,offset:2}},[e._v(e._s(e.checkDetail.contacts))])],1),e._v(" "),a("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[a("el-col",{staticClass:"card-span-left",attrs:{span:4}},[e._v("联系人手机")]),e._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:15,offset:2}},[e._v(e._s(e.checkDetail.contacts_mobile))])],1),e._v(" "),a("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[a("el-col",{staticClass:"card-span-left",attrs:{span:4}},[e._v("职位")]),e._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:15,offset:2}},[e._v(e._s(e.checkDetail.contacts_duty))])],1),e._v(" "),a("div",[a("el-form",{staticClass:"check-form-inline",attrs:{inline:!0}},[a("el-row",[a("el-col",{staticClass:"check-radio",attrs:{span:4}},[a("el-form-item",[a("el-radio-group",{on:{change:function(t){e.generateReason("联系人信息未审核通过",e.contactsCheck.action_type,e.contactsCheck.unapproved_reason)}},model:{value:e.contactsCheck.action_type,callback:function(t){e.$set(e.contactsCheck,"action_type",t)},expression:"contactsCheck.action_type"}},[a("el-radio",{attrs:{label:1}},[e._v("审核通过")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("审核不通过")])],1)],1)],1),e._v(" "),2==e.contactsCheck.action_type?a("el-col",{staticClass:"check-reason",attrs:{span:18,offset:2}},[a("el-form-item",{attrs:{label:"审核结果："}},[a("el-input",{on:{blur:function(t){e.modifyReason("联系人信息未审核通过",e.contactsCheck.unapproved_reason)}},model:{value:e.contactsCheck.unapproved_reason,callback:function(t){e.$set(e.contactsCheck,"unapproved_reason",t)},expression:"contactsCheck.unapproved_reason"}})],1)],1):e._e()],1)],1)],1)],1),e._v(" "),a("h3",[e._v("公司/团队信息")]),e._v(" "),a("el-card",{staticClass:"box-card"},[a("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[a("el-col",{staticClass:"card-span-left",attrs:{span:4}},[e._v("公司名称")]),e._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:15,offset:2}},[e._v(e._s(e.checkDetail.name)+"\n      ")])],1),e._v(" "),a("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[a("el-col",{staticClass:"card-span-left",attrs:{span:4}},[e._v("公司地址\n      ")]),e._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:15,offset:2}},[e._v(e._s(e.checkDetail.address)+"\n      ")])],1),e._v(" "),a("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[a("el-col",{staticClass:"card-span-left",attrs:{span:4}},[e._v("公司营业执照注册号/统一社会信用代码")]),e._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:15,offset:2}},[e._v(e._s(e.checkDetail.registration_No)+"\n      ")])],1),e._v(" "),a("el-row",{staticClass:"card-row",attrs:{slot:"header"},slot:"header"},[a("el-col",{staticClass:"card-span-left",attrs:{span:4}},[e._v("合作产品\n      ")]),e._v(" "),a("el-col",{staticClass:"card-span-right",attrs:{span:15,offset:2}},e._l(e.checkDetail.type,function(t){return a("el-button",{key:t.name},[e._v(e._s(t.name))])}))],1),e._v(" "),a("div",[a("el-form",{staticClass:"check-form-inline",attrs:{inline:!0}},[a("el-row",[a("el-col",{staticClass:"check-radio",attrs:{span:4}},[a("el-form-item",[a("el-radio-group",{on:{change:function(t){e.generateReason("公司/团队信息未审核通过",e.companyInfoCheck.action_type,e.companyInfoCheck.unapproved_reason)}},model:{value:e.companyInfoCheck.action_type,callback:function(t){e.$set(e.companyInfoCheck,"action_type",t)},expression:"companyInfoCheck.action_type"}},[a("el-radio",{attrs:{label:1}},[e._v("审核通过")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("审核不通过")])],1)],1)],1),e._v(" "),2==e.companyInfoCheck.action_type?a("el-col",{staticClass:"check-reason",attrs:{span:18,offset:2}},[a("el-form-item",{attrs:{label:"审核结果："}},[a("el-input",{on:{blur:function(t){e.modifyReason("公司/团队信息未审核通过",e.companyInfoCheck.unapproved_reason)}},model:{value:e.companyInfoCheck.unapproved_reason,callback:function(t){e.$set(e.companyInfoCheck,"unapproved_reason",t)},expression:"companyInfoCheck.unapproved_reason"}})],1)],1):e._e()],1)],1)],1)],1),e._v(" "),a("h3",[e._v("上传公司资质说明")]),e._v(" "),a("el-card",{staticClass:"box-card"},e._l(e.checkDetail.licenses,function(t){return a("div",{key:t.file_id},[a("p",{staticStyle:{color:"darkgray"}},[e._v(e._s(t.filename))]),e._v(" "),a("div",{staticStyle:{height:"300px"}},[a("img",{directives:[{name:"img",rawName:"v-img:name",arg:"name"}],staticClass:"card-img-size",attrs:{alt:"图片加载失败",src:t.file_url}})]),e._v(" "),a("div",{staticStyle:{padding:"30px 0"}},[a("el-form",{staticClass:"check-form-inline",attrs:{inline:!0}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("el-form-item",[a("el-radio-group",{on:{change:function(a){e.generateReason(t.filename+"未审核通过",t.action_type,t.unapproved_reason)}},model:{value:t.action_type,callback:function(a){e.$set(t,"action_type",a)},expression:"item.action_type"}},[a("el-radio",{attrs:{label:1}},[e._v("审核通过")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("审核不通过")])],1)],1)],1),e._v(" "),2==t.action_type?a("el-col",{staticClass:"check-reason",attrs:{span:18,offset:2}},[a("el-form-item",{attrs:{label:"审核结果："}},[a("el-input",{on:{blur:function(a){e.modifyReason(t.filename+"未审核通过",t.unapproved_reason)}},model:{value:t.unapproved_reason,callback:function(a){e.$set(t,"unapproved_reason",a)},expression:"item.unapproved_reason"}})],1)],1):e._e()],1)],1)],1)])})),e._v(" "),a("h3",[e._v("复核原件")]),e._v(" "),a("el-card",{staticClass:"box-card"},e._l(e.originalCheckType,function(t){return a("div",[a("p",[e._v(e._s(t.id)+"、"+e._s(t.description))]),e._v(" "),a("div",{staticStyle:{padding:"30px 0"}},[a("el-form",{staticClass:"check-form-inline",attrs:{inline:!0}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("el-form-item",[a("el-radio-group",{on:{change:function(a){e.generateReason(t.description+"未审核通过",t.action_type,t.unapproved_reason)}},model:{value:t.action_type,callback:function(a){e.$set(t,"action_type",a)},expression:"item.action_type"}},[a("el-radio",{attrs:{label:1}},[e._v("审核通过")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("审核不通过")])],1)],1)],1),e._v(" "),2==t.action_type?a("el-col",{staticClass:"check-reason",attrs:{span:18,offset:2}},[a("el-form-item",{attrs:{label:"审核结果："}},[a("el-input",{on:{blur:function(a){e.modifyReason(t.description+"未审核通过",t.unapproved_reason)}},model:{value:t.unapproved_reason,callback:function(a){e.$set(t,"unapproved_reason",a)},expression:"item.unapproved_reason"}})],1)],1):e._e()],1)],1)],1)])})),e._v(" "),a("el-card",{staticClass:"box-card",staticStyle:{margin:"30px 0"}},[e.unapproved_reason_list.length?a("p",[e._v("审核不通过：")]):e._e(),e._v(" "),e._l(e.unapproved_reason_list,function(t,o){return a("p",[e._v(e._s(o+1)+". "+e._s(t.reason)+"；")])}),e._v(" "),a("div",{staticStyle:{padding:"30px 0"}},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:e.commitCheck}},[e._v("提交")])],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-button",{on:{click:e.cancelCheck}},[e._v("取消")])],1)],1)],2)],1)},s=[],n={render:o,staticRenderFns:s};t.a=n},zFvg:function(e,t,a){"use strict";function o(e){a("4zeL")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("gAg6"),n=a("wGm/"),r=a("VU/8"),c=o,i=r(s.a,n.a,!1,c,null,null);t.default=i.exports}});
//# sourceMappingURL=11.a5d505727811e0d5221d.js.map