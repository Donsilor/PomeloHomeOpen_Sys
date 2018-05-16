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
        <el-card class="box-card golive-box">
            <el-row class="card-header" slot="header">
                <i></i>{{checkDetail.version_no}}版本信息
            </el-row>
            <el-row class="card-body">
                <el-row class="card-row">
                    <el-col :span="3" class="card-span-left">版本号</el-col>
                    <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.version_no}}</el-col>
                </el-row>
                <el-row class="card-row">
                    <el-col :span="3" class="card-span-left">版本说明</el-col>
                    <el-col :span="16" :offset="1" class="card-span-right">
                        {{checkDetail.des}}
                    </el-col>
                </el-row>
                <el-row v-if="type=='audit' " class="card-handle-else">
                    <el-col :span="6" :offset="4">
                        <el-button @click="version_info.action_type=1" type="primary" size="small">
                            <i v-show="version_info.action_type==1"  class="el-icon-check"></i>
                            审核通过
                        </el-button>
                        <el-button @click="version_info.action_type=2"  type="primary" size="small">
                            <i v-show="version_info.action_type==2" class="el-icon-check"></i>
                            审核不通过
                        </el-button>
                    </el-col>
                    <el-col :span="14" class="check-reason" v-show="version_info.action_type!=0">
                        <el-row>
                            <el-col :span="4">
                                <div class="audit-result-label">审核结果：</div>
                            </el-col>
                            <el-col :span="20">
                                <el-input v-show="version_info.action_type == 2"
                                          type="textarea" autosize :maxlength="500"
                                          placeholder="审核未通过理由"

                                >

                                </el-input>
                                <div v-show="version_info.action_type == 1"
                                     class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <template v-for="item in checkDetail.file_list">
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">{{item.type_txt}}</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <a :href="item.file_url" target="_blank" download>
                                <svg-icon icon-class="zip"/>
                                {{item.filename}}
                            </a>
                            <span class="dark-gray">{{item.size}}</span>
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
                </template>
            </el-row>
        </el-card>
        <el-card class="box-card golive-box">
            <el-row class="card-header" slot="header">
                <i></i>上线资料
            </el-row>
            <el-row class="card-body">
                <template v-for="item in checkDetail.release_file_list">
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">{{item.type_txt}}</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <a :href="item.file_url" target="_blank" download>
                                <svg-icon icon-class="zip"/>
                                {{item.filename}}
                            </a>
                            <span class="dark-gray">{{item.size}}</span>
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
                </template>
            </el-row>
        </el-card>
        <!--=========================-->
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
    import {Message} from 'element-ui';

    export default {
        name: 'goLiveToAudit',

        data() {
            return {
                version_info: {
                    action_type: 0, // 0=未审核,1=审核通过,2=审核未通过
                    description:'版本信息',
                    unapproved_reason: ''
                },
                record_id: '', // 审核id
                checkDetail: {},
                business_name: '',
                action_type: 1, // 提交审核操作类型 ，1 = 通过，2 = 驳回
                approved_reason: '审核通过', // 审核原因
            }
        },
        computed: {
            unapproved_list:function () {
                let arry = [];
                if(this.version_info.action_type==0){
                    arry.push(Object.assign({},this.version_info));
                }
                if(this.checkDetail.file_list){
                    this.checkDetail.file_list.forEach(function (item) {
                        if(item.action_type==0){
                            arry.push(Object.assign({},item));
                        }
                    });
                }
                if(this.checkDetail.release_file_list){
                    this.checkDetail.release_file_list.forEach(function (item) {
                        if(item.action_type==0){
                            arry.push(Object.assign({},item));
                        }
                    });
                }
                return arry;
            },
            reject_reason_list:function () {
                let arry = [];
                if(this.version_info.action_type==2){
                    arry.push(Object.assign({},this.version_info));
                }
                if(this.checkDetail.file_list){
                    this.checkDetail.file_list.forEach(function (item) {
                        if(item.action_type==2){
                            arry.push(Object.assign({},item));
                        }
                    });
                }
                if(this.checkDetail.release_file_list){
                    this.checkDetail.release_file_list.forEach(function (item) {
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
                getReviewInfo(params).then(response => {
                    this.checkDetail = response;
                    if (_this.checkDetail.file_list.length > 0) {
                        _this.checkDetail.file_list.forEach(function (item) {
                                _this.$set(item, 'action_type', 0);
                                _this.$set(item, 'unapproved_reason', '');
                                _this.$set(item, 'description', item.type_txt);
                            }
                        )
                    }
                    if (_this.checkDetail.release_file_list.length > 0) {
                        _this.checkDetail.release_file_list.forEach(function (item) {
                                _this.$set(item, 'action_type', 0);
                                _this.$set(item, 'unapproved_reason', '');
                                _this.$set(item, 'description', item.type_txt);
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
