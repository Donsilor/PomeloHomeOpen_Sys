<template>
    <div class="app-container calendar-list-container">
        <el-row :gutter="30">
            <el-col :span="24">
                <el-button type="ghost" @click="handleBackEvent">返回</el-button>
                <el-button type="primary" @click="confirmDevice">确认并添加该设备</el-button>
            </el-col>
            <el-col :span="24" style="margin: 20px 0px;padding-bottom: 40px;">
                <el-form ref="form" :model="form" label-width="80px" style="margin-top: 20px;" size="large" label-position="left">
                    <div class="title">基本信息</div>
                    <el-form-item label="品类" label-width="120px">
                        <el-col :span="12">
                            <el-select v-model="form.type" placeholder="请选择产品品类" style="width: 100%;" @change="changeType">
                                <el-option
                                        v-for="item in type"
                                        :key="item.type_id"
                                        :label="item.type_name"
                                        :value="item.type_id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="厂商" label-width="120px">
                        <el-col :span="12">
                            <el-select v-model="form.business" placeholder="请选择厂商" style="width: 100%;" @change="changeBusiness">
                                <el-option
                                        v-for="item in business"
                                        :key="item.business_id"
                                        :label="item.business_name"
                                        :value="item.business_id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="品牌" label-width="120px">
                        <el-col :span="12">
                            <el-select v-model="form.brand" placeholder="请选择品牌" style="width: 100%;" @change="changeBrand">
                                <el-option
                                        v-for="item in brand"
                                        :key="item.brand_id"
                                        :label="item.brand_name"
                                        :value="item.brand_id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="型号" label-width="120px">
                        <el-col :span="12">
                            <el-select v-model="form.id" placeholder="请选择型号" style="width: 100%;">
                                <el-option
                                        v-for="item in model"
                                        :key="item.product_id"
                                        :label="item.model"
                                        :value="item.product_id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="产品图片" label-width="120px">
                        <el-col :span="12">
                            <div class="flex">
                                <el-input v-model="form.base_img.filename" readonly></el-input>
                                <el-upload
                                        class="upload-container"
                                        action="/api/index.php/files/save"
                                        :show-file-list="false"
                                        :on-success="handleAvatarSuccess"
                                        :before-upload="beforeAvatarUpload"
                                        accept="image/png"
                                        :data="form.base_img">
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
                                    v-model="form.base_des">
                            </el-input>
                        </el-col>
                    </el-form-item>
                    <div class="title">添加方式</div>
                    <el-form-item label="设备添加方式" label-width="120px">
                        <el-col :span="12">
                            <el-select v-model="form.add_type" placeholder="请选择添加方式" style="width: 100%;">
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
                        <el-col :span="12">
                            <div class="flex">
                                <div class="desTitle">上传图片</div>
                                <el-input v-model="form.add1_img.filename" readonly></el-input>
                                <el-upload
                                        class="upload-container"
                                        action="/api/index.php/files/save"
                                        :show-file-list="false"
                                        :on-success="handleAddImg1Success"
                                        :before-upload="beforeAvatarUpload"
                                        accept="image/png"
                                        :data="form.add1_img">
                                    <el-button size="middle" type="primary">选择文件</el-button>
                                </el-upload>
                            </div>
                            <div class="marT20 flex">
                                <div class="desTitle" style="vertical-align: top;">提示文字</div>
                                <el-input
                                        type="textarea"
                                        :autosize="{ minRows: 3, maxRows: 3}"
                                        placeholder="文字限制64个字符内"
                                        v-model="form.add1_tips"
                                        class="add1TextArea">
                                </el-input>
                            </div>
                            <div class="marT20 flex">
                                <div class="desTitle">按钮文字</div>
                                <el-input v-model="form.add1_button"></el-input>
                            </div>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="第二步" label-width="120px">
                        <el-col :span="12">
                            <div class="flex">
                                <div class="desTitle">上传图片</div>
                                <el-input v-model="form.add2_img.filename"  readonly></el-input>
                                <el-upload
                                        class="upload-container"
                                        action="/api/index.php/files/save"
                                        :show-file-list="false"
                                        :on-success="handleAddImg2Success"
                                        :before-upload="beforeAvatarUpload"
                                        accept="image/png"
                                        :data="form.add2_img">
                                    <el-button size="middle" type="primary">选择文件</el-button>
                                </el-upload>
                            </div>
                            <div class="marT20 flex">
                                <div class="desTitle" style="vertical-align: top;">提示文字</div>
                                <el-input
                                        type="textarea"
                                        :autosize="{ minRows: 3, maxRows: 3}"
                                        placeholder="文字限制64个字符内"
                                        v-model="form.add2_tips"
                                        class="add1TextArea">
                                </el-input>
                            </div>
                        </el-col>
                    </el-form-item>
                    <div class="title">重置方式</div>
                    <el-form-item label="上传图片" label-width="120px">
                        <el-col :span="12">
                            <div class="flex">
                                <el-input v-model="form.reset_img.filename" readonly></el-input>
                                <el-upload
                                        class="upload-container"
                                        action="/api/index.php/files/save"
                                        :show-file-list="false"
                                        :on-success="handleAvatarSuccess"
                                        :before-upload="beforeAvatarUpload"
                                        accept="image/png"
                                        :data="form.reset_img">
                                    <el-button size="middle" type="primary">选择文件</el-button>
                                </el-upload>
                            </div>

                        </el-col>
                    </el-form-item>
                    <el-form-item label="提示文字" label-width="120px">
                        <el-col :span="12">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 3, maxRows: 3}"
                                    placeholder="请输入其他说明"
                                    v-model="form.reset_tips">
                            </el-input>
                        </el-col>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
    .title{
        height: 30px;
        border-bottom: 1px #ededed solid;
        width: 80%;
        margin-bottom: 30px;
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
    .add1TextArea{
        display: inline-block;
        vertical-align: bottom;
        margin-top: 0px;
    }
    .marT20{
        margin-top: 20px;
    }
    .app-container{
        padding: 20px 40px;
    }
</style>

<script>
    import { Loading } from 'element-ui';
    import fetch from '@/utils/fetch';
    import helper from '@/utils/helper';
    import {getToken} from '@/utils/auth';
    export default {
        name: 'addDevice',
        computed: {
        },
        created() {
        },
        mounted() {
            this.getDeviceSelect();
            this.getDeviceSelectAddtype();
        },
        data() {
            return {
                lists : '',
                typeid : this.$route.query.id,
                token : getToken(),
                product : {},
                type : {},
                business:{},
                brand : {},
                model : {},
                form:{
                    type : '',
                    id_type : '',   //设备类型,1:品牌类型，2：产品类型'
                    business : '',
                    brand : '',
                    id : '',
                    base_des :'',
                    add_type : '', //设备添加方式
                    base_img : {
                        type : 23,
                        token : getToken()
                    },
                    add1_tips : '',
                    add1_button : '',
                    add1_img : {
                        'type' : '24',
                        'token' : getToken()
                    },
                    add2_img : {
                        'type' : '24',
                        'token' : getToken()
                    },
                    reset_img : {
                        'type' : '25',
                        'token' : getToken()
                    },
                    reset_tips :''


                },
                deviceAddTypeList : []
            }
        },
        methods: {
            changeType(val){
                console.log(val);
                this.business = this.lists.find((x) => x.type_id === val).business;
                console.log(this.business);
            },
            changeBusiness(val){
                this.brand = this.business.find((x) => x.business_id === val).brand;
                console.log(this.brand);
            },
            changeBrand(val){
                console.log(val);
                this.model = this.brand[0].model;
                console.log(this.model);
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
            //获取下拉选择列表
            getDeviceSelect(){
                fetch({
                    url: '/device/deviceSelect',
                    method: 'post',
                    data: {
                        'token' :  this.token
                    }
                }).then(res=>{
                    this.type = res;
                    this.lists = res;
                })
            },
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

            //处理返回事件
            handleBackEvent(){
                this.$router.push({path: '/typeManagement/deviceManager'});
            },
            confirmDevice(){
                this.form.id_type = this.form.id ? 2 : 1;
                this.form.id = this.form.id ? this.form.id : this.form.type;
                console.log(this.form.id_type);
                fetch({
                    url: '/device/deviceAdd',
                    method: 'post',
                    data: this.form
                }).then(res=>{
                    this.$message({
                        type: 'success',
                        message: '新增设备成功！'
                    });
                    setTimeout(()=>{
                        this.$router.push({path: '/typeManagement/deviceManager'});
                    },2000);
                }).catch(error=>{
                    this.$message({
                        type: 'error',
                        message: error.msg
                    });
                })
            }
        },
        components:{

        }
    }
</script>
