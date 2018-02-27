<template>
    <el-row style="padding-left: 160px;padding-bottom: 30px;">
        <el-menu class="sec-menu" style="width: 160px;" mode="vertical" :default-active="activeName" background-color="#f2f2f2" text-color="#666"
                 active-text-color="#409EFF">
            <template v-for="item in navs">
                <router-link :to="{path:item.url,query:{business_id:business_id}}">
                    <el-menu-item :index="item.type">
                        {{item.name}}
                        <span class="num">{{item.num}}</span>
                    </el-menu-item>
                </router-link>
            </template>
        </el-menu>
        <div class="app-container calendar-list-container">
            <el-row>
                <router-link to="/enterpriseManagement/list">
                    <el-button type="primary" size="medium">返 回</el-button>
                </router-link>
            </el-row>
            <el-row>
                <h3>{{business_name}}</h3>
                <p style="color: #999999;">已上线{{total}}个产品</p>
            </el-row>
            <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row
                      style="width: 100%">
                <el-table-column align="center" label="品类" prop="product_type_name">
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
                               :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit"
                               layout="total, sizes, prev, pager, next, jumper" :total="total">
                </el-pagination>
            </div>

        </div>
    </el-row>
</template>

<script>
    import fetch from '@/utils/fetch';

    export default {
        name: 'enterpriseProducts',
        data() {
            return {
                // ====table===
                list: null,
                total: null,
                business_name:'',
                listLoading: false,
                business_id:this.$route.query.business_id,
                listQuery: {
                    page: 1,
                    limit: 10,
                    business_id:this.$route.query.business_id
                },
                activeName:'enterpriseProducts',
                navs:[
                    {
                        name: '厂商信息',
                        url: '/enterpriseManagement/enterpriseInfo',
                        type: 'enterpriseInfo',
                    },
                    {
                        name: '产品列表',
                        url: '/enterpriseManagement/enterpriseProducts',
                        type:'enterpriseProducts',
                    }
                ]
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

                fetch({
                    url:'/user/productList',
                    method:'post',
                    data:this.listQuery
                }).then(response => {
                    this.list = response.data;
                    this.total = response.total;
                    this.business_name = response.business_name;
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
