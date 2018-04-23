<template>
    <div class="app-container calendar-list-container">
        <div class="filter-container">
            <el-row style="margin-bottom: 20px;">
                <el-button type="primary" @click="openDialog('')">新建SDK包</el-button>
            </el-row>
            <el-dialog :before-close="handleClose" center width="700px" class="doc-dialog" title="上传SDK文件" :visible.sync="dialogVisible">
                <el-form :rules="rules" ref="uploadForm" :model="form" label-width="110px">
                    <el-form-item label="产品品类" prop="type_id">
                        <el-select :disabled="isToModify" style="width: 100%;" v-model="form.type_id" placeholder="请选择">
                            <el-option v-for="item in productTypeList"
                                       :key="item.id"
                                       :label="item.name"
                                       :value="item.id"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-if="showTypeKey" label="模组/芯片厂家" prop="technology_type_key_map">
                        <el-cascader :disabled="isToModify||cascaderDisabled" style="width: 100%;" expand-trigger="hover"
                                     v-model="form.technology_type_key_map"
                                     placeholder="请选择"
                                     :options="moduleList"
                                     :props="moduleProps"
                        >
                        </el-cascader>
                    </el-form-item>
                    <el-form-item label="SDK文件" prop="upload">
                        <el-input style="width: 75%;" readonly v-model="form.url" placeholder="请选择文件"></el-input>
                        <el-upload action="/api/index.php/admin/sdk_upload"
                                   style="display: inline-block;margin-left: 12px;"
                                   :data="form"
                                   ref="upload"
                                   accept=".zip,.gz,.rar"
                                   name="file"
                                   :auto-upload="false"
                                   :multiple="false"
                                   :show-file-list="false"
                                   :on-change="beforeZipUpload"
                                   :on-error="uploadError"
                                   :on-success="uploadSuccess"
                        >
                            <el-button type="primary">选择文件...</el-button>
                        </el-upload>
                    </el-form-item>
                    <div class="upload-tips">支持zip、gz、rar格式文件，且不超过5M</div>
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
                           :page-sizes="[15,20,30, 50]" :page-size="listQuery.limit"
                           layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>

    </div>
</template>
<style lang="scss">
    .el-cascader-menu{
        height: auto;
    }
</style>
<script>
    import { getSdkList, getWifiModuleList } from '@/api/infoUpload';
    import {getProductType} from '@/api/check'
    import { getToken } from '@/utils/auth'

    export default {
        name: 'wifi',
        data() {
            const fileNumber = (rule, value, callback) => {
                if (this.$refs.upload.uploadFiles.length === 0) {
                    callback(new Error('请选择文件！'))
                } else {
                    callback()
                }
            };
            return {
                // ====table===
                list: null,
                total: null,
                listLoading: false,
                isToModify: false,
                cascaderDisabled:false,
                showTypeKey : false,
                productTypeList:[],
                moduleList:[],
                listQuery: {
                    page: 1,
                    limit: 15,
                },
                form:{
                    type_id:'',
                    technology_type_key_map:'',
                    technology_type_key:'',
                    technology_type:1,
                    token: getToken(),
                    url:''
                },
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
            // 获取产品品类
            getProductType() {
                getProductType().then(response => {
                    this.productTypeList = response.list;
                });
            },
            getWifiModule(type_id){
                this.showTypeKey = true;
                getWifiModuleList({type_id:type_id}).then(response =>{
                    this.moduleList = response.list;
                    let _this = this;
                    if(response.list.length){
                        this.cascaderDisabled = false;
                    }
                    else{
                        this.cascaderDisabled = true;
                    }
                    this.moduleList.forEach(function (item) {
                        _this.$set(item,'module_id',item.vendor);
                        _this.$set(item,'model',item.vendor);
                    });
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
            // 上传SDK
            uploadSDK() {
                this.$refs['uploadForm'].validate((valid) => {
                    if (valid) {
                        this.$refs.upload.submit();
                    } else {
                        return false;
                    }
                });
            },
            beforeZipUpload(file){
                let _file = file.raw;
                //const isZip = _file.type.toLowerCase().indexOf('zip')>=0;
                const isLt5M = _file.size / 1024 / 1024 < 5;
                /*if (!isZip) {
                    this.$message.error('只能上传zip文件!');
                }*/
                if (!isLt5M) {
                    this.$message.error('zip文件大小不能超过 5MB!');
                }
                if(isLt5M){
                    this.form.url = _file.name;
                }
                return isLt5M;
            },
            // 上传成功的回调
            uploadSuccess(response, file, fileList) {
                if (response.code === 200) {
                    this.$message.success('上传成功！');
                    setTimeout(() => {
                        this.closeDialog();
                    }, 200);
                    this.refresh();
                } else {
                    this.$message.error(response.msg);
                }

            },
            // 上传失败的回调
            uploadError(err, file, fileList) {
                this.$message.error(err);
            },
        }
    }
</script>
