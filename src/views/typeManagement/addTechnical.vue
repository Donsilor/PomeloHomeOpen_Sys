<template>
    <div>
        <el-dialog title="增加技术方案" :visible.sync="dialogFormVisible" width="50%" custom-class="addTechDialog">
            <el-form :model="form" :inline="true" label-position="top">
                <el-row :span="24" v-for="item in technology_list" :key="item.value">
                    <el-col :span="8">
                        <el-form-item label="技术方案">
                            <el-select v-model="technology_list[item.index].technology_type" placeholder="请选择技术方案">
                                <el-option label="Wi-Fi方案" value="1"></el-option>
                                <el-option label="ZigBee方案" value="2"></el-option>
                                <el-option label="蓝牙方案" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="模组/芯片厂家"  v-show="technology_list[item.index].technology_type == 1">
                            <el-input v-model="technology_list[item.index].vendor"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="模组/芯片型号"  v-show="technology_list[item.index].technology_type == 1">
                            <el-input v-model="technology_list[item.index].model"></el-input>
                        </el-form-item>
                    </el-col>
                   <el-col :span="8">
                       <el-form-item label="协议" v-show="technology_list[item.index].technology_type == 2 || technology_list[item.index].technology_type == 3">
                           <el-input v-model="technology_list[item.index].agreement"></el-input>
                       </el-form-item>
                   </el-col>
                </el-row>
            </el-form>
            <a href="javascript:void(0);" @click="addTechnicalList" class="addbtn"><i class="el-icon-plus"></i> 添加更多技术方案</a>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmTechnical">确 定</el-button>
            </div>
        </el-dialog>
        <el-button @click="dialogFormVisible = true">添加技术方案</el-button>
    </div>

</template>
<style scoped>
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
    import {getToken} from '@/utils/auth';
    export default {
        props: ['typeid','token'],
        computed: {
        },
        created() {
        },
        mounted() {
            console.log(getToken());
        },
        data() {
            return {
                dialogFormVisible : false,
                form : {},
                technology_list : [
                    {
                        technology_type : '',
                        index:0,
                        vendor : '',
                        model : '',
                        agreement : ''
                    },
                    {
                        technology_type : '',
                        index:1,
                        vendor : '',
                        model : '',
                        agreement : ''
                    }
                ]
            }
        },
        methods: {
            addTechnicalList(){
                let index = this.technology_list.length;
                this.technology_list.push({
                    'technology_type' : '',
                    'index': index,
                    'vendor' : '',
                    'model' : '',
                    'agreement' : ''
                })
            },
            confirmTechnical(){
                let param = [],params = {};
                this.technology_list.forEach((val,index) =>{
                    console.log(val.technology_type);
                    //重新拼装参数
                    if(val.technology_type!=''){
                        if(val.technology_type == 1){
                            param.push({
                                'technology_type' : val.technology_type,
                                'vendor' : val.vendor,
                                'model' : val.model
                            })
                        }else{
                            param.push({
                                'technology_type' : val.technology_type,
                                'agreement' : val.agreement
                            })
                        }
                    }
                })

                params = {
                    'token' : this.token,
                    'type_id' : this.typeid,
                    'technology_list' : param
                }
                this.$emit('get-data',params);
                this.dialogFormVisible = false;
            }
        }
    }
</script>
