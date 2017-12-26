<template>
  <div class="app-container">
    <!--====================-->
    <h3>产品基本信息</h3>
    <el-card class="box-card">
      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">产品品类</el-col>
        <el-col :span="20" :offset="1" class="card-span-right">{{checkDetail.type_name}}</el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">产品品牌</el-col>
        <el-col :span="20" :offset="1" class="card-span-right">{{checkDetail.brand_name}}</el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">产品名称</el-col>
        <el-col :span="20" :offset="1" class="card-span-right">{{checkDetail.name}}</el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">外观图片（六视图）</el-col>
        <!--<el-col :span="20" :offset="1" class="card-span-right">-->
        <el-col v-for="item,index in checkDetail.images" :offset="index === 0 ? 1:0" :key="item" :span="3" class="card-hex-vision">
          <img v-img:name style="width: 100%;height: 100%" :src="item" class="image">
        </el-col>
        <!--</el-col>-->
      </el-row>

      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">产品规格书</el-col>
        <el-col :span="20" :offset="1" class="card-span-right"><a :href="checkDetail.spec_url">{{checkDetail.spec_name}}</a></el-col>
      </el-row>

      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">产品使用说明书</el-col>
        <el-col :span="20" :offset="1" class="card-span-right"><a :href="checkDetail.instruct_url">{{checkDetail.instruct_name}}</a></el-col>
      </el-row>

    </el-card>

    <!--=========================-->
    <h3>接入方式选择</h3>
    <el-card class="box-card">
      <el-row class="card-row">
        <el-col :span="2" class="card-span-left">选择技术方案</el-col>
        <el-col :span="20" :offset="1" class="card-span-right">
          <!--<div class="card-img-tec">-->
          <!--<img style="width: 100%;height: 100%" src="" class="image">-->
          <!--</div>-->
          {{checkDetail.type_txt}}
        </el-col>
      </el-row>

      <el-row v-if="checkDetail.type_txt==='wifi'" class="card-row">
        <el-col :span="2" class="card-span-left">芯片厂商</el-col>
        <el-col :span="20" :offset="1" class="card-span-right">
          {{checkDetail.type_vendor}}
        </el-col>
      </el-row>

      <el-row v-if="checkDetail.type_txt==='wifi'" class="card-row">
        <el-col :span="2" class="card-span-left">芯片型号
        </el-col>
        <el-col :span="20" :offset="1" class="card-span-right">
          {{checkDetail.type_model}}
        </el-col>
      </el-row>

      <el-row v-if="checkDetail.type_txt==='zigbee'||checkDetail.type_txt==='bluetooth'" class="card-row">
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

    </el-card>

    <!--===========必选功能点==============-->
    <h3>必选功能点</h3>
    <el-card class="box-card">
      <el-table :data="attr_list_default"
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
    </el-card>

    <!--===========可选功能点==============-->
    <h3>可选功能点</h3>
    <el-card class="box-card">
      <el-table :data="attr_list_optional"
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
    name: 'productCheckDetail',

    data() {
      return {
        record_id: '', // 审核id
        checkDetail: '',

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
      },

      //  不通过原因列表
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
        })
      },

    },
    deactivated() {
      this.$destroy();
    }
  }

</script>

<style scoped>
  .el-form-item__content {
    width: 80%;
  }
  .card-img-tec {
    width: 300px;
    height: 200px
  }
</style>
