<template>
    <div class="app-container calendar-list-container">
        <div class="filter-container">
            <el-row style="margin-bottom: 20px;">
                <el-button type="primary" @click="uploadSDK">新建SDK包</el-button>
            </el-row>
            <el-dialog center width="700px" class="doc-dialog" title="上传SDK文件" :visible.sync="dialogVisible">
                <el-form :model="form" label-width="100px">
                    <el-form-item label="产品品类">
                        <el-select style="width: 100%;" v-model="form.type" placeholder="请选择">
                            <el-option v-for="item in productTypeList"
                                       :key="item.id"
                                       :label="item.name"
                                       :value="item.id"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="模组/芯片厂家" >
                        <el-select style="width: 100%;" v-model="form.com" placeholder="请选择"></el-select>
                    </el-form-item>
                    <el-form-item label="SDK文件">
                        <el-input style="width: 75%;" readonly v-model="form.url" placeholder="请上传文件"></el-input>
                        <el-upload action=""
                                   style="display: inline-block;margin-left: 12px;"
                                   :before-upload="beforeZipUpload"
                        >
                            <el-button type="primary">选择文件...</el-button>
                        </el-upload>
                    </el-form-item>
                    <div class="upload-tips">只能上传zip文件，且不超过5M</div>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </div>

        <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row
                  style="width: 100%">

            <el-table-column align="center" label="模组/芯片厂家" prop="technology_module_vendor">
            </el-table-column>

            <el-table-column align="center" label="型号" prop="technology_module_model">
            </el-table-column>

            <el-table-column align="center" label="包大小" prop="size">
            </el-table-column>

            <el-table-column align="center" label="上传时间" prop="updated_at_txt">
            </el-table-column>

            <el-table-column align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button @click="uploadSDK(scope.row)" size="small" type="success">
                        修改
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
</template>

<script>
    import {getSdkList,getProductType} from '@/api/check'

    export default {
        name: 'wifi',
        data() {
            return {
                // ====table===
                list: null,
                total: null,
                listLoading: false,
                productTypeList:[],
                listQuery: {
                    page: 1,
                    limit: 10,
                },
                form:{
                    type:'',
                    com:'',
                    url:''
                },
                dialogVisible:false
            }
        },
        computed: {},
        created() {
        },
        mounted() {
            this.getList();
            this.getProductType();
        },
        methods: {
            getList() {
                this.listLoading = true;
                let params = {
                    technology_type:'wifi',
                    limit: this.listQuery.limit,
                    page: this.listQuery.page
                };
                getSdkList(params).then(response => {
                    this.list = response.data;
                    this.total = response.total;
                    this.listLoading = false
                })
            },
            // 获取产品品类
            getProductType() {
                getProductType().then(response => {
                    this.productTypeList = response.list;
                });
            },

            handleSizeChange(val) {
                this.listQuery.limit = val;
                this.getList()
            },
            handleCurrentChange(val) {
                this.listQuery.page = val;
                this.getList()
            },
            uploadSDK(row){
                this.dialogVisible = true;
            },
            beforeZipUpload(file){
                const isZip = file.type === 'application/zip';
                const isLt5M = file.size / 1024 / 1024 < 5;
                if (!isZip) {
                    this.$message.error('只能上传zip文件!');
                }
                if (!isLt5M) {
                    this.$message.error('zip文件大小不能超过 5MB!');
                }
                this.form.url = file.name;
                return isZip && isLt5M;
            }
        }
    }
</script>
