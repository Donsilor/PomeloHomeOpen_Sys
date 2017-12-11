<template>
<div class="app-container">
  <!--====================-->
  <h3>联系人信息</h3>
  <el-card class="box-card">
    <el-row slot="header" class="card-row">
        <el-col :span="2" class="card-span-left">联系人姓名</el-col>
        <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts}}</el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">联系人手机</el-col>
      <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts_mobile}}</el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">职位</el-col>
      <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts_duty}}</el-col>
    </el-row>
    <div>
      <el-form :inline="true" class="check-form-inline">
        <el-row>
          <el-col :span="6" class="check-radio">
            <el-form-item >
              <el-radio-group @change="generateReason('联系人信息未审核通过', contactsCheck.action_type, contactsCheck.unapproved_reason)" v-model="contactsCheck.action_type">
                <el-radio :label="1">审核通过</el-radio>
                <el-radio :label="2">审核不通过</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="16" class="check-reason" v-if="contactsCheck.action_type == 2">
            <el-form-item label="审核结果：" >
              <el-input @blur="modifyReason('联系人信息未审核通过', contactsCheck.unapproved_reason)" v-model="contactsCheck.unapproved_reason"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-card>

  <!--=========================-->
  <h3>公司/团队信息</h3>
  <el-card class="box-card">
    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">公司名称</el-col>
      <el-col :span="15" :offset="1" class="card-span-right">{{checkDetail.name}}
      </el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">公司地址
      </el-col>
      <el-col :span="15" :offset="1" class="card-span-right">{{checkDetail.address}}
      </el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">公司营业执照注册号/统一社会信用代码</el-col>
      <el-col :span="15" :offset="1" class="card-span-right">{{checkDetail.registration_No}}
      </el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">合作品牌
      </el-col>
      <el-col :span="15" :offset="1" class="card-span-right" >
        <el-button type="info" style="margin-bottom: 5px" v-for="item in checkDetail.brands" :key="item.name">{{item.brand_name}}</el-button>
      </el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">合作产品
      </el-col>
      <el-col :span="15" :offset="1" class="card-span-right" >
        <el-button type="info" style="margin-bottom: 5px" v-for="item in checkDetail.type" :key="item.name">{{item.name}}</el-button>
      </el-col>
    </el-row>
    <div>
      <el-form :inline="true" class="check-form-inline">
        <el-row>
          <el-col :span="6" class="check-radio">
            <el-form-item>
              <el-radio-group v-model="companyInfoCheck.action_type"
                              @change="generateReason('公司/团队信息未审核通过', companyInfoCheck.action_type, companyInfoCheck.unapproved_reason)">
                <el-radio :label="1">审核通过</el-radio>
                <el-radio :label="2">审核不通过</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>

          <el-col :span="16" class="check-reason" v-if="companyInfoCheck.action_type == 2">
            <el-form-item label="审核结果：">
              <el-input @blur="modifyReason('公司/团队信息未审核通过', companyInfoCheck.unapproved_reason)" v-model="companyInfoCheck.unapproved_reason"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-card>
  <!--===========上传公司资质说明==============-->
  <h3>上传公司资质说明</h3>
  <el-card class="box-card">
    <div v-for="item in checkDetail.licenses" :key="item.file_id">
      <p style="color: darkgray">{{item.filename}}</p>
      <div >
        <img style="max-height: 300px" v-img:name alt="图片加载失败" class="card-img-size" :src="item.file_url">
      </div>
      <div style="padding-bottom: 10px">
        <el-form :inline="true" class="check-form-inline">
          <el-row>
            <el-col :span="6" class="check-radio">
              <el-form-item>
                <el-radio-group v-model="item.action_type"
                                @change="generateReason(item.filename+'未审核通过', item.action_type, item.unapproved_reason)">
                  <el-radio :label="1">审核通过</el-radio>
                  <el-radio :label="2">审核不通过</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>

            <el-col :span="16" class="check-reason" v-if="item.action_type == 2">
              <el-form-item label="审核结果：">
                <el-input @blur="modifyReason(item.filename+'未审核通过', item.unapproved_reason)" v-model="item.unapproved_reason"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </el-card>

  <!--===========复核原件==============-->
  <h3>复核原件</h3>
  <el-card class="box-card">
    <div v-for="item in originalCheckType">
      <p>{{item.id}}、{{item.description}}</p>
      <div style="padding-bottom: 10px">
        <el-form :inline="true" class="check-form-inline">
          <el-row>
            <el-col :span="6">
              <el-form-item>
                <el-radio-group v-model="item.action_type"
                                @change="generateReason(item.description+'未审核通过', item.action_type, item.unapproved_reason)">
                  <el-radio :label="1">审核通过</el-radio>
                  <el-radio :label="2">审核不通过</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>

            <el-col :span="16" class="check-reason" v-if="item.action_type == 2">
              <el-form-item label="审核结果：">
                <el-input @blur="modifyReason(item.description+'未审核通过', item.unapproved_reason)" v-model="item.unapproved_reason"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>

  </el-card>

  <!--===========审核==============-->
  <el-card class="box-card" style="margin: 30px 0">
      <p v-if="unapproved_reason_list.length">审核不通过：</p>
      <p v-for="item, index in unapproved_reason_list">{{index + 1}}. {{item.reason}}；</p>
    <div style="padding: 30px 0">
      <el-col :span="4">
        <el-button  type="primary" @click="commitCheck" >提交</el-button>
      </el-col>
      <el-col :span="4">
        <el-button  @click="cancelCheck">取消</el-button>
      </el-col>
    </div>
  </el-card>

</div>
</template>

<script>
  import { getReviewInfo, commitCheck } from '@/api/check';
  import { originalCheckType } from '@/utils/config'; // 复核原件类型
  import { Message } from 'element-ui';

  export default {
    name: 'enterpriseCheckDetail',

    data() {
      return {
        contactsCheck: {
          action_type: 1,
          unapproved_reason: '联系人信息未审核通过'
        },
        companyInfoCheck: {
          action_type: 1,
          unapproved_reason: '公司/团队信息未审核通过'
        },
        unapproved_reason_list: [],
        record_id: '', // 审核id
        checkDetail: '',
        originalCheckType: originalCheckType,
        action_type: null, // 提交审核操作类型 ，1 = 通过，2 = 驳回
        approved_reason: '', // 审核原因
        licensesImgs: []
      }
    },
    computed: {
//      licensesImgs: function () {
//        let arry = [];
//        console.log('666', this.checkDetail.licenses);
//        this.checkDetail.licenses.forEach(function (item) {
//          let obj = {};
//          obj.url = item.file_url;
//          arry.push(obj)
//        });
//        console.log('777', arry);
//        return arry;
//      }
    },
    created() {
      console.log('页面传参', this.$route.query);
      this.record_id = this.$route.query.record_id;
    },
    mounted() {
      this.getReviewInfo();
    },
    methods: {
      // 获取审核详情
      getReviewInfo() {
        let _this = this;
        let params = {
          record_id: _this.record_id
        };
        getReviewInfo(params).then(response => {
          console.log('企业审核详情', response);
          this.checkDetail = response;
          if (_this.checkDetail.licenses.length > 0){
            _this.checkDetail.licenses.forEach(function (item) {
              _this.$set(item, 'action_type', 1);
              _this.$set(item, 'unapproved_reason', item.filename + '未审核通过');
              _this.$set(item, 'url', item.file_url);
              }
            )
          }

        })
      },

      // 图片预览
      imgPreview (e) {
        fancyBox(e.target, this.checkDetail.licenses);
      },

      // 生成审核不通过列表
      generateReason(checkProp, type, reason) {
        let _this = this;
        if (type === 2) {
//          if (reason.trim() === '') {
//            reason = checkProp;
//          }
          this.unapproved_reason_list.push({checkProp, reason});
        } else if (type === 1) {
          for (let i = 0; i < _this.unapproved_reason_list.length; i++) {
//            console.log(_this.unapproved_reason_list[i].checkProp);
            if (_this.unapproved_reason_list[i].checkProp === checkProp) {
              _this.unapproved_reason_list.splice(i, 1)
            }
          }

        }
//        console.log('this.unapproved_reason_list', this.unapproved_reason_list);
      },

      // 修改审核原因
      modifyReason(checkProp, reason) {
        let _this = this;
        for (let i = 0; i < _this.unapproved_reason_list.length; i++) {
          console.log(_this.unapproved_reason_list[i].checkProp);
          if (_this.unapproved_reason_list[i].checkProp === checkProp) {
            if (reason.trim() != '') {
              _this.unapproved_reason_list[i].reason = reason;

            } else if (reason.trim() === '')
            _this.unapproved_reason_list[i].reason = checkProp;
          }
        }
      },

      // 提交审核
      commitCheck() {
        let _this = this;
        if (this.unapproved_reason_list.length > 0) {
          this.action_type = 2; // 驳回
          _this.approved_reason = '';
          for (let i = 0; i < _this.unapproved_reason_list.length; i++) {
            if (i === 0) {
              _this.approved_reason = _this.unapproved_reason_list[i].reason;
            } else {
              _this.approved_reason =_this.approved_reason  + '|'+ _this.unapproved_reason_list[i].reason;
            }
          }
          console.log(_this.approved_reason.split('|'));
        } else {
          this.action_type = 1; // 通过
        }
        let params = {
          record_id: this.record_id,
          action_type: this.action_type,
          approved_reason: _this.approved_reason
        };
        console.log('审核入参', params);
        commitCheck(params).then(response => {
          if (response.res) {
            console.log('提交成功');
            Message({
              message: '审核成功',
              type: 'success',
              duration: 2 * 1000
            });
            this.$router.go(-1);
          }
        })
      },

      // 取消审核
      cancelCheck() {
        this.$confirm('确认取消？')
          .then(_ => {
            console.log('取消');
            this.$router.go(-1);
          })
          .catch(_ => {
            console.log('留在本页面');
          });
      }
    },
    deactivated() {
      this.$destroy();
    }
  }
</script>

<style >
  /*.check-form-inline .el-form-item {*/
    /*width: 100%;*/
  /*}*/

</style>
