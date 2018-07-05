<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-row style="margin-bottom: 20px;">
        <el-button type="primary" @click="openDialog('')">新建SDK包</el-button>
      </el-row>
      <el-dialog :before-close="handleClose" center width="700px" class="doc-dialog" title="上传SDK文件" :visible.sync="dialogVisible">
        <el-form :rules="rules" ref="uploadForm" :model="form" label-width="110px">
          <el-form-item label="协议" prop="type_key">
            <el-select :disabled="isToModify" style="width: 100%;" v-model="form.type_key" placeholder="请选择">
              <el-option v-for="item in agreementList"
                         :key="item.id"
                         :label="item.agreement"
                         :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="SDK文件" prop="upload">
            <el-input style="width: 75%;" readonly v-model="form.url" placeholder="请选择文件"></el-input>
            <el-upload action="/api/index.php/files/save"
                       style="display: inline-block;margin-left: 12px;"
                       :data="uploadForm"
                       ref="upload"
                       accept=".zip"
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
          <div class="upload-tips">只能上传zip文件，且不超过5M</div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="uploadSDK">确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row
              style="width: 100%">
      <el-table-column align="center" label="包名称" prop="filename">
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

<script>
    import { getSdkList, getAgreementList } from '@/api/infoUpload';
    import { getToken } from '@/utils/auth'
    import fetch from '@/utils/fetch';
    export default {
        name: 'zigbeeAndBluetooth',
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
                agreementList:[],
                listQuery: {
                    page: 1,
                    limit: 15,
                },
                form:{
                    type_key:'',
                    type:this.$route.name=='zigbee'?2:3,
                    url:'',
                    package_id:'',
                    sdk:{}
                },
                uploadForm:{
                    type:13,
                    token: getToken(),
                },
                dialogVisible:false,
                rules: {
                    type_key: [
                        { required: true, message: '请选择产品协议' },
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
                let map = {zigbee:2,bluetooth:3};
                this.form.type = map[curVal.name];
                this.refresh();
            }
        },
        mounted() {
            this.refresh();
        },
        methods: {
            refresh(){
                this.$store.dispatch('GetDocumentMenus');
                this.getList();
                this.getAgreementList(this.form.type);
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
            getAgreementList(type){
                getAgreementList({technology_type:type}).then(response =>{
                    this.agreementList = response.list;
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
                    this.form.url = row.filename;
                    this.form.type_key = row.type_key;
                    this.form.package_id = row.package_id;
                }
                else{
                    this.isToModify = false;
                    this.form.url = '';
                    this.form.type_key = '';
                    this.form.package_id = '';
                }
                this.dialogVisible = true;
            },
            // 上传SDK
            uploadSDK() {
                this.$refs['uploadForm'].validate((valid) => {
                    if (valid) {
                        let form = Object.assign({},this.form);
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
