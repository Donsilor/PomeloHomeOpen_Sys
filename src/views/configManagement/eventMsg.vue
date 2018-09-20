<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button @click="addLicence" size="medium" type="primary">
        add event msg
      </el-button>
    </el-row>

    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="事件名称" prop="event_name">
      </el-table-column>
      <el-table-column align="center" label="push_rights">
        <template slot-scope="scope">{{getPushRightsText(scope.row.push_rights)}}</template>
      </el-table-column>
      <el-table-column align="center" label="push_time" prop="push_time">
      </el-table-column>
      <el-table-column align="center" label="push_type" prop="push_type">
      </el-table-column>
      <el-table-column align="center" label="品类ID">
        <template slot-scope="scope">{{ getTypeTextById(scope.row.cid) }}</template>
      </el-table-column>
      <el-table-column align="center" label="des" prop="des">
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
        <el-form-item label="品类ID">
          <el-select v-model="formItem.cid" :disabled="isEdit">
            <el-option v-for="item in typeList" :key="item.id" :value="item.id" :label="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="事件名称">
          <el-input v-model="formItem.event_name" :disabled="isEdit"></el-input>
        </el-form-item>
        <el-form-item label="push_rights">
          <el-select v-model="formItem.push_rights">
            <el-option label="全员" :value="0"></el-option>
            <el-option label="户主" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="push_time">
          <div class="push_time_item" v-for="(item, index) in formItem.push_time" :key="index">
            <el-time-select class="hour" :clearable="false" :picker-options="getTimeSelectOption(index, 0)" v-model="formItem.push_time[index][0]"></el-time-select> -
            <el-time-select class="hour" :clearable="false" :picker-options="getTimeSelectOption(index, 1)" v-model="formItem.push_time[index][1]"></el-time-select>
            <i class="el-icon-remove" @click="deleteRow(index)" v-if="formItem.push_time.length>1"></i>
          </div>
          <el-button type="primary" @click="addRow" icon="el-icon-circle-plus" size="mini">新增一行</el-button>
        </el-form-item>
        <el-form-item label="push_type">
          <el-input v-model="formItem.push_type"></el-input>
        </el-form-item>
        <el-form-item label="des">
          <el-input v-model="formItem.des" type="textarea" rows="2"></el-input>
          <span>支持标签：${family_name},${room_name},${device_name}</span>
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
      typeList: [],
      formItem: {
        cid: '',
        event_name: '',
        push_rights: '',
        push_time: [],
        push_type: '',
        des: ''
      },
      timeSelectOption: {}
    }
  },
  computed: {
    dialogTitle() {
      return this.isEdit ? 'edit event msg' : 'add event msg'
    }
  },
  created() {},
  mounted() {
    this.refresh()
  },
  methods: {
    refresh() {
      this.getList()
      this.getTypeList()
    },
    getTypeList() {
      fetch({
        url: 'product/parenttype_lists',
        method: 'POST'
      }).then(res => {
        this.typeList = res.list
      })
    },
    getList() {
      this.listLoading = true
      const params = {
        limit: this.listQuery.limit,
        page: this.listQuery.page
      }

      fetch({
        url: 'event/lists',
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
      this.formItem = {
        push_time: [[]]
      }
    },
    editLicence(row, isEdit) {
      this.isEdit = true
      this.formVisible = true
      console.log(row.push_time)
      this.formItem = Object.assign({}, row, {
        push_time: this.setFormatTime(JSON.parse(row.push_time))
      })
    },
    setFormatTime(timeGroup) {
      return timeGroup.map(times => {
        return times.map(time => {
          time += ''
          if (time.indexOf(':') > 0) {
            return time
          } else {
            return `${time > 10 ? time : '0' + time}:00`
          }
        })
      })
    },
    getFormatTime(timeGroup) {
      return timeGroup.map(times => {
        return times.map(time => {
          if (time.indexOf(':') > 0) {
            return parseInt(time.split(':')[0])
          } else {
            return time
          }
        })
      })
    },
    onSubmit() {
      const formItem = Object.assign({}, this.formItem, {
        push_time: this.getFormatTime(this.formItem.push_time),
        created_at: undefined,
        updated_at: undefined
      })
      fetch({
        url: this.isEdit ? 'event/edit' : 'event/add',
        method: 'post',
        data: formItem
      }).then(res => {
        this.$message.success('操作成功！')
        this.formVisible = false
        this.getList()
      })
    },
    deleteRow(index) {
      this.formItem.push_time.splice(index, 1)
    },
    addRow() {
      this.formItem.push_time.push([])
    },
    getTypeTextById(id) {
      const items = this.typeList.filter(item => item.id === id)
      if (items.length) {
        return items[0].name
      }
      return id
    },
    getPushRightsText(id) {
      return {
        '0': '全员',
        '1': '户主'
      }[id]
    },
    getTimeSelectOption() {
      return {
        start: '00:00',
        end: '23:00',
        step: '01:00'
      }
    }
  }
}
</script>

<style scoped>
.push_time_item {
  margin-bottom: 5px;
}
.hour {
  width: 100px;
}
</style>
