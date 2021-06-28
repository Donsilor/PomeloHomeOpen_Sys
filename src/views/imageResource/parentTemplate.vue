<template>
  <div class="app-container">
    <!-- 品类 -->
    <div class="sec-category">
      <el-row class="product-menu">
        <el-col>
          <el-button 
            type="primary" 
            class="first-btn" 
            @click="addType"
          >添加类型</el-button
          >
        </el-col>
        <el-col :span="12">
          <el-input 
            v-model="className"
            placeholder="请输入类型名称" 
            class="input-with-select">
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
          :data="dataList"
          :cell-style="acellStyle"
          :header-cell-style="headCellStyle"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @sort-change="tableChange"
        >
          <el-table-column 
            width="80"
            prop="id" 
            label="序号">
            <template slot-scope="scope">
              {{ (listQuery.page -1 ) * listQuery.limit + scope.$index + 1 }}
            </template>
          </el-table-column>
          <el-table-column 
            prop="className" 
            label="类型" />
          <el-table-column 
            prop="usage" 
            label="功能" />
          <el-table-column 
            prop="identityName" 
            label="英文名称" />
          <el-table-column 
            sortable="custom" 
            prop="createTime"
            label="创建时间 " />
          <el-table-column 
            sortable="custom"
            prop="updateTime" 
            label="修改时间 " />
          <el-table-column 
            label="操作" 
            width="460px">
            <template slot-scope="scope">
              <div class="opreationBtn">
                <el-button
                  type="primary"
                  size="mini"
                  @click="handlerClick(scope.row, 'viewSon')"
                >查看子类</el-button>
                <el-button
                  type="primary"
                  size="mini"
                  @click="handlerClick(scope.row, 'view')"
                >查看图片</el-button>
                <el-button
                  type="primary"
                  size="mini"
                  @click="handlerClick(scope.row, 'edit')"
                >编辑</el-button>
                <el-button
                  type="danger"
                  size="mini"
                  @click="handlerClick(scope.row, 'del')"
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
import AddDialog from '@/components/imageResource/addDialog'
import Paging from '@/components/paging'
import {imageTypegoryPage ,imageDelete} from '@/api/image.js'
export default {
  name: 'Index',
  components: {
    Paging,
    AddDialog,
  },
  mixins: [mixin],
  data() {
    return {
      routeData: null,
      // // 分页功能
      total: 0, // 到时候从后台获取
      listQuery:{
        page: 1,//页码  
        limit: 5,//一页最大数
      },
      dataList: [],
      id:1,
      className:'',
      // checked: false,
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
      },
    }
  },
  created() {
    this.getList()
  },
  methods: {
    select() {
      this.listQuery.page = 1
      this.getList()
    },
    getList(val) {
      let params = {
        search: {
          className: this.className,
          parentId : -1
        },
        pageNum: this.listQuery.page,
        pageSize: this.listQuery.limit,
      }
      if(val) {params = {...params, ...val}}
      console.log(params)
      imageTypegoryPage(params)
        .then((res) => {
          console.log(res.code)
          if (res.code === 200) {
            this.total = res.data.totalSize
            this.dataList = res.data.content
          }
        })
    },
    addType() {
      this.propData.status = 0
      this.propData.val = 'top'
      this.addDialogVisible = true
      // var adddata={}
      // if(this.data.id!==0){
      //   this.$router.push('/adddata')
      // }
      this.getList()
    },
    closeAddDialog(val) {
      this.addDialogVisible = false
      if (val) {
        this.getList()
      }
    },
    handlerClick(row,sty) {
      switch (sty) {
      case 'view':
        this.$router.push({
          path: 'imageType',
          query:{
            id: row.id
          }
        })
        break
      case 'viewSon':
        this.$router.push({
          path: 'template',
          query:{
            id: row.id,
            name: row.className
          }
        })
        break
      case 'edit':
        this.addDialogVisible = true
        this.propData = row
        this.propData.status = 2
        this.propData.val = 'top'
        break
      case 'del':
        this.$confirm('正在删除当前品类, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          const params = {
            id: row.id
          }
          imageDelete(params).then((res) => {
            console.log(res)
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
        break
      default:
        break
      }
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
    // 分页管理
    changePage(val) {
      console.log(val)
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
