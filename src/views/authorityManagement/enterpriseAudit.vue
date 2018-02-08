<template>
    <div class="app-container calendar-list-container">
        <div class="filter-container">
            <el-row style="margin-bottom: 20px;">
                <el-button type="primary" @click="openDialog('')">新增权限</el-button>
            </el-row>
            <el-dialog :before-close="handleClose" center width="700px" class="doc-dialog" :title="dialogTitle" :visible.sync="dialogVisible">
                <el-form :rules="rules" ref="uploadForm" :model="form" label-width="110px">
                    <el-form-item label="姓名" prop="type_id">
                        <el-input placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="type_id">
                        <el-input placeholder="请输入公司邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="type_id">
                        <el-input placeholder="请输入电话"></el-input>
                    </el-form-item>
                    <el-form-item v-if="showTypeKey" label="部门" prop="technology_type_key_map">
                        <el-select placeholder="请选择所在部门">

                        </el-select>
                    </el-form-item>
                    <el-form-item label="职务" prop="type_id">
                        <el-input placeholder="请输入职务"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="closeDialog">取 消</el-button>
                    <el-button type="primary" @click="uploadSDK">确 定</el-button>
                </div>
            </el-dialog>
        </div>

        <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row
                  style="width: 100%">
            <el-table-column align="center" label="品类" prop="type_name">
            </el-table-column>

            <el-table-column align="center" label="模组/芯片厂家" prop="technology_module_vendor">
            </el-table-column>

            <el-table-column align="center" label="型号" prop="technology_module_model">
            </el-table-column>

            <el-table-column align="center" label="包大小" prop="size">
            </el-table-column>

            <el-table-column align="center" label="上传时间" prop="updated_at_txt">
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
                    type_id:'',
                    technology_type_key_map:'',
                    technology_type_key:'',
                    technology_type:1,
                    token: getToken(),
                    url:''
                },
                dialogTitle:'添加权限用户',
                dialogVisible:false,
                moduleProps:{
                    children: 'modellist',
                    value:'module_id',
                    label:'model'
                },
                rules: {
                    type_id: [
                        { required: true, message: '请选择产品品类'},
                    ],
                    technology_type_key_map: [
                        { required: true,  validator: function (rule, value, callback) {
                            if(!value[1]){
                                callback('请选择模组/芯片厂家');
                            }else{
                                callback()
                            }
                        },trigger:'blur' },
                    ],
                    upload: [
                        { required: true, validator: fileNumber,trigger:'change' },
                    ],
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
            this.getProductType();
        },
        methods: {
            refresh(){
                this.$store.dispatch('GetDocumentMenus');
                this.getList();
            },
            getList() {
                this.listLoading = true;
                let params = {
                    technology_type:this.form.technology_type,// 技术方案，1=wifi, 2=zigbee, 3=蓝牙
                    limit: this.listQuery.limit,
                    page: this.listQuery.page
                };
                getSdkList(params).then(response => {
                    this.list = response.data;
                    this.total = response.total;
                    this.listLoading = false
                })
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
                this.$refs.upload.clearFiles();
                this.isToModify = false;
                this.showTypeKey = false;
                done();
            },
            // 关闭弹框
            closeDialog() {
                this.$refs['uploadForm'].resetFields();
                this.$refs.upload.clearFiles();
                this.isToModify = false;
                this.showTypeKey = false;
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
