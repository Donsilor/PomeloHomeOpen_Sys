<template>
    <div class="app-container calendar-list-container">
        <el-row :gutter="30">
            <el-col :span="24">
                <el-button type="ghost" @click="handleBackEvent">返回</el-button>
                <el-button type="primary" @click="editDevice">{{editText}}</el-button>
                <el-button type="danger" @click="handleDelEvent" v-show="!isEdit">删除该设备</el-button>
            </el-col>
            <el-col :span="24" style="margin: 20px 0px;padding-bottom: 40px;">
                <el-form ref="ruleForm" :rules="rules" :model="form" label-width="80px" style="margin-top: 20px;" size="large">
                    <el-tabs type="border-card">
                        <el-tab-pane label="基本信息">
                            <el-col :span="24">
                                <el-form-item label="品类" label-width="120px">
                                    <el-col :span="12">
                                        <el-input v-model="form.type_name" disabled></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="厂商" label-width="120px">
                                    <el-col :span="12">
                                        <el-input v-model="form.business_name"  disabled></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="品牌" label-width="120px">
                                    <el-col :span="12">
                                        <el-input v-model="form.brand_name"  disabled></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="型号" label-width="120px">
                                    <el-col :span="12">
                                        <el-input v-model="form.model"  disabled></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="产品图片" label-width="120px">
                                    <el-col :span="12">
                                        <div class="flex">
                                            <el-input v-model="form.base_img.filename" readonly v-if="form.base_img" :disabled="!isEdit"></el-input>
                                            <el-upload
                                                    class="upload-container"
                                                    action="/api/index.php/files/save"
                                                    :show-file-list="false"
                                                    :on-success="handleAvatarSuccess"
                                                    :before-upload="beforeAvatarUpload"
                                                    accept="image/png"
                                                    :data="form.base_img"
                                                    :disabled="!isEdit">
                                                <el-button size="middle" type="primary">选择文件</el-button>
                                            </el-upload>
                                        </div>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="其他说明" label-width="120px">
                                    <el-col :span="12">
                                        <el-input
                                                type="textarea"
                                                :autosize="{ minRows: 3, maxRows: 3}"
                                                placeholder="请输入其他说明"
                                                v-model="form.base_des" :disabled="!isEdit">
                                        </el-input>
                                    </el-col>
                                </el-form-item>

                            </el-col>
                        </el-tab-pane>
                        <el-tab-pane label="添加方式">
                            <el-col :span="24">
                                <el-form-item label="设备添加方式" label-width="120px" prop="add_type">
                                    <el-col :span="13">
                                        <el-select v-model="form.add_type" placeholder="请选择添加方式" style="width: 100%;" :disabled="!isEdit">
                                            <el-option
                                                    v-for="item in deviceAddTypeList"
                                                    :key="item.type_id"
                                                    :label="item.type_name"
                                                    :value="item.type_id">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="第一步" label-width="120px">
                                    <el-col :span="13">
                                        <el-form-item label="上传图片" label-width="80px" prop="add1_img.filename" v-if="form.add1_img">
                                            <div class="flex">
                                                <!--<div class="desTitle">上传图片</div>-->
                                                <el-input v-model="form.add1_img.filename" readonly  :disabled="!isEdit"></el-input>
                                                <el-upload
                                                        class="upload-container"
                                                        action="/api/index.php/files/save"
                                                        :show-file-list="false"
                                                        :on-success="handleAddImg1Success"
                                                        :before-upload="beforeAvatarUpload"
                                                        accept="image/png"
                                                        :data="form.add1_img"
                                                        :disabled="!isEdit">
                                                    <el-button size="middle" type="primary">选择文件</el-button>
                                                </el-upload>
                                            </div>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="13">
                                        <div class="marT20">
                                            <el-form-item label="提示文字" label-width="80px" prop="add1_tips">
                                            <!--<div class="desTitle" style="vertical-align: top;">提示文字</div>-->
                                                <el-input
                                                        type="textarea"
                                                        :autosize="{ minRows: 3, maxRows: 3}"
                                                        placeholder="文字限制64个字符内"
                                                        v-model="form.add1_tips"
                                                        class="add1TextArea" :disabled="!isEdit" :maxlength="64">
                                                </el-input>
                                            </el-form-item>
                                        </div>
                                    </el-col>
                                    <el-col :span="13">
                                        <div class="marT20 flex">
                                            <el-form-item label="按钮文字" label-width="80px" prop="add1_button">
                                            <!--<div class="desTitle">按钮文字</div>-->
                                                <el-input v-model="form.add1_button" :disabled="!isEdit" :maxlength="8"></el-input>
                                            </el-form-item>
                                        </div>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="第二步" label-width="120px">
                                    <el-col :span="13">
                                        <el-form-item label="上传图片" label-width="80px" prop="add2_img.filename" v-if="form.add2_img">
                                            <div class="flex">
                                                <!--<div class="desTitle">上传图片</div>-->
                                                <el-input v-model="form.add2_img.filename"  readonly  :disabled="!isEdit"></el-input>
                                                <el-upload
                                                        class="upload-container"
                                                        action="/api/index.php/files/save"
                                                        :show-file-list="false"
                                                        :on-success="handleAddImg2Success"
                                                        :before-upload="beforeAvatarUpload"
                                                        accept="image/png"
                                                        :data="form.add2_img"
                                                        :disabled="!isEdit">
                                                    <el-button size="middle" type="primary">选择文件</el-button>
                                                </el-upload>
                                            </div>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="13">
                                        <div class="marT20">
                                            <!--<div class="desTitle" style="vertical-align: top;">提示文字</div>-->
                                            <el-form-item label="提示文字" label-width="80px" prop="add2_tips">
                                                <el-input
                                                        type="textarea"
                                                        :autosize="{ minRows: 3, maxRows: 3}"
                                                        placeholder="文字限制64个字符内"
                                                        v-model="form.add2_tips"
                                                        class="add1TextArea"
                                                        :disabled="!isEdit"
                                                        :maxlength="64">
                                                </el-input>
                                            </el-form-item>
                                        </div>
                                    </el-col>
                                </el-form-item>
                            </el-col>
                        </el-tab-pane>
                        <el-tab-pane label="重置方式">
                            <el-col :span="24">
                                <el-form-item label="上传图片" label-width="120px" prop="reset_img.filename" v-if="form.reset_img">
                                    <el-col :span="13">
                                        <div class="flex">
                                            <el-input v-model="form.reset_img.filename" readonly  :disabled="!isEdit"></el-input>
                                            <el-upload
                                                    class="upload-container"
                                                    action="/api/index.php/files/save"
                                                    :show-file-list="false"
                                                    :on-success="handleAvatarSuccess"
                                                    :before-upload="beforeAvatarUpload"
                                                    accept="image/png"
                                                    :data="form.reset_img" :disabled="!isEdit">
                                                <el-button size="middle" type="primary">选择文件</el-button>
                                            </el-upload>
                                        </div>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="提示文字" label-width="120px"  prop="reset_tips">
                                    <el-col :span="13">
                                        <el-input
                                                type="textarea"
                                                :autosize="{ minRows: 3, maxRows: 3}"
                                                placeholder="请输入其他说明"
                                                v-model="form.reset_tips"
                                                :disabled="!isEdit"
                                                :maxlength="64">
                                        </el-input>
                                    </el-col>
                                </el-form-item>
                            </el-col>
                        </el-tab-pane>
                    </el-tabs>
                </el-form>
            </el-col>
        </el-row>
    </div>

</template>
<style>
    .upload-container{
        float: right;
    }
    .el-table__body-wrapper{
        overflow: hidden;
    }
    .upload-container{
        float: right;
        margin-left: 20px;
    }
    .flex{
        display: flex;
    }
    .desTitle{
        display: inline-block;
        padding-right: 15px;
        color: #5a5e66;
        min-width: 81px;
    }
    .marT20{
        margin-top: 20px;
    }
</style>

<script>
    import { Loading } from 'element-ui';
    import fetch from '@/utils/fetch';
    import helper from '@/utils/helper';
    import {getToken} from '@/utils/auth';
    import addTechnical from './addTechnical.vue';
    import addAttribute from './addAttribute.vue';
    export default {
        name: 'existedCategory',
        computed: {
        },
        created() {
        },
        mounted() {
            this.getDeviceInfo();
//            this.getDeviceSelectAddtype();
//            this.getDeviceSelect();
        },
        data() {
            return {
                isEdit : false,
                typeid : this.$route.query.id,
                token : getToken(),
                isLoadData : false,
                isEdit : false, //判断是否是编辑
                editText : '编辑设备信息',
                product : {},
                type : {},
                business:{},
                brand : {},
                model : {},
                form:{
                },
                addType : '',
                deviceAddTypeList : [],
                rules: {
                    type: [
                        { required: true, message: '请选择产品品类', trigger: 'change' }
                    ],
                    add_type: [
                        { required: true, message: '请选择设备添加方式', trigger: 'change' }
                    ],
                    'add1_img.filename': [
                        {validator(rule, value, callback, source, options) {
                            var errors = [];
                            if (!value) {
                                callback('添加方式的图片不能为空');
                            }
                            callback(errors);
                        }}
                    ],
                    add1_tips: [
                        { required: true, message: '请输入提示文字', trigger: 'blur' },
                        { max: 64, message: '提示文字不能超过64个字符', trigger: 'blur' },
                    ],
                    add1_button: [
                        { required: true, message: '请输入按钮文字', trigger: 'blur' },
                        { max: 8, message: '按钮文字不能超过8个字符', trigger: 'blur' },
                    ],
                    'add2_img.filename': [
                        {validator(rule, value, callback, source, options) {
                            var errors = [];
                            if (!value) {
                                callback('添加方式的图片不能为空');
                            }
                            callback(errors);
                        }}
                    ],
                    add2_tips: [
                        { required: true, message: '请输入提示文字', trigger: 'blur' },
                        { max: 64, message: '提示文字不能超过64个字符', trigger: 'blur' },
                    ],
                    'reset_img.filename': [
                        {validator(rule, value, callback, source, options) {
                            var errors = [];
                            if (!value) {
                                callback('添加方式的图片不能为空');
                            }
                            callback(errors);
                        }}
                    ],
                    reset_tips: [
                        { required: true, message: '请输入重置提示文字', trigger: 'blur' },
                        { max: 64, message: '重置提示文字不能超过64个字符', trigger: 'blur' },
                    ],
                }
            }
        },
        methods: {
            //获取设备添加方式
            getDeviceSelectAddtype(){
                fetch({
                    url: '/device/deviceAddtype',
                    method: 'post',
                    data: {
                        'token' :  this.token
                    }
                }).then(res=>{
                    this.deviceAddTypeList = res;
                })
            },
            // 获取品类详情信息
            getDeviceInfo(){
                fetch({
                    url: '/device/deviceInfo',
                    method: 'post',
                    data: {
                        'id' : this.typeid
                    }
                }).then(res=>{
                    this.form = res;
                    this.form.add_type = this.form.add_type == '0' ? '': Number(this.form.add_type);

                    this.isLoadData = true;
                    this.handleImgAddToken();
                    this.getDeviceSelectAddtype();
                })
            },

            handleImgAddToken(){
                this.form.base_img.token = this.token;
                this.form.reset_img.token = this.token;
                this.form.add1_img.token = this.token;
                this.form.add2_img.token = this.token;
            },

            handleAvatarSuccess(res, file) {
                let data = res.result;
                switch (data.type){
                    case 23 : this.form.base_img = data;this.form.base_img.token = this.token;break;
                    case 25 : this.form.reset_img = data;this.form.reset_img.token = this.token;
                }
                this.$message({
                    type: 'success',
                    message: '上传成功！'
                });
            },

            handleAddImg1Success(res,file){
                this.form.add1_img = res.result;
                this.form.add1_img.token = this.token;
                this.$message({
                    type: 'success',
                    message: '上传成功！'
                });
            },
            handleAddImg2Success(res,file){
                this.form.add2_img = res.result;
                this.form.add2_img.token = this.token;
                this.$message({
                    type: 'success',
                    message: '上传成功！'
                });
            },
            beforeAvatarUpload(file) {
                console.log(file);
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

            //删除设备
            delectDevice(){
                fetch({
                    url: '/device/deviceDel',
                    method: 'post',
                    data: {
                        'id' : this.$route.query.id
                    }
                }).then(res=>{
                    this.$message({
                        showClose: true,
                        message: '删除成功！',
                        type: 'success'
                    });
                    setTimeout(()=>{
                        this.$router.push({path: '/typeManagement/deviceManager'});
                    },2000);
                })
            },
            //编辑设备信息
            editDevice(){
                if(!this.isEdit){
                    this.isEdit = true;
                    this.editText = '确定并提交修改';
                }else{
                    this.$confirm('是否确认保存修改后品类信息？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.saveDeviceInfo();
                    }).catch(() => {
                        this.isEdit = false;
                        this.editText = '编辑设备信息';
                    });
                }
            },

            //保存品类信息事件处理
            saveDeviceInfo(){
                this.$refs['ruleForm'].validate((valid) => {
                    if(valid){
                        this.editText = '编辑设备信息';
                        this.form.token = this.token;
                        fetch({
                            url: '/device/deviceEdit',
                            method: 'post',
                            data: this.form,
                        }).then(res=>{
                            this.isEdit = false;
                            this.$message({
                                type: 'success',
                                message: '编辑设备信息成功!'
                            });
                            setTimeout(()=>{
                                this.$router.push({path: '/typeManagement/deviceManager'});
                            },2000);
                        }).catch(res=>{
                            this.$message({
                                type: 'error',
                                message: res.msg
                            });
                        })
                    }else{
                        this.$message({
                            type: 'error',
                            message:'请把表单填写完整再提交修改！'
                        });
                    }
                });

            },

            //处理删除事件
            handleDelEvent(){
                this.$confirm('是否确认删除此设备，删除不能恢复。', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.delectDevice();
                }).catch(() => {
                });
            },

            //处理返回事件
            handleBackEvent(){
                if(!this.isEdit){
                    this.$router.push({path: '/typeManagement/deviceManager'});
                }else {
                    this.$confirm('是否确认返回? 所修改的信息将不会被保存!', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$router.push({path: '/typeManagement/deviceManager'});
                    }).catch(() => {

                    });

                }
            },

            //添加技术方案
            addTechnical(){

            },

            //获取子组件传回来的功能属性方案数据
            getAttr(){

            },

            //获取子组件传回来的技术方案数据
            getTech(val){
                console.log(val);
                fetch({
                    url: 'producttype/technologyadd',
                    method: 'post',
                    data: val,
                }).then(res=>{
                    this.$message({
                        type: 'success',
                        message: '添加方案成功！'
                    });
                    this.getTechList(1);
                    this.getTechList(2);
                    this.getTechList(3);
                }).catch(res=>{
                    this.$message({
                        type: 'error',
                        message: res.msg
                    });
                })
            },
            getTechList(technology_type){
                fetch({
                    url: 'producttype/technologylists',
                    method: 'post',
                    data: {
                        'token' : getToken(),
                        'type_id' : this.typeid,
                        'technology_type' : technology_type
                    },
                }).then(res=>{
                    switch (technology_type){
                        case 1 : this.technical_wifi = res.list; break;
                        case 2 : this.technical_zigbee = res.list; break;
                        case 3 : this.technical_bluetooth = res.list; break;
                    }
                }).catch(res=>{
                    this.$message({
                        type: 'error',
                        message: res.msg
                    });
                })
            },
            //当前行row、当前列column、当前行号rowIndex、当前列号columnIndex
            arrayWifiSpanMethod({ row, column, rowIndex, columnIndex }) {
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
            arrayBlueToothSpanMethod({ row, column, rowIndex, columnIndex }) {
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
            arrayZigbeeSpanMethod({ row, column, rowIndex, columnIndex }) {
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
        components:{
            addTechnical,
            addAttribute
        }
    }
</script>
