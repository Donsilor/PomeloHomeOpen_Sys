<template>
  <div class="app-container">
    <!--====================-->
    <h3>联系人信息</h3>
    <el-card class="box-card">
      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">联系人姓名</el-col>
        <el-col :span="15" :offset="1" class="card-span-right">{{checkDetail.contacts}}</el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">联系人手机</el-col>
        <el-col :span="15" :offset="1" class="card-span-right">{{checkDetail.contacts_mobile}}</el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">职位</el-col>
        <el-col :span="15" :offset="1" class="card-span-right">{{checkDetail.contacts_duty}}</el-col>
      </el-row>
    </el-card>

    <!--=========================-->
    <h3>公司/团队信息</h3>
    <el-card class="box-card">
      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">公司名称</el-col>
        <el-col :span="15" :offset="1" class="card-span-right">{{checkDetail.name}}
        </el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">公司地址
        </el-col>
        <el-col :span="15" :offset="1" class="card-span-right">{{checkDetail.address}}
        </el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">公司营业执照注册号/统一社会信用代码</el-col>
        <el-col :span="15" :offset="1" class="card-span-right">{{checkDetail.registration_No}}
        </el-col>
      </el-row>

      <el-row slot="header" class="card-row">
        <el-col :span="2" class="card-span-left">合作产品
        </el-col>
        <el-col :span="15" :offset="1" class="card-span-right" >
          <el-button type="info" style="margin-bottom: 5px" v-for="item in checkDetail.type" :key="item.name">{{item.name}}</el-button>
        </el-col>
      </el-row>
    </el-card>

    <!--===========上传公司资质说明==============-->
    <h3>上传公司资质说明</h3>
    <el-card class="box-card">
      <div v-for="item in checkDetail.licenses" :key="item.file_id">
        <p style="color: darkgray">{{item.filename}}</p>
        <div >
          <img style="max-height: 300px" v-img:name alt="图片加载失败" class="card-img-size" :src="item.file_url">
        </div>
      </div>
    </el-card>

    <!--===========复核原件==============-->
    <h3>复核原件</h3>
    <el-card class="box-card">
      <div v-for="item in originalCheckType">
        <p>{{item.id}}、{{item.description}}</p>
      </div>

    </el-card>

    <!--===========审核不通过原因==============-->
    <el-card v-if="$route.query.status === 2" class="box-card" style="margin: 30px 0">
      <p v-if="">审核不通过：</p>
      <p v-for="item, index in unapproved_reason_list">{{index + 1}}. {{item}}；</p>
    </el-card>

  </div>
</template>

<script>
  import { getReviewInfo, commitCheck } from '@/api/check';
  import { originalCheckType } from '@/utils/config'; // 复核原件类型

  export default {
    name: 'enterpriseCheckedDetail',

    data() {
      return {
        record_id: '', // 审核id
        checkDetail: '',
        originalCheckType: originalCheckType,
//        unapproved_reason_list: []
      }
    },
    computed: {
      unapproved_reason_list: function () {
        if (this.checkDetail.approved_reason) {
          return this.checkDetail.approved_reason
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
          console.log('企业审核详情', response);
          this.checkDetail = response;
        })
      },


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
</style>
