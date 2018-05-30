<template>
    <div class="app-container calendar-list-container addCategoryPage">
        <el-row :gutter="30">
            <el-col :span="24">
                <el-button type="ghost" @click="handleBackEvent">返回</el-button>
                <el-button v-if="!isEdit" type="primary" @click="addGory">确定并添加该品类</el-button>
                <el-button v-if="isEdit" type="primary" @click="editGory">{{editText}}</el-button>
                <el-button v-if="isEdit&&disabled" type="danger" @click="handleDelEvent">删除该品类</el-button>
            </el-col>
            <el-col :span="24" style="margin: 20px 0px;padding-bottom: 40px;">
                <div class="desTitleTop">基本信息</div>
                <el-col :span="24">
                    <el-form :rules="rules" ref="ruleForm" :model="form" label-width="80px" style="margin-top: 20px;" size="large">
                        <el-form-item label="大品类名称" label-width="120px" prop="name">
                            <el-col :span="12">
                                <el-input v-model="form.name" :span="6" :disabled="disabled" placeholder="请输入大品类名称"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="大品类英文名" label-width="120px" prop="name_e">
                            <el-col :span="12">
                                <el-input v-model="form.name_e" :disabled="disabled" :span="6" placeholder="请输入大品类英文"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="品类图标" label-width="120px" style="padding-bottom: 30px;">
                            <el-col :span="12">
                                <div class="fileuploadItem bigCategory">
                                    <el-upload
                                            class="avatar-uploader"
                                            :class="disabled ? 'disabled' : ''"
                                            action="/api/index.php/producttype/iconupload"
                                            :show-file-list="false"
                                            :on-success="handleAvatarSuccess"
                                            :before-upload="beforeAvatarUpload"
                                            accept="image/png"
                                            :disabled="disabled"
                                            :data="high_light_data">
                                        <img v-if="high_light_data.file_id!=''" :src="form.icon_list.high_light.file_url" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                    <span class="file_upload_img_des">高亮状态</span>
                                </div>
                                <div class="fileuploadItem bigCategory">
                                    <el-upload
                                            class="avatar-uploader"
                                            :class="disabled ? 'disabled' : ''"
                                            action="/api/index.php/producttype/iconupload"
                                            :show-file-list="false"
                                            :on-success="handleAvatarSuccess"
                                            :before-upload="beforeAvatarUpload"
                                            accept="image/png"
                                            :disabled="disabled"
                                            :data="normal_s_data">
                                        <img v-if="normal_s_data.file_id!=''" :src="form.icon_list.normal_s.file_url" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                    <span class="file_upload_img_des">默认状态小尺寸</span>
                                </div>
                                <div class="fileuploadItem bigCategory">
                                    <el-upload
                                            class="avatar-uploader"
                                            :class="disabled ? 'disabled' : ''"
                                            action="/api/index.php/producttype/iconupload"
                                            :show-file-list="false"
                                            :on-success="handleAvatarSuccess"
                                            :before-upload="beforeAvatarUpload"
                                            accept="image/png"
                                            :disabled="disabled"
                                            :data="normal_data">
                                        <img v-if="normal_data.file_id!=''" :src="form.icon_list.normal.file_url" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                    <span class="file_upload_img_des">默认状态大尺寸</span>
                                </div>
                                <div class="fileuploadItem bigCategory">
                                    <el-upload
                                            class="avatar-uploader"
                                            :class="disabled ? 'disabled' : ''"
                                            action="/api/index.php/producttype/iconupload"
                                            :show-file-list="false"
                                            :on-success="handleAvatarSuccess"
                                            :before-upload="beforeAvatarUpload"
                                            accept="image/png"
                                            :disabled="disabled"
                                            :data="disabled_data">
                                        <img v-if="disabled_data.file_id!=''" :src="form.icon_list.disabled.file_url" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                    <span class="file_upload_img_des">不可用状态</span>
                                </div>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="品类离线提示语" label-width="120px" prop="offline_hint">
                            <el-col :span="12">
                                <el-input :rows="4" type="textarea" v-model="form.offline_hint" :disabled="disabled" :span="6" placeholder="请输入离线提示语"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="大品类是否在设备选择列表显示" label-width="120px" class="line25">
                            <el-col :span="12">
                                <el-radio-group :disabled="disabled" v-model="form.show_in_select_list">
                                    <el-radio :label="1">是</el-radio>
                                    <el-radio :label="0">否</el-radio>
                                </el-radio-group>
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
    .el-form-item__error{
        padding: 5px 15px!important;
    }
    .desTitle{
        border-bottom: 1px #ddd solid;
        line-height: 30px;
        height: 30px;
    }
    .desTitleTop{
        border-bottom: 1px #ddd solid;
        line-height: 30px;
        height: 30px;
        width: 100%;
    }

    .bigCategory .el-upload{
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 110px;
        height: 110px;
    }
    .bigCategory .el-upload:hover {
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

</style>

<script>
    import { Loading } from 'element-ui';
    import fetch from '@/utils/fetch';
    import helper from '@/utils/helper';
    import {getToken} from '@/utils/auth';
    import addTechnical from './addTechnical.vue';
    import addAttribute from './addAttribute.vue';
    export default {
        name: 'addBigCategory',
        computed: {
        },
        created() {
            if(this.isEdit){
                this.getCategoryInfo();
            }
        },
        mounted() {
        },
        data() {
            return {
                isEdit: this.$route.query.id ? true : false,
                token : getToken(),
                isLoadData : false,
                editText : '编辑品类信息',
                disabled:this.$route.query.id ? true : false,
                form:{
                    "id":this.$route.query.id,
                    "name":"",
                    "name_e":"",
                    "offline_hint":"",
                    "show_in_select_list":1,
                    "icon_list":{
                        "high_light":{
                            "file_id":"",
                            "file_url":"",
                            "file_name":""
                        },
                        "normal":{
                            "file_id":"",
                            "file_url":"",
                            "file_name":""
                        },
                        "normal_s":{
                            "file_id":"",
                            "file_url":"",
                            "file_name":""
                        },
                        "disabled":{
                            "file_id":"",
                            "file_url":"",
                            "file_name":""
                        }
                    },

                },
                rules: {
                    name: [
                        { required: true, message: '请输入大品类名称', trigger: 'blur' },
                        { max: 32, message: '大品类名称不能超过32个字符', trigger: 'blur' }
                    ],
                    name_e : [
                        { required: true, message: '请输入大品类英文名称', trigger: 'blur' },
                        { max: 32, message: '大品类英文名称不能超过32个字符', trigger: 'blur' }
                    ],
                    offline_hint:[{ required: true, message: '请输入离线提示语', trigger: 'blur' }]

                },
                high_light_data : {
                    'token' : getToken(),
                    'file_id' : '',
                    'attribute' : 'high_light'
                },
                normal_s_data : {
                    'token' : getToken(),
                    'file_id' : '',
                    'attribute' : 'normal_s'
                },
                normal_data :{
                    'token' : getToken(),
                    'file_id' : '',
                    'attribute' : 'normal'
                },
                disabled_data : {
                    'token' : getToken(),
                    'file_id' : '',
                    'attribute' : 'disabled'
                },
            }
        },
        methods: {
            getCategoryInfo(){
                fetch({
                    url: '/product/type_info',
                    method: 'post',
                    data: {
                        'id': this.$route.query.id
                    }
                }).then(res=>{
                    this.form.name = res.name;
                    this.form.name_e = res.name_e;
                    this.form.icon_list = res.icon_list;
                    this.form.offline_hint = res.offline_hint;
                    if(res.show_in_select_list!==undefined){
                        this.form.show_in_select_list = res.show_in_select_list;
                    }
                    this.handleIconList(this.form.icon_list);
                });
            },
            handleIconList(icon_list){
                this.high_light_data.file_id = icon_list.high_light.file_id;
                this.normal_s_data.file_id = icon_list.normal_s.file_id;
                this.normal_data.file_id = icon_list.normal.file_id;
                this.disabled_data.file_id = icon_list.disabled.file_id;
            },
            handleAvatarSuccess(res, file) {
                if(res.code!==200){
                    this.$message.error(res.msg);
                    return;
                }
                let data = res.result;
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
                    default:break;
                }
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
            //编辑品类信息
            editGory(){
                if(this.disabled){
                    this.editText = '确认并提交修改';
                    this.disabled = false;
                    return false;
                }
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        this.$confirm('是否确认保存修改后品类信息？', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(()=>{
                            fetch({
                                url: '/producttype/edit',
                                method: 'post',
                                data: this.form,
                            }).then(res => {
                                this.disabled = true;
                                this.editText = '编辑品类信息';
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
            //添加品类信息
            addGory(){
                this.$refs['ruleForm'].validate((valid) => {
                    if(valid){
                        this.$confirm('是否确定添加该品类？', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(()=>{
                            fetch({
                                url: '/producttype/add',
                                method: 'post',
                                data: this.form,
                            }).then(res => {
                                this.$message({
                                    type: 'success',
                                    message: '保存成功!'
                                });
                                setTimeout(() => {
                                    this.$router.push({path: '/typeManagement/bigCategory'});
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
                        this.$router.push({path: '/typeManagement/bigCategory'});
                    }, 2000);
                })
            },

            //删除品类
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
                this.$router.push({path: '/typeManagement/bigCategory'});
            }
        },

        components:{

        }
    }
</script>
