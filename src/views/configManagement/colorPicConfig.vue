<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button 
        size="medium" 
        type="primary" 
        @click="addCart">
        新增配置
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
      :total="total"
      paging-status=""
      @changePage="currentPageChange"/>
    <colorPicConfigView
      v-if="addView"
      :config-detail="configDetail"
      :op="op"
      :add-view="addView"
      @refresh="refresh"
      @closeView="closeView"/>
  </div>
</template>

<script>
import colorPicConfigView from "@/components/configManagement/colorPicConfigView"
import Paging from '@/components/paging'
import { getRoomList} from '@/api/config.js'
export default {
  components:{
    colorPicConfigView,
    Paging
  },
  data() {
    return {
      // total: null,
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
        {title:'roomID',key:'roomId',required:true},
        {title:'名称',key:'roomName',required:true},
        {title:'图片',key:'bgPic',required:true},
        {title:'图标',key:'bgIcon',required:true},
        {title:'色值',key:'bgColor',required:true},
        {title:'排序值',key:'order',required:true}
      ]
    }
  },
  computed: {
  },
  created() {},
  mounted() {
    this.refresh()
  },
  methods: {
    query(){
      this.listLoading = true
      getRoomList().then(res=>{
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
      this.query()
    },
    addCart() {   // button按钮事件
      this.addView = true
      this.configDetail = {}
      this.op = "add"
    },
    editCard(row) {
      this.addView = true
      this.configDetail = Object.assign(row)
      this.op = "edit"
    },
    delCard(row){
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
