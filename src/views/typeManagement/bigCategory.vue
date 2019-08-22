<template>
    <div class="app-container calendar-list-container">
        <el-row :gutter="30">
            <el-col :span="2">
                <el-button type="primary" @click="handelAddCateGory">新增品类</el-button>
            </el-col>
            <!--<el-col :span="18">
                <span class="tipStyle">
                    <i class="el-icon-warning"></i>
                    品类被添加后，厂商在开放平台才能看到并加入合作意向
                </span>
            </el-col>-->
        </el-row>
        <div class="table-container">
            <template>
                <el-table :data="tableData"fit stripe style="width: 100%">
                    <el-table-column prop="id" label="品类ID"></el-table-column>
                    <el-table-column prop="name" label="大品类"></el-table-column>
                    <el-table-column  prop="created_user" label="创建人" align="center"></el-table-column>
                    <el-table-column  prop="created_at" label="创建时间"></el-table-column>
                    <el-table-column label="操作" width="130"  align="center">
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    type="primary"
                                    align="center"
                                    @click="handleEnterPage(scope.row)">进入详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div v-show="!listLoading" class="pagination-container">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                   :current-page.sync="listQuery.page"
                                   :page-sizes="[15,20,30, 50]" :page-size="listQuery.limit"
                                   layout="total, sizes, prev, pager, next, jumper" :total="total">
                    </el-pagination>
                </div>
            </template>
        </div>
    </div>
</template>
<style>
    .tipStyle{
        color: #999;
        margin-left: 10px;
        font-size: 12px;
        display: inline-block;
        margin-top: 15px;
    }
    .table-container{
        margin-top: 20px;
        padding-bottom: 60px;
    }
</style>
<script>
    import fetch from '@/utils/fetch'
export default {
      name: 'bigCategory',
      computed: {
      },
      created() {
      },
      mounted() {
        this.$nextTick(() => {
          this.getList()
        })
      },
      data() {
        return {
          total: null,
          listLoading: false,
          listQuery: {
            page: 1,
            limit: 15
          },
          tableData: []
        }
      },
      methods: {
        getList() {
          this.listLoading = true
          const params = {
            limit: this.listQuery.limit,
            page: this.listQuery.page
          }
          fetch({
            url: '/product/parenttype_lists',
            method: 'post',
            data: params
          }).then(res => {
            this.tableData = res.list
            this.total = res.total
            this.listLoading = false
          })
        },
        handleSizeChange(val) {
          this.listQuery.limit = val
          this.getList()
        },
        handleCurrentChange(val) {
          this.listQuery.page = val
          this.getList()
        },
        handleEnterPage(row) {
          this.$router.push({ path: '/typeManagement/addBigCategory', query: { 'id': row.id }})
        },
        handelAddCateGory() {
          this.$router.push({ path: '/typeManagement/addBigCategory' })
        }
      }
    }
</script>
