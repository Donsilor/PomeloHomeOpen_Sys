<template>
    <div class="app-container calendar-list-container">
        <div class="filter-container">
            <el-row style="margin-bottom: 20px;">
                <el-button type="primary" @click="openDialog('')">新建模板文档</el-button>
            </el-row>
            <el-dialog :before-close="handleClose" center width="700px" class="doc-dialog" title="上传文档模板" :visible.sync="dialogVisible">
                <el-form :rules="rules" ref="uploadForm" :model="form" label-width="110px">
                    <el-form-item label="文件品类" prop="type_id">
                        <el-select :disabled="isToModify" style="width: 100%;" v-model="form.type_id" placeholder="请选择">
                            <el-option v-for="item in productTypeList"
                                       :key="item.type_id"
                                       :label="item.type"
                                       :value="item.type_id"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="开发文档" prop="upload">
                        <el-input style="width: 75%;" readonly v-model="form.url" placeholder="请选择文件"></el-input>
                        <el-upload action="/api/index.php/admin/userdoc_upload"
                                   style="display: inline-block;margin-left: 12px;"
                                   :data="form"
                                   ref="upload"
                                   accept=".pdf,.doc,.docx,.ppt"
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
                    <div class="upload-tips" style="padding-left: 110px;bottom: -35px;">文件不大于50MB，支持文档格式PDF、DOC、DOCX、PPT等</div>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="closeDialog">取 消</el-button>
                    <el-button type="primary" @click="uploadSDK">确 定</el-button>
                </div>
            </el-dialog>
        </div>

        <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row
                  style="width: 100%">
            <el-table-column align="center" label="文件品类" prop="type_id">
                <template slot-scope="scope">
                    {{typesMap[scope.row.type_id]||scope.row.type_id}}
                </template>
            </el-table-column>

            <el-table-column align="center" label="文件名" prop="filename">
                <template slot-scope="scope">
                    <a :href="scope.row.url" download>{{scope.row.filename}}</a>
                </template>
            </el-table-column>

            <el-table-column align="center" label="文件大小" prop="size">
            </el-table-column>

            <el-table-column align="center" label="上传时间" prop="updated_at">
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
    import fetch from '@/utils/fetch';
    import { getToken } from '@/utils/auth'

    export default {
        name: 'enterpriseDoc',
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
                isToModify:false,
                productTypeList:[],
                typesMap:{},
                listQuery: {
                    page: 1,
                    limit: 10,
                },
                form:{
                    type_id:'',
                    token: getToken(),
                    url:''
                },
                dialogVisible:false,
                rules: {
                    type_id: [
                        { required: true, message: '请选择文件品类'},
                    ],
                    upload: [
                        { required: true, validator: fileNumber },
                    ],
                },
            }
        },
        computed: {},
        created() {
        },
        mounted() {
            this.refresh();
            this.getTypes();
        },
        methods: {
            refresh(){
                this.$store.dispatch('GetDocumentMenus');
                this.getList();
            },
            getList() {
                this.listLoading = true;
                let params = {
                    limit: this.listQuery.limit,
                    page: this.listQuery.page
                };
                fetch({
                    url:'/admin/userdoc_lists',
                    method:'post',
                    data:params
                }).then(response => {
                    this.list = response.data;
                    this.total = response.total;
                    this.listLoading = false
                })
            },
            // 获取产商文件类型列表
            getTypes() {
                fetch({
                    url:'/admin/productdoc_types',
                    method:'post',
                    data:{}
                }).then(response => {
                    let map ={};
                    this.productTypeList = response;
                    response.forEach(function (v,i) {
                        map[v.type_id] = v.type;
                    });
                    this.typesMap = map;
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
                done();
            },
            // 关闭弹框
            closeDialog() {
                this.$refs['uploadForm'].resetFields();
                this.$refs.upload.clearFiles();
                this.isToModify = false;
                this.dialogVisible = false;
            },
            openDialog(row){
                if(row){
                    this.isToModify = true;
                    this.form.type_id = parseInt(row.type_id);
                    this.form.url = row.filename;
                }
                else{
                    this.form.type_id = '';
                    this.form.url = '';
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
                let tmp = _file.name.split('.');
                const isValidType = ['PDF','DOC','DOCX','PPT'].indexOf(tmp[tmp.length-1].toUpperCase())>=0;
                const isLt50M = _file.size / 1024 / 1024 < 50;
                if (!isValidType) {
                    this.$message.error('只能上传PDF、DOC、DOCX、PPT文件!');
                }
                if (!isLt50M) {
                    this.$message.error('文件大小不能超过 50MB!');
                }
                if(isValidType && isLt50M){
                    this.form.url = _file.name;
                }
                return isValidType && isLt50M;
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
