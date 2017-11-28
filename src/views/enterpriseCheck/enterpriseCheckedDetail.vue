<template>
  <div class="app-container">
    <!--====================-->
    <h3>联系人信息</h3>
    <el-card class="box-card">
      <el-row class="card-row">
        <el-col :span="4" class="card-span-left">联系人姓名</el-col>
        <el-col :span="15" :offset="2" class="card-span-right">{{checkDetail.contacts}}</el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="4" class="card-span-left">联系人手机</el-col>
        <el-col :span="15" :offset="2" class="card-span-right">{{checkDetail.contacts_mobile}}</el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="4" class="card-span-left">职位</el-col>
        <el-col :span="15" :offset="2" class="card-span-right">{{checkDetail.contacts_duty}}</el-col>
      </el-row>
    </el-card>

    <!--=========================-->
    <h3>公司/团队信息</h3>
    <el-card class="box-card">
      <el-row class="card-row">
        <el-col :span="4" class="card-span-left">公司名称</el-col>
        <el-col :span="15" :offset="2" class="card-span-right">{{checkDetail.name}}
        </el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="4" class="card-span-left">公司地址
        </el-col>
        <el-col :span="15" :offset="2" class="card-span-right">{{checkDetail.address}}
        </el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="4" class="card-span-left">公司营业执照注册号/统一社会信用代码</el-col>
        <el-col :span="15" :offset="2" class="card-span-right">{{checkDetail.registration_No}}
        </el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="4" class="card-span-left">合作产品
        </el-col>
        <el-col :span="15" :offset="2" class="card-span-right" >
          <el-button v-for="item in checkDetail.type" :key="item.name">{{item.name}}</el-button>
        </el-col>
      </el-row>
    </el-card>

    <!--===========上传公司资质说明==============-->
    <h3>上传公司资质说明</h3>
    <el-card class="box-card">
      <div v-for="item in checkDetail.licenses" :key="item.file_id">
        <p style="color: darkgray">{{item.filename}}</p>
        <div class="card-img-size">
          <img style="width: 100%;height: 100%" :src="item.file_url" class="image">
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


    }
  }
</script>

<style scoped>
  /*.el-form-item__content {*/
  /*width: 80%;*/
  /*}*/
</style>
