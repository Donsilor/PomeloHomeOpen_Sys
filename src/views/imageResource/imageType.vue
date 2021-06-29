<template>
  <div class="app-container">
    <el-row style="margin-bottom: 20px">
      <el-col :span="4">
        <div style="font-size:20px">
          <el-tooltip 
            content="点击返回上页" 
            placement="top">
            <i 
              class="el-icon-back" 
              style="font-size:24px; font-weight:600; cursor:pointer" 
              @click="goBack"/>
          </el-tooltip>
        </div>
      </el-col>
    </el-row>
    <div class="sec-category">
      <el-row class="product-menu">
        <el-col>
          <el-button 
            type="primary" 
            class="first-btn" 
            @click="addMap"
          >添加图片</el-button
          >
        </el-col>
        <el-col :span="12">
          <el-input
            v-model="displayName"
            placeholder="请输入图片名称"
            class="input-with-select"
          >
            <el-button 
              slot="append" 
              icon="el-icon-search" 
              @click="select" />
          </el-input>
        </el-col>
      </el-row>

      <!-- 数据展示区域 -->
      <div class="dataList">
        <el-table
          ref="multipleTable"
          :data="tableData"
          :cell-style="acellStyle"
          :header-cell-style="headCellStyle"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @sort-change="tableChange"
        >
          <el-table-column 
            width="80px"
            prop="id" 
            label="序号" >
            <template slot-scope="scope">
              {{ (listQuery.page -1 ) * listQuery.limit + scope.$index + 1 }}
            </template>
          </el-table-column>
          <el-table-column 
            prop="displayName" 
            label="中文名称" />
          <el-table-column 
            prop="fileName" 
            label="图片名称" />
          <el-table-column 
            prop="identityName" 
            label="英文名称" />
          <el-table-column 
            prop="description" 
            label="图片描述" />
          <el-table-column 
            prop="createTime" 
            sortable="custom" 
            label="创建时间" />
          <el-table-column 
            prop="updateTime" 
            sortable="custom" 
            label="修改时间" />
          
          <el-table-column 
            prop="version" 
            label="版本号" />
          <el-table-column 
            prop="status" 
            label="状态">
            <template slot-scope="scope">
              {{
                scope.row.status === 1? '启用' :'禁用'
              }}
            </template>
          </el-table-column>
          <el-table-column 
            label="操作" 
            width="400px">
            <template slot-scope="scope">
              <div class="opreationBtn">
                <el-button
                  type="primary"
                  size="mini"
                  @click="selectClick(scope.row)"
                >查看</el-button>
                <el-button
                  type="primary"
                  size="mini"
                  @click="updateClick(scope.row)"
                >编辑</el-button>
                <el-button
                  v-if="scope.row.status === 0"
                  type="success"
                  size="mini"
                  @click="startClick(scope.row)"
                >启动</el-button>
                <el-button
                  v-else
                  type="warning"
                  size="mini"
                  @click="stopClick(scope.row)"
                >禁用</el-button>
                <el-button
                  type="danger"
                  size="mini"
                  @click="delClick(scope.row)"
                >删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <Paging 
        :total="total" 
        @changePage="changePage" />
      <!-- 新增dialog -->
      <AddDialog1
        v-if="addDialogVisible"
        :add-dialog-visible="addDialogVisible"
        :category="routeData"
        :prop-data="propData"
        @closeAddDialog="closeAddDialog"
      />
    </div>
  </div>
</template>
<script>
import { mixin } from '@/mixins/mixin.js'
import AddDialog1 from '@/components/imageResource/addDialog1'
import Paging from '@/components/paging'
import {
  imageDetailUpdate,
  imageDetailPage,
  imageDetailsDelete,
  imageEnable,
} from '@/api/image' // subCategoryDetail
export default {
  name: 'Index',
  components: {
    Paging,
    AddDialog1,
  },
  mixins: [mixin],
  data() {
    return {
      routeData: null,
      // 分页功能
      total: 0, // 到时候从后台获取
      listQuery: {
        page: 1,
        limit: 5,
      },
      displayName:'',
      // ------------
      tableData: [],
      // 设置表格的样式
      acellStyle: { 'text-align': 'center' },
      headCellStyle: {
        'text-align': 'center',
        'font-weight': 'bold',
        'font-size': '17px',
        color: 'black',
        'background-color': '#f4f5f7',
      },
      addDialogVisible: false,
      propData: {
        status: 0, // 0.新增 1.查看 2.编辑
        categoryId: '',
      },
    }
  },
  created() {
    this.getList()
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.da
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    select() {
      this.listQuery.page = 1
      this.getList()
    },
    tableChange(column){
      console.log(column)
      if(column.prop === 'createTime' && column.order){
        let paramsOrder = {}
        paramsOrder.orderBy = 'createTime'
        if(column.order === 'descending'){
          paramsOrder.direct = 'desc'
        }
        if(column.order === 'ascending'){
          paramsOrder.direct = 'asc'
        }
        this.getList(paramsOrder)
      }
      if(column.prop === 'updateTime' && column.order){
        let paramsOrder = {}
        paramsOrder.orderBy = 'updateTime'
        if(column.order === 'descending'){
          paramsOrder.direct = 'desc'
        }
        if(column.order === 'ascending'){
          paramsOrder.direct = 'asc'
        }
        this.getList(paramsOrder)
      }
    },
    getList(val) {
      let params = {
        pageNum: this.listQuery.page,
        pageSize: this.listQuery.limit,
        search: {
          classId: this.$route.query.id,
          displayName: this.displayName
        }
      }
      if(val) {params = {...params, ...val}}
      imageDetailPage( params ).then((res) => {
        if (res.code === 200) {
          this.total = res.data.totalSize
          this.tableData = res.data.content
        }
      })
      // imageDetailAdd({ params }).then((res) => {
      //   if(res.code==200){
      //     this.$message({
      //         type: 'success',
      //         message: '成功',
      //       })
      //   }
      //   this.pageNum=res.data.pageNum
      //   this.pageSize=this.data.totalSize
      // })
      // imageDetailUpdate({ params }).then((res) => {
      //   if(res.code==200){
      //     this.$message({
      //         type: 'success',
      //         message: '成功',
      //       })
      //   }
      //   this.pageNum=res.data.pageNum
      //   this.pageSize=this.data.totalSize
      // })
      // imageUpdate({ params }).then((res) => {
      //   if(res.code==200){
      //     this.$message({
      //         type: 'success',
      //         message: '成功',
      //       })
      //   }
      //   this.pageNum=res.data.pageNum
      //   this.pageSize=this.data.totalSize
      // })
    },
    addMap() {
      this.propData.status = 0
      this.propData.classId = this.$route.query.id
      this.addDialogVisible = true
      this.getList()
    },
    closeAddDialog(val) {
      this.addDialogVisible = false
      if (val) {
        this.getList()
      }
    },
    selectClick(row) {
      this.propData.status = 1
      this.propData.id = row.id
      this.addDialogVisible = true
    },
    updateClick(row) {
      this.propData.status = 2
      this.propData.id = row.id
      this.addDialogVisible = true
    },
    startClick(row) {
      const params = {
        id: row.id,
        status: 1
      }
      imageEnable(params).then((res)=>{
        if(res.code === 200){
          this.$message.success('启用成功')
          this.getList()
        }
      })
    },
    stopClick(row) {
      const params = {
        id: row.id,
        status: 0
      }
      imageEnable(params).then((res)=>{
        if(res.code === 200){
          this.$message.success('禁用成功')
          this.getList()
        }
      })
    },
    delClick(row){
      const params = {
        id: row.id
      }
      this.$confirm('正在删除当前品类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        const params = {
          id: row.id
        }
        imageDetailsDelete(params).then((res) => {
          if (res.code === 200) {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            this.cutPage()
            this.getList()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '删除取消'
        })
      })
    },
    // 分页管理
    changePage(val) {
      this.listQuery = val
      this.getList()
    },
  },
}
</script>

<style lang='scss' scoped>
.primary-category {
  font-size: 18px;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid silver;
  margin-bottom: 20px;
  .go-back {
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    width: 25px;
    color: #0c0b0b;
  }
  .name {
    font-weight: 900;
  }
}
.sec-category {
  .product-menu {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    .showOnline {
      margin-right: 20px;
    }
    .is-justify-end {
      align-items: center;
    }
    .left {
      span {
        margin-right: 20px;
        font-size: 20px;
        font-weight: 600;
      }
      .first-btn {
        margin-right: 10px;
      }
      .refalsh {
        margin-right: 20px;
      }
    }
  }

  .dataList {
    background-color: white;
    margin-bottom: 20px;
    .cell {
      text-align: center;
    }
  }
}
</style>
