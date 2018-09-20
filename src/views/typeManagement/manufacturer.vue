<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button @click="addLicence" size="medium" type="primary">
        add licence
      </el-button>
    </el-row>

    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="品牌名称" prop="manufacturer_name">
      </el-table-column>
      <el-table-column align="center" label="licence" prop="licence">
      </el-table-column>
      <el-table-column align="center" label="public_key" prop="public_key">
      </el-table-column>

      <el-table-column align="center" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="editLicence(scope.row, true)" size="small" type="primary">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[15,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

    <el-dialog :visible.sync="formVisible" :title="dialogTitle">
      <el-form label-width="80px">
        <el-form-item label="品牌名称">
          <el-select v-model="formItem.manufacturer_name" :disabled="isEdit">
            <el-option v-for="(item, index) in manufacturerList" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="licence">
          <el-input v-model="formItem.licence"></el-input>
        </el-form-item>
        <el-form-item label="public_key">
          <el-input v-model="formItem.public_key"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">

        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="formVisible=false">取消</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import fetch from '@/utils/fetch'

export default {
  data() {
    return {
      // ====table===
      list: null,
      total: null,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 15
      },
      formVisible: false,
      isEdit: false,
      manufacturerList: [],
      formItem: {
        manufacturer_name: '',
        licence: '',
        public_key: ''
      }
    }
  },
  computed: {
    dialogTitle() {
      return this.isEdit ? 'edit licence' : 'add licence'
    }
  },
  created() {},
  mounted() {
    this.refresh()
  },
  methods: {
    refresh() {
      this.getList()
      this.getManufacturerList()
    },
    getManufacturerList() {
      fetch({
        url: 'manufacturer/lists'
      }).then(res => {
        console.log(res)
        this.manufacturerList = res.list
      })
    },
    getList() {
      this.listLoading = true
      const params = {
        limit: this.listQuery.limit,
        page: this.listQuery.page
      }

      fetch({
        url: 'manufacturer/licence/lists',
        data: params
      }).then(response => {
        this.list = response.data
        this.total = response.total_page
        this.listLoading = false
      })
    },

    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    addLicence() {
      this.isEdit = false
      this.formVisible = true
      this.formItem = {}
    },
    editLicence(row, isEdit) {
      this.isEdit = true
      this.formVisible = true
      this.formItem = row
    },
    onSubmit() {
      fetch({
        url: this.isEdit
          ? 'manufacturer/licence/edit'
          : 'manufacturer/licence/add',
        method: 'post',
        data: this.formItem
      }).then(res => {
        this.$message.success('操作成功！')
        this.formVisible = false
        this.getList()
      })
    }
  }
}
</script>
