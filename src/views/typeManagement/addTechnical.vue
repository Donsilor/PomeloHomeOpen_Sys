<template>
    <div>
        <el-dialog title="增加技术方案" :visible.sync="dialogFormVisible" width="50%" custom-class="addTechDialog">
            <el-form :model="form" :inline="true" label-position="top">
                <el-row :span="24" v-for="item in technicalLists" :key="item.value">
                    <el-col :span="8">
                        <el-form-item label="技术方案">
                            <el-select v-model="technicalLists[item.index].technology_type" placeholder="请选择技术方案">
                                <el-option label="Wi-Fi方案" value="1"></el-option>
                                <el-option label="ZigBee方案" value="2"></el-option>
                                <el-option label="蓝牙方案" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="模组/芯片厂家"  v-show="technicalLists[item.index].technology_type == 1">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="模组/芯片型号"  v-show="technicalLists[item.index].technology_type == 1">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                   <el-col :span="8">
                       <el-form-item label="协议" v-show="technicalLists[item.index].technology_type == 2 || technicalLists[item.index].technology_type == 3">
                           <el-input v-model="form.name"></el-input>
                       </el-form-item>
                   </el-col>
                </el-row>
            </el-form>
            <a href="javascript:void(0);" @click="addTechnicalList" class="addbtn"><i class="el-icon-plus"></i> 添加更多技术方案</a>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <el-button @click="dialogFormVisible = true">添加技术方案</el-button>
    </div>

</template>
<style>
    .addbtn{
        font-size: 12px;
        color: #999;
    }
    .addTechDialog .el-dialog__body{
        overflow-y: auto;
        max-height: 400px;
        padding-top: 10px;
    }
    .addTechDialog .el-form-item__label{
        padding-bottom: 0px;
        line-height: 30px;
    }
</style>
<script>
    import fetch from '@/utils/fetch';
    export default {
        props: {
        },
        computed: {
        },
        created() {
        },
        mounted() {
        },
        data() {
            return {
                dialogFormVisible : false,
                form : {},
                technicalLists : [
                    {
                        technology_type : '',
                        index:0
                    },
                    {
                        technology_type : '',
                        index:1
                    }
                ]
            }
        },
        methods: {
            addTechnicalList(){
                let index = this.technicalLists.length;
                this.technicalLists.push({
                    'technology_type' : '',
                    'index': index-1
                })
            }
        }
    }
</script>
