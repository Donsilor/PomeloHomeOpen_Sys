<template>
    <div style="display: inline-block;">
        <el-dialog title="增加技术方案" :visible.sync="dialogFormVisible" width="50%" custom-class="addTechDialog">
            <el-form :model="form" ref="techniForm" :inline="true" label-position="top">
                <el-row :span="24" v-for="(item,index) in form.technology_list" :key="item.value">
                    <el-col :span="7">
                        <el-form-item
                                label="技术方案"
                                :prop="'technology_list.'+index+'.technology_type'"
                                :rules="[
                                          {required:true,message:'技术方案不能为空',trigger: 'change'}
                                        ]"
                        >
                            <el-select v-model="item.technology_type" placeholder="请选择技术方案">
                                <el-option label="Wi-Fi方案" value="1"></el-option>
                                <el-option label="ZigBee方案" value="2"></el-option>
                                <el-option label="蓝牙方案" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" v-if="item.technology_type == 1">
                        <el-form-item label="模组/芯片厂家"
                                      :prop="'technology_list.'+index+'.vendor'"
                                      :rules="[
                                          {required:true,message:'模组/芯片厂家不能为空',trigger: 'blur'}
                                        ]">
                            <el-input v-model="item.vendor"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" v-if="item.technology_type == 1">
                        <el-form-item label="模组/芯片型号"
                                      :prop="'technology_list.'+index+'.model'"
                                      :rules="[
                                          {required:true,message:'模组/芯片型号不能为空',trigger: 'blur'}
                                        ]">
                            <el-input v-model="item.model"></el-input>
                        </el-form-item>
                    </el-col>
                   <el-col :span="7" v-if="item.technology_type == 2 || item.technology_type == 3">
                       <el-form-item label="协议"
                                     :prop="'technology_list.'+index+'.agreement'"
                                     :rules="[
                                          {required:true,message:'协议不能为空',trigger: 'blur'}
                                        ]">
                           <el-input v-model="item.agreement"></el-input>
                       </el-form-item>
                   </el-col>
                    <el-col :span="3">
                        <el-form-item label=" ">
                            <i v-if="form.technology_list.length>1"
                               @click="removeTechnicalList(index)"
                               class="el-icon-circle-close remove-item"></i>
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
        <el-button style="margin-right: 15px;" @click="dialogFormVisible = true">添加技术方案</el-button>
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
    .remove-item{
        font-size: 24px;
        cursor: pointer;
        color: #409EFF;
        position: relative;
        top: 30px;
    }
</style>
<script>
    const f_technology = [
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
    ];
    export default {
        computed: {
        },
        created() {
        },
        mounted() {
        },
        data() {
            return {
                dialogFormVisible : false,
                form : {
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
            }
        },
        methods: {
            addTechnicalList(){
                //let index = this.form.technology_list.length;
                this.form.technology_list.push({
                    'technology_type' : '',
                    //'index': index,
                    'vendor' : '',
                    'model' : '',
                    'agreement' : ''
                })
            },
            removeTechnicalList(index){
                this.form.technology_list.splice(index,1);
            },
            confirmTechnical(){
                this.$refs['techniForm'].validate((valid) => {
                    if (valid) {
                        let param = [],params = {};
                        this.form.technology_list.forEach((val,index) =>{
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
                            'technology_list' : param
                        }
                        this.$emit('get-data',params);
                        this.dialogFormVisible = false;
                        this.form.technology_list = f_technology;
                    }else{

                    }
                });

            }
        }

    }
</script>
