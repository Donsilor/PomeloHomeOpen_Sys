<template>
  <div class="app-container">

    <el-button style="margin-bottom: 10px" type="primary" icon="el-icon-plus" @click="dialogVisible = true">新建</el-button>

    <!--=====table=======-->
    <el-table v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row
              :data="list"
              style="width: 100%">
      <el-table-column align="center" prop="type_name" label="品类">
      </el-table-column>

      <el-table-column align="center" prop="filename" label="文件名" min-width="180">
        <template slot-scope="scope">
          <a :href="scope.row.url" target="_blank">
            {{scope.row.filename}}
          </a>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="size" label="文件大小">
      </el-table-column>

      <el-table-column align="center" prop="created_at_txt" label="上传时间">
      </el-table-column>

      <el-table-column align="center" label="操作" width="100">
        <template slot-scope="scope">
          <el-button size="small" type="success" icon="el-icon-edit"
                     @click="modifySDK(scope.row)">
            修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--=====pagination======-->
    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page"
                     :page-sizes="[10,20,30, 50]" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

    <!--=====dialog======-->
    <el-dialog
            title="上传设计规范"
            :visible.sync="dialogVisible"
            size="small"
            :before-close="handleClose">

      <el-form :model="uploadParams" :rules="rules" ref="uploadForm" label-position="right">

        <el-form-item label="品类" prop="type_id" :label-width="formLabelWidth">
          <el-select :disabled="isToModify" placeholder="请选择" v-model="uploadParams.type_id">
            <el-option v-for="item in productTypeList"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="文件" :label-width="formLabelWidth" prop="upload">
          <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="/api/index.php/admin/productdoc_upload"
                  :multiple="false"
                  accept=".pdf,.doc,.docx,.ppt"
                  :data="uploadParams"
                  :file-list="fileList"
                  :auto-upload="false"
                  :on-change="handleChange"
                  :before-upload="beforeUpload"
                  :on-error="uploadError"
                  :on-success="uploadSuccess"
                  :limit="1"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <div slot="tip" class="el-upload__tip">只能上传pdf,doc,docx,ppt文件，且不超过50M</div>
          </el-upload>
        </el-form-item>

      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="uploadSDK">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import { getProductdoc } from '@/api/infoUpload';
  import { getProductType } from '@/api/check'

  import { productTechnologyType } from '@/utils/config';
  import { getToken } from '@/utils/auth'

  export default {
    data() {
      const fileNumber = (rule, value, callback) => {
        if (this.$refs.upload.uploadFiles.length === 0) {
          callback(new Error('请选择上传文件！'))
        } else {
          callback()
        }
      };
      return {
        // ====table===
        list: null,
        total: null,
        listLoading: false,
        listQuery: {
          page: 1,
          limit: 10,
        },
        productTechnologyType: productTechnologyType, // 接入方式
        // =====文件上传=====
        dialogVisible: false, // 文件上传对话框
        isToModify: false,
        rules: {
          type_id: [
            { required: true, message: '请选择品类', trigger: 'blur' },
          ],
          technology_type_key: [
            { required: true, message: '请选择芯片型号', trigger: 'blur' },
          ],
          upload: [
            { required: true, validator: fileNumber },
          ]
        },
        formLabelWidth: '120px',
        productTypeList: [], // 产品品类
        fileList:[],
        uploadParams: {
          token: getToken(),
          file_type: 22, // 文件类型，21 = 开发文档，22 = 设计规范
          type_id: '', // 品类id

        }
      }
    },
    mounted() {
//      console.log('配置文件', productTechnologyType);
      this.getList();
      this.getProductType();
    },
    methods: {
      getList() {
        this.listLoading = true
        let params = {
          file_type: 22, // 文件类型，21 = 开发文档，22 = 技术规范
          page: this.listQuery.page,
          limit: this.listQuery.limit,
        };
        getProductdoc(params).then(response => {
          console.log('开发文档列表', response);
          this.list = response.data;
          this.total = response.total;
          this.listLoading = false
        })
      },

      // 获取产品品类
      getProductType() {
        getProductType().then(response => {
          console.log('产品品类', response);
          this.productTypeList = response.list;
        });
      },

      handleSizeChange(val) {
        this.listQuery.limit = val
        this.getList()
      },
      handleCurrentChange(val) {
        this.listQuery.page = val
        this.getList();
      },

      // 叉叉按钮
      handleClose(done) {
        done();
        this.isToModify = false;
        this.$refs['uploadForm'].resetFields();
        this.$refs.upload.clearFiles();
      },
      // 取消按钮
      closeDialog() {
        this.dialogVisible = false;
        this.$refs['uploadForm'].resetFields();
        this.$refs.upload.clearFiles();
        this.isToModify = false;
      },

      // 判断文件大小
      beforeUpload(file) {
        const isLt50M = file.size / 1024 / 1024 < 50;
        if (!isLt50M) {
          this.$message.error('SDK文件大小不能超过 50MB!');
        }
        return isLt50M;
      },

      // 触发是否选择上传文数验证
      handleChange(file, fileList) {
//        console.log('上传', file, fileList);
        this.$refs['uploadForm'].validateField('upload');
      },

      // 上传SDK
      uploadSDK() {
        console.log('文件', this.$refs.upload.uploadFiles);
//        if (this.$refs.upload.uploadFiles.length === 0) {
//          this.$message.warning('请选择文件！');
//          return false;
//        }
        this.$refs['uploadForm'].validate((valid) => {
          if (valid) {
            this.$refs.upload.submit();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      // 上传成功的回调
      uploadSuccess(response, file, fileList) {
        console.log('成功回调', response, file, fileList);
        if (response.code === 200) {
          this.$message.success('上传成功！');
          setTimeout(() => {
            this.closeDialog();
        }, 200);
          this.getList();
        }

      },

      // 上传失败的回调
      uploadError(err, file, fileList) {
        console.log('失败回调', err, file, fileList);
      },

      // 修改SDK
      modifySDK(row) {
        this.dialogVisible = true;
        console.log('行数据', row);
        this.uploadParams.type_id = row.type_id;
        this.uploadParams.technology_type_key = row.file_type;
        this.isToModify = true;
      }

    }
  }
</script>

<style>

</style>
