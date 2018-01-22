<template>
  <div class="app-container">
    <!--====================-->
    <el-button type="primary" size="small" @click="$router.go(-1)">
      <i class="el-icon-arrow-left"></i> 返回
    </el-button>
    <h3>{{business_name}}</h3>
    <el-card class="box-card">
      <el-row class="card-header" slot="header">
        <i></i>联系人信息
      </el-row>
      <el-row class="card-body">
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">联系人姓名</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">联系人手机</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts_mobile}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">职位</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts_duty}}</el-col>
        </el-row>
      </el-row>
      <el-row class="card-handle">
        <el-col :span="6" :offset="4">
          <el-button disabled type="primary" size="small">
            审核通过
          </el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <el-row class="card-header" slot="header">
        <i></i>公司/团队信息
      </el-row>
      <el-row class="card-body">
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">公司名称</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.name}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">公司地址</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.address}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">营业执照注册号</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.registration_No}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">合作品牌
          </el-col>
          <el-col :span="20" :offset="1" class="card-span-right">
            <el-tag style="margin: 0 10px 10px 0;" v-for="item in checkDetail.brands"
                    :key="item.name">{{item.brand_name}}
            </el-tag>
          </el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">合作产品
          </el-col>
          <el-col :span="20" :offset="1" class="card-span-right">
            <el-tag type="success" style="margin: 0 10px 10px 0;" v-for="item in checkDetail.type"
                    :key="item.name">
              {{item.name}}
            </el-tag>
          </el-col>
        </el-row>
      </el-row>
      <el-row class="card-handle">
        <el-col :span="6" :offset="4">
          <el-button disabled type="primary" size="small">
            审核通过
          </el-button>
        </el-col>
      </el-row>
    </el-card>
    <!--===========上传公司资质说明==============-->
    <el-card class="box-card">
      <el-row class="card-header" slot="header">
        <i></i>上传公司资质说明
      </el-row>
      <div v-for="(item,index) in checkDetail.licenses" class="license-box" :key="item.file_id">
        <el-row>
          <el-col class="license-title" :offset="4">
            {{index+1}}、{{item.filename}}
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="4">
            <img style="max-height: 300px" v-img:name alt="图片加载失败" class="card-img-size" :src="item.file_url">
          </el-col>
        </el-row>
        <el-row class="card-handle-else">
          <el-col :span="6" :offset="4">
            <el-button disabled type="primary" size="small">
              审核通过
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <!--===========复核原件==============-->
    <el-card class="box-card">
      <el-row class="card-header" slot="header">
        <i></i>复核原件
      </el-row>
      <div v-for="item in originalCheckType" class="review-license" :key="item.id">
        <el-row>
          <el-col :offset="4">
            <p>{{item.id}}、{{item.description}}</p>
          </el-col>
        </el-row>
        <el-row class="card-handle-else">
          <el-col :span="6" :offset="4">
            <el-button disabled type="primary" size="small">
              审核通过
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-card>

  </div>
</template>

<script>
    import {getReviewInfo, commitCheck} from '@/api/check';
    import {originalCheckType} from '@/utils/config'; // 复核原件类型
    import {licenseTranslate} from '@/utils';

    export default {
        name: 'enterpriseCheckDetail',

        data() {
            return {
                contactsCheck: {
                    action_type: 0, // 0=未审核,1=审核通过,2=审核未通过
                    description:'联系人信息',
                    unapproved_reason: ''
                },
                companyInfoCheck: {
                    action_type: 0,
                    description:'公司/团队信息',
                    unapproved_reason: ''
                },
                record_id: '', // 审核id
                checkDetail: {},
                business_name: '',
                originalCheckType: originalCheckType,
                action_type: 1, // 提交审核操作类型 ，1 = 通过，2 = 驳回
                approved_reason: '审核通过', // 审核原因
            }
        },
        computed: {
        },
        created() {
            this.record_id = this.$route.query.record_id;
            this.business_name = this.$route.query.business_name;
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
                    this.checkDetail = response;
                if (_this.checkDetail.licenses.length > 0) {
                    _this.checkDetail.licenses.forEach(function (item) {
                            _this.$set(item, 'action_type', 0);
                            _this.$set(item, 'url', item.file_url);
                            item.filename = licenseTranslate(item.type);
                            _this.$set(item, 'unapproved_reason', '');

                        }
                    )
                }

            })
            },

            // 图片预览
            imgPreview (e) {
                fancyBox(e.target, this.checkDetail.licenses);
            },
        },
        deactivated() {
            this.$destroy();
        }
    }
</script>

<style lang="scss">
</style>
