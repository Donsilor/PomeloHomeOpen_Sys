<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button 
        size="medium" 
        type="primary" 
        @click="addCart">
        新增文案
      </el-button>
    </el-row>

    <el-table 
      v-loading="listLoading" 
      :data="tagList" 
      element-loading-text="给我一点时间" 
      stripe 
      fit 
      highlight-current-row 
    >
      <el-table-column
        v-for="(item,index) in paramsList"
        :key="index"
        :label="item.title" 
        :prop="item.key" 
        align="center"/>
      <el-table-column 
        align="center" 
        label="操作" 
        width="150">
        <template slot-scope="scope">
          <!-- <el-button 
            size="small" 
            type="danger"
            @click="delCard(scope.row)" >
            删除
          </el-button> -->
          <el-button 
            size="small" 
            type="primary" 
            @click="editCard(scope.row, true)">
            修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <Paging
      :page-query="listQuery"
      :total="total"
      paging-status=""
      @changePage="currentPageChange"/>
    <h5ConfigView
      v-if="addView"
      :config-detail="configDetail"
      :op="op"
      :add-view="addView"
      @refresh="refresh" 
      @closeView="closeView"/>
  </div>
</template>

<script>
import h5ConfigView from "@/components/configManagement/h5ConfigView"
import Paging from '@/components/paging'
import { queryCopyList } from "@/api/config"
export default {
  components:{
    h5ConfigView,
    Paging
  },
  data() {
    return {
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 5
      },
      tagList: [],
      addView:false,
      total:0,
      configDetail:{},
      op:'',
      paramsList:[
        {title:'id',key:'id',required:true},
        {title:'唯一标识key',key:'copywritingKey',required:true},
        {title:'标题',key:'title',required:true},
        {title:'创建时间',key:'createTime',required:true},
        {title:'更新时间',key:'updateTime',required:true}
      ],
    }
  },
  computed: {
  },
  created() {
    this.refresh()
  },
  mounted() {
  },
  methods: {
    getList(params){
      const that = this
      queryCopyList(params).then(res=>{
        console.log('列表返回：',res)
        if (res.code === 200) {
          if (res.data) {
            this.tagList = res.data
          }
          if (res.page_info) {
            that.total = res.page_info.total
            console.log('this.total:',that.total)
          }
        }else{
          this.$message.error(res.msg)
        }
      })
    },
    closeView(){
      this.addView = false
    },
    refresh() {
      const params = {
        pageNumber:1,
        pageSize:this.listQuery.limit
      }
      this.getList(params)
    },
    addCart() {   // button按钮事件
      this.addView = true
      this.configDetail = {}
      this.op = "add"
    },
    editCard(row, isEdit) {
      console.log('row:',row)
      this.configDetail = Object.assign({},row)
      this.op = "edit"
      this.addView = true
    },
    delCard(row){
      // this.$confirm('确认删除？')
      //     .then(_ => {
      //       console.log(8888);
      //       this.formItem = row
      //        this.formItem.operator = 3
      //       this.onSubmit(); //调用onSubmit借口发起请求
      //     })
      //     .catch(_ => {});
    },
    currentPageChange(listQuery) {
      console.log('传入的分页查询参数：',listQuery)
      const params = {
        pageNumber:listQuery.page,
        pageSize:listQuery.limit
      }
      this.getList(params)
    }
  }
}
</script>
