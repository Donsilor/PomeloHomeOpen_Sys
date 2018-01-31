<template>
    <div class="app-container calendar-list-container addCategoryPage">
        <el-row :gutter="30">
            <el-col :span="24">
                <el-button type="ghost" @click="handleBackEvent">返回</el-button>
                <el-button type="primary" @click="addGory">确定并添加该品类</el-button>
            </el-col>
            <el-col :span="24" style="margin: 20px 0px;padding-bottom: 40px;">
                        <div class="desTitle">基本信息</div>
                        <el-col :span="24">
                            <el-form :rules="rules" ref="ruleForm" :model="form" label-width="80px" style="margin-top: 20px;" size="large">
                                <el-form-item label="子品类名称" label-width="120px" prop="name">
                                    <el-col :span="12">
                                        <el-input v-model="form.name" :span="6" placeholder="请输入子品类名称"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="子品类英文名" label-width="120px" prop="name_e">
                                    <el-col :span="12">
                                        <el-input v-model="form.name_e" :span="6" placeholder="请输入子品类英文"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="品类图标" label-width="120px" style="padding-bottom: 30px;">
                                    <el-col :span="12">
                                        <div class="fileuploadItem">
                                            <el-upload
                                                    class="avatar-uploader"
                                                    action="/api/index.php/producttype/iconupload"
                                                    :show-file-list="false"
                                                    :on-success="handleAvatarSuccess"
                                                    :before-upload="beforeAvatarUpload"
                                                    accept="image/png"
                                                    :data="high_light_data">
                                                <img v-if="high_light_data.file_id!=''" :src="form.icon_list.high_light.file_url" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                            <span class="file_upload_img_des">高亮状态</span>
                                        </div>
                                        <div class="fileuploadItem">
                                            <el-upload
                                                    class="avatar-uploader"
                                                    action="/api/index.php/producttype/iconupload"
                                                    :show-file-list="false"
                                                    :on-success="handleAvatarSuccess"
                                                    :before-upload="beforeAvatarUpload"
                                                    accept="image/png"
                                                    :data="normal_s_data">
                                                <img v-if="normal_s_data.file_id!=''" :src="form.icon_list.normal_s.file_url" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                            <span class="file_upload_img_des">默认状态小尺寸</span>
                                        </div>
                                        <div class="fileuploadItem">
                                            <el-upload
                                                    class="avatar-uploader"
                                                    action="/api/index.php/producttype/iconupload"
                                                    :show-file-list="false"
                                                    :on-success="handleAvatarSuccess"
                                                    :before-upload="beforeAvatarUpload"
                                                    accept="image/png"
                                                    :data="normal_data">
                                                <img v-if="normal_data.file_id!=''" :src="form.icon_list.normal.file_url" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                            <span class="file_upload_img_des">默认状态大尺寸</span>
                                        </div>
                                        <div class="fileuploadItem">
                                            <el-upload
                                                    class="avatar-uploader"
                                                    action="/api/index.php/producttype/iconupload"
                                                    :show-file-list="false"
                                                    :on-success="handleAvatarSuccess"
                                                    :before-upload="beforeAvatarUpload"
                                                    accept="image/png"
                                                    :data="disabled_data">
                                                <img v-if="disabled_data.file_id!=''" :src="form.icon_list.disabled.file_url" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                            <span class="file_upload_img_des">不可用状态</span>
                                        </div>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="所属大品类" label-width="120px" prop="parent_type_id">
                                    <el-col :span="12">
                                        <el-select v-model="form.parent_type_id" placeholder="所属品类" style="width: 100%;">
                                            <el-option
                                                    v-for="item in parentList"
                                                    :key="item.id"
                                                    :label="item.name"
                                                    :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-form-item>
                                <div v-if="form.parent_type_id=='0'">
                                    <el-form-item label="大品类名称" label-width="120px" prop="parent_name">
                                        <el-col :span="12">
                                            <el-input v-model="form.parent_name" :span="6" placeholder="请输入大品类名称"></el-input>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item label="大品类英文名" label-width="120px" prop="parent_name_e" v-show="form.parent_type_id=='0'">
                                        <el-col :span="12">
                                            <el-input v-model="form.parent_name_e" :span="6" placeholder="请输入大品类英文"></el-input>
                                        </el-col>
                                    </el-form-item>
                                    <el-form-item label="大品类图标" label-width="120px" style="padding-bottom: 30px;">
                                        <el-col :span="12">
                                            <div class="fileuploadItem">
                                                <el-upload
                                                        class="avatar-uploader"
                                                        action="/api/index.php/producttype/iconupload"
                                                        :show-file-list="false"
                                                        :on-success="handleAvatarSuccess"
                                                        :before-upload="beforeAvatarUpload"
                                                        accept="image/png"
                                                        :data="parent_high_light_data">
                                                    <img v-if="parent_high_light_data.file_id!=''" :src="form.parent_icon_list.high_light.file_url" class="avatar">
                                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                </el-upload>
                                                <span class="file_upload_img_des">高亮状态</span>
                                            </div>
                                            <div class="fileuploadItem">
                                                <el-upload
                                                        class="avatar-uploader"
                                                        action="/api/index.php/producttype/iconupload"
                                                        :show-file-list="false"
                                                        :on-success="handleAvatarSuccess"
                                                        :before-upload="beforeAvatarUpload"
                                                        accept="image/png"
                                                        :data="parent_normal_s_data">
                                                    <img v-if="parent_normal_s_data.file_id!=''" :src="form.parent_icon_list.normal_s.file_url" class="avatar">
                                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                </el-upload>
                                                <span class="file_upload_img_des">默认状态小尺寸</span>
                                            </div>
                                            <div class="fileuploadItem">
                                                <el-upload
                                                        class="avatar-uploader"
                                                        action="/api/index.php/producttype/iconupload"
                                                        :show-file-list="false"
                                                        :on-success="handleAvatarSuccess"
                                                        :before-upload="beforeAvatarUpload"
                                                        accept="image/png"
                                                        :data="parent_normal_data">
                                                    <img v-if="parent_normal_data.file_id!=''" :src="form.parent_icon_list.normal.file_url" class="avatar">
                                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                </el-upload>
                                                <span class="file_upload_img_des">默认状态大尺寸</span>
                                            </div>
                                            <div class="fileuploadItem">
                                                <el-upload
                                                        class="avatar-uploader"
                                                        action="/api/index.php/producttype/iconupload"
                                                        :show-file-list="false"
                                                        :on-success="handleAvatarSuccess"
                                                        :before-upload="beforeAvatarUpload"
                                                        accept="image/png"
                                                        :data="parent_disabled_data">
                                                    <img v-if="parent_disabled_data.file_id!=''" :src="form.parent_icon_list.disabled.file_url" class="avatar">
                                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                </el-upload>
                                                <span class="file_upload_img_des">不可用状态</span>
                                            </div>
                                        </el-col>
                                    </el-form-item>
                                </div>
                                <el-form-item label="是否高频使用" label-width="120px">
                                    <el-col :span="12">
                                        <el-checkbox v-model="form.is_high_frequency">是</el-checkbox>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="是否为智能开关关联设备品类" label-width="120px" class="line25">
                                    <el-col :span="12">
                                        <el-checkbox v-model="form.is_relate_switch">是</el-checkbox>
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

        .fileuploadItem .avatar-uploader{
            border: 1px dashed #d9d9d9!important;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            width: 110px;
            height: 110px;
        }
        .fileuploadItem .avatar-uploader:hover {
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
        name: 'existedCategory',
        computed: {
        },
        created() {
        },
        mounted() {
            this.getParentType();
        },
        data() {
            return {
                isLoadedTechnical : false,
                typeid : this.$route.query.id,
                token : getToken(),
                isLoadData : false,
                editText : '编辑品类信息',
                form:{
                    "id":0,
                    "name":"",
                    "name_e":"",
                    "parent_type_id":'',
                    "parent_name":"",
                    "parent_name_e":"",
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
                    "parent_icon_list":{
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
                    "is_relate_switch":false,
                    "is_high_frequency":false,

                },
                rules: {
                    name: [
                        { required: true, message: '请输入子品类名称', trigger: 'blur' },
                        { max: 32, message: '子品类名称不能超过32个字符', trigger: 'blur' }
                    ],
                    name_e : [
                        { required: true, message: '请输入子品类英文名称', trigger: 'blur' },
                        { max: 32, message: '子品类英文名称不能超过32个字符', trigger: 'blur' }
                    ],
                    parent_type_id: [
                        { required: true, message: '请选择所属品类', trigger: 'change' }
                    ],
                    parent_name: [
                        { required: true, message: '请输入大品类名称', trigger: 'blur' },
                        { max: 32, message: '大品类名称不能超过32个字符', trigger: 'blur' },
                    ],
                    parent_name_e : [
                        { required: true, message: '请输入大品类英文名称', trigger: 'blur' },
                        { required: false, message: '请输入大品类英文名称', trigger: 'blur' },
                        { max: 32, message: '大品类英文名称不能超过32个字符', trigger: 'blur' }
                    ],

                },
                technical_wifi:[],
                technical_bluetooth : [],
                technical_zigbee : [],
                parentList : [],
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
                parent_high_light_data : {
                    'token' : getToken(),
                    'file_id' : '',
                    'attribute' : 'parent_high_light'
                },
                parent_normal_s_data : {
                    'token' : getToken(),
                    'file_id' : '',
                    'attribute' : 'parent_normal_s'
                },
                parent_normal_data :{
                    'token' : getToken(),
                    'file_id' : '',
                    'attribute' : 'parent_normal'
                },
                parent_disabled_data : {
                    'token' : getToken(),
                    'file_id' : '',
                    'attribute' : 'parent_disabled'
                }
            }
        },
        methods: {

            //获取父类品类
            getParentType(){
                fetch({
                    url: '/product/parenttype_lists',
                    method: 'post',
                    data: {}
                }).then(res => {
                    let param = {
                        'id' : 0,
                        'name' : '新增品类'
                    }
                    this.parentList = res.list;
                    this.parentList.unshift(param);
                })
            },
            handleAvatarSuccess(res, file) {
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
                    case 'parent_high_light' :
                        this.form.parent_icon_list.high_light = data.parent_high_light;
                        this.parent_high_light_data.file_id = data.parent_high_light.file_id;
                        break;
                    case 'parent_normal_s' :
                        this.form.parent_icon_list.normal_s = data.parent_normal_s;
                        this.parent_normal_s_data.file_id = data.parent_normal_s.file_id;
                        break;
                    case 'parent_normal' :
                        this.form.parent_icon_list.normal = data.parent_normal;
                        this.parent_normal_data.file_id = data.parent_normal.file_id;
                        break;
                    case 'parent_disabled' :
                        this.form.parent_icon_list.disabled = data.parent_disabled;
                        this.parent_disabled_data.file_id = data.parent_disabled.file_id;
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

            //添加品类信息
            addGory(){
                this.$confirm('是否确定添加该品类？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.addGoryEvent();
                }).catch(() => {
                });
            },
            addGoryEvent(){
                this.$refs['ruleForm'].validate((valid) => {
                    if(valid){
                        this.form.is_high_frequency = this.form.is_high_frequency == true ? 1 : 0;
                        this.form.is_relate_switch = this.form.is_relate_switch == true ? 1 : 0;
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
                                this.$router.push({path: '/typeManagement/existedCategory'});
                            }, 2000);
                        }).catch(res => {
                            this.$message({
                                type: 'error',
                                message: res.msg
                            });
                        })
                    }else {
                        this.$message({
                            type: 'error',
                            message: '添加品类失败!'
                        });
                        return false;
                    }
                })

            },

            //处理返回事件
            handleBackEvent(){
                this.$router.push({path: '/typeManagement/existedCategory'});
            }
        },

        components:{

        }
    }
</script>
