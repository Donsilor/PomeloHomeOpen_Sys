<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button 
        size="medium" 
        type="primary" 
        @click="addCart">
        新增分数
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
      <template v-for="(item,index) in paramsList">
        <el-table-column
          v-if="item.key === 'scoreBorder'"
          :key="index"
          :label="item.title" 
          align="center">
          <template slot-scope="scope">
            {{ scope.row.scoreSymbol }} {{ scope.row.scoreBorder }}
          </template>
        </el-table-column>
        <el-table-column
          v-if="item.key === 'scoreLevel'"
          :key="index"
          :label="item.title" 
          align="center">
          <template slot-scope="scope">
            {{ levelList[scope.row.scoreLevel] }}
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="index"
          :label="item.title" 
          :prop="item.key" 
          align="center"/>
      </template>
     
      <el-table-column 
        align="center" 
        label="操作" 
        width="150">
        <template slot-scope="scope">
          <el-button 
            size="small" 
            type="danger"
            @click="delCard(scope.row)" >
            删除
          </el-button>
          <el-button 
            size="small" 
            type="primary" 
            @click="editCard(scope.row)">
            修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <Paging
      :total="total"
      paging-status=""
      @changePage="currentPageChange"/>
    <scoreConfigView
      v-if="addView"
      :config-detail="configDetail"
      :op="op"
      :add-view="addView"
      @refresh="refresh"
      @closeView="closeView"/>
  </div>
</template>

<script>
import scoreConfigView from "@/components/configManagement/scoreConfigView"
import Paging from '@/components/paging'
import { getScoreList,deleteScore} from '@/api/config.js'
export default {
  components:{
    scoreConfigView,
    Paging
  },
  data() {
    return {
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 15
      },
      tagList: [],
      addView:false,
      total:0,
      configDetail:{},
      op:'',
      paramsList:[
        {title:'等级',key:'scoreLevel',required:true},
        {title:'分数区间0-100',key:'scoreBorder',required:true},
        {title:'描述',key:'scoreDesc',required:false},
        {title:'色值',key:'scoreColor',required:true},
      ],
      levelList:{
        0:'不及格',
        1:'及格',
        2:'良好',
        3:'优秀'
      }
    }
  },
  computed: {
  },
  created() {},
  mounted() {
    this.refresh()
  },
  methods: {
    query(params){
      this.listLoading = true
      getScoreList(params).then(res=>{
        console.log('查询的结果：',res)
        if (res.code === 200) {
          if (res.data) {
            this.tagList = res.data
            // this.total = res.data.length            
            // console.log('this.total:',this.total)
          }  
        }else{
          this.$message.error(res.msg)
        }
        this.listLoading = false
      })
    },
    closeView(){
      this.addView = false
    },
    refresh() {
      this.query({})
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
      this.addView = true
      this.configDetail = Object.assign({},row)
      this.op = "edit"
      // console.log('*row*------------------', row)  
      // this.isEdit = true
      // this.formVisible = true
      // this.formItem = row
      //  this.formItem.operator = 2
    },
    delCard(row){
      this.$confirm('确认删除？')
        .then(_ => {
          console.log(8888)
          const params = {
            scoreId:row.scoreId
          }
          deleteScore(params).then(res=>{
            console.log('删除结果：',res)
            if (res.code === 200) {
              this.refresh()
            }else{
              this.$message.error('删除失败！')
            }
          })
          // this.formItem = row
          //  this.formItem.operator = 3
          // this.onSubmit(); //调用onSubmit借口发起请求
        })
        .catch(_ => {})
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
