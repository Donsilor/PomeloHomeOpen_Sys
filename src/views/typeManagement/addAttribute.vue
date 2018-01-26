<template>
    <div>
        <el-dialog title="新建属性参数" :visible.sync="dialogFormVisible" width="60%" custom-class="addAttDialog">
            <el-form :model="form" :inline="true" label-position="left">
                <el-row type="flex">
                    <el-col style="width: 80px;line-height: 43px;">
                        属性信息：
                    </el-col>
                    <el-col>
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
                <el-row>
                    <div v-for="(item,itemIndex) in form.value_list" style="width: 100%;overflow: hidden;">
                        <el-col style="width: 72px;line-height: 43px;position: absolute;">
                            参数信息：
                        </el-col>
                        <el-col v-for="(paramKey,paramIndex) in item.list" style="position: relative;margin-left: 72px;">
                            <el-form-item label="参数名称(key)" prop="nodeid" class="w50p" label-width="120px">
                                <el-input v-model="paramKey.key" placeholder="仅支持字母、下划线输入，最多32个字符" style="width: 260px;"></el-input>
                            </el-form-item>
                            <el-form-item label="参数含义" prop="nodeid" style="width: 46%;" label-width="80px">
                                <el-input v-model="paramKey.remark" style="width: 260px;"></el-input>
                            </el-form-item>
                            <el-form-item label="单位" prop="nodeid" class="w50p" label-width="120px">
                                <el-input v-model="paramKey.unit" placeholder="支持中英文、特殊字符，最多16个字符" style="width: 260px;"></el-input>
                            </el-form-item>
                            <el-form-item label="参数可控" class="w100p" label-width="120px">
                                <el-checkbox-group v-model="paramKey.method">
                                    <el-checkbox label="set">set</el-checkbox>
                                    <el-checkbox label="get">get</el-checkbox>
                                    <el-checkbox label="report">report</el-checkbox>
                                    <el-checkbox label="alarm">alarm</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="参数值类型" class="w100p" label-width="120px">
                                <el-radio-group v-model="paramKey.type" @change="changeTypeValue($event,itemIndex,paramIndex)">
                                    <el-radio label="string">string</el-radio>
                                    <el-radio label="int">int</el-radio>
                                    <el-radio label="object">object</el-radio>
                                    <el-radio label="float">float</el-radio>
                                    <el-radio label="array">array</el-radio>
                                    <el-radio label="bool">bool</el-radio>
                                </el-radio-group>
                            </el-form-item>

                            <el-form-item label="枚举参数值" class="w100p" label-width="120px" v-show="(item.key_type !=2 && paramKey.value_list) || (item.key_type !=2 && paramKey.value_list)">
                                <el-form-item label="参数名称(key)" label-width="220px"></el-form-item>
                                <el-form-item label="传送数据" prop="nodeid"  label-width="220px"></el-form-item>
                                <!--<el-form-item label="互联场景" prop="nodeid"  label-width="80px"></el-form-item>-->
                                <el-form-item label="操作" prop="nodeid" label-width="85px"></el-form-item>
                            </el-form-item>
                            <el-form-item label=" " class="w100p" label-width="120px" v-for="(valueItem,listIndex) in paramKey.value_list" v-show="item.key_type!=2&& paramKey.value_list">
                                <el-form-item label="" style="width: 220px;">
                                    <el-input v-model="valueItem.value" placeholder="最多64个字符"></el-input>
                                </el-form-item>
                                <el-form-item label="" style="width: 220px;">
                                    <el-input v-model="valueItem.value_des" placeholder="字母数字符号，最多32个字符"></el-input>
                                </el-form-item>
                                <el-form-item label="" style="width: 85px;">
                                    <i class="el-icon-delete" @click="delEnumerateItem(itemIndex,paramIndex,listIndex)"></i>
                                </el-form-item>
                            </el-form-item>
                            <el-form-item label="参数范围值" class="w100p" label-width="120px" v-if="item.key_type === 2">
                                <el-form-item label="" label-width="220px">

                                </el-form-item>
                                    <el-input v-model="paramKey.value_list[1].value" placeholder="请输入数据最小值" v-if="paramKey.value_list[1]" style="display: inline-block;width: 150px;"></el-input>
                                <span>&nbsp;-&nbsp;</span>
                                    <el-input v-model="paramKey.value_list[2].value" placeholder="请输入数据最大值" v-if="paramKey.value_list[2]" style="display: inline-block;width: 150px;"></el-input>
                            </el-form-item>
                            <el-form-item label=" " class="w100p" label-width="120px" v-show="paramKey.typeCircle==1">
                                <template slot-scope="scope">
                                    <a href="javascript:void(0);" @click="addEnumerateItem(itemIndex,paramIndex)" class="addbtn">
                                        <i class="el-icon-plus"></i> 添加更多参数值
                                    </a>
                                </template>
                            </el-form-item>
                            <!--<el-form-item label="枚举参数值" class="w100p" label-width="120px">-->
                                <!--<el-form-item label="参数名称(key)" label-width="220px"></el-form-item>-->
                                <!--<el-form-item label="传送数据" prop="nodeid"  label-width="220px"></el-form-item>-->
                                <!--&lt;!&ndash;<el-form-item label="互联场景" prop="nodeid"  label-width="80px"></el-form-item>&ndash;&gt;-->
                                <!--<el-form-item label="操作" prop="nodeid" label-width="85px"></el-form-item>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <a href="javascript:void(0);" @click="addAttribute(itemIndex)" class="addAttr"><i class="el-icon-plus"></i> 新增属性</a>
                    </div>
                    <div class="buttonPos">
                        <el-button type="ghost" @click="addParams()" class="addParams">新增参数</el-button>
                    </div>
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
    .addParams{
        display: block;
        margin: 30px 0px 0px 0px;
    }
    .addAttr{
        margin:0px 0px 20px 70px;
        display: block;
        color: #409EFF;
    }
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
    .addbtn{
        font-size: 14px;
        color:#409EFF;
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
        },
        data() {
            return {
                dialogFormVisible : false,
                hulian_value : true,
                form : {
                    "token":this.token,
                    "type_id":this.type_id,
                    "nodeid":"",
                    "is_default":'true',
                    "value_list": [
                        {
                            "method": [
                            ],
                            "key":"",
                            "type":"string",
                            "key_type":1,
                            "typeCircle" : 1,
                            "list": [{
                                "method": [
                                ],
                                "key":"",
                                "type":"string",
                                "key_type":1,
                                'value_list' : [{
                                    'value' : '',
                                    'value_des' : ''
                                }],
                                "remark":""
                            }]
                        }
                    ]
                }
            }
        },
        methods: {
            addParams(){
                this.form.value_list.push(
                    {
                        "method": [],
                        "key":"air_filter_result_2_0",
                        "type":"string",
                        "key_type":1,
                        "typeCircle" : 1,
                        "list": [{
                            "method": [
                                "get",
                                "set"
                            ],
                            "key": "",
                            "type": "string",
                            "key_type": 1,
                            'value_list': [{
                                'value': '',
                                'value_des': ''
                            }],
                            "remark": ""
                        }]
                    }
                );
            },
            addAttribute(itemIndex){
                this.form.value_list[itemIndex].list.push(
                    {
                        "method": [

                        ],
                        "key":"",
                        "type":"string",
                        "key_type":1,
                        "typeCircle" : 1,
                        'value_list' : [{
                            'value' : '',
                            'value_des' : ''
                        }],
                        "remark":"空气质量"
                    },
                );
            },
            //获得参数值类型改变的值
            changeTypeValue(val,itemIndex,paramIndex){
                const INITIALIZATIONPARAMS = [{
                    "method": [
                    ],
                    "key":"",
                    "type":"string",
                    "key_type":1,
                    "typeCircle" : 1,
                    'value_list' : [{
                        'value' : '',
                        'value_des' : ''
                    }],
                    "remark":""
                }];
                this.form.value_list[itemIndex].list = [];
                if(val === 'int'){
                    this.form.value_list[itemIndex].list = INITIALIZATIONPARAMS;
                    this.form.value_list[itemIndex].list[paramIndex].type = 'int';
                    this.form.value_list[itemIndex].key_type = 2;
                    this.form.value_list[itemIndex].typeCircle =2;
                    let param = [{
                        'value' : '1',
                        'value_des' : '类型'
                    },{
                        'value' : '',
                        'value_des' : '最小值'
                    },{
                        'value' : '',
                        'value_des' : '最大值'
                    }];
                    this.form.value_list[itemIndex].list[paramIndex].key_type = 2;
                    this.form.value_list[itemIndex].list[paramIndex].value_list = param;
                }else if(val === 'object'){
                    this.form.value_list[itemIndex].key_type = 3;
                    let param = [{
                        "method": [
                        ],
                        "key":"",
                        "type":"object",
                        "key_type":3,
                        "typeCircle" : 2,
                    },
                    {
                        "method": [
                        ],
                        "key":"",
                        "type":"string",
                        "key_type":1,
                        "typeCircle" : 1,
                        'value_list' : [{
                            'value' : '',
                            'value_des' : ''
                        }],
                        "remark":""
                    }];
                    this.form.value_list[itemIndex].list = param;
                }else{
                    let param = INITIALIZATIONPARAMS;
                    console.log(param);
                    this.form.value_list[itemIndex].list = [];
                    console.log(this.form.value_list[itemIndex].list);
                    this.form.value_list[itemIndex].list = param;

                    this.form.value_list[itemIndex].key_type = 1;
                    this.form.value_list[itemIndex].list[paramIndex].type = val;
                    this.form.value_list[itemIndex].list[paramIndex].key_type = 1;
                }
            },
            addEnumerateItem(itemIndex,paramIndex){
                    console.log(itemIndex,paramIndex);
                  this.form.value_list[itemIndex].list[paramIndex].value_list.push({
                      'value' : '',
                      'value_des' : ''
                  })
            },
            delEnumerateItem(itemIndex,paramIndex,listIndex){
                console.log(itemIndex,paramIndex,listIndex);
                this.form.value_list[itemIndex].list[paramIndex].value_list.splice(listIndex,1);
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
