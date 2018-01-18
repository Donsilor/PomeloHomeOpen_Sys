<template>
    <div class="app-container">
        <!--====================-->
        <el-button type="primary" size="small" @click="$router.go(-1)">
            <i class="el-icon-arrow-left"></i> 返回
        </el-button>
        <h3>{{data.company_name}}</h3>
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
                <el-col :span="5" :offset="4">
                    <el-button @click="contactsCheck.action_type=1" type="primary" size="small">审核通过</el-button>
                    <el-button @click="contactsCheck.action_type=2" type="primary" size="small">审核不通过</el-button>
                </el-col>
                <el-col :span="14" class="check-reason" v-show="contactsCheck.action_type !== 0">
                    <el-row>
                        <el-col :span="4">
                            <div class="audit-result-label">审核结果：</div>
                        </el-col>
                        <el-col :span="20">
                            <el-input v-show="contactsCheck.action_type == 2"
                                      type="textarea" autosize :maxlength="500"
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
                <el-col :span="5" :offset="4">
                    <el-button @click="companyInfoCheck.action_type=1" type="primary" size="small">审核通过</el-button>
                    <el-button @click="companyInfoCheck.action_type=2" type="primary" size="small">审核不通过</el-button>
                </el-col>
                <el-col :span="14" class="check-reason" v-show="companyInfoCheck.action_type !== 0">
                    <el-row>
                        <el-col :span="4">
                            <div class="audit-result-label">审核结果：</div>
                        </el-col>
                        <el-col :span="20">
                            <el-input v-show="companyInfoCheck.action_type == 2"
                                      type="textarea" autosize :maxlength="500"
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
            <div v-for="item in checkDetail.licenses" class="license-box" :key="item.file_id">
                <p style="color: darkgray">{{item.filename}}</p>
                <div>
                    <img style="max-height: 300px" v-img:name alt="图片加载失败" class="card-img-size" :src="item.file_url">
                </div>
                <el-row class="card-handle">
                    <el-col :span="5">
                        <el-button @click="item.action_type=1" type="primary" size="small">审核通过</el-button>
                        <el-button @click="item.action_type=2" type="primary" size="small">审核不通过</el-button>
                    </el-col>
                    <el-col :span="16" class="check-reason" v-show="item.action_type !== 0">
                        <el-row>
                            <el-col :span="4">
                                <div class="audit-result-label">审核结果：</div>
                            </el-col>
                            <el-col :span="20">
                                <el-input v-show="item.action_type == 2"
                                          type="textarea" autosize :maxlength="500"
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
            <div v-for="item in originalCheckType" :key="item.file_id">
                <p style="color: darkgray">{{item.id}}、{{item.description}}</p>
                <el-row class="card-handle-else">
                    <el-col :span="5">
                        <el-button @click="item.action_type=1" type="primary" size="small">审核通过</el-button>
                        <el-button @click="item.action_type=2" type="primary" size="small">审核不通过</el-button>
                    </el-col>
                    <el-col :span="16" class="check-reason" v-show="item.action_type !== 0">
                        <el-row>
                            <el-col :span="4">
                                <div class="audit-result-label">审核结果：</div>
                            </el-col>
                            <el-col :span="20">
                                <el-input v-show="item.action_type == 2"
                                          type="textarea" autosize :maxlength="500"
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
        <el-card class="box-card" style="margin: 30px 0">
            <p v-if="unapproved_reason_list.length">审核不通过：</p>
            <p v-for="item, index in unapproved_reason_list">{{index + 1}}. {{item.reason}}；</p>
            <div style="padding: 30px 0">
                <el-col :span="4">
                    <el-button type="primary" @click="commitCheck">提交</el-button>
                </el-col>
                <el-col :span="4">
                    <el-button @click="cancelCheck">取消</el-button>
                </el-col>
            </div>
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
            const query = this.$route.query;
            return {
                data: {
                    company_name: query.business_name
                },
                contactsCheck: {
                    action_type: 0, // 0=未审核,1=审核通过,2=审核未通过
                    unapproved_reason: '联系人信息未审核通过'
                },
                companyInfoCheck: {
                    action_type: 0,
                    unapproved_reason: '公司/团队信息未审核通过'
                },
                copyLicenses: [],
                unapproved_reason_list: [],
                record_id: '', // 审核id
                checkDetail: '',
                originalCheckType: originalCheckType,
                action_type: null, // 提交审核操作类型 ，1 = 通过，2 = 驳回
                approved_reason: '', // 审核原因
                licensesImgs: []
            }
        },
        computed: {},
        created() {
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
                    this.checkDetail = response;
                    if (_this.checkDetail.licenses.length > 0) {
                        _this.checkDetail.licenses.forEach(fu nction (item) {
                                _this.$set(item, 'action_type', 0);
                                _this.$set(item, 'url', item.file_url);
                                item.filename = licenseTranslate(item.type);
                                _this.$set(item, 'unapproved_reason', item.filename + '未审核通过');

                            }
                        )
                    }

                })
            },

            // 图片预览
            imgPreview (e) {
                fancyBox(e.target, this.checkDetail.licenses);
            },

            // 生成审核不通过列表
            generateReason(checkProp, type) {
                let _this = this;
                if (type === 2) {
                    this.unapproved_reason_list.push({checkProp, reason});
                } else if (type === 1) {
                    for (let i = 0; i < _this.unapproved_reason_list.length; i++) {
                        if (_this.unapproved_reason_list[i].checkProp === checkProp) {
                            _this.unapproved_reason_list.splice(i, 1)
                            break;
                        }
                    }
                }
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
                            _this.approved_reason = _this.approved_reason + '|' + _this.unapproved_reason_list[i].reason;
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
                console.log('审核入参', params);
                commitCheck(params).then(response => {
                    if (response.res) {
                        console.log('提交成功');
                        Message({
                            message: '审核成功',
                            type: 'success',
                            duration: 2 * 1000
                        });
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

<style lang="scss">
</style>
