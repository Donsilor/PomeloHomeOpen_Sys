<template>
    <div class="app-container calendar-list-container">
        <el-row :gutter="30">
            <el-col :span="24">
                <el-button type="ghost" @click="handleBackEvent">返回</el-button>
                <el-button type="primary" @click="editGory">{{editText}}</el-button>
                <el-button type="danger" @click="handleDelEvent" v-show="!isEdit">删除该品类</el-button>
            </el-col>
            <el-col :span="24" style="margin: 20px 0px;padding-bottom: 40px;">
                <el-tabs type="border-card">
                    <el-tab-pane label="基本信息">
                        <el-col :span="24">
                            <el-form ref="form" :model="form" label-width="80px" style="margin-top: 20px;" size="large">
                                <el-form-item label="子品类名称" label-width="120px">
                                    <el-col :span="12">
                                        <el-input v-model="form.name" :span="6" :disabled="!isEdit"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="子品类英文名" label-width="120px">
                                    <el-col :span="12">
                                        <el-input v-model="form.name_e" :span="6" :disabled="!isEdit"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="所属品类" label-width="120px" v-if="isEdit">
                                    <el-col :span="12">
                                        <el-select v-model="form.parent_type_id" placeholder="所属品类" style="width: 100%;" :disabled="!isEdit">
                                            <el-option
                                                    v-for="item in parentList"
                                                    :key="item.id"
                                                    :label="item.name"
                                                    :value="item.id">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="所属品类" label-width="120px" v-else="isEdit">
                                    <el-col :span="12">
                                        <el-input v-model="form.parent_type_name" :span="6" :disabled="!isEdit"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="品类图标" label-width="120px" v-if="isLoadData">
                                    <el-col :span="12">
                                        <div class="fileuploadItem">
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
                                                <img v-if="high_light_data.file_id!=''" :src="form.icon_list.high_light.file_url" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                            <span class="file_upload_img_des">高亮状态</span>
                                        </div>
                                        <div class="fileuploadItem">
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
                                                <img v-if="normal_s_data.file_id!=''" :src="form.icon_list.normal_s.file_url" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                            <span class="file_upload_img_des">默认状态小尺寸</span>
                                        </div>
                                        <div class="fileuploadItem">
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
                                                <img v-if="form.icon_list.normal!=''" :src="form.icon_list.normal.file_url" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                            <span class="file_upload_img_des">默认状态大尺寸</span>
                                        </div>
                                        <div class="fileuploadItem">
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
                                                <img v-if="form.icon_list.disabled!=''" :src="form.icon_list.disabled.file_url" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                            <span class="file_upload_img_des">不可用状态</span>
                                        </div>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="是否高频使用" label-width="120px">
                                    <el-col :span="12">
                                        <el-checkbox v-model="form.is_high_frequency" :disabled="!isEdit">是</el-checkbox>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="是否为智能开关关联设备品类" label-width="120px" class="line25">
                                    <el-col :span="12">
                                        <el-checkbox v-model="form.is_relate_switch" :disabled="!isEdit">是</el-checkbox>
                                    </el-col>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="技术方案">
                        <el-col :span="24">
                            <template>
                                <!--<addTechnical v-show="isEdit"></addTechnical>-->
                                <addTechnical></addTechnical>
                                <!--<el-button v-show="isEdit" @click="addTechnical">添加技术方案</el-button>-->
                                <el-table :data="technical_protocols" border stripe style="width: 100%;margin-top: 15px;">
                                    <el-table-column prop="protocal" label="技术方案" width="250"></el-table-column>
                                    <el-table-column prop="company" label="模组厂商" width="250"></el-table-column>
                                    <el-table-column  prop="chip" label="模组芯片"></el-table-column>
                                    <el-table-column label="操作"  width="130" align="center" v-if="isEdit">
                                        <template slot-scope="scope">
                                            <i class="el-icon-delete" @click="delTechnical(scope.row.id)"></i>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </template>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="功能属性">
                        <el-col :span="24">
                            <template>
                                <el-button v-show="isEdit">添加功能参数</el-button>
                                <el-table :data="attr_list" border stripe style="width: 100%;margin-top: 15px;">
                                    <el-table-column label="No." width="80" type="index" align="center">
                                    </el-table-column>
                                    <el-table-column prop="node_id" label="Node_ID" width="250" align="center"></el-table-column>
                                    <el-table-column prop="method" label="method" align="center"></el-table-column>
                                    <el-table-column prop="key" label="key" align="center"></el-table-column>
                                    <el-table-column prop="type" label="Type" align="center"></el-table-column>
                                    <el-table-column  prop="value" label="value" align="center"></el-table-column>
                                    <el-table-column prop="remark" label="Remark" align="center"></el-table-column>
                                    <el-table-column label="操作"  width="100" align="center" v-if="isEdit">
                                        <template slot-scope="scope">
                                            <i class="el-icon-delete" @click="delTechnical(scope.row.id)"></i>
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
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
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
</style>

<script>
    import { Loading } from 'element-ui';
    import fetch from '@/utils/fetch';
    import helper from '@/utils/helper';
    import {getToken} from '@/utils/auth';
    import addTechnical from './addTechnical.vue';
    export default {
        name: 'existedCategory',
        computed: {
        },
        created() {
        },
        mounted() {
            this.getTypeInfo();
            this.getParentType();
        },
        data() {
            return {
                isLoadData : false,
                isEdit : false, //判断是否是编辑
                editText : '编辑品类信息',
                form:{
                    name : '',
                    english : '',
                    dialogImageUrl: '',
                    dialogVisible: false,
                    imageUrl : [
                        {
                            "file_url" : ''
                        },
                        {
                            "file_url" : ''
                        },
                        {
                            "file_url" : ''
                        },
                        {
                            "file_url" : ''
                        }
                    ],

                },
                attr_list :[
                    {
                        node_id: 'switch',
                        value: 'on/off',
                        method : 'set/get/report',
                        key : 'switch',
                        type : 'string',
                        remark : '开/关'
                    },
                    {
                        node_id: 'switch',
                        value: 'cold',
                        method : 'set/get/report',
                        key : 'switch',
                        type : 'string',
                        remark : '开/关'
                    },
                    {
                        node_id: 'switch',
                        value: 'auto',
                        method : 'set/get/report',
                        key : 'switch',
                        type : 'string',
                        remark : '开/关'
                    }
                ],
                technical_protocols:[
                    {
                        protocal : 'wifi技术方案',
                        company : '高通',
                        chip : 'QCA4004'
                    },
                    {
                        protocal : 'wifi技术方案',
                        company : '高通',
                        chip : 'QCA4004'
                    },
                    {
                        protocal : 'wifi技术方案',
                        company : '高通',
                        chip : 'QCA4004'
                    },{
                        protocal : 'wifi技术方案',
                        company : '高通',
                        chip : 'QCA4004'
                    }
                ],
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
                }
            }
        },
        methods: {
            // 获取品类详情信息
            getTypeInfo(){
                fetch({
                    url: '/product/type_info',
                    method: 'post',
                    data: {
                        'id' : this.$route.query.id
                    }
                }).then(res=>{
                    this.form = res;
                    this.form.is_high_frequency = this.form.is_high_frequency  == 1 ? true : false;
                    this.form.is_relate_switch = this.form.is_relate_switch  == 1 ? true : false;
                    this.handleIconList(this.form.icon_list);
                    this.isLoadData = true;
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
                    data: {
                    }
                }).then(res=>{
                    this.parentList = res.list;
                    console.log(this.parentList);
                })
            },
            handleAvatarSuccess(res, file) {
                console.log(res);
                console.log(file);
                console.log(res.result);
                let data = res.result;
                switch (res.result.type){
                    case 'high_light' : this.form.icon_list.high_light = data.high_light; this.high_light_data.file_id = data.high_light.file_id; break;
                    case 'normal_s' : this.form.icon_list.normal_s = data.normal_s; this.normal_s_data.file_id = data.normal_s.file_id;break;
                    case 'normal' : this.form.icon_list.normal = data.normal; this.normal_data.file_id = data.normal.file_id;break;
                    case 'disabled' : this.form.icon_list.disabled = data.disabled;this.disabled_data.file_id = data.disabled.file_id ;break;
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
            delTechnical(id){

            },

            //删除品类
            delectGroy(){
                fetch({
                    url: '/producttype/del',
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
                        this.$router.push({path: '/typeManagement/existedCategory'});
                    },2000);
                })
            },
            //编辑品类信息
            editGory(){
                if(!this.isEdit){
                    this.isEdit = true;
                    this.editText = '确定并提交修改';
                }else{
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

            //保存品类信息事件处理
            saveGoryInfo(){
                this.isEdit = false;
                this.editText = '编辑品类信息';
                fetch({
                    url: '/product/edit',
                    method: 'post',
                    data: this.form,
                }).then(res=>{
                    if(res.code == 200){
                        this.isEdit = false;
                        setTimeout(()=>{
                            this.$message({
                                type: 'success',
                                message: '保存成功!'
                            });
                        },1000);
                    }
                })
            },

            //处理删除事件
            handleDelEvent(){
                this.$confirm('是否确认删除此品类，删除不能恢复。', '提示', {
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
                if(!this.isEdit){
                    this.$router.push({path: '/typeManagement/existedCategory'});
                }else {
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

            }
        },
        components:{
            addTechnical
        }
    }
</script>
