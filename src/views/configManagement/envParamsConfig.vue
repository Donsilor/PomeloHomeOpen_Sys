<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button 
        size="medium" 
        type="primary" 
        @click="addCart">
        新增参数
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

      <!-- <el-table-column 
        align="center" 
        label="id">
        <template slot-scope="scope">
          <div>
            {{scope.row.x}}*{{scope.row.y}}
          </div>
        </template>
      </el-table-column>
        <el-table-column 
        align="center" 
        label="名称" 
        prop=""/>
         <el-table-column 
        align="center" 
        label="单位" 
        prop=""/>
         <el-table-column 
        align="center" 
        label='等级"低"名称' 
        prop=""/>
         <el-table-column 
        align="center" 
        label='等级"中"名称'  
        prop=""/>
         <el-table-column 
        align="center" 
        label='等级"高"名称' 
        prop=""/>
         <el-table-column 
        align="center" 
        label="调节间隔" 
        prop=""/>
         <el-table-column 
        align="center" 
        label="最小值" 
        prop=""/>
         <el-table-column 
        align="center" 
        label="调节默认低值" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="舒适区默认低值" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="舒适区默认高值" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="调节默认高值" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="最大值" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="权重" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="函数期望值" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="函数方差" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="启用/禁用" 
        prop=""/> -->
      <el-table-column 
        align="center" 
        label="操作" 
        width="250">
        <template slot-scope="scope">
          <!-- <el-button 
            size="small" 
            type="danger"
            @click="delCard(scope.row)" >
            删除
          </el-button> -->
          <el-row>
            <el-col :span="8">
              <el-button 
                size="small" 
                type="primary" 
                @click="editCard(scope.row)">
                修改
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-input
                v-model="scope.row.new_sort_no"
                size="mini" 
                type="number"/>
            </el-col>
            <el-col :span="8">
              <el-button
                size="small"
                type="primary" 
                @click="sortChange(scope.row)">
                排序
              </el-button>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>

    <!-- <div 
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
    </div> -->

    <paramsConfigView 
      v-if="addView" 
      :config-detail="configDetail"
      :add-view="addView"
      :op="op"
      @refresh="refresh"
      @closeView="closeView"/>
    <Paging
      :page-query="listQuery"
      :total="total"
      paging-status=""
      @changePage="currentPageChange"/>
  </div>
</template>

<script>
import paramsConfigView from "@/components/configManagement/paramsConfigView"
import { queryParams,updateParams } from '@/api/config.js'
import Paging from '@/components/paging'
export default {
  components:{
    paramsConfigView,
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
      configDetail:{},
      op:'',
      paramsList:[
        // {title:'room_id',key:'room_id',required:true},
        {title:'排序编号',key:'sort_no',required:true},
        {title:'名称',key:'param_name',required:true},
        {title:'单位',key:'unit',required:true},
        {title:'等级"低"名称',key:'name_low',required:true},
        {title:'等级"中"名称',key:'name_mid',required:true},
        {title:'等级"高"名称',key:'name_high',required:true},
        {title:'调节间隔',key:'step',required:true},
        {title:'最小值',key:'min',required:true},
        {title:'调节默认低值',key:'default_low',required:true},
        {title:'舒适默认低值',key:'comfort_low',required:true},
        {title:'舒适默认高值',key:'comfort_high',required:true},
        {title:'调节默认高值',key:'default_high',required:true},
        {title:'最大值',key:'max',required:true},
        {title:'权重',key:'weight',required:true},
        {title:'正太分布期望值',key:'expect',required:true},
        {title:'正太分布方差',key:'deviation',required:true},
        {title:'启用状态',key:'enable',required:true}
        // {title:'是否变更排序',key:'order_change',required:true}
      ],
      total:0,

    }
  },
  computed: {
  },
  created() {},
  mounted() {
    this.refresh()
  },
  methods: {
    sortChange(row){
      console.log('row:',row)
      if (row.new_sort_no === '' || isNaN(row.new_sort_no)) {
        this.$message.error('请输入排序号！')
        return
      }
      const params = Object.assign({},row)
      params.sort_no = params.new_sort_no
      console.log('修改的params：',params)
      updateParams(params).then(res=>{
        console.log('修改参数返回：',res)
        if (res.code) {
          this.$message.success('修改成功！')
          this.refresh()
        }else{
          this.$message.error(res.msg)
        }
      })
    },
    currentPageChange(listQuery) {
      console.log('传入的分页查询参数：',listQuery)
      Object.assign(this.listQuery,listQuery)//同步页码
      const params = {
        begin:listQuery.page-1,
        size:listQuery.limit
      }
      this.query(params)
    },
    closeView(){
      this.addView = false
    },
    refresh() {
      const params = {
        begin:0,//每次刷新都是从第一页开始
        size:this.listQuery.limit
      }
      this.query(params)
    },
    query(params){
      this.listLoading = true
      queryParams(params).then(res=>{
        console.log('查询的结果：',res)
        if (res.code === 200) {
          if (res.data && res.data.list) {
            this.tagList = res.data.list
            this.total = res.data.total
          }  
        }else{
          this.$message.error(res.msg)
        }
        this.listLoading = false
      })
    },
    addCart() {   // button按钮事件
      this.op = "add"
      this.addView = true
      this.configDetail = {}
    },
    editCard(row) {
      console.log('row:',row)
      this.op = "edit"
      this.configDetail = row
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
    }
  }
}
</script>
<style lang='scss' scoped>
.sort_box{
  display: inline-block;
  margin-left: 30px;
}
</style>
