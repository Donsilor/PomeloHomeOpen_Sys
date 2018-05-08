<template>
    <div class="app-container calendar-list-container">
        <el-row :gutter="30">
            <el-col :span="2">
                <el-button type="primary" @click="handelAddNetWork">新增配网方式</el-button>
            </el-col>
        </el-row>
        <div class="table-container">
            <template>
                <el-table :data="tableData"fit stripe style="width: 100%">
                    <el-table-column prop="distribution_name" label="渠道商名称"></el-table-column>
                    <el-table-column  prop="network_name" label="配网方式" align="center"></el-table-column>
                    <el-table-column  prop="a_name" label="创建人"></el-table-column>
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
    .table-container{
        margin-top: 20px;
        padding-bottom: 60px;
    }
</style>
<script>
    import fetch from '@/utils/fetch';
    export default {
        name: 'networkManager',
        computed: {
        },
        created() {
        },
        mounted() {
            this.getList();
        },
        data() {
            return {
                total: null,
                listLoading: false,
                listQuery: {
                    page: 1,
                    limit: 15,
                },
                tableData: []
            }
        },
        methods: {
            getList(){
                this.listLoading = true;
                let params = {
                    limit: this.listQuery.limit,
                    page: this.listQuery.page
                };
                fetch({
                    url: '/admin/distribution/list',
                    method: 'post',
                    data: params
                }).then(res=>{
                    this.tableData = res.data;
                    this.total = res.total;
                    this.listLoading = false
                })
            },
            handleSizeChange(val) {
                this.listQuery.limit = val;
                this.getList()
            },
            handleCurrentChange(val) {
                this.listQuery.page = val;
                this.getList()
            },
            handelAddNetWork(){
                this.$router.push({path: '/typeManagement/addNetWork'});
            },
            handleEnterPage(row){
                this.$router.push({path: '/typeManagement/addNetWork', query: {'distributors_id' : row.distributors_id,id:row.id}});
            }
        }
    }
</script>
