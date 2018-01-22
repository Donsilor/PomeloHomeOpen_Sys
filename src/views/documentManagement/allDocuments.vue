<template>
    <div class="app-container calendar-list-container">
        <div class="filter-container">
            <el-row style="margin-bottom: 20px;">
                <el-button type="primary" @click="uploadSDK">新建SDK包</el-button>
            </el-row>
            <el-dialog center width="700px" class="doc-dialog" title="上传SDK文件" :visible.sync="dialogVisible">
                <el-form :model="form" label-width="100px">
                    <el-form-item label="产品品类">
                        <el-select style="width: 100%;" v-model="form.type" placeholder="请选择"></el-select>
                    </el-form-item>
                    <el-form-item label="模组/芯片厂家" >
                        <el-select style="width: 100%;" v-model="form.com" placeholder="请选择"></el-select>
                    </el-form-item>
                    <el-form-item label="SDK文件">
                        <el-input style="width: 75%;" readonly v-model="form.url" placeholder="请上传文件"></el-input>
                        <el-upload action=""
                                   style="display: inline-block;margin-left: 12px;"
                                   :before-upload="beforeZipUpload"
                        >
                            <el-button type="primary">选择文件...</el-button>
                            <!--<div slot="tip" class="el-upload_tip">只能上传zip文件，且不超过5M</div>-->
                        </el-upload>
                    </el-form-item>
                    <div class="upload-tips">只能上传zip文件，且不超过5M</div>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </div>
            </el-dialog>
            <el-form :inline="true" :model="queryCondition" ref="queryCondition" class="demo-form-inline">
                <el-form-item label="公司名称" prop="business_name">
                    <el-input v-model="queryCondition.business_name" placeholder="公司名称"></el-input>
                </el-form-item>

                <el-form-item label="联系人" prop="contacts">
                    <el-input v-model="queryCondition.contacts" placeholder="联系人"></el-input>
                </el-form-item>

                <el-form-item label="联系手机" prop="contacts_mobile">
                    <el-input v-model="queryCondition.contacts_mobile" placeholder="联系手机"></el-input>
                </el-form-item>

                <el-form-item label="提交时间" prop="created_date">
                    <el-date-picker v-model="queryCondition.created_date"
                                    type="datetimerange"
                                    start-placeholder="选择开始日期"
                                    end-placeholder="选择结束日期"
                                    align="left"
                                    format="yyyy-MM-dd HH:mm:ss"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-search" @click="getList">查询</el-button>
                    <el-button @click="resetForm('queryCondition')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row
                  style="width: 100%">

            <!--<el-table-column align="center"  label="record_id" prop="record_id" width="100">-->
            <!--</el-table-column>-->

            <el-table-column align="center" label="公司" prop="business_name">
            </el-table-column>

            <el-table-column align="center" label="联系人" prop="business_contacts">
            </el-table-column>

            <el-table-column align="center" label="联系手机" prop="business_contacts_mobile">
            </el-table-column>

            <el-table-column align="center" label="提交时间" prop="created_at_txt">
            </el-table-column>

            <!--<el-table-column align="center" class-name="status-col" label="状态" prop="status_txt" width="110">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status | statusFilter">{{scope.row.status_txt}}</el-tag>
                </template>
            </el-table-column>-->

            <el-table-column align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.status!='published'" size="small" type="success"
                               @click="goCheckDetail(scope.row)">
                        <!--<svg-icon icon-class="check2"/>-->
                        进入审核
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <div v-show="!listLoading" class="pagination-container">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           :current-page.sync="listQuery.page"
                           :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit"
                           layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>

    </div>
</template>

<script>
    import {getReviewList} from '@/api/check'
    import {parseTime, transDictValue} from '@/utils'
    import {statusFilter} from '@/utils/filter'

    export default {
        name: 'enterPriseCheckPengding',

        data() {
            return {
                // ====table===
                list: null,
                total: null,
                listLoading: false,
                listQuery: {
                    page: 1,
                    limit: 10,
                },
                // =====查询条件=====
                queryCondition: {
                    business_name: '',
                    contacts: '',
                    contacts_mobile: '',
                    created_date: '',
                    created_start: this.created_start,
                    created_end: '',
                },
                form:{
                    type:'',
                    com:'',
                    url:''
                },
                dialogVisible:false
            }
        },
        computed: {},
        created() {
            //console.log(transDictValue('企业审核', 'checkType'));
        },
        mounted() {
            this.getList();
        },
        activated() {
            this.getList();
        },
        methods: {
            getList() {
                if (this.queryCondition.created_date[0]) {
                    this.queryCondition.created_start = parseTime(this.queryCondition.created_date[0], '{y}-{m}-{d} {h}:{i}:{s}');
                    this.queryCondition.created_end = parseTime(this.queryCondition.created_date[1], '{y}-{m}-{d} {h}:{i}:{s}');
                } else {
                    this.queryCondition.created_start = '';
                    this.queryCondition.created_end = '';
                }
                this.listLoading = true;
                let params = {
                    type: 1, // 1 = 企业审核，2 = 合作产品审核，3 = 产品创建审核， 4 = 产品上线审核
                    status: 0, // 0 = 审批中，1 = 审批通过，2 = 审批不通过
                    limit: this.listQuery.limit,
                    page: this.listQuery.page
                };
                Object.assign(params, this.queryCondition);
                getReviewList(params).then(response => {
                    console.log('企业待审核列表', response);
                    this.list = response.data;
                    this.total = response.total;
                    this.listLoading = false
                })
            },

            // 查询条件重置
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            // 跳转到待审核详情页
            goCheckDetail(row) {
                console.log('row', row);
                row.approved_user = ''; // 防止为null时报错
                row.product_brand_name = ''; // 使详情页的面包屑名称显示为企业名称
                this.$router.push({path: '/auditManagement/enterpriseToAudit', query: row});
            },

            handleSizeChange(val) {
                this.listQuery.limit = val;
                this.getList()
            },
            handleCurrentChange(val) {
                this.listQuery.page = val;
                this.getList()
            },
            uploadSDK(row){
                this.dialogVisible = true;
            },
            beforeZipUpload(file){
                const isZip = file.type === 'application/zip';
                const isLt5M = file.size / 1024 / 1024 < 5;
                if (!isZip) {
                    this.$message.error('只能上传zip文件!');
                }
                if (!isLt5M) {
                    this.$message.error('zip文件大小不能超过 5MB!');
                }
                this.form.url = file.name;
                return isZip && isLt5M;
            }
        }
    }
</script>
