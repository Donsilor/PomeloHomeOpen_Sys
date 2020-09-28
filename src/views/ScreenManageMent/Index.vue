<template>
  <div class="screen-container">
    <h4>屏幕配置列表</h4>
    <el-button
      type="primary"
      @click="addNew">新增大小</el-button>
    <el-table
      :data="tableData"
      border
      style="width: 1100px">
      <el-table-column
        fixed
        prop="name"
        label="大小名称"
        width=""/>
      <el-table-column
        prop="width"
        label="宽（多少格子）"
        width=""/>
      <el-table-column
        prop="height"
        label="高（多少格子）"
        width=""/>
      <el-table-column
        prop="createTime"
        label="创建时间"
        width=""/>
      <el-table-column
        prop="updateTime"
        label="更新时间"
        width=""/>
      <el-table-column
        label="操作"
        width="">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="mini"
            @click="handleDelete(scope.row)">删除</el-button>
          <el-button
            type="text"
            size="mini"
            @click="handleEdite(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <edite :dialog-visible.sync="dialogFormVisible"/>
  </div>
</template>

<script>
import Edite from './edite.vue'
export default {
  name: 'Index',
  components:{Edite},
  data() {
    return {
      dialogFormVisible: false,
      tableData: [{
        createTime: '2016-05-02',
        updateTime: '2016-05-02',
        name: '配置1',
        width:'2',
        height:'3',
        province: '屏幕配置',
      }, {
        createTime: '2016-05-02',
        updateTime: '2016-05-02',
        name: '配置1',
        width:'2',
        height:'3',
        province: '屏幕配置',
      },{
        createTime: '2016-05-02',
        updateTime: '2016-05-02',
        name: '配置1',
        width:'2',
        height:'3',
        province: '屏幕配置',
      },{
        createTime: '2016-05-02',
        updateTime: '2016-05-02',
        name: '配置1',
        width:'2',
        height:'3',
        province: '屏幕配置',
      },{
        createTime: '2016-05-02',
        updateTime: '2016-05-02',
        name: '配置1',
        width:'2',
        height:'3',
        province: '屏幕配置',
      },]
    }
  },
  methods: {
    handleEdite(row) {
      this.$router.push('/screenManagement/screenEdite')
    },
    addNew(){
      this.dialogFormVisible= true
      console.log('新增')
      // this.$router.push('/screenManagement/screenEdite')
    },
    handleDelete(){

    }
  },
}
</script>

<style scoped>
.screen-container{
  margin: 0px 20px;
}
.el-button{
  margin-bottom: 10px;
}
</style>
