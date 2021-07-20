<template>
  <div class="app-container">
    <el-row class="product-menu">
      <el-col>
        <el-button 
          type="primary" 
          class="first-btn" 
          @click="createdTemplate(1)">创建模板</el-button>
      </el-col>
      <el-col :span="12">
        <el-input 
          v-model="searchVal" 
          placeholder="请输入模板名称" 
          class="input-with-select"
          @keyup.enter.native="search">
          
          <el-button 
            slot="append" 
            icon="el-icon-search" 
            @click="search"/>
        </el-input>
      </el-col>
    </el-row>

    <el-table
        :data="tableData"
        :cell-style="acellStyle"
        :header-cell-style="headCellStyle"
        border
        tooltip-effect="dark"
        style="width: 100%">
      <el-table-column align="center" label="序号" prop="sort">
      </el-table-column>
      <el-table-column align="center" label="触发类型" prop="">
        <template slot-scope="scope">
          <div>{{ scope.row.sceneType == 0 ? '手动' : scope.row.sceneType == 1 ? '自动' : '安防' }}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="模板名称" prop="sceneName">
      </el-table-column>
      <el-table-column align="center" label="模板类型" prop="typeName">
      </el-table-column>
      <el-table-column align="center" label="模板简介" prop="sceneDesc">
      </el-table-column>
      <el-table-column align="center" label="创建时间" prop="createdTime">
      </el-table-column>
      <el-table-column align="center" label="修改时间" prop="updatedTime">
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          <el-tag type="success" v-if="!scope.row.isEnable">已启用</el-tag>
          <el-tag type="info" v-else>已禁用</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="320">
        <template slot-scope="scope">
          <el-button @click="openDialog(type=2, scope.row.id)" size="small" type="primary">查看</el-button>
          <el-button v-if="scope.row.ifShowBtn" @click="openDialog(type=3, scope.row.id)" size="small" type="primary">编辑</el-button>
          <el-button v-else size="small" type="info" disabled>编辑</el-button>
          <el-button v-if="!scope.row.isEnable" @click="ifEnable(scope.row)" size="small" type="warning">禁用</el-button>
          <el-button v-else @click="ifEnable(scope.row)" size="small" type="primary">启用</el-button>
          <el-button @click="deleteFault(scope.row.id)" size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>是否确认删除这条模板信息？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmDelete()">确 定</el-button>
      </span>
    </el-dialog>

    <AddDialog 
      v-if="addDialogVisible"
      :add-dialog-visible="addDialogVisible"
      :edit-id="editId"
      :dialogType="dialogType"
      @closeAddDialog="closeAddDialog"
    />

    <Paging 
      :total="total"
      :pageQuery="listQuery"
      @changePage="changePage"/>
  </div>
</template>

<script>
import { getSenceTemplate, delSenceTemplate, enableSenceTemplate } from '@/api/ruleEngine.js'
import AddDialog from '@/components/ruleEngine/template/addDialog'
import Paging from '@/components/paging'

export default {
  components: {
    AddDialog,
    Paging
  },
  data() {
    return {
      searchVal: '',
      tableData: [],
      addDialogVisible: false,
      dialogType: 1,          // 弹窗类型： 1为创建，2为查看，3为编辑
      editId: 0,
      listLoading: false,
      dialogVisible: false,
      delId: '',
      total: 0, // 分页功能,从后台获取
      listQuery: {
        page: 1,
        limit: 15
      },
      // 设置表格的样式
      acellStyle: { 'text-align': 'center' },
      headCellStyle: { 'text-align': 'center', 'font-weight': 'bold', 'font-size': '17px', color: 'black', 'background-color': '#f4f5f7' },
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 分页方法
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.listQuery.page = 1
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.listQuery.page = 1
      this.listQuery.limit = val
      this.getList()
    },
    // 搜索
    search() {
      this.getList(this.searchVal)
    },
    // 获取场景列表
    getList(val) {
      const params = {
        pageNumber: this.listQuery.page,
        pageSize: this.listQuery.limit,
        sceneName: val ? val : ''
      }
      getSenceTemplate({ params }).then((res) => {
        const resData = res.data
        this.total = resData.total
        let tableData = JSON.parse(JSON.stringify(resData.list))
        tableData.forEach((item, i) => {
          if(item.sceneType == 2){
            tableData[i].ifShowBtn = false
          }else{
            tableData[i].ifShowBtn = true
          }
        });
        this.tableData = tableData
      })
    },
    // 创建模板
    createdTemplate(){
      this.editId = 0
      this.dialogType = 1
      this.addDialogVisible = true  
    },
    // 编辑查看模板
    openDialog(type, id) {
      this.editId = id
      this.dialogType = type
      this.addDialogVisible = true
    },
    // 启用禁用模板
    ifEnable(row){
      const params = {
        id: row.id,
        isEnable: row.isEnable ? 0 : 1
      }

      enableSenceTemplate({ params }).then((res) => {
        if(res.code == 200){
          this.$message({
              type: 'success',
              message: '修改成功!'
          })
          this.getList()
        }
      })
    },
    // 删除模板
    deleteFault(id) {
      this.dialogVisible = true
      this.delId = id
    },
    // 确认删除
    confirmDelete() {
      const params = {
        id: this.delId
      }

      delSenceTemplate({ params }).then((res) => {
        if(res.code == 200){
          this.dialogVisible = false
          this.getList()
        }
      })
    },
    // 关闭弹窗
    closeAddDialog(val) {
      this.addDialogVisible = false
      if (val) {
        this.getList()
      }
    },
     // 分页管理
    changePage(val) {
      this.listQuery = val
      this.getList()
    }
  }
}
</script>

<style lang='scss' scoped>
  .product-menu{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    .showOnline{
      margin-right: 20px;
    }
    .is-justify-end{
      align-items: center;
    }
    .left{
      span{
        margin-right: 20px;
        font-size: 20px;
        font-weight: 600;
      }
      .first-btn{
        margin-right: 10px;
      }
      .refalsh{
        margin-right: 20px;
      }
    }
  }
</style>


