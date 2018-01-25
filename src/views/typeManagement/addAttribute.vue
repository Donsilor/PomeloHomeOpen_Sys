<template>
    <div>
        <el-dialog title="新建属性参数" :visible.sync="dialogFormVisible" width="60%" custom-class="addAttDialog">
            <el-form :model="form" :inline="true" label-position="left">
                <el-row type="flex">
                    <el-col style="width: 80px;line-height: 43px;">
                        属性信息:
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="属性名称(node_ID)" prop="nodeid" class="w100p" label-width="140px">
                            <el-input v-model="form.nodeid" placeholder="仅支持字母、下划线输入，最多32个字符"></el-input>
                        </el-form-item>

                        <el-form-item label="是否为必选" class="w100p" label-width="140px">
                            <el-radio-group v-model="form.is_default">
                                <el-radio label="true">必选</el-radio>
                                <el-radio label="false">非必选</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex">
                    <el-col style="width: 80px;line-height: 43px;">
                        参数信息:
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="参数名称(key)" prop="nodeid" class="w50p" label-width="140px">
                            <el-input v-model="form.nodeid" placeholder="仅支持字母、下划线输入，最多32个字符"></el-input>
                        </el-form-item>
                        <el-form-item label="参数含义" prop="nodeid" style="width: 47%;" label-width="80px">
                            <el-input v-model="form.nodeid"></el-input>
                        </el-form-item>
                        <el-form-item label="单位" prop="nodeid" class="w50p" label-width="140px">
                            <el-input v-model="form.nodeid" placeholder="支持中英文、特殊字符，最多16个字符"></el-input>
                        </el-form-item>
                        <el-form-item label="参数可控" class="w100p" label-width="140px">
                            <el-checkbox-group v-model="form.value_list[0].method">
                                <el-checkbox label="set">set</el-checkbox>
                                <el-checkbox label="get">get</el-checkbox>
                                <el-checkbox label="report">report</el-checkbox>
                                <el-checkbox label="alarm">alarm</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="参数值类型" class="w100p" label-width="140px">
                            <el-radio-group v-model="form.value_list[0].type">
                                <el-radio label="string">string</el-radio>
                                <el-radio label="int">int</el-radio>
                                <el-radio label="object">object</el-radio>
                                <el-radio label="float">float</el-radio>
                                <el-radio label="array">array</el-radio>
                                <el-radio label="bool">bool</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="枚举参数值" class="w100p" label-width="140px">
                            <el-form-item label="参数名称(key)" label-width="220px"></el-form-item>
                            <el-form-item label="传送数据" prop="nodeid"  label-width="220px"></el-form-item>
                            <el-form-item label="互联场景" prop="nodeid"  label-width="80px"></el-form-item>
                            <el-form-item label="操作" prop="nodeid" label-width="85px"></el-form-item>
                        </el-form-item>
                        <el-form-item label=" " class="w100p" label-width="140px">
                            <el-form-item label="" style="width: 220px;">
                                <el-input v-model="form.nodeid" placeholder="最多64个字符"></el-input>
                            </el-form-item>
                            <el-form-item label="" style="width: 220px;">
                                <el-input v-model="form.nodeid" placeholder="字母数字符号，最多32个字符"></el-input>
                            </el-form-item>
                            <el-form-item label="" style="width: 80px;">
                                <el-switch
                                        v-model="hulian_value">
                                </el-switch>
                            </el-form-item>
                            <el-form-item label="" style="width: 85px;">
                                <i class="el-icon-delete" @click="delQueryType()"></i>
                            </el-form-item>
                        </el-form-item>
                        <el-form-item label=" " class="w100p" label-width="140px">
                            <a href="javascript:void(0);" @click="addTechnicalList" class="addbtn"><i class="el-icon-plus"></i> 添加更多参数值</a>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmTechnical">确 定</el-button>
            </div>
        </el-dialog>
        <el-button @click="dialogFormVisible = true">添加功能属性</el-button>
    </div>

</template>
<style scoped>
    .w150{
        width: 150px;
    }
    .w100p{
        width: 100%;
    }
    .w50p{
        width: 50%;
    }
    .el-input input{
        width: 240px;
    }
    .padding-left-title{
        width: 110px;
        display: inline;
        height: 41px;
        line-height: 42px;
    }
    .right-content{
        position: absolute;
        margin-left: 120px;
    }
    .addAttDialog .el-dialog__body{
        overflow-y: auto;
        max-height: 400px;
        padding-top: 10px;
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
                hulian_value : true,
                form : {
                    "token":this.token,
                    "type_id":this.type_id,
                    "nodeid":"aaa",
                    "is_default":'true',
                    "value_list": [
                        {
                            "method": [
                                "get",
                                "set",
                                "report"
                            ],
                            "key":"air_filter_result_2_0",
                            "type":"object",
                            "key_type":3,
                            "list": {
                                "method": [
                                    "get",
                                    "set"
                                ],
                                "key":"air_quality",
                                "type":"string",
                                "key_type":1,
                                "value": [
                                    "excellent",
                                    "good",
                                    "moderate",
                                    "bad"
                                ],
                                "value_des": [
                                    "优",
                                    "良",
                                    "中",
                                    "差"
                                ],
                                "remark":"空气质量"
                            }
                        },
                        {
                            "method": [
                                "get",
                                "set",
                                "report"
                            ],
                            "key":"air_filter_result_2_1",
                            "type":"string",
                            "key_type":1,
                            "value": [
                                100
                            ],
                            "value_des": [
                                100
                            ],
                            "remark":"PM25"
                        }
                    ]
                }
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
            },
            delQueryType(){

            }
        }
    }
</script>
