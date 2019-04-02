<template>
    <div class="app-container calendar-list-container">
        <el-row :gutter="30">
            <el-col :span="2">
                <el-button type="primary" @click="addVoicePlatform">新增语音平台</el-button>
            </el-col>
        </el-row>
        <div class="table-container">
            <template>
                <el-table :data="tableData"fit stripe style="width: 100%">
                    <el-table-column prop="logo_url" label="语音平台logo">
                        <template slot-scope="scope">
                            <img width="50" style="display: block" :src="scope.row.logo_url" alt="logo">
                        </template>
                    </el-table-column>
                    <el-table-column  prop="name" label="语音平台名称" align="center"></el-table-column>
                    <el-table-column  prop="created_at" label="创建时间">
                        <template slot-scope="scope">
                            <span>{{scope.row.created_user+'  创建于'+scope.row.created_at}}</span>
                        </template>
                    </el-table-column>
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
    .table-container{
        margin-top: 20px;
        padding-bottom: 60px;
    }
</style>
<script>
    import fetch from '@/utils/fetch'
import { getToken } from '@/utils/auth'
    export default {
      name: 'voicePlatform',
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
            url: '/admin/voice/list',
            method: 'get',
            data: params
          }).then(res => {
            this.tableData = res.data
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
        addVoicePlatform() {
          this.$router.push({ path: '/typeManagement/addVoicePlatform' })
        },
        handleEnterPage(row) {
          this.$router.push({ path: '/typeManagement/addVoicePlatform', query: { 'distributors_id': row.distributors_id, id: row.voice_id }})
        }
      }
    }
</script>
