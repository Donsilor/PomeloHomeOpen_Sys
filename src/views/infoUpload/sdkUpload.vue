<template>
  <div class="app-container">
    <!--=========查询条件==========-->
    <el-form :inline="true" :model="queryCondition" ref="queryCondition" class="demo-form-inline" >

      <el-form-item label="接入方式" prop="technology_type">
        <el-select placeholder="请选择" v-model="queryCondition.technology_type" clearable>
          <el-option v-for="item in productTechnologyType"
                     :key="item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="getList">查询</el-button>
        <el-button @click="dialogVisible = true">新建</el-button>
      </el-form-item>
    </el-form>

    <!--=====table=======-->
    <el-table v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row
              :data="list"
            style="width: 100%">
      <el-table-column prop="type_name"
                       label="品类"
                       width="180">
      </el-table-column>
      <el-table-column prop="technology_module_vendor"
              label="模组/芯片厂家"
              width="180">
      </el-table-column>
      <el-table-column prop="technology_module_model"
              label="型号"
              width="180">
      </el-table-column>
      <el-table-column prop="size"
              label="SDK大小">
      </el-table-column>
      <el-table-column prop="updated_at_txt"
                       label="上传时间">
      </el-table-column>
      <el-table-column align="center" label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="small" type="success"
                     @click="goCheckDetail(scope.row)">
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

        <el-form-item label="模组/芯片厂家" :label-width="formLabelWidth">
          <el-select v-model="technology_type_key" placeholder="请选择">
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

        <el-form-item label="型号" :label-width="formLabelWidth">
          <el-input v-model="technology_type_key" placeholder="型号"></el-input>
        </el-form-item>

        <el-form-item label="SDK文件" :label-width="formLabelWidth">
          <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="/api/index.php/admin/sdk_upload"
                  :multiple="false"
                  :data="uploadParams"
                  :file-list="fileList"
                  :auto-upload="false"
                  :on-error="uploadError"
                  :on-success="uploadSuccess"
                  >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
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
  import { productTechnologyType } from '@/utils/config';
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
        // =====查询条件=====
        queryCondition: {
          technology_type: ''
        },
        productTechnologyType: productTechnologyType, // 接入方式
        // =====文件上传=====
        dialogVisible: true, // 文件上传对话框
        form: {

        },
        formLabelWidth: '120px',
        wifiModuleList: [],
        technology_type_key: '',
        fileList:[],
        uploadParams: {
          token: getToken(),
        }
      }
    },
    created() {
//      console.log('配置文件', productTechnologyType);
      this.getList();
      this.getWifiModuleList();
    },
    methods: {
      getList() {
        this.listLoading = true
        let params = {
          page: this.listQuery.page,
          limit: this.listQuery.limit,
        };
        Object.assign(params, this.queryCondition);
        getSdkList(params).then(response => {
          console.log('sdk列表', response);
          this.list = response.data;
          this.total = response.total;
          this.listLoading = false
        })
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
