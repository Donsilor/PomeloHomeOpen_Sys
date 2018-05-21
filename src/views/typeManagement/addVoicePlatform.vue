<template>
    <div class="app-container calendar-list-container addCategoryPage">
        <el-row :gutter="30">
            <el-col :span="24">
                <el-button type="ghost" @click="handleBackEvent">返回</el-button>
                <el-button v-if="!isEdit" type="primary" @click="addVoice">确定并添加该语音平台</el-button>
                <el-button v-if="isEdit" type="primary" @click="editVoice">{{editText}}</el-button>
            </el-col>
            <el-col :span="24" style="margin: 20px 0px;padding-bottom: 40px;">
                <div class="desTitleTop">基本信息</div>
                <el-col :span="24">
                    <el-form :rules="rules" ref="ruleForm" :model="form" label-width="80px" style="margin-top: 20px;" size="large">
                        <el-form-item label="语音平台中文" label-width="120px" prop="name">
                            <el-col :span="12">
                                <el-input v-model="form.name" :span="6" :disabled="disabled" placeholder=" 中文名限中文、字母、32个字符、区分大小写"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="语音平台描述" label-width="120px" prop="desc">
                            <el-col :span="12">
                                <el-input v-model="form.desc" type="textarea" :rows="6" :disabled="disabled" :span="6" placeholder=" 请输入语音平台描述"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="语音平台logo" label-width="120px" style="padding-bottom: 30px;">
                            <el-col :span="12">
                                <p class="ttips">图标要求格式png，logo以外区域透明，大小5M以内</p>
                                <div class="fileuploadItem channel">
                                    <el-upload
                                            class="avatar-uploader"
                                            :class="disabled ? 'disabled' : ''"
                                            action="/api/index.php/files/save"
                                            :show-file-list="false"
                                            :on-success="handleLogoSuccess"
                                            :before-upload="beforeLogoUpload"
                                            accept="image/png"
                                            :disabled="disabled"
                                            :data="logo">
                                        <img v-if="form.logo.url!=''" :src="form.logo.url" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </div>
                            </el-col>
                        </el-form-item>
                    </el-form>
                </el-col>

            </el-col>
        </el-row>
    </div>

</template>
<style lang="scss">
    .addCategoryPage{
    .desTitleTop{
        border-bottom: 1px #ddd solid;
        line-height: 30px;
        height: 30px;
        width: 100%;
    }

    .channel .el-upload{
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 110px;
        height: 110px;
    }
    .channel .el-upload:hover {
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
    .avatar-uploader{
        display: inline-block;
        margin-right: 15px;
    }
    .avatar-uploader:last-child{
        margin-right: 0px;
    }
    .avatar {
        width: 110px;
        height: 110px;
        display: block;
    }
    .line25 .el-form-item__label{
        line-height: 25px;
    }
    .el-icon-delete{
        cursor: pointer;
    }
    .el-form-item__error{
        padding: 5px 15px !important;
    }
    .fileuploadItem{
        display: table-cell;
        position: relative;
    }
    .fileuploadItem .disabled .el-upload{
        background-color: #f5f7fa;
        cursor: not-allowed;
    }
    .fileuploadItem:last-child .avatar-uploader{
        margin-right: 0px!important;
    }
    .fileuploadItem .file_upload_img_des{
        position: absolute;
        top: 109px;
        text-align: center;
        color: #999;
        font-size: 12px;
        left: 57px;
        transform: translateX(-50%);
        width: 110px;
    }
    .el-tooltip__popper{
        max-width: 300px;
    }
    }
    .ttips{
        color: #999;
        font-size: 12px;
        margin: 0;
        padding: 0;
    }

</style>

<script>
    import { Loading } from 'element-ui';
    import fetch from '@/utils/fetch';
    import helper from '@/utils/helper';
    import {getToken} from '@/utils/auth';
    import {letterAndUnderscode,letterAndCN} from '@/utils/validate';
    export default {
        name: 'addVoicePlatform',
        computed: {
        },
        created() {
            if(this.isEdit){
                this.getVoiceInfo();
            }
        },
        mounted() {
        },
        data() {
            return {
                isEdit: this.$route.query.id ? true : false,
                token : getToken(),
                isLoadData : false,
                editText : '编辑语音平台信息',
                disabled:this.$route.query.id ? true : false,
                id:this.$route.query.id ? this.$route.query.id : '',
                form:{
                    "voice_id":this.$route.query.id,
                    "name":"",
                    "desc":"",
                    "logo":{
                        id:'',
                        type:29,
                        object:'',
                        filename:'',
                        url:'',
                        md5:''
                    },
                },
                rules: {
                    name: [
                        { required: true, message: '请输入语音平台中文', trigger: 'blur' },
                        { validator:letterAndCN}
                    ],
                    desc : [
                        { required: true, message: '请输入语音平台描述', trigger: 'blur' },
                    ]

                },
                logo : {
                    'token' : getToken(),
                    'type' : 29,
                },
            }
        },
        methods: {
            getVoiceInfo(){
                fetch({
                    url: '/admin/voice/info',
                    method: 'get',
                    data: {
                        'voice_id': this.$route.query.id
                    }
                }).then(res=>{
                    this.form.name = res.name;
                    this.form.desc = res.desc;
                    this.form.logo = res.logo;
                });
            },
            handleLogoSuccess(res, file) {
                if(res.code!==200){
                    this.$message.error(res.msg);
                    return;
                }
                let tmp = Object.assign({id:this.form.logo.id},res.result);
                tmp.url = tmp.file_url;
                this.form.logo = tmp;
            },
            beforeLogoUpload(file) {
                const filter = file.type === 'image/png';
                const isLt5M = file.size / 1024 / 1024 < 5;

                if (!filter) {
                    this.$message.error('请上传5M大小内PNG格式的logo');
                }
                if (!isLt5M) {
                    this.$message.error('请上传5M大小内PNG格式的logo');
                }
                return filter && isLt5M;
            },
            //编辑渠道商信息
            editVoice(){
                if(this.disabled){
                    this.editText = '确认并提交修改';
                    this.disabled = false;
                    return false;
                }
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        if(this.form.logo.url==''){
                            this.$message.error('请上传语音平台logo！');
                            return;
                        }
                        this.$confirm('是否确认保存修改后语音平台信息？', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(()=>{
                            fetch({
                                url: '/admin/voice/edit',
                                method: 'post',
                                data: this.form,
                            }).then(res => {
                                this.$message({
                                    type: 'success',
                                    message: '保存成功!'
                                });
                            }).catch(res => {
                                this.$message({
                                    type: 'error',
                                    message: res.msg
                                });
                            });
                        });
                    }
                });

            },
            //添加渠道商信息
            addVoice(){
                this.$refs['ruleForm'].validate((valid) => {
                    if(valid){
                        if(this.form.logo.url==''){
                            this.$message.error('请上传渠道商logo');
                            return;
                        }
                        this.$confirm('是否确定添加该渠道商？', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(()=>{
                            fetch({
                                url: '/admin/voice/add',
                                method: 'post',
                                data: this.form,
                            }).then(res => {
                                this.$message({
                                    type: 'success',
                                    message: '保存成功!'
                                });
                                setTimeout(() => {
                                    this.$router.push({path: '/typeManagement/voicePlatform'});
                                }, 2000);
                            }).catch(res => {
                                this.$message({
                                    type: 'error',
                                    message: res.msg
                                });
                            });
                        });
                    }
                })

            },
            //处理返回事件
            handleBackEvent(){
                this.$router.push({path: '/typeManagement/voicePlatform'});
            }
        },

        components:{

        }
    }
</script>
