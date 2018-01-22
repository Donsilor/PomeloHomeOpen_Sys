<template>
  <div class="app-container">
    <!--====================-->
    <el-button type="primary" size="small" @click="$router.go(-1)">
      <i class="el-icon-arrow-left"></i> 返回
    </el-button>
    <h3>{{business_name}}</h3>
    <el-card class="box-card golive-box">
      <el-row class="card-header" slot="header">
        <i></i>V1.0版本信息
      </el-row>
      <el-row class="card-body">
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">版本号</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">V 3.10.1</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">版本说明</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">
            <p>- “大神帮我P个图”、“你问我答”等部分主题开放评论上传图片功能</p>
            <p>- 同一条动态被赞过多时，可设置这条不再提醒我</p>
          </el-col>
        </el-row>
        <el-row class="card-handle-else">
          <el-col :span="6" :offset="4">
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核通过
            </el-button>
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核不通过
            </el-button>
          </el-col>
          <el-col :span="14" class="check-reason" v-show="0">
            <el-row>
              <el-col :span="4">
                <div class="audit-result-label">审核结果：</div>
              </el-col>
              <el-col :span="20">
                <el-input
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                >

                </el-input>
                <div
                        class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">手机端控制页</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">
            <a href="" download="">
              <svg-icon icon-class="zip"/>
              空气净化器html5包.zip
            </a>
            <span class="dark-gray">329kb</span>
          </el-col>
        </el-row>
        <el-row class="card-handle-else">
          <el-col :span="6" :offset="4">
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核通过
            </el-button>
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核不通过
            </el-button>
          </el-col>
          <el-col :span="14" class="check-reason" v-show="0">
            <el-row>
              <el-col :span="4">
                <div class="audit-result-label">审核结果：</div>
              </el-col>
              <el-col :span="20">
                <el-input
                          type="textarea" autosize :maxlength="500"
                          placeholder="审核未通过理由"
                          >

                </el-input>
                <div
                     class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">Pad端控制页</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">
            <a href="" download="">
              <svg-icon icon-class="zip"/>
              空气净化器html5包.zip
            </a>
            <span class="dark-gray">329kb</span>
          </el-col>
        </el-row>
        <el-row class="card-handle-else">
          <el-col :span="6" :offset="4">
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核通过
            </el-button>
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核不通过
            </el-button>
          </el-col>
          <el-col :span="14" class="check-reason" v-show="0">
            <el-row>
              <el-col :span="4">
                <div class="audit-result-label">审核结果：</div>
              </el-col>
              <el-col :span="20">
                <el-input
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                >

                </el-input>
                <div
                        class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">固件</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">
            <a href="" download="">
              <svg-icon icon-class="zip"/>
              空气净化器html5包.zip
            </a>
            <span class="dark-gray">329kb</span>
          </el-col>
        </el-row>
        <el-row class="card-handle-else">
          <el-col :span="6" :offset="4">
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核通过
            </el-button>
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核不通过
            </el-button>
          </el-col>
          <el-col :span="14" class="check-reason" v-show="0">
            <el-row>
              <el-col :span="4">
                <div class="audit-result-label">审核结果：</div>
              </el-col>
              <el-col :span="20">
                <el-input
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                >

                </el-input>
                <div
                        class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-row>
    </el-card>
    <el-card class="box-card golive-box">
      <el-row class="card-header" slot="header">
        <i></i>上线资料
      </el-row>
      <el-row class="card-body">
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">测试报告</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">
            <a href="" download="">
              <svg-icon icon-class="zip"/>
              空气净化器html5包.zip
            </a>
            <span class="dark-gray">329kb</span>
          </el-col>
        </el-row>
        <el-row class="card-handle-else">
          <el-col :span="6" :offset="4">
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核通过
            </el-button>
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核不通过
            </el-button>
          </el-col>
          <el-col :span="14" class="check-reason" v-show="0">
            <el-row>
              <el-col :span="4">
                <div class="audit-result-label">审核结果：</div>
              </el-col>
              <el-col :span="20">
                <el-input
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                >

                </el-input>
                <div
                        class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">已知问题清单</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">
            <a href="" download="">
              <svg-icon icon-class="zip"/>
              空气净化器html5包.zip
            </a>
            <span class="dark-gray">329kb</span>
          </el-col>
        </el-row>
        <el-row class="card-handle-else">
          <el-col :span="6" :offset="4">
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核通过
            </el-button>
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核不通过
            </el-button>
          </el-col>
          <el-col :span="14" class="check-reason" v-show="0">
            <el-row>
              <el-col :span="4">
                <div class="audit-result-label">审核结果：</div>
              </el-col>
              <el-col :span="20">
                <el-input
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                >

                </el-input>
                <div
                        class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品测试样机（含新外包装）</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.registration_No}}</el-col>
        </el-row>
        <el-row class="card-handle-else">
          <el-col :span="6" :offset="4">
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核通过
            </el-button>
            <el-button  type="primary" size="small">
              <i  class="el-icon-check"></i>
              审核不通过
            </el-button>
          </el-col>
          <el-col :span="14" class="check-reason" v-show="0">
            <el-row>
              <el-col :span="4">
                <div class="audit-result-label">审核结果：</div>
              </el-col>
              <el-col :span="20">
                <el-input
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                >

                </el-input>
                <div
                        class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-row>
    </el-card>
    <!--=========================-->
  </div>
</template>

<script>
    import {getReviewInfo, commitCheck} from '@/api/check';
    import {originalCheckType} from '@/utils/config'; // 复核原件类型
    import {licenseTranslate} from '@/utils';
    import {Message} from 'element-ui';

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
            unapproved_list:function () {
                let arry = [];
                if(this.contactsCheck.action_type==0){
                    arry.push(Object.assign({},this.contactsCheck));
                }
                if(this.companyInfoCheck.action_type==0){
                    arry.push(Object.assign({},this.companyInfoCheck));
                }
                if(this.checkDetail.licenses){
                    this.checkDetail.licenses.forEach(function (item) {
                        if(item.action_type==0){
                            arry.push(Object.assign({},item));
                        }
                    });
                }
                return arry;
            },
            reject_reason_list:function () {
                let arry = [];
                if(this.contactsCheck.action_type==2){
                    arry.push(Object.assign({},this.contactsCheck));
                }
                if(this.companyInfoCheck.action_type==2){
                    arry.push(Object.assign({},this.companyInfoCheck));
                }
                if(this.checkDetail.licenses){
                    this.checkDetail.licenses.forEach(function (item) {
                        if(item.action_type==2){
                            arry.push(Object.assign({},item));
                        }
                    });
                }
                return arry;
            }
        },
        created() {
            this.record_id = this.$route.query.record_id;
            this.business_name = this.$route.query.business_name;
        },
        mounted() {
            //this.getReviewInfo();
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

            // 提交审核
            commitCheck() {
                this.action_type = 1;
                if (this.unapproved_list.length>0) {
                    return false;
                }
                if(this.reject_reason_list.length>0){
                    this.action_type = 2;
                }
                let params = {
                    record_id: this.record_id,
                    action_type: this.action_type,
                    approved_reason: this.approved_reason
                };
                this.$confirm('确认提交？').then(()=>{
                    commitCheck(params).then(response => {
                        if (response.res) {
                            Message({
                                message: '审核成功',
                                type: 'success',
                                duration: 2 * 1000
                            });
                            this.$router.go(-1);
                        }
                    })
                });
            },

            // 取消审核
            cancelCheck() {
                this.$confirm('确认取消？')
                    .then(()=> {
                        this.$router.go(-1);
                    });
            }
        },
        deactivated() {
            this.$destroy();
        }
    }
</script>

<style lang="scss">
</style>
