<template>
    <div class="app-container calendar-list-container">
        <el-row style="margin-bottom: 10px;">
            <el-button @click="addFault" size="medium" type="primary">
                新增方案
            </el-button>
        </el-row>

        <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row style="width: 100%">
            <el-table-column align="center" label="manufacturer" prop="manufacturer">
            </el-table-column>
            <el-table-column align="center" label="品类">
                <template slot-scope="scope">{{ getTypeTextById(scope.row.cid) }}</template>
            </el-table-column>
            <el-table-column align="center" label="pid" prop="product_id">
            </el-table-column>
            <el-table-column align="center" label="code" prop="code">
            </el-table-column>
            <el-table-column align="center" label="status" prop="status">
            </el-table-column>
            <!-- <el-table-column align="center" label="level" prop="level">
      </el-table-column>
      <el-table-column align="center" label="tip_type" prop="tip_type">
      </el-table-column>
      <el-table-column align="center" label="is_valid" prop="is_valid">
      </el-table-column>
      <el-table-column align="center" label="push_rights">
        <template slot-scope="scope">{{getPushRightsText(scope.row.push_rights)}}</template>
      </el-table-column>
      <el-table-column align="center" label="push_time" prop="push_time">
      </el-table-column>
      <el-table-column align="center" label="push_type" prop="push_type">
      </el-table-column> -->

            <el-table-column align="center" label="des" prop="des">
            </el-table-column>
            <el-table-column align="center" label="是否有效">
                <template slot-scope="scope">
                    <el-tag type="success" v-if="scope.row.is_valid">有效</el-tag>
                    <el-tag type="info" v-else>已删除</el-tag>
                </template>
            </el-table-column>

            <!-- <el-table-column align="center" label="revover_desc" prop="revover_desc">
      </el-table-column> -->

            <el-table-column align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.is_valid" @click="editFault(scope.row, true)" size="small" type="primary">编辑</el-button>
                    <el-button v-if="scope.row.is_valid" @click="deleteFault(scope.row)" size="small" type="warning">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div v-show="!listLoading" class="pagination-container">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[15,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>

        <el-dialog :visible.sync="formVisible" :title="dialogTitle">
            <el-form label-width="120px">
                <el-form-item label="品类">
                    <el-select v-model="formItem.cid" :disabled="isEdit" @change="onTypeChange">
                        <el-option v-for="item in typeList" :key="item.id" :value="item.id" :label="item.name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="品牌">
                    <el-select v-model="formItem.manufacturer" :disabled="isEdit" @change="onBrandChange">
                        <el-option v-for="(item,index) in manufacturerList" :key="index" :label="item.manufacturer_name" :value="item.manufacturer_name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="product_id">
                    <el-select v-model="formItem.product_id">
                        <el-option v-for="item in productList" :key="item.product_id" :value="item.product_id" :label="item.product_id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="code">
                    <el-input v-model="formItem.code" :disabled="isEdit"></el-input>
                </el-form-item>
                <el-form-item label="status">
                    <el-select v-model="formItem.status">
                        <el-option label="fixed" :value="0"></el-option>
                        <el-option label="open" :value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="level">
                    <el-select v-model="formItem.level">
                        <el-option label="未定义" :value="0"></el-option>
                        <el-option label="低" :value="1"></el-option>
                        <el-option label="中" :value="2"></el-option>
                        <el-option label="高" :value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="tip_type">
                    <el-select v-model="formItem.tip_type">
                        <el-option label="弹窗交互" :value="1"></el-option>
                        <el-option label="仅提示" :value="2"></el-option>
                    </el-select>
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
                <el-form-item label="revover_desc">
                    <el-input v-model="formItem.revover_desc" type="textarea" rows="2"></el-input>
                </el-form-item>
                <el-form-item label="is_valid">
                    <el-input v-model="formItem.is_valid" disabled=""></el-input>
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
      manufacturerList: [],
      productList: [],
      formItem: {},
      brand_id: '',
      type_id: ''
    }
  },
  computed: {
    dialogTitle() {
      return this.isEdit ? 'edit fault' : 'add fault'
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
      this.getManufacturerList()
    },
    getManufacturerList() {
      fetch({
        url: 'brand/select',
        method: 'POST',
        data: {
          is_online: 1
        }
      }).then(res => {
        this.manufacturerList = res
      })
    },
    getTypeList() {
      fetch({
        url: 'product/parenttype_lists',
        method: 'POST'
      }).then(res => {
        this.typeList = res.list
      })
    },
    onBrandChange(name) {
      this.brand_id = this.getBrandId()
      this.formItem.product_id = ''
      this.getProductList()
    },
    onTypeChange(id) {
      this.type_id = id
      this.formItem.product_id = ''
      this.getProductList()
    },
    getBrandId() {
      const items = this.manufacturerList.filter(
        item => item.manufacturer_name === this.formItem.manufacturer
      )
      console.log(items)
      if (items.length) {
        return items[0].brand_id
      }
      return ''
    },
    getProductList() {
      fetch({
        url: 'admin/product_lists',
        method: 'POST',
        data: {
          limit: 999,
          parent_type_id: this.type_id ? this.type_id : undefined,
          brand_id: this.brand_id ? this.brand_id : undefined,
          search_type: 1,
          page: 1
        }
      }).then(res => {
        this.productList = res.data
      })
    },
    getList() {
      this.listLoading = true
      const params = {
        limit: this.listQuery.limit,
        page: this.listQuery.page
      }

      fetch({
        url: 'device/fault/lists',
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
    addFault() {
      this.isEdit = false
      this.formVisible = true
      this.formItem = {
        push_time: [[]],
        product_id: ''
      }
      //重置pid
      this.brand_id = ''
      this.type_id = ''
      this.productList = []
    },
    editFault(row, isEdit) {
      this.isEdit = true
      this.formVisible = true
      this.formItem = Object.assign({}, row, {
        push_time: this.setFormatTime(JSON.parse(row.push_time))
      })

      //重置pid
      if (row.manufacturer) {
        this.brand_id = this.getBrandId()
      }
      if (row.cid) {
        this.type_id = row.cid
      }
      this.getProductList()
    },
    deleteFault(row) {
      this.$confirm('将删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          fetch({
            url: 'device/fault/del',
            method: 'POST',
            data: {
              id: row.id
            }
          }).then(res => {
            row.is_valid = 0
            // this.getList()
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    deleteRow(index) {
      this.formItem.push_time.splice(index, 1)
    },
    addRow() {
      this.formItem.push_time.push([])
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
        updated_at: undefined,
        is_valid: undefined
      })
      fetch({
        url: this.isEdit ? 'device/fault/edit' : 'device/fault/add',
        method: 'post',
        data: formItem
      }).then(res => {
        this.$message.success('操作成功！')
        this.formVisible = false
        this.getList()
      })
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
