<template>
    <div class="app-container calendar-list-container addCategoryPage">
        <el-row :gutter="30">
            <el-col :span="24">
                <el-button type="ghost" @click="handleBackEvent">返回</el-button>
                <el-button v-if="!isEdit" type="primary" @click="addChannel">确定并添加该渠道商</el-button>
                <el-button v-if="isEdit" type="primary" @click="editChannel">{{editText}}</el-button>
                <el-button type="danger" @click="handleDelEvent" v-if="isEdit&&!hasProduct">删除该渠道商</el-button>
            </el-col>
            <el-col :span="24" style="margin: 20px 0px;padding-bottom: 40px;">
                <div class="desTitleTop">基本信息</div>
                <el-col :span="24">
                    <el-form :rules="rules" ref="ruleForm" :model="form" label-width="80px" style="margin-top: 20px;" size="large">
                        <el-form-item label="渠道商名称" label-width="120px" prop="name">
                            <el-col :span="12">
                                <el-input v-model="form.name" :span="6" :disabled="disabled||hasProduct" placeholder=" 中文名限中文、字母、32个字符、区分大小写"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="渠道商英文" label-width="120px" prop="name_e">
                            <el-col :span="12">
                                <el-input v-model="form.name_e" :disabled="disabled||hasProduct" :span="6" placeholder=" 字母、下划线, 最多32个字符，区分大小写"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="渠道商logo" label-width="120px" style="padding-bottom: 30px;">
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
                        <el-form-item label="二维码" label-width="120px" style="padding-bottom: 30px;">
                            <el-col :span="12">
                                <p class="ttips">图标要求格式png、jpg、jpeg、gif、bmp，大小5M以内</p>
                                <div class="fileuploadItem channel">
                                    <el-upload
                                            class="avatar-uploader"
                                            :class="disabled ? 'disabled' : ''"
                                            action="/api/index.php/files/save"
                                            :show-file-list="false"
                                            :on-success="handleQrSuccess"
                                            :before-upload="beforeQrUpload"
                                            accept="image/*"
                                            :disabled="disabled"
                                            :data="qrcode">
                                        <img v-if="form.qrcode.url!=''" :src="form.qrcode.url" class="avatar">
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
        name: 'channelDetail',
        computed: {
        },
        created() {
            if(this.isEdit){
                this.getChannelInfo();
            }
        },
        mounted() {
        },
        data() {
            return {
                isEdit: this.$route.query.id ? true : false,
                token : getToken(),
                isLoadData : false,
                hasProduct:false,
                editText : '编辑渠道商信息',
                disabled:this.$route.query.id ? true : false,
                id:this.$route.query.id ? this.$route.query.id : '',
                form:{
                    "id":this.$route.query.id,
                    "name":"",
                    "name_e":"",
                    "logo":{
                        id:'',
                        type:27,
                        object:'',
                        filename:'',
                        url:'',
                        md5:''
                    },
                    "qrcode":{
                        id:'',
                        type:28,
                        object:'',
                        filename:'',
                        url:'',
                        md5:''
                    }

                },
                rules: {
                    name: [
                        { required: true, message: '请输入渠道商名称', trigger: 'blur' },
                        { max: 32, message: '渠道商名称不能超过32个字符', trigger: 'blur' },
                        { validator:letterAndCN}
                    ],
                    name_e : [
                        { required: true, message: '请输入渠道商英文', trigger: 'blur' },
                        { max: 32, message: '渠道商英文不能超过32个字符', trigger: 'blur' },
                        { validator:letterAndUnderscode}
                    ]

                },
                logo : {
                    'token' : getToken(),
                    'type' : 27,
                },
                qrcode : {
                    'token' : getToken(),
                    'type' : 28,
                },
            }
        },
        methods: {
            getChannelInfo(){
                fetch({
                    url: '/distributor/info',
                    method: 'post',
                    data: {
                        'id': this.$route.query.id
                    }
                }).then(res=>{
                    this.form.name = res.name;
                    this.form.name_e = res.name_e;
                    this.form.logo = res.logo;
                    this.form.qrcode = res.qrcode;
                    if(res.has_product){
                        this.hasProduct = true;
                    }

                });
            },
            handleLogoSuccess(res, file) {
                if(res.code!==200){
                    this.$message.error(res.msg);
                    return;
                }
                let tmp = Object.assign({},res.result);
                tmp.url = tmp.file_url;
                this.form.logo = tmp;
            },
            handleQrSuccess(res, file) {
                if(res.code!==200){
                    this.$message.error(res.msg);
                    return;
                }
                let tmp = Object.assign({},res.result);
                tmp.url = tmp.file_url;
                this.form.qrcode = tmp;
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
            beforeQrUpload(file) {
                const isLt5M = file.size / 1024 / 1024 < 5;
                if (!isLt5M) {
                    this.$message.error('请上传5M大小内的二维码图标');
                }
                return isLt5M;
            },
            //编辑渠道商信息
            editChannel(){
                if(this.disabled){
                    this.editText = '确认并提交修改';
                    this.disabled = false;
                    return false;
                }
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        if(this.form.logo.url==''||this.form.qrcode.url==''){
                            this.$message.error('请上传渠道商logo和二维码！');
                            return;
                        }
                        this.$confirm('是否确认保存修改后渠道商信息？', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(()=>{
                            fetch({
                                url: '/distributor/edit',
                                method: 'post',
                                data: this.form,
                            }).then(res => {
                                this.disabled = true;
                                this.editText = '编辑渠道商信息';
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
            addChannel(){
                this.$refs['ruleForm'].validate((valid) => {
                    if(valid){
                        if(this.form.logo.url==''||this.form.qrcode.url==''){
                            this.$message.error('请上传渠道商logo和二维码！');
                            return;
                        }
                        this.$confirm('是否确定添加该渠道商？', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(()=>{
                            fetch({
                                url: '/distributor/add',
                                method: 'post',
                                data: this.form,
                            }).then(res => {
                                this.$message({
                                    type: 'success',
                                    message: '保存成功!'
                                });
                                setTimeout(() => {
                                    this.$router.push({path: '/typeManagement/channelManager'});
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
            //处理删除事件
            handleDelEvent(){
                this.$confirm('是否确认删除此渠道商，删除不能恢复。', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteChannel();
                }).catch(() => {
                });
            },
            deleteChannel(){
                fetch({
                    url:'/distributor/delete',
                    method:'post',
                    data:{id:this.form.id}
                }).then(res=>{
                    if(res){
                        this.$message.info('删除成功！');
                        this.$router.push({path: '/typeManagement/channelManager'});
                    }
                }).catch(e=>{
                });
            },
            //处理返回事件
            handleBackEvent(){
                this.$router.push({path: '/typeManagement/channelManager'});
            }
        },

        components:{

        }
    }
</script>
