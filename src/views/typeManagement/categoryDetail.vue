<template>
    <div class="app-container calendar-list-container">
        <el-row :gutter="30">
            <el-col :span="24">
                <el-button type="ghost">返回</el-button>
                <el-button type="primary" @click="editGory">{{editText}}</el-button>
                <el-button type="danger" @click="delectGoryModal=true;" v-show="!isEdit">删除该品类</el-button>

                <el-dialog
                        title=""
                        :visible.sync="delectGoryModal"
                        width="30%"
                        center>
                        <span>是否确认删除此品类，删除不能恢复。</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="delectGoryModal = false">取 消</el-button>
                            <el-button type="primary" @click="delectGroy">确 定</el-button>
                        </span>
                </el-dialog>

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
                                        <el-input v-model="form.english" :span="6" :disabled="!isEdit"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="所属品类" label-width="120px">
                                    <el-col :span="12">
                                        <el-select v-model="form.region" placeholder="所属品类" style="width: 100%;" :disabled="!isEdit">
                                            <el-option label="空调" value="shanghai"></el-option>
                                            <el-option label="电视" value="beijing"></el-option>
                                        </el-select>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="品类图标" label-width="120px">
                                    <el-col :span="12">
                                        <el-upload
                                                class="avatar-uploader"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                :show-file-list="false"
                                                :on-success="handleAvatarSuccess"
                                                :before-upload="beforeAvatarUpload">
                                            <img v-if="form.imageUrl[0].file_url" :src="form.imageUrl[0].file_url" class="avatar">
                                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                        </el-upload>
                                        <el-upload
                                                class="avatar-uploader"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                :show-file-list="false"
                                                :on-success="handleAvatarSuccess"
                                                :before-upload="beforeAvatarUpload">
                                            <img v-if="form.imageUrl[1].file_url" :src="form.imageUrl[1].file_url" class="avatar">
                                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                        </el-upload>
                                        <el-upload
                                                class="avatar-uploader"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                :show-file-list="false"
                                                :on-success="handleAvatarSuccess"
                                                :before-upload="beforeAvatarUpload">
                                            <img v-if="form.imageUrl[2].file_url" :src="form.imageUrl[2].file_url" class="avatar">
                                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                        </el-upload>
                                        <el-upload
                                                class="avatar-uploader"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                :show-file-list="false"
                                                :on-success="handleAvatarSuccess"
                                                :before-upload="beforeAvatarUpload">
                                            <img v-if="form.imageUrl[3].file_url" :src="form.imageUrl[3].file_url" class="avatar">
                                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                        </el-upload>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="是否高频使用" label-width="120px">
                                    <el-col :span="12">
                                        <el-checkbox-group v-model="form.highfrequency">
                                            <el-checkbox label="是" :disabled="!isEdit"></el-checkbox>
                                        </el-checkbox-group>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="是否为智能开关关联设备品类" label-width="120px" class="line25">
                                    <el-col :span="12">
                                        <el-checkbox-group v-model="form.relevance">
                                            <el-checkbox label="是" :disabled="!isEdit"></el-checkbox>
                                        </el-checkbox-group>
                                    </el-col>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="技术方案">
                        <el-col :span="24">
                            <template>
                                <el-button>添加技术方案</el-button>
                                <el-table :data="form.technical_protocols" border stripe style="width: 100%;margin-top: 15px;">
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
                                <el-button>添加功能参数</el-button>
                                <el-table :data="form.attr_list" border stripe style="width: 100%;margin-top: 15px;">
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
        margin-right: 11px;
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
</style>

<script>
    import { Loading } from 'element-ui';
    export default {
        name: 'existedCategory',
        computed: {
        },
        created() {
        },
        mounted() {
        },
        data() {
            return {
                isEdit : false, //判断是否是编辑
                editText : '编辑品类信息',
                delectGoryModal : false, //删除弹窗
                form:{
                    name : '',
                    english : '',
                    dialogImageUrl: '',
                    dialogVisible: false,
                    highfrequency : [],
                    relevance : [],
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
                    ]
                }

            }
        },
        methods: {
            handleAvatarSuccess(res, file) {
//                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            //删除技术方案
            delTechnical(id){

            },
            //删除品类
            delectGroy(){
                console.log("删除成功！");
                let loadingInstance = Loading.service();
                setTimeout(()=>{
                    loadingInstance.close();
                    this.delectGoryModal = false;
                    this.$message.success("删除成功");
                },2000);
            },
            //编辑品类信息
            editGory(){
                this.isEdit = !this.isEdit;
                this.editText =  this.isEdit ? '确定并提交修改' : '编辑品类信息';
            }
        }
    }
</script>
