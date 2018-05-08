<template>
    <div class="app-container calendar-list-container">
        <el-row :gutter="30">
            <el-col :span="2">
                <el-button type="primary" @click="handelAddChannel">添加新渠道商</el-button>
            </el-col>
        </el-row>
        <div class="table-container">
            <template>
                <el-table :data="tableData"fit stripe style="width: 100%">
                    <el-table-column prop="logo_url" label="渠道商logo">
                        <template slot-scope="scope">
                            <img width="50" style="display: block" :src="scope.row.logo_url" alt="logo">
                        </template>
                    </el-table-column>
                    <el-table-column  prop="name" label="渠道商名称" align="center"></el-table-column>
                    <el-table-column  prop="created_user" label="记录">
                        <template slot-scope="scope">
                            {{scope.row.created_user+' '+scope.row.created_at_txt}}
                        </template>
                    </el-table-column>
                    <el-table-column  prop="is_open" label="是否启用">
                        <template slot-scope="scope">
                            <div>
                                <el-switch @change="setOpen(scope.row)"  v-model="scope.row.is_open" :active-value="1" :inactive-value="0">
                                </el-switch>
                            </div>

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
                <!--<div v-show="!listLoading" class="pagination-container">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                   :current-page.sync="listQuery.page"
                                   :page-sizes="[15,20,30, 50]" :page-size="listQuery.limit"
                                   layout="total, sizes, prev, pager, next, jumper" :total="total">
                    </el-pagination>
                </div>-->
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
        name: 'channelManager',
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
                    page: this.listQuery.page,
                    type:0
                };
                fetch({
                    url: '/admin/distributor/lists',
                    method: 'post',
                    data: params
                }).then(res=>{
                    this.tableData = res.list;
                    this.total = res.total;
                    this.listLoading = false
                })
            },
            setOpen(row){
                fetch({
                    url: '/distributor/setopen',
                    method: 'post',
                    data: {id:row.id,is_open:row.is_open}
                }).then(res=>{
                }).catch(()=>{
                    //失败还原状态，按位非运算符完成0、1互转
                    row.is_open = ~row.is_open+2;
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
            handleEnterPage(row){
                this.$router.push({path: '/typeManagement/channelDetail', query: {'id' : row.id}});
            },
            handelAddChannel(){
                this.$router.push({path: '/typeManagement/channelDetail'});
            }
        }
    }
</script>
