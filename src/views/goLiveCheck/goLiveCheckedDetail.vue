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

      <hr v-if="checkDetail.file_list.length" style="margin: 0px 20px 20px 20px"/>

      <el-row class="card-row" v-for="item in checkDetail.file_list" :key="item.id">
        <el-col :span="2" class="card-span-left">{{item.type_txt}}</el-col>
        <el-col :span="20" :offset="2" class="card-span-right">
          <a :href="item.file_url" target="_blank">{{item.filename}}</a><span style="color: darkgrey; padding-left: 8px">{{item.size}}</span>
          <div v-if="item.type===14||item.type===15" style="color: darkgrey;padding-top: 10px">压缩包仅支持zip格式，需按【产品品牌_产品型号】格式命名</div>
          <div v-else="item.type===16" style="color: darkgrey;padding-top: 10px">上传固件后，用户可进行设备固件更新</div>
        </el-col>
      </el-row>

      <hr v-if="checkDetail.release_file_list.length" style="margin: 0px 20px 20px 20px"/>

      <el-row class="card-row" v-for="item in checkDetail.release_file_list" :key="item.id">
        <el-col :span="2" class="card-span-left">手机端控制页</el-col>
        <el-col :span="20" :offset="2" class="card-span-right">
          <a :href="item.file_url" target="_blank">{{item.filename}}</a><span style="color: darkgrey; padding-left: 8px">{{item.size}}</span>
        </el-col>
      </el-row>

    </el-card>

    <!--===========审核不通过原因==============-->
    <el-card v-if="$route.query.status == 2" class="box-card" style="margin: 30px 0">
      <p v-if="">审核不通过：</p>
      <p v-for="item, index in unapproved_reason_list">{{index + 1}}. {{item}}；</p>
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
        checkDetail: {
          file_list: [],
          release_file_list: []
        }
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
