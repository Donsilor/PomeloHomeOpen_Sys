<template>
  <div class="screen-container">
    <h4>屏幕配置列表</h4>
    <el-button
      type="primary"
      @click="addNew">新增配置</el-button>
    <el-table
      :data="tableData"
      border
      style="width: 1100px">
      <el-table-column
        fixed
        prop="name"
        label="大小名称"
        width="250"/>
      <el-table-column
        :formatter="timeFomatter"
        prop="create_time"
        label="创建时间"
        width=""/>
      <el-table-column
        :formatter="timeFomatter"
        prop="update_time"
        label="更新时间"
        width=""/>
      <el-table-column
        prop="sort"
        label="排序"
        width="100"/>
      <el-table-column
        label="操作"
        width="350">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="mini"
            @click="handleCheck(scope.row)">查看</el-button>
          <el-button
            type="text"
            size="mini"
            @click="handleDelete(scope.row)">删除</el-button>
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
    <edite
      v-if="dialogFormVisible"
      :template-obj="templateObj"
      :title="title"
      :dialog-visible.sync="dialogFormVisible"
      @refresh="getDataList"/>
  </div>
</template>

<script>
import {getScreenList,screenEdite} from '@/api/screenManage.js'
import {dateFormat} from '@/utils/index.js'
import Edite from './edite.vue'
export default {
  name: 'Index',
  components:{Edite},
  data() {
    return {
      templateObj:{},
      title:'新增模板',
      dialogFormVisible: false,
      tableData: []
    }
  },
  mounted() {
    this.getDataList()
  },
  methods: {
    handleMove(row){
      let sort = parseInt(row.newSort)
      if (!sort||sort<1){
        this.$message.error('请输入正整数')
        return
      }
      let params = {
        id:row.id,
        name:row.name,
        sort:sort,
        template:row.template,
        operator:2
      }
      screenEdite(params).then(res=>{
        this.getDataList()
      })
    },
    getDataList(){
      getScreenList({page:1,size:10}).then(res=>{
        this.tableData = res.data
      })
    },
    timeFomatter(row, column, cellValue, index){
      return dateFormat(cellValue*1000, 'yyyy-MM-dd HH:mm:ss')
    },
    widthFormatter(row, column, cellValue, index){
      let template = JSON.parse(row.template)
      let item = template[0]
      let size = item&&item[0]
      let width=size&&size[0]
      return width
    },
    heightFormatter(row, column, cellValue, index){
      let template = JSON.parse(row.template)
      let item = template[0]
      let size = item&&item[0]
      let height=size&&size[1]
      return height
    },
    handleEdite(row) {
      console.log('row--', row)
      this.title='编辑模板'
      this.templateObj = row
      this.dialogFormVisible= true
    },
    addNew(){
      this.title = '新增模板'
      this.dialogFormVisible= true
      this.templateObj={}
    },
    handleCheck(row){
      this.title='查看模板'
      this.templateObj = row
      this.dialogFormVisible= true
    },
    handleDelete(row){
      let params = {
        id:row.id,
        name:row.name,
        operator:3
      }
      screenEdite(params).then(res=>{
        this.$message.success('删除成功')
        this.getDataList()
      })
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
