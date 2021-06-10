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
          :data="data"
          :cell-style="acellStyle"
          :header-cell-style="headCellStyle"
          border
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column 
            prop="id" 
            label="序号" />
          <el-table-column 
            prop="className" 
            label="类型" />
          <el-table-column 
            prop="usage" 
            label="功能" />
          <el-table-column 
            prop="createTime" 
            label="创建时间 " />
          <el-table-column 
            prop="updateTime" 
            label="修改时间 " />
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div class="opreationBtn">
                <el-button
                  type="primary"
                  size="mini"
                  @click="handlerClick(scope.row)"
                >
                  查看</el-button
                  >
                <el-button
                  type="primary"
                  size="mini"
                  @click="deleteClick(scope.$index,scope.row)"
                >删除</el-button
                >
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
import {imageTypegoryPage} from '@/api/image.js'
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
        limit: 10,//一页最大数
      },
      data: [
        {
          id: 1,
          className: '场景图标',
          usage: '用于创建场景',
          createTime: '2021-6-1 15:23:20',
          updateTime: '2021-6-1 15:23:20',
        },
        {
          id: 2,
          className: '触发条件',
          usage: '用于创建场景',
          createTime: '2021-6-1 15:23:20',
          updateTime: '2021-6-1 15:23:20',
        },
        {
          id: 3,
          className: '执行条件',
          usage: '用于创建场景',
          createTime: '2021-6-1 15:23:20',
          updateTime: '2021-6-1 15:23:20',
        },
        {
          id: 4,
          className: '执行动作',
          usage: '用于创建场景',
          createTime: '2021-6-1 15:23:20',
          updateTime: '2021-6-1 15:23:20',
        },
        
      ],
      id:1,
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
      this.data.page = 1
      this.getList()
    },
    getList() {
      console.log(1)
      const params = {
        pageNum: this.listQuery.page,
        pageSize: this.listQuery.limit,
      }
      imageTypegoryPage(params)
        .then((res) => {
          console.log(res)
          if (res.code == 200 || res.code == 0) {
            console.log(res.code)
            this.$message({
              type: 'success',
              message: '新增成功',
            })
          }
          this.total = res.data.total
          this.data = res.data
        })
        .catch((e) => {})
    },
    addType() {
      this.propData.status = 0
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
    handlerClick() {
      
    },
    deleteClick(row) {
      switch (sty) {
      case 'edit':
        this.addDialogVisible = true
        this.propData.status = 2
        break
      default:
        break
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
