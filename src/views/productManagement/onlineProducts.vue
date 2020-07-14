<template>
  <div class="app-container calendar-list-container">
    <el-row style="padding-bottom: 30px;">
      <el-select 
        v-model="queryCondition.business_id"
        clearable
        placeholder="全部厂商">
        <el-option 
          v-for="(item,index) in businessList"
          :key="index"
          :label="item.name"
          :value="item.business_id"/>
      </el-select>
      <el-select 
        v-model="queryCondition.brand_id"
        clearable
        placeholder="全部品牌">
        <el-option 
          v-for="(item,index) in brandsList"
          :key="index"
          :label="item.brand_name"
          :value="item.brand_id"/>
      </el-select>
      <el-select 
        v-model="queryCondition.type_id"
        clearable
        placeholder="大品类">
        <el-option 
          v-for="(item,index) in typeList"
          :key="index"
          :label="item.name"
          :value="item.id"/>
      </el-select>
      <el-button 
        type="primary"
        @click="handleCurrentChange(1)">查找</el-button>
    </el-row>
    <el-table 
      v-loading="listLoading"
      :data="list"
      element-loading-text="给我一点时间"
      stripe
      fit
      highlight-current-row
      style="width: 100%">
      <el-table-column 
        align="center"
        width="100"
        label="序号">
        <template slot-scope="scope">
          <div v-if="!editSortFlag">{{ scope.row.sort }}</div>
          <div v-else>
            <el-input v-model="scope.row.selfSort"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column 
        align="center"
        label="品类"
        prop="type_name"/>

      <el-table-column 
        align="center"
        label="品牌"
        prop="brand_name"/>

      <el-table-column 
        align="center"
        label="型号"
        prop="model"/>

      <el-table-column 
        align="center"
        label="厂商"
        prop="business_name"/>

      <el-table-column 
        align="center"
        label="版本号">
        <template slot-scope="scope">
          {{ scope.row.version_no_H5?'H5控制页版本'+scope.row.version_no_H5:'' }}{{ ' 固件版本'+scope.row.version_no_firmware }}
        </template>
      </el-table-column>

      <el-table-column 
        align="center"
        label="创建时间"
        prop="created_at"/>

      <el-table-column 
        align="center"
        label="屏蔽搜索">
        <template slot-scope="scope">
          <el-checkbox 
            v-model="scope.row.unable_search === 1" 
            @change="v => unableSearchChange(v, scope.row, scope.$index)"/>
        </template>
      </el-table-column>

      <el-table-column 
        align="center"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button 
            size="small"
            type="primary"
            @click="toDetai(scope.row)">
            查看详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div 
      v-show="!listLoading"
      class="pagination-container">
      <el-button 
        v-if="!editSortFlag" 
        type="primary" 
        style="float: left;margin-top: 10px;" 
        size="medium" 
        @click="editSortFlag = true">编辑排序</el-button>
      <el-button 
        v-if="editSortFlag" 
        type="primary" 
        style="float: left;margin-top: 10px;" 
        size="medium" 
        @click="saveSortResult">保存排序</el-button>
      <el-button 
        v-if="editSortFlag" 
        style="float: left;margin-top: 10px;" 
        size="medium" 
        @click="cancelEdit">取消</el-button>
      <el-pagination 
        :current-page.sync="listQuery.page"
        :page-sizes="[15,20,30, 50]"
        :page-size="listQuery.limit"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>

  </div>
</template>

<script>
import { getProductList } from '@/api/check'
import fetch from '@/utils/fetch'
import { getToken } from '@/utils/auth'
export default {
  name: 'OnlineProducts',
  data() {
    return {
      // ====table===
      list: null,
      total: null,
      listLoading: false,
      businessList: [],
      brandsList: [],
      typeList: [],
      queryCondition: {
        business_id: '',
        brand_id: '',
        type_id: ''
      },
      listQuery: {
        page: 1,
        limit: 15
      },
      copyList: [],
      editSortFlag: false // true编辑状态
    }
  },
  computed: {},
  created() {
    this.getBusinessList()
    this.getTypeList()
    this.getBrandList()
  },
  mounted() {
    this.$nextTick(() => {
      this.refresh()
    })
  },
  methods: {
    unableSearchChange(bool, row, index) {
      fetch({
        url: '/admin/set_unable_search',
        method: 'post',
        data: { unable_search: bool ? 1 : 0, product_id: row.product_id }
      }).then(res => {
        this.$message.success('操作成功')
        row.unable_search = bool ? 1 : 0
      })
    },
    refresh() {
      this.getList()
    },
    getList() {
      this.listLoading = true
      const params = {
        limit: this.listQuery.limit,
        page: this.listQuery.page,
        search_type: 1
      }
      if (this.queryCondition.business_id != '') {
        params.business_id = this.queryCondition.business_id
      }
      if (this.queryCondition.brand_id != '') {
        params.brand_id = this.queryCondition.brand_id
      }
      if (this.queryCondition.type_id != '') {
        // params.type_id = this.queryCondition.type_id
        params.parent_type_id = this.queryCondition.type_id
      }
      getProductList(params).then(response => {
        let list = response.data
        let newList = list.map(val => ({...val, selfSort: val.sort}))
        this.copyList = JSON.parse(JSON.stringify(newList))
        this.list = newList
        this.total = response.total
        this.listLoading = false
      })
    },
    getBusinessList() {
      fetch({
        url: '/user/select',
        method: 'get',
        data: { is_online: 1 }
      }).then(res => {
        this.businessList = res
      })
    },
    getBrandList() {
      fetch({
        url: '/brand/select',
        method: 'post',
        data: { is_online: 1 }
      }).then(res => {
        this.brandsList = res
      })
    },
    getTypeList() {
      // url: '/admin/product/type_lists',
      fetch({
        url: '/product/parenttype_lists',
        method: 'post',
        data: {}
      }).then(res => {
        this.typeList = res.list
      }).catch(e => {
        this.$message.error(e.msg)
      })
    },

    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.editSortFlag = false
      this.getList()
    },
    toDetai(row) {
      console.log('row', row)
      const query = {
        product_id: row.product_id
      }
      this.$router.push({ path: '/productManagement/onlineProductDetail', query: query })
    },
    saveSortResult() {
      let data = {}
      let filterList = this.list.filter(val => val.sort != val.selfSort).map(val => ({[val.product_id]: val.selfSort})).reduce((prev, next) => {
        data = {
          ...data,
          ...next
        }
      },data)
      let params = {
        sortlist: data
      }
      fetch({
        url: 'admin/set_sort',
        method: 'post',
        data: params
      }).then(res => {
        this.handleCurrentChange(1)
        this.editSortFlag = false
      })
    },
    cancelEdit() {
      this.editSortFlag = false
      this.list = this.copyList
    }
  }
}
</script>
