<template>
  <div class="app-container">
    <!-- 品类 -->
    <div class="sec-category">
      <el-row class="product-menu">
        <el-col>
          <el-button type="primary" class="first-btn" @click="addMap"
            >添加图片</el-button
          >
        </el-col>
        <el-col :span="12">
          <el-input
            v-model="className"
            placeholder="请输入图片名称"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search" @click="select" />
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
        >
          <el-table-column prop="id" label="序号" />
          <el-table-column prop="className" label="图片名称" />
          <el-table-column prop="identityName" label="英文名称" />
          <el-table-column prop="createTime" label="创建时间 " />
          <el-table-column prop="updateTime" label="修改时间 " />
          <el-table-column prop="status" label="状态">
            {{ haveaction }}
          </el-table-column>
          <el-table-column label="操作" width="300px">
            <template slot-scope="scope">
              <div class="opreationBtn">
                <el-button
                  type="primary"
                  size="mini"
                  @click="selectClick(scope.row)"
                >
                  查看</el-button
                >
                <el-button
                  type="primary"
                  size="mini"
                  @click="updateClick(scope.row)"
                >
                  编辑</el-button
                >
                <el-button
                  type="primary"
                  size="mini"
                  @click="startClick(scope.row)"
                >
                  启动</el-button
                >
                <el-button
                  type="primary"
                  size="mini"
                  @click="stopClick(scope.row)"
                >
                  禁用</el-button
                >
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="11"
          >
          </el-pagination>
        </div>
      </div>
      <Paging :total="total" @changePage="changePage" />
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
  imageDetailAdd,
  imageDetailUpdate,
  imageUpdate,
  imageDetailPage,
  imageGetByID,
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
      page: 1, //页码
      limit: 5, //一页最大数
      pageNum: 1, //页码
      pageSize: 5, //每页记录数
      totalSize: 2, //总记录数
      totalPages: 1, //总页数
      currentPage: 1, //当前页
      listQuery: {
        page: 1,
        totalSize: 5,
      },
      currentPage: 1,
      haveaction: '已禁用',

      // ------------
      tableData: [
        {
          id: 1,
          className: '场景图标',
          identityName: 'changjingicon',
          createTime: '2021-6-1 15:23:20',
          updateTime: '2021-6-1 15:23:20',
          status: '已禁用',//0已禁用 1已启用
        },
        {
          id: 2,
          className: '场景图标',
          identityName: 'changjingicon',
          createTime: '2021-6-1 15:23:20',
          updateTime: '2021-6-1 15:23:20',
          status: 0,//0已禁用 1已启用
        },
        {
          id: 3,
          className: '场景图标',
          identityName: 'changjingicon',
          createTime: '2021-6-1 15:23:20',
          updateTime: '2021-6-1 15:23:20',
          status: 0,//0已禁用 1已启用
        },
        {
          id: 4,
          className: '场景图标',
          identityName: 'changjingicon',
          createTime: '2021-6-1 15:23:20',
          updateTime: '2021-6-1 15:23:20',
          status: 0,//0已禁用 1已启用
        },
        
      ],
      // id: 1,
      // status: 0,
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
        categoryId: '',
      },
    }
  },
  created() {
    this.getList()
  },
  methods: {
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
    getList() {
      const params = {
        id: 1,
        status: 1,
      }
      imageEnable({ params }).then((res) => {
        if (res.code == 200) {
          this.$message({
            type: 'success',
            message: '成功',
            data: null,
          })
        }
        this.id = res.data.id
        this.status = res.data.status
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
      this.propData.status = 0
      this.addDialogVisible = true
    },
    updateClick(row) {
      this.propData.status = 0
      this.addDialogVisible = true
    },
    startClick(row) {
      if (this.status == 1) {
        this.haveaction = '以启用'
      }
    },
    stopClick(row) {
      if (this.status == 0) {
        this.haveaction = '以禁用'
      }
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
