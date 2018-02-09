<template>
    <div class="app-container calendar-list-container">
        <div class="filter-container">
            <el-row style="margin-bottom: 20px;">
                <el-button type="primary" @click="openDialog('')">新增权限</el-button>
            </el-row>
            <el-dialog :before-close="handleClose" center width="700px" class="doc-dialog" :title="dialogTitle" :visible.sync="dialogVisible">
                <el-form :rules="rules" ref="uploadForm" :model="form" label-width="110px">
                    <el-form-item label="姓名" prop="username">
                        <el-input placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input placeholder="请输入公司邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="tel">
                        <el-input placeholder="请输入电话"></el-input>
                    </el-form-item>
                    <el-form-item label="部门" prop="department">
                        <el-select placeholder="请选择所在部门">
                            <el-option v-for="item in departmentOptions"
                                       :value="item.value"
                                       :key="item.value"
                                       :label="item.label"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="职务" prop="job">
                        <el-input placeholder="请输入职务"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="closeDialog">取 消</el-button>
                    <el-button type="primary">确 定</el-button>
                </div>
            </el-dialog>
        </div>

        <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row
                  style="width: 100%">
            <el-table-column align="center" label="姓名" prop="name">
            </el-table-column>

            <el-table-column align="center" label="电话" prop="mobile">
            </el-table-column>

            <el-table-column align="center" label="部门" prop="depart">
            </el-table-column>

            <el-table-column align="center" label="职务" prop="duty">
            </el-table-column>

            <el-table-column align="center" label="最新操作记录" prop="duty">
                <template slot-scope="scope">
                    <span>{{scope.row.last_action+' '+scope.row.last_action_at}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button @click="openDialog(scope.row)" size="small" type="primary">
                        修改
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
    import { getSdkList, getWifiModuleList } from '@/api/infoUpload';
    import {getProductType} from '@/api/check'
    import { getToken } from '@/utils/auth'
    import fetch from '@/utils/fetch';

    export default {
        name: 'wifi',
        data() {
            return {
                // ====table===
                list: null,
                total: null,
                listLoading: false,
                isToModify: false,
                showTypeKey : false,
                productTypeList:[],
                moduleList:[],
                listQuery: {
                    page: 1,
                    limit: 10,
                },
                form:{
                    type_id:0,
                    technology_type_key_map:'',
                    technology_type_key:'',
                    technology_type:1,
                    token: getToken(),
                    url:''
                },
                dialogTitle:'添加权限用户',
                dialogVisible:false,
                departmentOptions:[
                    {label:'总经办',value:1},
                    {label:'前端开发部',value:2}
                ],
                moduleProps:{
                    children: 'modellist',
                    value:'module_id',
                    label:'model'
                },
                rules: {
                    username: [
                        { required: true, message: '用户姓名不能为空'},
                    ],
                    email:[
                        {required:true,message:'公司邮箱不能为空'}
                    ],
                    tel:[
                        {required:true,message:'电话不能为空'}
                    ],
                    department:[
                        {required:true,message:'请选择部门'}
                    ],
                    job:[
                        {required:true,message:'职务不能为空'}
                    ]
                },
            }
        },
        computed: {},
        created() {
        },
        watch:{
            'form.type_id'(curVal,oldVal){
                this.moduleList = [];
                if(curVal){
                    this.getWifiModule(curVal);
                }
            },
            'form.technology_type_key_map'(curVal,oldVal){
                this.form.technology_type_key = curVal[1];
            }
        },
        mounted() {
            this.refresh();
        },
        methods: {
            refresh(){
                this.$store.dispatch('GetAuthorityMenus');
                this.getList();
            },
            getList() {
                this.listLoading = true;
                let params = {
                    id:this.form.type_id,
                    limit: this.listQuery.limit,
                    page: this.listQuery.page
                };
                fetch({
                    url:'/admin/list',
                    method:'post',
                    data:params
                }).then(response => {
                    this.list = response.data;
                    this.total = response.total;
                    this.listLoading = false
                });
            },

            handleSizeChange(val) {
                this.listQuery.limit = val;
                this.getList()
            },
            handleCurrentChange(val) {
                this.listQuery.page = val;
                this.getList()
            },
            // 叉叉按钮
            handleClose(done) {
                this.$refs['uploadForm'].resetFields();
                this.isToModify = false;
                done();
            },
            // 关闭弹框
            closeDialog() {
                this.$refs['uploadForm'].resetFields();
                this.isToModify = false;
                this.dialogVisible = false;
            },
            openDialog(row){
                if(row){
                    this.isToModify = true;
                    this.form.type_id = row.type_id;
                    this.form.url = row.filename;
                    this.form.technology_type_key_map = [row.technology_module_vendor,row.technology_module_id];
                }
                else{
                    this.form.type_id = '';
                    this.form.url = '';
                    this.form.technology_type_key_map = [];
                }
                this.dialogVisible = true;
            },
        }
    }
</script>
