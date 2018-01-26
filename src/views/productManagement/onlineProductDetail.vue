<template>
    <div class="app-container">
        <!--====================-->
        <el-button  @click="$router.go(-1)" size="medium">返回</el-button>
        <el-button type="primary" @click="productUnshelve" size="medium">下架该产品</el-button>
        <h3>{{productDetail.brand_name+productDetail.type_name+productDetail.model}}</h3>
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="基本信息" name="basic">
                <el-row class="">
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">产品品类</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{productDetail.type_name}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">产品品牌</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{productDetail.brand_name}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">产品名称</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{productDetail.name}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">产品型号</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{productDetail.model}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">产品图片（六观图）</el-col>
                        <el-col :span="20" :offset="1" class="card-span-right">
                            <img v-for="item in productDetail.images" class="six-img" :src="item" v-img:name alt="图片加载失败">
                        </el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">产品规格书</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <a class="is-link" :href="productDetail.spec_url" download>{{productDetail.spec_name}}</a>
                            <a style="margin-left: 30px" :href="productDetail.spec_url" download>
                                <el-button type="primary" size="small">下载</el-button>
                            </a>
                        </el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">产品使用说明书</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <a class="is-link" :href="productDetail.instruct_url">{{productDetail.instruct_name}}</a>
                            <a style="margin-left: 30px" :href="productDetail.instruct_url" download>
                                <el-button type="primary" size="small">下载</el-button>
                            </a>
                        </el-col>
                    </el-row>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="技术方案" name="tech">
                <el-row class="">
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">选择技术方案</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{productDetail.type_txt}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">模组/芯片信息</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{productDetail.type_vendor}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">型号</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{productDetail.type_model}}</el-col>
                    </el-row>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="功能点设置" name="fps">
                <h5>必选功能点</h5>
                <el-table :data="must_fps" :span-method="spanMethod"
                          highlight-current-row border stripe fit style="width:100%;">
                    <el-table-column align="center" label="Stream_ID" prop="nodeid">
                    </el-table-column>
                    <el-table-column align="center" label="参数名称" prop="remark">
                    </el-table-column>
                    <el-table-column align="center" :formatter="arrayToString" label="value" prop="value_list">
                    </el-table-column>
                    <el-table-column align="center" label="是否开启" prop="is_enable">
                        <template slot-scope="scope">
                            <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.is_enable" disabled></el-switch>
                        </template>
                    </el-table-column>
                </el-table>
                <h5>可选功能点</h5>
                <el-table :data="opt_fps" :span-method="spanMethod"
                          highlight-current-row border stripe fit style="width:100%;">
                    <el-table-column align="center" label="Stream_ID" prop="nodeid">
                    </el-table-column>
                    <el-table-column align="center" label="参数名称" prop="remark">
                    </el-table-column>
                    <el-table-column align="center" :formatter="arrayToString" label="value" prop="value_list">
                    </el-table-column>
                    <el-table-column align="center" label="是否开启" prop="is_enable">
                        <template slot-scope="scope">
                            <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.is_enable" disabled></el-switch>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="版本信息" name="version">
                <el-table :data="productDetail.version_list" highlight-current-row border stripe fit style="width:100%;">
                    <el-table-column label="版本号" prop="version_no"></el-table-column>
                    <el-table-column label="版本描述" prop="des"></el-table-column>
                    <el-table-column label="状态" :formatter="statusMap" prop="status"></el-table-column>
                    <el-table-column label="创建时间" prop="created_at_txt"></el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {getProductInfo, productUnshelve} from '@/api/check';
    import {Message} from 'element-ui';

    export default {
        name: 'onlineProductDetail',

        data() {
            return {
                product_id: '', // 产品id
                productDetail: {},
                must_fps:[//必选功能点
                ],
                opt_fps:[//可选功能点
                ],
                spanMap:{},//合并map
                activeName:'basic'
            }
        },
        created() {
            this.product_id = this.$route.query.product_id;
        },
        mounted() {
            this.getReviewInfo();
        },
        methods: {
            // 获取详情
            getReviewInfo() {
                let _this = this;
                let params = {
                    product_id: this.product_id
                };
                getProductInfo(params).then(response => {
                    this.productDetail = response;
                    response.attr_list.forEach(function (item) {
                        let key = item.is_default ? 'must_fps' : 'opt_fps';
                        if(item.list){
                            _this.spanMap[item.nodeid] = {
                                index:_this[key].length,
                                len:item.list.length
                            };
                            item.list.forEach(function (em) {
                                _this[key].push({
                                    nodeid:item.nodeid,
                                    remark:em.remark,
                                    value_list:em.value_list,
                                    is_enable:item.is_enable
                                });
                            })
                        }
                        else{
                            _this[key].push(item);
                        }
                    })
                })
            },

            // 图片预览
            imgPreview (e) {
                fancyBox(e.target, this.productDetail.images);
            },

            // 下架产品
            productUnshelve() {
                let params = {
                    product_id: this.product_id,
                };
                this.$confirm('下架后，该产品将无法继续使用，同时相应产品开发资料将全部作废，确认请继续','下架该产品').then(() => {
                    productUnshelve(params).then(response => {
                        if (response) {
                            Message({
                                message: '下架成功',
                                type: 'success',
                                duration: 2 * 1000
                            });
                            this.$router.go(-1);
                        }
                    })
                })
                ;
            },
            statusMap (row) {
                const map = {1:'开发中',2:'已发布'};
                return map[row.status];
            },
            arrayToString (row) {
                return row.value_list.join('/');
            },
            //合并行
            spanMethod(cell){
                if(cell.columnIndex==0&&this.spanMap[cell.row.nodeid]){
                    if(this.spanMap[cell.row.nodeid].index==cell.rowIndex){
                        return [this.spanMap[cell.row.nodeid].len,1]
                    }
                    return [0,0]
                }
            }
        },
        deactivated() {
            this.$destroy();
        }
    }
</script>

<style lang="scss">
    .six-img{
        max-height: 120px;
        margin-right: 15px;
    }
</style>
