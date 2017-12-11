<template>
<div class="app-container">
  <!--====================-->
  <el-card class="box-card">
    <el-row class="card-row">
        <el-col :span="2" class="card-span-left">版本号</el-col>
        <el-col :span="20" :offset="2" class="card-span-right">{{checkDetail.version_no}}</el-col>
    </el-row>

    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">版本说明</el-col>
      <el-col :span="20" :offset="2" class="card-span-right">
        {{checkDetail.des}}
        <div style="padding-top: 30px">
          <el-form :inline="true" class="check-form-inline">
            <el-row>
              <el-col :span="6">
                <el-form-item>
                  <el-radio-group
                          @change="generateReason('版本信息未审核通过', versionCheck.action_type, versionCheck.unapproved_reason)"
                          v-model="versionCheck.action_type">
                    <el-radio :label="1">审核通过</el-radio>
                    <el-radio :label="2">审核不通过</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>

              <el-col :span="18" class="check-reason" v-if="versionCheck.action_type == 2">
                <el-form-item label="审核结果：">
                  <el-input
                          @blur="modifyReason('版本信息未审核通过', versionCheck.unapproved_reason)"
                          v-model="versionCheck.unapproved_reason"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-col>
    </el-row>

    <hr v-if="checkDetail.file_list.length" style="margin: 0px 20px 20px 20px"/>

    <el-row class="card-row" v-for="item in checkDetail.file_list" :key="item.id">
      <el-col :span="2" class="card-span-left">{{item.type_txt}}</el-col>
      <el-col :span="20" :offset="2" class="card-span-right">
        <a :href="item.file_url" target="_blank">{{item.filename}}</a><span style="color: darkgrey; padding-left: 8px">{{item.size}}</span>
        <div style="padding-top: 30px">
          <el-form :inline="true" class="check-form-inline">
            <el-row>
              <el-col :span="6" >
                <el-form-item>
                  <el-radio-group
                          @change="generateReason(item.type_txt+'未审核通过', item.action_type, item.unapproved_reason)"
                          v-model="item.action_type">
                    <el-radio :label="1">审核通过</el-radio>
                    <el-radio :label="2">审核不通过</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>

              <el-col :span="18"  class="check-reason" v-if="item.action_type == 2">
                <el-form-item label="审核结果：">
                  <el-input
                          @blur="modifyReason(item.type_txt+'未审核通过', item.unapproved_reason)"
                          v-model="item.unapproved_reason"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-col>
    </el-row>

    <hr v-if="checkDetail.release_file_list.length" style="margin: 0px 20px 20px 20px"/>

    <el-row class="card-row" v-for="item in checkDetail.release_file_list" :key="item.id">
      <el-col :span="2" class="card-span-left">{{item.type_txt}}</el-col>
      <el-col :span="20" :offset="2" class="card-span-right">
        <a :href="item.file_url" target="_blank">{{item.filename}}</a><span style="color: darkgrey; padding-left: 8px">{{item.size}}</span>
        <div style="padding-top: 30px">
          <el-form :inline="true" class="check-form-inline">
            <el-row>
              <el-col :span="6" >
                <el-form-item>
                  <el-radio-group
                          @change="generateReason(item.type_txt+'未审核通过', item.action_type, item.unapproved_reason)"
                          v-model="item.action_type">
                    <el-radio :label="1">审核通过</el-radio>
                    <el-radio :label="2">审核不通过</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>

              <el-col :span="18"  class="check-reason" v-if="item.action_type == 2">
                <el-form-item label="审核结果：">
                  <el-input
                          @blur="modifyReason(item.type_txt+'未审核通过', item.unapproved_reason)"
                          v-model="item.unapproved_reason"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-col>
    </el-row>

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
  import { Message } from 'element-ui'

  export default {
    name: 'goLiveCheckDetail',

    data() {
      return {
        versionCheck: {
          action_type: 1,
          unapproved_reason: '版本信息未审核通过'
        },
        unapproved_reason_list: [],
        record_id: '', // 审核id
        checkDetail: {
          file_list: [],
          release_file_list: []
        },
        action_type: null, // 提交审核操作类型 ，1 = 通过，2 = 驳回
        approved_reason: '' // 审核原因
      }
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
          console.log('产品审核详情', response);
          this.checkDetail = response;
          if (_this.checkDetail.file_list){
            _this.checkDetail.file_list.forEach(function (item) {
                _this.$set(item, 'action_type', 1);
                _this.$set(item, 'unapproved_reason', item.type_txt + '未审核通过');
              }
            )
          }
          if (_this.checkDetail.release_file_list){
            _this.checkDetail.release_file_list.forEach(function (item) {
                _this.$set(item, 'action_type', 1);
                _this.$set(item, 'unapproved_reason', item.type_txt + '未审核通过');
              }
            )
          }
        })
      },

      // 生成审核不通过列表
      generateReason(checkProp, type, reason) {
        console.log('入参', checkProp, type, reason);
        let _this = this;
        if (type === 2) {
//          if (reason.trim() === '') {
//            console.log(eval('_this.'+bindVariable));
//            eval('_this.'+bindVariable+'.unapproved_reason='+eval(checkProp+''));
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
        commitCheck(params).then(response => {
          if (response.res) {
            console.log('提交成功');
            Message({
              message: '审核成功',
              type: 'success',
              duration: 2 * 1000
            })
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

<style scoped>
  /*.el-form-item__content {*/
    /*width: 80%;*/
  /*}*/
  .card-img-tec {
    width: 300px;
    height: 200px
  }
</style>
