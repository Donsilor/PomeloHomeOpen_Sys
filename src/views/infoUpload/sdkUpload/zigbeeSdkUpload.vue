<template>
  <div class="app-container">

    <el-button style="margin-bottom: 10px" type="primary" @click="dialogVisible = true">新建</el-button>

    <!--=====table=======-->
    <el-table v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row
              :data="list"
              style="width: 100%">
      <el-table-column prop="type_name"
                       label="品类"
                       width="80">
      </el-table-column>
      <el-table-column prop="technology_agreement"
                       label="协议">
      </el-table-column>

      <el-table-column prop="filename"
                       label="文件名"
                       width="200">
        <template slot-scope="scope">
          <a :href="scope.row.url">
            {{scope.row.filename}}
          </a>
        </template>
      </el-table-column>
      <el-table-column prop="size"
                       label="SDK大小">
      </el-table-column>
      <el-table-column prop="created_at_txt"
                       label="上传时间">
      </el-table-column>
      <el-table-column align="center" label="操作" width="80">
        <template slot-scope="scope">
          <el-button size="small" type="success"
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
            title="上传SDK文件"
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

        <!--<el-form-item label="模组/芯片厂家" prop="technology_type_key" :label-width="formLabelWidth">-->
          <!--<el-select :disabled="isToModify" v-model="uploadParams.technology_type_key" placeholder="请选择">-->
            <!--<el-option-group-->
                    <!--v-for="group in wifiModuleList"-->
                    <!--:key="group.vendor"-->
                    <!--:label="group.vendor">-->
              <!--<el-option-->
                      <!--v-for="item in group.modellist"-->
                      <!--:key="item.module_id"-->
                      <!--:label="item.model"-->
                      <!--:value="item.module_id">-->
              <!--</el-option>-->
            <!--</el-option-group>-->
          <!--</el-select>-->
        <!--</el-form-item>-->

        <el-form-item label="协议" prop="technology_type_key" :label-width="formLabelWidth">
          <el-select :disabled="isToModify" placeholder="请选择" v-model="uploadParams.technology_type_key">
            <el-option v-for="item in agreementList"
                       :key="item.agreement_id"
                       :label="item.agreement"
                       :value="item.agreement_id">
            </el-option>
          </el-select>
        </el-form-item>

        <!--<el-form-item label="型号" :label-width="formLabelWidth">-->
        <!--<el-input v-model="technology_type_key" placeholder="型号"></el-input>-->
        <!--</el-form-item>-->

        <el-form-item label="SDK文件" :label-width="formLabelWidth">
          <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="/api/index.php/admin/sdk_upload"
                  :multiple="false"
                  accept=".zip"
                  :data="uploadParams"
                  :file-list="fileList"
                  :auto-upload="false"
                  :before-upload="beforeUpload"
                  :on-error="uploadError"
                  :on-success="uploadSuccess"
                  :limit="1"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <div slot="tip" class="el-upload__tip">只能上传zip文件，且不超过5M</div>
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
  import { getSdkList, getAgreementList } from '@/api/infoUpload';
  import { getProductType } from '@/api/check'

  import { productTechonologyType } from '@/utils/config';
  import { getToken } from '@/utils/auth'

  export default {
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
        productTechonologyType: productTechonologyType, // 接入方式
        // =====文件上传=====
        dialogVisible: false, // 文件上传对话框
        isToModify: false,
        rules: {
          type_id: [
            { required: true, message: '请选择品类', trigger: 'blur' },
          ],
          technology_type_key: [
            { required: true, message: '请选择芯片型号', trigger: 'blur' },
          ]
        },
        formLabelWidth: '120px',
        agreementList: [],
        productTypeList: [], // 产品品类
        fileList:[],
        uploadParams: {
          technology_type: 2, // 技术方案，1=wifi, 2=zigbee, 3=蓝牙
          token: getToken(),
          type_id: '', // 品类id
          technology_type_key: '', // 型号（技术方案关键字）
        }
      }
    },
    mounted() {
//      console.log('配置文件', productTechonologyType);
      this.getList();
      this.getAgreementList();
      this.getProductType();
    },
    methods: {
      getList() {
        this.listLoading = true
        let params = {
          technology_type: 2, // 技术方案，1=wifi, 2=zigbee, 3=蓝牙
          page: this.listQuery.page,
          limit: this.listQuery.limit,
        };
        getSdkList(params).then(response => {
          console.log('sdk列表', response);
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

      // 获取协议列表
      getAgreementList() {
        let params = {
          agreement_type: 2, // 协议类型 2=zigbee, 3=蓝牙
        };
        getAgreementList(params).then(response => {
          console.log('协议列表', response);
          this.agreementList = response.list;
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
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isLt5M) {
          this.$message.error('SDK文件大小不能超过 5MB!');
        }
        return isLt5M;
      },
      // 上传SDK
      uploadSDK() {
        console.log('文件', this.$refs.upload.uploadFiles);
        if (this.$refs.upload.uploadFiles.length === 0) {
          this.$message.warning('请选择文件！');
          return false;
        }
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
          this.dialogVisible = false;
          this.$refs['uploadForm'].resetFields();
          this.$refs.upload.clearFiles();
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
        this.uploadParams.technology_type_key = row.technology_agreement_id;
        this.isToModify = true;
      }

    }
  }
</script>

<style>

</style>
