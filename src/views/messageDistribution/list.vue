<template>
  <div class="app-container calendar-list-container">

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
        label="厂商id" 
        prop="id"/>

      <el-table-column 
        align="center" 
        label="厂商名" 
        prop="name"/>

      <el-table-column 
        align="center" 
        label="厂商topic" 
        prop="topic"/>

      <el-table-column 
        align="center" 
        label="操作" 
        width="150">
        <template slot-scope="scope">
          <!-- <el-button 
            size="small" 
            type="primary" 
            @click="toDetai(scope.row)">
            查看
          </el-button> -->
          <el-button 
            size="small" 
            type="primary" 
            @click="updateDetail(scope.row)">
            修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div 
      v-show="!listLoading" 
      class="pagination-container">
      <el-pagination 
        :current-page.sync="listQuery.page" 
        :page-sizes="[15,20,30, 50]"
        :page-size="listQuery.limit"
        :total="total" 
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange"/>
    </div>
    <mesCenterDialog
      v-if="showDialog"
      :op="op"
      :show-dialog="showDialog"
      :dialog-detail="dialogDetail"
      @refresh="refresh"
      @closeView="showDialog = false"/>
  </div>
</template>

<script>
import fetch from '@/utils/fetch'
import mesCenterDialog from './mesCenterDialog'
import {getTopicList} from '@/api/messageDistribution'
export default {
  name: 'MessageDistributionList',
  components:{
    mesCenterDialog
  },
  data() {
    return {
      // ====table===
      list: null,
      total: null,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 15,
      },
      // 弹窗参数
      showDialog: false,
      dialogDetail: {},
      op: '',
      env:{
        sit:'测试环境',
        uat:'UAT',
        online:'线上',
      }
    }
  },
  computed: {},
  created() {
  },
  mounted() {
    this.refresh()
  },
  methods: {
    refresh(){
      this.getList()
    },
    getList() {
      this.listLoading = true
      let params = {
        limit: this.listQuery.limit,
        page: this.listQuery.page
      }
      getTopicList().then(res=>{
        if (res.code === 0) {
          this.list = res.list
          // this.total = response.list
          this.listLoading = false
        }else{
          this.$message.error(res.msg)
        }
        console.log('topic列表：',res)
      })
      // fetch({
      //   url:'/user/list',
      //   method:'post',
      //   data:params
      // }).then(response => {
      //   this.list = response.data
      //   this.total = response.total
      //   this.listLoading = false
      // })
    },

    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    toDetai(row){
      this.op = 'view'
      this.dialogDetail  = row
      this.showDialog = true
      // let query = {
      //   business_id:row.business_id
      // }
      // this.$router.push({path:'/enterpriseManagement/enterpriseInfo',query:query})
    },
    updateDetail(row){
      this.op = 'update'
      this.dialogDetail  = row
      this.showDialog = true
    }
  }
}
</script>
