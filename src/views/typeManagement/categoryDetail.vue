<template>
    <div class="app-container calendar-list-container">
        <el-row :gutter="30">
            <el-col :span="24">
                <el-button type="ghost" @click="handleBackEvent">返回</el-button>
                <el-button type="primary" @click="editGory">{{editText}}</el-button>
                <el-button type="danger" @click="handleDelEvent" v-show="!isEdit">删除该品类</el-button>
            </el-col>
            <el-col :span="24" style="margin: 20px 0px;padding-bottom: 40px;">
                <el-tabs type="border-card" @tab-click="handleClick">
                    <el-tab-pane label="基本信息">
                        <el-col :span="24">
                            <el-form :rules="rules" ref="ruleForm" :model="form" label-width="80px" style="margin-top: 20px;" size="large">
                                <el-form-item label="子品类名称" label-width="120px" prop="name">
                                    <el-col :span="12">
                                        <el-input v-model="form.name" :span="6" :disabled="!isEdit"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="子品类英文名" label-width="120px" prop="name_e">
                                    <el-col :span="12">
                                        <el-input v-model="form.name_e" :span="6" :disabled="!isEdit"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="所属品类" label-width="120px" v-if="isEdit" prop="parent_type_id">
                                    <el-col :span="12">
                                        <el-select v-model="form.parent_type_id" placeholder="所属品类" style="width: 100%;"
                                                   :disabled="!isEdit">
                                            <el-option
                                                    v-for="item in parentList"
                                                    :key="item.id"
                                                    :label="item.name"
                                                    :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="所属品类" label-width="120px" v-else="isEdit" prop="parent_type_name">
                                    <el-col :span="12">
                                        <el-input v-model="form.parent_type_name" :span="6"
                                                  :disabled="!isEdit"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="品类图标" label-width="120px" v-if="isLoadData" >
                                    <el-col :span="12">
                                        <div class="fileuploadItem childCategory">
                                            <el-upload
                                                    class="avatar-uploader"
                                                    :class="isEdit ? '' : 'disabled'"
                                                    action="/api/index.php/producttype/iconupload"
                                                    :show-file-list="false"
                                                    :on-success="handleAvatarSuccess"
                                                    :before-upload="beforeAvatarUpload"
                                                    :disabled="!isEdit"
                                                    accept="image/png"
                                                    :data="high_light_data">
                                                <img v-if="form.icon_list.high_light!=''"
                                                     :src="form.icon_list.high_light.file_url" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                            <span class="file_upload_img_des">高亮状态</span>
                                        </div>
                                        <div class="fileuploadItem childCategory">
                                            <el-upload
                                                    class="avatar-uploader"
                                                    :class="isEdit ? '' : 'disabled'"
                                                    action="/api/index.php/producttype/iconupload"
                                                    :show-file-list="false"
                                                    :on-success="handleAvatarSuccess"
                                                    :before-upload="beforeAvatarUpload"
                                                    :disabled="!isEdit"
                                                    accept="image/png"
                                                    :data="normal_s_data">
                                                <img v-if="form.icon_list.normal_s!=''"
                                                     :src="form.icon_list.normal_s.file_url" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                            <span class="file_upload_img_des">默认状态小尺寸</span>
                                        </div>
                                        <div class="fileuploadItem childCategory">
                                            <el-upload
                                                    class="avatar-uploader"
                                                    :class="isEdit ? '' : 'disabled'"
                                                    action="/api/index.php/producttype/iconupload"
                                                    :show-file-list="false"
                                                    :on-success="handleAvatarSuccess"
                                                    :before-upload="beforeAvatarUpload"
                                                    :disabled="!isEdit"
                                                    accept="image/png"
                                                    :data="normal_data">
                                                <img v-if="form.icon_list.normal!=''"
                                                     :src="form.icon_list.normal.file_url" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                            <span class="file_upload_img_des">默认状态大尺寸</span>
                                        </div>
                                        <div class="fileuploadItem childCategory">
                                            <el-upload
                                                    class="avatar-uploader"
                                                    :class="isEdit ? '' : 'disabled'"
                                                    action="/api/index.php/producttype/iconupload"
                                                    :show-file-list="false"
                                                    :on-success="handleAvatarSuccess"
                                                    :before-upload="beforeAvatarUpload"
                                                    :disabled="!isEdit"
                                                    accept="image/png"
                                                    :data="disabled_data">
                                                <img v-if="form.icon_list.disabled!=''"
                                                     :src="form.icon_list.disabled.file_url" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                            <span class="file_upload_img_des">不可用状态</span>
                                        </div>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="是否高频使用" label-width="120px">
                                    <el-col :span="12">
                                        <el-checkbox :true-label="1" :false-label="0" v-model="form.is_high_frequency" :disabled="!isEdit">是
                                        </el-checkbox>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="是否为智能开关关联设备品类" label-width="120px" class="line25">
                                    <el-col :span="12">
                                        <el-checkbox :true-label="1" :false-label="0" v-model="form.is_relate_switch" :disabled="!isEdit">是</el-checkbox>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="恒腾快联设备" label-width="120px">
                                    <el-col :span="12">
                                        <el-checkbox :true-label="1" :false-label="0" v-model="form.show_in_select_list" :disabled="!isEdit">是</el-checkbox>
                                    </el-col>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="技术方案">
                        <el-col :span="24">
                            <template>
                                <addTechnical :typeid="typeid" v-on:get-data="getTech" :token="token"
                                              v-show="isEdit"></addTechnical>
                                <el-table
                                        class="technicalTabel"
                                        :data="technical_wifi"
                                        border
                                        stripe
                                        style="width: 100%;margin-top: 15px;"
                                        v-if="technical_wifi"
                                        :span-method="arrayWifiSpanMethod">
                                    <el-table-column prop='name' label="技术方案" width="150"></el-table-column>
                                    <el-table-column prop="vendor" label="模组厂商" width="250"
                                                     align="center"></el-table-column>
                                    <el-table-column prop="model_list" label="模组芯片" class-name="cell-column-no-padding"
                                                     align="center">
                                        <template slot-scope="scope">
                                            <div v-for="item in scope.row.model_list" class="cell-td paddl20">
                                                {{item.name}}
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="操作" width="130" align="center" v-if="isEdit"
                                                     class-name="cell-column-no-padding">
                                        <template slot-scope="scope">
                                            <div v-for="item in scope.row.model_list" class="cell-td option">
                                                <i class="el-icon-delete" title="删除技术方案" @click="delTechnical(item.id,1)"></i>
                                            </div>
                                        </template>
                                    </el-table-column>
                                </el-table>

                                <el-table
                                        :data="technical_zigbee"
                                        border
                                        stripe
                                        style="width: 100%;margin-top: 15px;"
                                        v-if="technical_zigbee"
                                        :span-method="arrayZigbeeSpanMethod">
                                    <el-table-column prop='name' label="技术方案" width="150"></el-table-column>
                                    <el-table-column prop="agreement" label="标准协议"></el-table-column>
                                    <el-table-column label="操作" width="130" align="center" v-if="isEdit">
                                        <template slot-scope="scope">
                                            <i class="el-icon-delete" title="删除技术方案" @click="delTechnical(scope.row.id,2)"></i>
                                        </template>
                                    </el-table-column>
                                </el-table>

                                <el-table
                                        :data="technical_bluetooth"
                                        border
                                        stripe
                                        style="width: 100%;margin-top: 15px;"
                                        v-if="technical_bluetooth"
                                        :span-method="arrayBlueToothSpanMethod">
                                    <el-table-column prop='name' label="技术方案" width="150"></el-table-column>
                                    <el-table-column prop="agreement" label="标准协议"></el-table-column>
                                    <el-table-column label="操作" width="130" align="center" v-if="isEdit">
                                        <template slot-scope="scope">
                                            <i class="el-icon-delete" title="删除技术方案" @click="delTechnical(scope.row.id,3)"></i>
                                        </template>
                                    </el-table-column>
                                </el-table>


                            </template>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="功能属性">
                        <el-col :span="24">
                            <template>
                                <el-button @click="attDialogVisible = true" v-show="isEdit">添加功能属性</el-button>
                                <addAttribute :visible="attDialogVisible" :attrid="selectNodeId"
                                              :typeid="typeid" v-on:close-dialog="closeAttrDialog"
                                              :token="token" v-on:fresh-list="getAttributeList">
                                </addAttribute>
                                <el-table :data="attr_list" border stripe style="width: 100%;margin-top: 15px;"
                                          class="attribt_table" :span-method="spanMethod">
                                    <el-table-column prop="nodeid" label="Node_ID" width="150"
                                                     align="center">
                                    </el-table-column>
                                    <el-table-column label="key" align="center"
                                                     width="150" prop="key">
                                    </el-table-column>
                                    <el-table-column label="method" align="center"
                                                     width="150" prop="method_string">
                                    </el-table-column>

                                    <el-table-column label="Type" align="center"
                                                     width="100" prop="type">
                                    </el-table-column>
                                    <el-table-column label="value" align="center"
                                                     width="250" prop="value_string">
                                    </el-table-column>
                                    <el-table-column label="Remark" prop="remark" align="center" >
                                    </el-table-column>
                                    <el-table-column label="操作" width="80" align="center" v-if="isEdit">
                                        <template slot-scope="scope">
                                            <i class="el-icon-delete" title="删除属性" @click="delProperty(scope.row.attr_id)"></i>
                                            <i class="el-icon-edit-outline" title="编辑属性" @click="editProperty(scope.row.attr_id)"></i>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </template>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="关联产品">
                        <el-col :span="24">
                            <template>
                                <el-table :data="device_list" border stripe style="width: 100%;margin-top: 15px;">
                                    <el-table-column label="品牌" align="center" prop="brand_name"></el-table-column>
                                    <el-table-column label="型号" align="center" prop="model"></el-table-column>
                                    <el-table-column label="厂商" align="center" prop="business_name"></el-table-column>
                                    <el-table-column label="版本信息" align="center">
                                        <template slot-scope="scope">
                                            {{scope.row.version_no_H5?'H5控制页版本'+scope.row.version_no_H5:''}}{{' 固件版本'+scope.row.version_no_firmware}}
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="创建时间" align="center" prop="created_at"></el-table-column>
                                    <el-table-column label="操作" width="130"  align="center">
                                        <template slot-scope="scope">
                                            <el-button v-if="scope.row.is_online"
                                                    size="mini"
                                                    type="primary"
                                                    align="center" @click="toDetai(scope.row.product_id)">进入详情</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </template>
                        </el-col>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>

</template>
<style>
    .el-form-item__error{
        padding: 5px 15px;
    }
    .attribt_table .el-table__body-wrapper {
        overflow-y: scroll;
    }

    .el-table__body-wrapper {
        overflow: hidden;
    }

    .cell-column-no-padding {
        padding: 0px !important;
    }

    .cell-column-no-padding .cell {
        padding: 0px !important;
    }

    .hasMoreList {
        /*height: 55px!important;*/
        /*max-height: 55px;*/
        border-bottom: 1px #ddd solid;
    }

    .hasMoreList .inner-cell-td {
        border-bottom: 1px #ddd solid;
        text-align: center;
        /*padding: 15px 20px;*/
    }

    .hasMoreList .inner-cell-td:last-child {
        border-bottom: none;
    }

    .cell span:last-child .hasNoMoreList {
        border-bottom: none;
    }

    .cell-td {
        vertical-align: middle;
        padding: 15px 20px;
        margin: 0px;
        border-bottom: 1px #ddd solid;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-word;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
    }
    .technicalTabel .cell .cell-td:last-child{
        border-bottom: none;
    }
    /*.cell-td.no-border-bottom{*/
    /*border-bottom: none;*/
    /*}*/
    .cell-td.paddl20 {
        padding-left: 20px;
    }

    .option {
        text-indent: 0px !important;
    }

    /*.cell .cell-td:last-child{*/
    /*border-bottom: none!important;*/
    /*}*/
    .el-table th > .cell {
        position: relative;
        word-wrap: normal;
        text-overflow: ellipsis;
        vertical-align: middle;
        width: 100%;
        box-sizing: border-box;
    }

    .childCategory .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .childCategory .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 22px;
        color: #8c939d;
        width: 110px;
        height: 110px;
        line-height: 110px;
        text-align: center;
    }

    .avatar-uploader {
        display: inline-block;
        margin-right: 15px;
    }

    .avatar-uploader:last-child {
        margin-right: 0px;
    }

    .avatar {
        width: 110px;
        height: 110px;
        display: block;
    }

    .line25 .el-form-item__label {
        line-height: 25px;
    }

    .el-icon-delete,.el-icon-edit-outline {
        cursor: pointer;
        color: #409EFF;
        font-size: 16px;
        font-weight: bold;
    }

    .fileuploadItem {
        display: table-cell;
        position: relative;
    }

    .fileuploadItem .disabled .el-upload {
        background-color: #f5f7fa;
        cursor: not-allowed;
    }

    .fileuploadItem:last-child .avatar-uploader {
        margin-right: 0px !important;
    }

    .fileuploadItem .file_upload_img_des {
        position: absolute;
        top: 109px;
        text-align: center;
        color: #999;
        font-size: 12px;
        left: 57px;
        transform: translateX(-50%);
        width: 110px;
    }

    .el-tooltip__popper {
        max-width: 300px;
    }

    .attDialog .el-dialog__body{
        overflow-y: auto;
        max-height: 550px;
        padding-top: 10px;
        padding-bottom: 0;
    }
    .attDialog .el-dialog__header{
        border-bottom: 1px solid #d8dce5;
    }
    .attDialog .el-form-item {
        margin-bottom: 17px;
    }
    .pl8 .el-form-item__label{
        padding-left: 10px;
    }
    .attDialog .el-dialog--center .el-dialog__header{padding-top: 15px;}
    .attDialog .el-input__inner{
        height: 32px;
    }
    .attDialog .el-form-item__content,.attDialog .el-form-item__label{
        line-height: 32px;
    }
</style>

<script>
    import {Loading} from 'element-ui';
    import fetch from '@/utils/fetch';
    import helper from '@/utils/helper';
    import {getToken} from '@/utils/auth';
    import addTechnical from './addTechnical.vue';
    import addAttribute from './addAttribute.vue';
    export default {
        name: 'existedCategory',
        computed: {},
        created() {
        },
        mounted() {
            this.getTypeInfo();
            this.getParentType();
            this.getAttributeList();
            this.getProductList();
        },
        data() {
            return {
                isLoadedTechnical: false,
                attDialogVisible:false,
                selectNodeId:'',
                typeid: this.$route.query.id,
                token: getToken(),
                isLoadData: false,
                isEdit: false, //判断是否是编辑
                editText: '编辑品类信息',
                form: {
                    name: '',
                    name_e: '',
                    dialogImageUrl: '',
                    dialogVisible: false,
                    imageUrl: [
                        {
                            "file_url": ''
                        },
                        {
                            "file_url": ''
                        },
                        {
                            "file_url": ''
                        },
                        {
                            "file_url": ''
                        }
                    ],

                },
                rules: {
                    name: [
                        { required: true, message: '请输入子品类名称', trigger: 'blur' },
                        { max: 32, message: '子品类名称不能超过32个字符', trigger: 'blur' },
//                        { validator(rule, value, callback){
//                            if (!/^[\u4e00-\u9fa5_a-zA-Z]+$/.test(value)) {
//                                callback(new Error('请输入正确的子品类英文名称'));
//                            }
//                            callback();
//                        } }
                    ],
                    name_e : [
                        { required: true, message: '请输入子品类英文名称', trigger: 'blur' },
                        { max: 32, message: '子品类英文名称不能超过32个字符', trigger: 'blur' },
//                        { validator(rule, value, callback){
//                            if (!/^[a-zA-Z\d-_/]+$/.test(value)) {
//                                callback(new Error('请输入正确的子品类英文名称'));
//                            }
//                            callback();
//                        } }
                    ],
                    parent_type_id: [
                        { required: true, message: '请选择所属品类', trigger: 'change' }
                    ],

                },
                attr_list: [],
                device_list:[],
                technical_wifi: [],
                technical_bluetooth: [],
                technical_zigbee: [],
                parentList: [],
                high_light_data: {
                    'token': getToken(),
                    'file_id': '',
                    'attribute': 'high_light'
                },
                normal_s_data: {
                    'token': getToken(),
                    'file_id': '',
                    'attribute': 'normal_s'
                },
                normal_data: {
                    'token': getToken(),
                    'file_id': '',
                    'attribute': 'normal'
                },
                disabled_data: {
                    'token': getToken(),
                    'file_id': '',
                    'attribute': 'disabled'
                },
                spanMap: {},//合并map
            }
        },
        methods: {
            getMethodReturn(list){
                console.log(list);
                let methodHtml = '';
                list.forEach((val, index) => {
                    methodHtml += '<div class="cell-td">' + val.method + '</div>';
                });
                return methodHtml;
            },
            handleClick(tab, event){
                if (tab.index == 1 && !this.isLoadedTechnical) {
                    this.getTechList(1);
                    this.getTechList(2);
                    this.getTechList(3);
                    this.isLoadedTechnical = true;
                }
            },

            // 获取功能属性列表
            getAttributeList(){
                this.attr_list =[];
                this.spanMap = {};
                fetch({
                    url: '/admin/attribute/lists',
                    method: 'post',
                    data: {
                        'type_id': this.typeid
                    }
                }).then(res => {
                    let _this = this;
                    res.list.forEach(function (item) {
                        let secCount=0;
                    if(item.list){
                        _this.spanMap[item.nodeid]={
                            index:_this.attr_list.length,
                            children:{}
                        }
                        item.list.forEach(function (v) {
                            let thirdCount=0;
                            if(v.key_type!='3'){
                                secCount++;
                                _this.attr_list.push(Object.assign({
                                        nodeid:item.nodeid,
                                        attr_id:item.attr_id
                                },v));
                            }
                            else{
                                _this.spanMap[item.nodeid].children[v.key] = {
                                    index:_this.attr_list.length,
                                }
                                v.remark.forEach(function (em,idx) {
                                    secCount++;
                                    thirdCount++;
                                    _this.attr_list.push({
                                        nodeid:item.nodeid,
                                        attr_id:item.attr_id,
                                        method_string:v.method_string,
                                        key:v.key,
                                        type:v.type,
                                        value_string:v.value_list[idx].value_string,
                                        remark:em.remark
                                    });
                                })
                                _this.spanMap[item.nodeid].children[v.key].len = thirdCount;
                            }
                        })
                        _this.spanMap[item.nodeid].len = secCount;
                    }
                    else{
                        _this.attr_list.push(item);
                    }
                })
            }).
                catch(res => {}
            )
            },
            //获取关联设备
            getProductList(){
                fetch({
                    url: '/admin/product_lists',
                    method: 'post',
                    data: {
                        'search_type': 2,
                        'type_id': this.typeid
                    }
                }).then(res => {
                    this.device_list = res.data;
                }).catch(res => {

                })
            },

            // 获取品类详情信息
            getTypeInfo(){
                fetch({
                    url: '/product/type_info',
                    method: 'post',
                    data: {
                        'id': this.typeid
                    }
                }).then(res => {
                    this.form = res;
                    //this.form.is_high_frequency = this.form.is_high_frequency == 1 ? true : false;
                   // this.form.is_relate_switch = this.form.is_relate_switch == 1 ? true : false;
                    this.handleIconList(this.form.icon_list);
                    this.isLoadData = true;
                }).catch(res => {

                })
            },
            handleIconList(icon_list){
                console.log(icon_list);
                this.high_light_data.file_id = icon_list.high_light.file_id;
                this.normal_s_data.file_id = icon_list.normal_s.file_id;
                this.normal_data.file_id = icon_list.normal.file_id;
                this.disabled_data.file_id = icon_list.disabled.file_id;
            },
            //获取父类品类
            getParentType(){
                fetch({
                    url: '/product/parenttype_lists',
                    method: 'post',
                    data: {}
                }).then(res => {
                    this.parentList = res.list;
                })
            },
            handleAvatarSuccess(res, file) {
                let data = res.result;
                if(res.code!==200){
                    this.$message.error(res.msg);
                    return;
                }
                switch (res.result.type) {
                    case 'high_light' :
                        this.form.icon_list.high_light = data.high_light;
                        this.high_light_data.file_id = data.high_light.file_id;
                        break;
                    case 'normal_s' :
                        this.form.icon_list.normal_s = data.normal_s;
                        this.normal_s_data.file_id = data.normal_s.file_id;
                        break;
                    case 'normal' :
                        this.form.icon_list.normal = data.normal;
                        this.normal_data.file_id = data.normal.file_id;
                        break;
                    case 'disabled' :
                        this.form.icon_list.disabled = data.disabled;
                        this.disabled_data.file_id = data.disabled.file_id;
                        break;
                }
                console.log(this.form.high_light);
            },
            beforeAvatarUpload(file) {
                const filter = file.type === 'image/png';
                const isLt5M = file.size / 1024 / 1024 < 5;

                if (!filter) {
                    this.$message.error('请上传5M大小内PNG格式的文件');
                }
                if (!isLt5M) {
                    this.$message.error('请上传5M大小内PNG格式的文件');
                }
                return filter && isLt5M;
            },

            //删除技术方案
            delTechnical(id, technology_type){
                console.log(id);
                fetch({
                    url: '/producttype/technologydel',
                    method: 'post',
                    data: {
                        'token': this.token,
                        'technology_type': technology_type,
                        'id': id
                    }
                }).then(res => {
                    this.$message({
                        type: 'success',
                        message: '操作成功！'
                    });
                    this.getTechList(technology_type);
                })
            },

            //删除品类
            delectGroy(){
                fetch({
                    url: '/producttype/del',
                    method: 'post',
                    data: {
                        'id': this.$route.query.id
                    }
                }).then(res => {
                    this.$message({
                        showClose: true,
                        message: '删除成功！',
                        type: 'success'
                    });
                    setTimeout(() => {
                        this.$router.push({path: '/typeManagement/existedCategory'});
                    }, 2000);
                })
            },
            //编辑品类信息
            editGory(){
                if (!this.isEdit) {
                    this.isEdit = true;
                    this.editText = '确定并提交修改';
                } else {
                    this.$confirm('是否确认保存修改后品类信息？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.saveGoryInfo();
                    }).catch(() => {
                    });
                }
            },

            //删除属性
            delProperty(attr_id){
                this.$confirm('确认删除此属性？','提示').then(()=>{
                    fetch({
                        url: '/attribute/del',
                        method: 'post',
                        data: {attr_id,}
                    }).then(res=>{
                        this.$message({
                            type: 'success',
                            message: '操作成功！'
                        });
                        this.getAttributeList();
                    });
                });

            },
            //编辑属性
            editProperty(attr_id){
              this.selectNodeId = attr_id;
              this.attDialogVisible = true;
            },


            //保存品类信息事件处理
            saveGoryInfo(){
                this.$refs['ruleForm'].validate((valid) => {
                    console.log(valid);
                    if (valid) {
                        this.isEdit = false;
                        this.editText = '编辑品类信息';
                        let form = JSON.parse(JSON.stringify(this.form));
                        //form.is_high_frequency = form.is_high_frequency == true ? 1 : 0;
                        //form.is_relate_switch = form.is_relate_switch == true ? 1 : 0;
                        fetch({
                            url: '/producttype/edit',
                            method: 'post',
                            data: form,
                        }).then(res => {
                            this.isEdit = false;
                            setTimeout(() => {
                                this.$message({
                                    type: 'success',
                                    message: '保存成功!'
                                });
                            }, 1000);
                        }).catch(res => {
                            this.$message({
                                type: 'error',
                                message: res.msg
                            });
                        })
                    } else {
                        this.$message({
                            type: 'error',
                            message: '编辑信息失败!'
                        });
                        return false;
                    }
                });

            },

            //处理删除事件
            handleDelEvent(){
                this.$confirm('删除后，厂商将无法再进行该品类的开发合作，确认请继续', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.delectGroy();
                }).catch(() => {
                });
            },

            //处理返回事件
            handleBackEvent(){
                if (!this.isEdit) {
                    this.$router.push({path: '/typeManagement/existedCategory'});
                } else {
                    this.$confirm('是否确认返回? 所修改的信息将不会被保存!', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.getTypeInfo();
                        this.isEdit = false;
                        this.editText = '编辑品类信息';
                    }).catch(() => {
                    });

                }
            },

            //添加技术方案
            addTechnical(){

            },

            //获取子组件传回来的功能属性方案数据
            getAttr(params){
            },
            //窗口关闭事件
            closeAttrDialog(){
                this.attDialogVisible = false;
                this.selectNodeId = '';
            },

            //获取子组件传回来的技术方案数据
            getTech(val){
                console.log(val);
                fetch({
                    url: 'producttype/technologyadd',
                    method: 'post',
                    data: val,
                }).then(res => {
                    this.$message({
                        type: 'success',
                        message: '添加方案成功！'
                    });
                    this.getTechList(1);
                    this.getTechList(2);
                    this.getTechList(3);
                }).catch(res => {
                    this.$message({
                        type: 'error',
                        message: res.msg
                    });
                })
            },
            toDetai(product_id){
                this.$router.push({path:'/productManagement/onlineProductDetail',query:{product_id:product_id}});
            },
            getTechList(technology_type){
                fetch({
                    url: 'producttype/technologylists',
                    method: 'post',
                    data: {
                        'token': getToken(),
                        'type_id': this.typeid,
                        'technology_type': technology_type
                    },
                }).then(res => {
                    switch (technology_type) {
                        case 1 :
                            this.technical_wifi = res.list;
                            break;
                        case 2 :
                            this.technical_zigbee = res.list;
                            break;
                        case 3 :
                            this.technical_bluetooth = res.list;
                            break;
                    }
                }).catch(res => {
                    this.$message({
                        type: 'error',
                        message: res.msg
                    });
                })
            },
            spanMethod({row, column, rowIndex, columnIndex}){
                let pt = this.spanMap[row.nodeid];
                if(columnIndex==0||columnIndex==6){
                    if(pt){
                        if(pt.index==rowIndex){
                            return [pt.len,1]
                        }
                        else{
                            return [0,0]
                        }
                    }else{
                        return [1,1]
                    }
                }
                else if(columnIndex==1){
                    if(pt){
                        if(pt.children[row.key]){
                            if(pt.children[row.key].index==rowIndex){
                                return [pt.children[row.key].len,1]
                            }else{
                                return [0,0]
                            }

                        }else{
                            return [1,1]
                        }
                    }
                    else{
                        return [1,1]
                    }
                }
                else{
                    return [1,1]
                }
            },

            //当前行row、当前列column、当前行号rowIndex、当前列号columnIndex
            arrayWifiSpanMethod({row, column, rowIndex, columnIndex}) {
                if (columnIndex === 0) {
                    if (rowIndex === 0) {
                        return {
                            rowspan: this.technical_wifi.length,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            },
            arrayBlueToothSpanMethod({row, column, rowIndex, columnIndex}) {
                if (columnIndex === 0) {
                    if (rowIndex === 0) {
                        return {
                            rowspan: this.technical_bluetooth.length,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            },
            arrayZigbeeSpanMethod({row, column, rowIndex, columnIndex}) {
                if (columnIndex === 0) {
                    if (rowIndex === 0) {
                        return {
                            rowspan: this.technical_zigbee.length,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            },
        },
        components: {
            addTechnical,
            addAttribute
        }
    }
</script>
