<template>
  <div class="app-container">
    <!--=========查询条件==========-->
    <el-form :inline="true" class="demo-form-inline" >
      <el-form-item>
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
      <el-table-column prop="size"
                       label="文件大小"
                       width="180">
      </el-table-column>
      <el-table-column prop="created_at_txt"
                       label="上传时间">
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

        <el-form-item label="模组/芯片厂家">
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

        <el-form-item label="型号">
          <el-input v-model="technology_type_key" placeholder="型号"></el-input>
        </el-form-item>

        <el-form-item label="SDK文件">
          <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>

      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import { getProductdoc } from '@/api/infoUpload';
  import { productTechonologyType } from '@/utils/config';

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
        form: {

        },
        formLabelWidth: '120px',
        wifiModuleList: [],
        technology_type_key: ''
      }
    },
    mounted() {
      this.getList();
    },
    methods: {
      getList() {
        this.listLoading = true
        let params = {
          page: this.listQuery.page,
          limit: this.listQuery.limit,
          file_type: 21, // 文件类型，21 = 开发文档，22 = 技术规范
        };
        getProductdoc(params).then(response => {
          console.log('开发文档列表', response);
          this.list = response.data;
          this.total = response.total;
          this.listLoading = false
        })
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
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }

    }
  }
</script>

<style>

</style>
