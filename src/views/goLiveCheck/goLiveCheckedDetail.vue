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
        </el-col>
      </el-row>

      <!--<el-row>-->
      <!--<el-col :span="20" :offset="4">-->
      <!---->
      <!--</el-col>-->
      <!--</el-row>-->

      <el-row class="card-row" v-for="item in checkDetail.file_list" :key="item.id">
        <el-col :span="2" class="card-span-left">手机端控制页</el-col>
        <el-col :span="20" :offset="2" class="card-span-right">
          <a :href="item.url">{{item.filename}}</a>
          <div>{{item.size}}</div>
        </el-col>
      </el-row>

      <el-row class="card-row" v-for="item in checkDetail.release_file_list" :key="item.id">
        <el-col :span="2" class="card-span-left">手机端控制页</el-col>
        <el-col :span="20" :offset="2" class="card-span-right">
          <a :href="item.url">{{item.filename}}</a>
          <div>{{item.size}}</div>
        </el-col>
      </el-row>

      <!--===========审核不通过原因==============-->
      <el-card v-if="unapproved_reason_list" class="box-card" style="margin: 30px 0">
        <p v-if="">审核不通过：</p>
        <p v-for="item, index in unapproved_reason_list">{{index + 1}}. {{item}}；</p>
      </el-card>

    </el-card>



  </div>
</template>

<script>
  import { getReviewInfo, commitCheck } from '@/api/check';

  export default {
    name: 'goLiveCheckedDetail',

    data() {
      return {
        record_id: '', // 审核id
        checkDetail: '',
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
          console.log('产品审核详情', response);
          this.checkDetail = response;
          if (_this.checkDetail.file_list.length > 0){
            _this.checkDetail.file_list.forEach(function (item) {
                _this.$set(item, 'action_type', 1);
                _this.$set(item, 'unapproved_reason', item.filename + '未审核通过');
              }
            )
          }
          if (_this.checkDetail.release_file_list.length > 0){
            _this.checkDetail.release_file_list.forEach(function (item) {
                _this.$set(item, 'action_type', 1);
                _this.$set(item, 'unapproved_reason', item.filename + '未审核通过');
              }
            )
          }
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
  .card-img-tec {
    width: 300px;
    height: 200px
  }
</style>
