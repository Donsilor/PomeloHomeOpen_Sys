<template>
<div class="app-container">
  <!--====================-->
  <h3>产品基本信息</h3>
  <el-card class="box-card">
    <el-row slot="header" class="card-row">
        <el-col :span="2" class="card-span-left">产品品类</el-col>
        <el-col :span="20" :offset="1" class="card-span-right">{{checkDetail.type_name}}</el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">产品品牌</el-col>
      <el-col :span="20" :offset="1" class="card-span-right">{{checkDetail.brand_name}}</el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">产品名称</el-col>
      <el-col :span="20" :offset="1" class="card-span-right">{{checkDetail.name}}</el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">外观图片（六视图）</el-col>
      <!--<el-col :span="20" :offset="1" class="card-span-right">-->
        <el-col v-for="item,index in checkDetail.images" :offset="index === 0 ? 1:0" :key="item" :span="3" class="card-hex-vision">
          <img v-img:name style="width: 100%;height: 100%" :src="item">
        </el-col>
      <!--</el-col>-->
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">产品规格书</el-col>
      <el-col :span="20" :offset="1" class="card-span-right"><a :href="checkDetail.spec_url">{{checkDetail.spec_name}}</a></el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">产品使用说明书</el-col>
      <el-col :span="20" :offset="1" class="card-span-right"><a :href="checkDetail.instruct_url">{{checkDetail.instruct_name}}</a></el-col>
    </el-row>

    <div>
      <el-form :inline="true" class="check-form-inline">
        <el-row>
          <el-col :span="6" class="check-radio">
            <el-form-item>
              <el-radio-group
                      @change="generateReason('产品基本信息未审核通过', baseInfoCheck.action_type, baseInfoCheck.unapproved_reason, 'baseInfoCheck.unapproved_reason')"
                      v-model="baseInfoCheck.action_type">
                <el-radio :label="1">审核通过</el-radio>
                <el-radio :label="2">审核不通过</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>

          <el-col :span="18" :offset="1" class="check-reason" v-if="baseInfoCheck.action_type == 2">
            <el-form-item label="审核结果：">
              <el-input
                      @blur="modifyReason('产品基本信息未审核通过', baseInfoCheck.unapproved_reason)"
                      v-model="baseInfoCheck.unapproved_reason"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-card>

  <!--=========================-->
  <h3>接入方式选择</h3>
  <el-card class="box-card">
    <el-row slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">选择技术方案</el-col>
      <el-col :span="20" :offset="1" class="card-span-right">
        <!--<div class="card-img-tec">-->
          <!--<img style="width: 100%;height: 100%" src="" class="image">-->
        <!--</div>-->
        {{checkDetail.type_txt}}
      </el-col>
    </el-row>

    <el-row v-if="checkDetail.type_txt==='wifi'" slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">芯片厂商</el-col>
      <el-col :span="20" :offset="1" class="card-span-right">
        {{checkDetail.type_vendor}}
      </el-col>
    </el-row>

    <el-row v-if="checkDetail.type_txt==='wifi'" slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">芯片型号
      </el-col>
      <el-col :span="20" :offset="1" class="card-span-right">
        {{checkDetail.type_model}}
      </el-col>
    </el-row>

    <el-row v-if="checkDetail.type_txt==='zigbee'||checkDetail.type_txt==='bluetooth'" slot="header" class="card-row">
      <el-col :span="2" class="card-span-left">协议
      </el-col>
      <el-col :span="20" :offset="1" class="card-span-right">
        {{checkDetail.agreement}}
      </el-col>
    </el-row>

    <!--<el-row slot="header" class="card-row">-->
      <!--<el-col :span="2" class="card-span-left">-->
        <!--配网方式-->
      <!--</el-col>-->
      <!--<el-col :span="20" :offset="1" class="card-span-right">-->
        <!--{{checkDetail.type_txt}}-->
      <!--</el-col>-->
    <!--</el-row>-->

    <div>
      <el-form :inline="true" class="check-form-inline">
        <el-row>
          <el-col :span="6" class="check-radio">
            <el-form-item>
              <el-radio-group
                      @change="generateReason('接入方式未审核通过', tecTypeCheck.action_type, tecTypeCheck.unapproved_reason, 'tecTypeCheck.unapproved_reason')"
                      v-model="tecTypeCheck.action_type">
                <el-radio :label="1">审核通过</el-radio>
                <el-radio :label="2">审核不通过</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>

          <el-col :span="18" class="check-reason" v-if="tecTypeCheck.action_type == 2">
            <el-form-item label="审核结果：">
              <el-input
                      @blur="modifyReason('接入方式未审核通过', tecTypeCheck.unapproved_reason)"
                      v-model="tecTypeCheck.unapproved_reason"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-card>

  <!--===========必选功能点==============-->
  <h3>必选功能点</h3>
  <el-card class="box-card">
    <el-table slot="header" :data="attr_list_default"
            stripe
            style="width: 100%">
      <el-table-column
              prop="attr_id"
              label="Stream_ID"
              width="180">

      </el-table-column>

      <el-table-column
              prop="name"
              label="参数名称"
              width="180">
      </el-table-column>
      <el-table-column
              prop="value_list"
              label="value">
        <template slot-scope="scope">
          <span v-if="scope.row.type===1 || scope.row.type===2">{{scope.row.value_list.join("/")}}</span>
          <span v-else="scope.row.type===3 || scope.row.type===4">{{scope.row.value_string}}</span>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-form :inline="true" class="check-form-inline">
        <el-row>
          <el-col :span="6" class="check-radio">
            <el-form-item>
              <el-radio-group @change="generateReason('功能点设置未审核通过', funcCheck_default.action_type, funcCheck_default.unapproved_reason, 'funcCheck_default')"
                              v-model="funcCheck_default.action_type">
                <el-radio :label="1">审核通过</el-radio>
                <el-radio :label="2">审核不通过</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>

          <el-col :span="18" class="check-reason" v-if="funcCheck_default.action_type == 2">
            <el-form-item label="审核结果：">
              <el-input @blur="modifyReason('功能点设置未审核通过', funcCheck_default.unapproved_reason)" v-model="funcCheck_default.unapproved_reason"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-card>

  <!--===========可选功能点==============-->
  <h3>可选功能点</h3>
  <el-card class="box-card">
    <el-table slot="header" :data="attr_list_optional"
              stripe
              style="width: 100%">
      <el-table-column
              prop="attr_id"
              label="Stream_ID"
              width="180">

      </el-table-column>

      <el-table-column
              prop="name"
              label="参数名称"
              width="180">
      </el-table-column>
      <el-table-column
              prop="value_list"
              label="value">
        <template slot-scope="scope">
          <span v-if="scope.row.type===1 || scope.row.type===2">{{scope.row.value_list.join("/")}}</span>
          <span v-else="scope.row.type===3 || scope.row.type===4">{{scope.row.value_string}}</span>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-form :inline="true" class="check-form-inline">
        <el-row>
          <el-col :span="6" class="check-radio">
            <el-form-item>
              <el-radio-group @change="generateReason('功能点设置未审核通过', funcCheck_optional.action_type, funcCheck_optional.unapproved_reason, 'funcCheck_optional')"
                              v-model="funcCheck_optional.action_type">
                <el-radio :label="1">审核通过</el-radio>
                <el-radio :label="2">审核不通过</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>

          <el-col :span="18" class="check-reason" v-if="funcCheck_optional.action_type == 2">
            <el-form-item label="审核结果：">
              <el-input @blur="modifyReason('功能点设置未审核通过', funcCheck_optional.unapproved_reason)" v-model="funcCheck_optional.unapproved_reason"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
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
  import { Message } from 'element-ui'

  export default {
    name: 'productCheckDetail',

    data() {
      return {
        baseInfoCheck: {
          action_type: 1,
          unapproved_reason: '产品基本信息未审核通过'
        },
        tecTypeCheck: {
          action_type: 1,
          unapproved_reason: '接入方式未审核通过'
        },
        funcCheck_default: {
          action_type: 1,
          unapproved_reason: '必选功能点设置未审核通过'
        },
        funcCheck_optional: {
          action_type: 1,
          unapproved_reason: '可选功能点设置未审核通过'
        },
        unapproved_reason_list: [],
        record_id: '', // 审核id
        checkDetail: '',
        action_type: null, // 提交审核操作类型 ，1 = 通过，2 = 驳回
        approved_reason: '' // 审核原因
      }
    },
    computed: {
      // 必选功能点
      attr_list_default: function () {
        if (this.checkDetail.attr_list) {
          return this.checkDetail.attr_list.filter(function (item) {
            return item.is_enable === 1 && item.is_default === 1;
          })
        }
      },
      // 可选功能点
      attr_list_optional: function () {
        if (this.checkDetail.attr_list) {
          return this.checkDetail.attr_list.filter(function (item) {
            return item.is_enable === 1 && item.is_default === 0;
          })
        }
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

        })
      },

      // 生成审核不通过列表
      generateReason(checkProp, type, reason, bindVariable) {
        console.log('入参', checkProp, type, reason, bindVariable);
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
  /*.card-img-tec {*/
    /*width: 300px;*/
    /*height: 200px*/
  /*}*/
</style>
