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
      <el-table-column prop="technology_module_vendor"
              label="模组/芯片厂家">
      </el-table-column>
      <el-table-column prop="technology_module_model"
              label="型号"
              width="180">
      </el-table-column>
      <el-table-column prop="filename"
                       label="文件名"
                       width="200">
      </el-table-column>
      <el-table-column prop="size"
              label="SDK大小">
      </el-table-column>
      <el-table-column prop="created_at_txt"
                       label="上传时间">
      </el-table-column>
      <el-table-column align="center" label="操作" width="80">
        <template scope="scope">
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

      <el-form :model="form" label-position="right">

        <el-form-item label="品类" prop="type_id" :label-width="formLabelWidth">
          <el-select placeholder="请选择" v-model="uploadParams.type_id">
            <el-option v-for="item in productTypeList"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="模组/芯片厂家" :label-width="formLabelWidth">
          <el-select v-model="uploadParams.technology_type_key" placeholder="请选择">
            <el-option-group
                    v-for="group in wifiModuleList"
                    :key="group.vendor"
                    :label="group.vendor">
              <el-option
                      v-for="item in group.modellist"
                      :key="item.module_id"
                      :label="item.model"
                      :value="item.module_id">
              </el-option>
            </el-option-group>
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
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="uploadSDK">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import { getSdkList, getWifiModuleList } from '@/api/infoUpload';
  import { getProductType } from '@/api/check'

  import { productTechonologyType } from '@/utils/config';
  import FileUpload from 'vue-upload-component';
  import { getToken } from '@/utils/auth'

  export default {
    components: {
      FileUpload
    },
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
          technology_type: ''
        },
        productTechonologyType: productTechonologyType, // 接入方式
        // =====文件上传=====
        dialogVisible: true, // 文件上传对话框
        form: {

        },
        formLabelWidth: '120px',
        wifiModuleList: [],
        productTypeList: [], // 产品品类
        technology_type_key: '',
        fileList:[],
        technology_type: '',
        uploadParams: {
          technology_type: 1, // 技术方案
          token: getToken(),
          type_id: '', // 品类id
          technology_type_key: '', // 型号（技术方案关键字）
        }
      }
    },
    mounted() {
//      console.log('配置文件', productTechonologyType);
      this.getList();
      this.getWifiModuleList();
      this.getProductType();
    },
    methods: {
      getList() {
        this.listLoading = true
        let params = {
          technology_type: 1, // 技术方案，1=wifi, 2=zigbee, 3=蓝牙
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

      // 获取wifi列表
      getWifiModuleList() {
        getWifiModuleList().then(response => {
          console.log('WIFI模组/芯片列表', response);
          this.wifiModuleList = response.list;
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

      handleClose(done) {
        done();
      },
      
      // 上传SDK
      uploadSDK() {
        console.log('文件', this.fileList);
        this.$refs.upload.submit();
      },

      // 上传成功的回调
      uploadSuccess(response, file, fileList) {
        console.log('成功回调', response, file, fileList);
      },

      // 上传失败的回调
      uploadError(err, file, fileList) {
        console.log('失败回调', err, file, fileList);
      }

    }
  }
</script>

<style>

</style>
