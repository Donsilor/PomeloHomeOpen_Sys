<template>
    <div class="app-container">
        <!--====================-->
        <el-button type="primary" size="small" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i> 返回
        </el-button>
        <h3>{{business_name}}</h3>
        <el-card class="box-card" v-if="type=='detail' ">
            <div v-if="status==1 " style="color: #67C23A;font-size: 24px;">
                审核通过 <i class="el-icon-circle-check"></i>
            </div>
            <div v-if="status==2 ">
                <p style="color: #F56C6C;font-weight: bold" >审核不通过</p>
                <p v-for="(item,index) in checkDetail.approved_reason">{{index+1}}、{{item}}</p>
            </div>
        </el-card>
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
            <el-row v-if="type=='audit' " class="card-handle">
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
                <i></i>公司/团队信息
            </el-row>
            <el-row class="card-body enterprise-audit">
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
                    <el-col :span="3" class="card-span-left">合作产品
                    </el-col>
                    <el-col :span="20" :offset="1" class="card-span-right">
                        <el-tag type="success" style="margin: 0 10px 10px 0;" v-for="item in checkDetail.type"
                                :key="item.name">
                            {{item.name}}
                        </el-tag>
                    </el-col>
                </el-row>
                <el-row class="card-row">
                    <el-col :span="3" class="card-span-left">合作品牌
                    </el-col>
                    <el-col :span="20" :offset="1" class="card-span-right">
                        <div v-for="(item,index) in checkDetail.brands" class="brand-box" :key="index">
                            <el-row>
                                <span>品牌中文：{{item.brand_name}}</span>
                            </el-row>
                            <el-row style="margin: 10px auto">
                                <span>品牌英文：{{item.manufacturer_name}}</span>
                            </el-row>
                            <el-row>
                                <img :src="item.logo" v-img:name v-if="item.logo" alt="品牌logo">
                                <img :src="item.certs" v-img:name v-if="item.certs" alt="资格证书">
                            </el-row>
                        </div>
                    </el-col>
                </el-row>

            </el-row>
            <el-row v-if="type=='audit' " class="card-handle">
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
                        <img style="max-height: 300px" v-img:name alt="图片加载失败" class="card-img-size"
                             :src="item.file_url">
                    </el-col>
                </el-row>
                <el-row v-if="type=='audit' " class="card-handle-else">
                    <el-col :span="6" :offset="4">
                        <el-button @click="item.action_type=1" type="primary" size="small">
                            <i v-show="item.action_type==1" class="el-icon-check"></i>
                            审核通过
                        </el-button>
                        <el-button @click="item.action_type=2" type="primary" size="small">
                            <i v-show="item.action_type==2" class="el-icon-check"></i>
                            审核不通过
                        </el-button>
                    </el-col>
                    <el-col :span="14" class="check-reason" v-show="item.action_type !== 0">
                        <el-row>
                            <el-col :span="4">
                                <div class="audit-result-label">审核结果：</div>
                            </el-col>
                            <el-col :span="20">
                                <el-input v-show="item.action_type == 2"
                                          type="textarea" autosize :maxlength="500"
                                          placeholder="审核未通过理由"
                                          v-model="item.unapproved_reason">

                                </el-input>
                                <div v-show="item.action_type == 1"
                                     class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </el-card>

        <!--===========复核原件==============-->
        <el-card class="box-card">
            <el-row class="card-header" slot="header">
                <i></i>复核原件
            </el-row>
            <div v-for="(item,index) in originalCheckType" class="review-license" :key="item.id">
                <el-row>
                    <el-col :offset="4">
                        <p>{{index+1}}、{{item.description}}</p>
                    </el-col>
                </el-row>
                <el-row v-if="type=='audit' " class="card-handle-else">
                    <el-col :span="6" :offset="4">
                        <el-button @click="item.action_type=1" type="primary" size="small">
                            <i v-show="item.action_type==1" class="el-icon-check"></i>
                            审核通过
                        </el-button>
                        <el-button @click="item.action_type=2" type="primary" size="small">
                            <i v-show="item.action_type==2" class="el-icon-check"></i>
                            审核不通过
                        </el-button>
                    </el-col>
                    <el-col :span="14" class="check-reason" v-show="item.action_type !== 0">
                        <el-row>
                            <el-col :span="4">
                                <div class="audit-result-label">审核结果：</div>
                            </el-col>
                            <el-col :span="20">
                                <el-input v-show="item.action_type == 2"
                                          type="textarea" autosize :maxlength="500"
                                          placeholder="审核未通过理由"
                                          v-model="item.unapproved_reason">

                                </el-input>
                                <div v-show="item.action_type == 1"
                                     class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
        </el-card>

        <!--===========审核==============-->
        <el-card v-if="type=='audit' " class="box-card audit-box" style="margin-top: 30px">
            <el-row>
                <el-col :offset="4">
                    <p style="color: #E6A23C;" v-if="unapproved_list.length">未审核：</p>
                </el-col>
            </el-row>
            <el-row v-for="(item, index) in unapproved_list">
                <el-col :offset="4">
                    <p>{{index + 1}}、{{item.prefix}}{{item.description}}还未审核；</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :offset="4">
                    <p style="color: #F56C6C;" v-if="reject_reason_list.length">审核不通过：</p>
                </el-col>
            </el-row>
            <el-row v-for="(item, index) in reject_reason_list">
                <el-col :offset="4">
                    <p>{{index + 1}}、{{item.prefix}}{{item.description}}未审核通过——{{item.unapproved_reason}}；</p>
                </el-col>
            </el-row>
            <el-row style="padding-top: 15px;">
                <el-col :span="3" :offset="4">
                    <el-button :disabled="unapproved_list.length>0||reject_reason_list>0"
                               type="primary" @click="commitCheck">提交
                    </el-button>
                </el-col>
                <el-col :span="3">
                    <el-button @click="cancelCheck">取消</el-button>
                </el-col>
            </el-row>
        </el-card>

    </div>
</template>

<script>
    import {getReviewInfo, commitCheck} from '@/api/check';
    //import {originalCheckType} from '@/utils/config'; // 复核原件类型
    import {licenseTranslate} from '@/utils';
    import {Message} from 'element-ui';

    export default {
        name: 'enterpriseToAudit',

        data() {
            return {
                contactsCheck: {
                    action_type: 0, // 0=未审核,1=审核通过,2=审核未通过
                    description: '联系人信息',
                    unapproved_reason: ''
                },
                companyInfoCheck: {
                    action_type: 0,
                    description: '公司/团队信息',
                    unapproved_reason: ''
                },
                record_id: '', // 审核id
                checkDetail: {},
                business_name: '',
                originalCheckType: [],
                action_type: 1, // 提交审核操作类型 ，1 = 通过，2 = 驳回
                approved_reason: '审核通过', // 审核原因
            }
        },
        computed: {
            unapproved_list: function () {
                let arry = [];
                if (this.contactsCheck.action_type == 0) {
                    arry.push(Object.assign({}, this.contactsCheck));
                }
                if (this.companyInfoCheck.action_type == 0) {
                    arry.push(Object.assign({}, this.companyInfoCheck));
                }
                if (this.checkDetail.licenses) {
                    this.checkDetail.licenses.forEach(function (item) {
                        if (item.action_type == 0) {
                            arry.push(Object.assign({}, item));
                        }
                    });
                }
                this.originalCheckType.forEach(function (item) {
                    if (item.action_type == 0) {
                        arry.push(Object.assign({}, item));
                    }
                });
                return arry;
            },
            reject_reason_list: function () {
                let arry = [];
                if (this.contactsCheck.action_type == 2) {
                    arry.push(Object.assign({reject_type: 'contacts'}, this.contactsCheck));
                }
                if (this.companyInfoCheck.action_type == 2) {
                    arry.push(Object.assign({reject_type: 'company'}, this.companyInfoCheck));
                }
                if (this.checkDetail.licenses) {
                    this.checkDetail.licenses.forEach(function (item) {
                        if (item.action_type == 2) {
                            arry.push(Object.assign({reject_type: 'upload'}, item));
                        }
                    });
                }
                this.originalCheckType.forEach(function (item) {
                    if (item.action_type == 2) {
                        arry.push(Object.assign({reject_type: 'copy'}, item));
                    }
                });
                return arry;
            }
        },
        created() {
            this.record_id = this.$route.query.record_id;
            this.business_name = this.$route.query.business_name;
            this.type = this.$route.query.type||'detail';
            this.status = this.$route.query.status||'0';
        },
        mounted() {
            this.$store.dispatch('GetAuditMenus');
            this.getReviewInfo();
        },
        methods: {
            // 获取审核详情
            getReviewInfo() {
                let _this = this;
                let params = {
                    record_id: _this.record_id
                };
                let temp = [];
                getReviewInfo(params).then(response => {
                    this.checkDetail = response;
                if (_this.checkDetail.licenses.length > 0) {
                    _this.checkDetail.licenses.forEach(function (item) {
                            _this.$set(item, 'action_type', 0);
                            _this.$set(item, 'prefix', '上传——');
                            _this.$set(item, 'url', item.file_url);
                            //item.description = licenseTranslate(item.type);
                            item.description = item.filename;
                            _this.$set(item, 'unapproved_reason', '');
                            temp.push({
                                action_type: 0,
                                prefix: '复核——',
                                type: item.type,
                                unapproved_reason: item.unapproved_reason,
                                description: item.description
                            });
                        }
                    )
                    _this.originalCheckType = temp;
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
                this.approved_reason = '审核通过';
                if (this.unapproved_list.length > 0) {
                    return false;
                }
                if (this.reject_reason_list.length > 0) {
                    this.action_type = 2;
                    this.approved_reason = this.reject_reason_list.map(item => {
                            let str = '';
                    if (item.prefix) {
                        str += item.prefix;
                    }
                    str += item.description + '未审核通过';
                    str += item.unapproved_reason ? '——' + item.unapproved_reason : '';
                    return str;
                    /*return {
                        title: str,
                        reject_type: item.reject_type,
                        type: item.type || ''
                    };*/
                }).join('|');
                }
                let params = {
                    record_id: this.record_id,
                    action_type: this.action_type,
                    approved_reason: this.approved_reason
                };
                this.$confirm('确认提交？').then(() => {
                    commitCheck(params).then(response => {
                    if (response.res
            )
                {
                    Message({
                        message: '审核成功',
                        type: 'success',
                        duration: 2 * 1000
                    });
                    this.$router.go(-1);
                }
            })
            })
                ;
            },

            // 取消审核
            cancelCheck() {
                this.$confirm('确认取消？')
                    .then(() => {
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
    .enterprise-audit{
    .brand-box{
        padding: 0;
        margin-bottom: 30px;
        position:relative;
    &:last-child{
         margin-bottom: 0;
     }
    img{
        max-height: 120px;
        margin-right: 15px;
    }
    }
    }

</style>
