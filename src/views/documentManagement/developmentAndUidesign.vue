<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-row style="margin-bottom: 20px;">
        <el-button type="primary" @click="openDialog('')">新建{{labelText}}</el-button>
      </el-row>
      <el-dialog :before-close="handleClose" center width="700px" class="doc-dialog" title="上传开发文档" :visible.sync="dialogVisible">
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
          <el-form-item :label="labelText" prop="upload">
            <el-input style="width: 75%;" readonly v-model="form.url" placeholder="请选择文件"></el-input>
            <el-upload action="/api/index.php/admin/productdoc_upload"
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
      <el-table-column align="center" label="品类" prop="type_name">
      </el-table-column>

      <el-table-column align="center" label="文件名" prop="filename">
        <template slot-scope="scope">
          <a :href="scope.row.url" target="_blank" download>{{scope.row.filename}}</a>
        </template>
      </el-table-column>

      <el-table-column align="center" label="文件大小" prop="size">
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

<script>
    import { getProductdoc} from '@/api/infoUpload';
    import {getProductType} from '@/api/check'
    import { getToken } from '@/utils/auth'

    export default {
        name: 'developmentAndUidesign',
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
                labelText:this.$route.name=='development'?'开发文档':'设计规范文档',
                productTypeList:[],
                listQuery: {
                    page: 1,
                    limit: 15,
                },
                form:{
                    type_id:'',
                    file_type:this.$route.name=='development'?21:22,//21 = 开发文档，22 = 技术规范
                    token: getToken(),
                    url:''
                },
                dialogVisible:false,
                rules: {
                    type_id: [
                        { required: true, message: '请选择产品品类'},
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
        watch:{
            $route(curVal,oldVal){
                let map = {development:21,uiDesign:22};
                this.form.file_type = map[curVal.name];
                this.labelText = curVal.name=='development'?'开发文档':'设计规范文档';
                this.refresh();
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
                    file_type:this.form.file_type,
                    limit: this.listQuery.limit,
                    page: this.listQuery.page
                };
                getProductdoc(params).then(response => {
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
                    this.form.type_id = row.type_id;
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
