<template>
  <div class="screen-container">
    <h4>屏幕配置列表</h4>
    <el-button
      type="primary"
      @click="addNew">新增面板页面</el-button>
    <el-table
      :data="tableData"
      border
      style="width: 1100px">
      <el-table-column
        fixed
        prop="pageId"
        label="ID"/>
      <el-table-column
        prop="pageName"
        label="页面名称"
        width=""/>
      <el-table-column
        label="初始化状态是否启用"
        width="">
        <template slot-scope="scope">
          {{ scope.row.pageEnable === 0?'禁用':'启用' }}
        </template>
      </el-table-column>
      <el-table-column
        prop="sortNo"
        label="排序"/>
      <el-table-column
        label="操作"
        width="350">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="mini"
            @click="handleEdite(scope.row)">编辑</el-button>
          <div class="sort_box">
            <el-input
              v-model="scope.row.newSort"
              size="mini"
              placeholder="请输入排序号"/>
            <el-button
              type="info"
              size="mini"
              @click="handleMove(scope.row)">排序</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <AddDialog 
      v-if="dialogFormVisible"
      :table-data="tableData"
      :status="status"
      :row-data="rowData"
      :dialog-form-visible="dialogFormVisible" 
      @closeAddDialog="closeAddDialog"/>
  </div>
</template>

<script>
import {panelList,panelHandler} from '@/api/panel.js'
// import {getScreenList,screenEdite} from '@/api/panel.js'
import {dateFormat} from '@/utils/index.js'
import AddDialog from './addPanelDialog'
export default {
  name: 'Index',
  components:{
    AddDialog
  },
  data() {
    return {
      dialogFormVisible: false,
      tableData: [],
      status: '',
      rowData:null
    }
  },
  mounted() {
    this.getDataList()
  },
  methods: {
    handleMove(row){
      let sort = parseInt(row.newSort)
      // const reg = /^[0-9]\d*$/ //匹配除负整数
      const reg = /^-?[0-9]\d*$/ //匹配整数
      if (!reg.test(sort)) {
        this.$message.error('请输入整数且不包括负整数')
        return
      }
      let params = {
        pageId:row.pageId,
        pageName:row.pageName,
        sortNo:sort,
        pageEnable:row.pageEnable
      }
      panelHandler(params).then(res=>{
        this.getDataList()
      })
    },
    getDataList(){
      panelList().then(res=>{
        this.tableData = res.data
      })
    },
    handleEdite(row) {
      this.dialogFormVisible= true
      this.status = 'edit'
      this.rowData = row
    },
    addNew(){
      this.status = 'add'
      this.dialogFormVisible= true
    },
    closeAddDialog(val){
      if(val){
        this.getDataList()
      }
      this.dialogFormVisible = false
    }
  },
}
</script>

<style scoped>
.screen-container{
  margin: 0px 20px;
}
.sort_box{
  display: inline-block;
  margin-left: 30px;
}
.el-button{
  margin-bottom: 10px;
}
  .el-input{
    width: 110px;
  }
</style>
