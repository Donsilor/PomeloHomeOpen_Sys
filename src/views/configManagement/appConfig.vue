<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button @click="addConfig" size="medium" type="primary">
        新增配置项
      </el-button>
    </el-row>

    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="key" prop="key">
      </el-table-column>
      <el-table-column align="center" label="value" prop="value">
      </el-table-column>

      <el-table-column align="center" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="editConfig(scope.row)" size="small" type="primary">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="formVisible" :title="dialogTitle">
      <el-form label-width="120px">
        <el-form-item label="key">
          <el-input v-model="formItem.key" :disabled="isEdit"></el-input>
        </el-form-item>
        <el-form-item label="value">
          <el-input v-model="formItem.value"></el-input>
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
      list: null,
      listLoading: false,
      formVisible: false,
      isEdit: false,
      formItem: {}
    }
  },
  computed: {
    dialogTitle() {
      return this.isEdit ? 'edit config' : 'add config'
    }
  },
  methods: {
    // 获取所有配置项
    getAllConfig() {
      fetch({
        url: 'get/app_config_lists'
      }).then(res => {  
        this.list = Object.keys(res).map(key => {
          return {
            key: key,
            value: res[key]
          }
        })
      })
    },
    setConfig() {
      fetch({ 
        url: 'set/app_config',
        method: 'POST',
        data: this.formItem
      }).then(res => {
        this.$message.success('保存成功！')
        this.formVisible = false
        this.getAllConfig()
      })
    },
    addConfig() {
      this.isEdit = false
      this.formVisible = true
      this.formItem = {}
    },
    editConfig(row) {  
      this.isEdit = true
      this.formVisible = true
      this.formItem = row
    },
    onSubmit() {
      this.setConfig()
    }
  },
  mounted() {
    this.getAllConfig()
  }
}
</script>
