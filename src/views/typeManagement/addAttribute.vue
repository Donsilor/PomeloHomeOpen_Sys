<template>
    <div  class="attDialog">
        <el-dialog :before-close="closeDialog" :top="top" :center="true"  width="1000px" :title="dialogTitle" :visible.sync="visible">
            <el-form :inline="true" ref="attForm" :rules="rules" :model="form" label-position="left" label-width="140px">
                <el-row>
                    <el-col :span="2" style="line-height: 32px;">
                        属性信息
                    </el-col>
                    <el-col :span="22">
                        <el-form-item label="属性名称(node_ID)" prop="nodeid" class="w100p">
                            <el-input v-model="form.nodeid" class="input-width" placeholder="仅支持字母、下划线输入，最多32个字符"></el-input>
                        </el-form-item>

                        <el-form-item label="  是否为必选" class="w100p pl8">
                            <el-radio-group v-model="form.is_default">
                                <el-radio :label="1">必选</el-radio>
                                <el-radio :label="0">非必选</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="first-item" :key="paramIndex" v-for="(paramKey,paramIndex) in form.value_list">
                    <div>
                        <el-col :span="2" style="line-height: 32px;">
                            参数信息
                        </el-col>
                        <el-col :span="22">
                            <el-form-item label="参数名称(key)"
                                          :prop="'value_list.'+paramIndex+'.key'"
                                          :rules="[
                                          {required:true,message:'参数名称不能为空'},
                                          {min:1,max:32,message:'参数名称最多32个字符'},
                                          {validator:letterAndUnderscode}
                                          ]"
                            >
                                <el-input v-model="paramKey.key" placeholder="仅支持字母、下划线输入，最多32个字符" class="input-width">
                                </el-input>
                            </el-form-item>
                            <el-form-item :inline="true" label="参数含义" label-width="100px"
                                          :prop="'value_list.'+paramIndex+'.remark'"
                                          :rules="[
                                          {required:true,message:'参数含义不能为空'}
                                          ]"
                            >
                                <el-input v-model="paramKey.remark" class="input-width"></el-input>
                            </el-form-item>
                            <el-form-item label="单位" class="w50p pl8"
                                          :prop="'value_list.'+paramIndex+'.unit'"
                                          :rules="[
                                          {validator:lengthLimit.bind(null,16)},
                                          ]"
                            >
                                <el-input v-model="paramKey.unit" placeholder="支持中英文、特殊字符，最多16个字符" class="input-width"></el-input>
                            </el-form-item>
                            <el-form-item label="参数可控" class="w100p"
                                          :prop="'value_list.'+paramIndex+'.method'"
                                          :rules="[
                                          {required:true,message:'参数可控不能为空'}
                                          ]"
                            >
                                <el-checkbox-group v-model="paramKey.method">
                                    <el-checkbox label="set">set</el-checkbox>
                                    <el-checkbox label="get">get</el-checkbox>
                                    <el-checkbox label="report">report</el-checkbox>
                                    <el-checkbox label="alarm">alarm</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="参数值类型" class="w100p pl8">
                                <el-radio-group v-model="paramKey.type" @change="changeTypeValue($event,paramKey)">
                                    <el-radio label="string">string</el-radio>
                                    <el-radio label="int">int</el-radio>
                                    <el-radio label="object">object</el-radio>
                                    <el-radio label="float">float</el-radio>
                                    <el-radio label="array">array</el-radio>
                                    <el-radio label="bool">bool</el-radio>
                                    <el-radio label="otc">otc</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item v-if="['string','float','array','bool'].indexOf(paramKey.type)>=0" label="复选/单选" class="w100p pl8">
                                <el-radio-group v-model="paramKey.is_checkbox">
                                    <el-radio label="1">复选</el-radio>
                                    <el-radio label="0">单选</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item v-if="paramKey.type=='otc'" label="参数值" class="w100p pl8">
                                <el-input v-model="paramKey.origin_value_string"></el-input>
                            </el-form-item>
                            <template v-if="paramKey.key_type==1">
                                <el-form-item label="枚举参数值" class="w100p mt0 pl8">
                                    <el-form-item label="数据说明" label-width="290px"></el-form-item>
                                    <el-form-item label="传送数据" label-width="290px"></el-form-item>
                                    <el-form-item label="操作"  label-width="85px"></el-form-item>
                                </el-form-item>
                                <el-form-item label=" " :key="listIndex" class="w100p mt0" v-for="(valueItem,listIndex) in paramKey.value_list" >
                                    <el-form-item label=""
                                                  :prop="'value_list.'+paramIndex+'.value_list.'+listIndex+'.value_des'"
                                                  :rules="[
                                                  {validator:lengthLimit.bind(null,64)},
                                                  ]"
                                    >
                                        <el-input v-model="valueItem.value_des" class="input-width" placeholder="最多64个字符"></el-input>
                                    </el-form-item>
                                    <el-form-item label=""
                                                  :prop="'value_list.'+paramIndex+'.value_list.'+listIndex+'.value'"
                                                  :rules="[
                                                  {validator:lengthLimit.bind(null,32)},
                                                  {validator:unCN}
                                                  ]"
                                    >
                                        <el-input v-model="valueItem.value" class="input-width" placeholder="字母数字符号，最多32个字符"></el-input>
                                    </el-form-item>
                                    <el-form-item label="" style="padding-left: 25px;" v-if="listIndex>0">
                                        <i class="el-icon-delete" @click="delEnumerateItem(listIndex,paramKey)"></i>
                                    </el-form-item>
                                </el-form-item>
                                <el-form-item label=" " class="w100p">
                                    <template slot-scope="scope">
                                        <a href="javascript:void(0);" @click="addEnumerateItem(paramKey)" class="addbtn">
                                            <i class="el-icon-plus"></i> 添加更多参数值
                                        </a>
                                    </template>
                                </el-form-item>
                            </template>
                            <div v-if="paramKey.key_type==2">
                                <el-form-item label="参数范围值" class="w100p mt0 pl8">
                                    <el-form-item label="" v-if="paramKey.value_list[1]"
                                                  :prop="'value_list.'+paramIndex+'.value_list.1.value'"
                                                  :rules="[
                                                  {required:true,message:'最小值不能为空'},
                                                  {type:'number',message:'最小值为数字'}
                                                  ]"
                                    >
                                        <el-input v-model.number="paramKey.value_list[1].value" placeholder="请输入数据最小值"  class="input-width">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="" v-if="paramKey.value_list[2]"
                                                  :prop="'value_list.'+paramIndex+'.value_list.2.value'"
                                                  :rules="[
                                                  {required:true,message:'最大值不能为空'},
                                                  {type:'number',message:'最大值为数字'}
                                                  ]"
                                    >
                                        <el-input v-model.number="paramKey.value_list[2].value" placeholder="请输入数据最大值" class="input-width">
                                        </el-input>
                                    </el-form-item>
                                </el-form-item>
                            </div>
                            <template v-if="paramKey.key_type==3">
                                <div class="sec-item" v-for="(em,i) in paramKey.list" :key="i">
                                    <el-form-item label="参数名称(key)"
                                                  :prop="'value_list.'+paramIndex+'.list.'+i+'.key'"
                                                  :rules="[
                                                   {required:true,message:'参数名称不能为空'},
                                                   {min:1,max:32,message:'参数名称最多32个字符'},
                                                   {validator:letterAndUnderscode}
                                                  ]"
                                    >
                                        <el-input v-model="em.key" placeholder="仅支持字母、下划线输入，最多32个字符" class="input-width"></el-input>
                                    </el-form-item>
                                    <el-form-item label="参数含义" label-width="100px"
                                                  :prop="'value_list.'+paramIndex+'.list.'+i+'.remark'"
                                                  :rules="[
                                                   {required:true,message:'参数含义不能为空'}
                                                  ]"
                                    >
                                        <el-input v-model="em.remark" class="input-width"></el-input>
                                    </el-form-item>
                                    <el-form-item label="单位" class="pl8"
                                                  :prop="'value_list.'+paramIndex+'.list.'+i+'.unit'"
                                                  :rules="[
                                                   {validator:lengthLimit.bind(null,16)},
                                                  ]"
                                    >
                                        <el-input v-model="em.unit" placeholder="支持中英文、特殊字符，最多16个字符" class="input-width"></el-input>
                                    </el-form-item>
                                    <el-form-item label="参数可控" class="w100p"
                                                  :prop="'value_list.'+paramIndex+'.list.'+i+'.method'"
                                                  :rules="[
                                                   {required:true,message:'参数可控不能为空'}
                                                  ]"
                                    >
                                        <el-checkbox-group v-model="em.method">
                                            <el-checkbox label="set">set</el-checkbox>
                                            <el-checkbox label="get">get</el-checkbox>
                                            <el-checkbox label="report">report</el-checkbox>
                                            <el-checkbox label="alarm">alarm</el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                    <el-form-item label="参数值类型" class="w100p pl8">
                                        <el-radio-group v-model="em.type" @change="changeTypeValue($event,em)">
                                            <el-radio label="string">string</el-radio>
                                            <el-radio label="int">int</el-radio>
                                            <el-radio label="float">float</el-radio>
                                            <el-radio label="array">array</el-radio>
                                            <el-radio label="bool">bool</el-radio>
                                            <el-radio label="otc">otc</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="复选/单选" class="w100p pl8">
                                        <el-radio-group v-if="['string','float','array','bool'].indexOf(em.type)>=0" v-model="em.is_checkbox">
                                            <el-radio label="1">复选</el-radio>
                                            <el-radio label="0">单选</el-radio>
                                        </el-radio-group>
                                    </el-form-item>

                                    <el-form-item v-if="em.type=='otc'" label="参数值" class="w100p pl8">
                                        <el-input v-model="em.origin_value_string"></el-input>
                                    </el-form-item>

                                    <template v-if="em.key_type==1">
                                        <el-form-item label="枚举参数值" class="w100p mt0 pl8">
                                            <el-form-item label="参数名称(key)" label-width="290px"></el-form-item>
                                            <el-form-item label="传送数据" label-width="290px"></el-form-item>
                                            <el-form-item label="操作" label-width="60px"></el-form-item>
                                        </el-form-item>
                                        <el-form-item label=" " class="w100p mt0" v-for="(vi,dx) in em.value_list" :key="dx">
                                            <el-form-item label=""
                                                          :prop="'value_list.'+paramIndex+'.list.'+i+'.value_list.'+dx+'.value_des' "
                                                          :rules="[
                                                           {validator:lengthLimit.bind(null,64)},
                                                          ]"
                                            >
                                                <el-input v-model="vi.value_des" class="input-width" placeholder="最多64个字符"></el-input>
                                            </el-form-item>
                                            <el-form-item label=""
                                                          :prop="'value_list.'+paramIndex+'.list.'+i+'.value_list.'+dx+'.value' "
                                                          :rules="[
                                                           {validator:lengthLimit.bind(null,32)},
                                                           {validator:unCN}
                                                          ]"
                                            >
                                                <el-input v-model="vi.value" class="input-width" placeholder="字母数字符号，最多32个字符"></el-input>
                                            </el-form-item>
                                            <el-form-item label="" style="padding-left: 25px;" v-if="dx>0">
                                                <i class="el-icon-delete" @click="delEnumerateItem(dx,em)"></i>
                                            </el-form-item>
                                        </el-form-item>
                                        <el-form-item label=" " class="w100p">
                                            <template slot-scope="scope">
                                                <a href="javascript:void(0);" @click="addEnumerateItem(em)" class="addbtn">
                                                    <i class="el-icon-plus"></i> 添加更多参数值
                                                </a>
                                            </template>
                                        </el-form-item>
                                    </template>
                                    <div v-if="em.key_type==2">
                                        <el-form-item label="参数范围值" class="w100p mt0 pl8">
                                            <el-form-item label="" v-if="em.value_list[1]"
                                                          :prop="'value_list.'+paramIndex+'.list.'+i+'.value_list.1.value'"
                                                          :rules="[
                                                            {required:true,message:'最小值不能为空'},
                                                            {type:'number',message:'最小值为数字'}
                                                          ]"
                                            >
                                                <el-input v-model.number="em.value_list[1].value" placeholder="请输入数据最小值" class="input-width">
                                                </el-input>
                                            </el-form-item>
                                            <el-form-item label="" v-if="em.value_list[2]"
                                                          :prop="'value_list.'+paramIndex+'.list.'+i+'.value_list.2.value'"
                                                          :rules="[
                                                            {required:true,message:'最大值不能为空'},
                                                            {type:'number',message:'最大值为数字'}
                                                          ]"
                                            >
                                                <el-input v-model.number="em.value_list[2].value" placeholder="请输入数据最大值" class="input-width">

                                                </el-input>
                                            </el-form-item>
                                        </el-form-item>
                                    </div>
                                    <div style="text-align: right" v-if="i>0">
                                        <span class="el-icon-delete" title="删除参数" @click="deleteAttr(paramKey,i)"></span>
                                    </div>
                                </div>
                                <a href="javascript:void(0);" @click="addAttribute(paramKey)" class="addAttr"><i class="el-icon-plus"></i> 新增属性</a>
                            </template>

                        </el-col>
                        <div style="text-align: right" v-if="paramIndex>0">
                            <span title="删除参数" @click="deleteParams(paramIndex)" class="el-icon-delete"></span>
                        </div>
                    </div>
                </el-row>
                <div class="buttonPos">
                    <el-button type="ghost" @click="addParams" class="addParams">新增参数</el-button>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button type="primary" @click="confirmTechnical">添 加</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    import fetch from '@/utils/fetch';
    import {getToken} from '@/utils/auth';

    const s_form = {
        "method": [],
        "key":"",
        "type":"string",
        "key_type":1,
        "unit":"",
        "is_checkbox":'1',
        "origin_value_string":"",
        "value_list" : [{
            'value' : '',
            'value_des' : ''
        }],
        "remark":""
    };
    const f_form = {
        "method": [
        ],
        "key":"",
        "type":"string",
        "key_type":1,
        "remark":"",
        "unit":"",
        "is_checkbox":'1',
        "origin_value_string":"",
        "value_list" : [{
            'value' : '',
            'value_des' : ''
        }],
        "list": [s_form]
    };

    export default {
        props: ['typeid','token','visible','attrid'],
        computed: {
        },
        created() {
        },
        mounted() {
        },
        data() {
            const form_string = JSON.stringify(f_form);
            return {
                //dialogFormVisible : this.visible,
                top:window.innerHeight-660>0 ? (window.innerHeight-660)/2+'px':'0px',
                dialogTitle:'新建属性参数',
                hulian_value : true,
                isChooseObject : false,
                form_string:form_string,
                form : {
                    "token":this.token,
                    "type_id":this.typeid,
                    "nodeid":"",
                    "is_default":1,
                    "value_list": [JSON.parse(form_string)]
                },
                rules:{
                    nodeid:[
                        {required:true,message:'属性名称不能为空'},
                        {min:1,max:32,message:'属性名称最多32个字符'},
                        {validator:this.letterAndUnderscode}
                    ]
                }
            }
        },
        watch:{
            attrid:function (val) {
                if(val){
                    this.getAttr(val);
                    this.dialogTitle = '编辑属性参数';
                }
                else{
                    this.dialogTitle = '新建属性参数';
                }
            }
        },
        methods: {
            getAttr(attr_id){
                fetch({
                    url: '/attribute/info',
                    method: 'post',
                    data: {attr_id:attr_id},
                }).then(res=>{
                    this.form.nodeid = res.ret.nodeid;
                    this.form.is_default = res.ret.is_default;
                    res.ret.value_list.forEach(function (item) {
                        if(!item.list){
                            item.list = [JSON.parse(JSON.stringify(s_form))];
                        }
                        if(!item.value_list){
                            item.value_list = [{
                                'value' : '',
                                'value_des' : ''
                            }];
                        }
                    })
                    this.form.value_list = res.ret.value_list;
                })
            },
            addParams(){
                this.form.value_list.push(JSON.parse(this.form_string));
            },
            deleteParams(index){
                this.form.value_list.splice(index,1);
            },
            addAttribute(item){
                let str = JSON.stringify(s_form);
                item.list.push(JSON.parse(str));
            },
            deleteAttr(item,index){
                item.list.splice(index,1);
            },
            //获得参数值类型改变的值
            changeTypeValue(val,item){
                const temp = [
                    {
                        value:1,
                        value_des:'类型'
                    },
                    {
                        value:'',
                        value_des:'最小值'
                    },
                    {
                        value:'',
                        value_des:'最大值'
                    }
                ];
                const nor = [{ value:'', value_des:''}];
                if(val=='int'){
                    item.key_type = 2;
                    item.value_list = temp;
                }
                else if(val=='object'){
                    item.key_type =3;
                }
                else if(val=='otc'){
                    item.key_type =4;
                }
                else{
                    item.key_type = 1;
                    item.value_list = nor;
                }

            },
            addEnumerateItem(item){
                item.value_list.push({
                      'value' : '',
                      'value_des' : ''
                  })
            },
            delEnumerateItem(itemIndex,item){
                item.value_list.splice(itemIndex,1);
            },
            closeDialog(){
                this.$refs['attForm'].resetFields();
                this.form.value_list = [JSON.parse(this.form_string)];
                this.$emit('close-dialog');//通知父组件
            },
            confirmTechnical(){
                this.$refs['attForm'].validate(valid=>{
                    if(valid){
                        let paramString = JSON.stringify(this.form);
                        let params = JSON.parse(paramString);
                        params.value_list.forEach(function (item) {
                            if(item.key_type=='3'){
                                delete item.value_list;
                            }
                            else{
                                delete item.list;
                            }
                        });
                        if(this.attrid){
                            params.attr_id = this.attrid;
                        }
                        fetch({
                            url: this.attrid?'/attribute/edit':'/attribute/add',
                            method: 'post',
                            data: params,
                        }).then(res=>{
                            this.$emit('fresh-list');
                            this.closeDialog();
                        })
                    }
                });


            },
            //字母下划线
            letterAndUnderscode(rule, value, callback){
                let flag = true;
                if(!value){
                    callback();
                    return;
                }
                for(let i = 0;i<value.length;i++){
                    let code = value.charCodeAt(i);
                    //ASCII 65-90=>A-Z 97-122=>a-z  95=>_
                    if((code>=65&&code<=90)||(code>=97&&code<=122)||code==95 || (code>=33 && code <= 46) ||(code >=48 && code <=57)) {
                    }
                    else{
                        flag = false;
                        callback('只能是字母下划线');
                        break;
                    }
                }
                if(flag){
                    callback();
                }
            },
            //非汉字
            unCN(rule, value, callback){
                let pattern = /[\u4e00-\u9fa5]+/g;
                if(pattern.test(value)){
                    callback('不支持中文汉字');
                }
                else{
                    callback();
                }/*
                let flag = true;
                for(let i = 0;i<value.length;i++){
                    let code = value.charCodeAt(i);
                    //ASCII 65-90=>A-Z 97-122=>a-z  48-57=>0-9
                    if((code>=65&&code<=90)||(code>=97&&code<=122)||(code>=48&&code<=57)){
                    }
                    else{
                        flag = false;
                        callback('只能是字母数字');
                        break;
                    }
                }
                if(flag){
                    callback();
                }*/
            },
            //长度限制
            lengthLimit(max,rule, value, callback){
                if(value&&value.length>max){
                    callback('长度不能超过'+max+'字符');
                }else{
                    callback();
                }
            }

        }
    }
</script>
<style scoped>
    .addParams{
        margin-top: 15px;
    }
    .addAttr{
        margin-left: 140px;
        color: #409EFF;
    }
    .w100p{
        width: 100%;
    }
    .w50p{
        width: 50%;
    }
    .input-width{
        width: 285px;
    }
    .addbtn{
        font-size: 12px;
        color:#409EFF;
    }

    .first-item{
        border: 1px dashed #d2d2d2;
        padding-top: 15px;
    }
    .sec-item{
        border: 1px dashed #d2d2d2;
        padding-top: 15px;
        width: 98%;
    }
    .mt0{
        margin-bottom: 0;
    }
    .pl8 .el-form-item__label{
        padding-left: 10px;
    }
</style>