<template>
    <div class="app-container calendar-list-container addCategoryPage">
        <el-row :gutter="30">
            <el-col :span="24">
                <el-button type="ghost" @click="handleBackEvent">返回</el-button>
                <el-button v-if="add" type="primary" @click="addNetword">确定并添加该配网方式</el-button>
            </el-col>
            <el-col :span="24" style="margin: 20px 0px;padding-bottom: 40px;">
                <div class="desTitleTop">基本信息</div>
                <el-col :span="24">
                    <el-form :rules="rules" ref="ruleForm" :model="form" label-width="80px" style="margin-top: 20px;" size="large">
                        <el-form-item label="渠道商名称" label-width="120px" prop="distributors_id">
                            <el-col :span="12">
                                <el-select :disabled="!add" v-model="form.distributors_id" placeholder="请选择渠道商名称" style="width:100%">
                                    <el-option
                                            v-for="item in channelList"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="配网方式" label-width="120px" prop="network_name">
                            <el-col :span="12">
                                <el-input :readonly="!add" v-model="form.network_name" :span="6" placeholder="中英文、数字、特殊字符输入,最多32个字符，区分大小写"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="配网方式描述" label-width="120px" prop="network_des">
                            <el-col :span="12">
                                <el-input :readonly="!add" v-model="form.network_des" :maxlength="500" :rows="5" :span="6" type="textarea"></el-input>
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
    import {getToken} from '@/utils/auth';
    export default {
        name: 'addNetwork',
        computed: {
        },
        created() {
            this.getChannelList();
            if(this.$route.query.distributors_id){
                this.getInfo(this.$route.query.distributors_id);
            }
        },
        mounted() {

        },
        data() {
            return {
                token : getToken(),
                add:this.$route.query.distributors_id?false:true,
                form:{
                    "distributors_id":this.$route.query.distributors_id?parseInt(this.$route.query.distributors_id):"",
                    "network_name":"",
                    "network_des":''
                },
                channelList:[],
                rules: {
                    distributors_id: [
                        { required: true, message: '请选择渠道商名称', trigger: 'blur' },
                    ],
                    network_name : [
                        { required: true, message: '请输入配网方式', trigger: 'blur' },
                        { max: 32, message: '配网方式不能超过32个字符', trigger: 'blur' },
                    ]

                },
            }
        },
        methods: {
            //添加配网方式
            addNetword(){
                this.$refs['ruleForm'].validate((valid) => {
                    if(valid){
                        this.$confirm('是否确定添加该配网方式？', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(()=>{
                            fetch({
                                url: '/distribution/add',
                                method: 'post',
                                data: this.form,
                            }).then(res => {
                                this.$message({
                                    type: 'success',
                                    message: '保存成功!'
                                });
                                setTimeout(() => {
                                    this.$router.push({path: '/typeManagement/networkManager'});
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
            //获得渠道商列表
            getChannelList(){
                fetch({
                    url: '/distributor/lists',
                    method: 'post',
                    data: {type:1}
                }).then(res=>{
                    res.list.forEach(item=>{
                        this.channelList.push(item);
                    });
                })
            },
            getInfo(id){
                fetch({
                    url: '/distribution/get',
                    method: 'post',
                    data: {distributors_id:id}
                }).then(res=>{
                    res.forEach(v=>{
                        if(v.id==this.$route.query.id){
                            this.form.network_name = v.network_name;
                            this.form.network_des = v.network_des;
                        }
                    })
                })
            },
            //处理返回事件
            handleBackEvent(){
                this.$router.push({path: '/typeManagement/networkManager'});
            }
        },

        components:{

        }
    }
</script>
