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
      <!-- <el-table-column 
        align="center" 
        label="id">
        <template slot-scope="scope">
          <div>
            {{ scope.row.x }}*{{ scope.row.y }}
          </div>
        </template>
      </el-table-column>
      <el-table-column 
        align="center" 
        label="标题" 
        prop="create_time"/> -->
      <!-- <el-table-column 
        align="center" 
        label="更新时间" 
        prop="update_time"/> -->
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

    <el-dialog 
      :visible.sync="formVisible" 
      :title="dialogTitle">
      <el-form label-width="120px">
        <el-form-item 
          label="宽">
          <el-input 
            v-model="formItem.x" 
            type="input"/>
        </el-form-item>
        <el-form-item label="高">
          <el-input 
            v-model="formItem.y" 
            type="input"/>
        </el-form-item>
      </el-form>
      <span 
        slot="footer" 
        class="dialog-footer">
        <el-button 
          type="primary" 
          @click="onSubmit">提交</el-button>
        <el-button @click="formVisible=false">取消</el-button>
      </span>
    </el-dialog>

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
import fetch from '@/utils/fetch'
import { addGlobalTags } from '@/api/check'
import { cardSizeList,cardOperation } from '@/api/screenManage'
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
      // ====table===
      list: null,
      // total: null,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 5
      },
      formVisible: false,
      isEdit: false,
      tagList: [],
      formItem: {
        y: '',
        x: '',
        operator: '' //1：新增、2：修改、3：删除
      },
      addView:false,
      total:0,
      configDetail:{},
      op:'',
      paramsList:[
        {title:'id',key:'id',required:true},
        {title:'标题',key:'title',required:true},
        {title:'创建时间',key:'createTime',required:true},
        {title:'更新时间',key:'updateTime',required:true}
      ],
    }
  },
  computed: {
    dialogTitle() {
      return this.isEdit ? '修改卡片' : '新增卡片'
    }
  },
  created() {
    this.refresh()
  },
  mounted() {
    
  },
  methods: {
    getList(params){
      queryCopyList(params).then(res=>{
        console.log('列表返回：',res)
        if (res.code === 0) {
          if (res.data) {
            this.tagList = res.data
          }
          if (res.page_info) {
            this.total = res.page_info.total
            console.log('this.total:',this.total)
          }
        }else{
          this.$message.error(res.msg)
        }
      })
    },
    closeView(){
      this.addView = false
    },
    dataFormat(originVal) { // 后台传回来的S
      const date = new Date(originVal)
      const y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      const d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      const f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return y + '-' + m + '-' + d + ' ' + h + ':' + f + ':' + s
    },
    refresh() {
      // this.$nextTick(() => {
      // this.getCardSizeList()
      const params = {
        pageNumber:1,
        pageSize:this.listQuery.limit
      }
      this.getList(params)
      // })
    },
    
    getCardSizeList(){
      this.listLoading = true
      const params = {
        size: this.listQuery.limit,
        page: this.listQuery.page
      }
      cardSizeList(params).then(res=>{
        console.log('2222222', res)
        this.tagList = res.data
        this.tagList.forEach((ele)=>{
          ele.create_time = this.dataFormat(ele.create_time*1000)
          ele.update_time = this.dataFormat(ele.update_time*1000)
        })
        //this.total = res.page_info.total
        this.listLoading = false
      })
    },

    handleSizeChange(val) {  // 分页功能
      this.listQuery.limit = val
      console.log(val)
      this.getCardSizeList()
    },
    handleCurrentChange(val) { // 改变页码数量
      this.listQuery.page = val
      this.getCardSizeList()
    },
    addCart() {   // button按钮事件
      this.addView = true
      this.configDetail = {}
      this.op = "add"
      // this.isEdit = false // 编辑状态开关
      // this.formVisible = true // 蒙版开关
      // this.formItem = {}
      // this.formItem.operator = 1
    },
    editCard(row, isEdit) {
      console.log('row:',row)
      this.configDetail = Object.assign({},row)
      this.op = "edit"
      this.addView = true
      // console.log('*row*------------------', row)  
      // this.isEdit = true
      // this.formVisible = true
      // this.formItem = row
      //  this.formItem.operator = 2
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
    onSubmit() {
      const params = this.formItem
      console.log('请求参数：',JSON.stringify(params))
      cardOperation(params).then(res => {
        console.log('返回的数据：',res)
        this.$message.success('操作成功！')
        this.formVisible = false
        this.getCardSizeList()
      })
    },
    currentPageChange(listQuery) {
      console.log('传入的分页查询参数：',listQuery)
      // Object.assign(this.listQuery, {
      //   page: listQuery.page,
      //   limit: listQuery.limit
      // })
      // this.getTaskList()
    }
  }
}
</script>
