<template>
  <div class="app-container">
    <!-- 品类 -->
    <div class="sec-category">
      <el-row class="product-menu">
        <el-col>
          <el-button 
            type="primary" 
            class="first-btn" 
            @click="addScene">创建类型</el-button>
        </el-col>
        <el-col :span="12">
          <el-input 
            v-model="sceneName" 
            placeholder="请输入场景名称" 
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
            prop="sort"
            label="序号"/>
          <el-table-column
            prop="typeName"
            label="场景名称"/>
          <el-table-column
            prop="createdTime"
            label="创建时间"/>
          <el-table-column
            prop="updatedTime"
            label="修改时间 "/>
          <el-table-column
            label="状态">
            <template slot-scope="scope">
              <div>{{ scope.row.isEnable ? '已启用' : '已禁用' }}</div>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
          >
            <template slot-scope="scope">
              <div class="opreationBtn">
                <el-button
                  v-if="scope.row.typeName !== '安防'"
                  type="primary" 
                  size="mini" 
                  @click="handlerClick('edit',scope.row)">编辑</el-button>
                
                <el-button
                  v-if="scope.row.typeName !== '安防'"
                  type="primary" 
                  size="mini" 
                  @click="handlerClick('ifEnable',scope.row)">{{scope.row.isEnable ? '禁用' : '启用'}}</el-button>

                <el-button
                  v-if="scope.row.typeName !== '安防'"
                  type="primary" 
                  size="mini" 
                  @click="handlerClick('delete',scope.row)">删除</el-button>

                <el-button
                  v-if="scope.row.typeName == '安防'"
                  type="primary" 
                  size="mini" 
                  @click="handlerClick('save',scope.row)">保存</el-button>

                <el-button
                  v-if="scope.row.typeName == '安防'"
                  type="primary" 
                  size="mini" 
                  @click="handlerClick('quit',scope.row)">取消</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <Paging 
        :total="total" 
        @changePage="changePage"/>
      <!-- 新增dialog -->
      <AddDialog 
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
import AddDialog from '@/components/ruleEngine/scene/addDialog'
import Paging from '@/components/paging'
import { subCategory } from '@/api/categoryManager' // subCategoryDetail
import { getSenceList, enableSenceType, delSenceType } from '@/api/ruleEngine.js'

export default {
  components: {
    Paging,
    AddDialog
  },
  mixins: [mixin],
  data() {
    return {
      routeData: null,
      // 分页功能
      total: 0, // 到时候从后台获取
      listQuery: {
        page: 1,
        limit: 5
      },
      // ------------
      tableData: [],
      // checked: false,
      sceneName: '',
      // 设置表格的样式
      acellStyle: { 'text-align': 'center' },
      headCellStyle: { 'text-align': 'center', 'font-weight': 'bold', 'font-size': '17px', color: 'black', 'background-color': '#f4f5f7' },
      addDialogVisible: false,
      propData: {
        status: 0, // 0.新增 1.查看 2.编辑
        editData: null,
        categoryId: ''
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    sel() {
      this.listQuery.page = 1
      this.getList()
    },
    getList() {
      const params = {
        pageNumber: this.listQuery.page,
        pageSize: this.listQuery.limit,
        typeName: ""
      }
      getSenceList({ params }).then((res) => {
        const resData = res.data
        this.total = resData.total
        this.tableData = resData.list
      })
    },
    addScene() {
      this.propData.status = 0
      this.addDialogVisible = true
    },
    closeAddDialog(val) {
      this.addDialogVisible = false
      if (val) {
        this.getList()
      }
    },
    handlerClick(sty, row) {
      let params;
      switch (sty) {
        case 'edit':
          this.propData.status = 2
          this.addDialogVisible = true
          this.propData.editData = Object.assign({}, row);
          // this.propData.categoryId = row.categoryId // 子集ID
          break

        case 'ifEnable':
          params = {
            "id": row.id, 
            "isEnable": row.isEnable ? false : true
          }
          enableSenceType({ params }).then((res) => {
            this.$message({
              type: 'success',
              message: '修改成功!'
            });
            this.getList()
          })
          break

        case 'delete':
          params = {
            "id": row.id
          }
          delSenceType({ params }).then((res) => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getList()
          })
          break

        default:
          break
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
