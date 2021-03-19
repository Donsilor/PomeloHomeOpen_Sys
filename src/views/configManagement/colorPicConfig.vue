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
      <template v-for="(item,index) in paramsList">
        <!-- <el-table-column
          v-if="item.key ==='bgPic'"
          :key="index"
          :label="item.title" 
          :prop="item.key" 
          align="center">
          <template slot-scope="scope">
            <el-tooltip 
              content="点击查看大图" 
              placement="top">
              <img 
                :src="`http://beenet-beta.oss-cn-shenzhen.aliyuncs.com/${scope.row[item.key]}`"
                class="listPic" 
                @click="picShowFun(`http://beenet-beta.oss-cn-shenzhen.aliyuncs.com/${scope.row[item.key]}`)">
            </el-tooltip>
          </template>
        </el-table-column> -->
        <el-table-column
          :key="index"
          :label="item.title" 
          :prop="item.key" 
          align="center"/>
      </template>
      
      <el-table-column 
        align="center" 
        label="操作" 
        width="250">
        <template slot-scope="scope">
          
          <el-row>
            <el-col :span="8">
              <el-button 
                size="small" 
                type="primary" 
                @click="editCard(scope.row, true)">
                修改
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-input
                v-model="scope.row.new_order"
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
    <!-- 查看大图 -->
    <el-dialog
      v-if="shwoBigPic"
      :visible.sync="shwoBigPic"
      width="60%">
      <img 
        :src="shwoBigPicUrl" 
        style="width:100%">
    </el-dialog>
  </div>
</template>

<script>
import colorPicConfigView from "@/components/configManagement/colorPicConfigView"
import Paging from '@/components/paging'
import { getRoomList} from '@/api/config.js'
import { updateRoom} from '@/api/config.js'
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
      ],
      shwoBigPic:false,
      shwoBigPicUrl:''
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
      if (row.new_order === '' || isNaN(row.new_order)) {
        this.$message.error('请输入排序号！')
        return
      }
      const params = Object.assign({},row)
      params.order = params.new_order
      console.log('修改的params：',params)
      updateRoom(params).then(res=>{
        console.log('修改房间返回：',res)
        if (res.code) {
          this.$message.success('修改成功！')
          this.refresh()
        }else{
          this.$message.error(res.msg)
        }
      })
    },
    picShowFun(url){
      this.shwoBigPicUrl = url
      this.shwoBigPic = true
    },
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
<style lang="scss" scoped>
.listPic{
  width: 40px;
  cursor: pointer;
}
</style>
