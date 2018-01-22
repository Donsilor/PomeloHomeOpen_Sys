<template>
  <div class="app-container">
    <!--====================-->
    <el-button type="primary" size="small" @click="$router.go(-1)">
      <i class="el-icon-arrow-left"></i> 返回
    </el-button>
    <h3>{{business_name}}</h3>
    <el-card class="box-card">
      <el-row class="card-header" slot="header">
        <i></i>产品基本信息
      </el-row>
      <el-row class="card-body">
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品品类</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品品牌</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts_mobile}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品名称</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts_duty}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品型号</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts_duty}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品图片（六观图）</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts_duty}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品规格书</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts_duty}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品使用说明书</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts_duty}}</el-col>
        </el-row>
      </el-row>
      <el-row class="card-handle">
        <el-col :span="6" :offset="4">
          <el-button @click="contactsCheck.action_type=1" type="primary" size="small">
            <i v-show="contactsCheck.action_type==1" class="el-icon-check"></i>
            审核通过
          </el-button>
          <el-button @click="contactsCheck.action_type=2" type="primary" size="small">
            <i v-show="contactsCheck.action_type==2" class="el-icon-check"></i>
            审核不通过
          </el-button>
        </el-col>
        <el-col :span="14" class="check-reason" v-show="contactsCheck.action_type !== 0">
          <el-row>
            <el-col :span="4">
              <div class="audit-result-label">审核结果：</div>
            </el-col>
            <el-col :span="20">
              <el-input v-show="contactsCheck.action_type == 2"
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                        v-model="contactsCheck.unapproved_reason">

              </el-input>
              <div v-show="contactsCheck.action_type == 1"
                   class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <el-row class="card-header" slot="header">
        <i></i>技术方案选择
      </el-row>
      <el-row class="card-body">
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">选择技术方案</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.name}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">模组/芯片信息</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.address}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">型号</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.registration_No}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">配网方式</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.registration_No}}</el-col>
        </el-row>
      </el-row>
      <el-row class="card-handle">
        <el-col :span="6" :offset="4">
          <el-button @click="companyInfoCheck.action_type=1" type="primary" size="small">
            <i v-show="companyInfoCheck.action_type==1" class="el-icon-check"></i>
            审核通过
          </el-button>
          <el-button @click="companyInfoCheck.action_type=2" type="primary" size="small">
            <i v-show="companyInfoCheck.action_type==2" class="el-icon-check"></i>
            审核不通过
          </el-button>
        </el-col>
        <el-col :span="14" class="check-reason" v-show="companyInfoCheck.action_type !== 0">
          <el-row>
            <el-col :span="4">
              <div class="audit-result-label">审核结果：</div>
            </el-col>
            <el-col :span="20">
              <el-input v-show="companyInfoCheck.action_type == 2"
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                        v-model="companyInfoCheck.unapproved_reason">

              </el-input>
              <div v-show="companyInfoCheck.action_type == 1"
                   class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <!--=========================-->
    <el-card class="box-card">
      <el-row class="card-header" slot="header">
        <i></i>必选功能点
      </el-row>
      <el-row>
        <el-table :data="must_fps" highlight-current-row stripe fit style="width:100%;">
          <el-table-column align="center" label="Stream_ID" prop="id">
          </el-table-column>
          <el-table-column align="center" label="参数名称" prop="name">
          </el-table-column>
          <el-table-column align="center" label="value" prop="value">
          </el-table-column>
          <el-table-column align="center" label="是否开启" prop="isOpen">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.isOpen" disabled></el-switch>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row class="card-handle">
        <el-col :span="6" :offset="4">
          <el-button @click="companyInfoCheck.action_type=1" type="primary" size="small">
            <i v-show="companyInfoCheck.action_type==1" class="el-icon-check"></i>
            审核通过
          </el-button>
          <el-button @click="companyInfoCheck.action_type=2" type="primary" size="small">
            <i v-show="companyInfoCheck.action_type==2" class="el-icon-check"></i>
            审核不通过
          </el-button>
        </el-col>
        <el-col :span="14" class="check-reason" v-show="companyInfoCheck.action_type !== 0">
          <el-row>
            <el-col :span="4">
              <div class="audit-result-label">审核结果：</div>
            </el-col>
            <el-col :span="20">
              <el-input v-show="companyInfoCheck.action_type == 2"
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                        v-model="companyInfoCheck.unapproved_reason">

              </el-input>
              <div v-show="companyInfoCheck.action_type == 1"
                   class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>

    <!--===========复核原件==============-->
    <el-card class="box-card">
      <el-row class="card-header" slot="header">
        <i></i>可选功能点
      </el-row>
      <el-table :data="opt_fps" highlight-current-row stripe fit style="width:100%;">
        <el-table-column align="center" label="Stream_ID" prop="id">
        </el-table-column>
        <el-table-column align="center" label="参数名称" prop="name">
        </el-table-column>
        <el-table-column align="center" label="value" prop="value">
        </el-table-column>
        <el-table-column align="center" label="是否开启" prop="isOpen">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.isOpen" disabled></el-switch>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="card-handle">
        <el-col :span="6" :offset="4">
          <el-button @click="companyInfoCheck.action_type=1" type="primary" size="small">
            <i v-show="companyInfoCheck.action_type==1" class="el-icon-check"></i>
            审核通过
          </el-button>
          <el-button @click="companyInfoCheck.action_type=2" type="primary" size="small">
            <i v-show="companyInfoCheck.action_type==2" class="el-icon-check"></i>
            审核不通过
          </el-button>
        </el-col>
        <el-col :span="14" class="check-reason" v-show="companyInfoCheck.action_type !== 0">
          <el-row>
            <el-col :span="4">
              <div class="audit-result-label">审核结果：</div>
            </el-col>
            <el-col :span="20">
              <el-input v-show="companyInfoCheck.action_type == 2"
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                        v-model="companyInfoCheck.unapproved_reason">

              </el-input>
              <div v-show="companyInfoCheck.action_type == 1"
                   class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>

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
                must_fps:[//必选功能点
                    {id:'switch',name:'开/关',value:'on/off',isOpen:false},
                    {id:'mode',name:'模式',value:'auto--cold',isOpen:false},
                ],
                opt_fps:[//可选功能点
                    {id:'switch',name:'开/关',value:'on/off',isOpen:true},
                    {id:'mode',name:'模式',value:'auto--cold',isOpen:true},
                    {id:'wind_up_down',name:'风速',value:'low/normalhigh/auto',isOpen:true},
                ],
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
