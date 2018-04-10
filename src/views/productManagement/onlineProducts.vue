<template>
    <div class="app-container calendar-list-container">

        <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row
                  style="width: 100%">
            <el-table-column align="center" label="品类" prop="type_name">
            </el-table-column>

            <el-table-column align="center" label="品牌" prop="brand_name">
            </el-table-column>

            <el-table-column align="center" label="型号" prop="model">
            </el-table-column>

            <el-table-column align="center" label="厂商" prop="business_name">
            </el-table-column>

            <el-table-column align="center" label="版本号" prop="version_no">
            </el-table-column>

            <el-table-column align="center" label="创建时间" prop="created_at">
            </el-table-column>

            <el-table-column align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button @click="toDetai(scope.row)" size="small" type="primary">
                        查看详情
                    </el-button>
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

    </div>
</template>

<script>
    import {getProductList} from '@/api/check';

    export default {
        name: 'onlineProducts',
        data() {
            return {
                // ====table===
                list: null,
                total: null,
                listLoading: false,
                listQuery: {
                    page: 1,
                    limit: 15,
                },
            }
        },
        computed: {},
        created() {
        },
        mounted() {
            this.refresh();
        },
        methods: {
            refresh(){
                this.getList();
            },
            getList() {
                this.listLoading = true;
                let params = {
                    limit: this.listQuery.limit,
                    page: this.listQuery.page
                };
                getProductList(params).then(response => {
                    this.list = response.data;
                    this.total = response.total;
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
            toDetai(row){
                let query = {
                    product_id:row.product_id
                };
                this.$router.push({path:'/productManagement/onlineProductDetail',query:query});
            }
        }
    }
</script>
