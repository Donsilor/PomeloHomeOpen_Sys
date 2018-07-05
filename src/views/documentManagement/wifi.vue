<template>
    <div class="app-container calendar-list-container">
        <div class="filter-container">
            <el-row style="margin-bottom: 20px;">
                <el-button type="primary" @click="openDialog('')">新建SDK包</el-button>
            </el-row>
            <el-dialog :before-close="handleClose" center width="700px" class="doc-dialog" title="上传SDK文件" :visible.sync="dialogVisible">
                <el-form :rules="rules" ref="uploadForm" :model="form" label-width="110px">

                    <el-form-item  label="模组/芯片厂家" prop="technology_type_key_map">
                        <el-cascader :disabled="isToModify" clearable filterable style="width: 100%;"
                                     v-model="form.technology_type_key_map"
                                     placeholder="请选择"
                                     :options="moduleList"
                                     :props="moduleProps"
                        >
                        </el-cascader>
                    </el-form-item>
                    <el-form-item label="SDK文件" prop="upload">
                        <el-input style="width: 75%;" readonly v-model="form.url" placeholder="请选择文件"></el-input>
                        <el-upload action="/api/index.php/files/save"
                                   style="display: inline-block;margin-left: 12px;"
                                   :data="uploadForm"
                                   ref="upload"
                                   accept=".zip,.gz,.rar"
                                   name="file"
                                   :auto-upload="true"
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

            <el-table-column align="center" label="模组/芯片厂家" prop="vendor">
            </el-table-column>
            <el-table-column align="center" label="型号" prop="model">
            </el-table-column>

            <el-table-column align="center" label="包大小" prop="size">
            </el-table-column>

            <el-table-column align="center" label="上传时间" prop="updated_at">
            </el-table-column>
            <el-table-column align="center" label="最新更新人" prop="name">
            </el-table-column>

            <el-table-column align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button @click="openDialog(scope.row)" size="small" type="primary">
                        修改
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--<div v-show="!listLoading" class="pagination-container">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           :current-page.sync="listQuery.page"
                           :page-sizes="[15,20,30, 50]" :page-size="listQuery.limit"
                           layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>-->

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
    import fetch from '@/utils/fetch';
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
                list: [],
                total: null,
                listLoading: false,
                isToModify:false,
                moduleList:[],
                uploadForm:{
                    type:13,
                    token: getToken(),
                },
                form:{
                    technology_type_key_map:[],
                    type_key:'',
                    type:1,
                    url:'',
                    package_id:'',
                    sdk:{}
                },
                dialogVisible:false,
                moduleProps:{
                    children: 'model_list',
                },
                rules: {
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
            'form.technology_type_key_map'(curVal,oldVal){
                this.form.type_key = curVal[1];
            }
        },
        mounted() {
            this.refresh();
            this.getWifiModule();
        },
        methods: {
            refresh(){
                this.$store.dispatch('GetDocumentMenus');
                this.getList();
            },
            getList() {
                this.listLoading = true;
                let params = {
                    type:this.form.type,// 技术方案，1=wifi, 2=zigbee, 3=蓝牙
                };
                getSdkList(params).then(response => {
                    this.list = response.ret;
                    this.listLoading = false
                })
            },
            getWifiModule(){
                getWifiModuleList().then(response =>{
                    this.moduleList = response.wifi_list;
                    this.moduleList.forEach(item=>{
                        this.$set(item,'value',item.vendor);
                        this.$set(item,'label',item.vendor);
                        item.model_list.forEach(v=>{
                            this.$set(v,'value',v.id);
                            this.$set(v,'label',v.name);
                            //this.$delete(v,'id');
                            //this.$delete(v,'name');
                        })
                        //this.$delete(item,'vendor');
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
                    this.form.url = row.filename;
                    this.form.technology_type_key_map = [row.vendor,row.type_key];
                    this.form.package_id = row.package_id;
                }
                else{
                    this.isToModify = false;
                    this.form.url = '';
                    this.form.technology_type_key_map = [];
                    this.form.package_id = '';
                }
                this.dialogVisible = true;
            },
            // 上传SDK
            uploadSDK() {
                this.$refs['uploadForm'].validate((valid) => {
                    if (valid) {
                        let form = Object.assign({},this.form);
                        delete form.technology_type_key_map;
                        delete form.url;
                        if(!this.isToModify){
                            delete form.package_id;
                            fetch({
                                url:'/admin/sdk/add',
                                method:'post',
                                data:form
                            }).then(res=>{
                                this.$message.info('添加成功');
                                this.closeDialog();
                                this.refresh();
                            })
                        }else{
                            delete form.type;
                            delete form.type_key;
                            fetch({
                                url:'/admin/sdk/edit',
                                method:'post',
                                data:form
                            }).then(res=>{
                                this.$message.info('修改成功');
                                this.closeDialog();
                                this.refresh();
                            })
                        }
                    }
                });
            },
            beforeZipUpload(file){
                let _file = file.raw;
                const isLt5M = _file.size / 1024 / 1024 < 5;
                if (!isLt5M) {
                    this.$message.error('文件大小不能超过 5MB!');
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
                    this.form.sdk = response.result;
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
