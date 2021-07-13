<template>
  <div class="app-container">
    <el-row 
      style="margin-bottom: 20px" 
      class="row-handle">
      <el-col :span="2">
        <div style="font-size:20px">
          <el-tooltip 
            content="点击返回品类" 
            placement="top">
            <i 
              class="el-icon-back" 
              style="font-size:24px; font-weight:600; cursor:pointer" 
              @click="goBack"/>
          </el-tooltip>
        </div>
      </el-col>
      <el-col>
        <h2>品类： {{ this.$route.query.categoryName }} </h2>
      </el-col>
    </el-row>
    <!-- 品类 -->
    <div class="sec-category">
      <el-row class="product-menu">
        <el-col>
          <el-button 
            type="primary" 
            class="first-btn" 
            @click="addCategory">添加子品类</el-button>
        </el-col>
        <el-col :span="12">
          <el-input 
            v-model="subCategoryName" 
            placeholder="请输入子品类名称" 
            class="input-with-select" >
            <el-button 
              slot="append" 
              icon="el-icon-search" 
              @click="sel"/>
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
          style="width: 100%">
          <el-table-column
            prop="subCategoryNumber"
            label="子品类ID"/>
          <el-table-column
            prop="subCategoryName"
            label="子品类名称"/>
          <el-table-column
            prop="subCategoryNameE"
            label="子品类英文名"/>
          <el-table-column
            prop="brandId"
            label="品牌">
            <template slot-scope="scope">
              {{
                scope.row.brandId | brandName
              }}
            </template>
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间 "/>
          <el-table-column
            prop="updateTime"
            label="修改时间 "/>
          <el-table-column
            label="操作"
          >
            <template slot-scope="scope">
              <div class="opreationBtn">
                <el-button 
                  type="primary" 
                  size="mini" 
                  @click="handlerClick('edit',scope.row)"> 编辑</el-button>
                <el-button 
                  type="danger" 
                  size="mini" 
                  @click="handlerClick('del',scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <Paging 
        :total="total"
        :pageQuery="listQuery"
        @changePage="changePage"/>
      <!-- 新增品类dialog -->
      <AddSubDialog 
        v-if="addDialogVisible"
        :add-dialog-visible="addDialogVisible"
        :category="routeData"
        :prop-data="propData"
        @closeAddDialog="closeAddDialog"
      />
    <!-- 编辑品类dialog -->
    <!-- <EidtSubDialog v-if="editDialogVisible"
    :addDialogVisible="editDialogVisible"
    @closeAddDialog="closeEditDialog"
    :propData='propData'
    /> -->
    </div>
  </div>
</template>
<script>
import { mixin } from '@/mixins/mixin.js'
import AddSubDialog from '@/components/ruleEngine/sonCategoryDialog'
import Paging from '@/components/paging'
import { sonCategory, delSonCategory } from '@/api/categoryManager' // subCategoryDetail
export default {
  components: {
    Paging,
    AddSubDialog
  },
  mixins: [mixin],
  data() {
    return {
      routeData: null,
      // 分页功能
      total: 0, // 到时候从后台获取
      listQuery: {
        page: 1,
        limit: 15
      },
      // ------------
      tableData: [],
      // checked: false,
      subCategoryName: '',
      // 设置表格的样式
      acellStyle: { 'text-align': 'center' },
      headCellStyle: { 'text-align': 'center', 'font-weight': 'bold', 'font-size': '17px', color: 'black', 'background-color': '#f4f5f7' },
      addDialogVisible: false,
      propData: {
        status: 0, // 0.新增 1.查看 2.编辑
        categoryId: ''
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    sel() {
      this.listQuery.page = 1
      this.getList()
    },
    getList() {
      const params = {
        categoryId: this.$route.query.categoryId,
        subCategoryName: this.subCategoryName,
        pageNumber: this.listQuery.page,
        pageSize: this.listQuery.limit
      }
      sonCategory({ params }).then((res) => {
        const resData = res.data.data
        this.total = resData.total
        this.tableData = resData.list
      })
    },
    addCategory() {
      this.propData.status = 0
      this.propData.categoryId = this.$route.query.categoryId
      this.propData.categoryNumber = this.$route.query.deviceCategoryId
      this.addDialogVisible = true
    },
    closeAddDialog(val) {
      this.addDialogVisible = false
      if (val) {
        this.getList()
      }
    },
    handlerClick(sty, row) {
      console.log(row)
      switch (sty) {
      case 'edit':
        this.$router.push({
          path: 'sonCategoryEditPage',
          query: {
            subCategoryId: row.subCategoryId,
            subCategoryName: row.subCategoryName,
            deviceSubCategoryId: row.subCategoryNumber,
            categoryNumber: this.$route.query.deviceCategoryId,
            brandId: row.brandId
          }
        })
        // this.addDialogVisible = true
        this.propData.categoryId = row.categoryId // 子集ID
        this.propData.status = 1
        break
      case 'del':
        this.$confirm('正在删除当前品类, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          console.log(row)
          const params = {
            subCategoryId: row.subCategoryId,
            brandId: row.brandId,
            deviceSubCategoryId: row.subCategoryNumber,
            deviceCategoryId: Number(this.$route.query.deviceCategoryId)
          }
          delSonCategory({ params }).then((res) => {
            if (res.data.code === 200 || res.data.code === 0) {
              this.$message({
                type: 'success',
                message: '删除成功'
              }) 
              this.cutPage()
              console.log(this.listQuery.page)
              this.getList()
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '删除取消'
          })
        })
        break
      default:
        break
      }
    },
    goBack(){
      this.$router.go(-1)
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
.row-handle{
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c0c0c0;
}
.primary-category{
  font-size: 18px;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid silver;
  margin-bottom: 20px;
  .go-back{
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      width: 25px;
      color: #0c0b0b;
    }
  .name{
    font-weight: 900;
  }
}
.sec-category{
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

    .dataList{
      background-color: white;
      margin-bottom: 20px;
      .cell{
        text-align: center;
      }
    }
}
</style>
